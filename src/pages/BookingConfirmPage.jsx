import React from 'react'
import Layout from '../Components/Layout'
import { Link } from 'react-router-dom'

const BookingConfirmPage = () => {
  return (
    <Layout>
        <div className='padded-v-large background-primary-1 text-center color-white'>
            <h1 className='heading-2'>Booking Confirmation</h1>
        </div>
        <div className='container padded-v-xlarge'>
            <div className='padded-v-large text-center flex flex-col justify-center align-center row-gap-medium'>
                <h2>Thank you</h2>
                <p>We appreciate the time you took to reserve a sit in resturant. <br />You booking has been confirmed.</p>
                <Link to="/" className='primary-button flex justify-center align-center'>Go Home</Link>
            </div>
        </div>

    </Layout>
    
  )
}

export default BookingConfirmPage