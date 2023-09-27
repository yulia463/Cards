// import { useState } from 'react'
//
// import { RangeSlider } from '../../ui/rangeSlider/RangeSlider.tsx'
// import { Table } from '../../ui/table/table.tsx'
// import { Button } from '../button/button.tsx'
// import { DeleteIcon } from '../icons/deleteIcon.tsx'
// import { SearchInput } from '../searchInput/searchInput.tsx'
//
// import s from './PaskList.module.scss'
//
// type PackListType = {
//   nameForPack?: string
// }
// const testData = [
//   { id: 1, name: 'Lucas', cardsNumber: 2, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 2, name: 'Olivia', cardsNumber: 4, lastDate: '25.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 3, name: 'Liam', cardsNumber: 3, lastDate: '26.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 4, name: 'Emma', cardsNumber: 5, lastDate: '27.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 5, name: 'Noah', cardsNumber: 7, lastDate: '28.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 6, name: 'Ava', cardsNumber: 6, lastDate: '29.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 7, name: 'Isabella', cardsNumber: 12, lastDate: '30.07.2023', createdBy: 'Ivan Ivanov' },
// ]
//
// export const PackList = (props: PackListType) => {
//   const [searched, setSearched] = useState<string>('')
//   const filteredRows = testData.filter(row => {
//     return row.name.toLowerCase().includes(searched.toLowerCase())
//   })
//
//   const cancelSearch = () => {
//     setSearched('')
//   }
//
//   return (
//     <div className={s.packList}>
//       <div className={s.titleWrapper}>
//         <p className={s.nameForPack}>{props.nameForPack}</p>
//         <Button variant="primary">Add New Pack</Button>
//       </div>
//       <div className={s.content}>
//         <div className={s.input}>
//           <SearchInput
//             value={searched}
//             onChange={e => {
//               setSearched(e.target.value)
//             }}
//             onCancelSearch={() => cancelSearch()}
//           />
//         </div>
//         <div>
//           <p>Show packs cards</p>
//           <Button className={s.buttonAddCard}>My Cards</Button>
//           <Button className={s.buttonAllCards}>All Cards</Button>
//         </div>
//         <div>
//           <p>Number of cards</p>
//           <div className={s.slider}>
//             <RangeSlider min={1} max={15} step={1} onChange={() => {}} />
//           </div>
//         </div>
//         <Button variant={'secondary'} className={s.buttonFilter} icon={<DeleteIcon />}>
//           Clear Filter
//         </Button>
//       </div>
//       <Table rows={filteredRows} />
//     </div>
//   )
// }

import { RangeSlider } from '../../ui/rangeSlider/RangeSlider.tsx'
import { Button } from '../button/button.tsx'
import { DeleteIcon } from '../icons/deleteIcon.tsx'
import s from './PaskList.module.scss'
import {useAppDispatch, useAppSelector, useDebounce} from "src/utils/helpers.ts";
import {TextField} from "src/components/ui";
import {Typography} from "src/components/ui/typography";
import {Pagination} from "src/components/ui/pagination";
import {selectOpenModals, selectSettings} from "src/components/ui/modal/selectors.tsx";
import { usePackDeckState } from '../../auth/hooks/hook.ts'
import {useMeQuery} from "src/services/auth-api.ts";
import {useGetDecksQuery} from "src/services/base-api.ts";

type PackListType = {
  nameForPack?: string
}
export const PackList = (props: PackListType) => {
  const initialName = useAppSelector(state => state.deckSlice.searchByName)
  const tabSwitcherOptions = useAppSelector(state => state.deckSlice.tabSwitcherOptions)
  const itemsPerPage = useAppSelector(state => state.deckSlice.itemsPerPage)
  const sliderValues = useAppSelector(state => state.deckSlice.slider)
  const options = useAppSelector(state => state.deckSlice.paginationOptions)
  const currentPage = useAppSelector(state => state.deckSlice.currentPage)
  const { addPack, editPack, deletePack } = useAppSelector(selectOpenModals)
  const { privatePack, packName } = useAppSelector(selectSettings)
  const dispatch = useAppDispatch()

  const {
    cardId,
    setCardId,
    userId,
    setUserId,
    sort,
    setSort,
    sortedString,
    page,
    setPage,
    setValueSlider,
    valueSlider,
    perPage,
    onSetPerPageHandler,
  } = usePackDeckState(sliderValues, currentPage, itemsPerPage)
  const newInitialName = useDebounce(initialName, 1000)

  const { data: meData } = useMeQuery()
  const { data } = useGetDecksQuery({
    name: newInitialName,
    orderBy: sortedString,
    itemsPerPage: perPage.value,
    authorId: userId,
    minCardsCount: valueSlider[0],
    maxCardsCount: valueSlider[1],
    currentPage: page,
  })
  const [createDeck] = useCreateDeckMutation()
  const [deleteDeck] = useDeletedDeckMutation()
  const [editDeck] = useUpdateDeckMutation()
  const setSearchByName = (event: string) => {
    dispatch(deckSlice.actions.setSearchByName(event))
  }
  const setIsMyPackHandler = (value: boolean) => {
    dispatch(cardsSlice.actions.setIsMyPack({ isMyPack: value }))
  }
  const handleTabSort = (value: string) => {
    if (value === 'My Cards') {
      setUserId(meData!.id)
    } else {
      setUserId('')
    }
  }
  const clearFilterData = () => {
    setSearchByName('')
    handleTabSort('All cards')
    setValueSlider([sliderValues.minValue, sliderValues.maxValue])
    setSort({ key: 'updated', direction: 'asc' })
  }
  const onHandlerActionClicked = (value: NameModal) => {
    if (addPack) {
      createDeck({ name: packName, isPrivate: privatePack })
    } else if (editPack) {
      editDeck({ id: cardId, name: packName, isPrivate: privatePack })
    } else if (deletePack) {
      deleteDeck({ id: cardId })
    }
    dispatch(modalActions.setCloseModal(value))
    dispatch(modalActions.setClearState({}))
  }
  const setOpen = () => {
    dispatch(modalActions.setOpenModal('addPack'))
  }
  return (
      <div className={s.packList}>
        <div className={s.titleWrapper}>
          <p className={s.nameForPack}>{props.nameForPack}</p>
          <Button variant="primary" onClick={setOpen}>Add New Pack</Button>
        </div>
        <div className={s.content}>
          <div className={s.input}>
            <TextField
                value={initialName}
                type={'searchType'}
                className={s.textField}
                onChangeText={event => setSearchByName(event)}
                onSearchClear={() => setSearchByName('')}
            />
          </div>
          <div>
            <p>Show packs cards</p>
            <TabSwitcher
                onChangeCallback={value => handleTabSort(value)}
                options={tabSwitcherOptions}
                classname={s.switcher}
                defaultValue={tabSwitcherOptions[1].value}
            />
          </div>
          <div>
            <p>Number of cards</p>
            <div className={s.slider}>
              <RangeSlider min={valueSlider} max={data?.maxCardsCount} step={setValueSlider} onChange={() => {}} />
            </div>
          </div>
          <Button onClick={clearFilterData} variant={'secondary'} className={s.buttonFilter} icon={<DeleteIcon />}>
            Clear Filter
          </Button>
        </div>
        <TablePacksList
            data={data}
            authData={meData}
            setIsMyPackHandler={setIsMyPackHandler}
            setCardId={setCardId}
            sort={sort}
            setSort={setSort}
        />
        <div className={s.pagination}>
          <Pagination count={data?.pagination.totalPages} page={page} onChange={setPage} />
          <Typography variant={'body2'}>Показать</Typography>
          <SuperSelect
              options={options}
              defaultValue={perPage.value}
              onValueChange={onSetPerPageHandler}
              classname={s.selectPagination}
          />
          <Typography variant={'body2'}>На странице</Typography>
        </div>
        <TableModal handleClicked={onHandlerActionClicked} />
      </div>

  )
}
