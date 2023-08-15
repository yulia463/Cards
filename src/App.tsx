import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { SignIn } from '../src/components/auth/signIn'
import { Dropdown } from '../src/components/ui/dropdown/dropdown.tsx'
import { AvatarForDropdownIcon } from '../src/components/ui/icons/avatarForDropdownIcon.tsx'
import { DeleteIcon } from '../src/components/ui/icons/deleteIcon.tsx'
import { LogOutIcon } from '../src/components/ui/icons/logOutIcon.tsx'
import { PenIcon } from '../src/components/ui/icons/penIcon.tsx'
import { PersonIcon } from '../src/components/ui/icons/personIcon.tsx'
import { PlayIcon } from '../src/components/ui/icons/playIcon.tsx'
import { useGetDecksQuery } from '../src/services/base-api.ts'

import { CheckEmail } from './components/auth/checkEmail/checkEmail.tsx'
import { CreateNewPassword } from './components/auth/createNewPassword/createNewPassword.tsx'
import { ForgotPassword } from './components/auth/forgotPassword/forgotPassword.tsx'
import { SignUp } from './components/auth/signUp/signUp.tsx'
import { Layout } from './components/ui/Layout/Layout.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={'/signIn'} element={<SignIn />} />
      <Route path={'/checkEmail'} element={<CheckEmail />} />
      <Route path={'/createNewPassword'} element={<CreateNewPassword />} />
      <Route
        path={'/dropdown'}
        element={
          <Dropdown
            isDropdownOpen={true}
            options={[
              <div>
                <AvatarForDropdownIcon />
                <span>
                  <div>Ivan</div>
                  <div> ававававhdihdhje</div>
                </span>
              </div>,
              <div>
                <PersonIcon />
                <span>My profile</span>
              </div>,
              <div>
                <LogOutIcon />
                <span>Sign Out</span>
              </div>,
            ]}
          />
        }
      />
      <Route
        path={'/dropdown1'}
        element={
          <Dropdown
            isDropdownOpen={true}
            options={[
              <div>
                <PlayIcon />
                <span>Learn</span>
              </div>,
              <div>
                <PenIcon />
                <span>Edit</span>
              </div>,
              <div>
                <DeleteIcon />
                <span>Delete</span>
              </div>,
            ]}
          />
        }
      />
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
  const result = useGetDecksQuery()

  console.log(result)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
