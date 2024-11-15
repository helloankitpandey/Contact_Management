
// In this page I Edit the saved contacts

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const EditContactDetails = ({ onContactUpdated }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
  });

  const fetchContact = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/contacts/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching contact:', error);
    }
  };

  useEffect(() => {
    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/api/contacts/${id}`, formData);
      onContactUpdated(response.data);
      navigate('/'); // Navigate back to ContactTable after update
    } catch (error) {
      console.error('Error updating contact:', error);
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
        Update a Contact
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
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <TextField
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ alignSelf: 'center', width: '50%' }}
        >
          Update Contact
        </Button>
      </Box>
    </Box>
  );
};

export default EditContactDetails;

