import logoImg from '@/assets/logo.png'
import { MainHeaderBackground } from '@/components/main-header-background'
import Image from 'next/image'
import Link from 'next/link'

import s from '../style/main-header.module.scss'

export const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={s.header}>
        <Link className={s.logo} href={'/'}>
          <Image alt={'logoImg'} priority src={logoImg} />
          next level food
        </Link>
        <nav className={s.nav}>
          <ul>
            <li>
              <Link href={'/meals'}>Browse Meals</Link>
            </li>

            <li>
              <Link href={'/community'}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
