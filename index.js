const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

const stylistServiceRoute = require("./StylistServiceRoute");
const cookieParser = require("cookie-parser");

const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Access-Control-Allow-Origin, Content-Type, Authorization",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/services", stylistServiceRoute);
