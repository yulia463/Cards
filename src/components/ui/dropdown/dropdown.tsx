import React, { ReactNode } from 'react'

import { Card } from '../card/Card.tsx'

import s from './dropdown.module.scss'

type DropdownProps = {
  children: ReactNode
  isDropdownOpen?: boolean
  trigger?: ReactNode
}
// если отрисовывать мапом
// const options = [
//   {
//     icon: <PlayIcon />,
//     link: <span>Learn</span>,
//   },
//   {
//     icon: <PenIcon />,
//     link: <span>Edit</span>,
//   },
//   {
//     icon: <DeleteIcon />,
//     link: <span>Delete</span>,
//   },
// ]
export const Dropdown: React.FC<DropdownProps> = ({ children, isDropdownOpen }) => {
  return (
    <>
      {isDropdownOpen && (
        <div className={s.content}>
          <div className={s.triangle}></div>
          <div className={s.triangleBackground}></div>
          <Card className={s.card}>
            {children}
          </Card>
        </div>
      )}
    </>
  )
}
