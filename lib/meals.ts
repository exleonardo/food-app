import fs from 'fs'

import { MealType } from '@/lib/actions'

const sql = require('better-sqlite3')

const slugify = require('slugify')

import xss from 'xss'

const db = sql('meals.db')

export type MealsGridProps = {
  meals: Array<MealItemProps>
}
export type MealItemProps = {
  creator: string
  creator_email: string
  id: string
  image: string
  instructions: string
  slug: string
  summary: string
  title: string
}

export const getMeals = async (): Promise<MealItemProps[]> => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = db.prepare('SELECT * FROM meals').all()

  if (!res) {
    return []
  }

  return res as MealItemProps[]
}
export const getMeal = (slug: string): MealItemProps => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as MealItemProps
}
export const saveMeal = async (meal: MealType): Promise<void> => {
  meal.slug = slugify(meal.title, { lower: true })

  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split('.').pop()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer()

  stream.write(Buffer.from(bufferedImage), error => {
    if (error) {
      throw new Error('Saving image failed')
    }
  })

  // @ts-ignore
  meal.image = `/images/${fileName}`
  db.prepare(
    `
  INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES ( 
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,  
         @image,
         @slug) `
  ).run(meal)
}
