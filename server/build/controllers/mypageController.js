"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putChangeUserInfo = exports.putChangeUserImage = exports.putChangePassword = exports.getWriteLists = exports.getBookMarkLists = void 0;

var _User = _interopRequireDefault(require("../models/User.js"));

var _Post = _interopRequireDefault(require("../models/Post.js"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
// 유저 정보 수정 부분은 추후에 코드 수정이 필요
// 서버 응답코드 넣어야 함

*/
var getWriteLists = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var userId, _yield$User$findOne, posts, writeLists;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = req.query.userId;
            _context2.prev = 1;
            _context2.next = 4;
            return _User["default"].findOne({
              userId: userId
            });

          case 4:
            _yield$User$findOne = _context2.sent;
            posts = _yield$User$findOne.posts;

            if (!(posts.length === 0)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(200).send("작성한 게시글이 없습니다."));

          case 8:
            _context2.next = 10;
            return Promise.all(posts.map( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(list) {
                var post;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _Post["default"].findById(list);

                      case 2:
                        post = _context.sent;
                        return _context.abrupt("return", post);

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 10:
            writeLists = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              success: true,
              writeLists: writeLists
            }));

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).send('잠시 후 다시 시도해주세요.'));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 14]]);
  }));

  return function getWriteLists(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getWriteLists = getWriteLists;

var getBookMarkLists = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var userId, _yield$User$findOne2, bookmarks, bookMarkLists;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            userId = req.query.userId;
            _context4.prev = 1;
            _context4.next = 4;
            return _User["default"].findOne({
              userId: userId
            });

          case 4:
            _yield$User$findOne2 = _context4.sent;
            bookmarks = _yield$User$findOne2.bookmarks;

            if (!(bookmarks.length === 0)) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", res.status(200).send("즐겨찾기한 게시글이 없습니다."));

          case 8:
            _context4.next = 10;
            return Promise.all(bookmarks.map( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(list) {
                var post, user;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _Post["default"].findById(list);

                      case 2:
                        post = _context3.sent;
                        _context3.next = 5;
                        return _User["default"].findById(String(post.owner));

                      case 5:
                        user = _context3.sent;
                        return _context3.abrupt("return", _objectSpread(_objectSpread({}, post._doc), {}, {
                          owner: {
                            nickname: user.nickname
                          }
                        }));

                      case 7:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x6) {
                return _ref4.apply(this, arguments);
              };
            }()));

          case 10:
            bookMarkLists = _context4.sent;
            return _context4.abrupt("return", res.status(200).json({
              success: true,
              bookMarkLists: bookMarkLists
            }));

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(500).send('잠시 후에 다시 시도해주세요.'));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 14]]);
  }));

  return function getBookMarkLists(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}(); // REFACOTRING 필요


exports.getBookMarkLists = getBookMarkLists;

var putChangeUserImage = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var email, file, user, updateImage;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            email = req.body.email, file = req.file;
            _context5.next = 3;
            return _User["default"].findOne({
              email: email
            });

          case 3:
            user = _context5.sent;
            _context5.next = 6;
            return _User["default"].findByIdAndUpdate(user._id, {
              imageUrl: file ? file.path : user.imageUrl
            }, {
              "new": true
            });

          case 6:
            updateImage = _context5.sent;

            if (!file) {
              _context5.next = 9;
              break;
            }

            return _context5.abrupt("return", res.status(201).json({
              success: true,
              message: '성공적으로 프로필 이미지를 변경했습니다.',
              imageUrl: updateImage.imageUrl
            }));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function putChangeUserImage(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.putChangeUserImage = putChangeUserImage;

var putChangeUserInfo = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body, userId, nickname, email, user, checkId, checkName, updateUser;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req.body, userId = _req$body.userId, nickname = _req$body.nickname, email = _req$body.email;
            _context6.next = 3;
            return _User["default"].findOne({
              email: email
            });

          case 3:
            user = _context6.sent;
            _context6.next = 6;
            return _User["default"].findOne({
              userId: userId
            });

          case 6:
            checkId = _context6.sent;
            _context6.next = 9;
            return _User["default"].findOne({
              nickname: nickname
            });

          case 9:
            checkName = _context6.sent;

            if (!checkId) {
              _context6.next = 12;
              break;
            }

            return _context6.abrupt("return", res.status(409).json({
              success: false,
              message: '이미 존재하는 아이디입니다.'
            }));

          case 12:
            if (!checkName) {
              _context6.next = 14;
              break;
            }

            return _context6.abrupt("return", res.status(409).json({
              success: false,
              message: '이미 존재하는 닉네임입니다.'
            }));

          case 14:
            _context6.next = 16;
            return _User["default"].findByIdAndUpdate(user._id, {
              userId: userId,
              nickname: nickname
            }, {
              "new": true
            });

          case 16:
            updateUser = _context6.sent;
            return _context6.abrupt("return", res.status(201).json({
              id: updateUser.userId,
              name: updateUser.nickname,
              email: updateUser.email,
              success: true,
              message: '성공적으로 유저 정보를 변경하였습니다.'
            }));

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function putChangeUserInfo(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.putChangeUserInfo = putChangeUserInfo;

var putChangePassword = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body2, userId, oldPassword, newPassword, newPassword2, user, checkPassword;

    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, userId = _req$body2.userId, oldPassword = _req$body2.oldPassword, newPassword = _req$body2.newPassword, newPassword2 = _req$body2.newPassword2;
            _context7.next = 3;
            return _User["default"].findOne({
              userId: userId
            });

          case 3:
            user = _context7.sent;
            _context7.next = 6;
            return _bcrypt["default"].compare(oldPassword, user.password);

          case 6:
            checkPassword = _context7.sent;

            if (checkPassword) {
              _context7.next = 9;
              break;
            }

            return _context7.abrupt("return", res.status(400).json({
              success: false,
              message: '비밀번호를 다시 입력하세요.'
            }));

          case 9:
            if (!(newPassword !== newPassword2)) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", res.status(400).json({
              success: false,
              message: '새 비밀번호와 비밀번호 확인이 일치하지 않습니다.'
            }));

          case 11:
            user.password = newPassword;
            _context7.next = 14;
            return user.save();

          case 14:
            return _context7.abrupt("return", res.status(201).json({
              success: true,
              message: '성공적으로 비밀번호를 변경하였습니다.'
            }));

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function putChangePassword(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.putChangePassword = putChangePassword;