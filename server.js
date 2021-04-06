const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("./seeders/seed");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    },
    console.log("Successfully connected to Mongo Database")
  );

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(PORT, () => console.log("listening on port: ", PORT));