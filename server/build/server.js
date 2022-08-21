"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _loginController = require("./controllers/loginController.js");

var _postRouter = require("./routers/postRouter.js");

var _commentRouter = require("./routers/commentRouter.js");

var _rootRouter = _interopRequireDefault(require("./routers/rootRouter.js"));

var _loginRouter = _interopRequireDefault(require("./routers/loginRouter.js"));

var _myRouter = _interopRequireDefault(require("./routers/myRouter.js"));

var _tokenControllers = require("./controllers/tokenControllers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/uploads', _express["default"]["static"]('uploads'));
app.use('/', _rootRouter["default"]);
app.use('/post', _postRouter.postRouter);
app.use('/comment', _commentRouter.commentRouter);
app.use('/login', _loginRouter["default"]);
app.use('/my', _myRouter["default"]);
app.get('/logout', _loginController.getLogout);
app.post('/token', _tokenControllers.reissueAccessToken);
var _default = app;
exports["default"] = _default;