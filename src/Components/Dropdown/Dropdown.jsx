import React, { useState, useRef, useEffect } from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
import './Dropdown.css'
import { FaRegUser } from "react-icons/fa6";

const Dropdown = ({ options, placeholder, name, formik, gridClass, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option) => {
        formik.setFieldValue(name, option.value);
        setIsOpen(false);
    };

    return (
      <div className="custom-dropdown color-black" ref={dropdownRef}>
        <div 
            className={`dropdown-header ${formik.values[name] && !isOpen ? 'selected' : ''}`}
            onClick={toggleDropdown}
        >
            <span className='flex align-center gap-medium'>{icon}
            {formik.values[name] ? options.find(opt => opt.value === formik.values[name])?.label : placeholder}</span>
            <span className={`arrow ${isOpen ? 'up' : 'down'} ${formik.values[name] && !isOpen ? ' selected' : ''}`}></span>
        </div>
        {isOpen && (
          <ul className="dropdown-list row">
            {options?.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`${gridClass} ${formik.values[name] === option.value ? 'selected' : ''}`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        {formik.touched[name] && formik.errors[name] && (
            <div className="error">{formik.errors[name]}</div>
        )}
      </div>
    );
  };
  
  export default Dropdown;