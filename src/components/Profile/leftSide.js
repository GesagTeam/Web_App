import React, { useState, useRef, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./leftSide.css";

const LeftSide = () => {


    const [isGenderOpen, setIsGenderOpen] = useState(false);
    const [isMaritalStatusOpen, setIsMaritalStatusOpen] = useState(false);
    const [isNationalityOpen, setIsNationalityOpen] = useState(false);

    const toggleGenderDropdown = () => setIsGenderOpen(!isGenderOpen);
    const toggleMaritalStatusDropdown = () => setIsMaritalStatusOpen(!isMaritalStatusOpen);
    const toggleNationalityDropdown = () => setIsNationalityOpen(!isNationalityOpen);

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference for dropdown

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthDate: "",
        nationality: "",
        gender: "",
        maritalStatus: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className="form-container">
            <img className="stepOne" src="/images/numberOne.svg" alt="Step 1" />
            <h2 className="form-title">Personal Info</h2>
            <div className="profile-photo">
                <img src="/images/profileIcon.svg" alt="Profile" />
                <button className="upload-btn">
                    <img src="/images/uploadicon.svg" alt="Upload" />
                    Upload Profile Photo
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter official first name e.g: Faisal"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter family name e.g: Quraishi"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <label>Birth Date</label>
                <div className="date-input-wrapper">
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="custom-date-input"
                    />
                    <img
                        src="/images/calendar-search.svg"
                        alt="Calendar Icon"
                        className="date-icon"
                        onClick={() => document.querySelector('input[type="date"]').showPicker()}
                    />
                </div>

                <label>Nationality</label>
                <div className="custom-select-wrapper">
                    <div className="custom-select-container">
                        <select
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            className="custom-select"
                        >
                            <option value="">Select Nationality</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                        </select>
                        <span className="custom-arrow">
                            <img src="/images/arrow-down.svg" alt="arrow" />
                        </span>
                    </div>
                </div>

                <label>Phone Number</label>
                <div className="phone-input">
                    <select
                        className="custom-select phone-code"
                        onChange={handleChange}
                        name="phoneCode"
                    >
                        <option value="+966">+966</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                    </select>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="--- --- ---"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <label>Gender</label>
                <div className="custom-select-wrapper">
                    <div className="custom-select-container">
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="custom-select"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <span className="custom-arrow">
                            <img src="/images/arrow-down.svg" alt="arrow" />
                        </span>
                    </div>
                </div>

                <label>Marital Status</label>
                <div className="custom-select-wrapper">
                    <div className="custom-select-container" onClick={toggleMaritalStatusDropdown}>
                        <div className="custom-select">
                            {formData.maritalStatus || "Select Marital Status"}
                        </div>
                        <span className="custom-arrow">
                            <img src="/images/arrow-down.svg" alt="arrow" />
                        </span>
                    </div>
                    {isMaritalStatusOpen && (
                        <div className="custom-dropdown-list">
                            <div
                                className="custom-dropdown-item pink"
                                onClick={() => setFormData({ ...formData, maritalStatus: "Single" })}
                            >
                                Single
                            </div>
                            <div
                                className="custom-dropdown-item orange"
                                onClick={() => setFormData({ ...formData, maritalStatus: "Married" })}
                            >
                                Married
                            </div>
                        </div>
                    )}
                </div>


                <div className="parent-container">
                    <button type="submit" className="save-btn">
                        Save
                    </button>
                </div>
            </form>

         
            
        </div>
    );
};

export default LeftSide;