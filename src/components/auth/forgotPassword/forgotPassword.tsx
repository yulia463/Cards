import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button, TextField } from '../../ui'
import { Card } from '../../ui/card/Card.tsx'

import s from './forgotPassword.module.scss'
import {useForgotPasswordMutation} from "src/services/auth-api.ts";

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email')
})

type FormType = z.infer<typeof schema>


export const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })
  const navigate = useNavigate()
  const [forgotPassword] = useForgotPasswordMutation();
  const onSubmit: SubmitHandler<FormType> = (data) => {
    forgotPassword({
      ...data,
      html: `<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/recover-password/##token##">here</a> to recover your password</p>`,
    })
    navigate(`/checkEmail`)
  }

  return (
    <div className={s.forgot}>
      <DevTool control={control} />
      <Card className={s.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputWrapper}>
            <div className={s.title}>Forgot your password?</div>
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
