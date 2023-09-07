import { Link, useNavigate } from 'react-router-dom'

import Logo from '../../../../public/Logo.svg'
import { Button } from '../button'

import s from './Header.module.scss'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={s.Navbar}>
      <img src={Logo} alt="Cards Logo" onClick={() => navigate('/')} />
      <Link to={'/signIn'}>
        <Button>Sign in</Button>
      </Link>
    </div>
  )
}
