import {PageNotFoundIcon} from "src/components/ui/icons/pageNotFoundIcon.tsx";
import {Button} from "src/components/ui";
import s from './error.module.scss'
export const Error = () => {
    return <div className={s.container}>
        <PageNotFoundIcon/>
        <div className={s.text}>Sorry! Page not found!</div>
        <Button>Back to home page</Button>
    </div>
}