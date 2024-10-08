import React from 'react'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='container'>
        <div className='row padded-v-small'>
            <div className=' grid-col grid-md-col-4'>
              <Link to="/"><img src={Logo} alt="logo" style={{ width: '250px'}} /></Link>
            </div>
            <ul className='grid-col grid-md-col-8 flex flex-col flex-lg-row flex-start flex-lg-end gap-small gap-md-medium'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav