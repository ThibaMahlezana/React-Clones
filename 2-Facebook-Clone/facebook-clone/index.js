const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

//connecting to the database
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to MongoDB database");
  }
);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

// runing the server
app.listen(8800, () => {
  console.log("server running on port 8800");
});
