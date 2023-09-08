import { FC } from 'react'

import { Link } from 'react-router-dom'

import { useLogoutMutation } from '../../../services/auth.tsx'
import { Button } from '../button'
import { Dropdown } from '../dropdown/dropdown.tsx'
import { AvatarForDropdownIcon } from '../icons/avatarForDropdownIcon.tsx'
import { Logo } from '../icons/LogoIcon.tsx'
import { Profile } from '../profile'
import { ProfileBlock } from '../profile/ProfileBlock.tsx'
import { Typography } from '../typography'

import s from './Header.module.scss'

import { ResponseUserType } from 'services/types.ts'
import {LogOutIcon} from "../icons/logOutIcon.tsx";
type HeaderProps = {
  data?: ResponseUserType | null
}
export const Header: FC<HeaderProps> = ({ data }) => {
 // const navigate = useNavigate()
  const [logout] = useLogoutMutation()
  const logoutHandler = () => {
    logout()
  }
  const dropDownMenu = [
    { id: 1, component: <ProfileBlock data={data} /> },
    {
      id: 2,
      component: (
        <Button as={Link} to={'/profile'} variant={'link'} className={s.buttonDrop}>
          <Profile />
          <Typography variant={'caption'}>My Profile</Typography>
        </Button>
      ),
    },
    {
      id: 3,
      component: (
        <Button variant={'link'} className={s.buttonDrop} onClick={logoutHandler}>
          <LogOutIcon />
          <Typography variant={'caption'}>Sign Out</Typography>
        </Button>
      ),
    },
  ]

  //   return (
  //     <div className={s.Navbar}>
  //       <img src={Logo} alt="Cards Logo" onClick={() => navigate('/')} />
  //       <Link to={'/signIn'}>
  //         <Button>Sign in</Button>
  //       </Link>
  //     </div>
  //   )
  // }

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
            <Dropdown
              trigger={
                <AvatarForDropdownIcon
                   src={data.avatar}
                  items={dropDownMenu}
                />
              }
            />
          </div>
        )}
      </div>
    </div>
  )
}
