import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from 'react'

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
  disabled?: true
}

export const TextField: React.FC<SupertextFieldPropsType> = ({
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,
  id,

  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)

    onChangeText?.(e.currentTarget.value)
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress?.(e)

    onEnter && e.key === 'Enter' && onEnter()
  }

  const finalSpanClassName = s.error + (spanClassName ? ' ' + spanClassName : '')
  const finalInputClassName =
    s.input +
    (error ? ' ' + s.errorInput : ' ' + s.superInput) +
    (className ? ' ' + s.className : '')

  return (
    <div className={s.inputWrapper}>
      <span id={id ? id + '-span' : undefined} className={finalSpanClassName}>
        {error}
      </span>
      <input
        id={id}
        type={'text'}
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />
    </div>
  )
}
