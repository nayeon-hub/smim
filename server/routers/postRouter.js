import express from 'express';
import {
  postPostCreate,
  putPostEdit,
  deletePost,
  getPostDetail,
  getPostList,
  getPostView,
  getPostSearch,
  postPostImageUpload,
} from '../controllers/postController.js';
import { getPostLike, getPostUnlike } from '../controllers/likeController.js';
import { getBookmark, getUnbookmark } from '../controllers/bookmarkController.js';
import { verifyToken, verifyRefreshToken } from '../controllers/tokenControllers.js';
import { postCommentCreate, getCommentList } from '../controllers/commentController.js';
import {
  existPostAndOwnerCheck,
  existPostCheckAndData,
  existPostCheck,
  fieldCheck,
  checkBodyPostUndefined,
  checkParamPostUndefined,
  checkBodyContentUndefined,
  checkBodyPostExist,
  checkParamPostExist,
} from '../middlewares.js';
import {
  postImageUpload,
  postImageDelete,
  postImageDeleteDelete,
  onlyPostImageDelete,
} from '../multer.js';

export const postRouter = express.Router();

postRouter.get('/target', getPostList);
postRouter.get('/search', getPostSearch);
postRouter.post('/create', verifyToken, fieldCheck, postImageDelete, postPostCreate);
postRouter.post(
  '/comment',
  verifyToken,
  checkBodyPostUndefined,
  checkBodyContentUndefined,
  checkBodyPostExist,
  postCommentCreate
);
postRouter.post('/img', postImageUpload.single('img'), postPostImageUpload);
postRouter.delete('/img', onlyPostImageDelete);

postRouter
  .route('/:id')
  .get(existPostCheckAndData, getPostDetail)
  .put(verifyToken, fieldCheck, existPostAndOwnerCheck, postImageDelete, putPostEdit)
  .delete(verifyToken, existPostCheckAndData, postImageDeleteDelete, deletePost);

postRouter.get('/:id/detail', verifyRefreshToken, existPostCheckAndData, getPostDetail);
postRouter.get('/:id/view', existPostCheckAndData, getPostView);
postRouter.get('/:id/bookmark', verifyToken, existPostCheck, getBookmark);
postRouter.get('/:id/unbookmark', verifyToken, existPostCheck, getUnbookmark);
postRouter.get('/:id/like', verifyToken, existPostCheckAndData, getPostLike);
postRouter.get('/:id/unlike', verifyToken, existPostCheckAndData, getPostUnlike);
postRouter.get('/:id/comment', checkParamPostUndefined, checkParamPostExist, getCommentList);
postRouter.get(
  '/:id/comment/detail',
  verifyRefreshToken,
  checkParamPostUndefined,
  checkParamPostExist,
  getCommentList
);
