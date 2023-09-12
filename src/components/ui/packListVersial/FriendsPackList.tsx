import { useState } from 'react'

import { Table } from '../../ui/table/table.tsx'
import { Button } from '../button/button.tsx'
import { LeftArrowIcon } from '../icons/leftArrowIcon.tsx'

import s from './FriendsPackList.module.scss'

import { SearchInput } from 'src/components/ui/searchInput/searchInput.tsx'

const testData = [
  { id: 1, name: 'Lucas', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 2, name: 'Olivia', cardsNumber: 4, lastDate: '25.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 3, name: 'Liam', cardsNumber: 4, lastDate: '26.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 4, name: 'Emma', cardsNumber: 4, lastDate: '27.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 5, name: 'Noah', cardsNumber: 4, lastDate: '28.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 6, name: 'Ava', cardsNumber: 4, lastDate: '29.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 7, name: 'Isabella', cardsNumber: 4, lastDate: '30.07.2023', createdBy: 'Ivan Ivanov' },
]

export const FriendsPackList = () => {
  const [searched, setSearched] = useState<string>('')
  const filteredRows = testData.filter(row => {
    return row.name.toLowerCase().includes(searched.toLowerCase())
  })

  const cancelSearch = () => {
    setSearched('')
  }

  return (
    <div className={s.container}>
      <div className={s.packDiv} onClick={() => {}}>
        <LeftArrowIcon />
        Back to Packs List
      </div>
      <div className={s.titleWrapper}>
        <p className={s.nameForPack}>Friend’s Pack</p>
        <Button variant="primary">Learn to Pack</Button>
      </div>
      <SearchInput
        value={searched}
        onChange={e => {
          setSearched(e.target.value)
        }}
        onCancelSearch={() => cancelSearch()}
      />
      <Table rows={filteredRows} />
    </div>
  )
}
