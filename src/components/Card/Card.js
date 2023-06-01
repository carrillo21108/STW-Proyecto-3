import React,{useState} from 'react'

function Card(props){

    const backUrl = 'url('+props.urlImage+')'
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const style = {
        position: 'relative',
        width: '100%',
        marginRight: '2%',
        height: props.height,
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '2px',

        backgroundImage: backUrl,
        marginLeft: props.margin,

        border: '2.5px solid #1f1f1f',
        transition: 'border-color 0.3s ease',
        borderColor: isHovered ? '#9E9C99' : '#1f1f1f',
        marginTop:'10px'
    }

    const style_a = {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%'
    }

    const style_img = {
        position: 'absolute',
        width:'50%',
        height: 'auto',
        top: 0,
        left: 0,
        marginTop: '5%',
        marginLeft: '26%'  
    }

    const style_h1 = {
        position: 'absolute',
        top: '0',
        left: '0',
        fontFamily: 'Playfair Display',
        fontWeight: '700',
        fontSize: '1.4rem',
        lineHeight: 'inherit',
        display: 'flex',
        justifyContent: 'left',
        marginBottom: '2.5rem',
        marginBlockStart: '0',
        letterSpacing: '.07em',
        textAlign: 'left',
        color: '#f9f9f9',
        marginLeft: '5%',
        marginTop: '200px'
    }

    return(
        <div style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <img src={props.src} style={style_img}/>
            <h1 style={style_h1} className='animate__animated'>{props.title}</h1>
            <a style={style_a}
            href={props.url}
            target='_blank'> 
            </a>
            <p className='animate__animated'>{props.name}</p>
        </div>
    );
}

export default Card