import { Button } from '../button/button'
import { Checkbox } from '../checkbox'
import { TextField } from '../textField'

import s from './modalAddNewPack.module.scss'

export const ModalAddNewPack = () => {
  return (
    <div className={s.modalContainer}>
      <div className={s.modal}>
        <h3>Add New Pack</h3>
        <TextField
          type={'default'}
          // value={valu}
          label={'Name Pack'}
          placeholder={'name'}
          // onChangeText={e => setPackName(e)}
        />
        <Checkbox
          // variant={'withText'}
          checkBoxText={'Private pack'}
          // checked={privatePack}
          // onChange={() => setPrivatePack(!privatePack)}
        />
        <Button></Button>
      </div>
    </div>
  )
}
