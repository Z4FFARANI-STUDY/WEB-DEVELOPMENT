import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainInfo from './componentes/MainInfo.jsx'
import Sobre from '../pages/Sobre.jsx'
import Servicos from '../pages/Servicos.jsx'
import Contato from '../pages/Contato.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <MainInfo />},
      {path: "sobre", element: <Sobre />},
      {path: "servicos", element: <Servicos />},
      {path: "contato", element: <Contato />},
      {path: "*", element: <PageNotFound />}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)