import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { api } from '../../utils/FetchAPI';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { LiaGlassCheersSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";



const guestOptions = [
    { value: '1', label: '1 Diner' },
    { value: '2', label: '2 Diners' },
    { value: '3', label: '3 Diners' },
    { value: '4', label: '4 Diners' },
    { value: '5', label: '5 Diners' },
    { value: '6', label: '6 Diners' },
    { value: '7', label: '7 Diners' },
    { value: '8', label: '8 Diners' },
    { value: '9', label: '9 Diners' },
    { value: '10', label: '10 Diners' }
];

const occasionOptions = [
    { value: 'birthday', label: 'Birthday' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'anniversary', label: 'Anniversary' },
]

const BookingForm = ({ availableTimes, getDate }) => {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          availableDate: '',
          availableTime: '',
          guests: '',
          occasion: ''
        },
        onSubmit: (value) => {
            console.log(value, 'value')
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
          guests: Yup.string().required('Required'),
          occasion: Yup.string().required('Required')
        }),
    });

    return (
        <section className='padded-v-xlarge background-primary-1 color-white'>
            <div className='container  padded-v-large text-center '>
                <h1 className='heading-2'>Booking Form</h1>
                <p>Fill the form to make your reservation</p>
            </div>
            <div className='container'>
                <form data-testid='booking-form'
                    onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }} 
                    className='row row-gap-medium gap-lg-large'
                >
                    <div className='grid-col grid-md-col-6 flex align-center gap-medium'>
                        <label htmlFor="indoor">Indoor Seating</label>
                        <input type='radio' id='indoor' name='seatingType' value='indoor' />
                    </div>
                    <div className='grid-col grid-md-col-6 flex align-center gap-medium'>
                        <label htmlFor="outdoor">Outdoor Seating</label>
                        <input type='radio' id='outdoor' name='seatingType' value='outdoor' />
                    </div>
                    <div className='grid-col grid-md-col-6 flex flex-col'>
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
                    <div className='grid-col grid-md-col-6 flex flex-col'>
                        {/* <label htmlFor="res-time">Choose time</label>
                        <select id="res-time"  name='availableTime' {...formik.getFieldProps('availableTime')}  >
                            {availableTimes.length &&<option>Choose a timeslot</option>}
                            {availableTimes.map(item => <option data-testid={`time-list-${item}`} key={item} value={item}>{item}</option>)}
                        </select>
                        {formik.touched.availableTime && formik.errors.availableTime && (
                            <span data-testid="time-error" style={{color: 'red'}}>{formik.errors.availableTime}</span>
                        )} */}
                        <label htmlFor="guests">Time</label>
                        <Dropdown
                            options={availableTimes}
                            placeholder="Select time"
                            formik={formik}
                            name='availableTime'
                            gridClass="grid-md-col-6"
                            icon={<LuAlarmClock size='1.5em' />}
                        />
                    </div>
                    <div className='grid-col grid-md-col-6 flex flex-col'>
                        <label htmlFor="guests">Number of Diners</label>
                        <Dropdown
                            options={guestOptions}
                            placeholder="No. of Diners"
                            formik={formik}
                            name='guests'
                            gridClass="grid-md-col-6"
                            icon={<FaRegUser size='1.2em' />}
                        />
                    </div>
                    {/* <div className='grid-col grid-md-col-6 flex flex-col'>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" name='guest' {...formik.getFieldProps('guests')}  />                    </div>
                    </div> */}
                    <div className='grid-col grid-md-col-6 flex flex-col'>
                    <label htmlFor="guests">Occasion</label>
                        <Dropdown
                            options={occasionOptions}
                            placeholder="Occasion"
                            formik={formik}
                            name='occasion'
                            gridClass="grid-col"
                            icon={<LiaGlassCheersSolid size='1.5em' />}
                        />
                        {/* <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" name='occasion' {...formik.getFieldProps('occasion')} >
                            <option>Choose an occasion</option>
                            <option value='birthday'>Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                        {formik.touched.occasion && formik.errors.occasion && (
                            <span data-testid="occasion-error" style={{color: 'red'}}>{formik.errors.occasion}</span>
                        )} */}
                    </div>
                    <input aria-label="On Click" type="submit" value="Make Your reservation" className='grid-col primary-button' />
                </form>
            </div>
        </section>
    )
}

export default BookingForm