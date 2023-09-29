import { Outlet } from 'react-router-dom'

import { Header } from '../Header'

import { useMeQuery } from 'src/services/auth-api.ts'

export const Layout = () => {
  const { data } = useMeQuery()

  return (
    <>
      <Header data={data} />
      <Outlet />
    </>
  )
}
