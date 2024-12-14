import Contact from '../models/Contact.js';

// here all backend routing

// POST => It Create a new contact
export const createContact = async (req, res) => {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json({ message: 'Contact created successfully', contact });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json({ error: 'Duplicate entry: Email already exists' });
      } else {
        res.status(400).json({ error: 'Invalid data submitted', details: error.message });
      }
    }
  }; 

// GET => It Retrieve all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
    console.log("an");
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
};

// get single contact => => It is GET specific contact
export const getContactById = async (req, res) => {

  try {
    const contact = await Contact.findById(req.params.id); // Find contact by ID

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' }); // Handle case where contact doesn't exist
    }

    res.status(200).json(contact); // Respond with the found contact
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contact' }); // Handle server errors
  }
};



// PUT => It Update a specific contact
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json({ message: 'Contact updated successfully', contact });
  } catch (error) {
    res.status(400).json({ error: 'Invalid data submitted', details: error.message });
  }
};

// DELETE => It Delete a specific contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};
