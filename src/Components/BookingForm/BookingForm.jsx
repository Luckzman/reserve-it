import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { api } from '../../utils/FetchAPI';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes, getDate }) => {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          availableDate: '',
          availableTime: '',
          guests: 1,
          occasion: ''
        },
        onSubmit: (value) => {
          api.fetchAPI(value)
            .then(res => {
                if(res) navigate('/booking-success')
            })
            .catch(error => {
                console.error('Error fetching times:', error);
            });
        },
        validationSchema: Yup.object({
          availableDate: Yup.string().required("Required"),
          availableTime: Yup.string().required('Required'),
          occasion: Yup.string().required('Required')
        }),
    });


    return (
        <section className='container padded-v-xlarge'>
            <h1 className='heading-2 text-center'>Booking Form</h1>
            <div className='row'>
                <form data-testid='booking-form' onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }} className='grid-col grid-md-col-6 grid-md-start-4 flex flex-col gap-large'>
                    <div className='flex flex-col row-gap-small'>
                        <label htmlFor="res-date">Choose date</label>
                        <input 
                            type="date" 
                            id="res-date" 
                            name='availableDate'  
                            {...formik.getFieldProps('availableDate')} 
                            onChange={(e) => {
                                formik.handleChange(e);
                                getDate(e.target.value);
                            }}
                        />
                        {formik.touched.availableDate && formik.errors.availableDate && (
                            <span data-testid="date-error" style={{color: 'red'}}>{formik.errors.availableDate}</span>
                        )} 
                    </div>
                    <div className='flex flex-col row-gap-small'>
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time"  name='availableTime' {...formik.getFieldProps('availableTime')}  >
                            {availableTimes.map(item => <option data-testid={`time-list-${item}`} key={item} value={item}>{item}</option>)}
                        </select>
                        {formik.touched.availableTime && formik.errors.availableTime && (
                            <span data-testid="time-error" style={{color: 'red'}}>{formik.errors.availableTime}</span>
                        )}
                    </div>
                    <div className='flex flex-col row/>¯-gap-small'>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" name='guest' {...formik.getFieldProps('guests')}  />                    </div>
                    <div className='flex flex-col row-gap-small'>
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" name='occasion' {...formik.getFieldProps('occasion')} >
                            <option>Choose an occasion</option>
                            <option value='birthday'>Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                        {formik.touched.occasion && formik.errors.occasion && (
                            <span data-testid="occasion-error" style={{color: 'red'}}>{formik.errors.occasion}</span>
                        )}
                    </div>
                    <input type="submit" value="Make Your reservation" className='primary-button' />
                </form>
            </div>
        </section>
    )
}

export default BookingForm