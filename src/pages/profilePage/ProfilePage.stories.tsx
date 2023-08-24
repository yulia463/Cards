import type { Meta, StoryObj } from '@storybook/react'

import { ProfilePage } from './ProfilePage.tsx'

const meta = {
  title: 'Components/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
