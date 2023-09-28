import s from './checkbox.module.scss'
type DefaultInputPropsType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type CheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
  className?: string
  checked?: boolean
  onValueChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string | React.ReactElement
  id?: string
  position?: 'left'
}

export const Checkbox: React.FC<CheckboxPropsType & { label: string }> = ({
  checked,
  onValueChange,
  position,
  disabled,
  required,
  id,
  label,
  className,
  ...restProps
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target

    if (onValueChange) {
      onValueChange(checked)
    }
    console.log(event)
  }

  return (
    <label htmlFor={id} className={s.customCheckbox}>
      <input
        checked={checked}
        type="checkbox"
        onChange={handleChange}
        id={id}
        disabled={disabled}
        {...restProps}
      />
      <span className={s.checkboxImage} />
      <span className={s.label}>{label}</span>
    </label>
  )
}
