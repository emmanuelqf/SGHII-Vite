import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu1 from './Menu1.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Menu1 />
  </React.StrictMode>,
)