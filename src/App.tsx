import { useState } from 'react'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import Dropdown from './components/ui/dropdown/dropdown.tsx'
import Layout from './components/ui/Layout/Layout.tsx'
import { Select } from './components/ui/select/Select.tsx'
import Login from './pages/LoginPage/Login.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={'/login'} element={<Login />} />
    </Route>
  )
)

export function App() {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const options = [<div key={'1'}>Hell0!</div>, <div key={'2'}>Bye</div>]
  const onClickHandler = () => {
    setIsDropdownOpened(true)
  }

  return (
    <div>
      <RouterProvider router={router} />
      <div>
        <button
          onBlur={() => {
            setIsDropdownOpened(false)
          }}
          onClick={onClickHandler}
        >
          pupa
        </button>
        <Dropdown isDropdownOpen={isDropdownOpened} options={options} />
      </div>
      <Select />
    </div>
  )
}
