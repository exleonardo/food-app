'use client'
import { PropsWithChildren } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from '../style/nav-link.module.scss'

type NavLinkProps = {
  href: string
} & PropsWithChildren
export const NavLink = ({ children, href }: NavLinkProps) => {
  const path = usePathname()

  return (
    <Link className={path.startsWith(href) ? `${s.link} ${s.active}` : s.link} href={href}>
      {children}
    </Link>
  )
}
