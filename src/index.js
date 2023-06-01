import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import icon from '../public/img/computer.ico'

const linkElement = document.querySelector('link[rel="shortcut icon"]');
linkElement.setAttribute('href',icon)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
)