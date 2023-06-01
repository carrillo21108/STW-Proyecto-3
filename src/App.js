import './App.scss'
import React from 'react'
import Intro from './components/Intro/Intro'
import Contacto from './components/Contacto/Contacto';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App(){

    return (
        <div className="App">
            <Header/>
            <Intro/>
            <Tecnologias/>
            <Contacto/>
            <Footer/>
        </div>
    );
}

export default App