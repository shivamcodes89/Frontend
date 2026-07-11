import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const webPage = document.getElementById("root");

createRoot(webPage).render(<App />)