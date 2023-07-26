import type { Meta, StoryObj } from '@storybook/react'

import Slider from './Slider.tsx'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
}
