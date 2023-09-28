import { Button } from '../button/button'
import { Checkbox } from '../checkbox'
import { TextField } from '../textField'

import s from './modalAddNewPack.module.scss'

export const ModalAddNewPack = () => {
  return (
    <div className={s.modalContainer}>
      <div className={s.modal}>
        <div className={s.header}>
          <h2>Add New Pack</h2>
        </div>
        <div className={s.textField}>
          <TextField
            type={'default'}
            // value={valu}
            label={'Name Pack'}
            placeholder={'name'}
            // onChangeText={e => setPackName(e)}
          />
          <div>
            <Checkbox
              // variant={'withText'}
              checkBoxText={'Private pack'}
              // checked={privatePack}
              // onChange={() => setPrivatePack(!privatePack)}
            />
            Private pack
          </div>
        </div>
        <Button>Cancel</Button>
        <Button>Add new Pack</Button>
      </div>
    </div>
  )
}
