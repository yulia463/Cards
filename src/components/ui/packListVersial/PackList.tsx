import { RangeSlider } from '../../ui/rangeSlider/RangeSlider.tsx'
import { Table } from '../../ui/table/table.tsx'
import { TextField } from '../../ui/textField/textField.tsx'
import { Button } from '../button/button.tsx'
import { DeleteIcon } from '../icons/deleteIcon.tsx'
import { SearchIcon } from '../icons/searchIcon.tsx'

import s from './PaskList.module.scss'

type PackListType = {
  nameForPack?: string
}
export const PackList = (props: PackListType) => {
  return (
    <div>
      <div className={s.titleWrapper}>
        <p className={s.nameForPack}>{props.nameForPack}</p>
        <Button variant="primary">Add New Pack</Button>
      </div>
      <div className={s.content}>
        <div className={s.input}>
          <TextField placeholder={'input search'} icon={<SearchIcon />} />
        </div>
        <div>
          <p>Show packs cards</p>
          <Button className={s.buttonAddCard}>My Cards</Button>
          <Button className={s.buttonAllCards}>All Cards</Button>
        </div>
        <div>
          <p>Number of cards</p>
          <div className={s.slider}>
            <RangeSlider min={1} max={15} step={1} onChange={() => {}} />
          </div>
        </div>
        <Button variant={'secondary'} className={s.buttonFilter} icon={<DeleteIcon />}>
          Clear Filter
        </Button>
      </div>
      <Table />
    </div>
  )
}
