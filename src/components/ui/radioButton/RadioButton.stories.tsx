import type { Meta, StoryObj } from '@storybook/react'

import { RadioButton } from './RadioButton.tsx'

const meta = {
  title: 'Components/Radio',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'testRadio',
    label: 'Test',
    name: 'RadioButton',
    checked: false,
    onChange: e => {
      console.log(e.target.checked)
    },
  },
}

export const Disabled: Story = {
  args: {
    value: 'testRadio',
    label: 'Test',
    name: 'RadioButton',
    checked: false,
    onChange: e => {
      console.log(e.target.checked)
    },
    disabled: true,
  },
}
