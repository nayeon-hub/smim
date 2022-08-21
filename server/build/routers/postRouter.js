"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _postController = require("../controllers/postController.js");

var _likeController = require("../controllers/likeController.js");

var _bookmarkController = require("../controllers/bookmarkController.js");

var _tokenControllers = require("../controllers/tokenControllers.js");

var _commentController = require("../controllers/commentController.js");

var _middlewares = require("../middlewares.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postRouter = _express["default"].Router();

exports.postRouter = postRouter;
postRouter.get('/target', _postController.getPostList);
postRouter.get('/search', _postController.getPostSearch);
postRouter.post('/create', _tokenControllers.verifyToken, _middlewares.fieldCheck, _postController.postPostCreate);
postRouter.post('/comment', _tokenControllers.verifyToken, _middlewares.checkBodyPostUndefined, _middlewares.checkBodyContentUndefined, _middlewares.checkBodyPostExist, _commentController.postCommentCreate);
postRouter.post('/img', _middlewares.postImageUpload.single('img'), _postController.postPostImageUpload);
postRouter.route('/:id').get(_middlewares.existPostCheckAndData, _postController.getPostDetail).put(_tokenControllers.verifyToken, _middlewares.fieldCheck, _middlewares.existPostAndOwnerCheck, _postController.putPostEdit)["delete"](_tokenControllers.verifyToken, _middlewares.existPostAndOwnerCheck, _postController.deletePost);
postRouter.get('/:id/detail', _tokenControllers.verifyRefreshToken, _middlewares.existPostCheckAndData, _postController.getPostDetail);
postRouter.get('/:id/view', _middlewares.existPostCheckAndData, _postController.getPostView);
postRouter.get('/:id/bookmark', _tokenControllers.verifyToken, _middlewares.existPostCheck, _bookmarkController.getBookmark);
postRouter.get('/:id/unbookmark', _tokenControllers.verifyToken, _middlewares.existPostCheck, _bookmarkController.getUnbookmark);
postRouter.get('/:id/like', _tokenControllers.verifyToken, _middlewares.existPostCheckAndData, _likeController.getPostLike);
postRouter.get('/:id/unlike', _tokenControllers.verifyToken, _middlewares.existPostCheckAndData, _likeController.getPostUnlike);
postRouter.get('/:id/comment', _middlewares.checkParamPostUndefined, _middlewares.checkParamPostExist, _commentController.getCommentList);
postRouter.get('/:id/comment/detail', _tokenControllers.verifyRefreshToken, _middlewares.checkParamPostUndefined, _middlewares.checkParamPostExist, _commentController.getCommentList);