import { useNavigate } from 'react-router-dom'

import { Button, TextField } from '../../ui'
import { Card } from '../../ui/card/Card.tsx'

import s from './createNewPassword.module.scss'

export const CreateNewPassword = () => {
  const navigate = useNavigate()

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
          <Button
            onClick={() => navigate('/createNewPassword')}
            className={s.button}
            fullWidth
            type={'submit'}
          >
            Create New Password
          </Button>
        </form>
      </Card>
    </div>
  )
}
