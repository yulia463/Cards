import type { Meta, StoryObj } from '@storybook/react'

import { RangeSlider } from './'

const meta = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RangeSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
}
