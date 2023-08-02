import { Link } from 'react-router-dom'

import { Button } from '../../ui'
import Card from '../../ui/card/Card.tsx'
import { EmailIcon } from '../../ui/icons/emailIcon.tsx'

import s from './checkEmail.module.scss'

export const CheckEmail = () => {
  return (
    <div className={s.forgot}>
      <Card className={s.card}>
        <form>
          <div className={s.title}>Check Email</div>
          <div className={s.icon}>{<EmailIcon />}</div>
          <div className={s.account}>We’ve sent an Email with instructions to example@mail.com</div>
          <Link to={'/SignIn'}>
            {' '}
            <Button className={s.button} fullWidth type={'submit'}>
              Back to Sign In
            </Button>
          </Link>
        </form>
      </Card>
    </div>
  )
}
