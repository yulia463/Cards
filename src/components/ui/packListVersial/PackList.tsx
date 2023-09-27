import { useState } from 'react'

import { RangeSlider } from '../../ui/rangeSlider/RangeSlider.tsx'
import { Table } from '../../ui/table/table.tsx'
import { Button } from '../button/button.tsx'
import { DeleteIcon } from '../icons/deleteIcon.tsx'
import { SearchInput } from '../searchInput/searchInput.tsx'

import s from './PaskList.module.scss'

type PackListType = {
  nameForPack?: string
}
const testData = [
  { id: 1, name: 'Lucas', cardsNumber: 2, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 2, name: 'Olivia', cardsNumber: 4, lastDate: '25.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 3, name: 'Liam', cardsNumber: 3, lastDate: '26.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 4, name: 'Emma', cardsNumber: 5, lastDate: '27.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 5, name: 'Noah', cardsNumber: 7, lastDate: '28.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 6, name: 'Ava', cardsNumber: 6, lastDate: '29.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 7, name: 'Isabella', cardsNumber: 12, lastDate: '30.07.2023', createdBy: 'Ivan Ivanov' },
]

export const PackList = (props: PackListType) => {
  const [searched, setSearched] = useState<string>('')
  const filteredRows = testData.filter(row => {
    return row.name.toLowerCase().includes(searched.toLowerCase())
  })

  const cancelSearch = () => {
    setSearched('')
  }

  return (
    <div className={s.packList}>
      <div className={s.titleWrapper}>
        <p className={s.nameForPack}>{props.nameForPack}</p>
        <Button variant="primary">Add New Pack</Button>
      </div>
      <div className={s.content}>
        <div className={s.input}>
          <SearchInput
            value={searched}
            onChange={e => {
              setSearched(e.target.value)
            }}
            onCancelSearch={() => cancelSearch()}
          />
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
      <Table rows={filteredRows} />
    </div>
  )
}

