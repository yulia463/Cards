import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup.tsx'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    RadioGroupArray: [
      {
        value: 'option1',
        label: 'Option 1',
      },
      {
        value: 'option2',
        label: 'Option 2',
      },
      {
        value: 'option3',
        label: 'Option 3',
        disabled: true,
      },
    ],
    GroupName: 'test',
  },
}
