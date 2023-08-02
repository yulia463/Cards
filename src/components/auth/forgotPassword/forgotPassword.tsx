import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button, TextField } from '../../ui'
import { Card } from '../../ui/card/Card.tsx'

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
  const navigate = useNavigate()

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <div className={s.forgot}>
      <DevTool control={control} />
      <Card className={s.card}>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.inputWrapper}>
            <div className={s.title}>Forgot your password?</div>
            <TextField placeholder={'Email'} label={'Email'} name={'email'} />
          </div>
          <div className={s.text}>
            Enter your email address and we will send you further instructions
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Send instructions
          </Button>
        </form>
        <div className={s.account}> Did you remember your password? </div>
        <Button onClick={() => navigate('/signIn')} variant={'link'} className={s.accountLink}>
          Try logging in
        </Button>
      </Card>
    </div>
  )
}
