import { useState } from 'react'

import { Button } from '../button'
import { Card } from '../card'
import { EditIcon } from '../icons/editIcon.tsx'
import { LogoutIcon } from '../icons/logoutIcon.tsx'
import { TextField } from '../textField'

import s from './Profile.module.scss'

export const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Ivan',
    email: 'ivan123@gmail.com',
  })
  const [isEditOn, setIsEditOn] = useState(false)

  return (
    <Card className={s.profileWrapper}>
      <h2>Personal Information</h2>
      <div className={s.imageWrapper}>
        Image
        {!isEditOn && (
          <div className={s.imageIconWrapper}>
            <EditIcon className={s.icon} />
          </div>
        )}
      </div>
      <div>
        <div className={s.infoWrapper}>
          {isEditOn ? (
            <TextField
              value={personalInfo.name}
              onChange={e => setPersonalInfo({ ...personalInfo, name: e.currentTarget.value })}
              onBlur={() => setIsEditOn(false)}
            />
          ) : (
            personalInfo.name
          )}
          <div onClick={() => setIsEditOn(true)}>
            {!isEditOn && <EditIcon className={s.icon} />}
          </div>
        </div>
      </div>
      {isEditOn ? (
        <Button onClick={() => setIsEditOn(false)}>Save changes</Button>
      ) : (
        <Button variant={'secondary'}>
          <LogoutIcon className={s.icon} />
          Logout
        </Button>
      )}
    </Card>
  )
}
