import React, { useState } from 'react'
import Navbar from './Navbar'
import Box_1 from './Box_1'
import Footer from './Footer'
import Select from 'react-select';
import '../css/ProfileDetails.css'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProfileDetails() {

    const navigate=new useNavigate();


            const [formData, setFormData] = useState({
                    username:'',
                    email:'',
                    password:'',
                    firstName: '',
                    lastName: '',
                    role: 'admin',
                    address: {
                    section: '',
                    city: '',
                    postalCode: '',
                    state: '',
                    country: '',
                    },
                    company: {
                    companyName: '',
                    timezone: '',
                    location: '',
                    },
                    languages: [],
                });
                
                // Handle input changes for basic information
                const handleInputChange = (e) => {
                    const { name, value } = e.target;
                    setFormData((prevData) => ({
                    ...prevData,
                    [name]: value,
                    }));
                };
                
                // Handle input changes for address
                const handleAddressChange = (e) => {
                    const { name, value } = e.target;
                    setFormData((prevData) => ({
                    ...prevData,
                    address: {
                        ...prevData.address,
                        [name]: value,
                    },
                    }));
                };
                
                // Handle input changes for company details
                const handleCompanyChange = (e) => {
                    const { name, value } = e.target;
                    setFormData((prevData) => ({
                    ...prevData,
                    company: {
                        ...prevData.company,
                        [name]: value,
                    },
                    }));
                };
                
                // Handle language selection changes
                const handleLanguagesChange = (selectedOptions) => {
                    const selectedLanguages = selectedOptions.map((option) => option.value);
                    setFormData((prevData) => ({
                    ...prevData,
                    languages: selectedLanguages,
                    }));
                };
                
                // Handle form submission
                const handleSubmit = async (e) => {
                    e.preventDefault();
                
                    try {
                    // Send the form data to your backend API
                    const response = await fetch('https://influence-hub.onrender.com/your-backend-endpoint', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    });
                
                    if (!response.ok) {
                        window.alert("cant submit")
                        throw new Error('Network response was not ok');
                    }
                
                    // Handle the success response from your backend
                    const data = await response.json();
                    console.log('Success:', data);
                    window.alert('Sucessfully Submited');
                    navigate('/');
                    
                    } catch (error) {
                    // Handle errors
                    window.alert(error);
                    console.error('Error:', error);
                    }
                };
                
                // Clear the form data
                const handleClearForm = () => {
                    setFormData({
                    firstName: '',
                    lastName: '',
                    role: 'admin',
                    address: {
                        section: '',
                        city: '',
                        postalCode: '',
                        state: '',
                        country: '',
                    },
                    company: {
                        companyName: '',
                        timezone: '',
                        location: '',
                    },
                    languages: [],
                    });
                };
        
        
        const languageOptions = [
            { value: 'english', label: 'English' },
            { value: 'spanish', label: 'Spanish' },
            { value: 'french', label: 'French' },
            { value: 'german', label: 'German' },
            // Add more language options as needed
        ];
    

    return (
        <div>
            <Navbar/>
            <div class="box-1">
                <Box_1/>
            </div>
            <div>
                    <div class="main-div-12">
                        <h2>Registration Form</h2>
                            <form onSubmit={handleSubmit}>
                            {/* Basic Information */}
                            <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            </label>
                            <br />
                            <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                            </label>
                            <br />
                            <label>
                            Role:
                            <select name="role" value={formData.role} onChange={handleInputChange}>
                                <option value="admin">Admin</option>
                                <option value="team">Team</option>
                                <option value="influencer">Influencer</option>
                            </select>
                            </label>
                            <br />

                            {/* Address */}
                            <h3>Address</h3>
                            <label>
                            Address Section:
                            <input
                                type="text"
                                name="section"
                                value={formData.address.section}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            City/Town:
                            <input
                                type="text"
                                name="city"
                                value={formData.address.city}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            Postal Code:
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.address.postalCode}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            State/Region:
                            <input
                                type="text"
                                name="state"
                                value={formData.address.state}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            Country:
                            <input
                                type="text"
                                name="country"
                                value={formData.address.country}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />

                            {/* Company Details */}
                            {formData.role !== 'influencer' && (
                            <>
                                <h3>Company Details</h3>
                                <label>
                                Company Name:
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.company.companyName}
                                    onChange={handleCompanyChange}
                                />
                                </label>
                                <br />
                                <label>
                                Timezone:
                                <input
                                    type="text"
                                    name="timezone"
                                    value={formData.company.timezone}
                                    onChange={handleCompanyChange}
                                />
                                </label>
                                <br />
                                <label>
                                Location:
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.company.location}
                                    onChange={handleCompanyChange}
                                />
                                </label>
                                <br />
                            </>
                            )}

                            {/* Languages */}
                            <h3>Languages</h3>
                            <h3>Languages</h3>
                            <Select
                            isMulti
                            name="languages"
                            value={languageOptions.filter((option) => formData.languages.includes(option.value))}
                            options={languageOptions}
                            onChange={handleLanguagesChange}
                            />
                            <br />
                            <button type="button" onClick={handleClearForm} >Clear Form</button>   
                            <button type="submit" >Submit</button>
                        </form>                
                    </div>
            </div>
            <Footer/>
        </div>
    )
}
