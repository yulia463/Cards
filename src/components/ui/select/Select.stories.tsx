import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select.tsx'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
