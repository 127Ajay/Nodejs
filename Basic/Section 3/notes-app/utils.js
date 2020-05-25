// Core Module
const fs = require("fs");

//Core Module:Initial
fs.writeFileSync("notes.txt", "This file was created by app.js");
//Core Module:Append
fs.appendFileSync("notes.txt", "\nThis text was appended to the existing file");

console.log("This is from utils");

//importing Yout File
const name = "Tokyo";

const add = function (a, b) {
  return a + b;
};

module.exports = {
  name: name,
  add: add,
};
