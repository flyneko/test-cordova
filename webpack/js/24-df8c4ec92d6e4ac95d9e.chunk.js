(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@fancyapps/ui/dist/fancybox.esm.js ***!
  \*********************************************************/
/*! exports provided: Carousel, Fancybox, Panzoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fancybox", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panzoom", function() { return d; });
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// @fancyapps/ui/Fancybox v4.0.31
const t = function (t) {
    return "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t);
  },
  e = function () {
    let s = !1;
    for (var _len = arguments.length, i = new Array(_len), _key = 0; _key < _len; _key++) {
      i[_key] = arguments[_key];
    }
    "boolean" == typeof i[0] && (s = i.shift());
    let o = i[0];
    if (!o || "object" != typeof o) throw new Error("extendee must be an object");
    const n = i.slice(1),
      a = n.length;
    for (let i = 0; i < a; i++) {
      const a = n[i];
      for (let i in a) if (a.hasOwnProperty(i)) {
        const n = a[i];
        if (s && (Array.isArray(n) || t(n))) {
          const t = Array.isArray(n) ? [] : {};
          o[i] = e(!0, o.hasOwnProperty(i) ? o[i] : t, n);
        } else o[i] = n;
      }
    }
    return o;
  },
  i = function (t) {
    let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e4;
    return t = parseFloat(t) || 0, Math.round((t + Number.EPSILON) * e) / e;
  },
  s = function (t) {
    return !!(t && "object" == typeof t && t instanceof Element && t !== document.body) && !t.__Panzoom && (function (t) {
      const e = getComputedStyle(t)["overflow-y"],
        i = getComputedStyle(t)["overflow-x"],
        s = ("scroll" === e || "auto" === e) && Math.abs(t.scrollHeight - t.clientHeight) > 1,
        o = ("scroll" === i || "auto" === i) && Math.abs(t.scrollWidth - t.clientWidth) > 1;
      return s || o;
    }(t) ? t : s(t.parentNode));
  },
  o = "undefined" != typeof window && window.ResizeObserver || /*#__PURE__*/function () {
    function _class(t) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, _class);
      this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t;
    }
    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(_class, [{
      key: "observe",
      value: function observe(t) {
        if (this.observables.some(function (e) {
          return e.el === t;
        })) return;
        const e = {
          el: t,
          size: {
            height: t.clientHeight,
            width: t.clientWidth
          }
        };
        this.observables.push(e);
      }
    }, {
      key: "unobserve",
      value: function unobserve(t) {
        this.observables = this.observables.filter(function (e) {
          return e.el !== t;
        });
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        this.observables = [];
      }
    }, {
      key: "check",
      value: function check() {
        const t = this.observables.filter(function (t) {
          const e = t.el.clientHeight,
            i = t.el.clientWidth;
          if (t.size.height !== e || t.size.width !== i) return t.size.height = e, t.size.width = i, !0;
        }).map(function (t) {
          return t.el;
        });
        t.length > 0 && this.callback(t), window.requestAnimationFrame(this.boundCheck);
      }
    }]);
    return _class;
  }();
let n = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(function n(t) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, n);
  this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY;
});
const a = function (t, e) {
    return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
  },
  r = function (t, e) {
    return e ? {
      clientX: (t.clientX + e.clientX) / 2,
      clientY: (t.clientY + e.clientY) / 2
    } : t;
  };
let h = /*#__PURE__*/function () {
  function h(t) {
    var _this = this;
    let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$start = _ref.start,
      e = _ref$start === void 0 ? function () {
        return !0;
      } : _ref$start,
      _ref$move = _ref.move,
      i = _ref$move === void 0 ? function () {} : _ref$move,
      _ref$end = _ref.end,
      s = _ref$end === void 0 ? function () {} : _ref$end;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, h);
    this._element = t, this.startPointers = [], this.currentPointers = [], this._pointerStart = function (t) {
      if (t.buttons > 0 && 0 !== t.button) return;
      const e = new n(t);
      _this.currentPointers.some(function (t) {
        return t.id === e.id;
      }) || _this._triggerPointerStart(e, t) && (window.addEventListener("mousemove", _this._move), window.addEventListener("mouseup", _this._pointerEnd));
    }, this._touchStart = function (t) {
      for (var _i = 0, _Array$from = Array.from(t.changedTouches || []); _i < _Array$from.length; _i++) {
        const e = _Array$from[_i];
        _this._triggerPointerStart(new n(e), t);
      }
    }, this._move = function (t) {
      const e = _this.currentPointers.slice(),
        i = function (t) {
          return "changedTouches" in t;
        }(t) ? Array.from(t.changedTouches).map(function (t) {
          return new n(t);
        }) : [new n(t)];
      var _iterator = _createForOfIteratorHelper(i),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const t = _step.value;
          const e = _this.currentPointers.findIndex(function (e) {
            return e.id === t.id;
          });
          e < 0 || (_this.currentPointers[e] = t);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      _this._moveCallback(e, _this.currentPointers.slice(), t);
    }, this._triggerPointerEnd = function (t, e) {
      const i = _this.currentPointers.findIndex(function (e) {
        return e.id === t.id;
      });
      return !(i < 0) && (_this.currentPointers.splice(i, 1), _this.startPointers.splice(i, 1), _this._endCallback(t, e), !0);
    }, this._pointerEnd = function (t) {
      t.buttons > 0 && 0 !== t.button || _this._triggerPointerEnd(new n(t), t) && (window.removeEventListener("mousemove", _this._move, {
        passive: !1
      }), window.removeEventListener("mouseup", _this._pointerEnd, {
        passive: !1
      }));
    }, this._touchEnd = function (t) {
      for (var _i2 = 0, _Array$from2 = Array.from(t.changedTouches || []); _i2 < _Array$from2.length; _i2++) {
        const e = _Array$from2[_i2];
        _this._triggerPointerEnd(new n(e), t);
      }
    }, this._startCallback = e, this._moveCallback = i, this._endCallback = s, this._element.addEventListener("mousedown", this._pointerStart, {
      passive: !1
    }), this._element.addEventListener("touchstart", this._touchStart, {
      passive: !1
    }), this._element.addEventListener("touchmove", this._move, {
      passive: !1
    }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(h, [{
    key: "stop",
    value: function stop() {
      this._element.removeEventListener("mousedown", this._pointerStart, {
        passive: !1
      }), this._element.removeEventListener("touchstart", this._touchStart, {
        passive: !1
      }), this._element.removeEventListener("touchmove", this._move, {
        passive: !1
      }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
    }
  }, {
    key: "_triggerPointerStart",
    value: function _triggerPointerStart(t, e) {
      return !!this._startCallback(t, e) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
    }
  }]);
  return h;
}();
let l = /*#__PURE__*/function () {
  function l() {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, l);
    this.options = e(!0, {}, t), this.plugins = [], this.events = {};
    for (var _i3 = 0, _arr = ["on", "once"]; _i3 < _arr.length; _i3++) {
      const t = _arr[_i3];
      for (var _i4 = 0, _Object$entries = Object.entries(this.options[t] || {}); _i4 < _Object$entries.length; _i4++) {
        const e = _Object$entries[_i4];
        this[t].apply(this, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(e));
      }
    }
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(l, [{
    key: "option",
    value: function option(t, e) {
      var _s;
      t = String(t);
      let s = (o = t, n = this.options, o.split(".").reduce(function (t, e) {
        return t && t[e];
      }, n));
      var o, n;
      for (var _len2 = arguments.length, i = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        i[_key2 - 2] = arguments[_key2];
      }
      return "function" == typeof s && (s = (_s = s).call.apply(_s, [this, this].concat(i))), void 0 === s ? e : s;
    }
  }, {
    key: "localize",
    value: function localize(t) {
      var _this2 = this;
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return t = (t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, function (t, i, s) {
        let o = "";
        s ? o = _this2.option(`${i[0] + i.toLowerCase().substring(1)}.l10n.${s}`) : i && (o = _this2.option(`l10n.${i}`)), o || (o = t);
        for (let t = 0; t < e.length; t++) o = o.split(e[t][0]).join(e[t][1]);
        return o;
      })).replace(/\{\{(.*)\}\}/, function (t, e) {
        return e;
      });
    }
  }, {
    key: "on",
    value: function on(e, i) {
      var _this3 = this;
      if (t(e)) {
        for (var _i5 = 0, _Object$entries2 = Object.entries(e); _i5 < _Object$entries2.length; _i5++) {
          const t = _Object$entries2[_i5];
          this.on.apply(this, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(t));
        }
        return this;
      }
      return String(e).split(" ").forEach(function (t) {
        const e = _this3.events[t] = _this3.events[t] || [];
        -1 == e.indexOf(i) && e.push(i);
      }), this;
    }
  }, {
    key: "once",
    value: function once(e, i) {
      var _this4 = this;
      if (t(e)) {
        for (var _i6 = 0, _Object$entries3 = Object.entries(e); _i6 < _Object$entries3.length; _i6++) {
          const t = _Object$entries3[_i6];
          this.once.apply(this, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(t));
        }
        return this;
      }
      return String(e).split(" ").forEach(function (t) {
        const e = function () {
          for (var _len3 = arguments.length, s = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            s[_key3] = arguments[_key3];
          }
          _this4.off(t, e), i.call.apply(i, [_this4, _this4].concat(s));
        };
        e._ = i, _this4.on(t, e);
      }), this;
    }
  }, {
    key: "off",
    value: function off(e, i) {
      var _this5 = this;
      if (!t(e)) return e.split(" ").forEach(function (t) {
        const e = _this5.events[t];
        if (!e || !e.length) return _this5;
        let s = -1;
        for (let t = 0, o = e.length; t < o; t++) {
          const o = e[t];
          if (o && (o === i || o._ === i)) {
            s = t;
            break;
          }
        }
        -1 != s && e.splice(s, 1);
      }), this;
      for (var _i7 = 0, _Object$entries4 = Object.entries(e); _i7 < _Object$entries4.length; _i7++) {
        const t = _Object$entries4[_i7];
        this.off.apply(this, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(t));
      }
    }
  }, {
    key: "trigger",
    value: function trigger(t) {
      for (var _len4 = arguments.length, e = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }
      var _iterator2 = _createForOfIteratorHelper(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this.events[t] || []).slice()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          const i = _step2.value;
          if (i && !1 === i.call.apply(i, [this, this].concat(e))) return !1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this.events["*"] || []).slice()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          const i = _step3.value;
          if (i && !1 === i.call.apply(i, [this, t, this].concat(e))) return !1;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return !0;
    }
  }, {
    key: "attachPlugins",
    value: function attachPlugins(t) {
      const i = {};
      for (var _i8 = 0, _Object$entries5 = Object.entries(t || {}); _i8 < _Object$entries5.length; _i8++) {
        const _ref2 = _Object$entries5[_i8];
        var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_ref2, 2);
        const s = _ref3[0];
        const o = _ref3[1];
        !1 === this.options[s] || this.plugins[s] || (this.options[s] = e({}, o.defaults || {}, this.options[s]), i[s] = new o(this));
      }
      for (var _i9 = 0, _Object$entries6 = Object.entries(i); _i9 < _Object$entries6.length; _i9++) {
        const _ref4 = _Object$entries6[_i9];
        var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_ref4, 2);
        const t = _ref5[0];
        const e = _ref5[1];
        e.attach(this);
      }
      return this.plugins = Object.assign({}, this.plugins, i), this;
    }
  }, {
    key: "detachPlugins",
    value: function detachPlugins() {
      for (const t in this.plugins) {
        let e;
        (e = this.plugins[t]) && "function" == typeof e.detach && e.detach(this);
      }
      return this.plugins = {}, this;
    }
  }]);
  return l;
}();
const c = {
  touch: !0,
  zoom: !0,
  pinchToZoom: !0,
  panOnlyZoomed: !1,
  lockAxis: !1,
  friction: .64,
  decelFriction: .88,
  zoomFriction: .74,
  bounceForce: .2,
  baseScale: 1,
  minScale: 1,
  maxScale: 2,
  step: .5,
  textSelection: !1,
  click: "toggleZoom",
  wheel: "zoom",
  wheelFactor: 42,
  wheelLimit: 5,
  draggableClass: "is-draggable",
  draggingClass: "is-dragging",
  ratio: 1
};
let d = /*#__PURE__*/function (_l) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(d, _l);
  var _super = _createSuper(d);
  function d(t) {
    var _this6;
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, d);
    _this6 = _super.call(this, e(!0, {}, c, i)), _this6.state = "init", _this6.$container = t;
    for (var _i10 = 0, _arr2 = ["onLoad", "onWheel", "onClick"]; _i10 < _arr2.length; _i10++) {
      const t = _arr2[_i10];
      _this6[t] = _this6[t].bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this6));
    }
    _this6.initLayout(), _this6.resetValues(), _this6.attachPlugins(d.Plugins), _this6.trigger("init"), _this6.updateMetrics(), _this6.attachEvents(), _this6.trigger("ready"), !1 === _this6.option("centerOnStart") ? _this6.state = "ready" : _this6.panTo({
      friction: 0
    }), t.__Panzoom = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this6);
    return _this6;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(d, [{
    key: "initLayout",
    value: function initLayout() {
      var _i11;
      const t = this.$container;
      if (!(t instanceof HTMLElement)) throw new Error("Panzoom: Container not found");
      const e = this.option("content") || t.querySelector(".panzoom__content");
      if (!e) throw new Error("Panzoom: Content not found");
      this.$content = e;
      let i = this.option("viewport") || t.querySelector(".panzoom__viewport");
      i || !1 === this.option("wrapInner") || (i = document.createElement("div"), i.classList.add("panzoom__viewport"), (_i11 = i).append.apply(_i11, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(t.childNodes)), t.appendChild(i)), this.$viewport = i || e.parentNode;
    }
  }, {
    key: "resetValues",
    value: function resetValues() {
      this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = {
        width: 0,
        height: 0
      }, this.viewport = {
        width: 0,
        height: 0
      }, this.content = {
        origWidth: 0,
        origHeight: 0,
        width: 0,
        height: 0,
        x: this.option("x", 0),
        y: this.option("y", 0),
        scale: this.option("baseScale")
      }, this.transform = {
        x: 0,
        y: 0,
        scale: 1
      }, this.resetDragPosition();
    }
  }, {
    key: "onLoad",
    value: function onLoad(t) {
      this.updateMetrics(), this.panTo({
        scale: this.option("baseScale"),
        friction: 0
      }), this.trigger("load", t);
    }
  }, {
    key: "onClick",
    value: function onClick(t) {
      if (t.defaultPrevented) return;
      if (document.activeElement && document.activeElement.closest("[contenteditable]")) return;
      if (this.option("textSelection") && window.getSelection().toString().length && (!t.target || !t.target.hasAttribute("data-fancybox-close"))) return void t.stopPropagation();
      const e = this.$content.getClientRects()[0];
      if ("ready" !== this.state && (this.dragPosition.midPoint || Math.abs(e.top - this.dragStart.rect.top) > 1 || Math.abs(e.left - this.dragStart.rect.left) > 1)) return t.preventDefault(), void t.stopPropagation();
      !1 !== this.trigger("click", t) && this.option("zoom") && "toggleZoom" === this.option("click") && (t.preventDefault(), t.stopPropagation(), this.zoomWithClick(t));
    }
  }, {
    key: "onWheel",
    value: function onWheel(t) {
      !1 !== this.trigger("wheel", t) && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t);
    }
  }, {
    key: "zoomWithWheel",
    value: function zoomWithWheel(t) {
      void 0 === this.changedDelta && (this.changedDelta = 0);
      const e = Math.max(-1, Math.min(1, -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)),
        i = this.content.scale;
      let s = i * (100 + e * this.option("wheelFactor")) / 100;
      if (e < 0 && Math.abs(i - this.option("minScale")) < .01 || e > 0 && Math.abs(i - this.option("maxScale")) < .01 ? (this.changedDelta += Math.abs(e), s = i) : (this.changedDelta = 0, s = Math.max(Math.min(s, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit")) return;
      if (t.preventDefault(), s === i) return;
      const o = this.$content.getBoundingClientRect(),
        n = t.clientX - o.left,
        a = t.clientY - o.top;
      this.zoomTo(s, {
        x: n,
        y: a
      });
    }
  }, {
    key: "zoomWithClick",
    value: function zoomWithClick(t) {
      const e = this.$content.getClientRects()[0],
        i = t.clientX - e.left,
        s = t.clientY - e.top;
      this.toggleZoom({
        x: i,
        y: s
      });
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this7 = this;
      this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.$container.addEventListener("click", this.onClick, {
        passive: !1
      }), this.initObserver();
      const t = new h(this.$container, {
        start: function (e, i) {
          if (!_this7.option("touch")) return !1;
          if (_this7.velocity.scale < 0) return !1;
          const o = i.composedPath()[0];
          if (!t.currentPointers.length) {
            if (-1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o.nodeName)) return !1;
            if (_this7.option("textSelection") && function (t, e, i) {
              const s = t.childNodes,
                o = document.createRange();
              for (let t = 0; t < s.length; t++) {
                const n = s[t];
                if (n.nodeType !== Node.TEXT_NODE) continue;
                o.selectNodeContents(n);
                const a = o.getBoundingClientRect();
                if (e >= a.left && i >= a.top && e <= a.right && i <= a.bottom) return n;
              }
              return !1;
            }(o, e.clientX, e.clientY)) return !1;
          }
          return !s(o) && !1 !== _this7.trigger("touchStart", i) && ("mousedown" === i.type && i.preventDefault(), _this7.state = "pointerdown", _this7.resetDragPosition(), _this7.dragPosition.midPoint = null, _this7.dragPosition.time = Date.now(), !0);
        },
        move: function (e, i, s) {
          if ("pointerdown" !== _this7.state) return;
          if (!1 === _this7.trigger("touchMove", s)) return void s.preventDefault();
          if (i.length < 2 && !0 === _this7.option("panOnlyZoomed") && _this7.content.width <= _this7.viewport.width && _this7.content.height <= _this7.viewport.height && _this7.transform.scale <= _this7.option("baseScale")) return;
          if (i.length > 1 && (!_this7.option("zoom") || !1 === _this7.option("pinchToZoom"))) return;
          const o = r(e[0], e[1]),
            n = r(i[0], i[1]),
            h = n.clientX - o.clientX,
            l = n.clientY - o.clientY,
            c = a(e[0], e[1]),
            _d = a(i[0], i[1]),
            u = c && _d ? _d / c : 1;
          _this7.dragOffset.x += h, _this7.dragOffset.y += l, _this7.dragOffset.scale *= u, _this7.dragOffset.time = Date.now() - _this7.dragPosition.time;
          const f = 1 === _this7.dragStart.scale && _this7.option("lockAxis");
          if (f && !_this7.lockAxis) {
            if (Math.abs(_this7.dragOffset.x) < 6 && Math.abs(_this7.dragOffset.y) < 6) return void s.preventDefault();
            const t = Math.abs(180 * Math.atan2(_this7.dragOffset.y, _this7.dragOffset.x) / Math.PI);
            _this7.lockAxis = t > 45 && t < 135 ? "y" : "x";
          }
          if ("xy" === f || "y" !== _this7.lockAxis) {
            if (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), _this7.lockAxis && (_this7.dragOffset["x" === _this7.lockAxis ? "y" : "x"] = 0), _this7.$container.classList.add(_this7.option("draggingClass")), _this7.transform.scale === _this7.option("baseScale") && "y" === _this7.lockAxis || (_this7.dragPosition.x = _this7.dragStart.x + _this7.dragOffset.x), _this7.transform.scale === _this7.option("baseScale") && "x" === _this7.lockAxis || (_this7.dragPosition.y = _this7.dragStart.y + _this7.dragOffset.y), _this7.dragPosition.scale = _this7.dragStart.scale * _this7.dragOffset.scale, i.length > 1) {
              const e = r(t.startPointers[0], t.startPointers[1]),
                i = e.clientX - _this7.dragStart.rect.x,
                s = e.clientY - _this7.dragStart.rect.y,
                _this7$getZoomDelta = _this7.getZoomDelta(_this7.content.scale * _this7.dragOffset.scale, i, s),
                o = _this7$getZoomDelta.deltaX,
                a = _this7$getZoomDelta.deltaY;
              _this7.dragPosition.x -= o, _this7.dragPosition.y -= a, _this7.dragPosition.midPoint = n;
            } else _this7.setDragResistance();
            _this7.transform = {
              x: _this7.dragPosition.x,
              y: _this7.dragPosition.y,
              scale: _this7.dragPosition.scale
            }, _this7.startAnimation();
          }
        },
        end: function (e, i) {
          if ("pointerdown" !== _this7.state) return;
          if (_this7._dragOffset = _objectSpread({}, _this7.dragOffset), t.currentPointers.length) return void _this7.resetDragPosition();
          if (_this7.state = "decel", _this7.friction = _this7.option("decelFriction"), _this7.recalculateTransform(), _this7.$container.classList.remove(_this7.option("draggingClass")), !1 === _this7.trigger("touchEnd", i)) return;
          if ("decel" !== _this7.state) return;
          const s = _this7.option("minScale");
          if (_this7.transform.scale < s) return void _this7.zoomTo(s, {
            friction: .64
          });
          const o = _this7.option("maxScale");
          if (_this7.transform.scale - o > .01) {
            const t = _this7.dragPosition.midPoint || e,
              i = _this7.$content.getClientRects()[0];
            _this7.zoomTo(o, {
              friction: .64,
              x: t.clientX - i.left,
              y: t.clientY - i.top
            });
          } else ;
        }
      });
      this.pointerTracker = t;
    }
  }, {
    key: "initObserver",
    value: function initObserver() {
      var _this8 = this;
      this.resizeObserver || (this.resizeObserver = new o(function () {
        _this8.updateTimer || (_this8.updateTimer = setTimeout(function () {
          const t = _this8.$container.getBoundingClientRect();
          t.width && t.height ? ((Math.abs(t.width - _this8.container.width) > 1 || Math.abs(t.height - _this8.container.height) > 1) && (_this8.isAnimating() && _this8.endAnimation(!0), _this8.updateMetrics(), _this8.panTo({
            x: _this8.content.x,
            y: _this8.content.y,
            scale: _this8.option("baseScale"),
            friction: 0
          })), _this8.updateTimer = null) : _this8.updateTimer = null;
        }, _this8.updateRate));
      }), this.resizeObserver.observe(this.$container));
    }
  }, {
    key: "resetDragPosition",
    value: function resetDragPosition() {
      this.lockAxis = null, this.friction = this.option("friction"), this.velocity = {
        x: 0,
        y: 0,
        scale: 0
      };
      const _this$content = this.content,
        t = _this$content.x,
        e = _this$content.y,
        i = _this$content.scale;
      this.dragStart = {
        rect: this.$content.getBoundingClientRect(),
        x: t,
        y: e,
        scale: i
      }, this.dragPosition = _objectSpread(_objectSpread({}, this.dragPosition), {}, {
        x: t,
        y: e,
        scale: i
      }), this.dragOffset = {
        x: 0,
        y: 0,
        scale: 1,
        time: 0
      };
    }
  }, {
    key: "updateMetrics",
    value: function updateMetrics(t) {
      !0 !== t && this.trigger("beforeUpdate");
      const e = this.$container,
        s = this.$content,
        o = this.$viewport,
        n = s instanceof HTMLImageElement,
        a = this.option("zoom"),
        r = this.option("resizeParent", a);
      let h = this.option("width"),
        l = this.option("height"),
        c = h || (_d2 = s, Math.max(parseFloat(_d2.naturalWidth || 0), parseFloat(_d2.width && _d2.width.baseVal && _d2.width.baseVal.value || 0), parseFloat(_d2.offsetWidth || 0), parseFloat(_d2.scrollWidth || 0)));
      var _d2;
      let u = l || function (t) {
        return Math.max(parseFloat(t.naturalHeight || 0), parseFloat(t.height && t.height.baseVal && t.height.baseVal.value || 0), parseFloat(t.offsetHeight || 0), parseFloat(t.scrollHeight || 0));
      }(s);
      Object.assign(s.style, {
        width: h ? `${h}px` : "",
        height: l ? `${l}px` : "",
        maxWidth: "",
        maxHeight: ""
      }), r && Object.assign(o.style, {
        width: "",
        height: ""
      });
      const f = this.option("ratio");
      c = i(c * f), u = i(u * f), h = c, l = u;
      const g = s.getBoundingClientRect(),
        p = o.getBoundingClientRect(),
        m = o == e ? p : e.getBoundingClientRect();
      let y = Math.max(o.offsetWidth, i(p.width)),
        v = Math.max(o.offsetHeight, i(p.height)),
        b = window.getComputedStyle(o);
      if (y -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight), v -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom), this.viewport.width = y, this.viewport.height = v, a) {
        if (Math.abs(c - g.width) > .1 || Math.abs(u - g.height) > .1) {
          const t = function (t, e, i, s) {
            const o = Math.min(i / t || 0, s / e);
            return {
              width: t * o || 0,
              height: e * o || 0
            };
          }(c, u, Math.min(c, g.width), Math.min(u, g.height));
          h = i(t.width), l = i(t.height);
        }
        Object.assign(s.style, {
          width: `${h}px`,
          height: `${l}px`,
          transform: ""
        });
      }
      if (r && (Object.assign(o.style, {
        width: `${h}px`,
        height: `${l}px`
      }), this.viewport = _objectSpread(_objectSpread({}, this.viewport), {}, {
        width: h,
        height: l
      })), n && a && "function" != typeof this.options.maxScale) {
        const t = this.option("maxScale");
        this.options.maxScale = function () {
          return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t;
        };
      }
      this.content = _objectSpread(_objectSpread({}, this.content), {}, {
        origWidth: c,
        origHeight: u,
        fitWidth: h,
        fitHeight: l,
        width: h,
        height: l,
        scale: 1,
        isZoomable: a
      }), this.container = {
        width: m.width,
        height: m.height
      }, !0 !== t && this.trigger("afterUpdate");
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(t) {
      this.zoomTo(this.content.scale + (t || this.option("step")));
    }
  }, {
    key: "zoomOut",
    value: function zoomOut(t) {
      this.zoomTo(this.content.scale - (t || this.option("step")));
    }
  }, {
    key: "toggleZoom",
    value: function toggleZoom() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const e = this.option("maxScale"),
        i = this.option("baseScale"),
        s = this.content.scale > i + .5 * (e - i) ? i : e;
      this.zoomTo(s, t);
    }
  }, {
    key: "zoomTo",
    value: function zoomTo() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.option("baseScale");
      let _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref6$x = _ref6.x,
        e = _ref6$x === void 0 ? null : _ref6$x,
        _ref6$y = _ref6.y,
        s = _ref6$y === void 0 ? null : _ref6$y;
      t = Math.max(Math.min(t, this.option("maxScale")), this.option("minScale"));
      const o = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
      null === e && (e = this.content.width * o * .5), null === s && (s = this.content.height * o * .5);
      const _this$getZoomDelta = this.getZoomDelta(t, e, s),
        n = _this$getZoomDelta.deltaX,
        a = _this$getZoomDelta.deltaY;
      e = this.content.x - n, s = this.content.y - a, this.panTo({
        x: e,
        y: s,
        scale: t,
        friction: this.option("zoomFriction")
      });
    }
  }, {
    key: "getZoomDelta",
    value: function getZoomDelta(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      const s = this.content.fitWidth * this.content.scale,
        o = this.content.fitHeight * this.content.scale,
        n = e > 0 && s ? e / s : 0,
        a = i > 0 && o ? i / o : 0;
      return {
        deltaX: (this.content.fitWidth * t - s) * n,
        deltaY: (this.content.fitHeight * t - o) * a
      };
    }
  }, {
    key: "panTo",
    value: function panTo() {
      let _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref7$x = _ref7.x,
        t = _ref7$x === void 0 ? this.content.x : _ref7$x,
        _ref7$y = _ref7.y,
        e = _ref7$y === void 0 ? this.content.y : _ref7$y,
        i = _ref7.scale,
        _ref7$friction = _ref7.friction,
        s = _ref7$friction === void 0 ? this.option("friction") : _ref7$friction,
        _ref7$ignoreBounds = _ref7.ignoreBounds,
        o = _ref7$ignoreBounds === void 0 ? !1 : _ref7$ignoreBounds;
      if (i = i || this.content.scale || 1, !o) {
        const _this$getBounds = this.getBounds(i),
          s = _this$getBounds.boundX,
          o = _this$getBounds.boundY;
        s && (t = Math.max(Math.min(t, s.to), s.from)), o && (e = Math.max(Math.min(e, o.to), o.from));
      }
      this.friction = s, this.transform = _objectSpread(_objectSpread({}, this.transform), {}, {
        x: t,
        y: e,
        scale: i
      }), s ? (this.state = "panning", this.velocity = {
        x: (1 / this.friction - 1) * (t - this.content.x),
        y: (1 / this.friction - 1) * (e - this.content.y),
        scale: (1 / this.friction - 1) * (i - this.content.scale)
      }, this.startAnimation()) : this.endAnimation();
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this9 = this;
      this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(function () {
        return _this9.animate();
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this10 = this;
      if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating()) this.setTransform();else if ("pointerdown" !== this.state) return void this.endAnimation();
      this.rAF = requestAnimationFrame(function () {
        return _this10.animate();
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds(t) {
      let e = this.boundX,
        s = this.boundY;
      if (void 0 !== e && void 0 !== s) return {
        boundX: e,
        boundY: s
      };
      e = {
        from: 0,
        to: 0
      }, s = {
        from: 0,
        to: 0
      }, t = t || this.transform.scale;
      const o = this.content.fitWidth * t,
        n = this.content.fitHeight * t,
        a = this.viewport.width,
        r = this.viewport.height;
      if (o < a) {
        const t = i(.5 * (a - o));
        e.from = t, e.to = t;
      } else e.from = i(a - o);
      if (n < r) {
        const t = .5 * (r - n);
        s.from = t, s.to = t;
      } else s.from = i(r - n);
      return {
        boundX: e,
        boundY: s
      };
    }
  }, {
    key: "setEdgeForce",
    value: function setEdgeForce() {
      if ("decel" !== this.state) return;
      const t = this.option("bounceForce"),
        _this$getBounds2 = this.getBounds(Math.max(this.transform.scale, this.content.scale)),
        e = _this$getBounds2.boundX,
        i = _this$getBounds2.boundY;
      let s, o, n, a;
      if (e && (s = this.content.x < e.from, o = this.content.x > e.to), i && (n = this.content.y < i.from, a = this.content.y > i.to), s || o) {
        let i = ((s ? e.from : e.to) - this.content.x) * t;
        const o = this.content.x + (this.velocity.x + i) / this.friction;
        o >= e.from && o <= e.to && (i += this.velocity.x), this.velocity.x = i, this.recalculateTransform();
      }
      if (n || a) {
        let e = ((n ? i.from : i.to) - this.content.y) * t;
        const s = this.content.y + (e + this.velocity.y) / this.friction;
        s >= i.from && s <= i.to && (e += this.velocity.y), this.velocity.y = e, this.recalculateTransform();
      }
    }
  }, {
    key: "setDragResistance",
    value: function setDragResistance() {
      if ("pointerdown" !== this.state) return;
      const _this$getBounds3 = this.getBounds(this.dragPosition.scale),
        t = _this$getBounds3.boundX,
        e = _this$getBounds3.boundY;
      let i, s, o, n;
      if (t && (i = this.dragPosition.x < t.from, s = this.dragPosition.x > t.to), e && (o = this.dragPosition.y < e.from, n = this.dragPosition.y > e.to), (i || s) && (!i || !s)) {
        const e = i ? t.from : t.to,
          s = e - this.dragPosition.x;
        this.dragPosition.x = e - .3 * s;
      }
      if ((o || n) && (!o || !n)) {
        const t = o ? e.from : e.to,
          i = t - this.dragPosition.y;
        this.dragPosition.y = t - .3 * i;
      }
    }
  }, {
    key: "setDragForce",
    value: function setDragForce() {
      "pointerdown" === this.state && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
    }
  }, {
    key: "recalculateTransform",
    value: function recalculateTransform() {
      this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
    }
  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return !(!this.friction || !(Math.abs(this.velocity.x) > .05 || Math.abs(this.velocity.y) > .05 || Math.abs(this.velocity.scale) > .05));
    }
  }, {
    key: "setTransform",
    value: function setTransform(t) {
      let e, s, o;
      if (t ? (e = i(this.transform.x), s = i(this.transform.y), o = this.transform.scale, this.content = _objectSpread(_objectSpread({}, this.content), {}, {
        x: e,
        y: s,
        scale: o
      })) : (e = i(this.content.x), s = i(this.content.y), o = this.content.scale / (this.content.width / this.content.fitWidth), this.content = _objectSpread(_objectSpread({}, this.content), {}, {
        x: e,
        y: s
      })), this.trigger("beforeTransform"), e = i(this.content.x), s = i(this.content.y), t && this.option("zoom")) {
        let t, n;
        t = i(this.content.fitWidth * o), n = i(this.content.fitHeight * o), this.content.width = t, this.content.height = n, this.transform = _objectSpread(_objectSpread({}, this.transform), {}, {
          width: t,
          height: n,
          scale: o
        }), Object.assign(this.$content.style, {
          width: `${t}px`,
          height: `${n}px`,
          maxWidth: "none",
          maxHeight: "none",
          transform: `translate3d(${e}px, ${s}px, 0) scale(1)`
        });
      } else this.$content.style.transform = `translate3d(${e}px, ${s}px, 0) scale(${o})`;
      this.trigger("afterTransform");
    }
  }, {
    key: "endAnimation",
    value: function endAnimation(t) {
      cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = {
        x: 0,
        y: 0,
        scale: 0
      }, this.setTransform(!0), this.state = "ready", this.handleCursor(), !0 !== t && this.trigger("endAnimation");
    }
  }, {
    key: "handleCursor",
    value: function handleCursor() {
      const t = this.option("draggableClass");
      t && this.option("touch") && (1 == this.option("panOnlyZoomed") && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t) : this.$container.classList.add(t));
    }
  }, {
    key: "detachEvents",
    value: function detachEvents() {
      this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.$container.removeEventListener("click", this.onClick, {
        passive: !1
      }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      "destroy" !== this.state && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition());
    }
  }]);
  return d;
}(l);
d.version = "4.0.31", d.Plugins = {};
const u = function (t, e) {
  let i = 0;
  return function () {
    const o = new Date().getTime();
    if (!(o - i < e)) return i = o, t.apply(void 0, arguments);
  };
};
let f = /*#__PURE__*/function () {
  function f(t) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, f);
    this.$container = null, this.$prev = null, this.$next = null, this.carousel = t, this.onRefresh = this.onRefresh.bind(this);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(f, [{
    key: "option",
    value: function option(t) {
      return this.carousel.option(`Navigation.${t}`);
    }
  }, {
    key: "createButton",
    value: function createButton(t) {
      var _e$classList,
        _this11 = this;
      const e = document.createElement("button");
      e.setAttribute("title", this.carousel.localize(`{{${t.toUpperCase()}}}`));
      const i = this.option("classNames.button") + " " + this.option(`classNames.${t}`);
      return (_e$classList = e.classList).add.apply(_e$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(i.split(" "))), e.setAttribute("tabindex", "0"), e.innerHTML = this.carousel.localize(this.option(`${t}Tpl`)), e.addEventListener("click", function (e) {
        e.preventDefault(), e.stopPropagation(), _this11.carousel["slide" + ("next" === t ? "Next" : "Prev")]();
      }), e;
    }
  }, {
    key: "build",
    value: function build() {
      var _this$$container$clas;
      this.$container || (this.$container = document.createElement("div"), (_this$$container$clas = this.$container.classList).add.apply(_this$$container$clas, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this.option("classNames.main").split(" "))), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
    }
  }, {
    key: "onRefresh",
    value: function onRefresh() {
      const t = this.carousel.pages.length;
      t <= 1 || t > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t - 1 && this.$next.setAttribute("disabled", "")));
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null;
    }
  }, {
    key: "attach",
    value: function attach() {
      this.carousel.on("refresh change", this.onRefresh);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.carousel.off("refresh change", this.onRefresh), this.cleanup();
    }
  }]);
  return f;
}();
f.defaults = {
  prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
  nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
  classNames: {
    main: "carousel__nav",
    button: "carousel__button",
    next: "is-next",
    prev: "is-prev"
  }
};
let g = /*#__PURE__*/function () {
  function g(t) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, g);
    this.carousel = t, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(g, [{
    key: "addAsTargetFor",
    value: function addAsTargetFor(t) {
      this.target = this.carousel, this.nav = t, this.attachEvents();
    }
  }, {
    key: "addAsNavFor",
    value: function addAsNavFor(t) {
      this.target = t, this.nav = this.carousel, this.attachEvents();
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
    }
  }, {
    key: "onNavReady",
    value: function onNavReady() {
      this.onTargetChange(!0);
    }
  }, {
    key: "onNavClick",
    value: function onNavClick(t, e, i) {
      const s = i.target.closest(".carousel__slide");
      if (!s) return;
      i.stopPropagation();
      const o = parseInt(s.dataset.index, 10),
        n = this.target.findPageForSlide(o);
      this.target.page !== n && this.target.slideTo(n, {
        friction: this.friction
      }), this.markSelectedSlide(o);
    }
  }, {
    key: "onNavCreateSlide",
    value: function onNavCreateSlide(t, e) {
      e.index === this.selectedIndex && this.markSelectedSlide(e.index);
    }
  }, {
    key: "onTargetChange",
    value: function onTargetChange() {
      const t = this.target.pages[this.target.page].indexes[0],
        e = this.nav.findPageForSlide(t);
      this.nav.slideTo(e), this.markSelectedSlide(t);
    }
  }, {
    key: "markSelectedSlide",
    value: function markSelectedSlide(t) {
      this.selectedIndex = t, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this.nav.slides).filter(function (t) {
        return t.$el && t.$el.classList.remove("is-nav-selected");
      });
      const e = this.nav.slides[t];
      e && e.$el && e.$el.classList.add("is-nav-selected");
    }
  }, {
    key: "attach",
    value: function attach(t) {
      const e = t.options.Sync;
      (e.target || e.nav) && (e.target ? this.addAsNavFor(e.target) : e.nav && this.addAsTargetFor(e.nav), this.friction = e.friction);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange));
    }
  }]);
  return g;
}();
g.defaults = {
  friction: .92
};
const p = {
  Navigation: f,
  Dots: /*#__PURE__*/function () {
    function Dots(t) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Dots);
      this.carousel = t, this.$list = null, this.events = {
        change: this.onChange.bind(this),
        refresh: this.onRefresh.bind(this)
      };
    }
    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Dots, [{
      key: "buildList",
      value: function buildList() {
        var _this12 = this;
        if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount")) return;
        const t = document.createElement("ol");
        return t.classList.add("carousel__dots"), t.addEventListener("click", function (t) {
          if (!("page" in t.target.dataset)) return;
          t.preventDefault(), t.stopPropagation();
          const e = parseInt(t.target.dataset.page, 10),
            i = _this12.carousel;
          e !== i.page && (i.pages.length < 3 && i.option("infinite") ? i[0 == e ? "slidePrev" : "slideNext"]() : i.slideTo(e));
        }), this.$list = t, this.carousel.$container.appendChild(t), this.carousel.$container.classList.add("has-dots"), t;
      }
    }, {
      key: "removeList",
      value: function removeList() {
        this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
      }
    }, {
      key: "rebuildDots",
      value: function rebuildDots() {
        let t = this.$list;
        const e = !!t,
          i = this.carousel.pages.length;
        if (i < 2) return void (e && this.removeList());
        e || (t = this.buildList());
        const s = this.$list.children.length;
        if (s > i) for (let t = i; t < s; t++) this.$list.removeChild(this.$list.lastChild);else {
          for (let t = s; t < i; t++) {
            const e = document.createElement("li");
            e.classList.add("carousel__dot"), e.dataset.page = t, e.setAttribute("role", "button"), e.setAttribute("tabindex", "0"), e.setAttribute("title", this.carousel.localize("{{GOTO}}", [["%d", t + 1]])), e.addEventListener("keydown", function (t) {
              const i = t.code;
              let s;
              "Enter" === i || "NumpadEnter" === i ? s = e : "ArrowRight" === i ? s = e.nextSibling : "ArrowLeft" === i && (s = e.previousSibling), s && s.click();
            }), this.$list.appendChild(e);
          }
          this.setActiveDot();
        }
      }
    }, {
      key: "setActiveDot",
      value: function setActiveDot() {
        if (!this.$list) return;
        this.$list.childNodes.forEach(function (t) {
          t.classList.remove("is-selected");
        });
        const t = this.$list.childNodes[this.carousel.page];
        t && t.classList.add("is-selected");
      }
    }, {
      key: "onChange",
      value: function onChange() {
        this.setActiveDot();
      }
    }, {
      key: "onRefresh",
      value: function onRefresh() {
        this.rebuildDots();
      }
    }, {
      key: "attach",
      value: function attach() {
        this.carousel.on(this.events);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.removeList(), this.carousel.off(this.events), this.carousel = null;
      }
    }]);
    return Dots;
  }(),
  Sync: g
};
const m = {
  slides: [],
  preload: 0,
  slidesPerPage: "auto",
  initialPage: null,
  initialSlide: null,
  friction: .92,
  center: !0,
  infinite: !0,
  fill: !0,
  dragFree: !1,
  prefix: "",
  classNames: {
    viewport: "carousel__viewport",
    track: "carousel__track",
    slide: "carousel__slide",
    slideSelected: "is-selected"
  },
  l10n: {
    NEXT: "Next slide",
    PREV: "Previous slide",
    GOTO: "Go to slide #%d"
  }
};
let y = /*#__PURE__*/function (_l2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(y, _l2);
  var _super2 = _createSuper(y);
  function y(t) {
    var _this13;
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, y);
    if (_this13 = _super2.call(this, i = e(!0, {}, m, i)), _this13.state = "init", _this13.$container = t, !(_this13.$container instanceof HTMLElement)) throw new Error("No root element provided");
    _this13.slideNext = u(_this13.slideNext.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this13)), 250), _this13.slidePrev = u(_this13.slidePrev.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this13)), 250), _this13.init(), t.__Carousel = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this13);
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this13);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(y, [{
    key: "init",
    value: function init() {
      this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
    }
  }, {
    key: "initLayout",
    value: function initLayout() {
      var _this$$viewport$class, _this$$viewport, _this$$track$classLis, _this$$track;
      const t = this.option("prefix"),
        e = this.option("classNames");
      this.$viewport = this.option("viewport") || this.$container.querySelector(`.${t}${e.viewport}`), this.$viewport || (this.$viewport = document.createElement("div"), (_this$$viewport$class = this.$viewport.classList).add.apply(_this$$viewport$class, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()((t + e.viewport).split(" "))), (_this$$viewport = this.$viewport).append.apply(_this$$viewport, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this.$container.childNodes)), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector(`.${t}${e.track}`), this.$track || (this.$track = document.createElement("div"), (_this$$track$classLis = this.$track.classList).add.apply(_this$$track$classLis, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()((t + e.track).split(" "))), (_this$$track = this.$track).append.apply(_this$$track, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this.$viewport.childNodes)), this.$viewport.appendChild(this.$track));
    }
  }, {
    key: "initSlides",
    value: function initSlides() {
      var _this14 = this;
      this.slides = [];
      this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach(function (t) {
        const e = {
          $el: t,
          isDom: !0
        };
        _this14.slides.push(e), _this14.trigger("createSlide", e, _this14.slides.length);
      }), Array.isArray(this.options.slides) && (this.slides = e(!0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this.slides), this.options.slides));
    }
  }, {
    key: "updateMetrics",
    value: function updateMetrics() {
      var _this15 = this;
      let t,
        e = 0,
        s = [];
      this.slides.forEach(function (i, o) {
        const n = i.$el,
          a = i.isDom || !t ? _this15.getSlideMetrics(n) : t;
        i.index = o, i.width = a, i.left = e, t = a, e += a, s.push(o);
      });
      let o = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)),
        n = getComputedStyle(this.$track);
      o -= parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), this.contentWidth = e, this.viewportWidth = o;
      const a = [],
        r = this.option("slidesPerPage");
      if (Number.isInteger(r) && e > o) for (let t = 0; t < this.slides.length; t += r) a.push({
        indexes: s.slice(t, t + r),
        slides: this.slides.slice(t, t + r)
      });else {
        let t = 0,
          e = 0;
        for (let i = 0; i < this.slides.length; i += 1) {
          let s = this.slides[i];
          (!a.length || e + s.width > o) && (a.push({
            indexes: [],
            slides: []
          }), t = a.length - 1, e = 0), e += s.width, a[t].indexes.push(i), a[t].slides.push(s);
        }
      }
      const h = this.option("center"),
        l = this.option("fill");
      a.forEach(function (t, i) {
        t.index = i, t.width = t.slides.reduce(function (t, e) {
          return t + e.width;
        }, 0), t.left = t.slides[0].left, h && (t.left += .5 * (o - t.width) * -1), l && !_this15.option("infiniteX", _this15.option("infinite")) && e > o && (t.left = Math.max(t.left, 0), t.left = Math.min(t.left, e - o));
      });
      const c = [];
      let d;
      a.forEach(function (t) {
        const e = _objectSpread({}, t);
        d && e.left === d.left ? (d.width += e.width, d.slides = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(d.slides), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(e.slides)), d.indexes = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(d.indexes), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(e.indexes))) : (e.index = c.length, d = e, c.push(e));
      }), this.pages = c;
      let u = this.page;
      if (null === u) {
        const t = this.option("initialSlide");
        u = null !== t ? this.findPageForSlide(t) : parseInt(this.option("initialPage", 0), 10) || 0, c[u] || (u = c.length && u > c.length ? c[c.length - 1].index : 0), this.page = u, this.pageIndex = u;
      }
      this.updatePanzoom(), this.trigger("refresh");
    }
  }, {
    key: "getSlideMetrics",
    value: function getSlideMetrics(t) {
      if (!t) {
        var _t$classList, _t$classList2;
        const e = this.slides[0];
        (t = document.createElement("div")).dataset.isTestEl = 1, t.style.visibility = "hidden", (_t$classList = t.classList).add.apply(_t$classList, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()((this.option("prefix") + this.option("classNames.slide")).split(" "))), e.customClass && (_t$classList2 = t.classList).add.apply(_t$classList2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(e.customClass.split(" "))), this.$track.prepend(t);
      }
      let e = Math.max(t.offsetWidth, i(t.getBoundingClientRect().width));
      const s = t.currentStyle || window.getComputedStyle(t);
      return e = e + (parseFloat(s.marginLeft) || 0) + (parseFloat(s.marginRight) || 0), t.dataset.isTestEl && t.remove(), e;
    }
  }, {
    key: "findPageForSlide",
    value: function findPageForSlide(t) {
      t = parseInt(t, 10) || 0;
      const e = this.pages.find(function (e) {
        return e.indexes.indexOf(t) > -1;
      });
      return e ? e.index : null;
    }
  }, {
    key: "slideNext",
    value: function slideNext() {
      this.slideTo(this.pageIndex + 1);
    }
  }, {
    key: "slidePrev",
    value: function slidePrev() {
      this.slideTo(this.pageIndex - 1);
    }
  }, {
    key: "slideTo",
    value: function slideTo(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const _e$x = e.x,
        i = _e$x === void 0 ? -1 * this.setPage(t, !0) : _e$x,
        _e$y = e.y,
        s = _e$y === void 0 ? 0 : _e$y,
        _e$friction = e.friction,
        o = _e$friction === void 0 ? this.option("friction") : _e$friction;
      this.Panzoom.content.x === i && !this.Panzoom.velocity.x && o || (this.Panzoom.panTo({
        x: i,
        y: s,
        friction: o,
        ignoreBounds: !0
      }), "ready" === this.state && "ready" === this.Panzoom.state && this.trigger("settle"));
    }
  }, {
    key: "initPanzoom",
    value: function initPanzoom() {
      var _this16 = this;
      this.Panzoom && this.Panzoom.destroy();
      const t = e(!0, {}, {
        content: this.$track,
        wrapInner: !1,
        resizeParent: !1,
        zoom: !1,
        click: !1,
        lockAxis: "x",
        x: this.pages.length ? -1 * this.pages[this.page].left : 0,
        centerOnStart: !1,
        textSelection: function () {
          return _this16.option("textSelection", !1);
        },
        panOnlyZoomed: function () {
          return this.content.width <= this.viewport.width;
        }
      }, this.option("Panzoom"));
      this.Panzoom = new d(this.$container, t), this.Panzoom.on({
        "*": function (t) {
          for (var _len5 = arguments.length, e = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            e[_key5 - 1] = arguments[_key5];
          }
          return _this16.trigger.apply(_this16, [`Panzoom.${t}`].concat(e));
        },
        afterUpdate: function () {
          _this16.updatePage();
        },
        beforeTransform: this.onBeforeTransform.bind(this),
        touchEnd: this.onTouchEnd.bind(this),
        endAnimation: function () {
          _this16.trigger("settle");
        }
      }), this.updateMetrics(), this.manageSlideVisiblity();
    }
  }, {
    key: "updatePanzoom",
    value: function updatePanzoom() {
      this.Panzoom && (this.Panzoom.content = _objectSpread(_objectSpread({}, this.Panzoom.content), {}, {
        fitWidth: this.contentWidth,
        origWidth: this.contentWidth,
        width: this.contentWidth
      }), this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = {
        from: -1 * this.pages[this.pages.length - 1].left,
        to: -1 * this.pages[0].left
      }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = {
        from: 0,
        to: 0
      }, this.Panzoom.handleCursor());
    }
  }, {
    key: "manageSlideVisiblity",
    value: function manageSlideVisiblity() {
      var _this17 = this;
      const t = this.contentWidth,
        e = this.viewportWidth;
      let i = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
      const s = this.option("preload"),
        o = this.option("infiniteX", this.option("infinite")),
        n = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")),
        a = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
      this.slides.forEach(function (r) {
        let h,
          l,
          c = 0;
        h = i - n, l = i + e + a, h -= s * (e + n + a), l += s * (e + n + a);
        const d = r.left + r.width > h && r.left < l;
        h = i + t - n, l = i + t + e + a, h -= s * (e + n + a);
        const u = o && r.left + r.width > h && r.left < l;
        h = i - t - n, l = i - t + e + a, h -= s * (e + n + a);
        const f = o && r.left + r.width > h && r.left < l;
        u || d || f ? (_this17.createSlideEl(r), d && (c = 0), u && (c = -1), f && (c = 1), r.left + r.width > i && r.left <= i + e + a && (c = 0)) : _this17.removeSlideEl(r), r.hasDiff = c;
      });
      let r = 0,
        h = 0;
      this.slides.forEach(function (e, i) {
        let s = 0;
        e.$el ? (i !== r || e.hasDiff ? s = h + e.hasDiff * t : h = 0, e.$el.style.left = Math.abs(s) > .1 ? `${h + e.hasDiff * t}px` : "", r++) : h += e.width;
      }), this.markSelectedSlides();
    }
  }, {
    key: "createSlideEl",
    value: function createSlideEl(t) {
      var _e$classList2, _e$classList3;
      if (!t) return;
      if (t.$el) {
        let e = t.$el.dataset.index;
        if (!e || parseInt(e, 10) !== t.index) {
          let e;
          t.$el.dataset.index = t.index, t.$el.querySelectorAll("[data-lazy-srcset]").forEach(function (t) {
            t.srcset = t.dataset.lazySrcset;
          }), t.$el.querySelectorAll("[data-lazy-src]").forEach(function (t) {
            let e = t.dataset.lazySrc;
            t instanceof HTMLImageElement ? t.src = e : t.style.backgroundImage = `url('${e}')`;
          }), (e = t.$el.dataset.lazySrc) && (t.$el.style.backgroundImage = `url('${e}')`), t.state = "ready";
        }
        return;
      }
      const e = document.createElement("div");
      e.dataset.index = t.index, (_e$classList2 = e.classList).add.apply(_e$classList2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()((this.option("prefix") + this.option("classNames.slide")).split(" "))), t.customClass && (_e$classList3 = e.classList).add.apply(_e$classList3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(t.customClass.split(" "))), t.html && (e.innerHTML = t.html);
      const i = [];
      this.slides.forEach(function (t, e) {
        t.$el && i.push(e);
      });
      const s = t.index;
      let o = null;
      if (i.length) {
        let t = i.reduce(function (t, e) {
          return Math.abs(e - s) < Math.abs(t - s) ? e : t;
        });
        o = this.slides[t];
      }
      return this.$track.insertBefore(e, o && o.$el ? o.index < t.index ? o.$el.nextSibling : o.$el : null), t.$el = e, this.trigger("createSlide", t, s), t;
    }
  }, {
    key: "removeSlideEl",
    value: function removeSlideEl(t) {
      t.$el && !t.isDom && (this.trigger("removeSlide", t), t.$el.remove(), t.$el = null);
    }
  }, {
    key: "markSelectedSlides",
    value: function markSelectedSlides() {
      var _this18 = this;
      const t = this.option("classNames.slideSelected"),
        e = "aria-hidden";
      this.slides.forEach(function (i, s) {
        const o = i.$el;
        if (!o) return;
        const n = _this18.pages[_this18.page];
        n && n.indexes && n.indexes.indexOf(s) > -1 ? (t && !o.classList.contains(t) && (o.classList.add(t), _this18.trigger("selectSlide", i)), o.removeAttribute(e)) : (t && o.classList.contains(t) && (o.classList.remove(t), _this18.trigger("unselectSlide", i)), o.setAttribute(e, !0));
      });
    }
  }, {
    key: "updatePage",
    value: function updatePage() {
      this.updateMetrics(), this.slideTo(this.page, {
        friction: 0
      });
    }
  }, {
    key: "onBeforeTransform",
    value: function onBeforeTransform() {
      this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity();
    }
  }, {
    key: "manageInfiniteTrack",
    value: function manageInfiniteTrack() {
      const t = this.contentWidth,
        e = this.viewportWidth;
      if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t < e) return;
      const i = this.Panzoom;
      let s = !1;
      return i.content.x < -1 * (t - e) && (i.content.x += t, this.pageIndex = this.pageIndex - this.pages.length, s = !0), i.content.x > e && (i.content.x -= t, this.pageIndex = this.pageIndex + this.pages.length, s = !0), s && "pointerdown" === i.state && i.resetDragPosition(), s;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(t, e) {
      const i = this.option("dragFree");
      if (!i && this.pages.length > 1 && t.dragOffset.time < 350 && Math.abs(t.dragOffset.y) < 1 && Math.abs(t.dragOffset.x) > 5) this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();else if (i) {
        const _this$getPageFromPosi = this.getPageFromPosition(-1 * t.transform.x),
          _this$getPageFromPosi2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_this$getPageFromPosi, 2),
          e = _this$getPageFromPosi2[1];
        this.setPage(e);
      } else this.slideToClosest();
    }
  }, {
    key: "slideToClosest",
    value: function slideToClosest() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let _this$getPageFromPosi3 = this.getPageFromPosition(-1 * this.Panzoom.content.x),
        _this$getPageFromPosi4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_this$getPageFromPosi3, 2),
        e = _this$getPageFromPosi4[1];
      this.slideTo(e, t);
    }
  }, {
    key: "getPageFromPosition",
    value: function getPageFromPosition(t) {
      const e = this.pages.length;
      this.option("center") && (t += .5 * this.viewportWidth);
      const i = Math.floor(t / this.contentWidth);
      t -= i * this.contentWidth;
      let s = this.slides.find(function (e) {
        return e.left <= t && e.left + e.width > t;
      });
      if (s) {
        let t = this.findPageForSlide(s.index);
        return [t, t + i * e];
      }
      return [0, 0];
    }
  }, {
    key: "setPage",
    value: function setPage(t, e) {
      let i = 0,
        s = parseInt(t, 10) || 0;
      const o = this.page,
        n = this.pageIndex,
        a = this.pages.length,
        r = this.contentWidth,
        h = this.viewportWidth;
      if (t = (s % a + a) % a, this.option("infiniteX", this.option("infinite")) && r > h) {
        const o = Math.floor(s / a) || 0,
          n = r;
        if (i = this.pages[t].left + o * n, !0 === e && a > 2) {
          let t = -1 * this.Panzoom.content.x;
          const e = i - n,
            o = i + n,
            r = Math.abs(t - i),
            h = Math.abs(t - e),
            l = Math.abs(t - o);
          l < r && l <= h ? (i = o, s += a) : h < r && h < l && (i = e, s -= a);
        }
      } else t = s = Math.max(0, Math.min(s, a - 1)), i = this.pages.length ? this.pages[t].left : 0;
      return this.page = t, this.pageIndex = s, null !== o && t !== o && (this.prevPage = o, this.prevPageIndex = n, this.trigger("change", t, o)), i;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this19 = this;
      this.state = "destroy", this.slides.forEach(function (t) {
        _this19.removeSlideEl(t);
      }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
    }
  }]);
  return y;
}(l);
y.version = "4.0.31", y.Plugins = p;
const v = !("undefined" == typeof window || !window.document || !window.document.createElement);
let b = null;
const x = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'],
  w = function (t) {
    if (t && v) {
      null === b && document.createElement("div").focus({
        get preventScroll() {
          return b = !0, !1;
        }
      });
      try {
        if (t.setActive) t.setActive();else if (b) t.focus({
          preventScroll: !0
        });else {
          const e = window.pageXOffset || document.body.scrollTop,
            i = window.pageYOffset || document.body.scrollLeft;
          t.focus(), document.body.scrollTo({
            top: e,
            left: i,
            behavior: "auto"
          });
        }
      } catch (t) {}
    }
  };
const $ = {
  minSlideCount: 2,
  minScreenHeight: 500,
  autoStart: !0,
  key: "t",
  Carousel: {},
  tpl: '<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>'
};
let C = /*#__PURE__*/function () {
  function C(t) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, C);
    this.fancybox = t, this.$container = null, this.state = "init";
    for (var _i12 = 0, _arr3 = ["onPrepare", "onClosing", "onKeydown"]; _i12 < _arr3.length; _i12++) {
      const t = _arr3[_i12];
      this[t] = this[t].bind(this);
    }
    this.events = {
      prepare: this.onPrepare,
      closing: this.onClosing,
      keydown: this.onKeydown
    };
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(C, [{
    key: "onPrepare",
    value: function onPrepare() {
      this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : !0 === this.fancybox.option("Thumbs.autoStart") && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
    }
  }, {
    key: "onClosing",
    value: function onClosing() {
      this.Carousel && this.Carousel.Panzoom.detachEvents();
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t, e) {
      e === t.option("Thumbs.key") && this.toggle();
    }
  }, {
    key: "build",
    value: function build() {
      var _this20 = this;
      if (this.$container) return;
      const t = document.createElement("div");
      t.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t, e(!0, {
        Dots: !1,
        Navigation: !1,
        Sync: {
          friction: 0
        },
        infinite: !1,
        center: !0,
        fill: !0,
        dragFree: !0,
        slidesPerPage: 1,
        preload: 1
      }, this.fancybox.option("Thumbs.Carousel"), {
        Sync: {
          target: this.fancybox.Carousel
        },
        slides: this.getSlides()
      })), this.Carousel.Panzoom.on("wheel", function (t, e) {
        e.preventDefault(), _this20.fancybox[e.deltaY < 0 ? "prev" : "next"]();
      }), this.$container = t, this.state = "visible";
    }
  }, {
    key: "getSlides",
    value: function getSlides() {
      const t = [];
      var _iterator4 = _createForOfIteratorHelper(this.fancybox.items),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          const e = _step4.value;
          const i = e.thumb;
          i && t.push({
            html: this.fancybox.option("Thumbs.tpl").replace(/\{\{src\}\}/gi, i),
            customClass: `has-thumb has-${e.type || "image"}`
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return t;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      "visible" === this.state ? this.hide() : "hidden" === this.state ? this.show() : this.build();
    }
  }, {
    key: "show",
    value: function show() {
      "hidden" === this.state && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible");
    }
  }, {
    key: "hide",
    value: function hide() {
      "visible" === this.state && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden");
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init";
    }
  }, {
    key: "attach",
    value: function attach() {
      this.fancybox.on(this.events);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  }]);
  return C;
}();
C.defaults = $;
const S = function (t, e) {
    const i = new URL(t),
      s = new URLSearchParams(i.search);
    let o = new URLSearchParams();
    for (var _i13 = 0, _arr4 = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(s), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(Object.entries(e))); _i13 < _arr4.length; _i13++) {
      const _ref8 = _arr4[_i13];
      var _ref9 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_ref8, 2);
      const t = _ref9[0];
      const i = _ref9[1];
      "t" === t ? o.set("start", parseInt(i)) : o.set(t, i);
    }
    o = o.toString();
    let n = t.match(/#t=((.*)?\d+s)/);
    return n && (o += `#t=${n[1]}`), o;
  },
  E = {
    video: {
      autoplay: !0,
      ratio: 16 / 9
    },
    youtube: {
      autohide: 1,
      fs: 1,
      rel: 0,
      hd: 1,
      wmode: "transparent",
      enablejsapi: 1,
      html5: 1
    },
    vimeo: {
      hd: 1,
      show_title: 1,
      show_byline: 1,
      show_portrait: 0,
      fullscreen: 1
    },
    html5video: {
      tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
      format: ""
    }
  };
let P = /*#__PURE__*/function () {
  function P(t) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, P);
    this.fancybox = t;
    for (var _i14 = 0, _arr5 = ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"]; _i14 < _arr5.length; _i14++) {
      const t = _arr5[_i14];
      this[t] = this[t].bind(this);
    }
    this.events = {
      init: this.onInit,
      ready: this.onReady,
      "Carousel.createSlide": this.onCreateSlide,
      "Carousel.removeSlide": this.onRemoveSlide,
      "Carousel.selectSlide": this.onSelectSlide,
      "Carousel.unselectSlide": this.onUnselectSlide,
      "Carousel.refresh": this.onRefresh
    };
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(P, [{
    key: "onInit",
    value: function onInit() {
      var _iterator5 = _createForOfIteratorHelper(this.fancybox.items),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          const t = _step5.value;
          this.processType(t);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "processType",
    value: function processType(t) {
      if (t.html) return t.src = t.html, t.type = "html", void delete t.html;
      const i = t.src || "";
      let s = t.type || this.fancybox.options.type,
        o = null;
      if (!i || "string" == typeof i) {
        if (o = i.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
          const e = S(i, this.fancybox.option("Html.youtube")),
            n = encodeURIComponent(o[1]);
          t.videoId = n, t.src = `https://www.youtube-nocookie.com/embed/${n}?${e}`, t.thumb = t.thumb || `https://i.ytimg.com/vi/${n}/mqdefault.jpg`, t.vendor = "youtube", s = "video";
        } else if (o = i.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
          const e = S(i, this.fancybox.option("Html.vimeo")),
            n = encodeURIComponent(o[1]);
          t.videoId = n, t.src = `https://player.vimeo.com/video/${n}?${e}`, t.vendor = "vimeo", s = "video";
        } else (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `//maps.google.${o[1]}/?ll=${(o[2] ? o[2] + "&z=" + Math.floor(o[3]) + (o[4] ? o[4].replace(/^\//, "&") : "") : o[4] + "").replace(/\?/, "&")}&output=${o[4] && o[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, s = "map") : (o = i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `//maps.google.${o[1]}/maps?q=${o[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, s = "map");
        s || ("#" === i.charAt(0) ? s = "inline" : (o = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "html5video", t.format = t.format || "video/" + ("ogv" === o[1] ? "ogg" : o[1])) : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : i.match(/\.(pdf)((\?|#).*)?$/i) && (s = "pdf")), t.type = s || this.fancybox.option("defaultType", "image"), "html5video" !== s && "video" !== s || (t.video = e({}, this.fancybox.option("Html.video"), t.video), t._width && t._height ? t.ratio = parseFloat(t._width) / parseFloat(t._height) : t.ratio = t.ratio || t.video.ratio || E.video.ratio);
      }
    }
  }, {
    key: "onReady",
    value: function onReady() {
      var _this21 = this;
      this.fancybox.Carousel.slides.forEach(function (t) {
        t.$el && (_this21.setContent(t), t.index === _this21.fancybox.getSlide().index && _this21.playVideo(t));
      });
    }
  }, {
    key: "onCreateSlide",
    value: function onCreateSlide(t, e, i) {
      "ready" === this.fancybox.state && this.setContent(i);
    }
  }, {
    key: "loadInlineContent",
    value: function loadInlineContent(t) {
      let e;
      if (t.src instanceof HTMLElement) e = t.src;else if ("string" == typeof t.src) {
        const i = t.src.split("#", 2),
          s = 2 === i.length && "" === i[0] ? i[1] : i[0];
        e = document.getElementById(s);
      }
      if (e) {
        if ("clone" === t.type || e.$placeHolder) {
          e = e.cloneNode(!0);
          let i = e.getAttribute("id");
          i = i ? `${i}--clone` : `clone-${this.fancybox.id}-${t.index}`, e.setAttribute("id", i);
        } else {
          const t = document.createElement("div");
          t.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(t, e), e.$placeHolder = t;
        }
        this.fancybox.setContent(t, e);
      } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
  }, {
    key: "loadAjaxContent",
    value: function loadAjaxContent(t) {
      const e = this.fancybox,
        i = new XMLHttpRequest();
      e.showLoading(t), i.onreadystatechange = function () {
        i.readyState === XMLHttpRequest.DONE && "ready" === e.state && (e.hideLoading(t), 200 === i.status ? e.setContent(t, i.responseText) : e.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
      };
      const s = t.ajax || null;
      i.open(s ? "POST" : "GET", t.src), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(s), t.xhr = i;
    }
  }, {
    key: "loadIframeContent",
    value: function loadIframeContent(t) {
      var _this22 = this;
      const e = this.fancybox,
        i = document.createElement("iframe");
      if (i.className = "fancybox__iframe", i.setAttribute("id", `fancybox__iframe_${e.id}_${t.index}`), i.setAttribute("allow", "autoplay; fullscreen"), i.setAttribute("scrolling", "auto"), t.$iframe = i, "iframe" !== t.type || !1 === t.preload) return i.setAttribute("src", t.src), this.fancybox.setContent(t, i), void this.resizeIframe(t);
      e.showLoading(t);
      const s = document.createElement("div");
      s.style.visibility = "hidden", this.fancybox.setContent(t, s), s.appendChild(i), i.onerror = function () {
        e.setError(t, "{{IFRAME_ERROR}}");
      }, i.onload = function () {
        e.hideLoading(t);
        let s = !1;
        i.isReady || (i.isReady = !0, s = !0), i.src.length && (i.parentNode.style.visibility = "", _this22.resizeIframe(t), s && e.revealContent(t));
      }, i.setAttribute("src", t.src);
    }
  }, {
    key: "setAspectRatio",
    value: function setAspectRatio(t) {
      const e = t.$content,
        i = t.ratio;
      if (!e) return;
      let s = t._width,
        o = t._height;
      if (i || s && o) {
        Object.assign(e.style, {
          width: s && o ? "100%" : "",
          height: s && o ? "100%" : "",
          maxWidth: "",
          maxHeight: ""
        });
        let t = e.offsetWidth,
          n = e.offsetHeight;
        if (s = s || t, o = o || n, s > t || o > n) {
          let e = Math.min(t / s, n / o);
          s *= e, o *= e;
        }
        Math.abs(s / o - i) > .01 && (i < s / o ? s = o * i : o = s / i), Object.assign(e.style, {
          width: `${s}px`,
          height: `${o}px`
        });
      }
    }
  }, {
    key: "resizeIframe",
    value: function resizeIframe(t) {
      const e = t.$iframe;
      if (!e) return;
      let i = t._width || 0,
        s = t._height || 0;
      i && s && (t.autoSize = !1);
      const o = e.parentNode,
        n = o && o.style;
      if (!1 !== t.preload && !1 !== t.autoSize && n) try {
        const t = window.getComputedStyle(o),
          a = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
          r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom),
          h = e.contentWindow.document,
          l = h.getElementsByTagName("html")[0],
          c = h.body;
        n.width = "", c.style.overflow = "hidden", i = i || l.scrollWidth + a, n.width = `${i}px`, c.style.overflow = "", n.flex = "0 0 auto", n.height = `${c.scrollHeight}px`, s = l.scrollHeight + r;
      } catch (t) {}
      if (i || s) {
        const t = {
          flex: "0 1 auto"
        };
        i && (t.width = `${i}px`), s && (t.height = `${s}px`), Object.assign(n, t);
      }
    }
  }, {
    key: "onRefresh",
    value: function onRefresh(t, e) {
      var _this23 = this;
      e.slides.forEach(function (t) {
        t.$el && (t.$iframe && _this23.resizeIframe(t), t.ratio && _this23.setAspectRatio(t));
      });
    }
  }, {
    key: "setContent",
    value: function setContent(t) {
      if (t && !t.isDom) {
        switch (t.type) {
          case "html":
            this.fancybox.setContent(t, t.src);
            break;
          case "html5video":
            this.fancybox.setContent(t, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.format || t.html5video && t.html5video.format || "").replace("{{poster}}", t.poster || t.thumb || ""));
            break;
          case "inline":
          case "clone":
            this.loadInlineContent(t);
            break;
          case "ajax":
            this.loadAjaxContent(t);
            break;
          case "pdf":
          case "video":
          case "map":
            t.preload = !1;
          case "iframe":
            this.loadIframeContent(t);
        }
        t.ratio && this.setAspectRatio(t);
      }
    }
  }, {
    key: "onSelectSlide",
    value: function onSelectSlide(t, e, i) {
      "ready" === t.state && this.playVideo(i);
    }
  }, {
    key: "playVideo",
    value: function playVideo(t) {
      if ("html5video" === t.type && t.video.autoplay) try {
        const e = t.$el.querySelector("video");
        if (e) {
          const t = e.play();
          void 0 !== t && t.then(function () {}).catch(function (t) {
            e.muted = !0, e.play();
          });
        }
      } catch (t) {}
      if ("video" !== t.type || !t.$iframe || !t.$iframe.contentWindow) return;
      const e = function () {
        if ("done" === t.state && t.$iframe && t.$iframe.contentWindow) {
          let e;
          if (t.$iframe.isReady) return t.video && t.video.autoplay && (e = "youtube" == t.vendor ? {
            event: "command",
            func: "playVideo"
          } : {
            method: "play",
            value: "true"
          }), void (e && t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
          "youtube" === t.vendor && (e = {
            event: "listening",
            id: t.$iframe.getAttribute("id")
          }, t.$iframe.contentWindow.postMessage(JSON.stringify(e), "*"));
        }
        t.poller = setTimeout(e, 250);
      };
      e();
    }
  }, {
    key: "onUnselectSlide",
    value: function onUnselectSlide(t, e, i) {
      if ("html5video" === i.type) {
        try {
          i.$el.querySelector("video").pause();
        } catch (t) {}
        return;
      }
      let s = !1;
      "vimeo" == i.vendor ? s = {
        method: "pause",
        value: "true"
      } : "youtube" === i.vendor && (s = {
        event: "command",
        func: "pauseVideo"
      }), s && i.$iframe && i.$iframe.contentWindow && i.$iframe.contentWindow.postMessage(JSON.stringify(s), "*"), clearTimeout(i.poller);
    }
  }, {
    key: "onRemoveSlide",
    value: function onRemoveSlide(t, e, i) {
      i.xhr && (i.xhr.abort(), i.xhr = null), i.$iframe && (i.$iframe.onload = i.$iframe.onerror = null, i.$iframe.src = "//about:blank", i.$iframe = null);
      const s = i.$content;
      "inline" === i.type && s && (s.classList.remove("fancybox__content"), "none" !== s.style.display && (s.style.display = "none")), i.$closeButton && (i.$closeButton.remove(), i.$closeButton = null);
      const o = s && s.$placeHolder;
      o && (o.parentNode.insertBefore(s, o), o.remove(), s.$placeHolder = null);
    }
  }, {
    key: "onMessage",
    value: function onMessage(t) {
      try {
        let e = JSON.parse(t.data);
        if ("https://player.vimeo.com" === t.origin) {
          if ("ready" === e.event) {
            var _iterator6 = _createForOfIteratorHelper(document.getElementsByClassName("fancybox__iframe")),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                let e = _step6.value;
                e.contentWindow === t.source && (e.isReady = 1);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        } else "https://www.youtube-nocookie.com" === t.origin && "onReady" === e.event && (document.getElementById(e.id).isReady = 1);
      } catch (t) {}
    }
  }, {
    key: "attach",
    value: function attach() {
      this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, !1);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, !1);
    }
  }]);
  return P;
}();
P.defaults = E;
let T = /*#__PURE__*/function () {
  function T(t) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, T);
    this.fancybox = t;
    for (var _i15 = 0, _arr6 = ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"]; _i15 < _arr6.length; _i15++) {
      const t = _arr6[_i15];
      this[t] = this[t].bind(this);
    }
    this.events = {
      ready: this.onReady,
      closing: this.onClosing,
      done: this.onDone,
      "Carousel.change": this.onPageChange,
      "Carousel.createSlide": this.onCreateSlide,
      "Carousel.removeSlide": this.onRemoveSlide
    };
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(T, [{
    key: "onReady",
    value: function onReady() {
      var _this24 = this;
      this.fancybox.Carousel.slides.forEach(function (t) {
        t.$el && _this24.setContent(t);
      });
    }
  }, {
    key: "onDone",
    value: function onDone(t, e) {
      this.handleCursor(e);
    }
  }, {
    key: "onClosing",
    value: function onClosing(t) {
      clearTimeout(this.clickTimer), this.clickTimer = null, t.Carousel.slides.forEach(function (t) {
        t.$image && (t.state = "destroy"), t.Panzoom && t.Panzoom.detachEvents();
      }), "closing" === this.fancybox.state && this.canZoom(t.getSlide()) && this.zoomOut();
    }
  }, {
    key: "onCreateSlide",
    value: function onCreateSlide(t, e, i) {
      "ready" === this.fancybox.state && this.setContent(i);
    }
  }, {
    key: "onRemoveSlide",
    value: function onRemoveSlide(t, e, i) {
      i.$image && (i.$el.classList.remove(t.option("Image.canZoomInClass")), i.$image.remove(), i.$image = null), i.Panzoom && (i.Panzoom.destroy(), i.Panzoom = null), i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
    }
  }, {
    key: "setContent",
    value: function setContent(t) {
      var _this25 = this;
      if (t.isDom || t.html || t.type && "image" !== t.type) return;
      if (t.$image) return;
      t.type = "image", t.state = "loading";
      const e = document.createElement("div");
      e.style.visibility = "hidden";
      const i = document.createElement("img");
      i.addEventListener("load", function (e) {
        e.stopImmediatePropagation(), _this25.onImageStatusChange(t);
      }), i.addEventListener("error", function () {
        _this25.onImageStatusChange(t);
      }), i.src = t.src, i.alt = "", i.draggable = !1, i.classList.add("fancybox__image"), t.srcset && i.setAttribute("srcset", t.srcset), t.sizes && i.setAttribute("sizes", t.sizes), t.$image = i;
      const s = this.fancybox.option("Image.wrap");
      if (s) {
        const o = document.createElement("div");
        o.classList.add("string" == typeof s ? s : "fancybox__image-wrap"), o.appendChild(i), e.appendChild(o), t.$wrap = o;
      } else e.appendChild(i);
      t.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t, e), i.complete || i.error ? this.onImageStatusChange(t) : this.fancybox.showLoading(t);
    }
  }, {
    key: "onImageStatusChange",
    value: function onImageStatusChange(t) {
      var _this26 = this;
      const e = t.$image;
      e && "loading" === t.state && (e.complete && e.naturalWidth && e.naturalHeight ? (this.fancybox.hideLoading(t), "contain" === this.fancybox.option("Image.fit") && this.initSlidePanzoom(t), t.$el.addEventListener("wheel", function (e) {
        return _this26.onWheel(t, e);
      }, {
        passive: !1
      }), t.$content.addEventListener("click", function (e) {
        return _this26.onClick(t, e);
      }, {
        passive: !1
      }), this.revealContent(t)) : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
    }
  }, {
    key: "initSlidePanzoom",
    value: function initSlidePanzoom(t) {
      var _this27 = this;
      t.Panzoom || (t.Panzoom = new d(t.$el, e(!0, this.fancybox.option("Image.Panzoom", {}), {
        viewport: t.$wrap,
        content: t.$image,
        width: t._width,
        height: t._height,
        wrapInner: !1,
        textSelection: !0,
        touch: this.fancybox.option("Image.touch"),
        panOnlyZoomed: !0,
        click: !1,
        wheel: !1
      })), t.Panzoom.on("startAnimation", function () {
        _this27.fancybox.trigger("Image.startAnimation", t);
      }), t.Panzoom.on("endAnimation", function () {
        "zoomIn" === t.state && _this27.fancybox.done(t), _this27.handleCursor(t), _this27.fancybox.trigger("Image.endAnimation", t);
      }), t.Panzoom.on("afterUpdate", function () {
        _this27.handleCursor(t), _this27.fancybox.trigger("Image.afterUpdate", t);
      }));
    }
  }, {
    key: "revealContent",
    value: function revealContent(t) {
      null === this.fancybox.Carousel.prevPage && t.index === this.fancybox.options.startIndex && this.canZoom(t) ? this.zoomIn() : this.fancybox.revealContent(t);
    }
  }, {
    key: "getZoomInfo",
    value: function getZoomInfo(t) {
      const e = t.$thumb.getBoundingClientRect(),
        i = e.width,
        s = e.height,
        o = t.$content.getBoundingClientRect(),
        n = o.width,
        a = o.height,
        r = o.top - e.top,
        h = o.left - e.left;
      let l = this.fancybox.option("Image.zoomOpacity");
      return "auto" === l && (l = Math.abs(i / s - n / a) > .1), {
        top: r,
        left: h,
        scale: n && i ? i / n : 1,
        opacity: l
      };
    }
  }, {
    key: "canZoom",
    value: function canZoom(t) {
      const e = this.fancybox,
        i = e.$container;
      if (window.visualViewport && 1 !== window.visualViewport.scale) return !1;
      if (t.Panzoom && !t.Panzoom.content.width) return !1;
      if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit")) return !1;
      const s = t.$thumb;
      if (!s || "loading" === t.state) return !1;
      i.classList.add("fancybox__no-click");
      const o = s.getBoundingClientRect();
      let n;
      if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
        const t = document.elementFromPoint(o.left + 1, o.top + 1) === s,
          e = document.elementFromPoint(o.right - 1, o.bottom - 1) === s;
        n = t && e;
      } else n = document.elementFromPoint(o.left + .5 * o.width, o.top + .5 * o.height) === s;
      return i.classList.remove("fancybox__no-click"), n;
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      const t = this.fancybox,
        e = t.getSlide(),
        i = e.Panzoom,
        _this$getZoomInfo = this.getZoomInfo(e),
        s = _this$getZoomInfo.top,
        o = _this$getZoomInfo.left,
        n = _this$getZoomInfo.scale,
        a = _this$getZoomInfo.opacity;
      t.trigger("reveal", e), i.panTo({
        x: -1 * o,
        y: -1 * s,
        scale: n,
        friction: 0,
        ignoreBounds: !0
      }), e.$content.style.visibility = "", e.state = "zoomIn", !0 === a && i.on("afterTransform", function (t) {
        "zoomIn" !== e.state && "zoomOut" !== e.state || (t.$content.style.opacity = Math.min(1, 1 - (1 - t.content.scale) / (1 - n)));
      }), i.panTo({
        x: 0,
        y: 0,
        scale: 1,
        friction: this.fancybox.option("Image.zoomFriction")
      });
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      var _this28 = this;
      const t = this.fancybox,
        e = t.getSlide(),
        i = e.Panzoom;
      if (!i) return;
      e.state = "zoomOut", t.state = "customClosing", e.$caption && (e.$caption.style.visibility = "hidden");
      let s = this.fancybox.option("Image.zoomFriction");
      const o = function (t) {
        const _this28$getZoomInfo = _this28.getZoomInfo(e),
          o = _this28$getZoomInfo.top,
          n = _this28$getZoomInfo.left,
          a = _this28$getZoomInfo.scale,
          r = _this28$getZoomInfo.opacity;
        t || r || (s *= .82), i.panTo({
          x: -1 * n,
          y: -1 * o,
          scale: a,
          friction: s,
          ignoreBounds: !0
        }), s *= .98;
      };
      window.addEventListener("scroll", o), i.once("endAnimation", function () {
        window.removeEventListener("scroll", o), t.destroy();
      }), o();
    }
  }, {
    key: "handleCursor",
    value: function handleCursor(t) {
      if ("image" !== t.type || !t.$el) return;
      const e = t.Panzoom,
        i = this.fancybox.option("Image.click", !1, t),
        s = this.fancybox.option("Image.touch"),
        o = t.$el.classList,
        n = this.fancybox.option("Image.canZoomInClass"),
        a = this.fancybox.option("Image.canZoomOutClass");
      if (o.remove(a), o.remove(n), e && "toggleZoom" === i) {
        e && 1 === e.content.scale && e.option("maxScale") - e.content.scale > .01 ? o.add(n) : e.content.scale > 1 && !s && o.add(a);
      } else "close" === i && o.add(a);
    }
  }, {
    key: "onWheel",
    value: function onWheel(t, e) {
      if ("ready" === this.fancybox.state && !1 !== this.fancybox.trigger("Image.wheel", e)) switch (this.fancybox.option("Image.wheel")) {
        case "zoom":
          "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
          break;
        case "close":
          this.fancybox.close();
          break;
        case "slide":
          this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
      }
    }
  }, {
    key: "onClick",
    value: function onClick(t, e) {
      var _this29 = this;
      if ("ready" !== this.fancybox.state) return;
      const i = t.Panzoom;
      if (i && (i.dragPosition.midPoint || 0 !== i.dragOffset.x || 0 !== i.dragOffset.y || 1 !== i.dragOffset.scale)) return;
      if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
      const s = function (i) {
          switch (i) {
            case "toggleZoom":
              e.stopPropagation(), t.Panzoom && t.Panzoom.zoomWithClick(e);
              break;
            case "close":
              _this29.fancybox.close();
              break;
            case "next":
              e.stopPropagation(), _this29.fancybox.next();
          }
        },
        o = this.fancybox.option("Image.click"),
        n = this.fancybox.option("Image.doubleClick");
      n ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, s(n)) : this.clickTimer = setTimeout(function () {
        _this29.clickTimer = null, s(o);
      }, 300) : s(o);
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(t, e) {
      const i = t.getSlide();
      e.slides.forEach(function (t) {
        t.Panzoom && "done" === t.state && t.index !== i.index && t.Panzoom.panTo({
          x: 0,
          y: 0,
          scale: 1,
          friction: .8
        });
      });
    }
  }, {
    key: "attach",
    value: function attach() {
      this.fancybox.on(this.events);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.fancybox.off(this.events);
    }
  }]);
  return T;
}();
T.defaults = {
  canZoomInClass: "can-zoom_in",
  canZoomOutClass: "can-zoom_out",
  zoom: !0,
  zoomOpacity: "auto",
  zoomFriction: .82,
  ignoreCoveredThumbnail: !1,
  touch: !0,
  click: "toggleZoom",
  doubleClick: null,
  wheel: "zoom",
  fit: "contain",
  wrap: !1,
  Panzoom: {
    ratio: 1
  }
};
let L = /*#__PURE__*/function () {
  function L(t) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, L);
    this.fancybox = t;
    for (var _i16 = 0, _arr7 = ["onChange", "onClosing"]; _i16 < _arr7.length; _i16++) {
      const t = _arr7[_i16];
      this[t] = this[t].bind(this);
    }
    this.events = {
      initCarousel: this.onChange,
      "Carousel.change": this.onChange,
      closing: this.onClosing
    }, this.hasCreatedHistory = !1, this.origHash = "", this.timer = null;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(L, [{
    key: "onChange",
    value: function onChange(t) {
      var _this30 = this;
      const e = t.Carousel;
      this.timer && clearTimeout(this.timer);
      const i = null === e.prevPage,
        s = t.getSlide(),
        o = new URL(document.URL).hash;
      let n = !1;
      if (s.slug) n = "#" + s.slug;else {
        const i = s.$trigger && s.$trigger.dataset,
          o = t.option("slug") || i && i.fancybox;
        o && o.length && "true" !== o && (n = "#" + o + (e.slides.length > 1 ? "-" + (s.index + 1) : ""));
      }
      i && (this.origHash = o !== n ? o : ""), n && o !== n && (this.timer = setTimeout(function () {
        try {
          window.history[i ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + n), i && (_this30.hasCreatedHistory = !0);
        } catch (t) {}
      }, 300));
    }
  }, {
    key: "onClosing",
    value: function onClosing() {
      if (this.timer && clearTimeout(this.timer), !0 !== this.hasSilentClose) try {
        return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
      } catch (t) {}
    }
  }, {
    key: "attach",
    value: function attach(t) {
      t.on(this.events);
    }
  }, {
    key: "detach",
    value: function detach(t) {
      t.off(this.events);
    }
  }], [{
    key: "startFromUrl",
    value: function startFromUrl() {
      const t = L.Fancybox;
      if (!t || t.getInstance() || !1 === t.defaults.Hash) return;
      const _L$getParsedURL = L.getParsedURL(),
        e = _L$getParsedURL.hash,
        i = _L$getParsedURL.slug,
        s = _L$getParsedURL.index;
      if (!i) return;
      let o = document.querySelector(`[data-slug="${e}"]`);
      if (o && o.dispatchEvent(new CustomEvent("click", {
        bubbles: !0,
        cancelable: !0
      })), t.getInstance()) return;
      const n = document.querySelectorAll(`[data-fancybox="${i}"]`);
      n.length && (null === s && 1 === n.length ? o = n[0] : s && (o = n[s - 1]), o && o.dispatchEvent(new CustomEvent("click", {
        bubbles: !0,
        cancelable: !0
      })));
    }
  }, {
    key: "onHashChange",
    value: function onHashChange() {
      const _L$getParsedURL2 = L.getParsedURL(),
        t = _L$getParsedURL2.slug,
        e = _L$getParsedURL2.index,
        i = L.Fancybox,
        s = i && i.getInstance();
      if (s && s.plugins.Hash) {
        if (t) {
          const i = s.Carousel;
          if (t === s.option("slug")) return i.slideTo(e - 1);
          var _iterator7 = _createForOfIteratorHelper(i.slides),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              let e = _step7.value;
              if (e.slug && e.slug === t) return i.slideTo(e.index);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          const o = s.getSlide(),
            n = o.$trigger && o.$trigger.dataset;
          if (n && n.fancybox === t) return i.slideTo(e - 1);
        }
        s.plugins.Hash.hasSilentClose = !0, s.close();
      }
      L.startFromUrl();
    }
  }, {
    key: "create",
    value: function create(t) {
      function e() {
        window.addEventListener("hashchange", L.onHashChange, !1), L.startFromUrl();
      }
      L.Fancybox = t, v && window.requestAnimationFrame(function () {
        /complete|interactive|loaded/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener("hashchange", L.onHashChange, !1);
    }
  }, {
    key: "getParsedURL",
    value: function getParsedURL() {
      const t = window.location.hash.substr(1),
        e = t.split("-"),
        i = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || null;
      return {
        hash: t,
        slug: e.join("-"),
        index: i
      };
    }
  }]);
  return L;
}();
const _ = {
  pageXOffset: 0,
  pageYOffset: 0,
  element: function () {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
  },
  activate(t) {
    _.pageXOffset = window.pageXOffset, _.pageYOffset = window.pageYOffset, t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen();
  },
  deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  }
};
let A = /*#__PURE__*/function () {
  function A(t) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, A);
    this.fancybox = t, this.active = !1, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(A, [{
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "setTimer",
    value: function setTimer() {
      var _this31 = this;
      if (!this.active || this.timer) return;
      const t = this.fancybox.option("slideshow.delay", 3e3);
      this.timer = setTimeout(function () {
        _this31.timer = null, _this31.fancybox.option("infinite") || _this31.fancybox.getSlide().index !== _this31.fancybox.Carousel.slides.length - 1 ? _this31.fancybox.next() : _this31.fancybox.jumpTo(0, {
          friction: 0
        });
      }, t);
      let e = this.$progress;
      e || (e = document.createElement("div"), e.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(e, this.fancybox.$carousel), this.$progress = e, e.offsetHeight), e.style.transitionDuration = `${t}ms`, e.style.transform = "scaleX(1)";
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight);
    }
  }, {
    key: "activate",
    value: function activate() {
      this.active || (this.active = !0, this.fancybox.$container.classList.add("has-slideshow"), "done" === this.fancybox.getSlide().state && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1));
    }
  }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange() {
      this.deactivate();
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.active = !1, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
    }
  }]);
  return A;
}();
const z = {
  display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"],
  autoEnable: !0,
  items: {
    counter: {
      position: "left",
      type: "div",
      class: "fancybox__counter",
      html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
      attr: {
        tabindex: -1
      }
    },
    prev: {
      type: "button",
      class: "fancybox__button--prev",
      label: "PREV",
      html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
      attr: {
        "data-fancybox-prev": ""
      }
    },
    next: {
      type: "button",
      class: "fancybox__button--next",
      label: "NEXT",
      html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
      attr: {
        "data-fancybox-next": ""
      }
    },
    fullscreen: {
      type: "button",
      class: "fancybox__button--fullscreen",
      label: "TOGGLE_FULLSCREEN",
      html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
      click: function (t) {
        t.preventDefault(), _.element() ? _.deactivate() : _.activate(this.fancybox.$container);
      }
    },
    slideshow: {
      type: "button",
      class: "fancybox__button--slideshow",
      label: "TOGGLE_SLIDESHOW",
      html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
      click: function (t) {
        t.preventDefault(), this.Slideshow.toggle();
      }
    },
    zoom: {
      type: "button",
      class: "fancybox__button--zoom",
      label: "TOGGLE_ZOOM",
      html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
      click: function (t) {
        t.preventDefault();
        const e = this.fancybox.getSlide().Panzoom;
        e && e.toggleZoom();
      }
    },
    download: {
      type: "link",
      label: "DOWNLOAD",
      class: "fancybox__button--download",
      html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
      click: function (t) {
        t.stopPropagation();
      }
    },
    thumbs: {
      type: "button",
      label: "TOGGLE_THUMBS",
      class: "fancybox__button--thumbs",
      html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
      click: function (t) {
        t.stopPropagation();
        const e = this.fancybox.plugins.Thumbs;
        e && e.toggle();
      }
    },
    close: {
      type: "button",
      label: "CLOSE",
      class: "fancybox__button--close",
      html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
      attr: {
        "data-fancybox-close": "",
        tabindex: 0
      }
    }
  }
};
let k = /*#__PURE__*/function () {
  function k(t) {
    var _this32 = this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, k);
    this.fancybox = t, this.$container = null, this.state = "init";
    for (var _i17 = 0, _arr8 = ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"]; _i17 < _arr8.length; _i17++) {
      const t = _arr8[_i17];
      this[t] = this[t].bind(this);
    }
    this.events = {
      init: this.onInit,
      prepare: this.onPrepare,
      done: this.onDone,
      keydown: this.onKeydown,
      closing: this.onClosing,
      "Carousel.change": this.onChange,
      "Carousel.settle": this.onSettle,
      "Carousel.Panzoom.touchStart": function () {
        return _this32.onRefresh();
      },
      "Image.startAnimation": function (t, e) {
        return _this32.onRefresh(e);
      },
      "Image.afterUpdate": function (t, e) {
        return _this32.onRefresh(e);
      }
    };
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(k, [{
    key: "onInit",
    value: function onInit() {
      if (this.fancybox.option("Toolbar.autoEnable")) {
        let t = !1;
        var _iterator8 = _createForOfIteratorHelper(this.fancybox.items),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            const e = _step8.value;
            if ("image" === e.type) {
              t = !0;
              break;
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        if (!t) return void (this.state = "disabled");
      }
      var _iterator9 = _createForOfIteratorHelper(this.fancybox.option("Toolbar.display")),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          const e = _step9.value;
          if ("close" === (t(e) ? e.id : e)) {
            this.fancybox.options.closeButton = !1;
            break;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "onPrepare",
    value: function onPrepare() {
      const t = this.fancybox;
      if ("init" === this.state && (this.build(), this.update(), this.Slideshow = new A(t), !t.Carousel.prevPage && (t.option("slideshow.autoStart") && this.Slideshow.activate(), t.option("fullscreen.autoStart") && !_.element()))) try {
        _.activate(t.$container);
      } catch (t) {}
    }
  }, {
    key: "onFsChange",
    value: function onFsChange() {
      window.scrollTo(_.pageXOffset, _.pageYOffset);
    }
  }, {
    key: "onSettle",
    value: function onSettle() {
      const t = this.fancybox,
        e = this.Slideshow;
      e && e.isActive() && (t.getSlide().index !== t.Carousel.slides.length - 1 || t.option("infinite") ? "done" === t.getSlide().state && e.setTimer() : e.deactivate());
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
    }
  }, {
    key: "onDone",
    value: function onDone(t, e) {
      const i = this.Slideshow;
      e.index === t.getSlide().index && (this.update(), i && i.isActive() && (t.option("infinite") || e.index !== t.Carousel.slides.length - 1 ? i.setTimer() : i.deactivate()));
    }
  }, {
    key: "onRefresh",
    value: function onRefresh(t) {
      t && t.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t && "done" !== t.state || this.Slideshow.deactivate());
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t, e, i) {
      " " === e && this.Slideshow && (this.Slideshow.toggle(), i.preventDefault());
    }
  }, {
    key: "onClosing",
    value: function onClosing() {
      this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
    }
  }, {
    key: "createElement",
    value: function createElement(t) {
      var _e$classList4;
      let e;
      "div" === t.type ? e = document.createElement("div") : (e = document.createElement("link" === t.type ? "a" : "button"), e.classList.add("carousel__button")), e.innerHTML = t.html, e.setAttribute("tabindex", t.tabindex || 0), t.class && (_e$classList4 = e.classList).add.apply(_e$classList4, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(t.class.split(" ")));
      for (const i in t.attr) e.setAttribute(i, t.attr[i]);
      t.label && e.setAttribute("title", this.fancybox.localize(`{{${t.label}}}`)), t.click && e.addEventListener("click", t.click.bind(this)), "prev" === t.id && e.setAttribute("data-fancybox-prev", ""), "next" === t.id && e.setAttribute("data-fancybox-next", "");
      const i = e.querySelector("svg");
      return i && (i.setAttribute("role", "img"), i.setAttribute("tabindex", "-1"), i.setAttribute("xmlns", "http://www.w3.org/2000/svg")), e;
    }
  }, {
    key: "build",
    value: function build() {
      this.cleanup();
      const i = this.fancybox.option("Toolbar.items"),
        s = [{
          position: "left",
          items: []
        }, {
          position: "center",
          items: []
        }, {
          position: "right",
          items: []
        }],
        o = this.fancybox.plugins.Thumbs;
      var _iterator10 = _createForOfIteratorHelper(this.fancybox.option("Toolbar.display")),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          const n = _step10.value;
          let a, r;
          if (t(n) ? (a = n.id, r = e({}, i[a], n)) : (a = n, r = i[a]), ["counter", "next", "prev", "slideshow"].includes(a) && this.fancybox.items.length < 2) continue;
          if ("fullscreen" === a) {
            if (!document.fullscreenEnabled || window.fullScreen) continue;
            document.addEventListener("fullscreenchange", this.onFsChange);
          }
          if ("thumbs" === a && (!o || "disabled" === o.state)) continue;
          if (!r) continue;
          let h = r.position || "right",
            l = s.find(function (t) {
              return t.position === h;
            });
          l && l.items.push(r);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      const n = document.createElement("div");
      n.classList.add("fancybox__toolbar");
      for (var _i18 = 0, _s2 = s; _i18 < _s2.length; _i18++) {
        const t = _s2[_i18];
        if (t.items.length) {
          const e = document.createElement("div");
          e.classList.add("fancybox__toolbar__items"), e.classList.add(`fancybox__toolbar__items--${t.position}`);
          var _iterator11 = _createForOfIteratorHelper(t.items),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              const i = _step11.value;
              e.appendChild(this.createElement(i));
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
          n.appendChild(e);
        }
      }
      this.fancybox.$carousel.parentNode.insertBefore(n, this.fancybox.$carousel), this.$container = n;
    }
  }, {
    key: "update",
    value: function update() {
      const t = this.fancybox.getSlide(),
        e = t.index,
        i = this.fancybox.items.length,
        s = t.downloadSrc || ("image" !== t.type || t.error ? null : t.src);
      var _iterator12 = _createForOfIteratorHelper(this.fancybox.$container.querySelectorAll("a.fancybox__button--download")),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          const t = _step12.value;
          s ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"), t.setAttribute("href", s), t.setAttribute("download", s), t.setAttribute("target", "_blank")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", -1), t.removeAttribute("href"), t.removeAttribute("download"));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      const o = t.Panzoom,
        n = o && o.option("maxScale") > o.option("baseScale");
      var _iterator13 = _createForOfIteratorHelper(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom")),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          const t = _step13.value;
          n ? t.removeAttribute("disabled") : t.setAttribute("disabled", "");
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      var _iterator14 = _createForOfIteratorHelper(this.fancybox.$container.querySelectorAll("[data-fancybox-index]")),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          const e = _step14.value;
          e.innerHTML = t.index + 1;
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
      var _iterator15 = _createForOfIteratorHelper(this.fancybox.$container.querySelectorAll("[data-fancybox-count]")),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          const t = _step15.value;
          t.innerHTML = i;
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      if (!this.fancybox.option("infinite")) {
        var _iterator16 = _createForOfIteratorHelper(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]")),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            const t = _step16.value;
            0 === e ? t.setAttribute("disabled", "") : t.removeAttribute("disabled");
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        var _iterator17 = _createForOfIteratorHelper(this.fancybox.$container.querySelectorAll("[data-fancybox-next]")),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            const t = _step17.value;
            e === i - 1 ? t.setAttribute("disabled", "") : t.removeAttribute("disabled");
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      }
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null;
    }
  }, {
    key: "attach",
    value: function attach() {
      this.fancybox.on(this.events);
    }
  }, {
    key: "detach",
    value: function detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  }]);
  return k;
}();
k.defaults = z;
const O = {
  ScrollLock: /*#__PURE__*/function () {
    function ScrollLock(t) {
      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, ScrollLock);
      this.fancybox = t, this.viewport = null, this.pendingUpdate = null;
      for (var _i19 = 0, _arr9 = ["onReady", "onResize", "onTouchstart", "onTouchmove"]; _i19 < _arr9.length; _i19++) {
        const t = _arr9[_i19];
        this[t] = this[t].bind(this);
      }
    }
    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(ScrollLock, [{
      key: "onReady",
      value: function onReady() {
        const t = window.visualViewport;
        t && (this.viewport = t, this.startY = 0, t.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, {
          passive: !1
        }), window.addEventListener("touchmove", this.onTouchmove, {
          passive: !1
        }), window.addEventListener("wheel", this.onWheel, {
          passive: !1
        });
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.updateViewport();
      }
    }, {
      key: "updateViewport",
      value: function updateViewport() {
        const t = this.fancybox,
          e = this.viewport,
          i = e.scale || 1,
          s = t.$container;
        if (!s) return;
        let o = "",
          n = "",
          a = "";
        i - 1 > .1 && (o = e.width * i + "px", n = e.height * i + "px", a = `translate3d(${e.offsetLeft}px, ${e.offsetTop}px, 0) scale(${1 / i})`), s.style.width = o, s.style.height = n, s.style.transform = a;
      }
    }, {
      key: "onTouchstart",
      value: function onTouchstart(t) {
        this.startY = t.touches ? t.touches[0].screenY : t.screenY;
      }
    }, {
      key: "onTouchmove",
      value: function onTouchmove(t) {
        const e = this.startY,
          i = window.innerWidth / window.document.documentElement.clientWidth;
        if (!t.cancelable) return;
        if (t.touches.length > 1 || 1 !== i) return;
        const o = s(t.composedPath()[0]);
        if (!o) return void t.preventDefault();
        const n = window.getComputedStyle(o),
          a = parseInt(n.getPropertyValue("height"), 10),
          r = t.touches ? t.touches[0].screenY : t.screenY,
          h = e <= r && 0 === o.scrollTop,
          l = e >= r && o.scrollHeight - o.scrollTop === a;
        (h || l) && t.preventDefault();
      }
    }, {
      key: "onWheel",
      value: function onWheel(t) {
        s(t.composedPath()[0]) || t.preventDefault();
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
        const t = this.viewport;
        t && (t.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, !1), window.removeEventListener("touchmove", this.onTouchmove, !1), window.removeEventListener("wheel", this.onWheel, {
          passive: !1
        });
      }
    }, {
      key: "attach",
      value: function attach() {
        this.fancybox.on("initLayout", this.onReady);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.fancybox.off("initLayout", this.onReady), this.cleanup();
      }
    }]);
    return ScrollLock;
  }(),
  Thumbs: C,
  Html: P,
  Toolbar: k,
  Image: T,
  Hash: L
};
const M = {
    startIndex: 0,
    preload: 1,
    infinite: !0,
    showClass: "fancybox-zoomInUp",
    hideClass: "fancybox-fadeOut",
    animated: !0,
    hideScrollbar: !0,
    parentEl: null,
    mainClass: null,
    autoFocus: !0,
    trapFocus: !0,
    placeFocusBack: !0,
    click: "close",
    closeButton: "inside",
    dragToClose: !0,
    keyboard: {
      Escape: "close",
      Delete: "close",
      Backspace: "close",
      PageUp: "next",
      PageDown: "prev",
      ArrowUp: "next",
      ArrowDown: "prev",
      ArrowRight: "next",
      ArrowLeft: "prev"
    },
    template: {
      closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
      spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
      main: null
    },
    l10n: {
      CLOSE: "Close",
      NEXT: "Next",
      PREV: "Previous",
      MODAL: "You can close this modal content with the ESC key",
      ERROR: "Something Went Wrong, Please Try Again Later",
      IMAGE_ERROR: "Image Not Found",
      ELEMENT_NOT_FOUND: "HTML Element Not Found",
      AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
      AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
      IFRAME_ERROR: "Error Loading Page",
      TOGGLE_ZOOM: "Toggle zoom level",
      TOGGLE_THUMBS: "Toggle thumbnails",
      TOGGLE_SLIDESHOW: "Toggle slideshow",
      TOGGLE_FULLSCREEN: "Toggle full-screen mode",
      DOWNLOAD: "Download"
    }
  },
  I = new Map();
let F = 0;
let R = /*#__PURE__*/function (_l3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(R, _l3);
  var _super3 = _createSuper(R);
  function R(t) {
    var _this33;
    let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, R);
    t = t.map(function (t) {
      return t.width && (t._width = t.width), t.height && (t._height = t.height), t;
    }), _this33 = _super3.call(this, e(!0, {}, M, i)), _this33.bindHandlers(), _this33.state = "init", _this33.setItems(t), _this33.attachPlugins(R.Plugins), _this33.trigger("init"), !0 === _this33.option("hideScrollbar") && _this33.hideScrollbar(), _this33.initLayout(), _this33.initCarousel(), _this33.attachEvents(), I.set(_this33.id, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this33)), _this33.trigger("prepare"), _this33.state = "ready", _this33.trigger("ready"), _this33.$container.setAttribute("aria-hidden", "false"), _this33.option("trapFocus") && _this33.focus();
    return _this33;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(R, [{
    key: "option",
    value: function option(t) {
      var _s3, _get2;
      const i = this.getSlide();
      let s = i ? i[t] : void 0;
      for (var _len6 = arguments.length, e = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }
      return void 0 !== s ? ("function" == typeof s && (s = (_s3 = s).call.apply(_s3, [this, this].concat(e))), s) : (_get2 = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(R.prototype), "option", this)).call.apply(_get2, [this, t].concat(e));
    }
  }, {
    key: "bindHandlers",
    value: function bindHandlers() {
      for (var _i20 = 0, _arr10 = ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"]; _i20 < _arr10.length; _i20++) {
        const t = _arr10[_i20];
        this[t] = this[t].bind(this);
      }
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, !0), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0), this.$container.addEventListener("click", this.onClick);
    }
  }, {
    key: "detachEvents",
    value: function detachEvents() {
      document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, !0), document.removeEventListener("focus", this.onFocus, !0), this.$container.removeEventListener("click", this.onClick);
    }
  }, {
    key: "initLayout",
    value: function initLayout() {
      var _this34 = this,
        _this$$container$clas2;
      this.$root = this.option("parentEl") || document.body;
      let t = this.option("template.main");
      t && (this.$root.insertAdjacentHTML("beforeend", this.localize(t)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = function () {
        return _this34.$container.scrollLeft = 0, !1;
      }, Object.entries({
        class: "fancybox__container",
        role: "dialog",
        tabIndex: "-1",
        "aria-modal": "true",
        "aria-hidden": "true",
        "aria-label": this.localize("{{MODAL}}")
      }).forEach(function (t) {
        var _this34$$container;
        return (_this34$$container = _this34.$container).setAttribute.apply(_this34$$container, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(t));
      }), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++F, this.$container.setAttribute("id", "fancybox-" + this.id));
      const e = this.option("mainClass");
      return e && (_this$$container$clas2 = this.$container.classList).add.apply(_this$$container$clas2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(e.split(" "))), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
    }
  }, {
    key: "setItems",
    value: function setItems(t) {
      const e = [];
      var _iterator18 = _createForOfIteratorHelper(t),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          const i = _step18.value;
          const t = i.$trigger;
          if (t) {
            const e = t.dataset || {};
            i.src = e.src || t.getAttribute("href") || i.src, i.type = e.type || i.type, !i.src && t instanceof HTMLImageElement && (i.src = t.currentSrc || i.$trigger.src);
          }
          let s = i.$thumb;
          if (!s) {
            let t = i.$trigger && i.$trigger.origTarget;
            t && (s = t instanceof HTMLImageElement ? t : t.querySelector("img:not([aria-hidden])")), !s && i.$trigger && (s = i.$trigger instanceof HTMLImageElement ? i.$trigger : i.$trigger.querySelector("img:not([aria-hidden])"));
          }
          i.$thumb = s || null;
          let o = i.thumb;
          !o && s && (o = s.currentSrc || s.src, !o && s.dataset && (o = s.dataset.lazySrc || s.dataset.src)), o || "image" !== i.type || (o = i.src), i.thumb = o || null, i.caption = i.caption || "", e.push(i);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
      this.items = e;
    }
  }, {
    key: "initCarousel",
    value: function initCarousel() {
      var _this35 = this;
      return this.Carousel = new y(this.$carousel, e(!0, {}, {
        prefix: "",
        classNames: {
          viewport: "fancybox__viewport",
          track: "fancybox__track",
          slide: "fancybox__slide"
        },
        textSelection: !0,
        preload: this.option("preload"),
        friction: .88,
        slides: this.items,
        initialPage: this.options.startIndex,
        slidesPerPage: 1,
        infiniteX: this.option("infinite"),
        infiniteY: !0,
        l10n: this.option("l10n"),
        Dots: !1,
        Navigation: {
          classNames: {
            main: "fancybox__nav",
            button: "carousel__button",
            next: "is-next",
            prev: "is-prev"
          }
        },
        Panzoom: {
          textSelection: !0,
          panOnlyZoomed: function () {
            return _this35.Carousel && _this35.Carousel.pages && _this35.Carousel.pages.length < 2 && !_this35.option("dragToClose");
          },
          lockAxis: function () {
            if (_this35.Carousel) {
              let t = "x";
              return _this35.option("dragToClose") && (t += "y"), t;
            }
          }
        },
        on: {
          "*": function (t) {
            for (var _len7 = arguments.length, e = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
              e[_key7 - 1] = arguments[_key7];
            }
            return _this35.trigger.apply(_this35, [`Carousel.${t}`].concat(e));
          },
          init: function (t) {
            return _this35.Carousel = t;
          },
          createSlide: this.onCreateSlide,
          settle: this.onSettle
        }
      }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({
        touchMove: this.onTouchMove,
        afterTransform: this.onTransform,
        touchEnd: this.onTouchEnd
      }), this.trigger("initCarousel"), this;
    }
  }, {
    key: "onCreateSlide",
    value: function onCreateSlide(t, e) {
      let i = e.caption || "";
      if ("function" == typeof this.options.caption && (i = this.options.caption.call(this, this, this.Carousel, e)), "string" == typeof i && i.length) {
        const t = document.createElement("div"),
          s = `fancybox__caption_${this.id}_${e.index}`;
        t.className = "fancybox__caption", t.innerHTML = i, t.setAttribute("id", s), e.$caption = e.$el.appendChild(t), e.$el.classList.add("has-caption"), e.$el.setAttribute("aria-labelledby", s);
      }
    }
  }, {
    key: "onSettle",
    value: function onSettle() {
      this.option("autoFocus") && this.focus();
    }
  }, {
    key: "onFocus",
    value: function onFocus(t) {
      this.isTopmost() && this.focus(t);
    }
  }, {
    key: "onClick",
    value: function onClick(t) {
      if (t.defaultPrevented) return;
      let e = t.composedPath()[0];
      if (e.matches("[data-fancybox-close]")) return t.preventDefault(), void R.close(!1, t);
      if (e.matches("[data-fancybox-next]")) return t.preventDefault(), void R.next();
      if (e.matches("[data-fancybox-prev]")) return t.preventDefault(), void R.prev();
      const i = document.activeElement;
      if (i) {
        if (i.closest("[contenteditable]")) return;
        e.matches(x) || i.blur();
      }
      if (e.closest(".fancybox__content")) return;
      if (getSelection().toString().length) return;
      if (!1 === this.trigger("click", t)) return;
      switch (this.option("click")) {
        case "close":
          this.close();
          break;
        case "next":
          this.next();
      }
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove() {
      const t = this.getSlide().Panzoom;
      return !t || 1 === t.content.scale;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(t) {
      const e = t.dragOffset.y;
      Math.abs(e) >= 150 || Math.abs(e) >= 35 && t.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t.content.y < 0 ? "Up" : "Down")), this.close()) : "y" === t.lockAxis && t.panTo({
        y: 0
      });
    }
  }, {
    key: "onTransform",
    value: function onTransform(t) {
      if (this.$backdrop) {
        const e = Math.abs(t.content.y),
          i = e < 1 ? "" : Math.max(.33, Math.min(1, 1 - e / t.content.fitHeight * 1.5));
        this.$container.style.setProperty("--fancybox-ts", i ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i);
      }
    }
  }, {
    key: "onMousedown",
    value: function onMousedown() {
      "ready" === this.state && document.body.classList.add("is-using-mouse");
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(t) {
      if (!this.isTopmost()) return;
      document.body.classList.remove("is-using-mouse");
      const e = t.key,
        i = this.option("keyboard");
      if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
      const s = t.composedPath()[0],
        o = document.activeElement && document.activeElement.classList,
        n = o && o.contains("carousel__button");
      if ("Escape" !== e && !n) {
        if (t.target.isContentEditable || -1 !== ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(s.nodeName)) return;
      }
      if (!1 === this.trigger("keydown", e, t)) return;
      const a = i[e];
      "function" == typeof this[a] && this[a]();
    }
  }, {
    key: "getSlide",
    value: function getSlide() {
      const t = this.Carousel;
      if (!t) return null;
      const e = null === t.page ? t.option("initialPage") : t.page,
        i = t.pages || [];
      return i.length && i[e] ? i[e].slides[0] : null;
    }
  }, {
    key: "focus",
    value: function focus(t) {
      if (R.ignoreFocusChange) return;
      if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1) return;
      const e = this.$container,
        i = this.getSlide(),
        s = "done" === i.state ? i.$el : null;
      if (s && s.contains(document.activeElement)) return;
      t && t.preventDefault(), R.ignoreFocusChange = !0;
      const o = Array.from(e.querySelectorAll(x));
      let n,
        a = [];
      for (var _i21 = 0, _o = o; _i21 < _o.length; _i21++) {
        let t = _o[_i21];
        const e = t.offsetParent,
          i = s && s.contains(t),
          o = !this.Carousel.$viewport.contains(t);
        e && (i || o) ? (a.push(t), void 0 !== t.dataset.origTabindex && (t.tabIndex = t.dataset.origTabindex, t.removeAttribute("data-orig-tabindex")), (t.hasAttribute("autoFocus") || !n && i && !t.classList.contains("carousel__button")) && (n = t)) : (t.dataset.origTabindex = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") : t.dataset.origTabindex, t.tabIndex = -1);
      }
      t ? a.indexOf(t.target) > -1 ? this.lastFocus = t.target : this.lastFocus === e ? w(a[a.length - 1]) : w(e) : this.option("autoFocus") && n ? w(n) : a.indexOf(document.activeElement) < 0 && w(e), this.lastFocus = document.activeElement, R.ignoreFocusChange = !1;
    }
  }, {
    key: "hideScrollbar",
    value: function hideScrollbar() {
      if (!v) return;
      const t = window.innerWidth - document.documentElement.getBoundingClientRect().width,
        e = "fancybox-style-noscroll";
      let i = document.getElementById(e);
      i || t > 0 && (i = document.createElement("style"), i.id = e, i.type = "text/css", i.innerHTML = `.compensate-for-scrollbar {padding-right: ${t}px;}`, document.getElementsByTagName("head")[0].appendChild(i), document.body.classList.add("compensate-for-scrollbar"));
    }
  }, {
    key: "revealScrollbar",
    value: function revealScrollbar() {
      document.body.classList.remove("compensate-for-scrollbar");
      const t = document.getElementById("fancybox-style-noscroll");
      t && t.remove();
    }
  }, {
    key: "clearContent",
    value: function clearContent(t) {
      this.Carousel.trigger("removeSlide", t), t.$content && (t.$content.remove(), t.$content = null), t.$closeButton && (t.$closeButton.remove(), t.$closeButton = null), t._className && t.$el.classList.remove(t._className);
    }
  }, {
    key: "setContent",
    value: function setContent(t, e) {
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      let s;
      const o = t.$el;
      if (e instanceof HTMLElement) ["img", "iframe", "video", "audio"].indexOf(e.nodeName.toLowerCase()) > -1 ? (s = document.createElement("div"), s.appendChild(e)) : s = e;else {
        const t = document.createRange().createContextualFragment(e);
        s = document.createElement("div"), s.appendChild(t);
      }
      if (t.filter && !t.error && (s = s.querySelector(t.filter)), s instanceof Element) return t._className = `has-${i.suffix || t.type || "unknown"}`, o.classList.add(t._className), s.classList.add("fancybox__content"), "none" !== s.style.display && "none" !== getComputedStyle(s).getPropertyValue("display") || (s.style.display = t.display || this.option("defaultDisplay") || "flex"), t.id && s.setAttribute("id", t.id), t.$content = s, o.prepend(s), this.manageCloseButton(t), "loading" !== t.state && this.revealContent(t), s;
      this.setError(t, "{{ELEMENT_NOT_FOUND}}");
    }
  }, {
    key: "manageCloseButton",
    value: function manageCloseButton(t) {
      var _this36 = this;
      const e = void 0 === t.closeButton ? this.option("closeButton") : t.closeButton;
      if (!e || "top" === e && this.$closeButton) return;
      const i = document.createElement("button");
      i.classList.add("carousel__button", "is-close"), i.setAttribute("title", this.options.l10n.CLOSE), i.innerHTML = this.option("template.closeButton"), i.addEventListener("click", function (t) {
        return _this36.close(t);
      }), "inside" === e ? (t.$closeButton && t.$closeButton.remove(), t.$closeButton = t.$content.appendChild(i)) : this.$closeButton = this.$container.insertBefore(i, this.$container.firstChild);
    }
  }, {
    key: "revealContent",
    value: function revealContent(t) {
      var _this37 = this;
      this.trigger("reveal", t), t.$content.style.visibility = "";
      let e = !1;
      t.error || "loading" === t.state || null !== this.Carousel.prevPage || t.index !== this.options.startIndex || (e = void 0 === t.showClass ? this.option("showClass") : t.showClass), e ? (t.state = "animating", this.animateCSS(t.$content, e, function () {
        _this37.done(t);
      })) : this.done(t);
    }
  }, {
    key: "animateCSS",
    value: function animateCSS(t, e, i) {
      if (t && t.dispatchEvent(new CustomEvent("animationend", {
        bubbles: !0,
        cancelable: !0
      })), !t || !e) return void ("function" == typeof i && i());
      const s = function (o) {
        o.currentTarget === this && (t.removeEventListener("animationend", s), i && i(), t.classList.remove(e));
      };
      t.addEventListener("animationend", s), t.classList.add(e);
    }
  }, {
    key: "done",
    value: function done(t) {
      t.state = "done", this.trigger("done", t);
      const e = this.getSlide();
      e && t.index === e.index && this.option("autoFocus") && this.focus();
    }
  }, {
    key: "setError",
    value: function setError(t, e) {
      t.error = e, this.hideLoading(t), this.clearContent(t);
      const i = document.createElement("div");
      i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i, {
        suffix: "error"
      });
    }
  }, {
    key: "showLoading",
    value: function showLoading(t) {
      var _this38 = this;
      t.state = "loading", t.$el.classList.add("is-loading");
      let e = t.$el.querySelector(".fancybox__spinner");
      e || (e = document.createElement("div"), e.classList.add("fancybox__spinner"), e.innerHTML = this.option("template.spinner"), e.addEventListener("click", function () {
        _this38.Carousel.Panzoom.velocity || _this38.close();
      }), t.$el.prepend(e));
    }
  }, {
    key: "hideLoading",
    value: function hideLoading(t) {
      const e = t.$el && t.$el.querySelector(".fancybox__spinner");
      e && (e.remove(), t.$el.classList.remove("is-loading")), "loading" === t.state && (this.trigger("load", t), t.state = "ready");
    }
  }, {
    key: "next",
    value: function next() {
      const t = this.Carousel;
      t && t.pages.length > 1 && t.slideNext();
    }
  }, {
    key: "prev",
    value: function prev() {
      const t = this.Carousel;
      t && t.pages.length > 1 && t.slidePrev();
    }
  }, {
    key: "jumpTo",
    value: function jumpTo() {
      var _this$Carousel;
      this.Carousel && (_this$Carousel = this.Carousel).slideTo.apply(_this$Carousel, arguments);
    }
  }, {
    key: "isClosing",
    value: function isClosing() {
      return ["closing", "customClosing", "destroy"].includes(this.state);
    }
  }, {
    key: "isTopmost",
    value: function isTopmost() {
      return R.getInstance().id == this.id;
    }
  }, {
    key: "close",
    value: function close(t) {
      var _this39 = this;
      if (t && t.preventDefault(), this.isClosing()) return;
      if (!1 === this.trigger("shouldClose", t)) return;
      if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t), "destroy" === this.state) return;
      this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
      const e = this.getSlide();
      if (this.Carousel.slides.forEach(function (t) {
        t.$content && t.index !== e.index && _this39.Carousel.trigger("removeSlide", t);
      }), "closing" === this.state) {
        const t = void 0 === e.hideClass ? this.option("hideClass") : e.hideClass;
        this.animateCSS(e.$content, t, function () {
          _this39.destroy();
        }, !0);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if ("destroy" === this.state) return;
      this.state = "destroy", this.trigger("destroy");
      const t = this.option("placeFocusBack") ? this.option("triggerTarget", this.getSlide().$trigger) : null;
      this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t && w(t), I.delete(this.id);
      const e = R.getInstance();
      e ? e.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
    }
  }], [{
    key: "show",
    value: function show(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new R(t, e);
    }
  }, {
    key: "fromEvent",
    value: function fromEvent(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (t.defaultPrevented) return;
      if (t.button && 0 !== t.button) return;
      if (t.ctrlKey || t.metaKey || t.shiftKey) return;
      const i = t.composedPath()[0];
      let s,
        o,
        n,
        a = i;
      if ((a.matches("[data-fancybox-trigger]") || (a = a.closest("[data-fancybox-trigger]"))) && (e.triggerTarget = a, s = a && a.dataset && a.dataset.fancyboxTrigger), s) {
        const t = document.querySelectorAll(`[data-fancybox="${s}"]`),
          e = parseInt(a.dataset.fancyboxIndex, 10) || 0;
        a = t.length ? t[e] : a;
      }
      Array.from(R.openers.keys()).reverse().some(function (e) {
        n = a || i;
        let s = !1;
        try {
          n instanceof Element && ("string" == typeof e || e instanceof String) && (s = n.matches(e) || (n = n.closest(e)));
        } catch (t) {}
        return !!s && (t.preventDefault(), o = e, !0);
      });
      let r = !1;
      if (o) {
        e.event = t, e.target = n, n.origTarget = i, r = R.fromOpener(o, e);
        const s = R.getInstance();
        s && "ready" === s.state && t.detail && document.body.classList.add("is-using-mouse");
      }
      return r;
    }
  }, {
    key: "fromOpener",
    value: function fromOpener(t) {
      let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let s = [],
        o = i.startIndex || 0,
        n = i.target || null;
      const a = void 0 !== (i = e({}, i, R.openers.get(t))).groupAll && i.groupAll,
        r = void 0 === i.groupAttr ? "data-fancybox" : i.groupAttr,
        h = r && n ? n.getAttribute(`${r}`) : "";
      if (!n || h || a) {
        const e = i.root || (n ? n.getRootNode() : document.body);
        s = [].slice.call(e.querySelectorAll(t));
      }
      if (n && !a && (s = h ? s.filter(function (t) {
        return t.getAttribute(`${r}`) === h;
      }) : [n]), !s.length) return !1;
      const l = R.getInstance();
      return !(l && s.indexOf(l.options.$trigger) > -1) && (o = n ? s.indexOf(n) : o, s = s.map(function (t) {
        const e = ["false", "0", "no", "null", "undefined"],
          i = ["true", "1", "yes"],
          s = Object.assign({}, t.dataset),
          o = {};
        for (var _i22 = 0, _Object$entries7 = Object.entries(s); _i22 < _Object$entries7.length; _i22++) {
          let _ref10 = _Object$entries7[_i22];
          var _ref11 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_ref10, 2);
          let t = _ref11[0];
          let n = _ref11[1];
          if ("fancybox" !== t) if ("width" === t || "height" === t) o[`_${t}`] = n;else if ("string" == typeof n || n instanceof String) {
            if (e.indexOf(n) > -1) o[t] = !1;else if (i.indexOf(o[t]) > -1) o[t] = !0;else try {
              o[t] = JSON.parse(n);
            } catch (e) {
              o[t] = n;
            }
          } else o[t] = n;
        }
        return t instanceof Element && (o.$trigger = t), o;
      }), new R(s, e({}, i, {
        startIndex: o,
        $trigger: n
      })));
    }
  }, {
    key: "bind",
    value: function bind(t) {
      let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      function i() {
        document.body.addEventListener("click", R.fromEvent, !1);
      }
      v && (R.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? i() : document.addEventListener("DOMContentLoaded", i)), R.openers.set(t, e));
    }
  }, {
    key: "unbind",
    value: function unbind(t) {
      R.openers.delete(t), R.openers.size || R.destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      let t;
      for (; t = R.getInstance();) t.destroy();
      R.openers = new Map(), document.body.removeEventListener("click", R.fromEvent, !1);
    }
  }, {
    key: "getInstance",
    value: function getInstance(t) {
      if (t) return I.get(t);
      return Array.from(I.values()).reverse().find(function (t) {
        return !t.isClosing() && t;
      }) || null;
    }
  }, {
    key: "close",
    value: function close() {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      let e = arguments.length > 1 ? arguments[1] : undefined;
      if (t) {
        var _iterator19 = _createForOfIteratorHelper(I.values()),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            const t = _step19.value;
            t.close(e);
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      } else {
        const t = R.getInstance();
        t && t.close(e);
      }
    }
  }, {
    key: "next",
    value: function next() {
      const t = R.getInstance();
      t && t.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      const t = R.getInstance();
      t && t.prev();
    }
  }]);
  return R;
}(l);
R.version = "4.0.31", R.defaults = M, R.openers = new Map(), R.Plugins = O, R.bind("[data-fancybox]");
for (var _i23 = 0, _Object$entries8 = Object.entries(R.Plugins || {}); _i23 < _Object$entries8.length; _i23++) {
  const _ref12 = _Object$entries8[_i23];
  var _ref13 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_ref12, 2);
  const t = _ref13[0];
  const e = _ref13[1];
  "function" == typeof e.create && e.create(R);
}


/***/ })

}]);