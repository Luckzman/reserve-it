import React from 'react'
import Layout from '../Components/Layout'

const BookingConfirmPage = () => {
  return (
    <Layout>
        <div className='container padded-v-xlarge'>
            <h1>Booking Confirmation</h1>
            <div className='padded-v-large'>
                <h2>Thank you</h2>
                <p>We appreciate the time you took to reserve a sit in resturant. You booking has been confirmed.</p>
            </div>
        </div>

    </Layout>
    
  )
}

export default BookingConfirmPage