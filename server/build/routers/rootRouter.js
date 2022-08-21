"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _postController = require("../controllers/postController.js");

var _signupController = require("../controllers/signupController.js");

var _verifyUser = require("../controllers/verifyUser.js");

var _middlewares = require("../middlewares.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootRouter = _express["default"].Router();

rootRouter.get("/", _postController.getMainPageLists);
rootRouter.get('/signup/id-check', _verifyUser.getExistedIdCheck);
rootRouter.get('/signup/email-check', _verifyUser.getExistedEmailCheck);
rootRouter.get('/signup/name-check', _verifyUser.getExistedNameCheck);
rootRouter.post('/signup', _middlewares.userImgUpload.single("users"), _signupController.postSignup); // google oauth

rootRouter.get('/login/google', _signupController.getGoogleAuth);
rootRouter.get('/login/google/callback', _signupController.getGoogleCallback);
var _default = rootRouter;
exports["default"] = _default;