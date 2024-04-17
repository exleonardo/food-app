import { MealItemProps } from '@/lib/meals'
import Image from 'next/image'
import Link from 'next/link'

import s from '../style/meals-item.module.scss'

export const MealItem = ({ creator, image, slug, summary, title }: MealItemProps) => {
  return (
    <article className={s.meal}>
      <header>
        <div className={s.image}>
          <Image alt={title} fill src={image} />
        </div>
        <div className={s.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={s.content}>
        <p className={s.summary}>{summary}</p>
        <div className={s.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  )
}
