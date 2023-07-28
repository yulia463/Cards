import s from './dropdown.module.scss'
type Option = { label: string; value: string }

type DropdownProps = {
  options: Option[]
  isDropdownOpen: boolean
}

export const Dropdown: React.FC<DropdownProps> = ({ options, isDropdownOpen }) => {
  return (
    <div className={s['dropdown-container']}>
      {isDropdownOpen && (
        <ul className={s['dropdown-options']}>
          {options.map((option, index) => (
            <li key={index} className={s['dropdown-option']}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
