import { Button } from 'src/components/ui/button/button.tsx'
import { CrossIcon } from 'src/components/ui/icons/ crossIcon.tsx'
import s from './modalLeanPackName.module.scss'
type ModalAddNewPackType = {
    closeModal: () => void
}
export const ModalLearnPackName = (props: ModalAddNewPackType) => {
    return (
        <div className={s.overlay}>
            <div className={s.modalContainer}>
                <div className={s.modal}>
                    <h2>Learn “Pack Name”</h2>
                    <div onClick={props.closeModal} className={s.crossIcon}>
                        <CrossIcon />
                    </div>

                    <div className={s.body}>
                        <div className={s.text}>
                            Question: How "This" works in JavaScript?
                        </div>
                        <div className={s.answer}>
                            Количество попыток ответов на вопрос: 10
                        </div>
                        <div className={s.text}>Answer: This is how "This" works in JavaScript</div>
                        <div className={s.rate}>Rate yourself:</div>
                        <div className={s.radio}>
                            <input type={'radio'} />Did not know
                            <input type={'radio'} />Forgot
                            <input type={'radio'} />A lot of thought
                            <input type={'radio'} />Сonfused
                            <input type={'radio'} />Knew the answer

                        </div>
                    </div>
                    <div className={s.button}>
                        <Button className={s.bts}
                                onClick={()=>{}}
                                variant="primary">
                         Next Question
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
