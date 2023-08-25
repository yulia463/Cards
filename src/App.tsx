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
import { EmptyPack } from './components/ui/emptyPack'
import { Layout } from './components/ui/Layout/Layout.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={'/signIn'} element={<SignIn />} />
      <Route path={'/checkEmail'} element={<CheckEmail />} />
      <Route path={'/createNewPassword'} element={<CreateNewPassword />} />
      <Route path={'/emptyPack'} element={<EmptyPack />} />
      <Route
        path={'/dropdown'}
        element={
          <Dropdown
            isDropdownOpen={true}
            options={[
              {
                icon: <AvatarForDropdownIcon />,
                link: (
                  <div>
                    <div>Ivan</div>
                    <div> j&johnson@gmail.com</div>
                  </div>
                ),
              },
              {
                icon: <PersonIcon />,
                link: <span>My profile</span>,
              },
              {
                icon: <LogOutIcon />,
                link: <span>Sign Out</span>,
              },
            ]}
          />
        }
      />
      <Route
        path={'/settings'}
        element={
          <Dropdown
            isDropdownOpen={true}
            options={[
              {
                icon: <PlayIcon />,
                link: <span>Learn</span>,
              },
              {
                icon: <PenIcon />,
                link: <span>Edit</span>,
              },
              {
                icon: <DeleteIcon />,
                link: <span>Delete</span>,
              },
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
  // const result = useGetDecksQuery()

  // console.log(result)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
