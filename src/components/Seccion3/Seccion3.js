import './Seccion3.scss'
import React from 'react'

import Card from '../Card/Card';

function Seccion3(){
    const height = '250px';
    return(
        <div>
            <div className='seccion3-container'>
                <div className='seccion3-titulo'>
                    <h2>Proyectos</h2>
                </div>

                <div className='seccion3-contenido'>
                    <Card
                    url='https://stw-proyecto-1.web.app'
                    height={height}
                    title='Replica Página de Riot Games'
                    urlImage='https://img.helpnetsecurity.com/wp-content/uploads/2023/01/25124149/riot-games-1280.jpg'
                    />

                    <Card
                    url='https://github.com/Carloslpez219/Filmy.git'
                    height={height}
                    title='Aplicación Móvil Filmy'
                    urlImage='https://cdn.hashnode.com/res/hashnode/image/upload/v1607853398877/AUXA43sUw.jpeg'
                    />

                    <Card
                    url='https://github.com/carrillo21108/STW-Proyecto-3.git'
                    height={height}
                    title='Portafolio Web'
                    urlImage='https://c0.wallpaperflare.com/preview/591/474/555/dark-script-jetbrain-webstorm.jpg'
                    />
                </div>
            </div>
        </div>
    );
}

export default Seccion3