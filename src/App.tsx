import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'


import { SignIn } from '../src/components/auth/signIn'

import { SignUp } from './components/auth/signUp/signUp.tsx'
import Layout from './components/ui/Layout/Layout.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={'/signIn'} element={<SignIn />} />
      <Route
        path={'/SignUp'}
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
