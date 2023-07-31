import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { SignIn } from '../src/components/auth/signIn'

import { LoginForm } from './components/auth/login-form/loginForm.tsx'
import { SignUp } from './components/auth/signUp/signUp.tsx'
import Layout from './components/ui/Layout/Layout.tsx'
import Login from './pages/LoginPage/Login.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={'/login'} element={<Login />} />
    </Route>
  )
)

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <LoginForm />
      <SignIn
        onSubmit={() => {
          'test'
        }}
      />
      <SignUp
        onSubmit={() => {
          'test'
        }}
      />
    </div>
  )
}
