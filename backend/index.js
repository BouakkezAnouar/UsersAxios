const express = require("express");
const app = express();

require("./startup/connection")(app); //app listen 8000
require("./startup/db"); // db connection
