import { useState } from 'react'

import { Button } from 'src/components/ui/button/button.tsx'
import { DeleteIcon } from 'src/components/ui/icons/deleteIcon.tsx'
import { ModalAddNewPack } from 'src/components/ui/modal/modalAddNewPack/modalAddNewPack.tsx'
import s from 'src/components/ui/packListVersial/packList/PaskList.module.scss'
import { RangeSlider } from 'src/components/ui/rangeSlider/RangeSlider.tsx'
import { SearchInput } from 'src/components/ui/searchInput/searchInput.tsx'
import { TableForPackList } from 'src/components/ui/tables/tableForPackList/tableForPackList.tsx'

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
  const [isModalOpen, setModalOpen] = useState(false)
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
        <Button onClick={() => setModalOpen(true)} variant="primary">
          Add New Pack
        </Button>
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
      <TableForPackList rows={filteredRows} />
      {isModalOpen && <ModalAddNewPack setModalOpen={setModalOpen} />}
    </div>
  )
}
