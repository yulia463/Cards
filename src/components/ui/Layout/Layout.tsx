import { Outlet } from 'react-router-dom'

import { useGetDecksQuery, useGetUserDataQuery } from '../../../services/base-api'
import { Header } from '../Header'

export const Layout = () => {
  // const result = useGetDecksQuery();
  const userData = useGetUserDataQuery()

  // console.log(result)
  console.log(userData)

  return (
    <main>
      <Header />
      {/*<div>{result?.data?.items?.map(el => el.name)}</div>*/}
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
