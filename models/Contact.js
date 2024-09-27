// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  contactName: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  idea: { type: String, required: true },
  nda: { type: Boolean, required: true },
  filePath: { type: String },
});

module.exports = mongoose.model("Contact", contactSchema);
