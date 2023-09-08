import { FC } from 'react'

import { ResponseUserType } from '../../../services/types.ts'
import { AvatarForDropdownIcon } from '../icons/avatarForDropdownIcon.tsx'
import { Typography } from '../typography/typography.tsx'

import s from './ProfileBlock.module.scss'

type PropsType = {
  data?: ResponseUserType | null
}
export const ProfileBlock: FC<PropsType> = ({ data }) => {
  return (
    <div className={s.infoBlock}>
      <AvatarForDropdownIcon
          // src={data?.avatar}
          // name={data?.name}
      />
      <div className={s.info}>
        <Typography variant={'subtitle2'}>{data?.name}</Typography>
        <Typography variant={'caption'} className={s.email}>
          {data?.email}
        </Typography>
      </div>
    </div>
  )
}
