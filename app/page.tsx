import { ImageSlideshow } from '@/components/images-slideshow'
import Link from 'next/link'

import s from './page.module.scss'

export default function Home() {
  return (
    <>
      <header className={s.header}>
        <div className={s.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={s.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={s.cta}>
            <Link href={'/community'}>Join the Community</Link>
            <Link href={'/meals'}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={s.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world.
            It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>

        <section className={s.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world.
            It&apos;s a place to discover new dishes, and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect with other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}
