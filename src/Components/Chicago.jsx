import React from 'react'
import chicagoImg from '../assets/restaurant.jpg';

const Chicago = () => {
  return (
    <section className='container padded-v-xlarge'>
        <div className="row gap-small gap-lg-large">
            <div className='grid-col grid-md-col-5 grid-md-start-2'>
                <h2>Little lemon</h2>
                <h3>Chicago</h3>
                <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
            </div>
            <figure className='grid-col grid-md-col-5 flex justify-center align-center'>
                <img src={chicagoImg} alt='Little lemon' className='img-shadow' />
            </figure>
        </div>
    </section>
  )
}

export default Chicago