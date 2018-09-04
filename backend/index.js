const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./startup/connection")(app); //app listen 8000
require("./startup/db"); // db connection
require("./startup/routes")(app); // routes
