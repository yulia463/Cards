import {Button} from 'src/components/ui/button/button.tsx'
import {CrossIcon} from 'src/components/ui/icons/ crossIcon.tsx'
import s from './modalLeanPackName.module.scss'
import {ChangeEvent, useState} from "react";

type ModalAddNewPackType = {
    closeModal: () => void
}
export const ModalLearnPackName = (props: ModalAddNewPackType) => {

    const [valueRad,setValueRad] = useState<number>(1)

    const changeRadio = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setValueRad(+e.currentTarget.value)
    }

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
                        <div className={s.text}>Answer: This is how "This" works in JavaScript</div>
                        <div className={s.rate}>Rate yourself:</div>
                        <div className={s.radio}>
                            <div>
                                <label htmlFor="radio_1">
                                    <div className={s.radioOut}>
                                        <div className={`${s.radioIn} ${valueRad === 1 ? s.radioColor : ''}`}></div>
                                    </div>
                                    Did not know
                                </label>
                                <input type={'radio'} checked={valueRad === 1} hidden id={"radio_1"} value={'1'} onChange={changeRadio} />


                            </div>
                            <div>
                                <label htmlFor="radio_2">
                                    <div className={s.radioOut}>
                                        <div className={`${s.radioIn} ${valueRad === 2 ? s.radioColor : ''}`}></div>
                                    </div>
                                    Forgot
                                </label>
                                <input type={'radio'} checked={valueRad === 2} hidden id={"radio_2"} value={'2'} onChange={changeRadio}/>

                            </div>
                            {/*<input type={'radio'}/>Forgot*/}
                            {/*<input type={'radio'}/>A lot of thought*/}
                            {/*<input type={'radio'}/>Сonfused*/}
                            {/*<input type={'radio'}/>Knew the answer*/}

                        </div>
                    </div>
                    <div className={s.button}>
                        <Button className={s.bts}
                                onClick={() => {
                                }}
                                variant="primary">
                            Next Question
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
