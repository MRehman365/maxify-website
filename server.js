const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");
const cookieParser = require("cookie-parser");
const dbConnect = require("./coonfig/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

// Middleware
dbConnect();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Routes
app.use("/api", contactRoutes);

// app.use("/public/images", express.static("public/images"));

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
