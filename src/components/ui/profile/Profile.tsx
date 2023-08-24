import { FC } from 'react'

import { Button } from '../button'
import { Card } from '../card'
import { EditIcon } from '../icons/editIcon.tsx'
import { LogoutIcon } from '../icons/logoutIcon.tsx'

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
          <EditIcon className={s.icon} />
        </div>
      </div>
      <div className={s.infoWrapper}>
        {personalInfo.name}
        <div onClick={() => setIsEditOn(true)} className={s.editIconWrapper}>
          <EditIcon className={s.icon} />
        </div>
      </div>
      <Button variant={'secondary'}>
        <LogoutIcon className={s.icon} />
        Logout
      </Button>
    </Card>
  )
}
