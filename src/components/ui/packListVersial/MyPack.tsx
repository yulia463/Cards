// eslint-disable-next-line import/default
import React, { useState } from 'react'

import { Table } from '../../ui/table/table.tsx'
import { Button } from '../button/button.tsx'
import { LeftArrowIcon } from '../icons/leftArrowIcon.tsx'
import { ModeIcon } from '../icons/modeIcon.tsx'

import s from './MyPack.module.scss'

import { Dropdown } from 'src/components/ui'
import { DeleteIcon } from 'src/components/ui/icons/deleteIcon.tsx'
import { PenIcon } from 'src/components/ui/icons/penIcon.tsx'
import { PlayIcon } from 'src/components/ui/icons/playIcon.tsx'
import { SearchInput } from 'src/components/ui/searchInput/searchInput.tsx'

// const testData = [
//   { id: 1, name: 'Lucas', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 2, name: 'Olivia', cardsNumber: 4, lastDate: '25.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 3, name: 'Liam', cardsNumber: 4, lastDate: '26.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 4, name: 'Emma', cardsNumber: 4, lastDate: '27.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 5, name: 'Noah', cardsNumber: 4, lastDate: '28.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 6, name: 'Ava', cardsNumber: 4, lastDate: '29.07.2023', createdBy: 'Ivan Ivanov' },
//   { id: 7, name: 'Isabella', cardsNumber: 4, lastDate: '30.07.2023', createdBy: 'Ivan Ivanov' },
// ]

export const MyPack = () => {
  const [searched, setSearched] = useState<string>('')
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const filteredRows = testData.filter(row => {
    return row.name.toLowerCase().includes(searched.toLowerCase())
  })
  const onClickHandler = () => {
    setDropdownOpen(prev => !prev)
  }

  const cancelSearch = () => {
    setSearched('')
  }
    const params = useParams<{ id: string }>()
    const navigate = useNavigate()

    const { privatePack, packName, question, answer } = useAppSelector(selectSettings)
    const itemsPerPage = useAppSelector(state => state.deckSlice.itemsPerPage)
    const options = useAppSelector(state => state.deckSlice.paginationOptions)
    const currentPage = useAppSelector(state => state.deckSlice.currentPage)
    const { editPack, deletePack, addCard, editCard, deleteCard } = useAppSelector(selectOpenModals)
    const dispatch = useAppDispatch()

    const [cardId, setCardId] = useState<string>('')
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'desc' })
    const [perPage, setPerPage] = useState({ id: 1, value: itemsPerPage })
    const [page, setPage] = useState(currentPage)

    const sortedString = useMemo(() => {
        if (!sort) return null

        return `${sort.key}-${sort.direction}`
    }, [sort])

    const { data } = useGetDeckQuery({
        id: params.id,
    })
    const { data: dataCards } = useGetCardsQuery({
        id: params.id,
        question: search,
        orderBy: sortedString,
        itemsPerPage: perPage.value,
        currentPage: page,
    })
    const [createCard] = useCreateCardMutation()
    const [editItem] = useEditCardMutation()
    const [deleteItem] = useDeleteCardMutation()
    const [deleteDeck] = useDeletedDeckMutation()
    const [editDeck] = useUpdateDeckMutation()

    const openPackModal = (value: NameModal) => {
        dispatch(modalActions.setOpenModal(value))
        dispatch(modalActions.setPackName(data!.name))
        dispatch(modalActions.setPrivatePack(data!.isPrivate))
        setCardId(data!.id)
    }
    const onSetPerPageHandler = (value: number) => {
        setPerPage({ ...perPage, value })
    }
    const addCardModalHandler = () => {
        dispatch(modalActions.setOpenModal('addCard'))
    }
    const onHandlerActionClicked = (value: NameModal) => {
        if (addCard) {
            createCard({ id: params.id, question, answer })
        } else if (editCard) {
            editItem({ id: cardId, question, answer })
        } else if (deleteCard) {
            deleteItem({ id: cardId })
        } else if (editPack) {
            editDeck({ id: cardId, name: packName, isPrivate: privatePack })
        } else if (deletePack) {
            deleteDeck({ id: cardId })
            navigate('/')
        }
        dispatch(modalActions.setCloseModal(value))
        dispatch(modalActions.setClearState({}))
    }

    const dropDownMenu = [
        {
            id: 1,
            component: (
                <Button as={Link} to={`/learn-pack/${params.id}`} variant={'link'} className={s.buttonDrop}>
                    <Play />
                    <Typography variant={'caption'}>Learn</Typography>
                </Button>
            ),
        },
        {
            id: 2,
            component: (
                <Button variant={'link'} className={s.buttonDrop} onClick={() => openPackModal('editPack')}>
                    <Edit />
                    <Typography variant={'caption'}>Edit</Typography>
                </Button>
            ),
        },
        {
            id: 3,
            component: (
                <Button
                    variant={'link'}
                    className={s.buttonDrop}
                    onClick={() => openPackModal('deletePack')}
                >
                    <Trash />
                    <Typography variant={'caption'}>Delete</Typography>
                </Button>
            ),
        },
    ]

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
        <Button
          // onClick={addCardModalHandler}
          variant="primary"
        >
          {' '}
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
    </div>
  )
}
