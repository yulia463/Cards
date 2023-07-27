import { ChangeEvent, useState } from 'react'

import { RadioButton } from '../radioButton/RadioButton.tsx'

// import s from './RadioGroup.module.scss'

type RadioGroupType = {
  RadioGroupArray: { value: string; label: string; disabled?: boolean }[]
  GroupName: string
}

export const RadioGroup = (props: RadioGroupType) => {
  const { RadioGroupArray, GroupName } = props
  const [selectedOption, setSelectedOption] = useState<string>('option1')
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }
  const mappedRadioGroup = RadioGroupArray.map((radioEl, index) => {
    return (
      <RadioButton
        key={index}
        value={radioEl.value}
        label={radioEl.label}
        name={GroupName}
        checked={selectedOption === radioEl.value}
        onChange={handleOptionChange}
        disabled={radioEl.disabled}
      />
    )
  })

  return (
    <div>
      {mappedRadioGroup}
      <p>Selected Option: {selectedOption}</p>
    </div>
  )
}
