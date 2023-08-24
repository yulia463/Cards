import { Link } from 'react-router-dom'

import Logo from '../../../../public/Logo.svg'
import { Button } from '../button'

import s from './Header.module.scss'

export const Header = () => {
  return (
    <div className={s.Navbar}>
      <img src={Logo} alt="Cards Logo" />
      <Link to={'/signIn'}>
        <Button>Sign up</Button>
      </Link>
    </div>
  )
}
