import { Card } from '../card/Card.tsx'

import s from './dropdown.module.scss'

type DropdownProps = {
  // options: React.ReactNode[]
  options: {
    icon?: React.ReactNode
    link: React.ReactNode
  }[]
  isDropdownOpen?: boolean
}

export const Dropdown: React.FC<DropdownProps> = ({ options, isDropdownOpen }) => {
  return (
    <>
      {isDropdownOpen && (
        <div className={s.content}>
          <div className={s.triangle}></div>
          <div className={s.triangleBackground}></div>
          <Card className={s.card}>
            {options.map((el, index) => {
              return (
                <div className={s.optionWrapper} key={index}>
                  <div className={s.option}>
                    {el.icon}
                    {el.link}
                  </div>
                </div>
              )
            })}
          </Card>
        </div>
      )}
    </>
  )
}
