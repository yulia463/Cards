import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'


import { SignIn } from '../src/components/auth/signIn'

import { CheckEmail } from './components/auth/checkEmail/checkEmail.tsx'
import { ForgotPassword } from './components/auth/forgotPassword/forgotPassword.tsx'
import { SignUp } from './components/auth/signUp/signUp.tsx'
import Layout from './components/ui/Layout/Layout.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={'/signIn'} element={<SignIn />} />
      <Route path={'/checkEmail'} element={<CheckEmail />} />
      <Route
        path={'/forgotPassword'}
        element={
          <ForgotPassword
            onSubmit={() => {
              'test'
            }}
          />
        }
      />
      <Route
        path={'/signUp'}
        element={
          <SignUp
            onSubmit={() => {
              'test'
            }}
          />
        }
      />
    </Route>
  )
)

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
