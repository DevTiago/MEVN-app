require("dotenv").config();

const express = require("express");
const router = express.Router();

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8001;

app.use(cors);
app.use(bodyParser.json());

// connect to mongoDB
mongoose
  .connect(process.env.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB database connected"))
  .catch((err) => console.log("Database connection error: " + err));
mongoose.Promise = global.Promise;

app
  .listen(PORT, () => console.log(`APP listen at port ${PORT}`))
  .on("error", (err) => console.log("Server Error: " + err));
