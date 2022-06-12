const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableQRCode: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Table", tableSchema);
