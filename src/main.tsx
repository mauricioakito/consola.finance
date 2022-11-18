import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import './App.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Header />
        <div className='title'>
            <h1>This is an application that fecth data from a blockchain address and display it.</h1>
        </div>
        <div className='tableContainer'>
            <App />
        </div>
        <Footer />
    </>
)
