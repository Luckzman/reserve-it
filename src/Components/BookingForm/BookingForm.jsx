/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { api } from '../../utils/FetchAPI';
import { useNavigate } from 'react-router-dom';
import BookingDetails from './BookingDetails/BookingDetails';
import AdditionalDetails from './AdditionalDetails/AdditionalDetails';


const guestOptions = Array(10).fill().map((_, index) => ({
    value: String(index + 1),
    label: `${index + 1} ${index === 0 ? 'Diner' : 'Diners'}`
}))

const occasionOptions = [
    { value: 'birthday', label: 'Birthday' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'anniversary', label: 'Anniversary' },
]


const step1ValidationSchema = Yup.object({
    availableDate: Yup.string().required("Date is Required"),
    availableTime: Yup.string().required('Time is Required'),
    guests: Yup.string().required('Number of Guest Required'),
    occasion: Yup.string().required('Occasion is Required'),
    seatingType: Yup.string().required('Seating Type is Required')
});

const step2ValidationSchema = Yup.object({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    phone: Yup.string().required('Phone Number is Required'),
    comment: Yup.string(),
    privacyPolicy: Yup.boolean().oneOf([true], 'You must agree to the privacy policy')
});

const initialValues = {
  availableDate: null,
  availableTime: '',
  guests: '',
  occasion: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  comment: '',
  seatingType: '',
  privacyPolicy: false
}

const BookingForm = ({ availableTimes, getDate }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    const formik = useFormik({
      initialValues,
      onSubmit: (value) => {
        api.fetchAPI(value)
          .then(res => {
              if(res) navigate('/booking-success')
          })
          .catch(error => {
              console.error('Error fetching times:', error);
          });
      },
      validate: async (values) => {
        try {
          await (currentStep === 1 ? step1ValidationSchema : step2ValidationSchema).validate(values, { abortEarly: false });
        } catch (err) {
            return err.inner.reduce((errors, error) => {
                errors[error.path] = error.message;
                return errors;
            }, {});
        }
      },
    });

    const handleNext = async () => {
      const errors = await formik.validateForm();
      if (Object.keys(errors).length === 0 && currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        formik.setErrors(errors);
        formik.setTouched(
          Object.keys(errors).reduce((touched, field) => {
            touched[field] = true;
            return touched;
          }, {})
        );
      }
    };

    const handlePrevious = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const memoizedFormik = useMemo(() => ({
      values: formik.values,
      touched: formik.touched,
      errors: formik.errors,
      handleChange: formik.handleChange,
      handleBlur: formik.handleBlur,
      setFieldValue: formik.setFieldValue,
      getFieldProps: formik.getFieldProps
  }), [formik.values, formik.touched, formik.errors, formik.getFieldProps]);


    const renderPage = () => {
        switch (currentStep) {
            case 1:
                return <BookingDetails 
                    formik={memoizedFormik} 
                    occasionOptions={occasionOptions} 
                    availableTimes={availableTimes}
                    getDate={getDate}
                    guestOptions={guestOptions}
                    nextPage={handleNext}
                />
            case 2:
                return <AdditionalDetails 
                    formik={memoizedFormik}
                    nextPage={handleNext}
                    prevPage={handlePrevious} 
                />
            default:
                return null;
        }
    }

    return (
        <form onSubmit={formik.handleSubmit} className='padded-v-xlarge background-primary-1 color-white'>
            {renderPage()}
            <div className='container row padded-v-large'>
              <div className='grid-col grid-md-col-6 grid-md-start-4 flex justify-between  gap-large'>
                  {currentStep > 1 && (
                  <button className='primary-button' type="button" onClick={handlePrevious}>
                      Back
                  </button>
                  )}
                  {currentStep < 2 && (
                  <button className='primary-button full-width' type="button" onClick={handleNext}>
                      Make Reservation
                  </button>
                  )}
                  {currentStep === 2 && (
                  <button className='primary-button' type="submit" >
                      Confirm Reservation
                  </button>
                  )}
              </div>

            </div>
        </form>
    )
}

export default BookingForm