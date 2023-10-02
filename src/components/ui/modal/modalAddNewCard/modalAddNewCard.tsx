import { Button } from 'src/components/ui/button/button.tsx'
import { CrossIcon } from 'src/components/ui/icons/ crossIcon.tsx'
import s from './modalAddNewCard.module.scss'
type ModalAddNewPackType = {
    closeModal: () => void
}
export const ModalAddNewCard = (props: ModalAddNewPackType) => {
    return (
        <div className={s.overlay}>
            <div className={s.modalContainer}>
                <div className={s.modal}>
                    <div className={s.header}>
                        <h2>Delete Pack</h2>
                        <div onClick={props.closeModal} className={s.crossIcon}>
                            <CrossIcon />
                        </div>

                    </div>
                    <div className={s.body}>
                        <div className={s.text}>
                            Do you really want to remove Pack Name?
                            <br/> All cards will be deleted.
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <Button onClick={props.closeModal} variant="secondary">
                            Cancel
                        </Button>
                        <Button>Delete Pack</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
