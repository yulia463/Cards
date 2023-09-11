import { useState } from 'react'

import { Table } from '../../ui/table/table.tsx'
import { TextField } from '../../ui/textField/textField.tsx'
import { Button } from '../button/button.tsx'
import { LeftArrowIcon } from '../icons/leftArrowIcon.tsx'
import { ModeIcon } from '../icons/modeIcon.tsx'
import { SearchIcon } from '../icons/searchIcon.tsx'

import s from './FriendsPackList.module.scss'
//import {useAppDispatch} from "utils/helpers.ts";
// import {Typography} from "components/ui/typography";

export const MyPack = () => {
  //  const dispatch = useAppDispatch()
  const testData = [
    { id: 1, name: 'Lucas', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
    { id: 2, name: 'Olivia', cardsNumber: 4, lastDate: '25.07.2023', createdBy: 'Ivan Ivanov' },
    { id: 3, name: 'Liam', cardsNumber: 4, lastDate: '26.07.2023', createdBy: 'Ivan Ivanov' },
    { id: 4, name: 'Emma', cardsNumber: 4, lastDate: '27.07.2023', createdBy: 'Ivan Ivanov' },
    { id: 5, name: 'Noah', cardsNumber: 4, lastDate: '28.07.2023', createdBy: 'Ivan Ivanov' },
    { id: 6, name: 'Ava', cardsNumber: 4, lastDate: '29.07.2023', createdBy: 'Ivan Ivanov' },
    { id: 7, name: 'Isabella', cardsNumber: 4, lastDate: '30.07.2023', createdBy: 'Ivan Ivanov' },
  ]

  const [searched, setSearched] = useState<string>('')
  const filteredRows = testData.filter(row => {
  //   return row.name.toLowerCase().includes(searched.toLowerCase())
  // })
  //   const openPackModal = (value: NameModal) => {
  //       dispatch(modalActions.setOpenModal(value))
  //       dispatch(modalActions.setPackName(data!.name))
  //       dispatch(modalActions.setPrivatePack(data!.isPrivate))
  //       setCardId(data!.id)
  //   }
  //   const onSetPerPageHandler = (value: number) => {
  //       setPerPage({ ...perPage, value })
  //   }
  //   const addCardModalHandler = () => {
  //       dispatch(modalActions.setOpenModal('addCard'))
  //   }
  //   const dropDownMenu = [
  //       {
  //           id: 1,
  //           component: (
  //               <Button as={Link} to={`/learn-pack/${params.id}`} variant={'link'} className={s.buttonDrop}>
  //                   <Play />
  //                   <Typography variant={'caption'}>Learn</Typography>
  //               </Button>
  //           ),
  //       },
  //       {
  //           id: 2,
  //           component: (
  //               <Button variant={'link'} className={s.buttonDrop} onClick={() => openPackModal('editPack')}>
  //                   <Edit />
  //                   <Typography variant={'caption'}>Edit</Typography>
  //               </Button>
  //           ),
  //       },
  //       {
  //           id: 3,
  //           component: (
  //               <Button
  //                   variant={'link'}
  //                   className={s.buttonDrop}
  //                   onClick={() => openPackModal('deletePack')}
  //               >
  //                   <Trash />
  //                   <Typography variant={'caption'}>Delete</Typography>
  //               </Button>
  //           ),
  //       },
  //   ]

  return (
    <div className={s.container}>
      <div className={s.packDiv} onClick={() => {}}>
        <LeftArrowIcon />
        Back to Packs List
      </div>
      <div className={s.titleWrapper}>
        <p className={s.nameForPack}>My Pack</p>
        <div style={{ border: `'1px-solid-red'` }}>
          <ModeIcon />
        </div>
        <Button
            // onClick={addCardModalHandler}
            variant="primary"> Add New Card</Button>
      </div>
      <TextField
        style={{ marginBottom: '20px' }}
        placeholder={'input search'}
        icon={<SearchIcon />}
      />
      <Table rows={filteredRows} />
    </div>
  )
}
