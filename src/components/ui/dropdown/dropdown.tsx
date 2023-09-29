import { ReactNode } from 'react'

import { Card } from '../card/Card.tsx'

import s from './dropdown.module.scss'

type DropdownProps = {
  // options: React.ReactNode[]
  // options: {
  //   icon?: React.ReactNode
  //   link: React.ReactNode
  // }[]
  children:ReactNode
  isDropdownOpen?: boolean
  trigger?: ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ children, isDropdownOpen }) => {
  return (
    <>
      {isDropdownOpen && (
        <div className={s.content}>
          <div className={s.triangle}></div>
          <div className={s.triangleBackground}></div>
          <Card className={s.card}>
            {/*{options.map((el, index) => {*/}
            {/*  return (*/}

            {/*  )*/}
            {/*})}*/}
            {children}
          </Card>
        </div>
      )}
    </>
  )
}
