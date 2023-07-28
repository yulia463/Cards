import { useState } from 'react'

import { Dropdown } from '../dropdown/dropdown.tsx'

export const DropDownButton = () => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]
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
