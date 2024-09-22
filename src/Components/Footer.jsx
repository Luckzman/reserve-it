import React from 'react'
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='padded-v-xlarge background-gray-1'>
        <div className='container row'>
            <figure className='grid-md-col-2 grid-lg-col-3'>
                <img src={Logo} alt="logo" />
            </figure>
            <div className='grid-md-col-8 grid-lg-col-9'>
                <div className='row'>
                    <ul className='grid-md-col-4'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservation</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                    <ul className='grid-md-col-4'>
                        <li><a href="">5400 N. Lakewood Ave. in Chicago</a></li>
                        <li><a href="">1-330-2246-879</a></li>
                        <li><a href="">info@littlelemon.com</a></li>
                    </ul>
                    <ul className='grid-md-col-4'>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer