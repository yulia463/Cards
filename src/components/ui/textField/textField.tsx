import React from 'react'

import s from './textField.module.scss'

type TextFieldProps = {
  label?: string
  errorMessage?: string
  icon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField: React.FC<TextFieldProps> = ({
  label,
  errorMessage,
  icon,
  ...inputProps
}) => {
  return (
    <div className={s.inputWrapper}>
      <label>{label}</label>
      <input {...inputProps} />
      {icon && <div className={s.iconWrapper}>{icon}</div>}
      {errorMessage && <div className={s.error}>{errorMessage}</div>}
    </div>
  )
}
