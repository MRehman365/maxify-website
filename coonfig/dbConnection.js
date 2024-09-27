const mongoose = require("mongoose");

const dbConnect = () => {
  const url =
    "mongodb+srv://maxifywebsolutions:567qSL7e4dCAscpO@cluster0.ffjnxvs.mongodb.net/newMyWebData";
  try {
    mongoose
      .connect(url)
      .then(() => console.log("Database connection successfully"))
      .catch((error) => console.log("Connection error:", error));
  } catch (error) {
    console.log("Caught error:", error);
  }
};

module.exports = dbConnect;
