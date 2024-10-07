import React from 'react'
import { IoWarningOutline } from 'react-icons/io5'

const Input = ({ formik, name, type='text', placeholder, label }) => {
  return (
    <div className={'flex flex-col relative'}>
        <label htmlFor={name}>{label}</label>
        <input
            id={name}
            type={type}
            name={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            placeholder={placeholder}
        />
        {formik.touched[name] && formik.errors[name] && (
            <div className="error flex gap-small align-center"><IoWarningOutline /> {formik.errors[name]}</div>
        )}
    </div>
  )
}

export default Input