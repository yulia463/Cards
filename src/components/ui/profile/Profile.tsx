import { FC } from 'react'

import { Button } from '../button'
import { Card } from '../card'
import { LogOutIcon } from '../icons/logOutIcon.tsx'
import { PenIcon } from '../icons/penIcon.tsx'

import s from './Profile.module.scss'

export type ProfileType = {
  personalInfo: { name: string; email: string; profileImg: string }
  setIsEditOn: (editOn: boolean) => void
}
export const Profile: FC<ProfileType> = ({ personalInfo, setIsEditOn }) => {
  return (
    <Card className={s.profileWrapper}>
      <div className={s.imageWrapper}>
        <img src={personalInfo.profileImg} alt="profileImg" className={s.image} />
        <div className={s.imageIconWrapper}>
          <PenIcon />
        </div>
      </div>
      <div className={s.infoWrapper}>
        {personalInfo.name}
        <div onClick={() => setIsEditOn(true)} className={s.editIconWrapper}>
          <PenIcon />
        </div>
      </div>
      <Button variant={'secondary'}>
        <LogOutIcon />
        Logout
      </Button>
    </Card>
  )
}
