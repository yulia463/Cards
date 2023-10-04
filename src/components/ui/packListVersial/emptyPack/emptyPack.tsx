import { useState } from 'react'

import { Button } from 'src/components/ui/button/button.tsx'
import { LeftArrowIcon } from 'src/components/ui/icons/leftArrowIcon.tsx'
import { ModalAddNewCard } from 'src/components/ui/modal/modalAddNewCard/modalAddNewCard.tsx'
import s from 'src/components/ui/packListVersial/emptyPack/emptyPack.module.scss'
import {Link} from "react-router-dom";

export const EmptyPack = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className={s.container}>
        <Link to={'/packList'} className={s.linkWithoutUnderline}>
      <div className={s.backDiv}>
        <LeftArrowIcon />
        Back to Packs List
      </div>
        </Link>
      <h1 className={s.namePack}>Name Pack</h1>
      <div className={s.text}>This pack is empty. Click add new card to fill this pack</div>
      <div className={s.button}>
        <Button onClick={() => setModalOpen(true)} variant={'primary'}>
          Add New Card
        </Button>
      </div>
      {isModalOpen && (
        <ModalAddNewCard
          closeModal={() => {
            setModalOpen(false)
          }}
        />
      )}
    </div>
  )
}
