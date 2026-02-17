import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import colors from 'colors'; 
import connectDB from './src/config/db.js'; 
import authRoutes from './src/route/authRoute.js';
import { notFound, errorHandler } from './src/middlewares/errorMiddleware.js'; // optional 

dotenv.config();
connectDB(); 

const app = express();

// Middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // cookie pass

// CORS 
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
}));

// Routes
app.use('/api/auth', authRoutes);

// Test 
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});