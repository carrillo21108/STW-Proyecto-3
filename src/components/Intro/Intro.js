import './Intro.scss'
import React from 'react'
import code_img from '../../../public/img/code.png'
import portada_video from '../../../public/img/portada video.jpg'
import coding_video from '../../../public/video/coding video.mp4'
import { Link } from 'react-router-dom';

function Intro(){

    return(
        <div>
            <div className='background-video'>
                <video
                autoPlay
                muted
                loop
                preload='auto'
                playsInline
                poster={portada_video}>
                    <source
                    src={coding_video}
                    type='video/mp4'></source>
                </video>
            </div>
            <div className='intro-container'>
                <div className='intro-content'>
                    <div>
                        <img src={code_img}/>
                    </div>
                    <h1 className='animate__animated'>Bienvenido</h1>
                    <p className='intro-parrafo1 animate__animated'><i>"Explora mi trabajo, conoce mi trayectoria"</i>- <b>Brian Carrillo</b></p>
                    <p className='intro-parrafo2'>En este portafolio conocerás más sobre los laboratorios y proyectos que he realizado durante mi trayectoria educativa dentro del ámbito de <b>desarrollo de web</b> en el curso de STW en la UVG. Principalmente encontrarás mi información personal y de contacto, lenguajes y tecnologías que aprendí y/o reforcé durante el curso. También tienes acceso al enlace del repositorio en GitHub de cada actividad.</p>
                    <Link className='animate__animated'
                    to='/proyectos'>
                        <span>
                            Ver Proyectos
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Intro