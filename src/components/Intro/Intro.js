import './Intro.scss'
import React from 'react'
import code_img from '../../../public/img/code.png'
import portada_video from '../../../public/img/portada video.jpg'
import coding_video from '../../../public/video/coding video.mp4'

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
                    <h1 className='animate__animated animate__backInLeft'>PORTAFOLIO WEB</h1>
                    <p className='intro-parrafo1'><i>"Explora mi trabajo, conoce mi trayectoria"</i>- <b>Brian Carrillo</b></p>
                    <p className='intro-parrafo2'>En este portafolio conocerás más sobre los laboratorios y proyectos que he realizado durante mi trayectoria educativa dentro del ámbito de <b>desarrollo de web</b> en el curso de STW en la UVG. Principalmente encontrarás mi información personal y de contacto, lenguajes y tecnologías que aprendí y/o reforcé durante el curso. También tienes acceso al enlace del repositorio en GitHub de cada actividad.</p>
                    <a
                    href='#'
                    target='_blank'>
                        <span>
                            Ver Proyectos
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro