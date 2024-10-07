import React from 'react'
import Input from '../../Input'
import { IoWarningOutline } from 'react-icons/io5'
import PhoneInput from '../../PhoneInput/PhoneInput'

const AdditionalDetails = ({ formik }) => {
  console.log(formik)
  return (
    <>
            <div className='container padded-v-large text-center'>
                <h1 className='heading-2'>Customer Details</h1>
                <p>Fill your details to complete your reservation</p>
            </div>
            <div className='container row'>
                <div className='grid-col grid-md-col-6 grid-md-start-4 flex flex-col gap-large'>
                    <Input formik={formik} name="firstName" placeholder="First Name" label="First Name" />
                    <Input formik={formik} name="lastName" placeholder="Last Name" label="Last Name" />
                    <Input formik={formik} name="email" type="email" placeholder="Email" label="Email" />
                    <PhoneInput formik={formik} name="phone" label="Phone" />
                    <div className='flex flex-col relative'>
                        <label htmlFor="specialRequest">Special Request</label>
                        <textarea
                          id='specialRequest'
                          name="specialRequest"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.specialRequest}
                          placeholder="Comment"
                          rows={5}
                        />
                    </div>
                    <div className='flex relative gap-medium'>
                      <label htmlFor="privacyPolicy">You agree to our friendly privacy policy</label>
                      <input 
                        type='radio'
                        id='privacyPolicy'
                        name='privacyPolicy'
                        // value='privacyPolicy'
                        onChange={formik.handleChange}
                        value={true} />
                      {formik.touched.privacyPolicy && formik.errors.privacyPolicy && (
                          <div className="error flex gap-small align-center"><IoWarningOutline /> {formik.errors.privacyPolicy}</div>
                      )}
                    </div>
                </div>
            </div>
        </>
  )
}

export default AdditionalDetails