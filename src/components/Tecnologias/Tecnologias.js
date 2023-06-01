import './Tecnologias.scss'
import React from 'react'

import Card from '../Card/Card';

function Tecnologias(){
    const height = '170px';
    return(
        <div>
            <div className='tecnologias-container'>
                <div className='tecnologias-titulo'>
                    <h2>Habilidades</h2>
                    <p>Mi destreza y conocimiento en los siguientes lenguajes y tecnologías</p>
                </div>

                <div className='tecnologias-contenido'>
                    <Card
                    url='https://developer.mozilla.org/es/docs/Web/HTML'
                    src='https://static.wixstatic.com/media/36893f_94aaa79ace8c4823b0c7b13c522b4dac~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/html.png'
                    height={height}
                    name='HTML'
                    urlImage='https://colorate.azurewebsites.net/SwatchColor/222222'
                    />

                    <Card
                    url='https://developer.mozilla.org/es/docs/Web/CSS'
                    src='https://static.wixstatic.com/media/36893f_22035b3a37744cc08f6fad8326df66be~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/css.png'
                    height={height}
                    name='CSS'
                    urlImage='https://colorate.azurewebsites.net/SwatchColor/222222'
                    />

                    <Card
                    url='https://developer.mozilla.org/es/docs/Web/Javascript'
                    src='https://static.wixstatic.com/media/36893f_8f0febcc2dda43668b4568a63109ee57~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logoJavaScript.png'
                    height={height}
                    name='JavaScript'
                    urlImage='https://colorate.azurewebsites.net/SwatchColor/222222'
                    />

                    <Card
                    url='https://es.react.dev'
                    src='https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png'
                    height={height}
                    name='React'
                    urlImage='https://colorate.azurewebsites.net/SwatchColor/222222'
                    />

                    <Card
                    url='https://nodejs.org/en'
                    src='https://cdn-icons-png.flaticon.com/512/5968/5968322.png'
                    height={height}
                    name='Node JS'
                    urlImage='https://colorate.azurewebsites.net/SwatchColor/222222'
                    />

                    <Card
                    url='https://ionicframework.com'
                    src='https://static-00.iconduck.com/assets.00/file-type-ionic-icon-2048x2048-q5lewnnz.png'
                    height={height}
                    name='Ionic'
                    urlImage='https://colorate.azurewebsites.net/SwatchColor/222222'
                    />

                    <Card
                    url='https://www.mongodb.com'
                    src='https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png'
                    height={height}
                    name='MongoDB'
                    urlImage='https://colorate.azurewebsites.net/SwatchColor/222222'
                    />

                    <Card
                    url='https://angular.io'
                    src='https://static.wixstatic.com/media/36893f_3b0f792fc88142ffae269c24f12746f5~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logoAngular.png'
                    height={height}
                    name='Angular'
                    urlImage='https://colorate.azurewebsites.net/SwatchColor/222222'
                    />
                </div>
            </div>
        </div>
    );
}

export default Tecnologias