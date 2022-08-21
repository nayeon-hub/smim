'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var likeSchema = new _mongoose["default"].Schema({
  user_array: {
    type: Array,
    "default": [],
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
  }
});

var Like = _mongoose["default"].model('Like', likeSchema);

var _default = Like;
exports["default"] = _default;