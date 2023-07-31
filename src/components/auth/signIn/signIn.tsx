import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Checkbox, TextField } from '../../ui'
import Card from '../../ui/card/Card.tsx'

import s from './signIn.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
  password: z.string().nonempty('Enter password'),
  rememberMe: z.boolean().optional(),
})

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const SignIn = (props: Props) => {
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
    <div className={s.signIn}>
      <DevTool control={control} />
      <Card className={s.card}>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.inputAndCheckbox}>
            <div className={s.title}>Sign In</div>
            <TextField placeholder={'Email'} label={'Email'} name={'email'} control={control} />
            <TextField placeholder={'Password'} label={'Password'} name={'password'} />
            <div className={s.forgot}>
              <Checkbox
                className={s.checkbox}
                label={'Remember me'}
                name={'rememberMe'}
                position={'left'}
              />
              <div className={s.forgotText}>Forgot Password?</div>
            </div>
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <div className={s.account}> Don't have an account? </div>
        <div className={s.accountLink}> Sign Up</div>
      </Card>
    </div>
  )
}
