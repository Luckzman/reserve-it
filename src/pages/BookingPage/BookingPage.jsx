import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import BookingForm from '../../Components/BookingForm/BookingForm';
import { api } from '../../utils/FetchAPI';

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([])

  const getDate = (date) => {
    const day = date.split('-')[2];
    api.fetchAPI(day)
      .then(res => {
        setAvailableTimes(res.data)
      })
      .catch(error => {
        console.error('Error fetching times:', error);
      });
  }

  return (
    <Layout>
        <BookingForm availableTimes={availableTimes} getDate={getDate} />
    </Layout>
  )
}

export default BookingPage;