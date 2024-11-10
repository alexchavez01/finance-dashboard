require('dotenv').config();
const jwt = require('jsonwebtoken');

// Replace 'your_user_id' with the actual user ID for the token payload
const userId = 'alexchavez4378';

// Generate the JWT
const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log('Generated JWT:', token);
