import { FC } from 'react'

import { PersonalInformation } from './PersonalInformation/PersonalInformation.tsx'

import { useLogoutMutation, useMeQuery, useUpdateProfileMutation } from 'src/services/auth-api.ts'
import { UpdatePersonalInformation } from 'src/services/types.ts'

export type ProfileType = {
  personalInfo?: { name: string; email: string; profileImg: string }
  setIsEditOn?: (editOn: boolean) => void
}
export const Profile: FC<ProfileType> = () => {
  // export const Profile: FC<ProfileType> = ({ personalInfo, setIsEditOn }) => {
  const { data } = useMeQuery()
  const [update] = useUpdateProfileMutation()
  const [logout] = useLogoutMutation()
  const onSaveChanges = (data: UpdatePersonalInformation) => {
    update(data)
  }

  return (
    <PersonalInformation
      name={data?.name}
      email={data?.email}
      update={onSaveChanges}
      logout={logout}
    />
  )
}
