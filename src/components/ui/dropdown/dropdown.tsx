import s from './dropdown.module.scss'
type Option = { label: string; value: string }

type DropdownProps = {
  options: Option[]
  // defaultOption?: Option
  isDropdownOpen: boolean
}

export const Dropdown: React.FC<DropdownProps> = ({ options, isDropdownOpen }) => {
  // const [selectedOption, setSelectedOption] = useState<Option | undefined>(defaultOption)
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // const handleSelect = (option: Option) => {
  //   setSelectedOption(option)
  //   onSelectOption(option)
  //   setIsDropdownOpen(false)
  // }

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
