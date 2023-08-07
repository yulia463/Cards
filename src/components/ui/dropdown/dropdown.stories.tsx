import { Meta, StoryObj } from '@storybook/react'

import { AvatarForDropdownIcon } from '../icons/avatarForDropdownIcon.tsx'
import { LogOutIcon } from '../icons/logOutIcon.tsx'
import { PersonIcon } from '../icons/personIcon.tsx'

import { Dropdown } from './dropdown.tsx'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      <div>
        <AvatarForDropdownIcon />
        <span>My profile</span>
      </div>,
      <div>
        <PersonIcon />
        <span>My profile</span>
      </div>,
      <div>
        <LogOutIcon />
        <span>My profile</span>
      </div>,
    ],
    isDropdownOpen: true,
  },
}
