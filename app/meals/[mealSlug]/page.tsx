import { getMeal } from '@/lib/meals'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import s from './page.module.scss'

type MealDetailsPageType = {
  params: { mealSlug: string }
}
export default function MealDetailsPage({ params }: MealDetailsPageType) {
  const meal = getMeal(params.mealSlug)

  if (!meal) {
    notFound()
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

  return (
    <>
      <header className={s.header}>
        <div className={s.image}>
          <Image alt={meal.title} fill src={meal.image} />
        </div>
        <div className={s.headerText}>
          <h1>{meal.title}</h1>
          <p className={s.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={s.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={s.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  )
}
