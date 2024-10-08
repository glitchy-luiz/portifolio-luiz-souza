import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import Projetos from './pages/Projetos.jsx'
import Detalheprojeto from './pages/Detalheprojeto.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'contato',
        element: <Contato/>
      },
      {
        path: 'projetos',
        element: <Projetos/>
      },
      {
        path: 'projetos/projetos/:slug',
        element: <Detalheprojeto/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
