const multer = require("multer");
// const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const multerStorsge = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  //   storage: storage,
  storage: multerStorsge,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});

module.exports = { uploadPhoto };