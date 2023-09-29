import { Button } from 'src/components/ui/button/button.tsx'
import { CrossIcon } from 'src/components/ui/icons/ crossIcon.tsx'
import s from 'src/components/ui/modal/modalAddNewPack/modalAddNewPack.module.scss'

type ModalAddNewPackType = {
    closeModal: () => void
}
export const ModalDeletePack = (props: ModalAddNewPackType) => {
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
