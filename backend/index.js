require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const PORT = 8000;
const cors = require("cors");
app.use(cors());

// Connection: 
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.error("*** Database connection Successful! ***"));


const userRouter = require("./router/user-router");
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
