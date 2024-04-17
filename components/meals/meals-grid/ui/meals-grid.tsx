import { MealItem } from '@/components/meals/meals-item'
import { MealsGridProps } from '@/lib/meals'

import s from '@/components/meals/meals-grid/style/meals-grid.module.scss'

export const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={s.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}
