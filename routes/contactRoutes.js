const express = require("express");
const router = express.Router();
const { submitContactForm } = require("../controllers/contactController");
const multer = require("multer");
const path = require("path");
const { uploadPhoto } = require("../middlewares/uploadImages.js");

// Route to handle form submission
router.post("/contact", uploadPhoto.single("file"), submitContactForm);

module.exports = router;
