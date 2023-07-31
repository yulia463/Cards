import { Link } from 'react-router-dom'

import { Button } from '../button'

import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={s.Navbar}>
      <h1>Cards project</h1>
      <Link to={'/login'}>
        <Button>Sign up</Button>
      </Link>
    </div>
  )
}
