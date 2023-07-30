import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button/button.tsx'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox/controlledCheckbox.tsx'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

// const emailRegex =
//   /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

export const LoginForm = () => {
  const {
    control,
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  // const {
  //   field: { value, onChange },
  // } = useController({
  //   name: 'rememberMe',
  //   control,
  //   defaultValue: false,
  // })

  console.log('errors: ', errors)

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      {/*<Input {...register('email')} label={'email'} errorMessage={errors.email?.message} />*/}
      {/*<Input {...register('password')} label={'password'} errorMessage={errors.password?.message} />*/}
      <ControlledCheckbox label={'remember me'} control={control} name={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
