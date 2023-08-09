import { Meta, StoryObj } from '@storybook/react'

import { AvatarForDropdownIcon } from '../icons/avatarForDropdownIcon.tsx'
import { DeleteIcon } from '../icons/deleteIcon.tsx'
import { LogOutIcon } from '../icons/logOutIcon.tsx'
import { PenIcon } from '../icons/penIcon.tsx'
import { PersonIcon } from '../icons/personIcon.tsx'
import { PlayIcon } from '../icons/playIcon.tsx'

import { Dropdown } from './dropdown.tsx'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Person: Story = {
  args: {
    options: [
      <div>
        <AvatarForDropdownIcon />
        <span>
          <div>Ivan</div>
          <div> hdihdhje</div>
        </span>
      </div>,
      <div>
        <PersonIcon />
        <span>My profile</span>
      </div>,
      <div>
        <LogOutIcon />
        <span>Sign Out</span>
      </div>,
    ],
    isDropdownOpen: true,
  },
}
export const AutoLayout: Story = {
  args: {
    options: [
      <div>
        <PlayIcon />
        <span>My profile</span>
      </div>,
      <div>
        <PenIcon />
        <span>My profile</span>
      </div>,
      <div>
        <DeleteIcon />
        <span>My profile</span>
      </div>,
    ],
    isDropdownOpen: true,
  },
}
