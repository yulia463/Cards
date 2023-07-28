import { Meta, StoryObj } from '@storybook/react'

import { DropDownButton } from '../dropdownButton/dropdownButton.tsx'

const meta = {
  title: 'Components/DropDownButton',
  component: DropDownButton as any,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DropDownButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    isDropdownOpen: true,
  },
}
