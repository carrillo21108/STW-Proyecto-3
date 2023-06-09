import './MiniTarget.scss'
import React from 'react'

function MiniTarget(props){

    const backUrl = 'url('+props.urlImage+')'
    
    const style = {
        position: 'absolute',
        height: '120px',
        width: '15%',
        clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginLeft: '17.9%',
        borderTopRightRadius: '2px',
        borderBottomRightRadius: '2px',
        backgroundImage: backUrl,
    };

    const style_ref = {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top:'0',
        left:'0',
    };

    return(
        <div style={{marginBottom:'10px'}}>
            <div className='minitarget-container'>
                <div className='minitarget-content'>
                    <div>
                        <h2 className='animate__animated'>{props.titulo}</h2>
                        <p className='animate__animated'>{props.descripcion}</p>
                    </div>
                    <a style={style_ref}
                        href={props.url}
                        target='_blank'> 
                    </a>
                </div>

                <div className='minitarget-image'
                style={style}>
                    <a style={style_ref}
                    href={props.url}
                    target='_blank'> 
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default MiniTarget