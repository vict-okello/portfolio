import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, BrowserRouter, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
     
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
