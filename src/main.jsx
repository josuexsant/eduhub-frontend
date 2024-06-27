import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {MainLayout} from './layouts/MainLayout'
import { Home } from './pages'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainLayout>
      <Home />
    </MainLayout>
  </React.StrictMode>,
)
