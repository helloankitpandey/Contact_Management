

// It is App.jsx and all routes written here
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import CreateContactForm from './components/CreateContactForm';
import ContactTable from './components/ContactTable';
import EditContactDetails from './components/EditContactDetails';

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // here it is hosted on localhost
        
        const response = await axios.get('http://localhost:3000/api/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  // Add a new contact
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  // Update a contact
  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact._id === updatedContact._id ? updatedContact : contact
      )
    );
  };

  // Delete a contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ContactTable
              contacts={contacts}
              onDelete={deleteContact}
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreateContactForm
              onContactAdded={addContact}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditContactDetails
              onContactUpdated={updateContact}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
