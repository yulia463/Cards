import { ChangeEvent } from 'react'

import s from './RadioButton.module.scss'

export type RadioButtonProps = {
  value: string
  label: string
  name: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}
export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  name,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div className={s.radioWrapper}>
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className={s.radio}
          disabled={disabled}
        />
        {label}
      </label>
    </div>
  )
}
