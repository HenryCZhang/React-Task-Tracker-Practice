//type rafce -> get the boilerplate for the component
import React from 'react'
import Button from './Button'
import './Header.css'

const Header = ({title,onAdd,showAdd}) => {
    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>
            <Button 
            color={showAdd?'red':'green'} 
            text={showAdd?'Close':'Add'} 
            onClick={onAdd}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
