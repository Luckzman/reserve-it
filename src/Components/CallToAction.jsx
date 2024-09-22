import React from 'react'
import heroImg from '../assets/hero-img.png';

const CallToAction = () => {
  return (
    <section className='background-primary-1'>
        <div className="container">
            <div className="row col-gap-xlarge">
                <div className='grid-md-col-6 flex flex-col justify-center row-gap-medium'>
                    <div>
                        <h1 className='color-primary-2' style={{ lineHeight: '15px' }}>Little Lemon</h1>
                        <h3 className='color-white'>Chicago</h3>
                    </div>
                    <p className='color-white'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className='primary-button'>Reserve a Table</button>
                </div>
                <div className='grid-md-col-6'>
                    <img src={heroImg} alt="hero" style={{ marginBottom: '-50px', paddingTop: '50px'}} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction