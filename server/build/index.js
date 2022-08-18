"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  return res.send('Hello');
});
var PORT = 4000;

var handleListening = function handleListening() {
  return console.log("\u2705 server Listening on port http://localhost:".concat(PORT, " \uD83D\uDE80"));
};

app.listen(PORT, handleListening);