// const Transaction = require('../models/Transaction');

// exports.addTransaction = async (req, res) => {
//     try {
//         const transaction = new Transaction({ ...req.body, userId: req.user.id });
//         await transaction.save();
//         res.json(transaction);
//     } catch (err) {
//         res.status(500).send('Server error');
//     }
// };

// exports.getTransactions = async (req, res) => {
//     try {
//         const transactions = await Transaction.find({ userId: req.user.id });
//         res.json(transactions);
//     } catch (err) {
//         res.status(500).send('Server error');
//     }
// };

// exports.deleteTransaction = async (req, res) => {
//     try {
//         await Transaction.findByIdAndDelete(req.params.id);
//         res.json({ msg: 'Transaction deleted' });
//     } catch (err) {
//         res.status(500).send('Server error');
//     }
// };


// controllers/transactionController.js
const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res) => {
    try {
      console.log("Fetching transactions for user:", req.user.id);
      const transactions = await Transaction.find({ userId: req.user.id });
      console.log("Transactions:", transactions);
      res.json(transactions);
    } catch (err) {
      console.error("Error fetching transactions:", err.message);
      res.status(500).json({ message: 'Server error' });
    }
};

exports.addTransaction = async (req, res) => {
  const { amount, type, category } = req.body;
  try {
    const newTransaction = new Transaction({ userId: req.user.id, amount, type, category });
    await newTransaction.save();
    res.json(newTransaction);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
