import React from 'react'
import Logo from './assets/logo.svg'

const Nav = () => {
  return (
    <nav>
        <figure>
            <img src={Logo} alt="logo" />
        </figure>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservation</a></li>
            <li><a href="">Order Online</a></li>
            <li><a href="">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav