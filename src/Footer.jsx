import React from 'react'
import Logo from './assets/logo.svg'

const Footer = () => {
  return (
    <footer>
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
        <ul>
            <li><a href="">5400 N. Lakewood Ave. in Chicago</a></li>
            <li><a href="">1-330-2246-879</a></li>
            <li><a href="">info@littlelemon.com</a></li>
        </ul>
        <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
            <li><a href="">Linkedin</a></li>
        </ul>
    </footer>
  )
}

export default Footer