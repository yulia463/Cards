import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button, TextField } from '../../ui'
import { Card } from '../../ui/card/Card.tsx'
import { PasswordTextField } from '../../ui/passwordTextField/passwordTextField'

import s from './signUp.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
  password: z.string().nonempty('Enter password').min(3),
  confirmPassword: z.string().nonempty('Enter password').min(3),
})

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const SignUp = (props: Props) => {
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
  const handleFormSubmitted = handleSubmit(props.onSubmit)

  console.log(errors)

  return (
    <div className={s.signUp}>
      <DevTool control={control} />
      <Card className={s.card}>
        <form onSubmit={handleFormSubmitted}>
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
            {/*<TextField placeholder={'Password'} label={'Password'} name={'password'} />*/}
            {/*<TextField placeholder={'Confirm Password'} label={'Confirm Password'}*/}
            {/*  name={'Confirm password'}*/}
            {/*/>*/}
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
