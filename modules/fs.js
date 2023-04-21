const fs = require("fs");
const path = require("path");

// create a folder
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// Create a file
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }

    console.log("File created successfully");

    // Add content in the file
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Hello World!",
      (error) => {
        if (error) {
          return console.log("Error: ", error);
        }

        console.log("Successfully updated");
      }
    );

    // Read file
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Error: ", error);
        }

        console.log(data);
      }
    );
  }
);
