
import express from 'express';
import { createContact, deleteContact, getContactById, getContacts, updateContact } from '../controllers/contactController.js';

const appRouter = express.Router();


// here all routes for backend
appRouter.post('/contacts', createContact); 
appRouter.get('/contacts', getContacts );
console.log("2nd comiite");

appRouter.get('/contacts/:id', getContactById);
appRouter.put('/contacts/:id', updateContact);
appRouter.delete('/contacts/:id', deleteContact);

export default appRouter;
