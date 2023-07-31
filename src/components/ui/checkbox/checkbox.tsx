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
  label?: string
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
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (onValueChange) {
  //     onValueChange(event)
  //   }
  //   if (onValueChange) {
  //     onValueChange(event.target.checked)
  //   }
  // }

  return (
    <label className={s.label}>
      <input
        className={s.root}
        type="checkbox"
        // onChange={handleChange}
        id={id}
        disabled={disabled}
        {...restProps}
      />
      <span />
      {label}
    </label>
  )
}
