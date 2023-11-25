require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3020;
const USER = process.env.USER;
const HOST = process.env.HOST;
const DATABASE_URL = process.env.DATABASE_URL;
const PASSWORD = process.env.PASSWORD;

// Testing the App //
app.get("/", (req, res) => {
  res.send(`<h1>Server Running Successfully!</h1>`);
});

// Testing the endpoint on the path ‘/task` to get all tasks from DB//
app.get("/task", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");
    res.json(result.rows);
  } catch (error) {
    res.sendStatus(500).json({ error: "Internal Server Error" });
  }
});

// Creating an endpoint that accepts a POST request on path ‘/task/create` to save a new task in the DB //
app.post("/task/create", async (req, res) => {
  const { title, description, priority, status } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks(title, description, priority, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, priority, status],
    );
    res.status(201).json(result.rows);
  } catch (error) {
    res.sendStatus(500).json({ error: "Internal Server Error" });
  }
});

// Starting the Server //
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
