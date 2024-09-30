import React, { useEffect, useReducer, useState } from 'react'
import Layout from '../../Components/Layout'
import BookingForm from '../../Components/BookingForm/BookingForm';
import { api } from '../../utils/FetchAPI';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export const initializeTimes = (dateInput) => dispatch => {
  if (!dateInput) {
      dispatch({ type: 'UPDATE_TIMES', payload: [] });
    return;
  }
  const day = dateInput.split('-')[2];
    api.fetchAPI(day)
      .then(res => dispatch({ type: 'UPDATE_TIMES', payload: res }))
      .catch(error => console.error('Error fetching times:', error));
}

export const updateTimes =  (state = [], action) => {
  switch (action.type) {
      case 'UPDATE_TIMES':
          return action.payload || [];
      default:
        return state;
  }
}

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([])
  const [, dispatch] =  useReducer(updateTimes, [])

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