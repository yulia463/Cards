import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Table } from 'src/components/ui/table/table.tsx'
import { Button } from 'src/components/ui/button/button.tsx'
import { LeftArrowIcon } from 'src/components/ui/icons/leftArrowIcon.tsx'
import { ModeIcon } from 'src/components/ui/icons/modeIcon.tsx'

import s from 'src/components/ui/packListVersial/myPack/MyPack.module.scss'

import { Dropdown } from 'src/components/ui'
import { DeleteIcon } from 'src/components/ui/icons/deleteIcon.tsx'
import { PenIcon } from 'src/components/ui/icons/penIcon.tsx'
import { PlayIcon } from 'src/components/ui/icons/playIcon.tsx'
import { ModalAddNewPack } from 'src/components/ui/modal/modalAddNewPack/modalAddNewPack.tsx'
import { SearchInput } from 'src/components/ui/searchInput/searchInput.tsx'
import {ModalEditPack} from "src/components/ui/modal/modalEditPack/modalEditPack.tsx";

const testData = [
  { id: 1, name: 'Lucas', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 2, name: 'Olivia', cardsNumber: 4, lastDate: '25.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 3, name: 'Liam', cardsNumber: 4, lastDate: '26.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 4, name: 'Emma', cardsNumber: 4, lastDate: '27.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 5, name: 'Noah', cardsNumber: 4, lastDate: '28.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 6, name: 'Ava', cardsNumber: 4, lastDate: '29.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 7, name: 'Isabella', cardsNumber: 4, lastDate: '30.07.2023', createdBy: 'Ivan Ivanov' },
]

export const MyPack = () => {
  const [searched, setSearched] = useState<string>('')
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [isModalOpen, setModalOpen] = useState(false)
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
      <div className={s.packDiv} onClick={() => {}}>
        <LeftArrowIcon />
        Back to Packs List
      </div>
      <div className={s.titleWrapper}>
        <div className={s.myPack}>
          <p className={s.nameForPack}>My Pack</p>
          <div className={s.icon} onClick={onClickHandler}>
            <ModeIcon />
            <Dropdown

              isDropdownOpen={dropdownOpen}
              options={[
                {
                  icon: <PlayIcon />,
                  link: <span>Learn</span>,
                },
                {
                  icon: <PenIcon />,
                  link: <span>Edit</span>,
                },
                {
                  icon: <DeleteIcon />,
                  link: <span>Delete</span>,
                },
              ]}
            />
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

      <Table rows={filteredRows} />
      {isModalOpen && <ModalAddNewPack setModalOpen={setModalOpen}/>}
    </div>
  )
}