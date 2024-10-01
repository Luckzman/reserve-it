import React from 'react'
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='padded-v-xlarge background-gray-1'>
        <div className='container row gap-small'>
            <figure className='grid-col grid-md-col-4 grid-lg-col-3'>
                <img src={Logo} alt="logo" style={{ width: '250px'}} />
            </figure>
            <div className='grid-col grid-md-col-8 grid-lg-col-9'>
                <div className='row'>
                    <div className='grid-col grid-md-col-4'>
                        <h3>Navigations</h3>
                        <ul >
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Reservation</a></li>
                            <li><a href="">Order Online</a></li>
                            <li><a href="">Login</a></li>
                        </ul>

                    </div>
                    <div className='grid-col grid-md-col-4'>
                        <h3>Contact Us</h3>
                        <ul className='grid-col grid-md-col-4'>
                            <li><a href="">540 N. Lakewood Ave</a></li>
                            <li><a href="">1-330-2246-879</a></li>
                            <li><a href="">info@littlelemon.com</a></li>
                        </ul>
                    </div>
                    <div className='grid-col grid-md-col-4'>
                        <h3>Connect with us</h3>
                        <ul className='grid-col grid-md-col-4'>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer