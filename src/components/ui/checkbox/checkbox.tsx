import { ComponentPropsWithoutRef, ElementType } from 'react'

type CheckboxProps<T extends ElementType = 'checkbox'> = {
  as?: T
  name?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>
export const checkbox = (props: CheckboxProps) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'checkbox', ...rest } = props

  return <div></div>
}
