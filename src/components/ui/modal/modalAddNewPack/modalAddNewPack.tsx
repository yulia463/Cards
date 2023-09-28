import { Button } from 'src/components/ui/button/button.tsx'
import { Checkbox } from 'src/components/ui/checkbox'
import { CrossIcon } from 'src/components/ui/icons/ crossIcon.tsx'
import s from 'src/components/ui/modal/modalAddNewPack/modalAddNewPack.module.scss'
import { TextField } from 'src/components/ui/textField'

type ModalAddNewPackType = {
  setModalOpen: (isModalOpen: boolean) => void
}
export const ModalAddNewPack = (props: ModalAddNewPackType) => {
  return (
    <div className={s.overlay}>
      <div className={s.modalContainer}>
        <div className={s.modal}>
          <div className={s.header}>
            <h2>Add New Pack</h2>
            <div className={s.crossIcon}>
              <CrossIcon />
            </div>
          </div>
          <div className={s.textField}>
            <TextField
              type={'default'}
              // value={valu}
              label={'Name Pack'}
              placeholder={'name'}
              // onChangeText={e => setPackName(e)}
            />
            <div className={s.checkbox}>
              <Checkbox
                // variant={'withText'}
                label={<span style={{ color: 'white' }}>Private pack</span>}
                // checked={privatePack}
                // onChange={() => setPrivatePack(!privatePack)}
              />
            </div>
          </div>
          <div className={s.buttons}>
            <Button onClick={() => props.setModalOpen(false)} variant="secondary">
              Cancel
            </Button>
            <Button>Add new Pack</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
