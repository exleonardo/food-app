import communityIcon from '@/assets/icons/community.png'
import eventsIcon from '@/assets/icons/events.png'
import mealIcon from '@/assets/icons/meal.png'
import Image from 'next/image'

import s from './page.module.scss'

export default function CommunityPage() {
  return (
    <>
      <header className={s.header}>
        <h1>
          One shared passion: <span className={s.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={s.main}>
        <h2>Community Perks</h2>

        <ul className={s.perks}>
          <li>
            <Image alt={'A delicious meal'} src={mealIcon} />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image alt={'A crowd of people, cooking'} src={communityIcon} />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image alt={'A crowd of people at a cooking event'} src={eventsIcon} />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  )
}
