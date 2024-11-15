
# Contact Management App

## Description
The **Contact Management App** is a full-stack web application that allows users to manage contacts. It enables users to perform **CRUD** (Create, Read, Update, Delete) operations on contacts, with information such as first name, last name, email, phone number, company, and job title. The backend is built using **Node.js/Express** and the frontend is developed with **React**. The application uses **MongoDB** as the database to store contact data.

## ScreenShot

### View All Contacts

![image alt](https://github.com/helloankitpandey/Contact_Management/blob/c81b158a9bf2bea1e121d73bc70ba435d1f78764/Screenshot%202024-11-15%20230315.png)

### CreateContact
![image alt](https://github.com/helloankitpandey/Contact_Management/blob/8d11097ce2ab599e1727f8b12b5aba747d0a08b9/Screenshot%202024-11-15%20230547.png)

### Features:
- **Add, Edit, and Delete Contacts**: Users can add, edit, and remove contacts from their contact list.
- **Responsive UI**: The user interface is built using **Material-UI** components for a clean and modern design.
- **Sortable and Paginated Contacts Table**: Contacts are displayed in a table with sorting and pagination.
- **Backend API**: A RESTful API built with **Express.js** allows communication with the **MongoDB** database.

## Tech Stack:
- **Frontend**: ReactJS, Material-UI, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: None (can be added later)
  
## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/contact-management-app.git
cd contact-management-app
```


### 2. Install Dependencies


Navigate to the `server` directory and install the required dependencies:

```bash
cd server
npm install
```



### 3. Database Configuration

The application uses MongoDB for data storage. You can either use a local MongoDB instance or MongoDB Atlas (cloud-based MongoDB).

- (a) Open `backend/config/db.js`.
- (b) Update the MongoDB URI with your connection string:
   - For a **local MongoDB instance**, use:
     ```javascript
     const dbURI = 'mongodb://localhost:27017/yourdbname';
     ```
   - For **MongoDB Atlas**, use the connection string provided by MongoDB Atlas:
     ```javascript
     const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdbname';
     ```

Make sure to replace `<username>`, `<password>`, and `yourdbname` with your MongoDB credentials and database name.




### 4. Start the Backend Server

Run the following command to start the backend server:

```bash
npm run dev
```



## Frontend Setup

### 1. Install Dependencies

Navigate to the `client` directory and install the required dependencies:

```bash
cd client
npm install
```
### 2. Start the Frontend

Run the following command to start the React frontend server:

```bash
npm run dev
```


## Backend API Endpoints

### GET /api/contacts
Fetch all contacts from the database.


### POST /api/contacts
Create a new contact.

### GET /api/contacts/id
Fetch a contact by ID.

### PUT /api/contacts/id
Update an existing contact by ID.

### DELETE /api/contacts/
Delete a contact by ID.


## MongoDB Schema

The contact schema is defined in backend/models/contact.js:

```bash
// contactSchema
const contactSchema = new mongoose.Schema({
  firstName: { 
    type: String, 
    required: true 
   },
  lastName: { 
    type: String, 
    required: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true
  },
  phone: { 
    type: String, 
    required: true 
  },
  company: { 
    type: String,
    required: true 
  },
  jobTitle: { 
    type: String ,
    required: true
  },
});
```



## Features

- *Add New Contacts* : 
  The "Create a Contact" form allows users to add new contacts to the database.
- *View Contacts* : All contacts are displayed in a table format on the homepage, with options to edit or delete each contact.
- *Edit Contact* : Users can edit existing contacts and update their information.
- *Delete Contact* : Users can delete contacts from the database.


## 🚀 About Me

Hi! I'm a passionate software developer specializing in full-stack development. I have experience with React, Node.js, MongoDB, and building modern, user-friendly applications. I enjoy solving real-world problems through clean, efficient code and constantly learning new technologies to enhance my skills. 😊



