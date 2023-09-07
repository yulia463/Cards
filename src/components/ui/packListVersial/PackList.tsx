import { RangeSlider } from '../../ui/rangeSlider/RangeSlider.tsx'
import { Table } from '../../ui/table/table.tsx'
import { TextField } from '../../ui/textField/textField.tsx'
import { Button } from '../button/button.tsx'
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
      <div className={s.input}>
        <TextField placeholder={'input search'} icon={<SearchIcon />} />
      </div>
      <div>
        <div>Show packs cards</div>
        <Button>My Cards</Button>
        <Button>New Cards</Button>
      </div>
      <div>
        <div>Number of cards</div>
        <RangeSlider min={1} max={15} step={1} onChange={() => {}} />
      </div>
      <Button>Clear Filter</Button>
      <div>
        <Table />
      </div>
    </div>
  )
}
