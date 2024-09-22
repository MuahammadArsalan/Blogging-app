import React from 'react'
import Navbar from './assets/Components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
<>
<Navbar/>
<Outlet/>

</>  )
}

export default Layout










// import React from 'react'
// import Navbar from './assets/Components/Navbar'
// import { Outlet } from 'react-router-dom'

// const Layout = () => {
//     return (
//         <>
//             <Navbar />
//             <Outlet />
//         </>
//     )
// }

// export default Layout