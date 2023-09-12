import { FC } from 'react'

// import { Button } from '../button'
// import { Card } from '../card'
// import { LogOutIcon } from '../icons/logOutIcon.tsx'
// import { PenIcon } from '../icons/penIcon.tsx'
//
// import s from './Profile.module.scss'

import { useLogoutMutation, useMeQuery, useUpdateProfileMutation } from 'src/services/auth-api.ts'
import { PersonalInformation } from '../../ui/profile/PersonalInformation.tsx'

export type ProfileType = {
  personalInfo: { name: string; email: string; profileImg: string }
  setIsEditOn: (editOn: boolean) => void
}
export const Profile: FC<ProfileType> = () => {
  // export const Profile: FC<ProfileType> = ({ personalInfo, setIsEditOn }) => {
  const { data } = useMeQuery()
  const [update] = useUpdateProfileMutation()
  const [logout] = useLogoutMutation()
  const onSaveChanges = (value: string) => {
    const form = new FormData()

    form.append('name', value)
    update(form)
  }

  return (
    // <Card className={s.profileWrapper}>
    //   <div className={s.imageWrapper}>
    //     <img src={personalInfo.profileImg} alt="profileImg" className={s.image} />
    //     <div className={s.imageIconWrapper}>
    //       <PenIcon />
    //     </div>
    //   </div>
    //   <div className={s.infoWrapper}>
    //     {personalInfo.name}
    //     <div onClick={() => setIsEditOn(true)} className={s.editIconWrapper}>
    //       <PenIcon />
    //     </div>
    //   </div>
    //   <Button variant={'secondary'}>
    //     <LogOutIcon />
    //     Logout
    //   </Button>
    // </Card>
    <PersonalInformation
      name={data?.name}
      email={data?.email}
      update={onSaveChanges}
      logout={logout}
    />
  )
}
