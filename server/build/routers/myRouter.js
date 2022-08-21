"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mypageController = require("../controllers/mypageController.js");

var _tokenControllers = require("../controllers/tokenControllers.js");

var _verifyUser = require("../controllers/verifyUser.js");

var _middlewares = require("../middlewares.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var myRouter = _express["default"].Router();

myRouter.get("/writeLists", _mypageController.getWriteLists);
myRouter.get("/bookmarkLists", _mypageController.getBookMarkLists);
myRouter.put("/update-image", _middlewares.userImgUpload.single("file"), _tokenControllers.verifyAccessToken, _mypageController.putChangeUserImage);
myRouter.put("/update-user", _tokenControllers.verifyAccessToken, _mypageController.putChangeUserInfo);
myRouter.get("/id-check", _verifyUser.getExistedIdCheck);
myRouter.get("/name-check", _verifyUser.getExistedNameCheck);
myRouter.put("/changepw", _tokenControllers.verifyAccessToken, _mypageController.putChangePassword);
var _default = myRouter;
exports["default"] = _default;