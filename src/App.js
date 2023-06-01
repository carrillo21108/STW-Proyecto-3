import './App.scss'
import React from 'react'
import Intro from './components/Intro/Intro'
import Contacto from './components/Contacto/Contacto';
import Tecnologias from './components/Tecnologias/Tecnologias';

function App(){

    return (
        <div className="App">
            <Intro/>
            <Tecnologias id="habilidades"/>
            <Contacto/>
        </div>
    );
}

export default App