const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/contacts_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to db"));

db.once("open", () => {
  console.log("Successfully Connected to db");
});
