import { FC, InputHTMLAttributes, ReactNode } from 'react'

import s from './textField.module.scss'

type TextFieldProps = {
  label?: string
  errorMessage?: string
  icon?: ReactNode
  onClickIcon?: () => void
} & InputHTMLAttributes<HTMLInputElement>

export const TextField: FC<TextFieldProps> = ({
  label,
  errorMessage,
  icon,
  onClickIcon,
  ...inputProps
}) => {
  return (
    <div>
      <div className={`${s.inputWrapper} ${errorMessage ? s.errorInputWrapper : ''}`}>
        <label>{label}</label>
        <input {...inputProps} className={`${s.input} ${errorMessage ? s.errorInput : ''}`} />
        {icon && (
          <div className={s.iconWrapper} onClick={onClickIcon}>
            {icon}
          </div>
        )}
      </div>
      {errorMessage && <div className={s.error}>{errorMessage}</div>}
    </div>
  )
}
