// imports
const express = require("express");
const dotenv = require("dotenv").config();
console.log(process.env.port);
const route = require("./routes/routes");
// constants
const port = process.env.port || 5000;
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/goals", route);

app.listen(port, () => {
  console.log(`Server is running in the port:${port}`);
});
