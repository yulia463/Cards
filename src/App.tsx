import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

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
  return <RouterProvider router={router} />
}
