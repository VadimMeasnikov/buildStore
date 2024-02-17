import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.scss'
import server from './server/server.js'
import { initializeApp } from 'firebase/app'

initializeApp(server)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
