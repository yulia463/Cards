import { useActions } from 'common/hooks'
import { authThunks } from 'features/auth/auth.slice'
import s from 'features/auth/Register/styles.module.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {
  const { login } = useActions(authThunks)
  const navigate = useNavigate()

  const loginHandler = () => {
    const payload = {
      email: 'karinafomina.19970804@gmail.com',
      password: 'qwerty',
      rememberMe: false,
    }

    login(payload)
      .unwrap()
      .then(res => {
        toast.success('Вы успешно залогинились')
        navigate('/packs')
      })
      .catch(err => {
        toast.error(err.e.response.data.error)
      })
  }

  return (
    <div className={s.container}>
      <h1>Login</h1>
      <button onClick={loginHandler}>login</button>
    </div>
  )
}
