const object = require("./utils.js");
const getNotes = require("./notes.js");
const validator = require("validator");
const chalk = require("chalk");

console.log("This is from utils.js");

console.log(object.name);

const sum = object.add(4, -2);
console.log(sum);

console.log(getNotes());
console.log(validator.isEmail("abcnpm i chalkemil.com"));

console.log(chalk.blue.bgRed.italic("Success!"));
