import { PropsWithChildren } from 'react'

import { MainHeader } from '@/components/main-header'
import { Metadata, NextPage } from 'next'

import './globals.scss'

export const metadata: Metadata = {
  description: 'Your first NextJS app!',
  title: 'NextJS Course App',
}

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang={'en'}>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
