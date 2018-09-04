const app = require("express")();

require("./startup/connection")(app); //app listen 8000
require("./startup/db"); // db connection
require("./startup/routes")(app); // routes
