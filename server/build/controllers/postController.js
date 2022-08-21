"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putPostEdit = exports.postPostImageUpload = exports.postPostCreate = exports.getPostView = exports.getPostSearch = exports.getPostList = exports.getPostDetail = exports.getMainPageLists = exports.deletePost = void 0;

var _Post = _interopRequireDefault(require("../models/Post.js"));

var _User = _interopRequireDefault(require("../models/User.js"));

var _Like = _interopRequireDefault(require("../models/Like.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 게시물 생성(Post Create)
var postPostCreate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, title, content, hashtag, targetAge, _id, user, post;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, content = _req$body.content, hashtag = _req$body.hashtag, targetAge = _req$body.targetAge;
            _id = req.body.user._id;
            _context.prev = 2;
            _context.next = 5;
            return _User["default"].findById({
              _id: _id
            });

          case 5:
            user = _context.sent;
            _context.next = 8;
            return _Post["default"].create({
              title: title,
              hashtag: hashtag,
              content: content,
              targetAge: targetAge,
              owner: _id
            });

          case 8:
            post = _context.sent;
            _context.next = 11;
            return _Like["default"].create({
              post_id: post._id
            });

          case 11:
            user.posts.push(post._id);
            _context.next = 14;
            return user.save();

          case 14:
            return _context.abrupt("return", res.status(201).send({
              success: true,
              message: '새로운 게시글 작성이 완료되었습니다.'
            }));

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 17]]);
  }));

  return function postPostCreate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // 게시물 수정(Post Edit)


exports.postPostCreate = postPostCreate;

var putPostEdit = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Post["default"].findByIdAndUpdate(id, _objectSpread({}, req.body));

          case 4:
            return _context2.abrupt("return", res.status(201).send({
              success: true,
              message: '게시글 수정이 완료되었습니다.'
            }));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));

  return function putPostEdit(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // 게시물 보기(Post Detail Read)


exports.putPostEdit = putPostEdit;

var getPostDetail = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var postId, post, owner, like, age, _id, user;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            postId = req.params.id;
            post = req.post;
            _context3.prev = 2;
            _context3.next = 5;
            return _User["default"].findById(String(post.owner));

          case 5:
            owner = _context3.sent;
            _context3.next = 8;
            return _Like["default"].findOne({
              post_id: postId
            });

          case 8:
            like = _context3.sent;
            age = String(post._doc.targetAge);

            if (!Object.keys(req.body).includes('user')) {
              _context3.next = 16;
              break;
            }

            // 로그인 했을 때
            _id = req.body.user._id;
            _context3.next = 14;
            return _User["default"].findOne({
              _id: _id
            });

          case 14:
            user = _context3.sent;
            return _context3.abrupt("return", res.status(200).send(_objectSpread(_objectSpread({}, post._doc), {}, {
              targetAge: age,
              bookmark: user.bookmarks.includes(postId),
              like: like.user_array.includes(_id),
              owner: {
                _id: owner._id,
                userId: owner.userId,
                nickname: owner.nickname,
                imageUrl: owner.imageUrl
              }
            })));

          case 16:
            return _context3.abrupt("return", res.status(200).send(_objectSpread(_objectSpread({}, post._doc), {}, {
              targetAge: age,
              owner: {
                _id: owner._id,
                userId: owner.userId,
                nickname: owner.nickname,
                imageUrl: owner.imageUrl
              }
            })));

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 19]]);
  }));

  return function getPostDetail(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // 나이별 게시물 보기(Post List Read)


exports.getPostDetail = getPostDetail;

var getPostList = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var age, postList, postDataList;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            age = req.query.age;

            if (age === '10' || age === '20' || age === '30' || age === '40' || age === '50') {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return", res.status(404).send({
              success: false,
              message: '해당 연령대는 존재하지 않습니다'
            }));

          case 3:
            _context5.next = 5;
            return _Post["default"].find({
              targetAge: age
            });

          case 5:
            postList = _context5.sent;
            _context5.next = 8;
            return Promise.all(postList.map( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(el) {
                var user;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _User["default"].findById(String(el.owner));

                      case 2:
                        user = _context4.sent;
                        return _context4.abrupt("return", _objectSpread(_objectSpread({}, el._doc), {}, {
                          owner: {
                            _id: user._id,
                            nickname: user.nickname,
                            userId: user.userId,
                            imageUrl: user.imageUrl
                          }
                        }));

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x9) {
                return _ref5.apply(this, arguments);
              };
            }()));

          case 8:
            postDataList = _context5.sent;
            return _context5.abrupt("return", res.status(200).send(postDataList));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getPostList(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // 게시물 삭제(Post List Delete)


exports.getPostList = getPostList;

var deletePost = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, _id, user;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id; // post id

            _id = req.body.user._id;
            _context6.prev = 2;
            _context6.next = 5;
            return _Post["default"].deleteOne({
              _id: id
            });

          case 5:
            _context6.next = 7;
            return _Like["default"].deleteOne({
              _id: id
            });

          case 7:
            _context6.next = 9;
            return _User["default"].findById(_id);

          case 9:
            user = _context6.sent;
            user.posts = user.posts.filter(function (el) {
              return el !== id;
            });
            _context6.next = 13;
            return user.save();

          case 13:
            return _context6.abrupt("return", res.status(200).send({
              success: true,
              message: '게시글 삭제가 완료되었습니다.'
            }));

          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            return _context6.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 16]]);
  }));

  return function deletePost(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}(); // 게시물 조회수


exports.deletePost = deletePost;

var getPostView = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var post;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            post = req.post;
            post.meta.views += 1;
            _context7.next = 5;
            return post.save();

          case 5:
            return _context7.abrupt("return", res.status(200).send({
              success: true,
              message: '게시글을 조회했습니다.',
              data: {
                views: post.meta.views
              }
            }));

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));

  return function getPostView(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}(); // 게시글 검색


exports.getPostView = getPostView;

var getPostSearch = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$query, age, tag, keyword, postList, postDataList;

    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$query = req.query, age = _req$query.age, tag = _req$query.tag, keyword = _req$query.keyword;

            if (!(parseInt(age) >= 50)) {
              _context9.next = 3;
              break;
            }

            return _context9.abrupt("return", res.status(404).send({
              success: false,
              message: '해당 연령대는 존재하지 않습니다'
            }));

          case 3:
            _context9.prev = 3;
            _context9.next = 6;
            return _Post["default"].find({
              targetAge: age
            });

          case 6:
            postList = _context9.sent;
            _context9.next = 9;
            return Promise.all(postList.filter(function (el) {
              return el[tag].includes(keyword);
            }).map( /*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(el) {
                var user;
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return _User["default"].findById(String(el.owner));

                      case 2:
                        user = _context8.sent;
                        return _context8.abrupt("return", _objectSpread(_objectSpread({}, el._doc), {}, {
                          owner: {
                            _id: user._id,
                            nickname: user.nickname,
                            imageUrl: user.imageUrl
                          }
                        }));

                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));

              return function (_x16) {
                return _ref9.apply(this, arguments);
              };
            }()));

          case 9:
            postDataList = _context9.sent;
            return _context9.abrupt("return", res.status(200).send(postDataList));

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](3);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(500).json({
              success: false,
              message: '잠시 후에 다시 시도해주세요.'
            }));

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[3, 13]]);
  }));

  return function getPostSearch(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getPostSearch = getPostSearch;

var getMainPageLists = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var postLists, posts, newPosts;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            postLists = {
              10: [],
              20: [],
              30: [],
              40: [],
              50: []
            };
            _context11.next = 4;
            return _Post["default"].find().sort({
              createAt: -1
            });

          case 4:
            posts = _context11.sent;
            _context11.next = 7;
            return Promise.all(posts.map( /*#__PURE__*/function () {
              var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(el) {
                var user;
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return _User["default"].findById(String(el.owner));

                      case 2:
                        user = _context10.sent;
                        return _context10.abrupt("return", _objectSpread(_objectSpread({}, el._doc), {}, {
                          owner: {
                            nickname: user.nickname
                          }
                        }));

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10);
              }));

              return function (_x19) {
                return _ref11.apply(this, arguments);
              };
            }()));

          case 7:
            newPosts = _context11.sent;
            newPosts.forEach(function (el) {
              if (postLists[el.targetAge].length < 5 && !el.meta.answer) {
                postLists[el.targetAge].push(el);
              } else if (postLists[el.targetAge].length < 5) {
                postLists[el.targetAge].push(el);
              }
            });
            return _context11.abrupt("return", res.status(200).send({
              success: true,
              lists: postLists
            }));

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);
            return _context11.abrupt("return", res.status(500).json({
              success: false,
              message: '다시 시도해주세요.'
            }));

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 12]]);
  }));

  return function getMainPageLists(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getMainPageLists = getMainPageLists;

var postPostImageUpload = function postPostImageUpload(req, res) {
  var IMG_URL = "http://localhost:4000/uploads/posts/".concat(req.file.filename);
  res.json({
    url: IMG_URL
  });
};

exports.postPostImageUpload = postPostImageUpload;