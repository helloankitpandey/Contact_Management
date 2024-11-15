
// Here I create New Contact

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const CreateContactForm = ({ onContactAdded }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/contacts', formData);
      onContactAdded(response.data);
      navigate('/'); // Navigate to ContactTable after creation
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: 'auto',
        marginTop: 4,
        padding: 2,
        boxShadow: 2,
        borderRadius: 1,
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        marginBottom={2}
        color="primary"
      >
        Create a Contact
      </Typography>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <TextField label="Email" name="email" value={formData.email} onChange={handleChange} required />
        <TextField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
        <TextField label="Company" name="company" value={formData.company} onChange={handleChange} required />
        <TextField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'center', width: '50%' }}>
          Add Contact
        </Button>
      </Box>
    </Box>
  );
};

export default CreateContactForm;
