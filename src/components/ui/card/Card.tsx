import s from './Card.module.scss'
import {FC} from "react";

type CardProps = {
  children: React.ReactNode
}
const Card: FC<CardProps> = ({ children }) => {
  return <div className={s.cardWrapper}>{children}</div>
}

export default Card
