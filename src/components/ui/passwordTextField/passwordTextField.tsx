import { FC, InputHTMLAttributes, useState } from 'react'

import { EyeOffOutlineIcon } from '../icons/eyeOffOutlineIcon'
import { EyeOutlineIcon } from '../icons/eyeOutlineIcon'
import { TextField } from '../textField/textField'

type PasswordTextFieldProps = {
  errorMessage?: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>
export const PasswordTextField: FC<PasswordTextFieldProps> = ({
  errorMessage,
  label,
  ...inputProps
}) => {
  const [shown, setShown] = useState(false)
  const onClickIconHandler = () => {
    setShown(prev => !prev)
  }

  return (
    <div>
      <TextField
        label={label}
        errorMessage={errorMessage}
        onClickIcon={onClickIconHandler}
        icon={shown ? <EyeOutlineIcon /> : <EyeOffOutlineIcon />}
        type={shown ? 'text' : 'password'}
        {...inputProps}
      />
    </div>
  )
}
