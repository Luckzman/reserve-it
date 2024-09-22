import React from 'react'
import testimonialImg from '../../assets/fred.png'

const CustomersSayCard = () => {
  return (
    <section className="grid-md-col-3 flex border-standard-radius overflow-hidden">
        <img src={testimonialImg} alt="" className='' style={{ height: '100%', width: '100px', objectFit: 'cover' }}/>
        <div className='background-white padded-medium'>
            <h3 className='heading-6'>Fred</h3>
            {/* <div>Rating</div> */}
            <p>I love little lemon.</p>
        </div>
    </section>
  )
}

export default CustomersSayCard;