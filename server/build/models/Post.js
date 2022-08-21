'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  targetAge: {
    type: Number,
    required: true
  },
  hashtag: [{
    type: String,
    required: true
  }],
  meta: {
    views: {
      type: Number,
      "default": 0,
      required: true
    },
    likes: {
      type: Number,
      "default": 0,
      required: true
    },
    pinnedCmnt: {
      type: String,
      "default": undefined
    },
    answer: {
      type: Boolean,
      "default": false,
      required: true
    }
  },
  createAt: {
    type: Date,
    required: true,
    "default": Date.now
  },
  updateAt: {
    type: Date,
    "default": Date.now,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
});

var Post = _mongoose["default"].model('Post', postSchema); // create data model(name of model , shape of data)


var _default = Post;
exports["default"] = _default;