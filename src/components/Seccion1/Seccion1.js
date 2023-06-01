import './Seccion1.scss'
import React from 'react'
import MiniTarget from '../MiniTarget/MiniTarget';
import { Link } from 'react-router-dom';

function Seccion1(){

    return(
        <div>
            <div className='seccion1-container'>
                <div className='seccion1-titulo'>
                    <h2>Lo básico</h2>
                    <Link className='animate__animated'
                    to='/'>
                        <span>
                            Inicio
                        </span>
                    </Link>
                </div>

                <div className='seccion1-contenido'>
                    <div className='main-target'>
                        <h1 className='animate__animated'>Lab 5: Chat JS</h1>
                        <a
                        target='_blank'
                        href='http://18.223.21.211:3164'> 
                        </a>
                    </div>
                    
                    <div className='second-target'>
                        <MiniTarget
                        titulo='Lab 1'
                        descripcion='El internet antes de la web'
                        url='https://github.com/carrillo21108/STW-Lab1.git'
                        urlImage='https://wallpaperaccess.com/full/1445467.jpg'/>

                        <MiniTarget
                        titulo='Lab 2'
                        descripcion='Administración de servidores remotos'
                        url='http://18.223.21.211:3160'
                        urlImage='https://c4.wallpaperflare.com/wallpaper/530/114/541/data-center-datacenter-google-server-wallpaper-preview.jpg'/>

                        <MiniTarget
                        titulo='Lab 3'
                        descripcion='HTML Only'
                        url='http://18.223.21.211:3161'
                        urlImage='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'/>
                        
                        <MiniTarget
                        titulo='Lab 4'
                        descripcion='CSS Only'
                        url='http://18.223.21.211:3162'
                        urlImage='https://c0.wallpaperflare.com/preview/832/992/14/code-coding-data-development-thumbnail.jpg'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seccion1