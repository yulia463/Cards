import { useState } from 'react'

import { Dropdown } from '../dropdown/dropdown.tsx'

type DropDownButtonProps = {
  options: {
    icon?: React.ReactNode
    link: React.ReactNode
  }[]
  //options: React.ReactNode[]
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
