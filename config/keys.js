//NODE_ENV is set default at heroku
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev.js");
}
