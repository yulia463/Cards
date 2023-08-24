import { FC } from 'react'

import { Button, TextField } from '../index.ts'

import s from './EditProfile.module.scss'

export type EditProfileType = {
  personalInfo: { name: string; email: string; profileImg: string }
  setPersonalInfo: (personalInfo: { name: string; email: string; profileImg: string }) => void
  setIsEditOn: (editOn: boolean) => void
}

export const EditProfile: FC<EditProfileType> = ({
  personalInfo,
  setIsEditOn,
  setPersonalInfo,
}) => {
  return (
    <div className={s.editWrapper}>
      <div className={s.imageWrapper}>
        <img src={personalInfo.profileImg} alt="profileImg" className={s.image} />
      </div>
      <div className={s.infoWrapper}>
        <TextField
          value={personalInfo.name}
          onChange={e => setPersonalInfo({ ...personalInfo, name: e.currentTarget.value })}
        />
      </div>
      <Button onClick={() => setIsEditOn(false)}>Save changes</Button>
    </div>
  )
}
