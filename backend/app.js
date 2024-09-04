import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./db/db.connection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from "./routes/reservation.Routes.js"
const app = express();

// Load environment variables from config file
dotenv.config({ path: "./config/config.env" });

// Set up CORS with options
app.use(cors({
    origin: [process.env.FRONTEND_URI], // Allow requests from your frontend URI
    methods: ['POST'], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter)

// Establish database connection
dbConnection();

app.use(errorMiddleware)



export default app;
