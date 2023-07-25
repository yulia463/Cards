import { Outlet } from 'react-router-dom'

import Navbar from '../Navbar/Navbar.tsx'

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default Layout
