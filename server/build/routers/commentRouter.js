"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentController = require("../controllers/commentController.js");

var _tokenControllers = require("../controllers/tokenControllers.js");

var _middlewares = require("../middlewares.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentRouter = _express["default"].Router();

exports.commentRouter = commentRouter;
commentRouter.route('/:id').get(_middlewares.checkParamCommentExistAndData, _commentController.getComment).put(_tokenControllers.verifyToken, _middlewares.checkCommentUndefined, _middlewares.checkBodyPostUndefined, _middlewares.checkBodyContentUndefined, _middlewares.checkBodyPostExist, _middlewares.checkParamCommentExistAndData, _commentController.putCommentEdit)["delete"](_tokenControllers.verifyToken, _middlewares.checkCommentUndefined, _middlewares.checkParamCommentExistAndData, _commentController.deleteComment);
commentRouter.get('/:id/detail', _tokenControllers.verifyRefreshToken, _middlewares.checkParamCommentExistAndData, _commentController.getComment);
commentRouter.get('/:id/pinned', _tokenControllers.verifyToken, _middlewares.checkCommentUndefined, _middlewares.checkCommentPinned, _commentController.getCommentPinned);
commentRouter.get('/:id/unpinned', _tokenControllers.verifyToken, _middlewares.checkCommentUndefined, _middlewares.checkCommentPinned, _commentController.getCommentUnpinned);
commentRouter.get('/:id/like', _tokenControllers.verifyToken, _middlewares.checkCommentUndefined, _middlewares.checkParamCommentExistAndData, _commentController.getCommentLike);
commentRouter.get('/:id/unlike', _tokenControllers.verifyToken, _middlewares.checkCommentUndefined, _middlewares.checkParamCommentExistAndData, _commentController.getCommentUnlike);