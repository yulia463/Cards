// import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './signIn.tsx'

const meta = {
  title: 'Auth/SignIn',
  component: SignIn,
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
