import React, { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useUploadAvatarMutation } from 'src/services/avatar-api.ts'
import { z } from 'zod'

import { Button } from '../../button/button.tsx'
import { AvatarDemo } from '../../icons/Avatar.tsx'
import { Edit } from '../../icons/edit.tsx'
import { LogOutIcon } from '../../icons/logOutIcon.tsx'
import { TextField } from '../../textField/textField.tsx'
import { Typography } from '../../typography/typography.tsx'

import s from './PersionalInformation.module.scss'

import { Card } from 'src/components/ui/card'
import { UpdatePersonalInformation } from 'src/services/types.ts'

const personalInformationSchema = z.object({
  name: z.string().trim().min(1),
  avatar: z.any(),
})

type PersonalInformationFormShem = z.infer<typeof personalInformationSchema>

type PropsType = {
  name?: string
  email?: string
  avatar?: string
  logout: () => void
  update: (data: UpdatePersonalInformation) => void
}

export const PersonalInformation: FC<PropsType> = ({ name, email, avatar, logout, update }) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newAvatar, setNewAvatar] = useState(avatar)

  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm<PersonalInformationFormShem>({
    resolver: zodResolver(personalInformationSchema),
    defaultValues: {
      name: name,
    },
  })
  const onSubmit = (data: PersonalInformationFormShem) => {
    console.log('data>>>>', data)
    update(data)
  }
  const changeFile = (photoFile: File) => {
    const bodyFormData = new FormData()

    bodyFormData.append('file', photoFile)

    setValue('avatar', bodyFormData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className={s.block}>
        <Typography className={s.title} variant={'large'}>
          Personal Information
        </Typography>
        <div className={s.avatarBlock}>
          <div className={s.avatar}>
            <AvatarDemo src={newAvatar} name={name} className={s.avatar} />
            {editMode && (
              <div className={s.avatarEdit}>
                <label htmlFor="change_avatar">
                  <Edit className={s.changeName} />
                </label>
                <input
                  hidden
                  id={'change_avatar'}
                  type={'file'}
                  accept="image/*"
                  onChange={e => {
                    if (e.target.files) changeFile(e.target.files?.[0])
                  }}
                />
              </div>
            )}
          </div>
        </div>
        {editMode ? (
          <>
            <Controller
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    placeholder={'Name'}
                    label={'Name'}
                    errorMessage={errors?.name?.message ?? ''}
                    value={field.value || name}
                    name={'name'}
                    onChange={field.onChange}
                    className={s.editNickName}
                  />
                )
              }}
              name={'name'}
            />
            <Button fullWidth={true} className={s.submit} type="submit">
              Save Changes
            </Button>
          </>
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
            <Button
              as={Link}
              to="/login"
              variant={'secondary'}
              className={s.logout}
              onClick={logout}
            >
              <LogOutIcon />
              <Typography variant={'subtitle2'}>Logout</Typography>
            </Button>
          </div>
        )}
      </Card>
    </form>
  )
}
