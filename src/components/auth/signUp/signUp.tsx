import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button, TextField } from '../../ui'
import { Card } from '../../ui/card/Card.tsx'
import { PasswordTextField } from '../../ui/passwordTextField/passwordTextField'

import s from './signUp.module.scss'
import {useSignUpMutation} from "src/services/auth-api.ts";

const schema = z
    .object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
  password: z.string().nonempty('Enter password').min(3),
  confirmPassword: z.string().nonempty('Enter password').min(3),
})
    .refine(data => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: "Password don't match",
    })

type FormType = z.infer<typeof schema>

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const navigate = useNavigate()
  const [signUp] = useSignUpMutation()

  const onSubmit = (data: FormType) => {
    signUp({ email: data.email, password: data.password, sendConfirmationEmail: false })
        .unwrap()
        .then(() => {
          navigate('/signIn')
        })
        .catch(err => {
          console.log(err)
        })
  }

  return (
    <div className={s.signUp}>
      <DevTool control={control} />
      <Card className={s.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <div className={s.title}>Sign Up</div>
            <Controller
              control={control}
              render={({ field }) => (
                <TextField
                  errorMessage={errors?.email?.message ?? ''}
                  value={field.value}
                  placeholder={'Email'}
                  label={'Email'}
                  name={'email'}
                  onChange={field.onChange}
                />
              )}
              name={'email'}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <PasswordTextField
                  errorMessage={errors?.password?.message ?? ''}
                  value={field.value}
                  placeholder={'Password'}
                  label={'Password'}
                  name={'password'}
                  onChange={field.onChange}
                />
              )}
              name={'password'}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <PasswordTextField
                  errorMessage={errors?.confirmPassword?.message ?? ''}
                  value={field.value}
                  placeholder={'Confirm password'}
                  label={'Confirm password'}
                  name={'confirmPassword'}
                  onChange={field.onChange}
                />
              )}
              name={'confirmPassword'}
            />
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <div className={s.account}> Already have an account? </div>
        <Button onClick={() => navigate('/signIn')} variant={'link'} className={s.accountLink}>
          Sign In
        </Button>
      </Card>
    </div>
  )
}
