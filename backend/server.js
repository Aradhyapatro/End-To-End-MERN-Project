// imports
const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const route = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const { db } = require("./config/db");
const cors = require("cors");
// constants
const port = process.env.port || 5000;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database connection
db();

// routes
app.use("/api/goals", route);
app.use("/api/users", require("./routes/usersRoute"));

// server frontend
if (process.env.node_env === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", index.html)
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Please set to production");
  });
}

// errorhandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running in the port:${port}`);
});
