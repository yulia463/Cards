import React, { useState } from 'react'

import { Button } from 'src/components/ui/button/button.tsx'
import { LeftArrowIcon } from 'src/components/ui/icons/leftArrowIcon.tsx'
import { ModalAddNewCard } from 'src/components/ui/modal/modalAddNewCard/modalAddNewCard.tsx'
import s from 'src/components/ui/packListVersial/emptyPack/emptyPack.module.scss'

export const EmptyPack = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className={s.container}>
      <div className={s.backDiv} onClick={() => {}}>
        <LeftArrowIcon />
        Back to Packs List
      </div>

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
