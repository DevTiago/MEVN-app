const express = require("express");
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//setup express app
const app = express();
// app.use(cors);
const PORT = 5050;

// connect to mongoDB
mongoose
  .connect(process.env.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database connected"))
  .catch((err) => console.log("Database connection error: " + err));
mongoose.Promise = global.Promise;

// deal with body data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);

app
  .listen(PORT, () => console.log(`APP listen at port ${PORT}`))
  .on("error", (err) => console.log("Server Error: " + err));
