import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { IoWarningOutline } from "react-icons/io5";


const Dropdown = ({ options, placeholder, name, formik, gridClass, icon, datePicker, getDate }) => {
    // console.log('formik - dropdown', formik);  

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

    const handleDateChange = (date) => {
        formik.setFieldValue(name, date.format('YYYY-MM-DD'));
        getDate(date.format('YYYY-MM-DD'));
        setIsOpen(false);
    }

    const renderDropdownContent = () => {
        if (datePicker) {
          return (
            <div className='dropdown-list'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                        value={formik.values[name] ? dayjs(formik.values[name]) : null} 
                        onChange={handleDateChange}
                        sx={{ 
                            width: '100%',
                            '& .MuiDayCalendar-header': { justifyContent: 'space-around' },
                            '& .MuiDayCalendar-weekDayLabel': { fontWeight: '700' },
                            '& .Mui-selected': { backgroundColor: '#f4ce14' },
                            '& .MuiDayCalendar-weekContainer': { justifyContent: 'space-around' }
                        }}
                    />
                </LocalizationProvider>
            </div>
          );
        }
        return (
            <ul className="dropdown-list row" role='listbox' aria-label={`${placeholder} options`}>
                {options?.map((option) => (
                <li
                    key={option.value}
                    role='option'
                    aria-selected={formik.values[name] === option.value}
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => handleOptionClick(option)}
                    className={`${gridClass} ${formik.values[name] === option.value ? 'selected' : ''}`}
                >
                    {option.label}
                </li>
                ))}
            </ul>
        );
      };
    

    const displayValue = () => {
        if (datePicker && formik.values[name]) {
          return formik.values[name];
        }
        if (!datePicker && formik.values[name]) {
          return options.find(opt => opt.value === formik.values[name])?.label;
        }
        return placeholder;
    };
    
    return (
      <div className="custom-dropdown color-black" ref={dropdownRef}>
        <div 
            className={`dropdown-header ${formik.values[name] && !isOpen ? 'selected' : ''} ${formik.touched[name] && formik.errors[name] ? 'error-border' : ''}`}
            onClick={toggleDropdown}
        >
            <span className='flex align-center gap-medium'>
                {icon}
                {displayValue()}
            </span>
            <span className={`arrow ${isOpen ? 'up' : 'down'} ${formik.values[name] && !isOpen ? ' selected' : ''}`}></span>
        </div>
        {isOpen && renderDropdownContent()}
        {formik.touched[name] && formik.errors[name] && (
            <div className="error flex gap-small align-center"><IoWarningOutline /> {formik.errors[name]}</div>
        )}
      </div>
    );
  };
  
  export default Dropdown;