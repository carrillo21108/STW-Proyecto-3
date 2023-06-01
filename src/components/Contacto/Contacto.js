import './Contacto.scss'
import React from 'react'

function Contacto(){

    return(
        <div>
            <div className='contact-container'>
                <div className='contact-content'>
                    <div>
                        <h2 className='animate__animated'>¡Contáctame!</h2>
                        <p>¿Te interesa saber más sobre mi trabajo o sobre cómo puedo colaborar en tu proyecto? Contáctame por cualquiera de las siguientes vías.</p>
                        
                        <div>
                            <a
                            href='https://github.com/carrillo21108'
                            target='_blank' className='first-target animate__animated'>
                                <span>
                                    + 30
                                </span>
                                Repositorios en GitHub
                            </a>
                            <a
                            href='https://www.linkedin.com/in/brian-anthony-carrillo-monzón-0b1701204/'
                            target='_blank' className='second-target animate__animated'>
                                <span>
                                    9
                                </span>
                                Contactos en LinkedIn
                            </a>
                        </div>

                        <a
                        href='mailto:bcarrillo0311@gmail.com'
                        target='_blank' className='principal-target animate__animated'>
                            <span>
                                Enviar e-mail
                            </span>
                        </a>
                    </div>
                </div>

                <div className='contact-image'>
                </div>
                
            </div>
        </div>
    );
}

export default Contacto