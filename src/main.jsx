import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={routes} />
    </HelmetProvider>
      

  </React.StrictMode>,
)
