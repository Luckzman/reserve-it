import React from 'react'
import CustomersSayCard from './CustomersSayCard'

const CustomersSay = () => {
  return (
    <section className='background-gray-1'>
      <div className="container padded-v-xlarge">
          <h2 className='text-center padded-medium'>Testimonials</h2>
          <div className='row gap-small gap-lg-medium'>
              <CustomersSayCard />
              <CustomersSayCard />
              <CustomersSayCard />
              <CustomersSayCard />
          </div>
      </div>
    </section>
  )
}

export default CustomersSay