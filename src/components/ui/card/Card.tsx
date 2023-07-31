import { FC } from 'react'

import s from './Card.module.scss'

type CardProps = {
  children: React.ReactNode
}
export const Card: FC<CardProps> = ({ children }) => {
  return <div className={s.cardWrapper}>{children}</div>
}
