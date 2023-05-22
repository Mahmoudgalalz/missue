import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './pages/error.tsx'
import {Auth} from './pages/OAuth/Auth'
import { Dash } from './pages/dash/Dash.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/auth",
    element: <Auth/>
  },
  {
    path:"/dash",
    element: <Dash/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
