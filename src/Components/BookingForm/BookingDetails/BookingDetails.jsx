import React from 'react'
import Dropdown from '../../Dropdown/Dropdown';
import { LiaGlassCheersSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";
import { IoWarningOutline } from 'react-icons/io5';


const BookingDetails = ({ formik, availableTimes, getDate, guestOptions, occasionOptions }) => {
    return (
        <>
            <div className='container  padded-v-large text-center '>
                <h1 className='heading-2'>Booking Form</h1>
                <p>Fill the form to make your reservation</p>
            </div>
            <div className='container row'>
                <div className='grid-col grid-md-col-6 grid-md-start-4 flex flex-col gap-large'>
                    <div className='flex flex-col'>
                        <label htmlFor="res-date">Choose date</label>
                        <Dropdown
                            options={availableTimes}
                            placeholder="Select Date"
                            formik={formik}
                            name='availableDate'
                            icon={<FiCalendar size='1.5em' />}
                            datePicker
                            getDate={getDate}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="guests">Time</label>
                        <Dropdown
                            options={availableTimes}
                            placeholder="Select Time"
                            formik={formik}
                            name='availableTime'
                            gridClass="grid-md-col-6"
                            icon={<LuAlarmClock size='1.5em' />}
                        />
                    </div>
                    <div className='flex flex-col'>
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
                    <div className='flex flex-col'>
                        <label htmlFor="guests">Occasion</label>
                        <Dropdown
                            options={occasionOptions}
                            placeholder="Occasion"
                            formik={formik}
                            name='occasion'
                            gridClass="grid-col"
                            icon={<LiaGlassCheersSolid size='1.5em' />}
                        />
                    </div>
                    <div className='relative'>
                        <div className='flex gap-large'>
                            <div className='flex align-center gap-medium'>
                                <label htmlFor="indoor">Indoor Seating</label>
                                <input type='radio' id='indoor' name='seatingType' value={formik.values.indoors || 'indoors'} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
                            </div>
                            <div className='flex  align-center gap-medium'>
                                <label htmlFor="outdoor">Outdoor Seating</label>
                                <input type='radio' id='outdoor' name='seatingType'value={formik.values.outdoors || 'outdoors'} onChange={formik.handleChange}  onBlur={formik.handleBlur} />
                            </div>
                        </div>
                        {formik.touched.seatingType && formik.errors.seatingType && (
                            <div className="error flex gap-small align-center"><IoWarningOutline /> {formik.errors.seatingType}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingDetails