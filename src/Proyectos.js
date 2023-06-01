import './Proyectos.scss'
import React from 'react'
import Seccion1 from './components/Seccion1/Seccion1';
import Seccion2 from './components/Seccion2/Seccion2';
import Seccion3 from './components/Seccion3/Seccion3';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function Proyectos(){
    return (
        <div className="Proyectos">
            <Header/>
            <Seccion1/>
            <Seccion2/>
            <Seccion3/>
            <Footer/>
        </div>
    );
}

export default Proyectos