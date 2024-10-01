import React from 'react'
import heroImg from '../assets/hero-img.png';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className='background-primary-1'>
        <div className="container">
            <div className="row col-gap-small padded-v-medium">
                <div className='grid-col grid-md-col-6 flex flex-col justify-center row-gap-medium'>
                    <>
                        <h1 className='color-primary-2' style={{ lineHeight: '15px' }}>Little Lemon</h1>
                        <h3 className='color-white'>Chicago</h3>
                    </>
                    <p className='color-white'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" className='primary-button flex justify-center align-center'>Reserve a Table</Link>
                </div>
                <div className='grid-col grid-md-col-6'>
                    <img src={heroImg} alt="hero" style={{ marginBottom: '-50px', paddingTop: '50px'}} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction