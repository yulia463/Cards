import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../ui'
import { Card } from '../../ui/card/Card.tsx'
import { PasswordTextField } from '../../ui/passwordTextField'

import s from './createNewPassword.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty('Enter password').min(3),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const CreateNewPassword = () => {
  const {
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
  const navigate = useNavigate()

  return (
    <div className={s.forgot}>
      <Card className={s.card}>
        <form>
          <div className={s.title}>Create new password</div>
          <div className={s.inputPassword}>
            <Controller
              control={control}
              render={({ field }) => (
                <PasswordTextField
                  placeholder={'Password'}
                  label={'Password'}
                  errorMessage={errors?.password?.message ?? ''}
                  value={field.value}
                  name={'password'}
                  onChange={field.onChange}
                />
              )}
              name={'password'}
            />
            {/*<TextField placeholder={'Password'} label={'Password'} name={'password'} />*/}
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
