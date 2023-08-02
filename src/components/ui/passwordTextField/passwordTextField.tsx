import { FC, InputHTMLAttributes, useState } from 'react'

import { EyeOffOutlineIcon } from '../icons/eyeOffOutlineIcon'
import { EyeOutlineIcon } from '../icons/eyeOutlineIcon'
import { TextField } from '../textField/textField'

type PasswordTextFieldProps = {
  errorMessage?: string
} & InputHTMLAttributes<HTMLInputElement>
export const PasswordTextField: FC<PasswordTextFieldProps> = ({ errorMessage, ...inputProps }) => {
  const [shown, setShown] = useState(false)
  const onClickIconHandler = () => {
    setShown(prev => !prev)
  }

  return (
    <div>
      <TextField
        placeholder={'Password'}
        label={'Password'}
        name={'password'}
        errorMessage={errorMessage}
        onClickIcon={onClickIconHandler}
        icon={shown ? <EyeOutlineIcon /> : <EyeOffOutlineIcon />}
        type={shown ? 'text' : 'password'}
        {...inputProps}
      />
    </div>
  )
}
