import s from './checkbox.module.scss'
// type CheckboxProps = {
//   name?: string
// }

export const Checkbox = () => {
  return (
    <div className={s.checkboxWrapper}>
      <input type={'checkbox'} />
    </div>
  )
}
console.log('test')
