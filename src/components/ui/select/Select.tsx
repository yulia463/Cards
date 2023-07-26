import { ChangeEvent, DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react'

import s from './Select.module.scss'

const arr = [
  { id: 1, value: 'Pre-junior' },
  { id: 2, value: 'Junior' },
  { id: 3, value: 'Junior plus' },
]

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

type SelectPropsType = DefaultSelectPropsType & {
  options?: any[] | { id: number; value: string }[]
  onChangeOption?: (option: any) => void
}

export const Select: FC<SelectPropsType> = ({
  options = arr,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map(o => (
        <option id={'option-' + o.id} className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  const finalSelectClassName = s.select + (className ? ' ' + className : '')

  return (
    <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}
