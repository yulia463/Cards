import type { StoryObj } from '@storybook/react'

import { Card } from './card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
