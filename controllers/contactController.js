// controllers/contactController.js
const Contact = require("../models/Contact");
// const cloudinary = require("../coonfig/cloudinary"); // Import Cloudinary configuration
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "djkkjx9ry",
  api_key: "137867966447137",
  api_secret: "9G1XkPYT5-uIvNevvNrA3fCKxQg",
  secure: true,
});

const submitContactForm = async (req, res) => {
  const { contactName, street, city, postcode, phone, email, idea, nda } =
    req.body;

  // console.log("Request Body:", req.body);
  const file = req.file;
  // console.log("Uploaded File:", req.file);

  try {
    let fileUrl = null;

    if (file) {
      // Assuming you have Cloudinary setup for file upload
      const result = await cloudinary.uploader.upload(file.path);
      fileUrl = result.secure_url;

      //fileUrl = file.path; // For testing purposes only, replace with Cloudinary upload code
    }
    console.log("url", fileUrl);
    const newContact = new Contact({
      contactName,
      street,
      city,
      postcode,
      phone,
      email,
      idea,
      nda,
      filePath: fileUrl,
    });

    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while saving the contact." });
  }
};

module.exports = {
  submitContactForm,
};
