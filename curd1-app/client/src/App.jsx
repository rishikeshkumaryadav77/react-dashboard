import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './component/getuser/user'
import Add from './component/adduser/Add'
import Edit from './component/updateuser/Edit'

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <User/>,
    },
    {
      path: '/add',
      element: <Add />,
    },
    {
      path: '/edit/:id',
      element: <Edit />,
    }
  ])

  return (
    <>
      <h1>hello</h1>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
