import { useState } from 'react'

import Ava from '../../../public/ava.jpg'
import { Card } from '../../components/ui/card'
import { EditProfile } from '../../components/ui/editProfile'
import { Profile } from '../../components/ui/profile'

import s from './ProfilePage.module.scss'

export const ProfilePage = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Ivan',
    email: 'ivan123@gmail.com',
    profileImg: Ava,
  })
  const [isEditOn, setIsEditOn] = useState(false)

  return (
    <Card className={s.profileWrapper}>
      <h2>Personal Information</h2>
      {isEditOn ? (
        <EditProfile
          personalInfo={personalInfo}
          setIsEditOn={setIsEditOn}
          setPersonalInfo={setPersonalInfo}
        />
      ) : (
        <Profile personalInfo={personalInfo} setIsEditOn={setIsEditOn} />
      )}
    </Card>
  )
}
