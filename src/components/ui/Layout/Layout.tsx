import {Outlet} from 'react-router-dom'

import {Header} from '../Header'
import {useMeQuery} from "src/services/auth-api.ts";
// import { Outlet, useNavigate } from 'react-router-dom'
// import { useGetUserDataQuery } from '../../../services/base-api'
// export const Layout = () => {
//   // const result = useGetDecksQuery();
//   const userData = useGetUserDataQuery()
//   const navigate = useNavigate()
//   const [login] = useLoginMutation()
//   const { data, isLoading } = useMeQuery()
//   //
//   // // console.log(result)
//   // console.log(userData)
//   // useEffect(() => {
//   //   if (true) {
//   //     navigate('/signIn')
//   //   }
//   // }, [])
//
//   return (
//     <main>
//       <Header />
//       {/*<div>{result?.data?.items?.map(el => el.name)}</div>*/}
//       <div
//         style={{
//           height: 'calc(100vh - 56px)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Outlet />
//       </div>
//     </main>
//   )
// }

export const Layout = () => {
    const {data} = useMeQuery()

    return (
        <>
            <Header data={data}/>
            <Outlet/>
        </>
    )
}
