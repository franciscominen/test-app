import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{
            display:'flex',
            width:'100%',
            justifyContent:'space-around',
            padding:'24px',
            fontSize:'20px'
        }}>
            <NavLink to='/productos'>PRODUCTOS</NavLink>
            <NavLink to='/mi-lista'>MI LISTA</NavLink>
        </div>
    )
}

export default Navbar
