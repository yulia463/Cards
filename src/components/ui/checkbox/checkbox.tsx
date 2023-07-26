type DefaultInputPropsType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type CheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeChecked?: (checked: boolean) => void
  spanClassName?: string
  className?: string
  onChange?: () => void // Make onChange optional
  id: string
  label?: string
}

export const Checkbox: React.FC<CheckboxPropsType & { label: string }> = ({
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children,
  id,
  label,
  ...restProps
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }
    if (onChangeChecked) {
      onChangeChecked(event.target.checked)
    }
  }

  return (
    <label className={`checkbox ${className}`}>
      <input
        className="checkbox-input"
        type="checkbox"
        onChange={handleChange}
        id={id}
        {...restProps}
      />
      <span className={`checkmark ${spanClassName}`} />
      {label}
    </label>
  )
}
