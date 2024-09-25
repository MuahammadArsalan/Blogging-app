import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './assets/Screens/Profile.jsx'
import Home from './assets/Screens/Home.jsx'
import Dashboard from './assets/Screens/Dashboard.jsx'
import SingleUser from './assets/Screens/SingleUser.jsx'
import Register from './assets/Screens/Register.jsx'
import Login from './assets/Screens/Login.jsx'
import ProtectedRoutes from './assets/Components/ProtectedRoutes.jsx'
import Layout from './Layout.jsx'


const router = createBrowserRouter(
  [
    {
      path:"",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home />
        },{
          path:"register",
          element:<Register/>
        },{
          path:"login",
          element:<Login/>
        },
        {
          path:"dashboard",
          element:<ProtectedRoutes component={<Dashboard />} />
          // element:<Dashboard/>
        },{
          path:"profile",
          element:<ProtectedRoutes component={<Profile/>} />
        // element:<Profile/>
      },
      {
        path:"singleuser",
        element:<ProtectedRoutes component={<SingleUser/>} />
        // element:<SingleUser/>
        }
      ]
    }
  ]
)






createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)








// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Login from './assets/Screens/Login.jsx';
// import Home from './assets/Screens/Home.jsx';
// import Dashboard from './assets/Screens/Dashboard.jsx';
// import Profile from './assets/Screens/Profile.jsx';
// import SingleUser from './assets/Screens/SingleUser.jsx';
// import Register from './assets/Screens/Register.jsx';
// import ProtectedRoutes from './assets/Components/ProtectedRoutes.jsx';
// // import ProtectedRoutes from './assets/Components/ProtectedRoutes.jsx';

// const router = createBrowserRouter([
//   {
//     path: '',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'login',
//         element: <Login />
//       },
//       {
//         path: 'register',
//         element: <Register />
//       },
//       {
//         path: 'profile',
//         element: <ProtectedRoutes component={<Profile/>}/>
//       },
//       {
//         path: 'dashboard',
//         element: <ProtectedRoutes component={<Dashboard/>}/>
//       },
//       {
//         path: 'user',
//         element: <ProtectedRoutes component={<SingleUser/>}/>
//       },
//     ]
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}>
//     <App />
//   </RouterProvider>
// )