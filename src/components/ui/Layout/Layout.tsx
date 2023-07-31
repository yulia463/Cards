import { Outlet } from 'react-router-dom'

import { Navbar } from '../Navbar'

export const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}
