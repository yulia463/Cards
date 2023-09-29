import { Button } from 'src/components/ui/button/button.tsx'
import { Checkbox } from 'src/components/ui/checkbox'
import { CrossIcon } from 'src/components/ui/icons/ crossIcon.tsx'
import s from 'src/components/ui/modal/modalAddNewPack/modalAddNewPack.module.scss'
import { TextField } from 'src/components/ui/textField'

type ModalAddNewPackType = {
  setModalOpen: (isModalOpen: boolean) => void
}
export const ModalEditPack = (props: ModalAddNewPackType) => {
  return (
    <div className={s.overlay}>
      <div className={s.modalContainer}>
        <div className={s.modal}>
          <div className={s.header}>
            <h2>Add New Pack</h2>
            <div onClick={() => props.setModalOpen(false)} className={s.crossIcon}>
              <CrossIcon />
            </div>
          </div>
          <div className={s.textField}>
            <TextField type={'default'} label={'Name Pack'} placeholder={'name'} />
            <div className={s.checkbox}>
              <Checkbox label={<span style={{ color: 'white' }}>Private pack</span>} />
            </div>
          </div>
          <div className={s.buttons}>
            <Button onClick={() => props.setModalOpen(false)} variant="secondary">
              Cancel
            </Button>
            <Button>Edit Pack</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
