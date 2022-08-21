"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _loginController = require("../controllers/loginController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loginRouter = _express["default"].Router();

loginRouter.post('/', _loginController.postLogin);
var _default = loginRouter;
exports["default"] = _default;