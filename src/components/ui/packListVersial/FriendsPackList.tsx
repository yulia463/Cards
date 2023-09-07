import { Table } from '../../ui/table/table.tsx'
import { TextField } from '../../ui/textField/textField.tsx'
import { Button } from '../button/button.tsx'
import { LeftArrowIcon } from '../icons/leftArrowIcon.tsx'
import { SearchIcon } from '../icons/searchIcon.tsx'

import s from './FriendsPackList.module.scss'

type FriendsPackListType = {
  nameForPack?: string
}
export const FriendsPackList = (props: FriendsPackListType) => {
  return (
    <div className={s.container}>
      <div className={s.packDiv} onClick={() => {}}>
        <LeftArrowIcon />
        Back to Packs List
      </div>
      <div className={s.titleWrapper}>
        <p className={s.nameForPack}>{props.nameForPack}</p>
        <Button variant="primary">Learn to Pack</Button>
      </div>
      <TextField
        style={{ marginBottom: '20px' }}
        placeholder={'input search'}
        icon={<SearchIcon />}
      />
      <Table />
    </div>
  )
}
