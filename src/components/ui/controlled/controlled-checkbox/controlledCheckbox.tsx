import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../../checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
} & Omit<CheckboxProps, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <TFieldValues extends FieldValues>(
  props: ControlledCheckboxProps<TFieldValues>
) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  })

  return (
    <Checkbox
      {...{
        onChange,
        checked: value,
        errorMessage: error,
        error: Boolean(error),
        id: props.name,
        ...props,
      }}
    />
  )
}
