import {DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode} from 'react'

import s from './textField.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type SupertextFieldPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: ReactNode
  spanClassName?: string
  disabled?: boolean
  label?: string
  errorMessage?: any
}

export const TextField: FC<SupertextFieldPropsType> = ({
  onChangeText,
  onEnter,
  error,
  label,
  spanClassName,
  errorMessage,
  disabled,

  ...restProps
}) => {
  // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange?.(e)
  //
  //   onChangeText?.(e.currentTarget.value)
  // }
  // const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
  //   onKeyPress?.(e)
  //
  //   onEnter && e.key === 'Enter' && onEnter()
  // }

  // const finalSpanClassName = s.error + (spanClassName ? ' ' + spanClassName : '')
  // const finalInputClassName =
  //   s.input +
  //   (error ? ' ' + s.errorInput : ' ' + s.superInput) +
  //   (className ? ' ' + s.className : '')

  return (
    <div className={s.inputWrapper}>
      <span>{error}</span>
      <input type={'text'} {...restProps} />
    </div>
  )
}
