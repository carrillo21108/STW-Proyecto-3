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

    return(
        <div style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <img src={props.src} style={style_img}/>
            <a style={style_a}
            href={props.url}
            target='_blank'> 
            </a>
            <p>{props.name}</p>
        </div>
    );
}

export default Card