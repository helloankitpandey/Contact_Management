
# Contact Management App

## Description
The **Contact Management App** is a full-stack web application that allows users to manage contacts. It enables users to perform **CRUD** (Create, Read, Update, Delete) operations on contacts, with information such as first name, last name, email, phone number, company, and job title. The backend is built using **Node.js/Express** and the frontend is developed with **React**. The application uses **MongoDB** as the database to store contact data.

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

