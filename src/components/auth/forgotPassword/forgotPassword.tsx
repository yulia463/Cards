import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button, TextField } from '../../ui'
import Card from '../../ui/card/Card.tsx'

import s from './forgotPassword.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
  password: z.string().nonempty('Enter password'),
  rememberMe: z.boolean().optional(),
})

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const ForgotPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <div className={s.signUp}>
      <DevTool control={control} />
      <Card className={s.card}>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.input}>
            <div className={s.title}>Sign Up</div>
            <TextField placeholder={'Email'} label={'Email'} name={'email'} />
            <TextField placeholder={'Password'} label={'Password'} name={'password'} />
            <TextField
              placeholder={'Confirm Password'}
              label={'Confirm Password'}
              name={'Confirm password'}
            />
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <div className={s.account}> Already have an account? </div>
        <Link to={'/SignIn'}>
          {' '}
          <Button variant={'link'} className={s.accountLink}>
            Sign In
          </Button>
        </Link>
      </Card>
    </div>
  )
}
