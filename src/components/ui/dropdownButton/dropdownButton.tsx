import { useState } from 'react'

import { Dropdown } from '../dropdown/dropdown.tsx'

type DropDownButtonProps = {
  options: React.ReactNode[]
}
export const DropDownButton: React.FC<DropDownButtonProps> = ({ options }) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const onClickHandler = () => {
    setIsDropdownOpened(true)
  }

  return (
    <div>
      <button
        onBlur={() => {
          setIsDropdownOpened(false)
        }}
        onClick={onClickHandler}
      >
        pupa
      </button>
      <Dropdown isDropdownOpen={isDropdownOpened} options={options} />
    </div>
  )
}
