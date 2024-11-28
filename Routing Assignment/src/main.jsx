import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter ([
  { path: '/',element: <App/>,children:[
    { path:'/',element:<Home/>},
    { path:'/about',element:<About/>},
    { path:'/contact',element:<Contact/>}

  ]}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
      </RouterProvider>
    
  </StrictMode>,
)
