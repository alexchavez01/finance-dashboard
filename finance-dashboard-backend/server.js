// const express = require('express');
// const connectDB = require('./config/db');
// require('dotenv').config();

// const app = express();
// app.use(express.json());

// // Connect to Database
// connectDB();

// const transactionRoutes = require('./routes/transactionRoutes'); // Adjust path if necessary


// // Define Routes
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/transactions', transactionRoutes);


// // Start Server
// const PORT = process.env.PORT || 5001; // Use 5001
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

dotenv.config();
connectDB();

const app = express();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization', 'Content-Type'],
  }));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
