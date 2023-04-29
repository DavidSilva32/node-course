// const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/connect");

dotenv.config({path: "./src/database/.env"});

connectToDataBase();

// require('./modules/path');
// require("./modules/fs");
// require("./modules/http");
require('./modules/express');
// require("./src/database/connect");

// const person = new Person("David");
