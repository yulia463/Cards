import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField'

const meta = {
  title: 'Components/Input',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Error: Story = {
  args: { error: 'Error' },
}
