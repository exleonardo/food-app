import sql from 'better-sqlite3'

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
