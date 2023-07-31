import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import { Layout } from './components/ui'
import { Login } from './pages/LoginPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={'/login'} element={<Login />} />
    </Route>
  )
)

export function App() {
  return <RouterProvider router={router} />
}
