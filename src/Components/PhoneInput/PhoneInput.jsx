import React, { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import './PhoneInput.css';

const countryCodes = [
  { code: 'US', dialCode: '+1', flag: '🇺🇸' },
  { code: 'GB', dialCode: '+44', flag: '🇬🇧' },
  { code: 'IN', dialCode: '+91', flag: '🇮🇳' },
  { code: 'DE', dialCode: '+49', flag: '🇩🇪' },
  { code: 'FR', dialCode: '+33', flag: '🇫🇷' },
];

const PhoneInput = ({ formik, name, label }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    formik.setFieldValue([name], country.dialCode);
    setIsDropdownOpen(false);
  };

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    if (phoneNumber.startsWith(selectedCountry.dialCode)) {
      formik.setFieldValue([name], phoneNumber);
    }
  };

  return (
    <div className="phone-input-wrapper">
      <label htmlFor="phone">Phone Number</label>
      <div className="phone-input-container">
        <div className="country-dropdown" ref={dropdownRef}>
          <div 
            className="selected-country" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCountry.flag} {selectedCountry.code}
            <div><RiArrowDropDownLine size={'1.3em'} /></div>
          </div>
          {isDropdownOpen && (
            <div className="country-list">
              {countryCodes.map((country) => (
                <div 
                  key={country.code} 
                  className="country-item"
                  onClick={() => handleCountryChange(country)}
                >
                  {country.flag} {country.code}
                </div>
              ))}
            </div>
          )}
        </div>
        <span>{selectedCountry.dialCode}</span>
        <input
          type="tel"
          name={name}
          className="phone-input"
          value={formik.values[name]}
          onChange={handlePhoneChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <div className="error-message">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default PhoneInput;
