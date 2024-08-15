require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
const app = express();
const port = 3000;
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

const URL = process.env.MONGO_URL;
mongoose
  .connect(URL)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Connection error to MongoDB:", err.message);
  });

app.get("/test", (req, res) => res.json("Hello World!"));

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ error: "User with this name already exists" });
    }
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const userDoc = await User.create({ name, email, password: hashedPassword });
    res.json(userDoc);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
