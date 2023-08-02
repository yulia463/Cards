import { FC } from 'react'

import s from './Card.module.scss'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={`${s.cardWrapper} ${className}`}>{children}</div>
}
