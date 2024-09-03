import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, BrowserRouter, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
