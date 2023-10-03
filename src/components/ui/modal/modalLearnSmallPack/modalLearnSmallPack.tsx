import {Button} from 'src/components/ui/button/button.tsx'
import {CrossIcon} from 'src/components/ui/icons/ crossIcon.tsx'
import s from './modalLearnSmallPack.module.scss'

type ModalAddNewPackType = {
    closeModal: () => void
    onNextClick: () => void
}
export const ModalLearnSmallPack = (props: ModalAddNewPackType) => {

    return (
        <div className={s.overlay}>
            <div className={s.modalContainer}>
                <div className={s.modal}>
                    <h2>Learn “Pack Name”</h2>
                    <div onClick={props.closeModal} className={s.crossIcon}>
                        <CrossIcon/>
                    </div>

                    <div className={s.body}>
                        <div className={s.text}>
                            Question: How "This" works in JavaScript?
                        </div>
                        <div className={s.answer}>
                            Количество попыток ответов на вопрос: 10
                        </div>
                    </div>
                    <div className={s.button}>
                        <Button className={s.bts}
                                onClick={props.onNextClick}
                                variant="primary">
                            Show Answer
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
