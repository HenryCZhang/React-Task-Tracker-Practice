import React from 'react'

const Button = ({color,text,onClick}) => {

    const btnClick = (event)=>{
        console.log(event.target.text);
    }

    return (
        <div>
           <button 
           onClick={onClick}
           style={{backgroundColor:color}} 
           className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color:'steelblue',
    text:'Button'
}
export default Button
