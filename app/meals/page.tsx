import { Suspense } from 'react'

import { MealsGrid } from '@/components/meals'
import { getMeals } from '@/lib/meals'
import { Metadata } from 'next'
import Link from 'next/link'

import s from './page.module.scss'

export const metadata: Metadata = {
  description: 'Browse the delicious meals shared by our vidrant community',
  title: 'All Meals',
}
const Meals = async () => {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <header className={s.header}>
        <h1>
          Delicious meals, created <span className={s.highlight}>by you</span>
        </h1>
        <p>Choose you favorite recipe and cook it yourself. It is easy an fun</p>
        <p className={s.cta}>
          <Link href={'meals/share'}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={s.main}>
        <Suspense fallback={<p className={s.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
