import { Outlet } from 'react-router-dom'

import { Header } from '../Header'

export const Layout = () => {
  return (
    <main>
      <Header />
      <div
        style={{
          height: 'calc(100vh - 56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </div>
    </main>
  )
}
