import { FC, InputHTMLAttributes, ReactNode } from 'react'

import s from './textField.module.scss'

type TextFieldProps = {
  label?: string
  errorMessage?: string
  icon?: ReactNode
  onClickIcon?: () => void
  onChangeText?: (value: string) => void
  onSearchClear?: () => void
} & InputHTMLAttributes<HTMLInputElement>

export const TextField: FC<TextFieldProps> = ({
  label,
  errorMessage,
  icon,
  onClickIcon,
  onChangeText,
  className,
  onSearchClear,
  ...inputProps
}) => {
  return (
    <div>
      <label>{label}</label>
      <div className={`${s.inputWrapper} ${errorMessage ? s.errorInputWrapper : ''}`}>
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
