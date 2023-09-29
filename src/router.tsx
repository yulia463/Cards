import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { CheckEmail, CreateNewPassword, ForgotPassword, SignIn, SignUp } from './components/auth'
import { Layout } from './components/ui'
import { EmptyPack } from 'src/components/ui/packListVersial/emptyPack/emptyPack.tsx'
import { FriendsPackList } from 'src/components/ui/packListVersial/friendsPackList/FriendsPackList.tsx'
import { MyPack } from 'src/components/ui/packListVersial/myPack/MyPack.tsx'
import { PackList } from 'src/components/ui/packListVersial/packList/PackList.tsx'
import { useGetDecksQuery } from './services/base-api.ts'
import { Profile } from 'src/components/ui/profile'
import {Error} from "src/components/ui/error/error.tsx";

export const Router = () => {
  const result = useGetDecksQuery()

  console.log(result)

  return <RouterProvider router={router} />
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={'/signIn'} element={<SignIn onSubmit={() => {}} />} />
      <Route path={'/checkEmail'} element={<CheckEmail />} />
      <Route path={'/recover-password/:token'} element={<CreateNewPassword />} />
      <Route path={'/emptyPack'} element={<EmptyPack />} />
      <Route path={'/packList'} element={<PackList nameForPack={'Pack List'} />} />
      <Route path={'/friendsPack'} element={<FriendsPackList />} />
      <Route path={'/myPack'} element={<MyPack />} />
      <Route path={'/profile'} element={<Profile />} />
      <Route path={'/pageNotFound'} element={<Error />} />
      <Route path={'/forgotPassword'} element={<ForgotPassword />} />
      <Route path={'/signUp'} element={<SignUp />} />
    </Route>
  )
)
