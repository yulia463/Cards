import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { SignIn } from './components/auth/signIn/signIn.tsx'
import Layout from './components/ui/Layout/Layout.tsx'

import { SignUp } from 'components/auth/signUp'

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
