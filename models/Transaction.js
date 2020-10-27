const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  incomeText: {
    type: String,
    trim: true,
  },
  expenseText: {
    type: String,
    trim: true,
  },
  income: {
    type: Number,
  },
  expense: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);