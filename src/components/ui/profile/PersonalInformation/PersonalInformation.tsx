import { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../button/button.tsx'
import { Card } from '../../card/Card.tsx'
import { AvatarDemo } from '../../icons/Avatar.tsx'
import { Edit } from '../../icons/edit.tsx'
import { LogOutIcon } from '../../icons/logOutIcon.tsx'
import { TextField } from '../../textField/textField.tsx'
import { Typography } from '../../typography/typography.tsx'

import s from './PersionalInformation.module.scss'

const sigInSchema = z.object({
  name: z.string().trim().min(1),
})

type SignInFormShem = z.infer<typeof sigInSchema>

type PropsType = {
  name?: string
  email?: string
  avatar?: string
  logout: () => void
  update: (value: string, avatar: string) => void
}

export const PersonalInformation: FC<PropsType> = ({ name, email, avatar, logout, update }) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [updatedName, setUpdatedName] = useState('')
  const [editAvatarMode, setEditAvatarMode] = useState(false)
  const [newAvatar, setNewAvatar] = useState(avatar)

  const { handleSubmit } = useForm<SignInFormShem>({
    resolver: zodResolver(sigInSchema),
  })

  const onSubmit = (data: SignInFormShem) => {
    update(data.name, newAvatar || avatar)
    setEditMode(false)
  }
  const updateAvatar = newAvatarUrl => {
    setNewAvatar(newAvatarUrl)
    setEditAvatarMode(false)
    update(updatedName, newAvatarUrl)
  }

  return (
    <Card className={s.block}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        <div className={s.avatar}>
          {editAvatarMode ? (
            <input
              type="file"
              accept="image/*"
              onChange={e => {
                const file = e.target.files?.[0]

                if (file) {
                  // Здесь вы можете вызвать функцию для загрузки нового аватара
                  // После успешной загрузки вызывайте updateAvatar с новым URL аватара
                  //В приведенном выше коде, после успешной загрузки нового аватара на сервер, вы должны вызвать функцию
                  // updateAvatar с новым URL аватара, чтобы обновить его в компоненте
                  // и отправить на сервер. Вы должны также иметь функцию uploadAvatarToServer, которая загружает новый
                  // аватар на сервер и вызывает updateAvatar с новым URL.
                }
              }}
            />
          ) : (
            <AvatarDemo src={newAvatar} name={name} className={s.avatar} />
          )}

          <div className={s.avatarEdit}>
            <Edit
              className={s.changeName}
              onClick={() => {
                setEditAvatarMode(!editAvatarMode)
              }}
            />
          </div>
        </div>
      </div>
      {editMode ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name={'name'}
            label={'Name'}
            defaultValue={name}
            type={'default'}
            className={s.editNickName}
            placeholder={'Name'}
            value={updatedName}
            onChange={e => setUpdatedName(e.target.value)}
          />
          <Button
            fullWidth={true}
            className={s.submit}
            type="submit"
            onClick={() =>
              setTimeout(() => {
                setEditMode(false)
                if (updatedName !== undefined) {
                  update(updatedName, newAvatar)
                }
              }, 0)
            }
          >
            Save Changes
          </Button>
        </form>
      ) : (
        <div className={s.infoBlock}>
          <div className={s.nameBlock}>
            <Typography variant={'h1'} className={s.name}>
              {name}
            </Typography>
            <Edit
              className={s.changeName}
              onClick={() => {
                setEditMode(true)
              }}
            />
          </div>
          <Typography variant={'body2'} as={'span'} className={s.email}>
            {email}
          </Typography>
          <Button as={Link} to="/login" variant={'secondary'} className={s.logout} onClick={logout}>
            <LogOutIcon />
            <Link to={'/signIn'}>
              <Typography variant={'subtitle2'}>Logout</Typography>
            </Link>
          </Button>
        </div>
      )}
    </Card>
  )
}
