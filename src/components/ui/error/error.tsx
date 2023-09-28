import {PageNotFoundIcon} from "src/components/ui/icons/pageNotFoundIcon.tsx";
import {Button} from "src/components/ui";
import s from './error.module.scss'
import {Link} from "react-router-dom";
export const Error = () => {
    return <div className={s.container}>
        <PageNotFoundIcon/>
        <div className={s.text}>Sorry! Page not found!</div>
        <Link to={'/myPack'}>
        <Button>Back to home page</Button>
        </Link>
    </div>
}