import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label',
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'Error',
    label: 'Label',
  },
}
