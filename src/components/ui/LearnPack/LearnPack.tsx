import { Button } from 'src/components/ui/button/button.tsx'
import { LeftArrowIcon } from 'src/components/ui/icons/leftArrowIcon.tsx'
import s from 'src/components/ui/LearnPack/LearnPack.module.scss'

type ModalAddNewPackType = {
  closeModal: () => void
  onNextClick: () => void
}
export const LearnPack = (props: ModalAddNewPackType) => {
  return (
    <div>
      <div className={s.modalContainer}>
        <div className={s.packDiv} onClick={() => {}}>
          <LeftArrowIcon />
          Back to Packs List
        </div>
        <div className={s.modal}>
          <h2>Learn “Pack Name”</h2>
          <div className={s.body}>
            <div className={s.text}>Question: How "This" works in JavaScript?</div>
            <div className={s.answer}>Количество попыток ответов на вопрос: 10</div>
          </div>
          <div className={s.button}>
            <Button className={s.bts} onClick={props.onNextClick} variant="primary">
              Show Answer
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
