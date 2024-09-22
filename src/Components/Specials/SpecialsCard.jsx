import React from 'react'
import cardImg from '../../assets/lemon dessert.png'

const SpecialsCard = () => {
  return (
    <div className='grid-col grid-md-col-4 border-left-right-radius background-gray-1'>
        <img src={cardImg} alt="" className='border-left-right-radius' />
        <div className='padded-medium'>
          <div className='flex justify-between align-center' >
              <h3>Greek Salad</h3>
              <span className='color-secondary-1'>$12.99</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
    </div>
  )
}

export default SpecialsCard