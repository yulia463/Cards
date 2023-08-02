import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../ui/button/button.tsx'
import { Card } from '../../ui/card/Card.tsx'
import { Checkbox } from '../../ui/checkbox/checkbox.tsx'
import { TextField } from '../../ui/textField/textField.tsx'

import s from './signIn.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

export const SignIn = () => {
  const { control, handleSubmit, watch, setValue, reset } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const handleFormSubmitted = handleSubmit(onSubmit)

  console.log(watch('rememberMe'))

  return (
    <div className={s.signIn}>
      <DevTool control={control} />
      <Card className={s.card}>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.inputAndCheckbox}>
            <div className={s.title}>Sign In</div>
            <TextField placeholder={'Email'} label={'Email'} name={'email'} />
            <TextField placeholder={'Password'} label={'Password'} name={'password'} />
            <div className={s.forgot}>
              <Controller
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    className={s.checkbox}
                    label={'Remember me'}
                    name={'rememberMe'}
                    position={'left'}
                    onValueChange={field.onChange}
                  />
                )}
                name={'rememberMe'}
              />
              <div className={s.forgotText}>Forgot Password?</div>
            </div>
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <div className={s.account}> Don't have an account? </div>
        <Link to={'/signUp'}>
          {' '}
          <Button variant={'link'} className={s.accountLink}>
            Sign Up
          </Button>
        </Link>
      </Card>
    </div>
  )
}
