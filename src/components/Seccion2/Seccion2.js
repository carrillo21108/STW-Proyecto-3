import './Seccion2.scss'
import React from 'react'

import Card from '../Card/Card';

function Seccion2(){
    const height = '250px';
    return(
        <div>
            <div className='seccion2-container'>
                <div className='seccion2-titulo'>
                    <h2>Webpack, Babel y React</h2>
                </div>

                <div className='seccion2-contenido'>
                    <Card
                    url='https://github.com/carrillo21108/STW-Lab6.git'
                    height={height}
                    title='Lab 6: WebComponent'
                    urlImage='https://300school.com/wp-content/uploads/2019/12/blur-close-up-code-computer-546819-1080x675.jpg'
                    />

                    <Card
                    url='https://github.com/carrillo21108/STW-Lab7.git'
                    height={height}
                    title='Lab 7: Webpack, SASS y Babel'
                    urlImage='https://www.latevaweb.com/diseno-web/programacion-web-para-cuando-el-html5.jpg'
                    />

                    <Card
                    url='https://memoria-react.web.app'
                    height={height}
                    title='Lab 8: React'
                    urlImage='https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                    />

                    <Card
                    url='https://stw-calculadora.web.app'
                    height={height}
                    title='Lab 9: Calculadora'
                    urlImage='https://t3.ftcdn.net/jpg/04/57/12/80/360_F_457128092_6kyDswhxtRySUSfqsLp2Ul8DKucUH9Sc.jpg'
                    />
                </div>
            </div>
        </div>
    );
}

export default Seccion2