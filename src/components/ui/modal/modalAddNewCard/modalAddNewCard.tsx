import s from './modalAddNewCard.module.scss'

import { TextField } from 'src/components/ui'
import { Button } from 'src/components/ui/button/button.tsx'
import { CrossIcon } from 'src/components/ui/icons/ crossIcon.tsx'

type ModalAddNewPackType = {
  closeModal: () => void
}

export const ModalAddNewCard = (props: ModalAddNewPackType) => {
  return (
    <div className={s.overlay}>
      <div className={s.modalContainer}>
        <div className={s.modal}>
          <div className={s.header}>
            <h2>Add New Card</h2>
            <div onClick={props.closeModal} className={s.crossIcon}>
              <CrossIcon />
            </div>
          </div>
          <div className={s.textField}>
            <TextField
              type={'default'}
              // value={valu}
              label={'Choose a question format'}
              placeholder={'Text'}
              // onChangeText={e => setPackName(e)}
            />
            <div className={s.textField}>
              <TextField
                type={'default'}
                // value={valu}
                label={'Question'}
                placeholder={'Text'}
                // onChangeText={e => setPackName(e)}
              />
              <div className={s.textField}>
                <TextField
                  type={'default'}
                  // value={valu}
                  label={'Answer'}
                  placeholder={'Text'}
                  // onChangeText={e => setPackName(e)}
                />
                <div className={s.buttons}>
                  <Button onClick={props.closeModal} variant="secondary">
                    Cancel
                  </Button>
                  <Button>Add New Card</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
