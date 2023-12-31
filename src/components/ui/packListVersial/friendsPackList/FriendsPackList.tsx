import { useState } from 'react'

import { Button } from 'src/components/ui/button/button.tsx'
import { LeftArrowIcon } from 'src/components/ui/icons/leftArrowIcon.tsx'
import s from 'src/components/ui/packListVersial/friendsPackList/FriendsPackList.module.scss'
import { SearchInput } from 'src/components/ui/searchInput/searchInput.tsx'
import { TableForPackList } from 'src/components/ui/tables/tableForPackList/tableForPackList.tsx'
import {Link} from "react-router-dom";

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
        <Link to={'/packList'} className={s.linkWithoutUnderline}>
      <div className={s.packDiv}>
        <LeftArrowIcon />
        Back to Packs List
      </div>
        </Link>
      <div className={s.titleWrapper}>
        <p className={s.nameForPack}>Friend’s Pack</p>
      <Link to={'/learn'}><Button variant="primary">Learn to Pack</Button></Link>
      </div>
      <SearchInput
        value={searched}
        onChange={e => {
          setSearched(e.target.value)
        }}
        onCancelSearch={() => cancelSearch()}
      />
      <TableForPackList rows={filteredRows} />
    </div>
  )
}
