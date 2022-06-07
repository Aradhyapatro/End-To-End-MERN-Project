// imports
const express = require("express");
const dotenv = require("dotenv").config();
const route = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const { db } = require("./config/db");
// constants
const port = process.env.port || 5000;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
db();

// routes
app.use("/api/goals", route);
app.use("/api/users", require("./routes/usersRoute"));

// errorhandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running in the port:${port}`);
});
