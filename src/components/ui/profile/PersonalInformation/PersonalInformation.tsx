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
  update: (value: string) => void
}

export const PersonalInformation: FC<PropsType> = ({ name, email, avatar, logout, update }) => {
  const [editMode, setEditMode] = useState<boolean>(false)

  const { handleSubmit } = useForm<SignInFormShem>({
    resolver: zodResolver(sigInSchema),
  })

  const onSubmit = (data: SignInFormShem) => {
    update(data.name)
  }

  return (
    <Card className={s.block}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        <div className={s.avatar}>
          <AvatarDemo src={avatar} name={name} className={s.avatar} />
          {!editMode && (
            <div className={s.avatarEdit}>
              <Edit />
            </div>
          )}
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
          />
          <Button
            fullWidth={true}
            className={s.submit}
            type="submit"
            onClick={() =>
              setTimeout(() => {
                setEditMode(false)
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
