"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentSchema = new _mongoose["default"].Schema({
  text: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  post_id: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    required: true,
    "default": Date.now
  },
  parent_id: {
    type: String
  },
  children: [{
    type: String,
    "default": null,
    required: true
  }],
  like_count: {
    type: Number,
    required: true,
    "default": 0
  },
  like_users: [{
    type: String,
    "default": null,
    required: true
  }],
  complain_count: {
    type: Number,
    required: true,
    "default": 0
  }
});

var Comment = _mongoose["default"].model('Comment', commentSchema); // create data model(name of model , shape of data)


var _default = Comment;
exports["default"] = _default;