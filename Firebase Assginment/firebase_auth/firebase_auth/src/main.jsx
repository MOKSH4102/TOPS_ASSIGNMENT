import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Home from './components/Home.jsx'
import Reg from './components/reg.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/reg", element: <Reg /> },
  { path: "/home", element: <Home></Home> }

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
