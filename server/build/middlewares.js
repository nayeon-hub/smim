"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userImgUpload = exports.postImageUpload = exports.fieldCheck = exports.existPostCheckAndData = exports.existPostCheck = exports.existPostAndOwnerCheck = exports.checkParamPostUndefined = exports.checkParamPostExist = exports.checkParamCommentExistAndData = exports.checkCommentUndefined = exports.checkCommentPinned = exports.checkBodyPostUndefined = exports.checkBodyPostExist = exports.checkBodyContentUndefined = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _Post = _interopRequireDefault(require("./models/Post.js"));

var _Comment = _interopRequireDefault(require("./models/Comment.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Post Middleware
// 요청한 User가 작성한 게시글인지를 체크하는 미들웨어
var existPostAndOwnerCheck = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var id, _id, exist;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _id = req.body.user._id; // user id

            _context.prev = 2;
            _context.next = 5;
            return _Post["default"].exists({
              _id: id,
              owner: _id
            });

          case 5:
            exist = _context.sent;

            if (exist) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              success: false,
              message: '존재하지 않거나 삭제된 게시물입니다.'
            }));

          case 8:
            next();
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));

  return function existPostAndOwnerCheck(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // post id가 DB에 존재하는지 체크하고, req.post에 post Data를 넣어서 보내주는 미들웨어


exports.existPostAndOwnerCheck = existPostAndOwnerCheck;

var existPostCheckAndData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var postId, post;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            postId = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Post["default"].findOne({
              _id: postId
            });

          case 4:
            post = _context2.sent;

            if (post) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).send({
              success: false,
              message: '존재하지 않거나 삭제된 게시물입니다.'
            }));

          case 7:
            req.post = post;
            next();
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function existPostCheckAndData(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // User와 상관없이 DB에 존재하는 게시글인지 체크하는 미들웨어


exports.existPostCheckAndData = existPostCheckAndData;

var existPostCheck = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var id, exist;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Post["default"].exists({
              _id: id
            });

          case 4:
            exist = _context3.sent;

            if (exist) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(404).send({
              success: false,
              message: '존재하지 않거나 삭제된 게시물입니다.'
            }));

          case 7:
            next();
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 10]]);
  }));

  return function existPostCheck(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(); // 보낸 데이터에서 누락한 field의 유무를 체크하는 미들웨어


exports.existPostCheck = existPostCheck;

var fieldCheck = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var _req$body, title, content, hashtag, targetAge;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, content = _req$body.content, hashtag = _req$body.hashtag, targetAge = _req$body.targetAge;

            if (title) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", res.status(400).send({
              success: false,
              message: 'title이 undefined입니다.'
            }));

          case 5:
            if (hashtag) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", res.status(400).send({
              success: false,
              message: 'hashtag가 undefined입니다.'
            }));

          case 9:
            if (content) {
              _context4.next = 13;
              break;
            }

            return _context4.abrupt("return", res.status(400).send({
              success: false,
              message: 'content가 undefined입니다.'
            }));

          case 13:
            if (targetAge === '10' || targetAge === '20' || targetAge === '30' || targetAge === '40' || targetAge === '50') {
              _context4.next = 17;
              break;
            }

            return _context4.abrupt("return", res.status(400).send({
              success: false,
              message: '해당 연령대는 존재하지 않습니다'
            }));

          case 17:
            next();

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fieldCheck(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}(); // Image Middleware


exports.fieldCheck = fieldCheck;
var userImgUpload = (0, _multer["default"])({
  storage: _multer["default"].diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, 'uploads/users/');
    },
    filename: function filename(req, file, cb) {
      var ext = _path["default"].extname(file.originalname);

      cb(null, _path["default"].basename(file.originalname, ext) + Date.now() + ext);
    },
    limits: {
      fileSize: 5 * 1024 * 1024
    }
  })
});
exports.userImgUpload = userImgUpload;
var postImageUpload = (0, _multer["default"])({
  storage: _multer["default"].diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, 'uploads/posts');
    },
    filename: function filename(req, file, cb) {
      var ext = _path["default"].extname(file.originalname);

      cb(null, _path["default"].basename(file.originalname, ext) + Date.now() + ext);
    },
    limits: {
      fileSize: 5 * 1024 * 1024
    }
  })
}); // Commment Middleware

exports.postImageUpload = postImageUpload;

var checkCommentUndefined = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var commentId;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commentId = req.params.id; // comment id

            if (commentId) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", res.status(400).send({
              success: false,
              message: 'commentId가 undefined입니다.'
            }));

          case 3:
            next();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function checkCommentUndefined(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.checkCommentUndefined = checkCommentUndefined;

var checkBodyPostUndefined = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var postId;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            postId = req.body.post_id;

            if (postId) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", res.status(400).send({
              success: false,
              message: 'postId가 undefined입니다.'
            }));

          case 3:
            next();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function checkBodyPostUndefined(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.checkBodyPostUndefined = checkBodyPostUndefined;

var checkParamPostUndefined = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    var postId;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            postId = req.params.id;

            if (postId) {
              _context7.next = 3;
              break;
            }

            return _context7.abrupt("return", res.status(400).send({
              success: false,
              message: 'postId가 undefined입니다.'
            }));

          case 3:
            next();

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function checkParamPostUndefined(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.checkParamPostUndefined = checkParamPostUndefined;

var checkBodyContentUndefined = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    var content;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            content = req.body.content;

            if (content) {
              _context8.next = 3;
              break;
            }

            return _context8.abrupt("return", res.status(400).send({
              success: false,
              message: 'content가 undefined입니다.'
            }));

          case 3:
            next();

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function checkBodyContentUndefined(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

exports.checkBodyContentUndefined = checkBodyContentUndefined;

var checkBodyPostExist = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    var postId, postExist;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            postId = req.body.post_id;
            _context9.prev = 1;
            _context9.next = 4;
            return _Post["default"].exists({
              _id: postId
            });

          case 4:
            postExist = _context9.sent;

            if (postExist) {
              _context9.next = 7;
              break;
            }

            return _context9.abrupt("return", res.status(400).send({
              success: false,
              message: '존재하지 않거나 삭제된 게시물입니다.'
            }));

          case 7:
            next();
            _context9.next = 14;
            break;

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(500).send({
              success: false,
              message: _context9.t0.message
            }));

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 10]]);
  }));

  return function checkBodyPostExist(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

exports.checkBodyPostExist = checkBodyPostExist;

var checkParamPostExist = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res, next) {
    var postId, postExist;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            postId = req.params.id;
            _context10.prev = 1;
            _context10.next = 4;
            return _Post["default"].exists({
              _id: postId
            });

          case 4:
            postExist = _context10.sent;

            if (postExist) {
              _context10.next = 7;
              break;
            }

            return _context10.abrupt("return", res.status(400).send({
              success: false,
              message: '존재하지 않거나 삭제된 게시물입니다.'
            }));

          case 7:
            next();
            _context10.next = 14;
            break;

          case 10:
            _context10.prev = 10;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(500).send({
              success: false,
              message: _context10.t0.message
            }));

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 10]]);
  }));

  return function checkParamPostExist(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

exports.checkParamPostExist = checkParamPostExist;

var checkParamCommentExistAndData = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
    var commentId, comment;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            commentId = req.params.id;
            _context11.prev = 1;
            _context11.next = 4;
            return _Comment["default"].findOne({
              _id: commentId
            });

          case 4:
            comment = _context11.sent;

            if (comment) {
              _context11.next = 7;
              break;
            }

            return _context11.abrupt("return", res.status(400).send({
              success: false,
              message: '존재하지 않는 댓글입니다.'
            }));

          case 7:
            req.comment = comment;
            next();
            _context11.next = 15;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0);
            return _context11.abrupt("return", res.status(500).send({
              success: false,
              message: _context11.t0.message
            }));

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 11]]);
  }));

  return function checkParamCommentExistAndData(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

exports.checkParamCommentExistAndData = checkParamCommentExistAndData;

var checkCommentPinned = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res, next) {
    var commentId, _id, comment, post;

    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            commentId = req.params.id;
            _id = req.body.user._id;
            _context12.prev = 2;
            _context12.next = 5;
            return _Comment["default"].findOne({
              _id: commentId,
              parent_id: null
            });

          case 5:
            comment = _context12.sent;
            _context12.next = 8;
            return _Post["default"].findOne({
              _id: comment.post_id,
              owner: _id
            });

          case 8:
            post = _context12.sent;

            if (comment) {
              _context12.next = 11;
              break;
            }

            return _context12.abrupt("return", res.status(400).send({
              success: false,
              message: '고정할 수 없는 댓글입니다.'
            }));

          case 11:
            if (post) {
              _context12.next = 13;
              break;
            }

            return _context12.abrupt("return", res.status(400).send({
              success: false,
              message: '존재하지 않거나 삭제된 게시물입니다.'
            }));

          case 13:
            req.post = post;
            next();
            _context12.next = 21;
            break;

          case 17:
            _context12.prev = 17;
            _context12.t0 = _context12["catch"](2);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.status(500).send({
              success: false,
              message: _context12.t0.message
            }));

          case 21:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 17]]);
  }));

  return function checkCommentPinned(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();

exports.checkCommentPinned = checkCommentPinned;