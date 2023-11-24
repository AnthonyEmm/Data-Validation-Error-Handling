const express = require("express");
const app = express();
const port = 3020;

// Testing the App //
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Task Database</h1>`);
});

// Starting the Server //
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
