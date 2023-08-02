import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar.tsx'

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
