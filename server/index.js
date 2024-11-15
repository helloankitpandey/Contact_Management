
// It is main file where all things done

import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import appRouter from './routes/contactRoutes.js';
import cors from "cors";



// Load environment variables from file
dotenv.config();

// connecting to the databse
connectDB();


const app = express();


//middleare for cors error
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


// Parse JSON request bodies middleware
app.use(bodyParser.json());


// routes
app.use("/api", appRouter);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
