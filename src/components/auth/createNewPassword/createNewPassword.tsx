import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../ui'
import { Card } from '../../ui/card/Card.tsx'
import { PasswordTextField } from '../../ui/passwordTextField'

import s from './createNewPassword.module.scss'
import {useResetPasswordMutation} from "src/services/auth-api.ts";

const loginSchema = z.object({
  password: z.string().min(3),
})

type FormValues = z.infer<typeof loginSchema>

export const CreateNewPassword = () => {

  const params = useParams<{ token: string }>()
  const navigate = useNavigate()
  console.log(params)
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: ''
    },
  })
  const [setNewPassword] = useResetPasswordMutation()
  const onSubmit = (data: FormValues) => {
    console.log(params.token , "token")
    console.log(params,'params')
    setNewPassword({ password: data.password, token: params.token })
    navigate('/signIn')
  }

  return (
    <div className={s.forgot}>
      <Card className={s.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          </div>
          <div className={s.account}>
            Create new password and we will send you further instructions to email
          </div>
          <Button
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
