import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { id: '2', label: 'check-box' },
}

export const Disabled: Story = {
  args: { id: '5', label: 'check-box', disabled: true },
}
