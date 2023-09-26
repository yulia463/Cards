import React, { FC } from 'react'

import { Link } from 'react-router-dom'

import { Button } from '../button'
import { Dropdown } from '../dropdown/dropdown.tsx'
import { AvatarForDropdownIcon } from '../icons/avatarForDropdownIcon.tsx'
import { Logo } from '../icons/LogoIcon.tsx'
import { LogOutIcon } from '../icons/logOutIcon.tsx'
import { PersonIcon } from '../icons/personIcon.tsx'
import { Typography } from '../typography'

import s from './Header.module.scss'

import { ResponseUserType } from 'src/services/types.ts'

type HeaderProps = {
  data?: ResponseUserType | null
}
export const Header: FC<HeaderProps> = ({ data }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const onClickHandler = () => {
    setDropdownOpen(prev => !prev)
  }

  return (
    <div className={s.headerBlock}>
      <div className={s.contentHeader}>
        <Button as={Link} to="/" variant={'link'} className={s.logo}>
          <Logo />
        </Button>
        {!data && <Button variant={'primary'}>Sign In</Button>}
        {data && (
          <div className={s.avatar_menu}>
            <Typography variant={'subtitle1'} className={s.menu_name}>
              {data.name}
            </Typography>
            <div onClick={onClickHandler}>
              <AvatarForDropdownIcon />
            </div>
            <Dropdown
              isDropdownOpen={dropdownOpen}
              options={[
                {
                  icon: <AvatarForDropdownIcon />,
                  link: (
                    <div>
                      <div>Ivan</div>
                      <div> j&johnson@gmail.com</div>
                    </div>
                  ),
                },
                {
                  icon: <PersonIcon />,
                  link:
                      <Link to="/profile">
                          <span>My profile</span>
                      </Link>,
                },
                {
                  icon: <LogOutIcon />,
                  link:
                      <Link to="/signIn">
                      <span>Sign Out</span>
                  </Link>,
                },
              ]}
            />
          </div>
        )}
      </div>
    </div>
  )
}
//settings это для дроп дауна
