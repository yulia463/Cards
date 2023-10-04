import React, { useState } from 'react'

import { Button, Dropdown } from 'src/components/ui'
import { DeleteIcon } from 'src/components/ui/icons/deleteIcon.tsx'
import { LeftArrowIcon } from 'src/components/ui/icons/leftArrowIcon.tsx'
import { ModeIcon } from 'src/components/ui/icons/modeIcon.tsx'
import { PenIcon } from 'src/components/ui/icons/penIcon.tsx'
import { PlayIcon } from 'src/components/ui/icons/playIcon.tsx'
import { LearnPackName } from 'src/components/ui/LearnPackName/LearnPackName.tsx'
import { ModalAddNewCard } from 'src/components/ui/modal/modalAddNewCard/modalAddNewCard.tsx'
import s from 'src/components/ui/packListVersial/myPack/MyPack.module.scss'
import { SearchInput } from 'src/components/ui/searchInput/searchInput.tsx'
import { TableForPackList } from 'src/components/ui/tables'
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

type ModalType = 'edit' | 'delete' | 'learn' | '' | 'learnSmall' | 'answer'

export const MyPack = () => {
  const [searched, setSearched] = useState<string>('')
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
  const [isModalType, setModalType] = useState<ModalType>('')
  const filteredRows = testData.filter(row => {
    return row.name.toLowerCase().includes(searched.toLowerCase())
  })
  const onClickHandler = () => {
    setDropdownOpen(prev => !prev)
  }

  const cancelSearch = () => {
    setSearched('')
  }

  return (
    <div className={s.container}>
      <Link to={'/packList'} className={s.linkWithoutUnderline}>
      <div className={s.packDiv} onClick={() => {}}>
        <LeftArrowIcon />
        Back to Packs List
      </div>
      </Link>
      <div className={s.titleWrapper}>
        <div className={s.myPack}>
          <p className={s.nameForPack}>My Pack</p>
          <div className={s.icon} onClick={onClickHandler}>
            <ModeIcon />
            <Dropdown isDropdownOpen={dropdownOpen}>
              <div>
                <div className={s.optionWrapper}>
                  <div className={s.option} onClick={() => setModalType('learnSmall')}>
                    <PlayIcon />
                    <span>Learn</span>
                  </div>
                  <div className={s.option} onClick={() => setModalType('edit')}>
                    <PenIcon />
                    <span>Edit</span>
                  </div>
                  <div className={s.option} onClick={() => setModalType('delete')}>
                    <DeleteIcon />
                    <span>Delete</span>
                  </div>
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
        <Button onClick={() => setModalOpen(true)} variant="primary">
          Add New Card
        </Button>
      </div>
      <SearchInput
        value={searched}
        onChange={e => {
          setSearched(e.target.value)
        }}
        onCancelSearch={() => cancelSearch()}
      />
      <TableForPackList rows={filteredRows} />
      {isModalOpen && (
        <ModalAddNewCard
          closeModal={() => {
            setModalOpen(false)
          }}
        />
      )}
      {isModalType == 'answer' && <LearnPackName />}
    </div>
  )
}
