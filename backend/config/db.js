const mongoose = require("mongoose");
const colors = require("colors");
const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_db);
    console.log(
      ` Mongo connected to ${conn.connection.host} `.bgCyan.underline.yellow
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { db };
