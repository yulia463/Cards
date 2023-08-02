import { Link } from 'react-router-dom'

import { Button, TextField } from '../../ui'
import { Card } from '../../ui/card/Card.tsx'

import s from './createNewPassword.module.scss'

export const CreateNewPassword = () => {
  return (
    <div className={s.forgot}>
      <Card className={s.card}>
        <form>
          <div className={s.title}>Create new password</div>
          <div className={s.inputPassword}>
            <TextField placeholder={'Password'} label={'Password'} name={'password'} />
          </div>
          <div className={s.account}>
            Create new password and we will send you further instructions to email
          </div>
          <Link to={'/createNewPassword'}>
            {' '}
            <Button className={s.button} fullWidth type={'submit'}>
              Create New Password
            </Button>
          </Link>
        </form>
      </Card>
    </div>
  )
}
