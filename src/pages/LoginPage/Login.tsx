// import { useActions } from 'common/hooks'
// import { authThunks } from 'features/auth/auth.slice'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
//
// export const Login = () => {
//   const { login } = useActions(authThunks)
//   const navigate = useNavigate()
//
//   const loginHandler = () => {
//     const payload = {
//       email: 'karinafomina.19970804@gmail.com',
//       password: 'qwerty',
//       rememberMe: false,
//     }
//
//     login(payload)
//       .unwrap()
//       .then(res => {
//         toast.success('Вы успешно залогинились')
//         navigate('/packs')
//       })
//       .catch(err => {
//         toast.error(err.e.response.data.error)
//       })
//   }
//
//   return (
//     <div>
//       <h1>Login</h1>
//       <button onClick={loginHandler}>login</button>
//     </div>
//   )
// }

import { Navigate, useNavigate } from 'react-router-dom'

import { SignIn } from '../../components/auth/signIn/signIn.tsx'
import { useLoginMutation, useMeQuery } from '../../services/auth.ts'

export const Login = () => {
  const [login] = useLoginMutation()
  const { data, isLoading } = useMeQuery()
  const navigate = useNavigate()

  const loginHandler = (data: any) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  if (isLoading) return <div>...Loading</div>

  if (data) {
    return <Navigate to={'/'} />
  }

  return <SignIn onSubmit={loginHandler} />
}
