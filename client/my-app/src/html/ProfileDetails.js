import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Box_1 from './Box_1'
import Footer from './Footer'
import Select from 'react-select';
import '../css/ProfileDetails.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const domain =process.env.REACT_APP_DOMAIN;

export default function ProfileDetails() {
    
    console.log(domain);

    const navigate=new useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    {console.log(queryParams)};
    const username = queryParams.get('username');


            const [formData, setFormData] = useState({
                    profilephoto:'',
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

                useEffect(() => {
                    const fetchData = async () => {
                        try {
                            // Fetch user data from the backend
                            const response = await axios.get(`${domain}/app/user/${username}`);
                            setFormData(response.data); // Update the component state with the fetched user data
                        } catch (error) {
                            console.error('Error fetching user data:', error);
                            // Handle error (e.g., display error message)
                        }
                    };
            
                    fetchData();
                }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

                
                
                
                const handleCreate = event => {
                    event.preventDefault();
            
                    axios.post(`${domain}/app/user`, formData)
                        .then(response => {

                            console.log('User created successfully:', response.data);
                            alert('User created successfully!');
                        })
                        .catch(error => {
                            console.error('Error creating user:', error);
                        });
                    };

                    const handleUpdate = event => {
                        event.preventDefault();
                
                        axios.put(`${domain}/app/user/${formData.username}`, formData)
                            .then(response => {
    
                                console.log('User updated successfully:', response.data);
                                alert('User update successfully!');
                            })
                            .catch(error => {
                                console.error('Error updated user:', error);
                            });
                        };


                const handleDelete = async () => {
                    try {
                        const response = await axios.delete(`${domain}/app/user/${formData.username}`);
                        console.log('User deleted successfully:', response.data);
                        handleClearForm();
                    } catch (error) {
                        if (error.response && error.response.status === 404) {
                            console.log('User not found');
                        } else {
                            console.error('Error deleting user data:', error);
                        }
                    }
                };
                
            
                const handleInputChange = event => {
                    const { name, value } = event.target;
                    setFormData(prevState => ({
                        ...prevState,
                        [name]: value
                    }));
                };
            
                // For nested objects (e.g., address, company), you can use additional handleChange functions
                const handleAddressChange = event => {
                    const { name, value } = event.target;
                    setFormData(prevState => ({
                        ...prevState,
                        address: {
                            ...prevState.address,
                            [name]: value
                        }
                    }));
                };
            
                const handleCompanyChange = event => {
                    const { name, value } = event.target;
                    setFormData(prevState => ({
                        ...prevState,
                        company: {
                            ...prevState.company,
                            [name]: value
                        }
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
                
                // Clear the form data
                const handleClearForm = () => {
                    setFormData({
                    profilephoto:'',
                    uername:'',
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
                    description:'',
                    });
                };
        
        
        const languageOptions = [
            { value: 'english', label: 'English' },
            { value: 'spanish', label: 'Spanish' },
            { value: 'french', label: 'French' },
            { value: 'german', label: 'German' },
            // Add more language options as needed
        ];

        const handleDescriptionChange = (e) => {
            setFormData(prevState => ({
                ...prevState,
                description: e.target.value
            }));
        };
    
    

    return (
        <div>
            <Navbar/>
            <div className="box-1">
                <Box_1/>
            </div>
            <div>
                    <div className="main-div-12">
                        <h2>Registration Form</h2>
                            <form onSubmit={handleCreate}>
                            {/* Basic Information */}
                            <label>
                            Profile Photo:
                            <input
                                type="text"
                                name="profilephoto"
                                value={formData.profilephoto}
                                onChange={handleInputChange}
                                style={{ color: 'red' }}
                            />
                            </label>
                            <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                style={{ color: 'red' }}
                            />
                            </label>
                            <br />
                            <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            </label>
                            <br />
                            <label>
                            Password:
                            <input
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            </label>
                            <br />
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
                                value={formData.section}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            City/Town:
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            Postal Code:
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            State/Region:
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            Country:
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
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
                                    value={formData.companyName}
                                    onChange={handleCompanyChange}
                                />
                                </label>
                                <br />
                                <label>
                                Timezone:
                                <input
                                    type="text"
                                    name="timezone"
                                    value={formData.timezone}
                                    onChange={handleCompanyChange}
                                />
                                </label>
                                <br />
                                <label>
                                Location:
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
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
                            id='languages-select'
                            />
                            <h3>Description:</h3>
                            <label>
                                <textarea
                                    value={formData.description}
                                    onChange={handleDescriptionChange}
                                    placeholder="Enter description"
                                    style={{ width: '60vw', height: '20vh' , margin:'20px' }}
                                />
                                </label>
                            <br />
                            <button type="button" onClick={handleClearForm} >Clear Form</button>   
                            <button type="button" onClick={handleUpdate}>Update User</button>
                            <button type="button" onClick={handleDelete}>Delete</button>
                        </form>                
                    </div>
            </div>
            <Footer/>
        </div>
    )
}
