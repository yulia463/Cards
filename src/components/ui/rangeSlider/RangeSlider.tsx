import { useState } from 'react'

import Slider from 'rc-slider'

import './RangeSlider.scss'

import 'rc-slider/assets/index.css'

type RangeSliderProps = {
  min: number
  max: number
  step: number
  onChange: (newValues: number[]) => void
}

export const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step, onChange }) => {
  const [values, setValues] = useState<number[]>([min, max])

  const handleSliderChange = (newValues: number[] | number) => {
    if (Array.isArray(newValues)) {
      setValues(newValues)
      onChange(newValues)
    }
  }

  return (
    <div className={'sliderWrapper'}>
      <div className={'sliderValueWrapper'}>{values[0]}</div>
      <Slider
        min={min}
        max={max}
        step={step}
        range
        value={values}
        onChange={handleSliderChange}
        railStyle={{ background: '#704ecc', height: '5px' }}
        trackStyle={{ background: '#8c61ff', height: '5px' }}
        handleStyle={{
          background: 'white',
          border: '3px solid #8c61ff',
          height: '15px',
          width: '15px',
          boxShadow: 'none',
        }}
      />
      <div className={'sliderValueWrapper'}>{values[1]}</div>
    </div>
  )
}
