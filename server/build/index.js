"use strict";

require("dotenv/config");

require("./db.js");

require("./models/Comment.js");

require("./models/Like.js");

require("./models/Post.js");

require("./models/User.js");

var _server = _interopRequireDefault(require("./server.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 4000;

var handleListening = function handleListening() {
  return console.log("\u2705 server Listening on port http://localhost:".concat(PORT, " \uD83D\uDE80"));
};

_server["default"].listen(PORT, handleListening);