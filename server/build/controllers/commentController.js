"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putCommentEdit = exports.postCommentCreate = exports.getCommentUnpinned = exports.getCommentUnlike = exports.getCommentPinned = exports.getCommentList = exports.getCommentLike = exports.getComment = exports.deleteComment = void 0;

var _Comment = _interopRequireDefault(require("../models/Comment.js"));

var _User = _interopRequireDefault(require("../models/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 댓글 생성(Comment Create)
var postCommentCreate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, postId, content, parentId, _id, commentExist, comment, parentComment;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, postId = _req$body.post_id, content = _req$body.content, parentId = _req$body.parent_id;
            _id = req.body.user._id;
            _context.prev = 2;

            if (!(parentId !== null)) {
              _context.next = 11;
              break;
            }

            if (!(parentId === undefined)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              success: false,
              message: 'parentId가 undefined입니다.'
            }));

          case 6:
            _context.next = 8;
            return _Comment["default"].exists({
              _id: parentId
            });

          case 8:
            commentExist = _context.sent;

            if (commentExist) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              success: false,
              message: '존재하지 않는 댓글입니다.'
            }));

          case 11:
            _context.next = 13;
            return _Comment["default"].create({
              text: content,
              writer: _id,
              post_id: postId,
              parent_id: parentId
            });

          case 13:
            comment = _context.sent;

            if (!(parentId !== null)) {
              _context.next = 21;
              break;
            }

            _context.next = 17;
            return _Comment["default"].findOne({
              _id: parentId
            });

          case 17:
            parentComment = _context.sent;
            parentComment.children.push(comment._id);
            _context.next = 21;
            return parentComment.save();

          case 21:
            return _context.abrupt("return", res.status(200).send({
              success: true,
              comment_id: comment._id,
              message: '댓글 작성 성공했습니다.'
            }));

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).send({
              success: false,
              message: _context.t0.message
            }));

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 24]]);
  }));

  return function postCommentCreate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // 댓글 리스트 가져오기


exports.postCommentCreate = postCommentCreate;

var getCommentList = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var postId, userData, _req$body$user, _id, nickname, userId, repeat, commentList, DATA;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            postId = req.params.id;
            userData = {
              _id: undefined,
              nickname: undefined,
              userId: undefined
            };

            if (Object.keys(req.body).includes('user')) {
              // 로그인 했을 때
              _req$body$user = req.body.user, _id = _req$body$user._id, nickname = _req$body$user.nickname, userId = _req$body$user.userId;
              userData._id = _id;
              userData.nickname = nickname;
              userData.userId = userId;
            }

            _context4.prev = 3;

            repeat = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(comment, check) {
                var commentDataList, i;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        if (!(comment.length === 0)) {
                          _context3.next = 2;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 2:
                        _context3.next = 4;
                        return Promise.all(comment.map( /*#__PURE__*/function () {
                          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(el) {
                            var children, writer;
                            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return _Comment["default"].find({
                                      parent_id: el._id,
                                      post_id: el.post_id
                                    });

                                  case 2:
                                    children = _context2.sent;
                                    _context2.next = 5;
                                    return _User["default"].findOne({
                                      _id: el.writer
                                    });

                                  case 5:
                                    writer = _context2.sent;

                                    if (!userData._id) {
                                      _context2.next = 10;
                                      break;
                                    }

                                    return _context2.abrupt("return", _objectSpread(_objectSpread({}, el._doc), {}, {
                                      children: children,
                                      writer: {
                                        userId: writer.userId,
                                        _id: writer._id,
                                        nickname: writer.nickname,
                                        imageUrl: writer.imageUrl
                                      },
                                      like: el._doc.like_users.includes(userData._id)
                                    }));

                                  case 10:
                                    return _context2.abrupt("return", _objectSpread(_objectSpread({}, el._doc), {}, {
                                      children: children,
                                      writer: {
                                        userId: writer.userId,
                                        _id: writer._id,
                                        nickname: writer.nickname,
                                        imageUrl: writer.imageUrl
                                      }
                                    }));

                                  case 11:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x7) {
                            return _ref4.apply(this, arguments);
                          };
                        }()));

                      case 4:
                        commentDataList = _context3.sent;
                        i = 0;

                      case 6:
                        if (!(i < commentDataList.length)) {
                          _context3.next = 14;
                          break;
                        }

                        if (commentDataList[i].parent_id === null) {
                          check = i;
                          DATA[check] = [];
                        }

                        DATA[check].push(commentDataList[i]);
                        _context3.next = 11;
                        return repeat(commentDataList[i].children, check);

                      case 11:
                        i++;
                        _context3.next = 6;
                        break;

                      case 14:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function repeat(_x5, _x6) {
                return _ref3.apply(this, arguments);
              };
            }();

            _context4.next = 7;
            return _Comment["default"].find({
              post_id: postId,
              parent_id: null
            });

          case 7:
            commentList = _context4.sent;
            DATA = [];
            _context4.next = 11;
            return repeat(commentList, 0);

          case 11:
            return _context4.abrupt("return", res.status(200).send({
              success: true,
              data: DATA
            }));

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](3);
            return _context4.abrupt("return", res.status(500).send({
              success: false,
              message: _context4.t0.message
            }));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 14]]);
  }));

  return function getCommentList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // 댓글 가져오기


exports.getCommentList = getCommentList;

var getComment = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var comment, userData, _req$body$user2, _id, nickname, userId, repeat, DATA, parentWriter;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            comment = req.comment;
            userData = {
              _id: undefined,
              nickname: undefined,
              userId: undefined
            };

            if (Object.keys(req.body).includes('user')) {
              // 로그인 했을 때
              _req$body$user2 = req.body.user, _id = _req$body$user2._id, nickname = _req$body$user2.nickname, userId = _req$body$user2.userId;
              userData._id = _id;
              userData.nickname = nickname;
              userData.userId = userId;
            }

            _context7.prev = 3;

            repeat = /*#__PURE__*/function () {
              var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(children) {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        if (!(children.length === 0)) {
                          _context6.next = 2;
                          break;
                        }

                        return _context6.abrupt("return");

                      case 2:
                        _context6.next = 4;
                        return Promise.all(children.map( /*#__PURE__*/function () {
                          var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(el) {
                            var child, writer;
                            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    _context5.next = 2;
                                    return _Comment["default"].findById(el);

                                  case 2:
                                    child = _context5.sent;
                                    _context5.next = 5;
                                    return _User["default"].findOne({
                                      _id: child.writer
                                    });

                                  case 5:
                                    writer = _context5.sent;

                                    if (userData._id) {
                                      DATA.push(_objectSpread(_objectSpread({}, child._doc), {}, {
                                        writer: {
                                          userId: writer.userId,
                                          _id: writer._id,
                                          nickname: writer.nickname,
                                          imageUrl: writer.imageUrl
                                        },
                                        like: child.like_users.includes(userData._id)
                                      }));
                                    } else {
                                      DATA.push(_objectSpread(_objectSpread({}, el._doc), {}, {
                                        writer: {
                                          userId: writer.userId,
                                          _id: writer._id,
                                          nickname: writer.nickname,
                                          imageUrl: writer.imageUrl
                                        }
                                      }));
                                    }

                                    _context5.next = 9;
                                    return repeat(child.children);

                                  case 9:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5);
                          }));

                          return function (_x11) {
                            return _ref7.apply(this, arguments);
                          };
                        }()));

                      case 4:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function repeat(_x10) {
                return _ref6.apply(this, arguments);
              };
            }();

            DATA = [];
            _context7.next = 8;
            return _User["default"].findOne({
              _id: comment.writer
            });

          case 8:
            parentWriter = _context7.sent;

            if (userData._id) {
              DATA.push(_objectSpread(_objectSpread({}, comment._doc), {}, {
                writer: {
                  userId: parentWriter.userId,
                  _id: parentWriter._id,
                  nickname: parentWriter.nickname,
                  imageUrl: parentWriter.imageUrl
                },
                like: comment.like_users.includes(userData._id)
              }));
            } else {
              DATA.push(_objectSpread(_objectSpread({}, comment._doc), {}, {
                writer: {
                  userId: parentWriter.userId,
                  _id: parentWriter._id,
                  nickname: parentWriter.nickname,
                  imageUrl: parentWriter.imageUrl
                }
              }));
            }

            _context7.next = 12;
            return repeat(comment.children);

          case 12:
            return _context7.abrupt("return", res.status(200).send({
              success: true,
              data: DATA
            }));

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](3);
            console.log(_context7.t0);
            return _context7.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 15]]);
  }));

  return function getComment(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}(); // 댓글 고정하기


exports.getComment = getComment;

var getCommentPinned = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var commentId, post;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            commentId = req.params.id;
            post = req.post;
            _context8.prev = 2;
            post.meta.pinnedCmnt = commentId;
            post.meta.answer = true;
            _context8.next = 7;
            return post.save();

          case 7:
            return _context8.abrupt("return", res.status(200).send({
              success: true,
              message: '댓글 고정을 성공했습니다.'
            }));

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            return _context8.abrupt("return", res.status(500).send({
              success: false,
              message: _context8.t0.message
            }));

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 10]]);
  }));

  return function getCommentPinned(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}(); // 댓글 고정 취소하기


exports.getCommentPinned = getCommentPinned;

var getCommentUnpinned = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var post;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            post = req.post;
            _context9.prev = 1;
            post.meta.pinnedCmnt = null;
            post.meta.answer = false;
            _context9.next = 6;
            return post.save();

          case 6:
            return _context9.abrupt("return", res.status(200).send({
              success: true,
              message: '고정댓글을 해제했습니다.'
            }));

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            return _context9.abrupt("return", res.status(500).send({
              success: false,
              message: _context9.t0.message
            }));

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 9]]);
  }));

  return function getCommentUnpinned(_x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}(); // 댓글 좋아요


exports.getCommentUnpinned = getCommentUnpinned;

var getCommentLike = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _id, comment;

    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _id = req.body.user._id;
            comment = req.comment;
            _context10.prev = 2;

            if (!comment.like_users.includes(_id)) {
              _context10.next = 5;
              break;
            }

            return _context10.abrupt("return", res.status(404).send({
              success: false,
              message: '이미 좋아요한 댓글입니다.'
            }));

          case 5:
            comment.like_count += 1;
            comment.like_users.push(_id);
            _context10.next = 9;
            return comment.save();

          case 9:
            return _context10.abrupt("return", res.status(200).send({
              success: true,
              message: '좋아요를 눌렀습니다.',
              data: {
                likes: comment.like_count
              }
            }));

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            return _context10.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 12]]);
  }));

  return function getCommentLike(_x16, _x17) {
    return _ref10.apply(this, arguments);
  };
}(); // 댓글 좋아요 취소


exports.getCommentLike = getCommentLike;

var getCommentUnlike = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _id, comment;

    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _id = req.body.user._id;
            comment = req.comment;
            _context11.prev = 2;

            if (comment.like_users.includes(_id)) {
              _context11.next = 5;
              break;
            }

            return _context11.abrupt("return", res.status(404).send({
              success: false,
              message: '좋아요를 하지않은 댓글입니다.'
            }));

          case 5:
            comment.like_count -= 1;
            comment.like_users = comment.like_users.filter(function (el) {
              return el !== String(_id);
            });
            _context11.next = 9;
            return comment.save();

          case 9:
            return _context11.abrupt("return", res.status(200).send({
              success: true,
              message: '좋아요를 취소하였습니다.',
              data: {
                likes: comment.like_count
              }
            }));

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](2);
            console.log(_context11.t0);
            return _context11.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 12]]);
  }));

  return function getCommentUnlike(_x18, _x19) {
    return _ref11.apply(this, arguments);
  };
}(); // 댓글 수정하기


exports.getCommentUnlike = getCommentUnlike;

var putCommentEdit = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var commentId, content;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            commentId = req.params.id;
            content = req.body.content;
            _context12.prev = 2;
            _context12.next = 5;
            return _Comment["default"].findByIdAndUpdate(commentId, {
              text: content
            });

          case 5:
            return _context12.abrupt("return", res.status(200).send({
              success: true,
              message: '댓글 수정이 완료되었습니다.'
            }));

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](2);
            console.log(_context12.t0);
            return _context12.abrupt("return", res.status(500).send({
              success: false,
              message: _context12.t0.message
            }));

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 8]]);
  }));

  return function putCommentEdit(_x20, _x21) {
    return _ref12.apply(this, arguments);
  };
}(); // 댓글 삭제하기


exports.putCommentEdit = putCommentEdit;

var deleteComment = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var commentId;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            commentId = req.params.id; // comment id

            _context13.prev = 1;
            _context13.next = 4;
            return _Comment["default"].deleteOne({
              _id: commentId
            });

          case 4:
            return _context13.abrupt("return", res.status(200).send({
              success: true,
              message: '댓글 삭제가 완료되었습니다.'
            }));

          case 7:
            _context13.prev = 7;
            _context13.t0 = _context13["catch"](1);
            return _context13.abrupt("return", res.status(500).send({
              success: false,
              message: '내부 서버 오류입니다.'
            }));

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 7]]);
  }));

  return function deleteComment(_x22, _x23) {
    return _ref13.apply(this, arguments);
  };
}();

exports.deleteComment = deleteComment;