import { Button } from 'src/components/ui/button/button.tsx'
import { Checkbox } from 'src/components/ui/checkbox'
import { CrossIcon } from 'src/components/ui/icons/ crossIcon.tsx'
import { TextField } from 'src/components/ui/textField'
import s from './modalEditPack.module.scss'

type ModalAddNewPackType = {
  closeModal: () => void
}
export const ModalEditPack = (props: ModalAddNewPackType) => {
  return (
    <div className={s.overlay}>
      <div className={s.modalContainer}>
        <div className={s.modal}>
          <div className={s.header}>
            <h2>Edit Pack</h2>
            <div onClick={props.closeModal} className={s.crossIcon}>
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
            <Button onClick={props.closeModal} variant="secondary">
              Cancel
            </Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
