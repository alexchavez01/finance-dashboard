// const express = require('express');
// const router = express.Router();
// const { addTransaction, getTransactions, deleteTransaction } = require('../controllers/transactionController');
// const auth = require('../middleware/authMiddleware');

// router.post('/', auth, addTransaction);
// router.get('/', auth, getTransactions);
// router.delete('/:id', auth, deleteTransaction);

// module.exports = router;


// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getTransactions, addTransaction } = require('../controllers/transactionController');

router.get('/', authMiddleware, getTransactions);
router.post('/', authMiddleware, addTransaction);

module.exports = router;
