(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/chart.js/dist/chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/chart.js ***!
  \*********************************************/
/*! exports provided: Ticks, defaults, Animation, Animations, ArcElement, BarController, BarElement, BasePlatform, BasicPlatform, BubbleController, CategoryScale, Chart, Colors, DatasetController, Decimation, DomPlatform, DoughnutController, Element, Filler, Interaction, Legend, LineController, LineElement, LinearScale, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, Scale, ScatterController, SubTitle, TimeScale, TimeSeriesScale, Title, Tooltip, _adapters, _detectPlatform, animator, controllers, elements, layouts, plugins, registerables, registry, scales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcElement", function() { return ArcElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarController", function() { return BarController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarElement", function() { return BarElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePlatform", function() { return BasePlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicPlatform", function() { return BasicPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleController", function() { return BubbleController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryScale", function() { return CategoryScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return plugin_colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetController", function() { return DatasetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimation", function() { return plugin_decimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPlatform", function() { return DomPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutController", function() { return DoughnutController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filler", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return Interaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return plugin_legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineController", function() { return LineController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineElement", function() { return LineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearScale", function() { return LinearScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogarithmicScale", function() { return LogarithmicScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieController", function() { return PieController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointElement", function() { return PointElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarAreaController", function() { return PolarAreaController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadarController", function() { return RadarController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadialLinearScale", function() { return RadialLinearScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return Scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterController", function() { return ScatterController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTitle", function() { return plugin_subtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeScale", function() { return TimeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSeriesScale", function() { return TimeSeriesScale$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return plugin_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return plugin_tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_adapters", function() { return adapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_detectPlatform", function() { return _detectPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animator", function() { return animator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controllers", function() { return controllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layouts", function() { return layouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerables", function() { return registerables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scales", function() { return scales; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chunks/helpers.segment.js */ "./node_modules/chart.js/dist/chunks/helpers.segment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ticks", function() { return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"]; });











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*!
 * Chart.js v4.0.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */


let Animator = /*#__PURE__*/function () {
  function Animator() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Animator);
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Animator, [{
    key: "_notify",
    value: function _notify(chart, anims, date, type) {
      const callbacks = anims.listeners[type];
      const numSteps = anims.duration;
      callbacks.forEach(function (fn) {
        return fn({
          chart,
          initial: anims.initial,
          numSteps,
          currentStep: Math.min(date - anims.start, numSteps)
        });
      });
    }
  }, {
    key: "_refresh",
    value: function _refresh() {
      var _this = this;
      if (this._request) {
        return;
      }
      this._running = true;
      this._request = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["r"].call(window, function () {
        _this._update();
        _this._request = null;
        if (_this._running) {
          _this._refresh();
        }
      });
    }
  }, {
    key: "_update",
    value: function _update() {
      var _this2 = this;
      let date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
      let remaining = 0;
      this._charts.forEach(function (anims, chart) {
        if (!anims.running || !anims.items.length) {
          return;
        }
        const items = anims.items;
        let i = items.length - 1;
        let draw = false;
        let item;
        for (; i >= 0; --i) {
          item = items[i];
          if (item._active) {
            if (item._total > anims.duration) {
              anims.duration = item._total;
            }
            item.tick(date);
            draw = true;
          } else {
            items[i] = items[items.length - 1];
            items.pop();
          }
        }
        if (draw) {
          chart.draw();
          _this2._notify(chart, anims, date, 'progress');
        }
        if (!items.length) {
          anims.running = false;
          _this2._notify(chart, anims, date, 'complete');
          anims.initial = false;
        }
        remaining += items.length;
      });
      this._lastDate = date;
      if (remaining === 0) {
        this._running = false;
      }
    }
  }, {
    key: "_getAnims",
    value: function _getAnims(chart) {
      const charts = this._charts;
      let anims = charts.get(chart);
      if (!anims) {
        anims = {
          running: false,
          initial: true,
          items: [],
          listeners: {
            complete: [],
            progress: []
          }
        };
        charts.set(chart, anims);
      }
      return anims;
    }
  }, {
    key: "listen",
    value: function listen(chart, event, cb) {
      this._getAnims(chart).listeners[event].push(cb);
    }
  }, {
    key: "add",
    value: function add(chart, items) {
      var _this$_getAnims$items;
      if (!items || !items.length) {
        return;
      }
      (_this$_getAnims$items = this._getAnims(chart).items).push.apply(_this$_getAnims$items, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(items));
    }
  }, {
    key: "has",
    value: function has(chart) {
      return this._getAnims(chart).items.length > 0;
    }
  }, {
    key: "start",
    value: function start(chart) {
      const anims = this._charts.get(chart);
      if (!anims) {
        return;
      }
      anims.running = true;
      anims.start = Date.now();
      anims.duration = anims.items.reduce(function (acc, cur) {
        return Math.max(acc, cur._duration);
      }, 0);
      this._refresh();
    }
  }, {
    key: "running",
    value: function running(chart) {
      if (!this._running) {
        return false;
      }
      const anims = this._charts.get(chart);
      if (!anims || !anims.running || !anims.items.length) {
        return false;
      }
      return true;
    }
  }, {
    key: "stop",
    value: function stop(chart) {
      const anims = this._charts.get(chart);
      if (!anims || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i = items.length - 1;
      for (; i >= 0; --i) {
        items[i].cancel();
      }
      anims.items = [];
      this._notify(chart, anims, Date.now(), 'complete');
    }
  }, {
    key: "remove",
    value: function remove(chart) {
      return this._charts.delete(chart);
    }
  }]);
  return Animator;
}();
var animator = /* #__PURE__ */new Animator();
const transparent = 'transparent';
const interpolators = {
  boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },
  color(from, to, factor) {
    const c0 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["c"])(from || transparent);
    const c1 = c0.valid && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["c"])(to || transparent);
    return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
  },
  number(from, to, factor) {
    return from + (to - from) * factor;
  }
};
let Animation = /*#__PURE__*/function () {
  function Animation(cfg, target, prop, to) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Animation);
    const currentValue = target[prop];
    to = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a"])([cfg.to, to, currentValue, cfg.from]);
    const from = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a"])([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["e"][cfg.easing] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["e"].linear;
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = this._total = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
    this._promises = undefined;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Animation, [{
    key: "active",
    value: function active() {
      return this._active;
    }
  }, {
    key: "update",
    value: function update(cfg, to, date) {
      if (this._active) {
        this._notify(false);
        const currentValue = this._target[this._prop];
        const elapsed = date - this._start;
        const remain = this._duration - elapsed;
        this._start = date;
        this._duration = Math.floor(Math.max(remain, cfg.duration));
        this._total += elapsed;
        this._loop = !!cfg.loop;
        this._to = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a"])([cfg.to, to, currentValue, cfg.from]);
        this._from = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a"])([cfg.from, currentValue, to]);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._active) {
        this.tick(Date.now());
        this._active = false;
        this._notify(false);
      }
    }
  }, {
    key: "tick",
    value: function tick(date) {
      const elapsed = date - this._start;
      const duration = this._duration;
      const prop = this._prop;
      const from = this._from;
      const loop = this._loop;
      const to = this._to;
      let factor;
      this._active = from !== to && (loop || elapsed < duration);
      if (!this._active) {
        this._target[prop] = to;
        this._notify(true);
        return;
      }
      if (elapsed < 0) {
        this._target[prop] = from;
        return;
      }
      factor = elapsed / duration % 2;
      factor = loop && factor > 1 ? 2 - factor : factor;
      factor = this._easing(Math.min(1, Math.max(0, factor)));
      this._target[prop] = this._fn(from, to, factor);
    }
  }, {
    key: "wait",
    value: function wait() {
      const promises = this._promises || (this._promises = []);
      return new Promise(function (res, rej) {
        promises.push({
          res,
          rej
        });
      });
    }
  }, {
    key: "_notify",
    value: function _notify(resolved) {
      const method = resolved ? 'res' : 'rej';
      const promises = this._promises || [];
      for (let i = 0; i < promises.length; i++) {
        promises[i][method]();
      }
    }
  }]);
  return Animation;
}();
let Animations = /*#__PURE__*/function () {
  function Animations(chart, config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Animations);
    this._chart = chart;
    this._properties = new Map();
    this.configure(config);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Animations, [{
    key: "configure",
    value: function configure(config) {
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(config)) {
        return;
      }
      const animationOptions = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].animation);
      const animatedProps = this._properties;
      Object.getOwnPropertyNames(config).forEach(function (key) {
        const cfg = config[key];
        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(cfg)) {
          return;
        }
        const resolved = {};
        var _iterator = _createForOfIteratorHelper(animationOptions),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            const option = _step.value;
            resolved[option] = cfg[option];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(cfg.properties) && cfg.properties || [key]).forEach(function (prop) {
          if (prop === key || !animatedProps.has(prop)) {
            animatedProps.set(prop, resolved);
          }
        });
      });
    }
  }, {
    key: "_animateOptions",
    value: function _animateOptions(target, values) {
      const newOptions = values.options;
      const options = resolveTargetOptions(target, newOptions);
      if (!options) {
        return [];
      }
      const animations = this._createAnimations(options, newOptions);
      if (newOptions.$shared) {
        awaitAll(target.options.$animations, newOptions).then(function () {
          target.options = newOptions;
        }, function () {});
      }
      return animations;
    }
  }, {
    key: "_createAnimations",
    value: function _createAnimations(target, values) {
      const animatedProps = this._properties;
      const animations = [];
      const running = target.$animations || (target.$animations = {});
      const props = Object.keys(values);
      const date = Date.now();
      let i;
      for (i = props.length - 1; i >= 0; --i) {
        const prop = props[i];
        if (prop.charAt(0) === '$') {
          continue;
        }
        if (prop === 'options') {
          animations.push.apply(animations, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this._animateOptions(target, values)));
          continue;
        }
        const value = values[prop];
        let animation = running[prop];
        const cfg = animatedProps.get(prop);
        if (animation) {
          if (cfg && animation.active()) {
            animation.update(cfg, value, date);
            continue;
          } else {
            animation.cancel();
          }
        }
        if (!cfg || !cfg.duration) {
          target[prop] = value;
          continue;
        }
        running[prop] = animation = new Animation(cfg, target, prop, value);
        animations.push(animation);
      }
      return animations;
    }
  }, {
    key: "update",
    value: function update(target, values) {
      if (this._properties.size === 0) {
        Object.assign(target, values);
        return;
      }
      const animations = this._createAnimations(target, values);
      if (animations.length) {
        animator.add(this._chart, animations);
        return true;
      }
    }
  }]);
  return Animations;
}();
function awaitAll(animations, properties) {
  const running = [];
  const keys = Object.keys(properties);
  for (let i = 0; i < keys.length; i++) {
    const anim = animations[keys[i]];
    if (anim && anim.active()) {
      running.push(anim.wait());
    }
  }
  return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
  if (!newOptions) {
    return;
  }
  let options = target.options;
  if (!options) {
    target.options = newOptions;
    return;
  }
  if (options.$shared) {
    target.options = options = Object.assign({}, options, {
      $shared: false,
      $animations: {}
    });
  }
  return options;
}
function scaleClip(scale, allowedOverflow) {
  const opts = scale && scale.options || {};
  const reverse = opts.reverse;
  const min = opts.min === undefined ? allowedOverflow : 0;
  const max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}
function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }
  const x = scaleClip(xScale, allowedOverflow);
  const y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}
function toClip(value) {
  let t, r, b, l;
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    disabled: value === false
  };
}
function getSortedDatasetIndices(chart, filterVisible) {
  const keys = [];
  const metasets = chart._getSortedDatasetMetas(filterVisible);
  let i, ilen;
  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }
  return keys;
}
function _applyStack(stack, value, dsIndex) {
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const keys = stack.keys;
  const singleMode = options.mode === 'single';
  let i, ilen, datasetIndex, otherValue;
  if (value === null) {
    return;
  }
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];
    if (datasetIndex === dsIndex) {
      if (options.all) {
        continue;
      }
      break;
    }
    otherValue = stack.values[datasetIndex];
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(otherValue) && (singleMode || value === 0 || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["s"])(value) === Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["s"])(otherValue))) {
      value += otherValue;
    }
  }
  return value;
}
function convertObjectDataToArray(data) {
  const keys = Object.keys(data);
  const adata = new Array(keys.length);
  let i, ilen, key;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata[i] = {
      x: key,
      y: data[key]
    };
  }
  return adata;
}
function isStacked(scale, meta) {
  const stacked = scale && scale.options.stacked;
  return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
  return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
  const _scale$getUserBounds = scale.getUserBounds(),
    min = _scale$getUserBounds.min,
    max = _scale$getUserBounds.max,
    minDefined = _scale$getUserBounds.minDefined,
    maxDefined = _scale$getUserBounds.maxDefined;
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
  const subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
  var _iterator2 = _createForOfIteratorHelper(vScale.getMatchingVisibleMetas(type).reverse()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      const meta = _step2.value;
      const value = stack[meta.index];
      if (positive && value > 0 || !positive && value < 0) {
        return meta.index;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return null;
}
function updateStacks(controller, parsed) {
  const chart = controller.chart,
    meta = controller._cachedMeta;
  const stacks = chart._stacks || (chart._stacks = {});
  const iScale = meta.iScale,
    vScale = meta.vScale,
    datasetIndex = meta.index;
  const iAxis = iScale.axis;
  const vAxis = vScale.axis;
  const key = getStackKey(iScale, vScale, meta);
  const ilen = parsed.length;
  let stack;
  for (let i = 0; i < ilen; ++i) {
    const item = parsed[i];
    const index = item[iAxis],
      value = item[vAxis];
    const itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
    stack[datasetIndex] = value;
    stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
    stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
  }
}
function getFirstScaleId(chart, axis) {
  const scales = chart.scales;
  return Object.keys(scales).filter(function (key) {
    return scales[key].axis === axis;
  }).shift();
}
function createDatasetContext(parent, index) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["j"])(parent, {
    active: false,
    dataset: undefined,
    datasetIndex: index,
    index,
    mode: 'default',
    type: 'dataset'
  });
}
function createDataContext(parent, index, element) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["j"])(parent, {
    active: false,
    dataIndex: index,
    parsed: undefined,
    raw: undefined,
    element,
    index,
    mode: 'default',
    type: 'data'
  });
}
function clearStacks(meta, items) {
  const datasetIndex = meta.controller.index;
  const axis = meta.vScale && meta.vScale.axis;
  if (!axis) {
    return;
  }
  items = items || meta._parsed;
  var _iterator3 = _createForOfIteratorHelper(items),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      const parsed = _step3.value;
      const stacks = parsed._stacks;
      if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
        return;
      }
      delete stacks[axis][datasetIndex];
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
const isDirectUpdateMode = function (mode) {
  return mode === 'reset' || mode === 'none';
};
const cloneIfNotShared = function (cached, shared) {
  return shared ? cached : Object.assign({}, cached);
};
const createStack = function (canStack, meta, chart) {
  return canStack && !meta.hidden && meta._stacked && {
    keys: getSortedDatasetIndices(chart, true),
    values: null
  };
};
let DatasetController = /*#__PURE__*/function () {
  function DatasetController(chart, datasetIndex) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, DatasetController);
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.supportsDecimation = false;
    this.$context = undefined;
    this._syncList = [];
    this.datasetElementType = (this instanceof DatasetController ? this.constructor : void 0).datasetElementType;
    this.dataElementType = (this instanceof DatasetController ? this.constructor : void 0).dataElementType;
    this.initialize();
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(DatasetController, [{
    key: "initialize",
    value: function initialize() {
      const meta = this._cachedMeta;
      this.configure();
      this.linkScales();
      meta._stacked = isStacked(meta.vScale, meta);
      this.addElements();
      if (this.options.fill && !this.chart.isPluginEnabled('filler')) {
        console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
      }
    }
  }, {
    key: "updateIndex",
    value: function updateIndex(datasetIndex) {
      if (this.index !== datasetIndex) {
        clearStacks(this._cachedMeta);
      }
      this.index = datasetIndex;
    }
  }, {
    key: "linkScales",
    value: function linkScales() {
      const chart = this.chart;
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      const chooseId = function (axis, x, y, r) {
        return axis === 'x' ? x : axis === 'r' ? r : y;
      };
      const xid = meta.xAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(dataset.xAxisID, getFirstScaleId(chart, 'x'));
      const yid = meta.yAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(dataset.yAxisID, getFirstScaleId(chart, 'y'));
      const rid = meta.rAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(dataset.rAxisID, getFirstScaleId(chart, 'r'));
      const indexAxis = meta.indexAxis;
      const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
      const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
      meta.xScale = this.getScaleForId(xid);
      meta.yScale = this.getScaleForId(yid);
      meta.rScale = this.getScaleForId(rid);
      meta.iScale = this.getScaleForId(iid);
      meta.vScale = this.getScaleForId(vid);
    }
  }, {
    key: "getDataset",
    value: function getDataset() {
      return this.chart.data.datasets[this.index];
    }
  }, {
    key: "getMeta",
    value: function getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
  }, {
    key: "getScaleForId",
    value: function getScaleForId(scaleID) {
      return this.chart.scales[scaleID];
    }
  }, {
    key: "_getOtherScale",
    value: function _getOtherScale(scale) {
      const meta = this._cachedMeta;
      return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._update('reset');
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      const meta = this._cachedMeta;
      if (this._data) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["u"])(this._data, this);
      }
      if (meta._stacked) {
        clearStacks(meta);
      }
    }
  }, {
    key: "_dataCheck",
    value: function _dataCheck() {
      const dataset = this.getDataset();
      const data = dataset.data || (dataset.data = []);
      const _data = this._data;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(data)) {
        this._data = convertObjectDataToArray(data);
      } else if (_data !== data) {
        if (_data) {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["u"])(_data, this);
          const meta = this._cachedMeta;
          clearStacks(meta);
          meta._parsed = [];
        }
        if (data && Object.isExtensible(data)) {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["l"])(data, this);
        }
        this._syncList = [];
        this._data = data;
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      const meta = this._cachedMeta;
      this._dataCheck();
      if (this.datasetElementType) {
        meta.dataset = new this.datasetElementType();
      }
    }
  }, {
    key: "buildOrUpdateElements",
    value: function buildOrUpdateElements(resetNewElements) {
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      let stackChanged = false;
      this._dataCheck();
      const oldStacked = meta._stacked;
      meta._stacked = isStacked(meta.vScale, meta);
      if (meta.stack !== dataset.stack) {
        stackChanged = true;
        clearStacks(meta);
        meta.stack = dataset.stack;
      }
      this._resyncElements(resetNewElements);
      if (stackChanged || oldStacked !== meta._stacked) {
        updateStacks(this, meta._parsed);
      }
    }
  }, {
    key: "configure",
    value: function configure() {
      const config = this.chart.config;
      const scopeKeys = config.datasetScopeKeys(this._type);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
      this.options = config.createResolver(scopes, this.getContext());
      this._parsing = this.options.parsing;
      this._cachedDataOpts = {};
    }
  }, {
    key: "parse",
    value: function parse(start, count) {
      const meta = this._cachedMeta,
        data = this._data;
      const iScale = meta.iScale,
        _stacked = meta._stacked;
      const iAxis = iScale.axis;
      let sorted = start === 0 && count === data.length ? true : meta._sorted;
      let prev = start > 0 && meta._parsed[start - 1];
      let i, cur, parsed;
      if (this._parsing === false) {
        meta._parsed = data;
        meta._sorted = true;
        parsed = data;
      } else {
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(data[start])) {
          parsed = this.parseArrayData(meta, data, start, count);
        } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(data[start])) {
          parsed = this.parseObjectData(meta, data, start, count);
        } else {
          parsed = this.parsePrimitiveData(meta, data, start, count);
        }
        const isNotInOrderComparedToPrev = function () {
          return cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
        };
        for (i = 0; i < count; ++i) {
          meta._parsed[i + start] = cur = parsed[i];
          if (sorted) {
            if (isNotInOrderComparedToPrev()) {
              sorted = false;
            }
            prev = cur;
          }
        }
        meta._sorted = sorted;
      }
      if (_stacked) {
        updateStacks(this, parsed);
      }
    }
  }, {
    key: "parsePrimitiveData",
    value: function parsePrimitiveData(meta, data, start, count) {
      const iScale = meta.iScale,
        vScale = meta.vScale;
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const labels = iScale.getLabels();
      const singleScale = iScale === vScale;
      const parsed = new Array(count);
      let i, ilen, index;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index = i + start;
        parsed[i] = {
          [iAxis]: singleScale || iScale.parse(labels[index], index),
          [vAxis]: vScale.parse(data[index], index)
        };
      }
      return parsed;
    }
  }, {
    key: "parseArrayData",
    value: function parseArrayData(meta, data, start, count) {
      const xScale = meta.xScale,
        yScale = meta.yScale;
      const parsed = new Array(count);
      let i, ilen, index, item;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index = i + start;
        item = data[index];
        parsed[i] = {
          x: xScale.parse(item[0], index),
          y: yScale.parse(item[1], index)
        };
      }
      return parsed;
    }
  }, {
    key: "parseObjectData",
    value: function parseObjectData(meta, data, start, count) {
      const xScale = meta.xScale,
        yScale = meta.yScale;
      const _this$_parsing = this._parsing,
        _this$_parsing$xAxisK = _this$_parsing.xAxisKey,
        xAxisKey = _this$_parsing$xAxisK === void 0 ? 'x' : _this$_parsing$xAxisK,
        _this$_parsing$yAxisK = _this$_parsing.yAxisKey,
        yAxisKey = _this$_parsing$yAxisK === void 0 ? 'y' : _this$_parsing$yAxisK;
      const parsed = new Array(count);
      let i, ilen, index, item;
      for (i = 0, ilen = count; i < ilen; ++i) {
        index = i + start;
        item = data[index];
        parsed[i] = {
          x: xScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["f"])(item, xAxisKey), index),
          y: yScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["f"])(item, yAxisKey), index)
        };
      }
      return parsed;
    }
  }, {
    key: "getParsed",
    value: function getParsed(index) {
      return this._cachedMeta._parsed[index];
    }
  }, {
    key: "getDataElement",
    value: function getDataElement(index) {
      return this._cachedMeta.data[index];
    }
  }, {
    key: "applyStack",
    value: function applyStack(scale, parsed, mode) {
      const chart = this.chart;
      const meta = this._cachedMeta;
      const value = parsed[scale.axis];
      const stack = {
        keys: getSortedDatasetIndices(chart, true),
        values: parsed._stacks[scale.axis]
      };
      return _applyStack(stack, value, meta.index, {
        mode
      });
    }
  }, {
    key: "updateRangeFromParsed",
    value: function updateRangeFromParsed(range, scale, parsed, stack) {
      const parsedValue = parsed[scale.axis];
      let value = parsedValue === null ? NaN : parsedValue;
      const values = stack && parsed._stacks[scale.axis];
      if (stack && values) {
        stack.values = values;
        value = _applyStack(stack, parsedValue, this._cachedMeta.index);
      }
      range.min = Math.min(range.min, value);
      range.max = Math.max(range.max, value);
    }
  }, {
    key: "getMinMax",
    value: function getMinMax(scale, canStack) {
      const meta = this._cachedMeta;
      const _parsed = meta._parsed;
      const sorted = meta._sorted && scale === meta.iScale;
      const ilen = _parsed.length;
      const otherScale = this._getOtherScale(scale);
      const stack = createStack(canStack, meta, this.chart);
      const range = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      const _getUserBounds = getUserBounds(otherScale),
        otherMin = _getUserBounds.min,
        otherMax = _getUserBounds.max;
      let i, parsed;
      function _skip() {
        parsed = _parsed[i];
        const otherValue = parsed[otherScale.axis];
        return !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
      }
      for (i = 0; i < ilen; ++i) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        if (sorted) {
          break;
        }
      }
      if (sorted) {
        for (i = ilen - 1; i >= 0; --i) {
          if (_skip()) {
            continue;
          }
          this.updateRangeFromParsed(range, scale, parsed, stack);
          break;
        }
      }
      return range;
    }
  }, {
    key: "getAllParsedValues",
    value: function getAllParsedValues(scale) {
      const parsed = this._cachedMeta._parsed;
      const values = [];
      let i, ilen, value;
      for (i = 0, ilen = parsed.length; i < ilen; ++i) {
        value = parsed[i][scale.axis];
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(value)) {
          values.push(value);
        }
      }
      return values;
    }
  }, {
    key: "getMaxOverflow",
    value: function getMaxOverflow() {
      return false;
    }
  }, {
    key: "getLabelAndValue",
    value: function getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const vScale = meta.vScale;
      const parsed = this.getParsed(index);
      return {
        label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
        value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
      };
    }
  }, {
    key: "_update",
    value: function _update(mode) {
      const meta = this._cachedMeta;
      this.update(mode || 'default');
      meta._clip = toClip(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
  }, {
    key: "update",
    value: function update(mode) {}
  }, {
    key: "draw",
    value: function draw() {
      const ctx = this._ctx;
      const chart = this.chart;
      const meta = this._cachedMeta;
      const elements = meta.data || [];
      const area = chart.chartArea;
      const active = [];
      const start = this._drawStart || 0;
      const count = this._drawCount || elements.length - start;
      const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
      let i;
      if (meta.dataset) {
        meta.dataset.draw(ctx, area, start, count);
      }
      for (i = start; i < start + count; ++i) {
        const element = elements[i];
        if (element.hidden) {
          continue;
        }
        if (element.active && drawActiveElementsOnTop) {
          active.push(element);
        } else {
          element.draw(ctx, area);
        }
      }
      for (i = 0; i < active.length; ++i) {
        active[i].draw(ctx, area);
      }
    }
  }, {
    key: "getStyle",
    value: function getStyle(index, active) {
      const mode = active ? 'active' : 'default';
      return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
  }, {
    key: "getContext",
    value: function getContext(index, active, mode) {
      const dataset = this.getDataset();
      let context;
      if (index >= 0 && index < this._cachedMeta.data.length) {
        const element = this._cachedMeta.data[index];
        context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
        context.parsed = this.getParsed(index);
        context.raw = dataset.data[index];
        context.index = context.dataIndex = index;
      } else {
        context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
        context.dataset = dataset;
        context.index = context.datasetIndex = this.index;
      }
      context.active = !!active;
      context.mode = mode;
      return context;
    }
  }, {
    key: "resolveDatasetElementOptions",
    value: function resolveDatasetElementOptions(mode) {
      return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
  }, {
    key: "resolveDataElementOptions",
    value: function resolveDataElementOptions(index, mode) {
      return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
  }, {
    key: "_resolveElementOptions",
    value: function _resolveElementOptions(elementType) {
      var _this3 = this;
      let mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
      let index = arguments.length > 2 ? arguments[2] : undefined;
      const active = mode === 'active';
      const cache = this._cachedDataOpts;
      const cacheKey = elementType + '-' + mode;
      const cached = cache[cacheKey];
      const sharing = this.enableOptionSharing && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["h"])(index);
      if (cached) {
        return cloneIfNotShared(cached, sharing);
      }
      const config = this.chart.config;
      const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
      const prefixes = active ? [`${elementType}Hover`, 'hover', elementType, ''] : [elementType, ''];
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      const names = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].elements[elementType]);
      const context = function () {
        return _this3.getContext(index, active);
      };
      const values = config.resolveNamedOptions(scopes, names, context, prefixes);
      if (values.$shared) {
        values.$shared = sharing;
        cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
      }
      return values;
    }
  }, {
    key: "_resolveAnimations",
    value: function _resolveAnimations(index, transition, active) {
      const chart = this.chart;
      const cache = this._cachedDataOpts;
      const cacheKey = `animation-${transition}`;
      const cached = cache[cacheKey];
      if (cached) {
        return cached;
      }
      let options;
      if (chart.options.animation !== false) {
        const config = this.chart.config;
        const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        options = config.createResolver(scopes, this.getContext(index, active, transition));
      }
      const animations = new Animations(chart, options && options.animations);
      if (options && options._cacheable) {
        cache[cacheKey] = Object.freeze(animations);
      }
      return animations;
    }
  }, {
    key: "getSharedOptions",
    value: function getSharedOptions(options) {
      if (!options.$shared) {
        return;
      }
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
  }, {
    key: "includeOptions",
    value: function includeOptions(mode, sharedOptions) {
      return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
  }, {
    key: "_getSharedOptions",
    value: function _getSharedOptions(start, mode) {
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const previouslySharedOptions = this._sharedOptions;
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
      return {
        sharedOptions,
        includeOptions
      };
    }
  }, {
    key: "updateElement",
    value: function updateElement(element, index, properties, mode) {
      if (isDirectUpdateMode(mode)) {
        Object.assign(element, properties);
      } else {
        this._resolveAnimations(index, mode).update(element, properties);
      }
    }
  }, {
    key: "updateSharedOptions",
    value: function updateSharedOptions(sharedOptions, mode, newOptions) {
      if (sharedOptions && !isDirectUpdateMode(mode)) {
        this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
      }
    }
  }, {
    key: "_setStyle",
    value: function _setStyle(element, index, mode, active) {
      element.active = active;
      const options = this.getStyle(index, active);
      this._resolveAnimations(index, mode, active).update(element, {
        options: !active && this.getSharedOptions(options) || options
      });
    }
  }, {
    key: "removeHoverStyle",
    value: function removeHoverStyle(element, datasetIndex, index) {
      this._setStyle(element, index, 'active', false);
    }
  }, {
    key: "setHoverStyle",
    value: function setHoverStyle(element, datasetIndex, index) {
      this._setStyle(element, index, 'active', true);
    }
  }, {
    key: "_removeDatasetHoverStyle",
    value: function _removeDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, undefined, 'active', false);
      }
    }
  }, {
    key: "_setDatasetHoverStyle",
    value: function _setDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, undefined, 'active', true);
      }
    }
  }, {
    key: "_resyncElements",
    value: function _resyncElements(resetNewElements) {
      const data = this._data;
      const elements = this._cachedMeta.data;
      var _iterator4 = _createForOfIteratorHelper(this._syncList),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          const _ref = _step4.value;
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref, 3);
          const method = _ref2[0];
          const arg1 = _ref2[1];
          const arg2 = _ref2[2];
          this[method](arg1, arg2);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      this._syncList = [];
      const numMeta = elements.length;
      const numData = data.length;
      const count = Math.min(numData, numMeta);
      if (count) {
        this.parse(0, count);
      }
      if (numData > numMeta) {
        this._insertElements(numMeta, numData - numMeta, resetNewElements);
      } else if (numData < numMeta) {
        this._removeElements(numData, numMeta - numData);
      }
    }
  }, {
    key: "_insertElements",
    value: function _insertElements(start, count) {
      let resetNewElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      const meta = this._cachedMeta;
      const data = meta.data;
      const end = start + count;
      let i;
      const move = function (arr) {
        arr.length += count;
        for (i = arr.length - 1; i >= end; i--) {
          arr[i] = arr[i - count];
        }
      };
      move(data);
      for (i = start; i < end; ++i) {
        data[i] = new this.dataElementType();
      }
      if (this._parsing) {
        move(meta._parsed);
      }
      this.parse(start, count);
      if (resetNewElements) {
        this.updateElements(data, start, count, 'reset');
      }
    }
  }, {
    key: "updateElements",
    value: function updateElements(element, start, count, mode) {}
  }, {
    key: "_removeElements",
    value: function _removeElements(start, count) {
      const meta = this._cachedMeta;
      if (this._parsing) {
        const removed = meta._parsed.splice(start, count);
        if (meta._stacked) {
          clearStacks(meta, removed);
        }
      }
      meta.data.splice(start, count);
    }
  }, {
    key: "_sync",
    value: function _sync(args) {
      if (this._parsing) {
        this._syncList.push(args);
      } else {
        const _args2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(args, 3),
          method = _args2[0],
          arg1 = _args2[1],
          arg2 = _args2[2];
        this[method](arg1, arg2);
      }
      this.chart._dataChanges.push([this.index].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(args)));
    }
  }, {
    key: "_onDataPush",
    value: function _onDataPush() {
      const count = arguments.length;
      this._sync(['_insertElements', this.getDataset().data.length - count, count]);
    }
  }, {
    key: "_onDataPop",
    value: function _onDataPop() {
      this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
    }
  }, {
    key: "_onDataShift",
    value: function _onDataShift() {
      this._sync(['_removeElements', 0, 1]);
    }
  }, {
    key: "_onDataSplice",
    value: function _onDataSplice(start, count) {
      if (count) {
        this._sync(['_removeElements', start, count]);
      }
      const newCount = arguments.length - 2;
      if (newCount) {
        this._sync(['_insertElements', start, newCount]);
      }
    }
  }, {
    key: "_onDataUnshift",
    value: function _onDataUnshift() {
      this._sync(['_insertElements', 0, arguments.length]);
    }
  }]);
  return DatasetController;
}();
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatasetController, "defaults", {});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatasetController, "datasetElementType", null);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DatasetController, "dataElementType", null);
function getAllScaleValues(scale, type) {
  if (!scale._cache.$bar) {
    const visibleMetas = scale.getMatchingVisibleMetas(type);
    let values = [];
    for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) {
      values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
    }
    scale._cache.$bar = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["_"])(values.sort(function (a, b) {
      return a - b;
    }));
  }
  return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
  const scale = meta.iScale;
  const values = getAllScaleValues(scale, meta.type);
  let min = scale._length;
  let i, ilen, curr, prev;
  const updateMinAndPrev = function () {
    if (curr === 32767 || curr === -32768) {
      return;
    }
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["h"])(prev)) {
      min = Math.min(min, Math.abs(curr - prev) || min);
    }
    prev = curr;
  };
  for (i = 0, ilen = values.length; i < ilen; ++i) {
    curr = scale.getPixelForValue(values[i]);
    updateMinAndPrev();
  }
  prev = undefined;
  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    updateMinAndPrev();
  }
  return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
  const thickness = options.barThickness;
  let size, ratio;
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(thickness)) {
    size = ruler.min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * stackCount;
    ratio = 1;
  }
  return {
    chunk: size / stackCount,
    ratio,
    start: ruler.pixels[index] - size / 2
  };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
  const pixels = ruler.pixels;
  const curr = pixels[index];
  let prev = index > 0 ? pixels[index - 1] : null;
  let next = index < pixels.length - 1 ? pixels[index + 1] : null;
  const percent = options.categoryPercentage;
  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }
  if (next === null) {
    next = curr + curr - prev;
  }
  const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  const size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / stackCount,
    ratio: options.barPercentage,
    start
  };
}
function parseFloatBar(entry, item, vScale, i) {
  const startValue = vScale.parse(entry[0], i);
  const endValue = vScale.parse(entry[1], i);
  const min = Math.min(startValue, endValue);
  const max = Math.max(startValue, endValue);
  let barStart = min;
  let barEnd = max;
  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }
  item[vScale.axis] = barEnd;
  item._custom = {
    barStart,
    barEnd,
    start: startValue,
    end: endValue,
    min,
    max
  };
}
function parseValue(entry, item, vScale, i) {
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(entry)) {
    parseFloatBar(entry, item, vScale, i);
  } else {
    item[vScale.axis] = vScale.parse(entry, i);
  }
  return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
  const iScale = meta.iScale;
  const vScale = meta.vScale;
  const labels = iScale.getLabels();
  const singleScale = iScale === vScale;
  const parsed = [];
  let i, ilen, item, entry;
  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    parsed.push(parseValue(entry, item, vScale, i));
  }
  return parsed;
}
function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
  if (size !== 0) {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["s"])(size);
  }
  return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
  let reverse, start, end, top, bottom;
  if (properties.horizontal) {
    reverse = properties.base > properties.x;
    start = 'left';
    end = 'right';
  } else {
    reverse = properties.base < properties.y;
    start = 'bottom';
    end = 'top';
  }
  if (reverse) {
    top = 'end';
    bottom = 'start';
  } else {
    top = 'start';
    bottom = 'end';
  }
  return {
    start,
    end,
    reverse,
    top,
    bottom
  };
}
function setBorderSkipped(properties, options, stack, index) {
  let edge = options.borderSkipped;
  const res = {};
  if (!edge) {
    properties.borderSkipped = res;
    return;
  }
  if (edge === true) {
    properties.borderSkipped = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    return;
  }
  const _borderProps = borderProps(properties),
    start = _borderProps.start,
    end = _borderProps.end,
    reverse = _borderProps.reverse,
    top = _borderProps.top,
    bottom = _borderProps.bottom;
  if (edge === 'middle' && stack) {
    properties.enableBorderRadius = true;
    if ((stack._top || 0) === index) {
      edge = top;
    } else if ((stack._bottom || 0) === index) {
      edge = bottom;
    } else {
      res[parseEdge(bottom, start, end, reverse)] = true;
      edge = top;
    }
  }
  res[parseEdge(edge, start, end, reverse)] = true;
  properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
  if (reverse) {
    edge = swap(edge, a, b);
    edge = startEnd(edge, b, a);
  } else {
    edge = startEnd(edge, a, b);
  }
  return edge;
}
function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
  return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, _ref3, ratio) {
  let inflateAmount = _ref3.inflateAmount;
  properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
let BarController = /*#__PURE__*/function (_DatasetController) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BarController, _DatasetController);
  var _super = _createSuper(BarController);
  function BarController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, BarController);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(BarController, [{
    key: "parsePrimitiveData",
    value: function parsePrimitiveData(meta, data, start, count) {
      return parseArrayOrPrimitive(meta, data, start, count);
    }
  }, {
    key: "parseArrayData",
    value: function parseArrayData(meta, data, start, count) {
      return parseArrayOrPrimitive(meta, data, start, count);
    }
  }, {
    key: "parseObjectData",
    value: function parseObjectData(meta, data, start, count) {
      const iScale = meta.iScale,
        vScale = meta.vScale;
      const _this$_parsing2 = this._parsing,
        _this$_parsing2$xAxis = _this$_parsing2.xAxisKey,
        xAxisKey = _this$_parsing2$xAxis === void 0 ? 'x' : _this$_parsing2$xAxis,
        _this$_parsing2$yAxis = _this$_parsing2.yAxisKey,
        yAxisKey = _this$_parsing2$yAxis === void 0 ? 'y' : _this$_parsing2$yAxis;
      const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
      const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
      const parsed = [];
      let i, ilen, item, obj;
      for (i = start, ilen = start + count; i < ilen; ++i) {
        obj = data[i];
        item = {};
        item[iScale.axis] = iScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["f"])(obj, iAxisKey), i);
        parsed.push(parseValue(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["f"])(obj, vAxisKey), item, vScale, i));
      }
      return parsed;
    }
  }, {
    key: "updateRangeFromParsed",
    value: function updateRangeFromParsed(range, scale, parsed, stack) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BarController.prototype), "updateRangeFromParsed", this).call(this, range, scale, parsed, stack);
      const custom = parsed._custom;
      if (custom && scale === this._cachedMeta.vScale) {
        range.min = Math.min(range.min, custom.min);
        range.max = Math.max(range.max, custom.max);
      }
    }
  }, {
    key: "getMaxOverflow",
    value: function getMaxOverflow() {
      return 0;
    }
  }, {
    key: "getLabelAndValue",
    value: function getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const iScale = meta.iScale,
        vScale = meta.vScale;
      const parsed = this.getParsed(index);
      const custom = parsed._custom;
      const value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
      return {
        label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
        value
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.enableOptionSharing = true;
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BarController.prototype), "initialize", this).call(this);
      const meta = this._cachedMeta;
      meta.stack = this.getDataset().stack;
    }
  }, {
    key: "update",
    value: function update(mode) {
      const meta = this._cachedMeta;
      this.updateElements(meta.data, 0, meta.data.length, mode);
    }
  }, {
    key: "updateElements",
    value: function updateElements(bars, start, count, mode) {
      const reset = mode === 'reset';
      const index = this.index,
        vScale = this._cachedMeta.vScale;
      const base = vScale.getBasePixel();
      const horizontal = vScale.isHorizontal();
      const ruler = this._getRuler();
      const _this$_getSharedOptio = this._getSharedOptions(start, mode),
        sharedOptions = _this$_getSharedOptio.sharedOptions,
        includeOptions = _this$_getSharedOptio.includeOptions;
      for (let i = start; i < start + count; i++) {
        const parsed = this.getParsed(i);
        const vpixels = reset || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(parsed[vScale.axis]) ? {
          base,
          head: base
        } : this._calculateBarValuePixels(i);
        const ipixels = this._calculateBarIndexPixels(i, ruler);
        const stack = (parsed._stacks || {})[vScale.axis];
        const properties = {
          horizontal,
          base: vpixels.base,
          enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
          x: horizontal ? vpixels.head : ipixels.center,
          y: horizontal ? ipixels.center : vpixels.head,
          height: horizontal ? ipixels.size : Math.abs(vpixels.size),
          width: horizontal ? Math.abs(vpixels.size) : ipixels.size
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
        }
        const options = properties.options || bars[i].options;
        setBorderSkipped(properties, options, stack, index);
        setInflateAmount(properties, options, ruler.ratio);
        this.updateElement(bars[i], i, properties, mode);
      }
    }
  }, {
    key: "_getStacks",
    value: function _getStacks(last, dataIndex) {
      const iScale = this._cachedMeta.iScale;
      const metasets = iScale.getMatchingVisibleMetas(this._type).filter(function (meta) {
        return meta.controller.options.grouped;
      });
      const stacked = iScale.options.stacked;
      const stacks = [];
      const skipNull = function (meta) {
        const parsed = meta.controller.getParsed(dataIndex);
        const val = parsed && parsed[meta.vScale.axis];
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(val) || isNaN(val)) {
          return true;
        }
      };
      var _iterator5 = _createForOfIteratorHelper(metasets),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          const meta = _step5.value;
          if (dataIndex !== undefined && skipNull(meta)) {
            continue;
          }
          if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
            stacks.push(meta.stack);
          }
          if (meta.index === last) {
            break;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (!stacks.length) {
        stacks.push(undefined);
      }
      return stacks;
    }
  }, {
    key: "_getStackCount",
    value: function _getStackCount(index) {
      return this._getStacks(undefined, index).length;
    }
  }, {
    key: "_getStackIndex",
    value: function _getStackIndex(datasetIndex, name, dataIndex) {
      const stacks = this._getStacks(datasetIndex, dataIndex);
      const index = name !== undefined ? stacks.indexOf(name) : -1;
      return index === -1 ? stacks.length - 1 : index;
    }
  }, {
    key: "_getRuler",
    value: function _getRuler() {
      const opts = this.options;
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const pixels = [];
      let i, ilen;
      for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
        pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
      }
      const barThickness = opts.barThickness;
      const min = barThickness || computeMinSampleSize(meta);
      return {
        min,
        pixels,
        start: iScale._startPixel,
        end: iScale._endPixel,
        stackCount: this._getStackCount(),
        scale: iScale,
        grouped: opts.grouped,
        ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
      };
    }
  }, {
    key: "_calculateBarValuePixels",
    value: function _calculateBarValuePixels(index) {
      const _this$_cachedMeta = this._cachedMeta,
        vScale = _this$_cachedMeta.vScale,
        _stacked = _this$_cachedMeta._stacked,
        _this$options = this.options,
        baseValue = _this$options.base,
        minBarLength = _this$options.minBarLength;
      const actualBase = baseValue || 0;
      const parsed = this.getParsed(index);
      const custom = parsed._custom;
      const floating = isFloatBar(custom);
      let value = parsed[vScale.axis];
      let start = 0;
      let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
      let head, size;
      if (length !== value) {
        start = length - value;
        length = value;
      }
      if (floating) {
        value = custom.barStart;
        length = custom.barEnd - custom.barStart;
        if (value !== 0 && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["s"])(value) !== Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["s"])(custom.barEnd)) {
          start = 0;
        }
        start += value;
      }
      const startValue = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(baseValue) && !floating ? baseValue : start;
      let base = vScale.getPixelForValue(startValue);
      if (this.chart.getDataVisibility(index)) {
        head = vScale.getPixelForValue(start + length);
      } else {
        head = base;
      }
      size = head - base;
      if (Math.abs(size) < minBarLength) {
        size = barSign(size, vScale, actualBase) * minBarLength;
        if (value === actualBase) {
          base -= size / 2;
        }
        const startPixel = vScale.getPixelForDecimal(0);
        const endPixel = vScale.getPixelForDecimal(1);
        const min = Math.min(startPixel, endPixel);
        const max = Math.max(startPixel, endPixel);
        base = Math.max(Math.min(base, max), min);
        head = base + size;
      }
      if (base === vScale.getPixelForValue(actualBase)) {
        const halfGrid = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["s"])(size) * vScale.getLineWidthForValue(actualBase) / 2;
        base += halfGrid;
        size -= halfGrid;
      }
      return {
        size,
        base,
        head,
        center: head + size / 2
      };
    }
  }, {
    key: "_calculateBarIndexPixels",
    value: function _calculateBarIndexPixels(index, ruler) {
      const scale = ruler.scale;
      const options = this.options;
      const skipNull = options.skipNull;
      const maxBarThickness = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(options.maxBarThickness, Infinity);
      let center, size;
      if (ruler.grouped) {
        const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
        const range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
        const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
        center = range.start + range.chunk * stackIndex + range.chunk / 2;
        size = Math.min(maxBarThickness, range.chunk * range.ratio);
      } else {
        center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
        size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
      }
      return {
        base: center - size / 2,
        head: center + size / 2,
        center,
        size
      };
    }
  }, {
    key: "draw",
    value: function draw() {
      const meta = this._cachedMeta;
      const vScale = meta.vScale;
      const rects = meta.data;
      const ilen = rects.length;
      let i = 0;
      for (; i < ilen; ++i) {
        if (this.getParsed(i)[vScale.axis] !== null) {
          rects[i].draw(this._ctx);
        }
      }
    }
  }]);
  return BarController;
}(DatasetController);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BarController, "id", 'bar');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BarController, "defaults", {
  datasetElementType: false,
  dataElementType: 'bar',
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: true,
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'base', 'width', 'height']
    }
  }
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BarController, "overrides", {
  scales: {
    _index_: {
      type: 'category',
      offset: true,
      grid: {
        offset: true
      }
    },
    _value_: {
      type: 'linear',
      beginAtZero: true
    }
  }
});
let BubbleController = /*#__PURE__*/function (_DatasetController2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BubbleController, _DatasetController2);
  var _super2 = _createSuper(BubbleController);
  function BubbleController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, BubbleController);
    return _super2.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(BubbleController, [{
    key: "initialize",
    value: function initialize() {
      this.enableOptionSharing = true;
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BubbleController.prototype), "initialize", this).call(this);
    }
  }, {
    key: "parsePrimitiveData",
    value: function parsePrimitiveData(meta, data, start, count) {
      const parsed = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BubbleController.prototype), "parsePrimitiveData", this).call(this, meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
      }
      return parsed;
    }
  }, {
    key: "parseArrayData",
    value: function parseArrayData(meta, data, start, count) {
      const parsed = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BubbleController.prototype), "parseArrayData", this).call(this, meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        const item = data[start + i];
        parsed[i]._custom = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(item[2], this.resolveDataElementOptions(i + start).radius);
      }
      return parsed;
    }
  }, {
    key: "parseObjectData",
    value: function parseObjectData(meta, data, start, count) {
      const parsed = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BubbleController.prototype), "parseObjectData", this).call(this, meta, data, start, count);
      for (let i = 0; i < parsed.length; i++) {
        const item = data[start + i];
        parsed[i]._custom = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
      }
      return parsed;
    }
  }, {
    key: "getMaxOverflow",
    value: function getMaxOverflow() {
      const data = this._cachedMeta.data;
      let max = 0;
      for (let i = data.length - 1; i >= 0; --i) {
        max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
      }
      return max > 0 && max;
    }
  }, {
    key: "getLabelAndValue",
    value: function getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const labels = this.chart.data.labels || [];
      const xScale = meta.xScale,
        yScale = meta.yScale;
      const parsed = this.getParsed(index);
      const x = xScale.getLabelForValue(parsed.x);
      const y = yScale.getLabelForValue(parsed.y);
      const r = parsed._custom;
      return {
        label: labels[index] || '',
        value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
      };
    }
  }, {
    key: "update",
    value: function update(mode) {
      const points = this._cachedMeta.data;
      this.updateElements(points, 0, points.length, mode);
    }
  }, {
    key: "updateElements",
    value: function updateElements(points, start, count, mode) {
      const reset = mode === 'reset';
      const _this$_cachedMeta2 = this._cachedMeta,
        iScale = _this$_cachedMeta2.iScale,
        vScale = _this$_cachedMeta2.vScale;
      const _this$_getSharedOptio2 = this._getSharedOptions(start, mode),
        sharedOptions = _this$_getSharedOptio2.sharedOptions,
        includeOptions = _this$_getSharedOptio2.includeOptions;
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      for (let i = start; i < start + count; i++) {
        const point = points[i];
        const parsed = !reset && this.getParsed(i);
        const properties = {};
        const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
        const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
        properties.skip = isNaN(iPixel) || isNaN(vPixel);
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
          if (reset) {
            properties.options.radius = 0;
          }
        }
        this.updateElement(point, i, properties, mode);
      }
    }
  }, {
    key: "resolveDataElementOptions",
    value: function resolveDataElementOptions(index, mode) {
      const parsed = this.getParsed(index);
      let values = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BubbleController.prototype), "resolveDataElementOptions", this).call(this, index, mode);
      if (values.$shared) {
        values = Object.assign({}, values, {
          $shared: false
        });
      }
      const radius = values.radius;
      if (mode !== 'active') {
        values.radius = 0;
      }
      values.radius += Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(parsed && parsed._custom, radius);
      return values;
    }
  }]);
  return BubbleController;
}(DatasetController);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BubbleController, "id", 'bubble');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BubbleController, "defaults", {
  datasetElementType: false,
  dataElementType: 'point',
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'borderWidth', 'radius']
    }
  }
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BubbleController, "overrides", {
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
});
function getRatioAndOffset(rotation, circumference, cutout) {
  let ratioX = 1;
  let ratioY = 1;
  let offsetX = 0;
  let offsetY = 0;
  if (circumference < _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"]) {
    const startAngle = rotation;
    const endAngle = startAngle + circumference;
    const startX = Math.cos(startAngle);
    const startY = Math.sin(startAngle);
    const endX = Math.cos(endAngle);
    const endY = Math.sin(endAngle);
    const calcMax = function (angle, a, b) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["p"])(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
    };
    const calcMin = function (angle, a, b) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["p"])(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
    };
    const maxX = calcMax(0, startX, endX);
    const maxY = calcMax(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"], startY, endY);
    const minX = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"], startX, endX);
    const minY = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"] + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"], startY, endY);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }
  return {
    ratioX,
    ratioY,
    offsetX,
    offsetY
  };
}
let DoughnutController = /*#__PURE__*/function (_DatasetController3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DoughnutController, _DatasetController3);
  var _super3 = _createSuper(DoughnutController);
  function DoughnutController(chart, datasetIndex) {
    var _this4;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, DoughnutController);
    _this4 = _super3.call(this, chart, datasetIndex);
    _this4.enableOptionSharing = true;
    _this4.innerRadius = undefined;
    _this4.outerRadius = undefined;
    _this4.offsetX = undefined;
    _this4.offsetY = undefined;
    return _this4;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(DoughnutController, [{
    key: "linkScales",
    value: function linkScales() {}
  }, {
    key: "parse",
    value: function parse(start, count) {
      const data = this.getDataset().data;
      const meta = this._cachedMeta;
      if (this._parsing === false) {
        meta._parsed = data;
      } else {
        let getter = function (i) {
          return +data[i];
        };
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(data[start])) {
          const _this$_parsing$key = this._parsing.key,
            key = _this$_parsing$key === void 0 ? 'value' : _this$_parsing$key;
          getter = function (i) {
            return +Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["f"])(data[i], key);
          };
        }
        let i, ilen;
        for (i = start, ilen = start + count; i < ilen; ++i) {
          meta._parsed[i] = getter(i);
        }
      }
    }
  }, {
    key: "_getRotation",
    value: function _getRotation() {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.options.rotation - 90);
    }
  }, {
    key: "_getCircumference",
    value: function _getCircumference() {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.options.circumference);
    }
  }, {
    key: "_getRotationExtents",
    value: function _getRotationExtents() {
      let min = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"];
      let max = -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"];
      for (let i = 0; i < this.chart.data.datasets.length; ++i) {
        if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
          const controller = this.chart.getDatasetMeta(i).controller;
          const rotation = controller._getRotation();
          const circumference = controller._getCircumference();
          min = Math.min(min, rotation);
          max = Math.max(max, rotation + circumference);
        }
      }
      return {
        rotation: min,
        circumference: max - min
      };
    }
  }, {
    key: "update",
    value: function update(mode) {
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const meta = this._cachedMeta;
      const arcs = meta.data;
      const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
      const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
      const cutout = Math.min(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["m"])(this.options.cutout, maxSize), 1);
      const chartWeight = this._getRingWeight(this.index);
      const _this$_getRotationExt = this._getRotationExtents(),
        circumference = _this$_getRotationExt.circumference,
        rotation = _this$_getRotationExt.rotation;
      const _getRatioAndOffset = getRatioAndOffset(rotation, circumference, cutout),
        ratioX = _getRatioAndOffset.ratioX,
        ratioY = _getRatioAndOffset.ratioY,
        offsetX = _getRatioAndOffset.offsetX,
        offsetY = _getRatioAndOffset.offsetY;
      const maxWidth = (chartArea.width - spacing) / ratioX;
      const maxHeight = (chartArea.height - spacing) / ratioY;
      const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
      const outerRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["n"])(this.options.radius, maxRadius);
      const innerRadius = Math.max(outerRadius * cutout, 0);
      const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
      this.offsetX = offsetX * outerRadius;
      this.offsetY = offsetY * outerRadius;
      meta.total = this.calculateTotal();
      this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
      this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
      this.updateElements(arcs, 0, arcs.length, mode);
    }
  }, {
    key: "_circumference",
    value: function _circumference(i, reset) {
      const opts = this.options;
      const meta = this._cachedMeta;
      const circumference = this._getCircumference();
      if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
        return 0;
      }
      return this.calculateCircumference(meta._parsed[i] * circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"]);
    }
  }, {
    key: "updateElements",
    value: function updateElements(arcs, start, count, mode) {
      const reset = mode === 'reset';
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const opts = chart.options;
      const animationOpts = opts.animation;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const animateScale = reset && animationOpts.animateScale;
      const innerRadius = animateScale ? 0 : this.innerRadius;
      const outerRadius = animateScale ? 0 : this.outerRadius;
      const _this$_getSharedOptio3 = this._getSharedOptions(start, mode),
        sharedOptions = _this$_getSharedOptio3.sharedOptions,
        includeOptions = _this$_getSharedOptio3.includeOptions;
      let startAngle = this._getRotation();
      let i;
      for (i = 0; i < start; ++i) {
        startAngle += this._circumference(i, reset);
      }
      for (i = start; i < start + count; ++i) {
        const circumference = this._circumference(i, reset);
        const arc = arcs[i];
        const properties = {
          x: centerX + this.offsetX,
          y: centerY + this.offsetY,
          startAngle,
          endAngle: startAngle + circumference,
          circumference,
          outerRadius,
          innerRadius
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
        }
        startAngle += circumference;
        this.updateElement(arc, i, properties, mode);
      }
    }
  }, {
    key: "calculateTotal",
    value: function calculateTotal() {
      const meta = this._cachedMeta;
      const metaData = meta.data;
      let total = 0;
      let i;
      for (i = 0; i < metaData.length; i++) {
        const value = meta._parsed[i];
        if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
          total += Math.abs(value);
        }
      }
      return total;
    }
  }, {
    key: "calculateCircumference",
    value: function calculateCircumference(value) {
      const total = this._cachedMeta.total;
      if (total > 0 && !isNaN(value)) {
        return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"] * (Math.abs(value) / total);
      }
      return 0;
    }
  }, {
    key: "getLabelAndValue",
    value: function getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const chart = this.chart;
      const labels = chart.data.labels || [];
      const value = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["o"])(meta._parsed[index], chart.options.locale);
      return {
        label: labels[index] || '',
        value
      };
    }
  }, {
    key: "getMaxBorderWidth",
    value: function getMaxBorderWidth(arcs) {
      let max = 0;
      const chart = this.chart;
      let i, ilen, meta, controller, options;
      if (!arcs) {
        for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
          if (chart.isDatasetVisible(i)) {
            meta = chart.getDatasetMeta(i);
            arcs = meta.data;
            controller = meta.controller;
            break;
          }
        }
      }
      if (!arcs) {
        return 0;
      }
      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        options = controller.resolveDataElementOptions(i);
        if (options.borderAlign !== 'inner') {
          max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
      }
      return max;
    }
  }, {
    key: "getMaxOffset",
    value: function getMaxOffset(arcs) {
      let max = 0;
      for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
        const options = this.resolveDataElementOptions(i);
        max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
      }
      return max;
    }
  }, {
    key: "_getRingWeightOffset",
    value: function _getRingWeightOffset(datasetIndex) {
      let ringWeightOffset = 0;
      for (let i = 0; i < datasetIndex; ++i) {
        if (this.chart.isDatasetVisible(i)) {
          ringWeightOffset += this._getRingWeight(i);
        }
      }
      return ringWeightOffset;
    }
  }, {
    key: "_getRingWeight",
    value: function _getRingWeight(datasetIndex) {
      return Math.max(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
  }, {
    key: "_getVisibleDatasetWeightTotal",
    value: function _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  }]);
  return DoughnutController;
}(DatasetController);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DoughnutController, "id", 'doughnut');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DoughnutController, "defaults", {
  datasetElementType: false,
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth', 'spacing']
    }
  },
  cutout: '50%',
  rotation: 0,
  circumference: 360,
  radius: '100%',
  spacing: 0,
  indexAxis: 'r'
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DoughnutController, "descriptors", {
  _scriptable: function (name) {
    return name !== 'spacing';
  },
  _indexable: function (name) {
    return name !== 'spacing';
  }
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(DoughnutController, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const _chart$legend$options2 = chart.legend.options.labels,
              pointStyle = _chart$legend$options2.pointStyle,
              color = _chart$legend$options2.color;
            return data.labels.map(function (label, i) {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                fontColor: color,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    }
  }
});
let LineController = /*#__PURE__*/function (_DatasetController4) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LineController, _DatasetController4);
  var _super4 = _createSuper(LineController);
  function LineController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, LineController);
    return _super4.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(LineController, [{
    key: "initialize",
    value: function initialize() {
      this.enableOptionSharing = true;
      this.supportsDecimation = true;
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LineController.prototype), "initialize", this).call(this);
    }
  }, {
    key: "update",
    value: function update(mode) {
      const meta = this._cachedMeta;
      const line = meta.dataset,
        _meta$data = meta.data,
        points = _meta$data === void 0 ? [] : _meta$data,
        _dataset = meta._dataset;
      const animationsDisabled = this.chart._animationsDisabled;
      let _getStartAndCountOfVi = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["q"])(meta, points, animationsDisabled),
        start = _getStartAndCountOfVi.start,
        count = _getStartAndCountOfVi.count;
      this._drawStart = start;
      this._drawCount = count;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["w"])(meta)) {
        start = 0;
        count = points.length;
      }
      line._chart = this.chart;
      line._datasetIndex = this.index;
      line._decimated = !!_dataset._decimated;
      line.points = points;
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      options.segment = this.options.segment;
      this.updateElement(line, undefined, {
        animated: !animationsDisabled,
        options
      }, mode);
      this.updateElements(points, start, count, mode);
    }
  }, {
    key: "updateElements",
    value: function updateElements(points, start, count, mode) {
      const reset = mode === 'reset';
      const _this$_cachedMeta3 = this._cachedMeta,
        iScale = _this$_cachedMeta3.iScale,
        vScale = _this$_cachedMeta3.vScale,
        _stacked = _this$_cachedMeta3._stacked,
        _dataset = _this$_cachedMeta3._dataset;
      const _this$_getSharedOptio4 = this._getSharedOptions(start, mode),
        sharedOptions = _this$_getSharedOptio4.sharedOptions,
        includeOptions = _this$_getSharedOptio4.includeOptions;
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const _this$options2 = this.options,
        spanGaps = _this$options2.spanGaps,
        segment = _this$options2.segment;
      const maxGapLength = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["x"])(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
      const end = start + count;
      const pointsCount = points.length;
      let prevParsed = start > 0 && this.getParsed(start - 1);
      for (let i = 0; i < pointsCount; ++i) {
        const point = points[i];
        const properties = directUpdate ? point : {};
        if (i < start || i >= end) {
          properties.skip = true;
          continue;
        }
        const parsed = this.getParsed(i);
        const nullData = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i, properties, mode);
        }
        prevParsed = parsed;
      }
    }
  }, {
    key: "getMaxOverflow",
    value: function getMaxOverflow() {
      const meta = this._cachedMeta;
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      const data = meta.data || [];
      if (!data.length) {
        return border;
      }
      const firstPoint = data[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
  }, {
    key: "draw",
    value: function draw() {
      const meta = this._cachedMeta;
      meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LineController.prototype), "draw", this).call(this);
    }
  }]);
  return LineController;
}(DatasetController);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LineController, "id", 'line');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LineController, "defaults", {
  datasetElementType: 'line',
  dataElementType: 'point',
  showLine: true,
  spanGaps: false
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LineController, "overrides", {
  scales: {
    _index_: {
      type: 'category'
    },
    _value_: {
      type: 'linear'
    }
  }
});
let PolarAreaController = /*#__PURE__*/function (_DatasetController5) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PolarAreaController, _DatasetController5);
  var _super5 = _createSuper(PolarAreaController);
  function PolarAreaController(chart, datasetIndex) {
    var _this5;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, PolarAreaController);
    _this5 = _super5.call(this, chart, datasetIndex);
    _this5.innerRadius = undefined;
    _this5.outerRadius = undefined;
    return _this5;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(PolarAreaController, [{
    key: "getLabelAndValue",
    value: function getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const chart = this.chart;
      const labels = chart.data.labels || [];
      const value = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["o"])(meta._parsed[index].r, chart.options.locale);
      return {
        label: labels[index] || '',
        value
      };
    }
  }, {
    key: "parseObjectData",
    value: function parseObjectData(meta, data, start, count) {
      return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["y"].bind(this)(meta, data, start, count);
    }
  }, {
    key: "update",
    value: function update(mode) {
      const arcs = this._cachedMeta.data;
      this._updateRadius();
      this.updateElements(arcs, 0, arcs.length, mode);
    }
  }, {
    key: "getMinMax",
    value: function getMinMax() {
      var _this6 = this;
      const meta = this._cachedMeta;
      const range = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      meta.data.forEach(function (element, index) {
        const parsed = _this6.getParsed(index).r;
        if (!isNaN(parsed) && _this6.chart.getDataVisibility(index)) {
          if (parsed < range.min) {
            range.min = parsed;
          }
          if (parsed > range.max) {
            range.max = parsed;
          }
        }
      });
      return range;
    }
  }, {
    key: "_updateRadius",
    value: function _updateRadius() {
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const opts = chart.options;
      const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      const outerRadius = Math.max(minSize / 2, 0);
      const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
      const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
      this.outerRadius = outerRadius - radiusLength * this.index;
      this.innerRadius = this.outerRadius - radiusLength;
    }
  }, {
    key: "updateElements",
    value: function updateElements(arcs, start, count, mode) {
      const reset = mode === 'reset';
      const chart = this.chart;
      const opts = chart.options;
      const animationOpts = opts.animation;
      const scale = this._cachedMeta.rScale;
      const centerX = scale.xCenter;
      const centerY = scale.yCenter;
      const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"];
      let angle = datasetStartAngle;
      let i;
      const defaultAngle = 360 / this.countVisibleElements();
      for (i = 0; i < start; ++i) {
        angle += this._computeAngle(i, mode, defaultAngle);
      }
      for (i = start; i < start + count; i++) {
        const arc = arcs[i];
        let startAngle = angle;
        let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
        let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
        angle = endAngle;
        if (reset) {
          if (animationOpts.animateScale) {
            outerRadius = 0;
          }
          if (animationOpts.animateRotate) {
            startAngle = endAngle = datasetStartAngle;
          }
        }
        const properties = {
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius,
          startAngle,
          endAngle,
          options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
        };
        this.updateElement(arc, i, properties, mode);
      }
    }
  }, {
    key: "countVisibleElements",
    value: function countVisibleElements() {
      var _this7 = this;
      const meta = this._cachedMeta;
      let count = 0;
      meta.data.forEach(function (element, index) {
        if (!isNaN(_this7.getParsed(index).r) && _this7.chart.getDataVisibility(index)) {
          count++;
        }
      });
      return count;
    }
  }, {
    key: "_computeAngle",
    value: function _computeAngle(index, mode, defaultAngle) {
      return this.chart.getDataVisibility(index) ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
  }]);
  return PolarAreaController;
}(DatasetController);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(PolarAreaController, "id", 'polarArea');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(PolarAreaController, "defaults", {
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: true
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    }
  },
  indexAxis: 'r',
  startAngle: 0
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(PolarAreaController, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(chart) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            const _chart$legend$options3 = chart.legend.options.labels,
              pointStyle = _chart$legend$options3.pointStyle,
              color = _chart$legend$options3.color;
            return data.labels.map(function (label, i) {
              const meta = chart.getDatasetMeta(0);
              const style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                fontColor: color,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      beginAtZero: true,
      grid: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      startAngle: 0
    }
  }
});
let PieController = /*#__PURE__*/function (_DoughnutController) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PieController, _DoughnutController);
  var _super6 = _createSuper(PieController);
  function PieController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, PieController);
    return _super6.apply(this, arguments);
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(PieController);
}(DoughnutController);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(PieController, "id", 'pie');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(PieController, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: '100%'
});
let RadarController = /*#__PURE__*/function (_DatasetController6) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(RadarController, _DatasetController6);
  var _super7 = _createSuper(RadarController);
  function RadarController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, RadarController);
    return _super7.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(RadarController, [{
    key: "getLabelAndValue",
    value: function getLabelAndValue(index) {
      const vScale = this._cachedMeta.vScale;
      const parsed = this.getParsed(index);
      return {
        label: vScale.getLabels()[index],
        value: '' + vScale.getLabelForValue(parsed[vScale.axis])
      };
    }
  }, {
    key: "parseObjectData",
    value: function parseObjectData(meta, data, start, count) {
      return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["y"].bind(this)(meta, data, start, count);
    }
  }, {
    key: "update",
    value: function update(mode) {
      const meta = this._cachedMeta;
      const line = meta.dataset;
      const points = meta.data || [];
      const labels = meta.iScale.getLabels();
      line.points = points;
      if (mode !== 'resize') {
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) {
          options.borderWidth = 0;
        }
        const properties = {
          _loop: true,
          _fullLoop: labels.length === points.length,
          options
        };
        this.updateElement(line, undefined, properties, mode);
      }
      this.updateElements(points, 0, points.length, mode);
    }
  }, {
    key: "updateElements",
    value: function updateElements(points, start, count, mode) {
      const scale = this._cachedMeta.rScale;
      const reset = mode === 'reset';
      for (let i = start; i < start + count; i++) {
        const point = points[i];
        const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
        const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
        const x = reset ? scale.xCenter : pointPosition.x;
        const y = reset ? scale.yCenter : pointPosition.y;
        const properties = {
          x,
          y,
          angle: pointPosition.angle,
          skip: isNaN(x) || isNaN(y),
          options
        };
        this.updateElement(point, i, properties, mode);
      }
    }
  }]);
  return RadarController;
}(DatasetController);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(RadarController, "id", 'radar');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(RadarController, "defaults", {
  datasetElementType: 'line',
  dataElementType: 'point',
  indexAxis: 'r',
  showLine: true,
  elements: {
    line: {
      fill: 'start'
    }
  }
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(RadarController, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: 'radialLinear'
    }
  }
});
let ScatterController = /*#__PURE__*/function (_DatasetController7) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ScatterController, _DatasetController7);
  var _super8 = _createSuper(ScatterController);
  function ScatterController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, ScatterController);
    return _super8.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(ScatterController, [{
    key: "getLabelAndValue",
    value: function getLabelAndValue(index) {
      const meta = this._cachedMeta;
      const labels = this.chart.data.labels || [];
      const xScale = meta.xScale,
        yScale = meta.yScale;
      const parsed = this.getParsed(index);
      const x = xScale.getLabelForValue(parsed.x);
      const y = yScale.getLabelForValue(parsed.y);
      return {
        label: labels[index] || '',
        value: '(' + x + ', ' + y + ')'
      };
    }
  }, {
    key: "update",
    value: function update(mode) {
      const meta = this._cachedMeta;
      const _meta$data2 = meta.data,
        points = _meta$data2 === void 0 ? [] : _meta$data2;
      const animationsDisabled = this.chart._animationsDisabled;
      let _getStartAndCountOfVi2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["q"])(meta, points, animationsDisabled),
        start = _getStartAndCountOfVi2.start,
        count = _getStartAndCountOfVi2.count;
      this._drawStart = start;
      this._drawCount = count;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["w"])(meta)) {
        start = 0;
        count = points.length;
      }
      if (this.options.showLine) {
        const line = meta.dataset,
          _dataset = meta._dataset;
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
          animated: !animationsDisabled,
          options
        }, mode);
      }
      this.updateElements(points, start, count, mode);
    }
  }, {
    key: "addElements",
    value: function addElements() {
      const showLine = this.options.showLine;
      if (!this.datasetElementType && showLine) {
        this.datasetElementType = this.chart.registry.getElement('line');
      }
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ScatterController.prototype), "addElements", this).call(this);
    }
  }, {
    key: "updateElements",
    value: function updateElements(points, start, count, mode) {
      const reset = mode === 'reset';
      const _this$_cachedMeta4 = this._cachedMeta,
        iScale = _this$_cachedMeta4.iScale,
        vScale = _this$_cachedMeta4.vScale,
        _stacked = _this$_cachedMeta4._stacked,
        _dataset = _this$_cachedMeta4._dataset;
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const _this$options3 = this.options,
        spanGaps = _this$options3.spanGaps,
        segment = _this$options3.segment;
      const maxGapLength = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["x"])(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
      let prevParsed = start > 0 && this.getParsed(start - 1);
      for (let i = start; i < start + count; ++i) {
        const point = points[i];
        const parsed = this.getParsed(i);
        const properties = directUpdate ? point : {};
        const nullData = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i, properties, mode);
        }
        prevParsed = parsed;
      }
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
  }, {
    key: "getMaxOverflow",
    value: function getMaxOverflow() {
      const meta = this._cachedMeta;
      const data = meta.data || [];
      if (!this.options.showLine) {
        let max = 0;
        for (let i = data.length - 1; i >= 0; --i) {
          max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        }
        return max > 0 && max;
      }
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      if (!data.length) {
        return border;
      }
      const firstPoint = data[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
  }]);
  return ScatterController;
}(DatasetController);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ScatterController, "id", 'scatter');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ScatterController, "defaults", {
  datasetElementType: false,
  dataElementType: 'point',
  showLine: false,
  fill: false
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ScatterController, "overrides", {
  interaction: {
    mode: 'point'
  },
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
});
var controllers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BarController: BarController,
  BubbleController: BubbleController,
  DoughnutController: DoughnutController,
  LineController: LineController,
  PolarAreaController: PolarAreaController,
  PieController: PieController,
  RadarController: RadarController,
  ScatterController: ScatterController
});

/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */
function abstract() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */
let DateAdapterBase = /*#__PURE__*/function () {
  function DateAdapterBase(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, DateAdapterBase);
    this.options = options || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(DateAdapterBase, [{
    key: "init",
    value: function init() {}
  }, {
    key: "formats",
    value: function formats() {
      return abstract();
    }
  }, {
    key: "parse",
    value: function parse() {
      return abstract();
    }
  }, {
    key: "format",
    value: function format() {
      return abstract();
    }
  }, {
    key: "add",
    value: function add() {
      return abstract();
    }
  }, {
    key: "diff",
    value: function diff() {
      return abstract();
    }
  }, {
    key: "startOf",
    value: function startOf() {
      return abstract();
    }
  }, {
    key: "endOf",
    value: function endOf() {
      return abstract();
    }
  }], [{
    key: "override",
    value:
    /**
    * Override default date adapter methods.
    * Accepts type parameter to define options type.
    * @example
    * Chart._adapters._date.override<{myAdapterOption: string}>({
    *   init() {
    *     console.log(this.options.myAdapterOption);
    *   }
    * })
    */
    function override(members) {
      Object.assign(DateAdapterBase.prototype, members);
    }
  }]);
  return DateAdapterBase;
}();
var adapters = {
  _date: DateAdapterBase
};
function binarySearch(metaset, axis, value, intersect) {
  const controller = metaset.controller,
    data = metaset.data,
    _sorted = metaset._sorted;
  const iScale = controller._cachedMeta.iScale;
  if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
    const lookupMethod = iScale._reversePixels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["A"] : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["B"];
    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      const el = data[0];
      const range = typeof el.getRange === 'function' && el.getRange(axis);
      if (range) {
        const start = lookupMethod(data, axis, value - range);
        const end = lookupMethod(data, axis, value + range);
        return {
          lo: start.lo,
          hi: end.hi
        };
      }
    }
  }
  return {
    lo: 0,
    hi: data.length - 1
  };
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  const value = position[axis];
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    const _metasets$i = metasets[i],
      index = _metasets$i.index,
      data = _metasets$i.data;
    const _binarySearch = binarySearch(metasets[i], axis, value, intersect),
      lo = _binarySearch.lo,
      hi = _binarySearch.hi;
    for (let j = lo; j <= hi; ++j) {
      const element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function getDistanceMetricForAxis(axis) {
  const useX = axis.indexOf('x') !== -1;
  const useY = axis.indexOf('y') !== -1;
  return function (pt1, pt2) {
    const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
  const items = [];
  if (!includeInvisible && !chart.isPointInArea(position)) {
    return items;
  }
  const evaluationFunc = function (element, datasetIndex, index) {
    if (!includeInvisible && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["C"])(element, chart.chartArea, 0)) {
      return;
    }
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  };
  evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
  return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
  let items = [];
  function evaluationFunc(element, datasetIndex, index) {
    const _element$getProps = element.getProps(['startAngle', 'endAngle'], useFinalPosition),
      startAngle = _element$getProps.startAngle,
      endAngle = _element$getProps.endAngle;
    const _getAngleFromPoint = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["D"])(element, {
        x: position.x,
        y: position.y
      }),
      angle = _getAngleFromPoint.angle;
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["p"])(angle, startAngle, endAngle)) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  }
  evaluateInteractionItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
  let items = [];
  const distanceMetric = getDistanceMetricForAxis(axis);
  let minDistance = Number.POSITIVE_INFINITY;
  function evaluationFunc(element, datasetIndex, index) {
    const inRange = element.inRange(position.x, position.y, useFinalPosition);
    if (intersect && !inRange) {
      return;
    }
    const center = element.getCenterPoint(useFinalPosition);
    const pointInArea = !!includeInvisible || chart.isPointInArea(center);
    if (!pointInArea && !inRange) {
      return;
    }
    const distance = distanceMetric(position, center);
    if (distance < minDistance) {
      items = [{
        element,
        datasetIndex,
        index
      }];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  }
  evaluateInteractionItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
  if (!includeInvisible && !chart.isPointInArea(position)) {
    return [];
  }
  return axis === 'r' && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
  const items = [];
  const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
  let intersectsItem = false;
  evaluateInteractionItems(chart, axis, position, function (element, datasetIndex, index) {
    if (element[rangeMethod](position[axis], useFinalPosition)) {
      items.push({
        element,
        datasetIndex,
        index
      });
      intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
    }
  });
  if (intersect && !intersectsItem) {
    return [];
  }
  return items;
}
var Interaction = {
  evaluateInteractionItems,
  modes: {
    index(chart, e, options, useFinalPosition) {
      const position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["z"])(e, chart);
      const axis = options.axis || 'x';
      const includeInvisible = options.includeInvisible || false;
      const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
      const elements = [];
      if (!items.length) {
        return [];
      }
      chart.getSortedVisibleDatasetMetas().forEach(function (meta) {
        const index = items[0].index;
        const element = meta.data[index];
        if (element && !element.skip) {
          elements.push({
            element,
            datasetIndex: meta.index,
            index
          });
        }
      });
      return elements;
    },
    dataset(chart, e, options, useFinalPosition) {
      const position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["z"])(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
      if (items.length > 0) {
        const datasetIndex = items[0].datasetIndex;
        const data = chart.getDatasetMeta(datasetIndex).data;
        items = [];
        for (let i = 0; i < data.length; ++i) {
          items.push({
            element: data[i],
            datasetIndex,
            index: i
          });
        }
      }
      return items;
    },
    point(chart, e, options, useFinalPosition) {
      const position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["z"])(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
    },
    nearest(chart, e, options, useFinalPosition) {
      const position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["z"])(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
    },
    x(chart, e, options, useFinalPosition) {
      const position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["z"])(e, chart);
      return getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
    },
    y(chart, e, options, useFinalPosition) {
      const position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["z"])(e, chart);
      return getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
    }
  }
};
const STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];
function filterByPosition(array, position) {
  return array.filter(function (v) {
    return v.pos === position;
  });
}
function filterDynamicPositionByAxis(array, axis) {
  return array.filter(function (v) {
    return STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis;
  });
}
function sortByWeight(array, reverse) {
  return array.sort(function (a, b) {
    const v0 = reverse ? b : a;
    const v1 = reverse ? a : b;
    return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
  });
}
function wrapBoxes(boxes) {
  const layoutBoxes = [];
  let i, ilen, box, pos, stack, stackWeight;
  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    var _box = box;
    pos = _box.position;
    var _box$options = _box.options;
    stack = _box$options.stack;
    var _box$options$stackWei = _box$options.stackWeight;
    stackWeight = _box$options$stackWei === void 0 ? 1 : _box$options$stackWei;
    layoutBoxes.push({
      index: i,
      box,
      pos,
      horizontal: box.isHorizontal(),
      weight: box.weight,
      stack: stack && pos + stack,
      stackWeight
    });
  }
  return layoutBoxes;
}
function buildStacks(layouts) {
  const stacks = {};
  var _iterator6 = _createForOfIteratorHelper(layouts),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      const wrap = _step6.value;
      const stack = wrap.stack,
        pos = wrap.pos,
        stackWeight = wrap.stackWeight;
      if (!stack || !STATIC_POSITIONS.includes(pos)) {
        continue;
      }
      const _stack = stacks[stack] || (stacks[stack] = {
        count: 0,
        placed: 0,
        weight: 0,
        size: 0
      });
      _stack.count++;
      _stack.weight += stackWeight;
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return stacks;
}
function setLayoutDims(layouts, params) {
  const stacks = buildStacks(layouts);
  const vBoxMaxWidth = params.vBoxMaxWidth,
    hBoxMaxHeight = params.hBoxMaxHeight;
  let i, ilen, layout;
  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];
    const fullSize = layout.box.fullSize;
    const stack = stacks[layout.stack];
    const factor = stack && layout.stackWeight / stack.weight;
    if (layout.horizontal) {
      layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
      layout.height = hBoxMaxHeight;
    } else {
      layout.width = vBoxMaxWidth;
      layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
    }
  }
  return stacks;
}
function buildLayoutBoxes(boxes) {
  const layoutBoxes = wrapBoxes(boxes);
  const fullSize = sortByWeight(layoutBoxes.filter(function (wrap) {
    return wrap.box.fullSize;
  }), true);
  const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    fullSize,
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
  maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
  maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
  maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
  maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
  const pos = layout.pos,
    box = layout.box;
  const maxPadding = chartArea.maxPadding;
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(pos)) {
    if (layout.size) {
      chartArea[pos] -= layout.size;
    }
    const stack = stacks[layout.stack] || {
      size: 0,
      count: 1
    };
    stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
    layout.size = stack.size / stack.count;
    chartArea[pos] += layout.size;
  }
  if (box.getPadding) {
    updateMaxPadding(maxPadding, box.getPadding());
  }
  const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
  const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
  const widthChanged = newWidth !== chartArea.w;
  const heightChanged = newHeight !== chartArea.h;
  chartArea.w = newWidth;
  chartArea.h = newHeight;
  return layout.horizontal ? {
    same: widthChanged,
    other: heightChanged
  } : {
    same: heightChanged,
    other: widthChanged
  };
}
function handleMaxPadding(chartArea) {
  const maxPadding = chartArea.maxPadding;
  function updatePos(pos) {
    const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }
  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
  const maxPadding = chartArea.maxPadding;
  function marginForPositions(positions) {
    const margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    positions.forEach(function (pos) {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }
  return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
}
function fitBoxes(boxes, chartArea, params, stacks) {
  const refitBoxes = [];
  let i, ilen, layout, box, refit, changed;
  for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
    const _updateDims = updateDims(chartArea, params, layout, stacks),
      same = _updateDims.same,
      other = _updateDims.other;
    refit |= same && refitBoxes.length;
    changed = changed || other;
    if (!box.fullSize) {
      refitBoxes.push(layout);
    }
  }
  return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
  box.top = top;
  box.left = left;
  box.right = left + width;
  box.bottom = top + height;
  box.width = width;
  box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
  const userPadding = params.padding;
  let x = chartArea.x,
    y = chartArea.y;
  var _iterator7 = _createForOfIteratorHelper(boxes),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      const layout = _step7.value;
      const box = layout.box;
      const stack = stacks[layout.stack] || {
        count: 1,
        placed: 0,
        weight: 1
      };
      const weight = layout.stackWeight / stack.weight || 1;
      if (layout.horizontal) {
        const width = chartArea.w * weight;
        const height = stack.size || box.height;
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["h"])(stack.start)) {
          y = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
        } else {
          setBoxDims(box, chartArea.left + stack.placed, y, width, height);
        }
        stack.start = y;
        stack.placed += width;
        y = box.bottom;
      } else {
        const height1 = chartArea.h * weight;
        const width1 = stack.size || box.width;
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["h"])(stack.start)) {
          x = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, x, userPadding.top, width1, params.outerHeight - userPadding.bottom - userPadding.top);
        } else {
          setBoxDims(box, x, chartArea.top + stack.placed, width1, height1);
        }
        stack.start = x;
        stack.placed += height1;
        x = box.right;
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  chartArea.x = x;
  chartArea.y = y;
}
var layouts = {
  addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }
    item.fullSize = item.fullSize || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;
    item._layers = item._layers || function () {
      return [{
        z: 0,
        draw(chartArea) {
          item.draw(chartArea);
        }
      }];
    };
    chart.boxes.push(item);
  },
  removeBox(chart, layoutItem) {
    const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },
  configure(chart, item, options) {
    item.fullSize = options.fullSize;
    item.position = options.position;
    item.weight = options.weight;
  },
  update(chart, width, height, minPadding) {
    if (!chart) {
      return;
    }
    const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(chart.options.layout.padding);
    const availableWidth = Math.max(width - padding.width, 0);
    const availableHeight = Math.max(height - padding.height, 0);
    const boxes = buildLayoutBoxes(chart.boxes);
    const verticalBoxes = boxes.vertical;
    const horizontalBoxes = boxes.horizontal;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(chart.boxes, function (box) {
      if (typeof box.beforeLayout === 'function') {
        box.beforeLayout();
      }
    });
    const visibleVerticalBoxCount = verticalBoxes.reduce(function (total, wrap) {
      return wrap.box.options && wrap.box.options.display === false ? total : total + 1;
    }, 0) || 1;
    const params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding,
      availableWidth,
      availableHeight,
      vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
      hBoxMaxHeight: availableHeight / 2
    });
    const maxPadding = Object.assign({}, padding);
    updateMaxPadding(maxPadding, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(minPadding));
    const chartArea = Object.assign({
      maxPadding,
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(boxes.fullSize, chartArea, params, stacks);
    fitBoxes(verticalBoxes, chartArea, params, stacks);
    if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
      fitBoxes(verticalBoxes, chartArea, params, stacks);
    }
    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w
    };
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(boxes.chartArea, function (layout) {
      const box = layout.box;
      Object.assign(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
let BasePlatform = /*#__PURE__*/function () {
  function BasePlatform() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, BasePlatform);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(BasePlatform, [{
    key: "acquireContext",
    value: function acquireContext(canvas, aspectRatio) {}
  }, {
    key: "releaseContext",
    value: function releaseContext(context) {
      return false;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(chart, type, listener) {}
  }, {
    key: "removeEventListener",
    value: function removeEventListener(chart, type, listener) {}
  }, {
    key: "getDevicePixelRatio",
    value: function getDevicePixelRatio() {
      return 1;
    }
  }, {
    key: "getMaximumSize",
    value: function getMaximumSize(element, width, height, aspectRatio) {
      width = Math.max(0, width || element.width);
      height = height || element.height;
      return {
        width,
        height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
      };
    }
  }, {
    key: "isAttached",
    value: function isAttached(canvas) {
      return true;
    }
  }, {
    key: "updateConfig",
    value: function updateConfig(config) {}
  }]);
  return BasePlatform;
}();
let BasicPlatform = /*#__PURE__*/function (_BasePlatform) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BasicPlatform, _BasePlatform);
  var _super9 = _createSuper(BasicPlatform);
  function BasicPlatform() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, BasicPlatform);
    return _super9.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(BasicPlatform, [{
    key: "acquireContext",
    value: function acquireContext(item) {
      return item && item.getContext && item.getContext('2d') || null;
    }
  }, {
    key: "updateConfig",
    value: function updateConfig(config) {
      config.options.animation = false;
    }
  }]);
  return BasicPlatform;
}(BasePlatform);
const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
const isNullOrEmpty = function (value) {
  return value === null || value === '';
};
function initCanvas(canvas, aspectRatio) {
  const style = canvas.style;
  const renderHeight = canvas.getAttribute('height');
  const renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';
  if (isNullOrEmpty(renderWidth)) {
    const displayWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["J"])(canvas, 'width');
    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }
  if (isNullOrEmpty(renderHeight)) {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (aspectRatio || 2);
    } else {
      const displayHeight = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["J"])(canvas, 'height');
      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }
  return canvas;
}
const eventListenerOptions = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["K"] ? {
  passive: true
} : false;
function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
  chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
  const type = EVENT_TYPES[event.type] || event.type;
  const _getRelativePosition = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["z"])(event, chart),
    x = _getRelativePosition.x,
    y = _getRelativePosition.y;
  return {
    type,
    chart,
    native: event,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}
function nodeListContains(nodeList, canvas) {
  var _iterator8 = _createForOfIteratorHelper(nodeList),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      const node = _step8.value;
      if (node === canvas || node.contains(canvas)) {
        return true;
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}
function createAttachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(function (entries) {
    let trigger = false;
    var _iterator9 = _createForOfIteratorHelper(entries),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        const entry = _step9.value;
        trigger = trigger || nodeListContains(entry.addedNodes, canvas);
        trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  return observer;
}
function createDetachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(function (entries) {
    let trigger = false;
    var _iterator10 = _createForOfIteratorHelper(entries),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        const entry = _step10.value;
        trigger = trigger || nodeListContains(entry.removedNodes, canvas);
        trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
  const dpr = window.devicePixelRatio;
  if (dpr === oldDevicePixelRatio) {
    return;
  }
  oldDevicePixelRatio = dpr;
  drpListeningCharts.forEach(function (resize, chart) {
    if (chart.currentDevicePixelRatio !== dpr) {
      resize();
    }
  });
}
function listenDevicePixelRatioChanges(chart, resize) {
  if (!drpListeningCharts.size) {
    window.addEventListener('resize', onWindowResize);
  }
  drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
  drpListeningCharts.delete(chart);
  if (!drpListeningCharts.size) {
    window.removeEventListener('resize', onWindowResize);
  }
}
function createResizeObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["I"])(canvas);
  if (!container) {
    return;
  }
  const resize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["L"])(function (width, height) {
    const w = container.clientWidth;
    listener(width, height);
    if (w < container.clientWidth) {
      listener();
    }
  }, window);
  const observer = new ResizeObserver(function (entries) {
    const entry = entries[0];
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;
    if (width === 0 && height === 0) {
      return;
    }
    resize(width, height);
  });
  observer.observe(container);
  listenDevicePixelRatioChanges(chart, resize);
  return observer;
}
function releaseObserver(chart, type, observer) {
  if (observer) {
    observer.disconnect();
  }
  if (type === 'resize') {
    unlistenDevicePixelRatioChanges(chart);
  }
}
function createProxyAndListen(chart, type, listener) {
  const canvas = chart.canvas;
  const proxy = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["L"])(function (event) {
    if (chart.ctx !== null) {
      listener(fromNativeEvent(event, chart));
    }
  }, chart);
  addListener(canvas, type, proxy);
  return proxy;
}
let DomPlatform = /*#__PURE__*/function (_BasePlatform2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DomPlatform, _BasePlatform2);
  var _super10 = _createSuper(DomPlatform);
  function DomPlatform() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, DomPlatform);
    return _super10.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(DomPlatform, [{
    key: "acquireContext",
    value: function acquireContext(canvas, aspectRatio) {
      const context = canvas && canvas.getContext && canvas.getContext('2d');
      if (context && context.canvas === canvas) {
        initCanvas(canvas, aspectRatio);
        return context;
      }
      return null;
    }
  }, {
    key: "releaseContext",
    value: function releaseContext(context) {
      const canvas = context.canvas;
      if (!canvas[EXPANDO_KEY]) {
        return false;
      }
      const initial = canvas[EXPANDO_KEY].initial;
      ['height', 'width'].forEach(function (prop) {
        const value = initial[prop];
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });
      const style = initial.style || {};
      Object.keys(style).forEach(function (key) {
        canvas.style[key] = style[key];
      });
      canvas.width = canvas.width;
      delete canvas[EXPANDO_KEY];
      return true;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(chart, type, listener) {
      this.removeEventListener(chart, type);
      const proxies = chart.$proxies || (chart.$proxies = {});
      const handlers = {
        attach: createAttachObserver,
        detach: createDetachObserver,
        resize: createResizeObserver
      };
      const handler = handlers[type] || createProxyAndListen;
      proxies[type] = handler(chart, type, listener);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(chart, type) {
      const proxies = chart.$proxies || (chart.$proxies = {});
      const proxy = proxies[type];
      if (!proxy) {
        return;
      }
      const handlers = {
        attach: releaseObserver,
        detach: releaseObserver,
        resize: releaseObserver
      };
      const handler = handlers[type] || removeListener;
      handler(chart, type, proxy);
      proxies[type] = undefined;
    }
  }, {
    key: "getDevicePixelRatio",
    value: function getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
  }, {
    key: "getMaximumSize",
    value: function getMaximumSize(canvas, width, height, aspectRatio) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["G"])(canvas, width, height, aspectRatio);
    }
  }, {
    key: "isAttached",
    value: function isAttached(canvas) {
      const container = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["I"])(canvas);
      return !!(container && container.isConnected);
    }
  }]);
  return DomPlatform;
}(BasePlatform);
function _detectPlatform(canvas) {
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["M"])() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
    return BasicPlatform;
  }
  return DomPlatform;
}
let Element = /*#__PURE__*/function () {
  function Element() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Element);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, "active", false);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Element, [{
    key: "tooltipPosition",
    value: function tooltipPosition(useFinalPosition) {
      const _this$getProps = this.getProps(['x', 'y'], useFinalPosition),
        x = _this$getProps.x,
        y = _this$getProps.y;
      return {
        x,
        y
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["x"])(this.x) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["x"])(this.y);
    }
  }, {
    key: "getProps",
    value: function getProps(props, final) {
      var _this8 = this;
      const anims = this.$animations;
      if (!final || !anims) {
        // let's not create an object, if not needed
        return this;
      }
      const ret = {};
      props.forEach(function (prop) {
        ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : _this8[prop];
      });
      return ret;
    }
  }]);
  return Element;
}();
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Element, "defaults", {});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Element, "defaultRoutes", undefined);
function autoSkip(scale, ticks) {
  const tickOpts = scale.options.ticks;
  const determinedMaxTicks = determineMaxTicks(scale);
  const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
  const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
  const numMajorIndices = majorIndices.length;
  const first = majorIndices[0];
  const last = majorIndices[numMajorIndices - 1];
  const newTicks = [];
  if (numMajorIndices > ticksLimit) {
    skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
    return newTicks;
  }
  const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
  if (numMajorIndices > 0) {
    let i, ilen;
    const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
    skip(ticks, newTicks, spacing, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
    for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
      skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
    }
    skip(ticks, newTicks, spacing, last, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
    return newTicks;
  }
  skip(ticks, newTicks, spacing);
  return newTicks;
}
function determineMaxTicks(scale) {
  const offset = scale.options.offset;
  const tickLength = scale._tickSize();
  const maxScale = scale._length / tickLength + (offset ? 0 : 1);
  const maxChart = scale._maxLength / tickLength;
  return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
  const evenMajorSpacing = getEvenSpacing(majorIndices);
  const spacing = ticks.length / ticksLimit;
  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }
  const factors = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["N"])(evenMajorSpacing);
  for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
    const factor = factors[i];
    if (factor > spacing) {
      return factor;
    }
  }
  return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
  const result = [];
  let i, ilen;
  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }
  return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
  let count = 0;
  let next = majorIndices[0];
  let i;
  spacing = Math.ceil(spacing);
  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  const start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(majorStart, 0);
  const end = Math.min(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(majorEnd, ticks.length), ticks.length);
  let count = 0;
  let length, i, next;
  spacing = Math.ceil(spacing);
  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }
  next = start;
  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }
  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}
function getEvenSpacing(arr) {
  const len = arr.length;
  let i, diff;
  if (len < 2) {
    return false;
  }
  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return diff;
}
const reverseAlign = function (align) {
  return align === 'left' ? 'right' : align === 'right' ? 'left' : align;
};
const offsetFromEdge = function (scale, edge, offset) {
  return edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
};
function sample(arr, numItems) {
  const result = [];
  const increment = arr.length / numItems;
  const len = arr.length;
  let i = 0;
  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }
  return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
  const length = scale.ticks.length;
  const validIndex = Math.min(index, length - 1);
  const start = scale._startPixel;
  const end = scale._endPixel;
  const epsilon = 1e-6;
  let lineValue = scale.getPixelForTick(validIndex);
  let offset;
  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }
    lineValue += validIndex < index ? offset : -offset;
    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }
  return lineValue;
}
function garbageCollect(caches, length) {
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(caches, function (cache) {
    const gc = cache.gc;
    const gcLen = gc.length / 2;
    let i;
    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
  });
}
function getTickMarkLength(options) {
  return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
  if (!options.display) {
    return 0;
  }
  const font = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(options.font, fallback);
  const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(options.padding);
  const lines = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(options.text) ? options.text.length : 1;
  return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["j"])(parent, {
    scale,
    type: 'scale'
  });
}
function createTickContext(parent, index, tick) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["j"])(parent, {
    tick,
    index,
    type: 'tick'
  });
}
function titleAlign(align, position, reverse) {
  let ret = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a1"])(align);
  if (reverse && position !== 'right' || !reverse && position === 'right') {
    ret = reverseAlign(ret);
  }
  return ret;
}
function titleArgs(scale, offset, position, align) {
  const top = scale.top,
    left = scale.left,
    bottom = scale.bottom,
    right = scale.right,
    chart = scale.chart;
  const chartArea = chart.chartArea,
    scales = chart.scales;
  let rotation = 0;
  let maxWidth, titleX, titleY;
  const height = bottom - top;
  const width = right - left;
  if (scale.isHorizontal()) {
    titleX = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, left, right);
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
    } else if (position === 'center') {
      titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
    } else {
      titleY = offsetFromEdge(scale, position, offset);
    }
    maxWidth = right - left;
  } else {
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(position)) {
      const positionAxisID1 = Object.keys(position)[0];
      const value1 = position[positionAxisID1];
      titleX = scales[positionAxisID1].getPixelForValue(value1) - width + offset;
    } else if (position === 'center') {
      titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
    } else {
      titleX = offsetFromEdge(scale, position, offset);
    }
    titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, bottom, top);
    rotation = position === 'left' ? -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"] : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"];
  }
  return {
    titleX,
    titleY,
    maxWidth,
    rotation
  };
}
let Scale = /*#__PURE__*/function (_Element) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Scale, _Element);
  var _super11 = _createSuper(Scale);
  function Scale(cfg) {
    var _this9;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Scale);
    _this9 = _super11.call(this);
    _this9.id = cfg.id;
    _this9.type = cfg.type;
    _this9.options = undefined;
    _this9.ctx = cfg.ctx;
    _this9.chart = cfg.chart;
    _this9.top = undefined;
    _this9.bottom = undefined;
    _this9.left = undefined;
    _this9.right = undefined;
    _this9.width = undefined;
    _this9.height = undefined;
    _this9._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    _this9.maxWidth = undefined;
    _this9.maxHeight = undefined;
    _this9.paddingTop = undefined;
    _this9.paddingBottom = undefined;
    _this9.paddingLeft = undefined;
    _this9.paddingRight = undefined;
    _this9.axis = undefined;
    _this9.labelRotation = undefined;
    _this9.min = undefined;
    _this9.max = undefined;
    _this9._range = undefined;
    _this9.ticks = [];
    _this9._gridLineItems = null;
    _this9._labelItems = null;
    _this9._labelSizes = null;
    _this9._length = 0;
    _this9._maxLength = 0;
    _this9._longestTextCache = {};
    _this9._startPixel = undefined;
    _this9._endPixel = undefined;
    _this9._reversePixels = false;
    _this9._userMax = undefined;
    _this9._userMin = undefined;
    _this9._suggestedMax = undefined;
    _this9._suggestedMin = undefined;
    _this9._ticksLength = 0;
    _this9._borderValue = 0;
    _this9._cache = {};
    _this9._dataLimitsCached = false;
    _this9.$context = undefined;
    return _this9;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Scale, [{
    key: "init",
    value: function init(options) {
      this.options = options.setContext(this.getContext());
      this.axis = options.axis;
      this._userMin = this.parse(options.min);
      this._userMax = this.parse(options.max);
      this._suggestedMin = this.parse(options.suggestedMin);
      this._suggestedMax = this.parse(options.suggestedMax);
    }
  }, {
    key: "parse",
    value: function parse(raw, index) {
      return raw;
    }
  }, {
    key: "getUserBounds",
    value: function getUserBounds() {
      let _userMin = this._userMin,
        _userMax = this._userMax,
        _suggestedMin = this._suggestedMin,
        _suggestedMax = this._suggestedMax;
      _userMin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(_userMin, Number.POSITIVE_INFINITY);
      _userMax = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(_userMax, Number.NEGATIVE_INFINITY);
      _suggestedMin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(_suggestedMin, Number.POSITIVE_INFINITY);
      _suggestedMax = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(_suggestedMax, Number.NEGATIVE_INFINITY);
      return {
        min: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(_userMin, _suggestedMin),
        max: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(_userMax, _suggestedMax),
        minDefined: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(_userMin),
        maxDefined: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(_userMax)
      };
    }
  }, {
    key: "getMinMax",
    value: function getMinMax(canStack) {
      let _this$getUserBounds = this.getUserBounds(),
        min = _this$getUserBounds.min,
        max = _this$getUserBounds.max,
        minDefined = _this$getUserBounds.minDefined,
        maxDefined = _this$getUserBounds.maxDefined;
      let range;
      if (minDefined && maxDefined) {
        return {
          min,
          max
        };
      }
      const metas = this.getMatchingVisibleMetas();
      for (let i = 0, ilen = metas.length; i < ilen; ++i) {
        range = metas[i].controller.getMinMax(this, canStack);
        if (!minDefined) {
          min = Math.min(min, range.min);
        }
        if (!maxDefined) {
          max = Math.max(max, range.max);
        }
      }
      min = maxDefined && min > max ? max : min;
      max = minDefined && min > max ? min : max;
      return {
        min: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(min, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(max, min)),
        max: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(max, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(min, max))
      };
    }
  }, {
    key: "getPadding",
    value: function getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    }
  }, {
    key: "getTicks",
    value: function getTicks() {
      return this.ticks;
    }
  }, {
    key: "getLabels",
    value: function getLabels() {
      const data = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
  }, {
    key: "beforeLayout",
    value: function beforeLayout() {
      this._cache = {};
      this._dataLimitsCached = false;
    }
  }, {
    key: "beforeUpdate",
    value: function beforeUpdate() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.beforeUpdate, [this]);
    }
  }, {
    key: "update",
    value: function update(maxWidth, maxHeight, margins) {
      const _this$options4 = this.options,
        beginAtZero = _this$options4.beginAtZero,
        grace = _this$options4.grace,
        tickOpts = _this$options4.ticks;
      const sampleSize = tickOpts.sampleSize;
      this.beforeUpdate();
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins = Object.assign({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      this.ticks = null;
      this._labelSizes = null;
      this._gridLineItems = null;
      this._labelItems = null;
      this.beforeSetDimensions();
      this.setDimensions();
      this.afterSetDimensions();
      this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
      if (!this._dataLimitsCached) {
        this.beforeDataLimits();
        this.determineDataLimits();
        this.afterDataLimits();
        this._range = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["R"])(this, grace, beginAtZero);
        this._dataLimitsCached = true;
      }
      this.beforeBuildTicks();
      this.ticks = this.buildTicks() || [];
      this.afterBuildTicks();
      const samplingEnabled = sampleSize < this.ticks.length;
      this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
      this.configure();
      this.beforeCalculateLabelRotation();
      this.calculateLabelRotation();
      this.afterCalculateLabelRotation();
      if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
        this.ticks = autoSkip(this, this.ticks);
        this._labelSizes = null;
        this.afterAutoSkip();
      }
      if (samplingEnabled) {
        this._convertTicksToLabels(this.ticks);
      }
      this.beforeFit();
      this.fit();
      this.afterFit();
      this.afterUpdate();
    }
  }, {
    key: "configure",
    value: function configure() {
      let reversePixels = this.options.reverse;
      let startPixel, endPixel;
      if (this.isHorizontal()) {
        startPixel = this.left;
        endPixel = this.right;
      } else {
        startPixel = this.top;
        endPixel = this.bottom;
        reversePixels = !reversePixels;
      }
      this._startPixel = startPixel;
      this._endPixel = endPixel;
      this._reversePixels = reversePixels;
      this._length = endPixel - startPixel;
      this._alignToPixels = this.options.alignToPixels;
    }
  }, {
    key: "afterUpdate",
    value: function afterUpdate() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.afterUpdate, [this]);
    }
  }, {
    key: "beforeSetDimensions",
    value: function beforeSetDimensions() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.beforeSetDimensions, [this]);
    }
  }, {
    key: "setDimensions",
    value: function setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = 0;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = 0;
        this.bottom = this.height;
      }
      this.paddingLeft = 0;
      this.paddingTop = 0;
      this.paddingRight = 0;
      this.paddingBottom = 0;
    }
  }, {
    key: "afterSetDimensions",
    value: function afterSetDimensions() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.afterSetDimensions, [this]);
    }
  }, {
    key: "_callHooks",
    value: function _callHooks(name) {
      this.chart.notifyPlugins(name, this.getContext());
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options[name], [this]);
    }
  }, {
    key: "beforeDataLimits",
    value: function beforeDataLimits() {
      this._callHooks('beforeDataLimits');
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {}
  }, {
    key: "afterDataLimits",
    value: function afterDataLimits() {
      this._callHooks('afterDataLimits');
    }
  }, {
    key: "beforeBuildTicks",
    value: function beforeBuildTicks() {
      this._callHooks('beforeBuildTicks');
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      return [];
    }
  }, {
    key: "afterBuildTicks",
    value: function afterBuildTicks() {
      this._callHooks('afterBuildTicks');
    }
  }, {
    key: "beforeTickToLabelConversion",
    value: function beforeTickToLabelConversion() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.beforeTickToLabelConversion, [this]);
    }
  }, {
    key: "generateTickLabels",
    value: function generateTickLabels(ticks) {
      const tickOpts = this.options.ticks;
      let i, ilen, tick;
      for (i = 0, ilen = ticks.length; i < ilen; i++) {
        tick = ticks[i];
        tick.label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(tickOpts.callback, [tick.value, i, ticks], this);
      }
    }
  }, {
    key: "afterTickToLabelConversion",
    value: function afterTickToLabelConversion() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.afterTickToLabelConversion, [this]);
    }
  }, {
    key: "beforeCalculateLabelRotation",
    value: function beforeCalculateLabelRotation() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.beforeCalculateLabelRotation, [this]);
    }
  }, {
    key: "calculateLabelRotation",
    value: function calculateLabelRotation() {
      const options = this.options;
      const tickOpts = options.ticks;
      const numTicks = this.ticks.length;
      const minRotation = tickOpts.minRotation || 0;
      const maxRotation = tickOpts.maxRotation;
      let labelRotation = minRotation;
      let tickWidth, maxHeight, maxLabelDiagonal;
      if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
        this.labelRotation = minRotation;
        return;
      }
      const labelSizes = this._getLabelSizes();
      const maxLabelWidth = labelSizes.widest.width;
      const maxLabelHeight = labelSizes.highest.height;
      const maxWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(this.chart.width - maxLabelWidth, 0, this.maxWidth);
      tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
        maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
        labelRotation = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["U"])(Math.min(Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(maxLabelHeight / maxLabelDiagonal, -1, 1))));
        labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
      }
      this.labelRotation = labelRotation;
    }
  }, {
    key: "afterCalculateLabelRotation",
    value: function afterCalculateLabelRotation() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.afterCalculateLabelRotation, [this]);
    }
  }, {
    key: "afterAutoSkip",
    value: function afterAutoSkip() {}
  }, {
    key: "beforeFit",
    value: function beforeFit() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.beforeFit, [this]);
    }
  }, {
    key: "fit",
    value: function fit() {
      const minSize = {
        width: 0,
        height: 0
      };
      const chart = this.chart,
        _this$options5 = this.options,
        tickOpts = _this$options5.ticks,
        titleOpts = _this$options5.title,
        gridOpts = _this$options5.grid;
      const display = this._isVisible();
      const isHorizontal = this.isHorizontal();
      if (display) {
        const titleHeight = getTitleHeight(titleOpts, chart.options.font);
        if (isHorizontal) {
          minSize.width = this.maxWidth;
          minSize.height = getTickMarkLength(gridOpts) + titleHeight;
        } else {
          minSize.height = this.maxHeight;
          minSize.width = getTickMarkLength(gridOpts) + titleHeight;
        }
        if (tickOpts.display && this.ticks.length) {
          const _this$_getLabelSizes = this._getLabelSizes(),
            first = _this$_getLabelSizes.first,
            last = _this$_getLabelSizes.last,
            widest = _this$_getLabelSizes.widest,
            highest = _this$_getLabelSizes.highest;
          const tickPadding = tickOpts.padding * 2;
          const angleRadians = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.labelRotation);
          const cos = Math.cos(angleRadians);
          const sin = Math.sin(angleRadians);
          if (isHorizontal) {
            const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
            minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
          } else {
            const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
            minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
          }
          this._calculatePadding(first, last, sin, cos);
        }
      }
      this._handleMargins();
      if (isHorizontal) {
        this.width = this._length = chart.width - this._margins.left - this._margins.right;
        this.height = minSize.height;
      } else {
        this.width = minSize.width;
        this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
      }
    }
  }, {
    key: "_calculatePadding",
    value: function _calculatePadding(first, last, sin, cos) {
      const _this$options6 = this.options,
        _this$options6$ticks = _this$options6.ticks,
        align = _this$options6$ticks.align,
        padding = _this$options6$ticks.padding,
        position = _this$options6.position;
      const isRotated = this.labelRotation !== 0;
      const labelsBelowTicks = position !== 'top' && this.axis === 'x';
      if (this.isHorizontal()) {
        const offsetLeft = this.getPixelForTick(0) - this.left;
        const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
        let paddingLeft = 0;
        let paddingRight = 0;
        if (isRotated) {
          if (labelsBelowTicks) {
            paddingLeft = cos * first.width;
            paddingRight = sin * last.height;
          } else {
            paddingLeft = sin * first.height;
            paddingRight = cos * last.width;
          }
        } else if (align === 'start') {
          paddingRight = last.width;
        } else if (align === 'end') {
          paddingLeft = first.width;
        } else if (align !== 'inner') {
          paddingLeft = first.width / 2;
          paddingRight = last.width / 2;
        }
        this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
        this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
      } else {
        let paddingTop = last.height / 2;
        let paddingBottom = first.height / 2;
        if (align === 'start') {
          paddingTop = 0;
          paddingBottom = first.height;
        } else if (align === 'end') {
          paddingTop = last.height;
          paddingBottom = 0;
        }
        this.paddingTop = paddingTop + padding;
        this.paddingBottom = paddingBottom + padding;
      }
    }
  }, {
    key: "_handleMargins",
    value: function _handleMargins() {
      if (this._margins) {
        this._margins.left = Math.max(this.paddingLeft, this._margins.left);
        this._margins.top = Math.max(this.paddingTop, this._margins.top);
        this._margins.right = Math.max(this.paddingRight, this._margins.right);
        this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
      }
    }
  }, {
    key: "afterFit",
    value: function afterFit() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(this.options.afterFit, [this]);
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      const _this$options7 = this.options,
        axis = _this$options7.axis,
        position = _this$options7.position;
      return position === 'top' || position === 'bottom' || axis === 'x';
    }
  }, {
    key: "isFullSize",
    value: function isFullSize() {
      return this.options.fullSize;
    }
  }, {
    key: "_convertTicksToLabels",
    value: function _convertTicksToLabels(ticks) {
      this.beforeTickToLabelConversion();
      this.generateTickLabels(ticks);
      let i, ilen;
      for (i = 0, ilen = ticks.length; i < ilen; i++) {
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(ticks[i].label)) {
          ticks.splice(i, 1);
          ilen--;
          i--;
        }
      }
      this.afterTickToLabelConversion();
    }
  }, {
    key: "_getLabelSizes",
    value: function _getLabelSizes() {
      let labelSizes = this._labelSizes;
      if (!labelSizes) {
        const sampleSize = this.options.ticks.sampleSize;
        let ticks = this.ticks;
        if (sampleSize < ticks.length) {
          ticks = sample(ticks, sampleSize);
        }
        this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length);
      }
      return labelSizes;
    }
  }, {
    key: "_computeLabelSizes",
    value: function _computeLabelSizes(ticks, length) {
      const ctx = this.ctx,
        caches = this._longestTextCache;
      const widths = [];
      const heights = [];
      let widestLabelSize = 0;
      let highestLabelSize = 0;
      let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
      for (i = 0; i < length; ++i) {
        label = ticks[i].label;
        tickFont = this._resolveTickFontOptions(i);
        ctx.font = fontString = tickFont.string;
        cache = caches[fontString] = caches[fontString] || {
          data: {},
          gc: []
        };
        lineHeight = tickFont.lineHeight;
        width = height = 0;
        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(label) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(label)) {
          width = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["V"])(ctx, cache.data, cache.gc, width, label);
          height = lineHeight;
        } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(label)) {
          for (j = 0, jlen = label.length; j < jlen; ++j) {
            nestedLabel = label[j];
            if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(nestedLabel) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(nestedLabel)) {
              width = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["V"])(ctx, cache.data, cache.gc, width, nestedLabel);
              height += lineHeight;
            }
          }
        }
        widths.push(width);
        heights.push(height);
        widestLabelSize = Math.max(width, widestLabelSize);
        highestLabelSize = Math.max(height, highestLabelSize);
      }
      garbageCollect(caches, length);
      const widest = widths.indexOf(widestLabelSize);
      const highest = heights.indexOf(highestLabelSize);
      const valueAt = function (idx) {
        return {
          width: widths[idx] || 0,
          height: heights[idx] || 0
        };
      };
      return {
        first: valueAt(0),
        last: valueAt(length - 1),
        widest: valueAt(widest),
        highest: valueAt(highest),
        widths,
        heights
      };
    }
  }, {
    key: "getLabelForValue",
    value: function getLabelForValue(value) {
      return value;
    }
  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value, index) {
      return NaN;
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {}
  }, {
    key: "getPixelForTick",
    value: function getPixelForTick(index) {
      const ticks = this.ticks;
      if (index < 0 || index > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index].value);
    }
  }, {
    key: "getPixelForDecimal",
    value: function getPixelForDecimal(decimal) {
      if (this._reversePixels) {
        decimal = 1 - decimal;
      }
      const pixel = this._startPixel + decimal * this._length;
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["W"])(this._alignToPixels ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["X"])(this.chart, pixel, 0) : pixel);
    }
  }, {
    key: "getDecimalForPixel",
    value: function getDecimalForPixel(pixel) {
      const decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    }
  }, {
    key: "getBasePixel",
    value: function getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
  }, {
    key: "getBaseValue",
    value: function getBaseValue() {
      const min = this.min,
        max = this.max;
      return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
  }, {
    key: "getContext",
    value: function getContext(index) {
      const ticks = this.ticks || [];
      if (index >= 0 && index < ticks.length) {
        const tick = ticks[index];
        return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
      }
      return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
  }, {
    key: "_tickSize",
    value: function _tickSize() {
      const optionTicks = this.options.ticks;
      const rot = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.labelRotation);
      const cos = Math.abs(Math.cos(rot));
      const sin = Math.abs(Math.sin(rot));
      const labelSizes = this._getLabelSizes();
      const padding = optionTicks.autoSkipPadding || 0;
      const w = labelSizes ? labelSizes.widest.width + padding : 0;
      const h = labelSizes ? labelSizes.highest.height + padding : 0;
      return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
  }, {
    key: "_isVisible",
    value: function _isVisible() {
      const display = this.options.display;
      if (display !== 'auto') {
        return !!display;
      }
      return this.getMatchingVisibleMetas().length > 0;
    }
  }, {
    key: "_computeGridLineItems",
    value: function _computeGridLineItems(chartArea) {
      const axis = this.axis;
      const chart = this.chart;
      const options = this.options;
      const grid = options.grid,
        position = options.position,
        border = options.border;
      const offset = grid.offset;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const ticksLength = ticks.length + (offset ? 1 : 0);
      const tl = getTickMarkLength(grid);
      const items = [];
      const borderOpts = border.setContext(this.getContext());
      const axisWidth = borderOpts.display ? borderOpts.width : 0;
      const axisHalfWidth = axisWidth / 2;
      const alignBorderValue = function (pixel) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["X"])(chart, pixel, axisWidth);
      };
      let borderValue, i, lineValue, alignedLineValue;
      let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
      if (position === 'top') {
        borderValue = alignBorderValue(this.bottom);
        ty1 = this.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === 'bottom') {
        borderValue = alignBorderValue(this.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = this.top + tl;
      } else if (position === 'left') {
        borderValue = alignBorderValue(this.right);
        tx1 = this.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else if (position === 'right') {
        borderValue = alignBorderValue(this.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = this.left + tl;
      } else if (axis === 'x') {
        if (position === 'center') {
          borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
        } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        y1 = chartArea.top;
        y2 = chartArea.bottom;
        ty1 = borderValue + axisHalfWidth;
        ty2 = ty1 + tl;
      } else if (axis === 'y') {
        if (position === 'center') {
          borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
        } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(position)) {
          const positionAxisID1 = Object.keys(position)[0];
          const value1 = position[positionAxisID1];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID1].getPixelForValue(value1));
        }
        tx1 = borderValue - axisHalfWidth;
        tx2 = tx1 - tl;
        x1 = chartArea.left;
        x2 = chartArea.right;
      }
      const limit = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(options.ticks.maxTicksLimit, ticksLength);
      const step = Math.max(1, Math.ceil(ticksLength / limit));
      for (i = 0; i < ticksLength; i += step) {
        const context = this.getContext(i);
        const optsAtIndex = grid.setContext(context);
        const optsAtIndexBorder = border.setContext(context);
        const lineWidth = optsAtIndex.lineWidth;
        const lineColor = optsAtIndex.color;
        const borderDash = optsAtIndexBorder.dash || [];
        const borderDashOffset = optsAtIndexBorder.dashOffset;
        const tickWidth = optsAtIndex.tickWidth;
        const tickColor = optsAtIndex.tickColor;
        const tickBorderDash = optsAtIndex.tickBorderDash || [];
        const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
        lineValue = getPixelForGridLine(this, i, offset);
        if (lineValue === undefined) {
          continue;
        }
        alignedLineValue = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["X"])(chart, lineValue, lineWidth);
        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }
        items.push({
          tx1,
          ty1,
          tx2,
          ty2,
          x1,
          y1,
          x2,
          y2,
          width: lineWidth,
          color: lineColor,
          borderDash,
          borderDashOffset,
          tickWidth,
          tickColor,
          tickBorderDash,
          tickBorderDashOffset
        });
      }
      this._ticksLength = ticksLength;
      this._borderValue = borderValue;
      return items;
    }
  }, {
    key: "_computeLabelItems",
    value: function _computeLabelItems(chartArea) {
      const axis = this.axis;
      const options = this.options;
      const position = options.position,
        optionTicks = options.ticks;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const align = optionTicks.align,
        crossAlign = optionTicks.crossAlign,
        padding = optionTicks.padding,
        mirror = optionTicks.mirror;
      const tl = getTickMarkLength(options.grid);
      const tickAndPadding = tl + padding;
      const hTickAndPadding = mirror ? -padding : tickAndPadding;
      const rotation = -Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.labelRotation);
      const items = [];
      let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
      let textBaseline = 'middle';
      if (position === 'top') {
        y = this.bottom - hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === 'bottom') {
        y = this.top + hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === 'left') {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x = ret.x;
      } else if (position === 'right') {
        const ret1 = this._getYAxisLabelAlignment(tl);
        textAlign = ret1.textAlign;
        x = ret1.x;
      } else if (axis === 'x') {
        if (position === 'center') {
          y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
        } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
        }
        textAlign = this._getXAxisLabelAlignment();
      } else if (axis === 'y') {
        if (position === 'center') {
          x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
        } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(position)) {
          const positionAxisID1 = Object.keys(position)[0];
          const value1 = position[positionAxisID1];
          x = this.chart.scales[positionAxisID1].getPixelForValue(value1);
        }
        textAlign = this._getYAxisLabelAlignment(tl).textAlign;
      }
      if (axis === 'y') {
        if (align === 'start') {
          textBaseline = 'top';
        } else if (align === 'end') {
          textBaseline = 'bottom';
        }
      }
      const labelSizes = this._getLabelSizes();
      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        label = tick.label;
        const optsAtIndex = optionTicks.setContext(this.getContext(i));
        pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
        font = this._resolveTickFontOptions(i);
        lineHeight = font.lineHeight;
        lineCount = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(label) ? label.length : 1;
        const halfCount = lineCount / 2;
        const color = optsAtIndex.color;
        const strokeColor = optsAtIndex.textStrokeColor;
        const strokeWidth = optsAtIndex.textStrokeWidth;
        let tickTextAlign = textAlign;
        if (isHorizontal) {
          x = pixel;
          if (textAlign === 'inner') {
            if (i === ilen - 1) {
              tickTextAlign = !this.options.reverse ? 'right' : 'left';
            } else if (i === 0) {
              tickTextAlign = !this.options.reverse ? 'left' : 'right';
            } else {
              tickTextAlign = 'center';
            }
          }
          if (position === 'top') {
            if (crossAlign === 'near' || rotation !== 0) {
              textOffset = -lineCount * lineHeight + lineHeight / 2;
            } else if (crossAlign === 'center') {
              textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
            } else {
              textOffset = -labelSizes.highest.height + lineHeight / 2;
            }
          } else {
            if (crossAlign === 'near' || rotation !== 0) {
              textOffset = lineHeight / 2;
            } else if (crossAlign === 'center') {
              textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
            } else {
              textOffset = labelSizes.highest.height - lineCount * lineHeight;
            }
          }
          if (mirror) {
            textOffset *= -1;
          }
          if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) {
            x += lineHeight / 2 * Math.sin(rotation);
          }
        } else {
          y = pixel;
          textOffset = (1 - lineCount) * lineHeight / 2;
        }
        let backdrop;
        if (optsAtIndex.showLabelBackdrop) {
          const labelPadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(optsAtIndex.backdropPadding);
          const height = labelSizes.heights[i];
          const width = labelSizes.widths[i];
          let top = textOffset - labelPadding.top;
          let left = 0 - labelPadding.left;
          switch (textBaseline) {
            case 'middle':
              top -= height / 2;
              break;
            case 'bottom':
              top -= height;
              break;
          }
          switch (textAlign) {
            case 'center':
              left -= width / 2;
              break;
            case 'right':
              left -= width;
              break;
          }
          backdrop = {
            left,
            top,
            width: width + labelPadding.width,
            height: height + labelPadding.height,
            color: optsAtIndex.backdropColor
          };
        }
        items.push({
          rotation,
          label,
          font,
          color,
          strokeColor,
          strokeWidth,
          textOffset,
          textAlign: tickTextAlign,
          textBaseline,
          translation: [x, y],
          backdrop
        });
      }
      return items;
    }
  }, {
    key: "_getXAxisLabelAlignment",
    value: function _getXAxisLabelAlignment() {
      const _this$options8 = this.options,
        position = _this$options8.position,
        ticks = _this$options8.ticks;
      const rotation = -Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.labelRotation);
      if (rotation) {
        return position === 'top' ? 'left' : 'right';
      }
      let align = 'center';
      if (ticks.align === 'start') {
        align = 'left';
      } else if (ticks.align === 'end') {
        align = 'right';
      } else if (ticks.align === 'inner') {
        align = 'inner';
      }
      return align;
    }
  }, {
    key: "_getYAxisLabelAlignment",
    value: function _getYAxisLabelAlignment(tl) {
      const _this$options9 = this.options,
        position = _this$options9.position,
        _this$options9$ticks = _this$options9.ticks,
        crossAlign = _this$options9$ticks.crossAlign,
        mirror = _this$options9$ticks.mirror,
        padding = _this$options9$ticks.padding;
      const labelSizes = this._getLabelSizes();
      const tickAndPadding = tl + padding;
      const widest = labelSizes.widest.width;
      let textAlign;
      let x;
      if (position === 'left') {
        if (mirror) {
          x = this.right + padding;
          if (crossAlign === 'near') {
            textAlign = 'left';
          } else if (crossAlign === 'center') {
            textAlign = 'center';
            x += widest / 2;
          } else {
            textAlign = 'right';
            x += widest;
          }
        } else {
          x = this.right - tickAndPadding;
          if (crossAlign === 'near') {
            textAlign = 'right';
          } else if (crossAlign === 'center') {
            textAlign = 'center';
            x -= widest / 2;
          } else {
            textAlign = 'left';
            x = this.left;
          }
        }
      } else if (position === 'right') {
        if (mirror) {
          x = this.left + padding;
          if (crossAlign === 'near') {
            textAlign = 'right';
          } else if (crossAlign === 'center') {
            textAlign = 'center';
            x -= widest / 2;
          } else {
            textAlign = 'left';
            x -= widest;
          }
        } else {
          x = this.left + tickAndPadding;
          if (crossAlign === 'near') {
            textAlign = 'left';
          } else if (crossAlign === 'center') {
            textAlign = 'center';
            x += widest / 2;
          } else {
            textAlign = 'right';
            x = this.right;
          }
        }
      } else {
        textAlign = 'right';
      }
      return {
        textAlign,
        x
      };
    }
  }, {
    key: "_computeLabelArea",
    value: function _computeLabelArea() {
      if (this.options.ticks.mirror) {
        return;
      }
      const chart = this.chart;
      const position = this.options.position;
      if (position === 'left' || position === 'right') {
        return {
          top: 0,
          left: this.left,
          bottom: chart.height,
          right: this.right
        };
      }
      if (position === 'top' || position === 'bottom') {
        return {
          top: this.top,
          left: 0,
          bottom: this.bottom,
          right: chart.width
        };
      }
    }
  }, {
    key: "drawBackground",
    value: function drawBackground() {
      const ctx = this.ctx,
        backgroundColor = this.options.backgroundColor,
        left = this.left,
        top = this.top,
        width = this.width,
        height = this.height;
      if (backgroundColor) {
        ctx.save();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(left, top, width, height);
        ctx.restore();
      }
    }
  }, {
    key: "getLineWidthForValue",
    value: function getLineWidthForValue(value) {
      const grid = this.options.grid;
      if (!this._isVisible() || !grid.display) {
        return 0;
      }
      const ticks = this.ticks;
      const index = ticks.findIndex(function (t) {
        return t.value === value;
      });
      if (index >= 0) {
        const opts = grid.setContext(this.getContext(index));
        return opts.lineWidth;
      }
      return 0;
    }
  }, {
    key: "drawGrid",
    value: function drawGrid(chartArea) {
      const grid = this.options.grid;
      const ctx = this.ctx;
      const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
      let i, ilen;
      const drawLine = function (p1, p2, style) {
        if (!style.width || !style.color) {
          return;
        }
        ctx.save();
        ctx.lineWidth = style.width;
        ctx.strokeStyle = style.color;
        ctx.setLineDash(style.borderDash || []);
        ctx.lineDashOffset = style.borderDashOffset;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      };
      if (grid.display) {
        for (i = 0, ilen = items.length; i < ilen; ++i) {
          const item = items[i];
          if (grid.drawOnChartArea) {
            drawLine({
              x: item.x1,
              y: item.y1
            }, {
              x: item.x2,
              y: item.y2
            }, item);
          }
          if (grid.drawTicks) {
            drawLine({
              x: item.tx1,
              y: item.ty1
            }, {
              x: item.tx2,
              y: item.ty2
            }, {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            });
          }
        }
      }
    }
  }, {
    key: "drawBorder",
    value: function drawBorder() {
      const chart = this.chart,
        ctx = this.ctx,
        _this$options10 = this.options,
        border = _this$options10.border,
        grid = _this$options10.grid;
      const borderOpts = border.setContext(this.getContext());
      const axisWidth = border.display ? borderOpts.width : 0;
      if (!axisWidth) {
        return;
      }
      const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
      const borderValue = this._borderValue;
      let x1, x2, y1, y2;
      if (this.isHorizontal()) {
        x1 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["X"])(chart, this.left, axisWidth) - axisWidth / 2;
        x2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["X"])(chart, this.right, lastLineWidth) + lastLineWidth / 2;
        y1 = y2 = borderValue;
      } else {
        y1 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["X"])(chart, this.top, axisWidth) - axisWidth / 2;
        y2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["X"])(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
        x1 = x2 = borderValue;
      }
      ctx.save();
      ctx.lineWidth = borderOpts.width;
      ctx.strokeStyle = borderOpts.color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "drawLabels",
    value: function drawLabels(chartArea) {
      const optionTicks = this.options.ticks;
      if (!optionTicks.display) {
        return;
      }
      const ctx = this.ctx;
      const area = this._computeLabelArea();
      if (area) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Y"])(ctx, area);
      }
      const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
      let i, ilen;
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        const item = items[i];
        const tickFont = item.font;
        const label = item.label;
        let y = item.textOffset;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Z"])(ctx, label, 0, y, tickFont, item);
      }
      if (area) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["$"])(ctx);
      }
    }
  }, {
    key: "drawTitle",
    value: function drawTitle() {
      const ctx = this.ctx,
        _this$options11 = this.options,
        position = _this$options11.position,
        title = _this$options11.title,
        reverse = _this$options11.reverse;
      if (!title.display) {
        return;
      }
      const font = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(title.font);
      const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(title.padding);
      const align = title.align;
      let offset = font.lineHeight / 2;
      if (position === 'bottom' || position === 'center' || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(position)) {
        offset += padding.bottom;
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(title.text)) {
          offset += font.lineHeight * (title.text.length - 1);
        }
      } else {
        offset += padding.top;
      }
      const _titleArgs = titleArgs(this, offset, position, align),
        titleX = _titleArgs.titleX,
        titleY = _titleArgs.titleY,
        maxWidth = _titleArgs.maxWidth,
        rotation = _titleArgs.rotation;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Z"])(ctx, title.text, 0, 0, font, {
        color: title.color,
        maxWidth,
        rotation,
        textAlign: titleAlign(align, position, reverse),
        textBaseline: 'middle',
        translation: [titleX, titleY]
      });
    }
  }, {
    key: "draw",
    value: function draw(chartArea) {
      if (!this._isVisible()) {
        return;
      }
      this.drawBackground();
      this.drawGrid(chartArea);
      this.drawBorder();
      this.drawTitle();
      this.drawLabels(chartArea);
    }
  }, {
    key: "_layers",
    value: function _layers() {
      var _this10 = this;
      const opts = this.options;
      const tz = opts.ticks && opts.ticks.z || 0;
      const gz = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(opts.grid && opts.grid.z, -1);
      const bz = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(opts.border && opts.border.z, 0);
      if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
        return [{
          z: tz,
          draw: function (chartArea) {
            _this10.draw(chartArea);
          }
        }];
      }
      return [{
        z: gz,
        draw: function (chartArea) {
          _this10.drawBackground();
          _this10.drawGrid(chartArea);
          _this10.drawTitle();
        }
      }, {
        z: bz,
        draw: function () {
          _this10.drawBorder();
        }
      }, {
        z: tz,
        draw: function (chartArea) {
          _this10.drawLabels(chartArea);
        }
      }];
    }
  }, {
    key: "getMatchingVisibleMetas",
    value: function getMatchingVisibleMetas(type) {
      const metas = this.chart.getSortedVisibleDatasetMetas();
      const axisID = this.axis + 'AxisID';
      const result = [];
      let i, ilen;
      for (i = 0, ilen = metas.length; i < ilen; ++i) {
        const meta = metas[i];
        if (meta[axisID] === this.id && (!type || meta.type === type)) {
          result.push(meta);
        }
      }
      return result;
    }
  }, {
    key: "_resolveTickFontOptions",
    value: function _resolveTickFontOptions(index) {
      const opts = this.options.ticks.setContext(this.getContext(index));
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(opts.font);
    }
  }, {
    key: "_maxDigits",
    value: function _maxDigits() {
      const fontSize = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
  }]);
  return Scale;
}(Element);
let TypedRegistry = /*#__PURE__*/function () {
  function TypedRegistry(type, scope, override) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, TypedRegistry);
    this.type = type;
    this.scope = scope;
    this.override = override;
    this.items = Object.create(null);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(TypedRegistry, [{
    key: "isForType",
    value: function isForType(type) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
  }, {
    key: "register",
    value: function register(item) {
      const proto = Object.getPrototypeOf(item);
      let parentScope;
      if (isIChartComponent(proto)) {
        parentScope = this.register(proto);
      }
      const items = this.items;
      const id = item.id;
      const scope = this.scope + '.' + id;
      if (!id) {
        throw new Error('class does not have id: ' + item);
      }
      if (id in items) {
        return scope;
      }
      items[id] = item;
      registerDefaults(item, scope, parentScope);
      if (this.override) {
        _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].override(item.id, item.overrides);
      }
      return scope;
    }
  }, {
    key: "get",
    value: function get(id) {
      return this.items[id];
    }
  }, {
    key: "unregister",
    value: function unregister(item) {
      const items = this.items;
      const id = item.id;
      const scope = this.scope;
      if (id in items) {
        delete items[id];
      }
      if (scope && id in _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"][scope]) {
        delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"][scope][id];
        if (this.override) {
          delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a3"][id];
        }
      }
    }
  }]);
  return TypedRegistry;
}();
function registerDefaults(item, scope, parentScope) {
  const itemDefaults = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a4"])(Object.create(null), [parentScope ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].get(parentScope) : {}, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].get(scope), item.defaults]);
  _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].set(scope, itemDefaults);
  if (item.defaultRoutes) {
    routeDefaults(scope, item.defaultRoutes);
  }
  if (item.descriptors) {
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].describe(scope, item.descriptors);
  }
}
function routeDefaults(scope, routes) {
  Object.keys(routes).forEach(function (property) {
    const propertyParts = property.split('.');
    const sourceName = propertyParts.pop();
    const sourceScope = [scope].concat(propertyParts).join('.');
    const parts = routes[property].split('.');
    const targetName = parts.pop();
    const targetScope = parts.join('.');
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].route(sourceScope, sourceName, targetScope, targetName);
  });
}
function isIChartComponent(proto) {
  return 'id' in proto && 'defaults' in proto;
}
let Registry = /*#__PURE__*/function () {
  function Registry() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Registry);
    this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
    this.elements = new TypedRegistry(Element, 'elements');
    this.plugins = new TypedRegistry(Object, 'plugins');
    this.scales = new TypedRegistry(Scale, 'scales');
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Registry, [{
    key: "add",
    value: function add() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this._each('register', args);
    }
  }, {
    key: "remove",
    value: function remove() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this._each('unregister', args);
    }
  }, {
    key: "addControllers",
    value: function addControllers() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this._each('register', args, this.controllers);
    }
  }, {
    key: "addElements",
    value: function addElements() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this._each('register', args, this.elements);
    }
  }, {
    key: "addPlugins",
    value: function addPlugins() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this._each('register', args, this.plugins);
    }
  }, {
    key: "addScales",
    value: function addScales() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      this._each('register', args, this.scales);
    }
  }, {
    key: "getController",
    value: function getController(id) {
      return this._get(id, this.controllers, 'controller');
    }
  }, {
    key: "getElement",
    value: function getElement(id) {
      return this._get(id, this.elements, 'element');
    }
  }, {
    key: "getPlugin",
    value: function getPlugin(id) {
      return this._get(id, this.plugins, 'plugin');
    }
  }, {
    key: "getScale",
    value: function getScale(id) {
      return this._get(id, this.scales, 'scale');
    }
  }, {
    key: "removeControllers",
    value: function removeControllers() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      this._each('unregister', args, this.controllers);
    }
  }, {
    key: "removeElements",
    value: function removeElements() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      this._each('unregister', args, this.elements);
    }
  }, {
    key: "removePlugins",
    value: function removePlugins() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      this._each('unregister', args, this.plugins);
    }
  }, {
    key: "removeScales",
    value: function removeScales() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      this._each('unregister', args, this.scales);
    }
  }, {
    key: "_each",
    value: function _each(method, args, typedRegistry) {
      var _this11 = this;
      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(args).forEach(function (arg) {
        const reg = typedRegistry || _this11._getRegistryForType(arg);
        if (typedRegistry || reg.isForType(arg) || reg === _this11.plugins && arg.id) {
          _this11._exec(method, reg, arg);
        } else {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(arg, function (item) {
            const itemReg = typedRegistry || _this11._getRegistryForType(item);
            _this11._exec(method, itemReg, item);
          });
        }
      });
    }
  }, {
    key: "_exec",
    value: function _exec(method, registry, component) {
      const camelMethod = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a5"])(method);
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(component['before' + camelMethod], [], component);
      registry[method](component);
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(component['after' + camelMethod], [], component);
    }
  }, {
    key: "_getRegistryForType",
    value: function _getRegistryForType(type) {
      for (let i = 0; i < this._typedRegistries.length; i++) {
        const reg = this._typedRegistries[i];
        if (reg.isForType(type)) {
          return reg;
        }
      }
      return this.plugins;
    }
  }, {
    key: "_get",
    value: function _get(id, typedRegistry, type) {
      const item = typedRegistry.get(id);
      if (item === undefined) {
        throw new Error('"' + id + '" is not a registered ' + type + '.');
      }
      return item;
    }
  }]);
  return Registry;
}();
var registry = /* #__PURE__ */new Registry();
let PluginService = /*#__PURE__*/function () {
  function PluginService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, PluginService);
    this._init = [];
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(PluginService, [{
    key: "notify",
    value: function notify(chart, hook, args, filter) {
      if (hook === 'beforeInit') {
        this._init = this._createDescriptors(chart, true);
        this._notify(this._init, chart, 'install');
      }
      const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
      const result = this._notify(descriptors, chart, hook, args);
      if (hook === 'afterDestroy') {
        this._notify(descriptors, chart, 'stop');
        this._notify(this._init, chart, 'uninstall');
      }
      return result;
    }
  }, {
    key: "_notify",
    value: function _notify(descriptors, chart, hook, args) {
      args = args || {};
      var _iterator11 = _createForOfIteratorHelper(descriptors),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          const descriptor = _step11.value;
          const plugin = descriptor.plugin;
          const method = plugin[hook];
          const params = [chart, args, descriptor.options];
          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(method, params, plugin) === false && args.cancelable) {
            return false;
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      return true;
    }
  }, {
    key: "invalidate",
    value: function invalidate() {
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(this._cache)) {
        this._oldCache = this._cache;
        this._cache = undefined;
      }
    }
  }, {
    key: "_descriptors",
    value: function _descriptors(chart) {
      if (this._cache) {
        return this._cache;
      }
      const descriptors = this._cache = this._createDescriptors(chart);
      this._notifyStateChanges(chart);
      return descriptors;
    }
  }, {
    key: "_createDescriptors",
    value: function _createDescriptors(chart, all) {
      const config = chart && chart.config;
      const options = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(config.options && config.options.plugins, {});
      const plugins = allPlugins(config);
      return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
    }
  }, {
    key: "_notifyStateChanges",
    value: function _notifyStateChanges(chart) {
      const previousDescriptors = this._oldCache || [];
      const descriptors = this._cache;
      const diff = function (a, b) {
        return a.filter(function (x) {
          return !b.some(function (y) {
            return x.plugin.id === y.plugin.id;
          });
        });
      };
      this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
      this._notify(diff(descriptors, previousDescriptors), chart, 'start');
    }
  }]);
  return PluginService;
}();
function allPlugins(config) {
  const localIds = {};
  const plugins = [];
  const keys = Object.keys(registry.plugins.items);
  for (let i = 0; i < keys.length; i++) {
    plugins.push(registry.getPlugin(keys[i]));
  }
  const local = config.plugins || [];
  for (let i1 = 0; i1 < local.length; i1++) {
    const plugin = local[i1];
    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
      localIds[plugin.id] = true;
    }
  }
  return {
    plugins,
    localIds
  };
}
function getOpts(options, all) {
  if (!all && options === false) {
    return null;
  }
  if (options === true) {
    return {};
  }
  return options;
}
function createDescriptors(chart, _ref4, options, all) {
  let plugins = _ref4.plugins,
    localIds = _ref4.localIds;
  const result = [];
  const context = chart.getContext();
  var _iterator12 = _createForOfIteratorHelper(plugins),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      const plugin = _step12.value;
      const id = plugin.id;
      const opts = getOpts(options[id], all);
      if (opts === null) {
        continue;
      }
      result.push({
        plugin,
        options: pluginOpts(chart.config, {
          plugin,
          local: localIds[id]
        }, opts, context)
      });
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  return result;
}
function pluginOpts(config, _ref5, opts, context) {
  let plugin = _ref5.plugin,
    local = _ref5.local;
  const keys = config.pluginScopeKeys(plugin);
  const scopes = config.getOptionScopes(opts, keys);
  if (local && plugin.defaults) {
    scopes.push(plugin.defaults);
  }
  return config.createResolver(scopes, context, [''], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function getIndexAxis(type, options) {
  const datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].datasets[type] || {};
  const datasetOptions = (options.datasets || {})[type] || {};
  return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
  let axis = id;
  if (id === '_index_') {
    axis = indexAxis;
  } else if (id === '_value_') {
    axis = indexAxis === 'x' ? 'y' : 'x';
  }
  return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
  return axis === indexAxis ? '_index_' : '_value_';
}
function axisFromPosition(position) {
  if (position === 'top' || position === 'bottom') {
    return 'x';
  }
  if (position === 'left' || position === 'right') {
    return 'y';
  }
}
function determineAxis(id, scaleOptions) {
  if (id === 'x' || id === 'y' || id === 'r') {
    return id;
  }
  id = scaleOptions.axis || axisFromPosition(scaleOptions.position) || id.length > 1 && determineAxis(id[0].toLowerCase(), scaleOptions);
  if (id) {
    return id;
  }
  throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function mergeScaleConfig(config, options) {
  const chartDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a3"][config.type] || {
    scales: {}
  };
  const configScales = options.scales || {};
  const chartIndexAxis = getIndexAxis(config.type, options);
  const scales = Object.create(null);
  Object.keys(configScales).forEach(function (id) {
    const scaleConf = configScales[id];
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(scaleConf)) {
      return console.error(`Invalid scale configuration for scale: ${id}`);
    }
    if (scaleConf._proxy) {
      return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
    }
    const axis = determineAxis(id, scaleConf);
    const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
    const defaultScaleOptions = chartDefaults.scales || {};
    scales[id] = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ab"])(Object.create(null), [{
      axis
    }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
  });
  config.data.datasets.forEach(function (dataset) {
    const type = dataset.type || config.type;
    const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
    const datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a3"][type] || {};
    const defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(function (defaultID) {
      const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
      const id = dataset[axis + 'AxisID'] || axis;
      scales[id] = scales[id] || Object.create(null);
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ab"])(scales[id], [{
        axis
      }, configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(function (key) {
    const scale = scales[key];
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ab"])(scale, [_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].scales[scale.type], _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].scale]);
  });
  return scales;
}
function initOptions(config) {
  const options = config.options || (config.options = {});
  options.plugins = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(options.plugins, {});
  options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
  data = data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  return data;
}
function initConfig(config) {
  config = config || {};
  config.data = initData(config.data);
  initOptions(config);
  return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
  let keys = keyCache.get(cacheKey);
  if (!keys) {
    keys = generate();
    keyCache.set(cacheKey, keys);
    keysCached.add(keys);
  }
  return keys;
}
const addIfFound = function (set, obj, key) {
  const opts = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["f"])(obj, key);
  if (opts !== undefined) {
    set.add(opts);
  }
};
let Config = /*#__PURE__*/function () {
  function Config(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Config);
    this._config = initConfig(config);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Config, [{
    key: "platform",
    get: function () {
      return this._config.platform;
    }
  }, {
    key: "type",
    get: function () {
      return this._config.type;
    },
    set: function (type) {
      this._config.type = type;
    }
  }, {
    key: "data",
    get: function () {
      return this._config.data;
    },
    set: function (data) {
      this._config.data = initData(data);
    }
  }, {
    key: "options",
    get: function () {
      return this._config.options;
    },
    set: function (options) {
      this._config.options = options;
    }
  }, {
    key: "plugins",
    get: function () {
      return this._config.plugins;
    }
  }, {
    key: "update",
    value: function update() {
      const config = this._config;
      this.clearCache();
      initOptions(config);
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this._scopeCache.clear();
      this._resolverCache.clear();
    }
  }, {
    key: "datasetScopeKeys",
    value: function datasetScopeKeys(datasetType) {
      return cachedKeys(datasetType, function () {
        return [[`datasets.${datasetType}`, '']];
      });
    }
  }, {
    key: "datasetAnimationScopeKeys",
    value: function datasetAnimationScopeKeys(datasetType, transition) {
      return cachedKeys(`${datasetType}.transition.${transition}`, function () {
        return [[`datasets.${datasetType}.transitions.${transition}`, `transitions.${transition}`], [`datasets.${datasetType}`, '']];
      });
    }
  }, {
    key: "datasetElementScopeKeys",
    value: function datasetElementScopeKeys(datasetType, elementType) {
      return cachedKeys(`${datasetType}-${elementType}`, function () {
        return [[`datasets.${datasetType}.elements.${elementType}`, `datasets.${datasetType}`, `elements.${elementType}`, '']];
      });
    }
  }, {
    key: "pluginScopeKeys",
    value: function pluginScopeKeys(plugin) {
      const id = plugin.id;
      const type = this.type;
      return cachedKeys(`${type}-plugin-${id}`, function () {
        return [[`plugins.${id}`].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(plugin.additionalOptionScopes || []))];
      });
    }
  }, {
    key: "_cachedScopes",
    value: function _cachedScopes(mainScope, resetCache) {
      const _scopeCache = this._scopeCache;
      let cache = _scopeCache.get(mainScope);
      if (!cache || resetCache) {
        cache = new Map();
        _scopeCache.set(mainScope, cache);
      }
      return cache;
    }
  }, {
    key: "getOptionScopes",
    value: function getOptionScopes(mainScope, keyLists, resetCache) {
      const options = this.options,
        type = this.type;
      const cache = this._cachedScopes(mainScope, resetCache);
      const cached = cache.get(keyLists);
      if (cached) {
        return cached;
      }
      const scopes = new Set();
      keyLists.forEach(function (keys) {
        if (mainScope) {
          scopes.add(mainScope);
          keys.forEach(function (key) {
            return addIfFound(scopes, mainScope, key);
          });
        }
        keys.forEach(function (key) {
          return addIfFound(scopes, options, key);
        });
        keys.forEach(function (key) {
          return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a3"][type] || {}, key);
        });
        keys.forEach(function (key) {
          return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"], key);
        });
        keys.forEach(function (key) {
          return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a6"], key);
        });
      });
      const array = Array.from(scopes);
      if (array.length === 0) {
        array.push(Object.create(null));
      }
      if (keysCached.has(keyLists)) {
        cache.set(keyLists, array);
      }
      return array;
    }
  }, {
    key: "chartOptionScopes",
    value: function chartOptionScopes() {
      const options = this.options,
        type = this.type;
      return [options, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a3"][type] || {}, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].datasets[type] || {}, {
        type
      }, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"], _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a6"]];
    }
  }, {
    key: "resolveNamedOptions",
    value: function resolveNamedOptions(scopes, names, context) {
      let prefixes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [''];
      const result = {
        $shared: true
      };
      const _getResolver = getResolver(this._resolverCache, scopes, prefixes),
        resolver = _getResolver.resolver,
        subPrefixes = _getResolver.subPrefixes;
      let options = resolver;
      if (needContext(resolver, names)) {
        result.$shared = false;
        context = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a7"])(context) ? context() : context;
        const subResolver = this.createResolver(scopes, context, subPrefixes);
        options = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a8"])(resolver, context, subResolver);
      }
      var _iterator13 = _createForOfIteratorHelper(names),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          const prop = _step13.value;
          result[prop] = options[prop];
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      return result;
    }
  }, {
    key: "createResolver",
    value: function createResolver(scopes, context) {
      let prefixes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [''];
      let descriptorDefaults = arguments.length > 3 ? arguments[3] : undefined;
      const _getResolver2 = getResolver(this._resolverCache, scopes, prefixes),
        resolver = _getResolver2.resolver;
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(context) ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a8"])(resolver, context, undefined, descriptorDefaults) : resolver;
    }
  }]);
  return Config;
}();
function getResolver(resolverCache, scopes, prefixes) {
  let cache = resolverCache.get(scopes);
  if (!cache) {
    cache = new Map();
    resolverCache.set(scopes, cache);
  }
  const cacheKey = prefixes.join();
  let cached = cache.get(cacheKey);
  if (!cached) {
    const resolver = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a9"])(scopes, prefixes);
    cached = {
      resolver,
      subPrefixes: prefixes.filter(function (p) {
        return !p.toLowerCase().includes('hover');
      })
    };
    cache.set(cacheKey, cached);
  }
  return cached;
}
const hasFunction = function (value) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(value) && Object.getOwnPropertyNames(value).reduce(function (acc, key) {
    return acc || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a7"])(value[key]);
  }, false);
};
function needContext(proxy, names) {
  const _descriptors2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aa"])(proxy),
    isScriptable = _descriptors2.isScriptable,
    isIndexable = _descriptors2.isIndexable;
  var _iterator14 = _createForOfIteratorHelper(names),
    _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      const prop = _step14.value;
      const scriptable = isScriptable(prop);
      const indexable = isIndexable(prop);
      const value = (indexable || scriptable) && proxy[prop];
      if (scriptable && (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a7"])(value) || hasFunction(value)) || indexable && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(value)) {
        return true;
      }
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return false;
}
var version = "4.0.1";
const KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];
function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}
function compare2Level(l1, l2) {
  return function (a, b) {
    return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
  };
}
function onAnimationsComplete(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  chart.notifyPlugins('afterRender');
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(animationOptions && animationOptions.onComplete, [context], chart);
}
function onAnimationProgress(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(animationOptions && animationOptions.onProgress, [context], chart);
}
function getCanvas(item) {
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["M"])() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item && item.length) {
    item = item[0];
  }
  if (item && item.canvas) {
    item = item.canvas;
  }
  return item;
}
const instances = {};
const getChart = function (key) {
  const canvas = getCanvas(key);
  return Object.values(instances).filter(function (c) {
    return c.canvas === canvas;
  }).pop();
};
function moveNumericKeys(obj, start, move) {
  const keys = Object.keys(obj);
  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    const key = _keys[_i];
    const intKey = +key;
    if (intKey >= start) {
      const value = obj[key];
      delete obj[key];
      if (move > 0 || intKey > start) {
        obj[intKey + move] = value;
      }
    }
  }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
  if (!inChartArea || e.type === 'mouseout') {
    return null;
  }
  if (isClick) {
    return lastEvent;
  }
  return e;
}
function getDatasetArea(meta) {
  const xScale = meta.xScale,
    yScale = meta.yScale;
  if (xScale && yScale) {
    return {
      left: xScale.left,
      right: xScale.right,
      top: yScale.top,
      bottom: yScale.bottom
    };
  }
}
let Chart = /*#__PURE__*/function () {
  function Chart(item, userConfig) {
    var _this12 = this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Chart);
    const config = this.config = new Config(userConfig);
    const initialCanvas = getCanvas(item);
    const existingChart = getChart(initialCanvas);
    if (existingChart) {
      throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.');
    }
    const options = config.createResolver(config.chartOptionScopes(), this.getContext());
    this.platform = new (config.platform || _detectPlatform(initialCanvas))();
    this.platform.updateConfig(config);
    const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
    const canvas = context && context.canvas;
    const height = canvas && canvas.height;
    const width = canvas && canvas.width;
    this.id = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ac"])();
    this.ctx = context;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this._options = options;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new PluginService();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ad"])(function (mode) {
      return _this12.update(mode);
    }, options.resizeDelay || 0);
    this._dataChanges = [];
    instances[this.id] = this;
    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    animator.listen(this, 'complete', onAnimationsComplete);
    animator.listen(this, 'progress', onAnimationProgress);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Chart, [{
    key: "aspectRatio",
    get: function () {
      const _this$options12 = this.options,
        aspectRatio = _this$options12.aspectRatio,
        maintainAspectRatio = _this$options12.maintainAspectRatio,
        width = this.width,
        height = this.height,
        _aspectRatio = this._aspectRatio;
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(aspectRatio)) {
        return aspectRatio;
      }
      if (maintainAspectRatio && _aspectRatio) {
        return _aspectRatio;
      }
      return height ? width / height : null;
    }
  }, {
    key: "data",
    get: function () {
      return this.config.data;
    },
    set: function (data) {
      this.config.data = data;
    }
  }, {
    key: "options",
    get: function () {
      return this._options;
    },
    set: function (options) {
      this.config.options = options;
    }
  }, {
    key: "registry",
    get: function () {
      return registry;
    }
  }, {
    key: "_initialize",
    value: function _initialize() {
      this.notifyPlugins('beforeInit');
      if (this.options.responsive) {
        this.resize();
      } else {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ae"])(this, this.options.devicePixelRatio);
      }
      this.bindEvents();
      this.notifyPlugins('afterInit');
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["af"])(this.canvas, this.ctx);
      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      animator.stop(this);
      return this;
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      if (!animator.running(this)) {
        this._resize(width, height);
      } else {
        this._resizeBeforeDraw = {
          width,
          height
        };
      }
    }
  }, {
    key: "_resize",
    value: function _resize(width, height) {
      const options = this.options;
      const canvas = this.canvas;
      const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
      const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
      const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
      const mode = this.width ? 'resize' : 'attach';
      this.width = newSize.width;
      this.height = newSize.height;
      this._aspectRatio = this.aspectRatio;
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ae"])(this, newRatio, true)) {
        return;
      }
      this.notifyPlugins('resize', {
        size: newSize
      });
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(options.onResize, [this, newSize], this);
      if (this.attached) {
        if (this._doResize(mode)) {
          this.render();
        }
      }
    }
  }, {
    key: "ensureScalesHaveIDs",
    value: function ensureScalesHaveIDs() {
      const options = this.options;
      const scalesOptions = options.scales || {};
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(scalesOptions, function (axisOptions, axisID) {
        axisOptions.id = axisID;
      });
    }
  }, {
    key: "buildOrUpdateScales",
    value: function buildOrUpdateScales() {
      var _this13 = this;
      const options = this.options;
      const scaleOpts = options.scales;
      const scales = this.scales;
      const updated = Object.keys(scales).reduce(function (obj, id) {
        obj[id] = false;
        return obj;
      }, {});
      let items = [];
      if (scaleOpts) {
        items = items.concat(Object.keys(scaleOpts).map(function (id) {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === 'r';
          const isHorizontal = axis === 'x';
          return {
            options: scaleOptions,
            dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
            dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
          };
        }));
      }
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(items, function (item) {
        const scaleOptions = item.options;
        const id = scaleOptions.id;
        const axis = determineAxis(id, scaleOptions);
        const scaleType = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(scaleOptions.type, item.dtype);
        if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }
        updated[id] = true;
        let scale = null;
        if (id in scales && scales[id].type === scaleType) {
          scale = scales[id];
        } else {
          const scaleClass = registry.getScale(scaleType);
          scale = new scaleClass({
            id,
            type: scaleType,
            ctx: _this13.ctx,
            chart: _this13
          });
          scales[scale.id] = scale;
        }
        scale.init(scaleOptions, options);
      });
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(updated, function (hasUpdated, id) {
        if (!hasUpdated) {
          delete scales[id];
        }
      });
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(scales, function (scale) {
        layouts.configure(_this13, scale, scale.options);
        layouts.addBox(_this13, scale);
      });
    }
  }, {
    key: "_updateMetasets",
    value: function _updateMetasets() {
      const metasets = this._metasets;
      const numData = this.data.datasets.length;
      const numMeta = metasets.length;
      metasets.sort(function (a, b) {
        return a.index - b.index;
      });
      if (numMeta > numData) {
        for (let i = numData; i < numMeta; ++i) {
          this._destroyDatasetMeta(i);
        }
        metasets.splice(numData, numMeta - numData);
      }
      this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
    }
  }, {
    key: "_removeUnreferencedMetasets",
    value: function _removeUnreferencedMetasets() {
      var _this14 = this;
      const metasets = this._metasets,
        datasets = this.data.datasets;
      if (metasets.length > datasets.length) {
        delete this._stacks;
      }
      metasets.forEach(function (meta, index) {
        if (datasets.filter(function (x) {
          return x === meta._dataset;
        }).length === 0) {
          _this14._destroyDatasetMeta(index);
        }
      });
    }
  }, {
    key: "buildOrUpdateControllers",
    value: function buildOrUpdateControllers() {
      const newControllers = [];
      const datasets = this.data.datasets;
      let i, ilen;
      this._removeUnreferencedMetasets();
      for (i = 0, ilen = datasets.length; i < ilen; i++) {
        const dataset = datasets[i];
        let meta = this.getDatasetMeta(i);
        const type = dataset.type || this.config.type;
        if (meta.type && meta.type !== type) {
          this._destroyDatasetMeta(i);
          meta = this.getDatasetMeta(i);
        }
        meta.type = type;
        meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
        meta.order = dataset.order || 0;
        meta.index = i;
        meta.label = '' + dataset.label;
        meta.visible = this.isDatasetVisible(i);
        if (meta.controller) {
          meta.controller.updateIndex(i);
          meta.controller.linkScales();
        } else {
          const ControllerClass = registry.getController(type);
          const _defaults$datasets$ty = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].datasets[type],
            datasetElementType = _defaults$datasets$ty.datasetElementType,
            dataElementType = _defaults$datasets$ty.dataElementType;
          Object.assign(ControllerClass, {
            dataElementType: registry.getElement(dataElementType),
            datasetElementType: datasetElementType && registry.getElement(datasetElementType)
          });
          meta.controller = new ControllerClass(this, i);
          newControllers.push(meta.controller);
        }
      }
      this._updateMetasets();
      return newControllers;
    }
  }, {
    key: "_resetElements",
    value: function _resetElements() {
      var _this15 = this;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(this.data.datasets, function (dataset, datasetIndex) {
        _this15.getDatasetMeta(datasetIndex).controller.reset();
      }, this);
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElements();
      this.notifyPlugins('reset');
    }
  }, {
    key: "update",
    value: function update(mode) {
      const config = this.config;
      config.update();
      const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
      const animsDisabled = this._animationsDisabled = !options.animation;
      this._updateScales();
      this._checkEventBindings();
      this._updateHiddenIndices();
      this._plugins.invalidate();
      if (this.notifyPlugins('beforeUpdate', {
        mode,
        cancelable: true
      }) === false) {
        return;
      }
      const newControllers = this.buildOrUpdateControllers();
      this.notifyPlugins('beforeElementsUpdate');
      let minPadding = 0;
      for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
        const _this$getDatasetMeta = this.getDatasetMeta(i),
          controller = _this$getDatasetMeta.controller;
        const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
        controller.buildOrUpdateElements(reset);
        minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
      }
      minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
      this._updateLayout(minPadding);
      if (!animsDisabled) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(newControllers, function (controller) {
          controller.reset();
        });
      }
      this._updateDatasets(mode);
      this.notifyPlugins('afterUpdate', {
        mode
      });
      this._layers.sort(compare2Level('z', '_idx'));
      const _active = this._active,
        _lastEvent = this._lastEvent;
      if (_lastEvent) {
        this._eventHandler(_lastEvent, true);
      } else if (_active.length) {
        this._updateHoverStyles(_active, _active, true);
      }
      this.render();
    }
  }, {
    key: "_updateScales",
    value: function _updateScales() {
      var _this16 = this;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(this.scales, function (scale) {
        layouts.removeBox(_this16, scale);
      });
      this.ensureScalesHaveIDs();
      this.buildOrUpdateScales();
    }
  }, {
    key: "_checkEventBindings",
    value: function _checkEventBindings() {
      const options = this.options;
      const existingEvents = new Set(Object.keys(this._listeners));
      const newEvents = new Set(options.events);
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ag"])(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
        this.unbindEvents();
        this.bindEvents();
      }
    }
  }, {
    key: "_updateHiddenIndices",
    value: function _updateHiddenIndices() {
      const _hiddenIndices = this._hiddenIndices;
      const changes = this._getUniformDataChanges() || [];
      var _iterator15 = _createForOfIteratorHelper(changes),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          const _ref6 = _step15.value;
          const method = _ref6.method;
          const start = _ref6.start;
          const count = _ref6.count;
          const move = method === '_removeElements' ? -count : count;
          moveNumericKeys(_hiddenIndices, start, move);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
    }
  }, {
    key: "_getUniformDataChanges",
    value: function _getUniformDataChanges() {
      const _dataChanges = this._dataChanges;
      if (!_dataChanges || !_dataChanges.length) {
        return;
      }
      this._dataChanges = [];
      const datasetCount = this.data.datasets.length;
      const makeSet = function (idx) {
        return new Set(_dataChanges.filter(function (c) {
          return c[0] === idx;
        }).map(function (c, i) {
          return i + ',' + c.splice(1).join(',');
        }));
      };
      const changeSet = makeSet(0);
      for (let i = 1; i < datasetCount; i++) {
        if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ag"])(changeSet, makeSet(i))) {
          return;
        }
      }
      return Array.from(changeSet).map(function (c) {
        return c.split(',');
      }).map(function (a) {
        return {
          method: a[1],
          start: +a[2],
          count: +a[3]
        };
      });
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout(minPadding) {
      var _this17 = this;
      if (this.notifyPlugins('beforeLayout', {
        cancelable: true
      }) === false) {
        return;
      }
      layouts.update(this, this.width, this.height, minPadding);
      const area = this.chartArea;
      const noArea = area.width <= 0 || area.height <= 0;
      this._layers = [];
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(this.boxes, function (box) {
        var _this17$_layers;
        if (noArea && box.position === 'chartArea') {
          return;
        }
        if (box.configure) {
          box.configure();
        }
        (_this17$_layers = _this17._layers).push.apply(_this17$_layers, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(box._layers()));
      }, this);
      this._layers.forEach(function (item, index) {
        item._idx = index;
      });
      this.notifyPlugins('afterLayout');
    }
  }, {
    key: "_updateDatasets",
    value: function _updateDatasets(mode) {
      if (this.notifyPlugins('beforeDatasetsUpdate', {
        mode,
        cancelable: true
      }) === false) {
        return;
      }
      for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        this.getDatasetMeta(i).controller.configure();
      }
      for (let i1 = 0, ilen1 = this.data.datasets.length; i1 < ilen1; ++i1) {
        this._updateDataset(i1, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a7"])(mode) ? mode({
          datasetIndex: i1
        }) : mode);
      }
      this.notifyPlugins('afterDatasetsUpdate', {
        mode
      });
    }
  }, {
    key: "_updateDataset",
    value: function _updateDataset(index, mode) {
      const meta = this.getDatasetMeta(index);
      const args = {
        meta,
        index,
        mode,
        cancelable: true
      };
      if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
        return;
      }
      meta.controller._update(mode);
      args.cancelable = false;
      this.notifyPlugins('afterDatasetUpdate', args);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.notifyPlugins('beforeRender', {
        cancelable: true
      }) === false) {
        return;
      }
      if (animator.has(this)) {
        if (this.attached && !animator.running(this)) {
          animator.start(this);
        }
      } else {
        this.draw();
        onAnimationsComplete({
          chart: this
        });
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      let i;
      if (this._resizeBeforeDraw) {
        const _this$_resizeBeforeDr = this._resizeBeforeDraw,
          width = _this$_resizeBeforeDr.width,
          height = _this$_resizeBeforeDr.height;
        this._resize(width, height);
        this._resizeBeforeDraw = null;
      }
      this.clear();
      if (this.width <= 0 || this.height <= 0) {
        return;
      }
      if (this.notifyPlugins('beforeDraw', {
        cancelable: true
      }) === false) {
        return;
      }
      const layers = this._layers;
      for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
        layers[i].draw(this.chartArea);
      }
      this._drawDatasets();
      for (; i < layers.length; ++i) {
        layers[i].draw(this.chartArea);
      }
      this.notifyPlugins('afterDraw');
    }
  }, {
    key: "_getSortedDatasetMetas",
    value: function _getSortedDatasetMetas(filterVisible) {
      const metasets = this._sortedMetasets;
      const result = [];
      let i, ilen;
      for (i = 0, ilen = metasets.length; i < ilen; ++i) {
        const meta = metasets[i];
        if (!filterVisible || meta.visible) {
          result.push(meta);
        }
      }
      return result;
    }
  }, {
    key: "getSortedVisibleDatasetMetas",
    value: function getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(true);
    }
  }, {
    key: "_drawDatasets",
    value: function _drawDatasets() {
      if (this.notifyPlugins('beforeDatasetsDraw', {
        cancelable: true
      }) === false) {
        return;
      }
      const metasets = this.getSortedVisibleDatasetMetas();
      for (let i = metasets.length - 1; i >= 0; --i) {
        this._drawDataset(metasets[i]);
      }
      this.notifyPlugins('afterDatasetsDraw');
    }
  }, {
    key: "_drawDataset",
    value: function _drawDataset(meta) {
      const ctx = this.ctx;
      const clip = meta._clip;
      const useClip = !clip.disabled;
      const area = getDatasetArea(meta) || this.chartArea;
      const args = {
        meta,
        index: meta.index,
        cancelable: true
      };
      if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
        return;
      }
      if (useClip) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Y"])(ctx, {
          left: clip.left === false ? 0 : area.left - clip.left,
          right: clip.right === false ? this.width : area.right + clip.right,
          top: clip.top === false ? 0 : area.top - clip.top,
          bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
        });
      }
      meta.controller.draw();
      if (useClip) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["$"])(ctx);
      }
      args.cancelable = false;
      this.notifyPlugins('afterDatasetDraw', args);
    }
  }, {
    key: "isPointInArea",
    value: function isPointInArea(point) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["C"])(point, this.chartArea, this._minPadding);
    }
  }, {
    key: "getElementsAtEventForMode",
    value: function getElementsAtEventForMode(e, mode, options, useFinalPosition) {
      const method = Interaction.modes[mode];
      if (typeof method === 'function') {
        return method(this, e, options, useFinalPosition);
      }
      return [];
    }
  }, {
    key: "getDatasetMeta",
    value: function getDatasetMeta(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      const metasets = this._metasets;
      let meta = metasets.filter(function (x) {
        return x && x._dataset === dataset;
      }).pop();
      if (!meta) {
        meta = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: dataset && dataset.order || 0,
          index: datasetIndex,
          _dataset: dataset,
          _parsed: [],
          _sorted: false
        };
        metasets.push(meta);
      }
      return meta;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.$context || (this.$context = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["j"])(null, {
        chart: this,
        type: 'chart'
      }));
    }
  }, {
    key: "getVisibleDatasetCount",
    value: function getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
  }, {
    key: "isDatasetVisible",
    value: function isDatasetVisible(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      if (!dataset) {
        return false;
      }
      const meta = this.getDatasetMeta(datasetIndex);
      return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
    }
  }, {
    key: "setDatasetVisibility",
    value: function setDatasetVisibility(datasetIndex, visible) {
      const meta = this.getDatasetMeta(datasetIndex);
      meta.hidden = !visible;
    }
  }, {
    key: "toggleDataVisibility",
    value: function toggleDataVisibility(index) {
      this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
  }, {
    key: "getDataVisibility",
    value: function getDataVisibility(index) {
      return !this._hiddenIndices[index];
    }
  }, {
    key: "_updateVisibility",
    value: function _updateVisibility(datasetIndex, dataIndex, visible) {
      const mode = visible ? 'show' : 'hide';
      const meta = this.getDatasetMeta(datasetIndex);
      const anims = meta.controller._resolveAnimations(undefined, mode);
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["h"])(dataIndex)) {
        meta.data[dataIndex].hidden = !visible;
        this.update();
      } else {
        this.setDatasetVisibility(datasetIndex, visible);
        anims.update(meta, {
          visible
        });
        this.update(function (ctx) {
          return ctx.datasetIndex === datasetIndex ? mode : undefined;
        });
      }
    }
  }, {
    key: "hide",
    value: function hide(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, false);
    }
  }, {
    key: "show",
    value: function show(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, true);
    }
  }, {
    key: "_destroyDatasetMeta",
    value: function _destroyDatasetMeta(datasetIndex) {
      const meta = this._metasets[datasetIndex];
      if (meta && meta.controller) {
        meta.controller._destroy();
      }
      delete this._metasets[datasetIndex];
    }
  }, {
    key: "_stop",
    value: function _stop() {
      let i, ilen;
      this.stop();
      animator.remove(this);
      for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
        this._destroyDatasetMeta(i);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.notifyPlugins('beforeDestroy');
      const canvas = this.canvas,
        ctx = this.ctx;
      this._stop();
      this.config.clearCache();
      if (canvas) {
        this.unbindEvents();
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["af"])(canvas, ctx);
        this.platform.releaseContext(ctx);
        this.canvas = null;
        this.ctx = null;
      }
      delete instances[this.id];
      this.notifyPlugins('afterDestroy');
    }
  }, {
    key: "toBase64Image",
    value: function toBase64Image() {
      var _this$canvas;
      return (_this$canvas = this.canvas).toDataURL.apply(_this$canvas, arguments);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.bindUserEvents();
      if (this.options.responsive) {
        this.bindResponsiveEvents();
      } else {
        this.attached = true;
      }
    }
  }, {
    key: "bindUserEvents",
    value: function bindUserEvents() {
      var _this18 = this;
      const listeners = this._listeners;
      const platform = this.platform;
      const _add = function (type, listener) {
        platform.addEventListener(_this18, type, listener);
        listeners[type] = listener;
      };
      const listener = function (e, x, y) {
        e.offsetX = x;
        e.offsetY = y;
        _this18._eventHandler(e);
      };
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(this.options.events, function (type) {
        return _add(type, listener);
      });
    }
  }, {
    key: "bindResponsiveEvents",
    value: function bindResponsiveEvents() {
      var _this19 = this;
      if (!this._responsiveListeners) {
        this._responsiveListeners = {};
      }
      const listeners = this._responsiveListeners;
      const platform = this.platform;
      const _add = function (type, listener) {
        platform.addEventListener(_this19, type, listener);
        listeners[type] = listener;
      };
      const _remove = function (type, listener) {
        if (listeners[type]) {
          platform.removeEventListener(_this19, type, listener);
          delete listeners[type];
        }
      };
      const listener = function (width, height) {
        if (_this19.canvas) {
          _this19.resize(width, height);
        }
      };
      let detached;
      const attached = function () {
        _remove('attach', attached);
        _this19.attached = true;
        _this19.resize();
        _add('resize', listener);
        _add('detach', detached);
      };
      detached = function () {
        _this19.attached = false;
        _remove('resize', listener);
        _this19._stop();
        _this19._resize(0, 0);
        _add('attach', attached);
      };
      if (platform.isAttached(this.canvas)) {
        attached();
      } else {
        detached();
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this20 = this;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(this._listeners, function (listener, type) {
        _this20.platform.removeEventListener(_this20, type, listener);
      });
      this._listeners = {};
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(this._responsiveListeners, function (listener, type) {
        _this20.platform.removeEventListener(_this20, type, listener);
      });
      this._responsiveListeners = undefined;
    }
  }, {
    key: "updateHoverStyle",
    value: function updateHoverStyle(items, mode, enabled) {
      const prefix = enabled ? 'set' : 'remove';
      let meta, item, i, ilen;
      if (mode === 'dataset') {
        meta = this.getDatasetMeta(items[0].datasetIndex);
        meta.controller['_' + prefix + 'DatasetHoverStyle']();
      }
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
        if (controller) {
          controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
        }
      }
    }
  }, {
    key: "getActiveElements",
    value: function getActiveElements() {
      return this._active || [];
    }
  }, {
    key: "setActiveElements",
    value: function setActiveElements(activeElements) {
      var _this21 = this;
      const lastActive = this._active || [];
      const active = activeElements.map(function (_ref7) {
        let datasetIndex = _ref7.datasetIndex,
          index = _ref7.index;
        const meta = _this21.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error('No dataset found at index ' + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index],
          index
        };
      });
      const changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ah"])(active, lastActive);
      if (changed) {
        this._active = active;
        this._lastEvent = null;
        this._updateHoverStyles(active, lastActive);
      }
    }
  }, {
    key: "notifyPlugins",
    value: function notifyPlugins(hook, args, filter) {
      return this._plugins.notify(this, hook, args, filter);
    }
  }, {
    key: "isPluginEnabled",
    value: function isPluginEnabled(pluginId) {
      return this._plugins._cache.filter(function (p) {
        return p.plugin.id === pluginId;
      }).length === 1;
    }
  }, {
    key: "_updateHoverStyles",
    value: function _updateHoverStyles(active, lastActive, replay) {
      const hoverOptions = this.options.hover;
      const diff = function (a, b) {
        return a.filter(function (x) {
          return !b.some(function (y) {
            return x.datasetIndex === y.datasetIndex && x.index === y.index;
          });
        });
      };
      const deactivated = diff(lastActive, active);
      const activated = replay ? active : diff(active, lastActive);
      if (deactivated.length) {
        this.updateHoverStyle(deactivated, hoverOptions.mode, false);
      }
      if (activated.length && hoverOptions.mode) {
        this.updateHoverStyle(activated, hoverOptions.mode, true);
      }
    }
  }, {
    key: "_eventHandler",
    value: function _eventHandler(e, replay) {
      var _this22 = this;
      const args = {
        event: e,
        replay,
        cancelable: true,
        inChartArea: this.isPointInArea(e)
      };
      const eventFilter = function (plugin) {
        return (plugin.options.events || _this22.options.events).includes(e.native.type);
      };
      if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
        return;
      }
      const changed = this._handleEvent(e, replay, args.inChartArea);
      args.cancelable = false;
      this.notifyPlugins('afterEvent', args, eventFilter);
      if (changed || args.changed) {
        this.render();
      }
      return this;
    }
  }, {
    key: "_handleEvent",
    value: function _handleEvent(e, replay, inChartArea) {
      const _this$_active = this._active,
        lastActive = _this$_active === void 0 ? [] : _this$_active,
        options = this.options;
      const useFinalPosition = replay;
      const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
      const isClick = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ai"])(e);
      const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
      if (inChartArea) {
        this._lastEvent = null;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(options.onHover, [e, active, this], this);
        if (isClick) {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(options.onClick, [e, active, this], this);
        }
      }
      const changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ah"])(active, lastActive);
      if (changed || replay) {
        this._active = active;
        this._updateHoverStyles(active, lastActive, replay);
      }
      this._lastEvent = lastEvent;
      return changed;
    }
  }, {
    key: "_getActiveElements",
    value: function _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
      if (e.type === 'mouseout') {
        return [];
      }
      if (!inChartArea) {
        return lastActive;
      }
      const hoverOptions = this.options.hover;
      return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
  }], [{
    key: "register",
    value: function register() {
      registry.add.apply(registry, arguments);
      invalidatePlugins();
    }
  }, {
    key: "unregister",
    value: function unregister() {
      registry.remove.apply(registry, arguments);
      invalidatePlugins();
    }
  }]);
  return Chart;
}();
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Chart, "defaults", _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"]);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Chart, "instances", instances);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Chart, "overrides", _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a3"]);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Chart, "registry", registry);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Chart, "version", version);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Chart, "getChart", getChart);
function invalidatePlugins() {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(Chart.instances, function (chart) {
    return chart._plugins.invalidate();
  });
}
var Chart$1 = Chart;
function clipArc(ctx, element, endAngle) {
  const startAngle = element.startAngle,
    pixelMargin = element.pixelMargin,
    x = element.x,
    y = element.y,
    outerRadius = element.outerRadius,
    innerRadius = element.innerRadius;
  let angleMargin = pixelMargin / outerRadius;
  // Draw an inner border by clipping the arc and drawing a double-width border
  // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
  if (innerRadius > pixelMargin) {
    angleMargin = pixelMargin / innerRadius;
    ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"], startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"]);
  }
  ctx.closePath();
  ctx.clip();
}
function toRadiusCorners(value) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ak"])(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
/**
 * Parse border radius from the provided options
 */
function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
  const o = toRadiusCorners(arc.options.borderRadius);
  const halfThickness = (outerRadius - innerRadius) / 2;
  const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
  // Outer limits are complicated. We want to compute the available angular distance at
  // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
  // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
  //
  // If the borderRadius is large, that value can become negative.
  // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
  // we know that the thickness term will dominate and compute the limits at that point
  const computeOuterLimit = function (val) {
    const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(val, 0, Math.min(halfThickness, outerArcLimit));
  };
  return {
    outerStart: computeOuterLimit(o.outerStart),
    outerEnd: computeOuterLimit(o.outerEnd),
    innerStart: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(o.innerStart, 0, innerLimit),
    innerEnd: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(o.innerEnd, 0, innerLimit)
  };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */
function rThetaToXY(r, theta, x, y) {
  return {
    x: x + r * Math.cos(theta),
    y: y + r * Math.sin(theta)
  };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */
function pathArc(ctx, element, offset, spacing, end, circular) {
  const x = element.x,
    y = element.y,
    start = element.startAngle,
    pixelMargin = element.pixelMargin,
    innerR = element.innerRadius;
  const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
  const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
  let spacingOffset = 0;
  const alpha = end - start;
  if (spacing) {
    // When spacing is present, it is the same for all items
    // So we adjust the start and end angle of the arc such that
    // the distance is the same as it would be without the spacing
    const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
    const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
    const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
    const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
    spacingOffset = (alpha - adjustedAngle) / 2;
  }
  const beta = Math.max(0.001, alpha * outerRadius - offset / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"]) / outerRadius;
  const angleOffset = (alpha - beta) / 2;
  const startAngle = start + angleOffset + spacingOffset;
  const endAngle = end - angleOffset - spacingOffset;
  const _parseBorderRadius$ = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle),
    outerStart = _parseBorderRadius$.outerStart,
    outerEnd = _parseBorderRadius$.outerEnd,
    innerStart = _parseBorderRadius$.innerStart,
    innerEnd = _parseBorderRadius$.innerEnd;
  const outerStartAdjustedRadius = outerRadius - outerStart;
  const outerEndAdjustedRadius = outerRadius - outerEnd;
  const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
  const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
  const innerStartAdjustedRadius = innerRadius + innerStart;
  const innerEndAdjustedRadius = innerRadius + innerEnd;
  const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
  const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
  ctx.beginPath();
  if (circular) {
    // The first arc segments from point 1 to point a to point 2
    const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
    ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
    ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
    // The corner segment from point 2 to point 3
    if (outerEnd > 0) {
      const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"]);
    }
    // The line from point 3 to point 4
    const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
    ctx.lineTo(p4.x, p4.y);
    // The corner segment from point 4 to point 5
    if (innerEnd > 0) {
      const pCenter1 = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
      ctx.arc(pCenter1.x, pCenter1.y, innerEnd, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"], innerEndAdjustedAngle + Math.PI);
    }
    // The inner arc from point 5 to point b to point 6
    const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
    ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
    ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
    // The corner segment from point 6 to point 7
    if (innerStart > 0) {
      const pCenter2 = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
      ctx.arc(pCenter2.x, pCenter2.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"]);
    }
    // The line from point 7 to point 8
    const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
    ctx.lineTo(p8.x, p8.y);
    // The corner segment from point 8 to point 1
    if (outerStart > 0) {
      const pCenter3 = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
      ctx.arc(pCenter3.x, pCenter3.y, outerStart, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"], outerStartAdjustedAngle);
    }
  } else {
    ctx.moveTo(x, y);
    const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
    const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
    ctx.lineTo(outerStartX, outerStartY);
    const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
    const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
    ctx.lineTo(outerEndX, outerEndY);
  }
  ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
  const fullCircles = element.fullCircles,
    startAngle = element.startAngle,
    circumference = element.circumference;
  let endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    for (let i = 0; i < fullCircles; ++i) {
      ctx.fill();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + (circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"]);
    }
  }
  pathArc(ctx, element, offset, spacing, endAngle, circular);
  ctx.fill();
  return endAngle;
}
function drawBorder(ctx, element, offset, spacing, circular) {
  const fullCircles = element.fullCircles,
    startAngle = element.startAngle,
    circumference = element.circumference,
    options = element.options;
  const borderWidth = options.borderWidth,
    borderJoinStyle = options.borderJoinStyle;
  const inner = options.borderAlign === 'inner';
  if (!borderWidth) {
    return;
  }
  if (inner) {
    ctx.lineWidth = borderWidth * 2;
    ctx.lineJoin = borderJoinStyle || 'round';
  } else {
    ctx.lineWidth = borderWidth;
    ctx.lineJoin = borderJoinStyle || 'bevel';
  }
  let endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    for (let i = 0; i < fullCircles; ++i) {
      ctx.stroke();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + (circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"]);
    }
  }
  if (inner) {
    clipArc(ctx, element, endAngle);
  }
  if (!fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.stroke();
  }
}
let ArcElement = /*#__PURE__*/function (_Element2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ArcElement, _Element2);
  var _super12 = _createSuper(ArcElement);
  function ArcElement(cfg) {
    var _this23;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, ArcElement);
    _this23 = _super12.call(this);
    _this23.options = undefined;
    _this23.circumference = undefined;
    _this23.startAngle = undefined;
    _this23.endAngle = undefined;
    _this23.innerRadius = undefined;
    _this23.outerRadius = undefined;
    _this23.pixelMargin = 0;
    _this23.fullCircles = 0;
    if (cfg) {
      Object.assign(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this23), cfg);
    }
    return _this23;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(ArcElement, [{
    key: "inRange",
    value: function inRange(chartX, chartY, useFinalPosition) {
      const point = this.getProps(['x', 'y'], useFinalPosition);
      const _getAngleFromPoint2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["D"])(point, {
          x: chartX,
          y: chartY
        }),
        angle = _getAngleFromPoint2.angle,
        distance = _getAngleFromPoint2.distance;
      const _this$getProps2 = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition),
        startAngle = _this$getProps2.startAngle,
        endAngle = _this$getProps2.endAngle,
        innerRadius = _this$getProps2.innerRadius,
        outerRadius = _this$getProps2.outerRadius,
        circumference = _this$getProps2.circumference;
      const rAdjust = this.options.spacing / 2;
      const _circumference = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(circumference, endAngle - startAngle);
      const betweenAngles = _circumference >= _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"] || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["p"])(angle, startAngle, endAngle);
      const withinRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aj"])(distance, innerRadius + rAdjust, outerRadius + rAdjust);
      return betweenAngles && withinRadius;
    }
  }, {
    key: "getCenterPoint",
    value: function getCenterPoint(useFinalPosition) {
      const _this$getProps3 = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition),
        x = _this$getProps3.x,
        y = _this$getProps3.y,
        startAngle = _this$getProps3.startAngle,
        endAngle = _this$getProps3.endAngle,
        innerRadius = _this$getProps3.innerRadius,
        outerRadius = _this$getProps3.outerRadius;
      const _this$options13 = this.options,
        offset = _this$options13.offset,
        spacing = _this$options13.spacing;
      const halfAngle = (startAngle + endAngle) / 2;
      const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
      return {
        x: x + Math.cos(halfAngle) * halfRadius,
        y: y + Math.sin(halfAngle) * halfRadius
      };
    }
  }, {
    key: "tooltipPosition",
    value: function tooltipPosition(useFinalPosition) {
      return this.getCenterPoint(useFinalPosition);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      const options = this.options,
        circumference = this.circumference;
      const offset = (options.offset || 0) / 4;
      const spacing = (options.spacing || 0) / 2;
      const circular = options.circular;
      this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
      this.fullCircles = circumference > _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"] ? Math.floor(circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"]) : 0;
      if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
        return;
      }
      ctx.save();
      const halfAngle = (this.startAngle + this.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
      const fix = 1 - Math.sin(Math.min(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"], circumference || 0));
      const radiusOffset = offset * fix;
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      drawArc(ctx, this, radiusOffset, spacing, circular);
      drawBorder(ctx, this, radiusOffset, spacing, circular);
      ctx.restore();
    }
  }]);
  return ArcElement;
}(Element);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ArcElement, "id", 'arc');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ArcElement, "defaults", {
  borderAlign: 'center',
  borderColor: '#fff',
  borderJoinStyle: undefined,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: undefined,
  circular: true
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ArcElement, "defaultRoutes", {
  backgroundColor: 'backgroundColor'
});
function setStyle(ctx, options) {
  let style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : options;
  ctx.lineCap = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(style.borderCapStyle, options.borderCapStyle);
  ctx.setLineDash(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(style.borderDash, options.borderDash));
  ctx.lineDashOffset = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(style.borderDashOffset, options.borderDashOffset);
  ctx.lineJoin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(style.borderJoinStyle, options.borderJoinStyle);
  ctx.lineWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(style.borderWidth, options.borderWidth);
  ctx.strokeStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ar"];
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["as"];
  }
  return lineTo;
}
function pathVars(points, segment) {
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const count = points.length;
  const _params$start = params.start,
    paramsStart = _params$start === void 0 ? 0 : _params$start,
    _params$end = params.end,
    paramsEnd = _params$end === void 0 ? count - 1 : _params$end;
  const segmentStart = segment.start,
    segmentEnd = segment.end;
  const start = Math.max(paramsStart, segmentStart);
  const end = Math.min(paramsEnd, segmentEnd);
  const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
  return {
    count,
    start,
    loop: segment.loop,
    ilen: end < start && !outside ? count + end - start : end - start
  };
}
function pathSegment(ctx, line, segment, params) {
  const points = line.points,
    options = line.options;
  const _pathVars = pathVars(points, segment, params),
    count = _pathVars.count,
    start = _pathVars.start,
    loop = _pathVars.loop,
    ilen = _pathVars.ilen;
  const lineMethod = getLineMethod(options);
  let _ref8 = params || {},
    _ref8$move = _ref8.move,
    move = _ref8$move === void 0 ? true : _ref8$move,
    reverse = _ref8.reverse;
  let i, point, prev;
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    prev = point;
  }
  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }
  return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
  const points = line.points;
  const _pathVars2 = pathVars(points, segment, params),
    count = _pathVars2.count,
    start = _pathVars2.start,
    ilen = _pathVars2.ilen;
  const _ref9 = params || {},
    _ref9$move = _ref9.move,
    move = _ref9$move === void 0 ? true : _ref9$move,
    reverse = _ref9.reverse;
  let avgX = 0;
  let countX = 0;
  let i, point, prevX, minY, maxY, lastY;
  const pointIndex = function (index) {
    return (start + (reverse ? ilen - index : index)) % count;
  };
  const drawX = function () {
    if (minY !== maxY) {
      ctx.lineTo(avgX, maxY);
      ctx.lineTo(avgX, minY);
      ctx.lineTo(avgX, lastY);
    }
  };
  if (move) {
    point = points[pointIndex(0)];
    ctx.moveTo(point.x, point.y);
  }
  for (i = 0; i <= ilen; ++i) {
    point = points[pointIndex(i)];
    if (point.skip) {
      continue;
    }
    const x = point.x;
    const y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      avgX = (countX * avgX + x) / ++countX;
    } else {
      drawX();
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }
    lastY = y;
  }
  drawX();
}
function _getSegmentMethod(line) {
  const opts = line.options;
  const borderDash = opts.borderDash && opts.borderDash.length;
  const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ao"];
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ap"];
  }
  return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aq"];
}
function strokePathWithCache(ctx, line, start, count) {
  let path = line._path;
  if (!path) {
    path = line._path = new Path2D();
    if (line.path(path, start, count)) {
      path.closePath();
    }
  }
  setStyle(ctx, line.options);
  ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
  const segments = line.segments,
    options = line.options;
  const segmentMethod = _getSegmentMethod(line);
  var _iterator16 = _createForOfIteratorHelper(segments),
    _step16;
  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      const segment = _step16.value;
      setStyle(ctx, options, segment.style);
      ctx.beginPath();
      if (segmentMethod(ctx, line, segment, {
        start,
        end: start + count - 1
      })) {
        ctx.closePath();
      }
      ctx.stroke();
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
}
const usePath2D = typeof Path2D === 'function';
function _draw(ctx, line, start, count) {
  if (usePath2D && !line.options.segment) {
    strokePathWithCache(ctx, line, start, count);
  } else {
    strokePathDirect(ctx, line, start, count);
  }
}
let LineElement = /*#__PURE__*/function (_Element3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LineElement, _Element3);
  var _super13 = _createSuper(LineElement);
  function LineElement(cfg) {
    var _this24;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, LineElement);
    _this24 = _super13.call(this);
    _this24.animated = true;
    _this24.options = undefined;
    _this24._chart = undefined;
    _this24._loop = undefined;
    _this24._fullLoop = undefined;
    _this24._path = undefined;
    _this24._points = undefined;
    _this24._segments = undefined;
    _this24._decimated = false;
    _this24._pointsUpdated = false;
    _this24._datasetIndex = undefined;
    if (cfg) {
      Object.assign(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this24), cfg);
    }
    return _this24;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(LineElement, [{
    key: "updateControlPoints",
    value: function updateControlPoints(chartArea, indexAxis) {
      const options = this.options;
      if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
        const loop = options.spanGaps ? this._loop : this._fullLoop;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["al"])(this._points, options, chartArea, loop, indexAxis);
        this._pointsUpdated = true;
      }
    }
  }, {
    key: "points",
    get: function () {
      return this._points;
    },
    set: function (points) {
      this._points = points;
      delete this._segments;
      delete this._path;
      this._pointsUpdated = false;
    }
  }, {
    key: "segments",
    get: function () {
      return this._segments || (this._segments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["am"])(this, this.options.segment));
    }
  }, {
    key: "first",
    value: function first() {
      const segments = this.segments;
      const points = this.points;
      return segments.length && points[segments[0].start];
    }
  }, {
    key: "last",
    value: function last() {
      const segments = this.segments;
      const points = this.points;
      const count = segments.length;
      return count && points[segments[count - 1].end];
    }
  }, {
    key: "interpolate",
    value: function interpolate(point, property) {
      const options = this.options;
      const value = point[property];
      const points = this.points;
      const segments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["an"])(this, {
        property,
        start: value,
        end: value
      });
      if (!segments.length) {
        return;
      }
      const result = [];
      const _interpolate = _getInterpolationMethod(options);
      let i, ilen;
      for (i = 0, ilen = segments.length; i < ilen; ++i) {
        const _segments$i = segments[i],
          start = _segments$i.start,
          end = _segments$i.end;
        const p1 = points[start];
        const p2 = points[end];
        if (p1 === p2) {
          result.push(p1);
          continue;
        }
        const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
        const interpolated = _interpolate(p1, p2, t, options.stepped);
        interpolated[property] = point[property];
        result.push(interpolated);
      }
      return result.length === 1 ? result[0] : result;
    }
  }, {
    key: "pathSegment",
    value: function pathSegment(ctx, segment, params) {
      const segmentMethod = _getSegmentMethod(this);
      return segmentMethod(ctx, this, segment, params);
    }
  }, {
    key: "path",
    value: function path(ctx, start, count) {
      const segments = this.segments;
      const segmentMethod = _getSegmentMethod(this);
      let loop = this._loop;
      start = start || 0;
      count = count || this.points.length - start;
      var _iterator17 = _createForOfIteratorHelper(segments),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          const segment = _step17.value;
          loop &= segmentMethod(ctx, this, segment, {
            start,
            end: start + count - 1
          });
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      return !!loop;
    }
  }, {
    key: "draw",
    value: function draw(ctx, chartArea, start, count) {
      const options = this.options || {};
      const points = this.points || [];
      if (points.length && options.borderWidth) {
        ctx.save();
        _draw(ctx, this, start, count);
        ctx.restore();
      }
      if (this.animated) {
        this._pointsUpdated = false;
        this._path = undefined;
      }
    }
  }]);
  return LineElement;
}(Element);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LineElement, "id", 'line');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LineElement, "defaults", {
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderWidth: 3,
  capBezierPoints: true,
  cubicInterpolationMode: 'default',
  fill: false,
  spanGaps: false,
  stepped: false,
  tension: 0
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LineElement, "defaultRoutes", {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LineElement, "descriptors", {
  _scriptable: true,
  _indexable: function (name) {
    return name !== 'borderDash' && name !== 'fill';
  }
});
function inRange$1(el, pos, axis, useFinalPosition) {
  const options = el.options;
  const _el$getProps = el.getProps([axis], useFinalPosition),
    value = _el$getProps[axis];
  return Math.abs(pos - value) < options.radius + options.hitRadius;
}
let PointElement = /*#__PURE__*/function (_Element4) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PointElement, _Element4);
  var _super14 = _createSuper(PointElement);
  /**
  * @type {any}
  */

  /**
  * @type {any}
  */

  function PointElement(cfg) {
    var _this25;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, PointElement);
    _this25 = _super14.call(this);
    _this25.options = undefined;
    _this25.parsed = undefined;
    _this25.skip = undefined;
    _this25.stop = undefined;
    if (cfg) {
      Object.assign(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this25), cfg);
    }
    return _this25;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(PointElement, [{
    key: "inRange",
    value: function inRange(mouseX, mouseY, useFinalPosition) {
      const options = this.options;
      const _this$getProps4 = this.getProps(['x', 'y'], useFinalPosition),
        x = _this$getProps4.x,
        y = _this$getProps4.y;
      return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
  }, {
    key: "inXRange",
    value: function inXRange(mouseX, useFinalPosition) {
      return inRange$1(this, mouseX, 'x', useFinalPosition);
    }
  }, {
    key: "inYRange",
    value: function inYRange(mouseY, useFinalPosition) {
      return inRange$1(this, mouseY, 'y', useFinalPosition);
    }
  }, {
    key: "getCenterPoint",
    value: function getCenterPoint(useFinalPosition) {
      const _this$getProps5 = this.getProps(['x', 'y'], useFinalPosition),
        x = _this$getProps5.x,
        y = _this$getProps5.y;
      return {
        x,
        y
      };
    }
  }, {
    key: "size",
    value: function size(options) {
      options = options || this.options || {};
      let radius = options.radius || 0;
      radius = Math.max(radius, radius && options.hoverRadius || 0);
      const borderWidth = radius && options.borderWidth || 0;
      return (radius + borderWidth) * 2;
    }
  }, {
    key: "draw",
    value: function draw(ctx, area) {
      const options = this.options;
      if (this.skip || options.radius < 0.1 || !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["C"])(this, area, this.size(options) / 2)) {
        return;
      }
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.fillStyle = options.backgroundColor;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["at"])(ctx, options, this.x, this.y);
    }
  }, {
    key: "getRange",
    value: function getRange() {
      const options = this.options || {};
      // @ts-expect-error Fallbacks should never be hit in practice
      return options.radius + options.hitRadius;
    }
  }]);
  return PointElement;
}(Element);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(PointElement, "id", 'point');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(PointElement, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: 'circle',
  radius: 3,
  rotation: 0
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(PointElement, "defaultRoutes", {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
});
function getBarBounds(bar, useFinalPosition) {
  const _bar$getProps = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition),
    x = _bar$getProps.x,
    y = _bar$getProps.y,
    base = _bar$getProps.base,
    width = _bar$getProps.width,
    height = _bar$getProps.height;
  let left, right, top, bottom, half;
  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }
  return {
    left,
    top,
    right,
    bottom
  };
}
function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
  const value = bar.options.borderWidth;
  const skip = bar.borderSkipped;
  const o = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["av"])(value);
  return {
    t: skipOrLimit(skip.top, o.top, 0, maxH),
    r: skipOrLimit(skip.right, o.right, 0, maxW),
    b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
    l: skipOrLimit(skip.left, o.left, 0, maxW)
  };
}
function parseBorderRadius(bar, maxW, maxH) {
  const _bar$getProps2 = bar.getProps(['enableBorderRadius']),
    enableBorderRadius = _bar$getProps2.enableBorderRadius;
  const value = bar.options.borderRadius;
  const o = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aw"])(value);
  const maxR = Math.min(maxW, maxH);
  const skip = bar.borderSkipped;
  const enableBorder = enableBorderRadius || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(value);
  return {
    topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
    topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
    bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
    bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
  };
}
function boundingRects(bar) {
  const bounds = getBarBounds(bar);
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const border = parseBorderWidth(bar, width / 2, height / 2);
  const radius = parseBorderRadius(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height,
      radius
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b,
      radius: {
        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
      }
    }
  };
}
function _inRange(bar, x, y, useFinalPosition) {
  const skipX = x === null;
  const skipY = y === null;
  const skipBoth = skipX && skipY;
  const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
  return bounds && (skipX || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aj"])(x, bounds.left, bounds.right)) && (skipY || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aj"])(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
  return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount) {
  let refRect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const x = rect.x !== refRect.x ? -amount : 0;
  const y = rect.y !== refRect.y ? -amount : 0;
  const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
  const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
  return {
    x: rect.x + x,
    y: rect.y + y,
    w: rect.w + w,
    h: rect.h + h,
    radius: rect.radius
  };
}
let BarElement = /*#__PURE__*/function (_Element5) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BarElement, _Element5);
  var _super15 = _createSuper(BarElement);
  function BarElement(cfg) {
    var _this26;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, BarElement);
    _this26 = _super15.call(this);
    _this26.options = undefined;
    _this26.horizontal = undefined;
    _this26.base = undefined;
    _this26.width = undefined;
    _this26.height = undefined;
    _this26.inflateAmount = undefined;
    if (cfg) {
      Object.assign(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this26), cfg);
    }
    return _this26;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(BarElement, [{
    key: "draw",
    value: function draw(ctx) {
      const inflateAmount = this.inflateAmount,
        _this$options14 = this.options,
        borderColor = _this$options14.borderColor,
        backgroundColor = _this$options14.backgroundColor;
      const _boundingRects = boundingRects(this),
        inner = _boundingRects.inner,
        outer = _boundingRects.outer;
      const addRectPath = hasRadius(outer.radius) ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["au"] : addNormalRectPath;
      ctx.save();
      if (outer.w !== inner.w || outer.h !== inner.h) {
        ctx.beginPath();
        addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
        ctx.clip();
        addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
        ctx.fillStyle = borderColor;
        ctx.fill('evenodd');
      }
      ctx.beginPath();
      addRectPath(ctx, inflateRect(inner, inflateAmount));
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "inRange",
    value: function inRange(mouseX, mouseY, useFinalPosition) {
      return _inRange(this, mouseX, mouseY, useFinalPosition);
    }
  }, {
    key: "inXRange",
    value: function inXRange(mouseX, useFinalPosition) {
      return _inRange(this, mouseX, null, useFinalPosition);
    }
  }, {
    key: "inYRange",
    value: function inYRange(mouseY, useFinalPosition) {
      return _inRange(this, null, mouseY, useFinalPosition);
    }
  }, {
    key: "getCenterPoint",
    value: function getCenterPoint(useFinalPosition) {
      const _this$getProps6 = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition),
        x = _this$getProps6.x,
        y = _this$getProps6.y,
        base = _this$getProps6.base,
        horizontal = _this$getProps6.horizontal;
      return {
        x: horizontal ? (x + base) / 2 : x,
        y: horizontal ? y : (y + base) / 2
      };
    }
  }, {
    key: "getRange",
    value: function getRange(axis) {
      return axis === 'x' ? this.width / 2 : this.height / 2;
    }
  }]);
  return BarElement;
}(Element);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BarElement, "id", 'bar');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BarElement, "defaults", {
  borderSkipped: 'start',
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: 'auto',
  pointStyle: undefined
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BarElement, "defaultRoutes", {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
});
var elements = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ArcElement: ArcElement,
  LineElement: LineElement,
  PointElement: PointElement,
  BarElement: BarElement
});
const BORDER_COLORS = ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)' // grey
];
// Border colors with 50% transparency
const BACKGROUND_COLORS = /* #__PURE__ */BORDER_COLORS.map(function (color) {
  return color.replace('rgb(', 'rgba(').replace(')', ', 0.5)');
});
function getBorderColor(i) {
  return BORDER_COLORS[i % BORDER_COLORS.length];
}
function getBackgroundColor(i) {
  return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}
function createDefaultDatasetColorizer() {
  return function (dataset, i) {
    dataset.borderColor = getBorderColor(i);
    dataset.backgroundColor = getBackgroundColor(i);
  };
}
function createDoughnutDatasetColorizer() {
  let i = 0;
  return function (dataset) {
    dataset.backgroundColor = dataset.data.map(function () {
      return getBorderColor(i++);
    });
  };
}
function createPolarAreaDatasetColorizer() {
  let i = 0;
  return function (dataset) {
    dataset.backgroundColor = dataset.data.map(function () {
      return getBackgroundColor(i++);
    });
  };
}
function getColorizer(type) {
  if (type === 'doughnut' || type === 'pie') {
    return createDoughnutDatasetColorizer();
  } else if (type === 'polarArea') {
    return createPolarAreaDatasetColorizer();
  }
  return createDefaultDatasetColorizer();
}
function containsColorsDefinitions(descriptors) {
  let k;
  for (k in descriptors) {
    if (descriptors[k].borderColor || descriptors[k].backgroundColor) {
      return true;
    }
  }
  return false;
}
var plugin_colors = {
  id: 'colors',
  defaults: {
    enabled: true
  },
  beforeLayout(chart, _args, options) {
    if (!options.enabled) {
      return;
    }
    const _chart$config = chart.config,
      type = _chart$config.type,
      elements = _chart$config.options.elements,
      datasets = _chart$config.data.datasets;
    if (containsColorsDefinitions(datasets) || elements && containsColorsDefinitions(elements)) {
      return;
    }
    const colorizer = getColorizer(type);
    datasets.forEach(colorizer);
  }
};
function lttbDecimation(data, start, count, availableWidth, options) {
  const samples = options.samples || availableWidth;
  if (samples >= count) {
    return data.slice(start, start + count);
  }
  const decimated = [];
  const bucketWidth = (count - 2) / (samples - 2);
  let sampledIndex = 0;
  const endIndex = start + count - 1;
  let a = start;
  let i, maxAreaPoint, maxArea, area, nextA;
  decimated[sampledIndex++] = data[a];
  for (i = 0; i < samples - 2; i++) {
    let avgX = 0;
    let avgY = 0;
    let j;
    const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
    const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
    const avgRangeLength = avgRangeEnd - avgRangeStart;
    for (j = avgRangeStart; j < avgRangeEnd; j++) {
      avgX += data[j].x;
      avgY += data[j].y;
    }
    avgX /= avgRangeLength;
    avgY /= avgRangeLength;
    const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
    const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
    const _data$a = data[a],
      pointAx = _data$a.x,
      pointAy = _data$a.y;
    maxArea = area = -1;
    for (j = rangeOffs; j < rangeTo; j++) {
      area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }
    decimated[sampledIndex++] = maxAreaPoint;
    a = nextA;
  }
  decimated[sampledIndex++] = data[endIndex];
  return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
  let avgX = 0;
  let countX = 0;
  let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
  const decimated = [];
  const endIndex = start + count - 1;
  const xMin = data[start].x;
  const xMax = data[endIndex].x;
  const dx = xMax - xMin;
  for (i = start; i < start + count; ++i) {
    point = data[i];
    x = (point.x - xMin) / dx * availableWidth;
    y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
        minIndex = i;
      } else if (y > maxY) {
        maxY = y;
        maxIndex = i;
      }
      avgX = (countX * avgX + point.x) / ++countX;
    } else {
      const lastIndex = i - 1;
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(minIndex) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(maxIndex)) {
        const intermediateIndex1 = Math.min(minIndex, maxIndex);
        const intermediateIndex2 = Math.max(minIndex, maxIndex);
        if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
          decimated.push(_objectSpread(_objectSpread({}, data[intermediateIndex1]), {}, {
            x: avgX
          }));
        }
        if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
          decimated.push(_objectSpread(_objectSpread({}, data[intermediateIndex2]), {}, {
            x: avgX
          }));
        }
      }
      if (i > 0 && lastIndex !== startIndex) {
        decimated.push(data[lastIndex]);
      }
      decimated.push(point);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
      minIndex = maxIndex = startIndex = i;
    }
  }
  return decimated;
}
function cleanDecimatedDataset(dataset) {
  if (dataset._decimated) {
    const data = dataset._data;
    delete dataset._decimated;
    delete dataset._data;
    Object.defineProperty(dataset, 'data', {
      value: data
    });
  }
}
function cleanDecimatedData(chart) {
  chart.data.datasets.forEach(function (dataset) {
    cleanDecimatedDataset(dataset);
  });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
  const pointCount = points.length;
  let start = 0;
  let count;
  const iScale = meta.iScale;
  const _iScale$getUserBounds = iScale.getUserBounds(),
    min = _iScale$getUserBounds.min,
    max = _iScale$getUserBounds.max,
    minDefined = _iScale$getUserBounds.minDefined,
    maxDefined = _iScale$getUserBounds.maxDefined;
  if (minDefined) {
    start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["B"])(points, iScale.axis, min).lo, 0, pointCount - 1);
  }
  if (maxDefined) {
    count = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["B"])(points, iScale.axis, max).hi + 1, start, pointCount) - start;
  } else {
    count = pointCount - start;
  }
  return {
    start,
    count
  };
}
var plugin_decimation = {
  id: 'decimation',
  defaults: {
    algorithm: 'min-max',
    enabled: false
  },
  beforeElementsUpdate: function (chart, args, options) {
    if (!options.enabled) {
      cleanDecimatedData(chart);
      return;
    }
    const availableWidth = chart.width;
    chart.data.datasets.forEach(function (dataset, datasetIndex) {
      const _data = dataset._data,
        indexAxis = dataset.indexAxis;
      const meta = chart.getDatasetMeta(datasetIndex);
      const data = _data || dataset.data;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a"])([indexAxis, chart.options.indexAxis]) === 'y') {
        return;
      }
      if (!meta.controller.supportsDecimation) {
        return;
      }
      const xAxis = chart.scales[meta.xAxisID];
      if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
        return;
      }
      if (chart.options.parsing) {
        return;
      }
      let _getStartAndCountOfVi3 = getStartAndCountOfVisiblePointsSimplified(meta, data),
        start = _getStartAndCountOfVi3.start,
        count = _getStartAndCountOfVi3.count;
      const threshold = options.threshold || 4 * availableWidth;
      if (count <= threshold) {
        cleanDecimatedDataset(dataset);
        return;
      }
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(_data)) {
        dataset._data = data;
        delete dataset.data;
        Object.defineProperty(dataset, 'data', {
          configurable: true,
          enumerable: true,
          get: function () {
            return this._decimated;
          },
          set: function (d) {
            this._data = d;
          }
        });
      }
      let decimated;
      switch (options.algorithm) {
        case 'lttb':
          decimated = lttbDecimation(data, start, count, availableWidth, options);
          break;
        case 'min-max':
          decimated = minMaxDecimation(data, start, count, availableWidth);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
      }
      dataset._decimated = decimated;
    });
  },
  destroy(chart) {
    cleanDecimatedData(chart);
  }
};
function _segments(line, target, property) {
  const segments = line.segments;
  const points = line.points;
  const tpoints = target.points;
  const parts = [];
  var _iterator18 = _createForOfIteratorHelper(segments),
    _step18;
  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      const segment = _step18.value;
      let start = segment.start,
        end = segment.end;
      end = _findSegmentEnd(start, end, points);
      const bounds = _getBounds(property, points[start], points[end], segment.loop);
      if (!target.segments) {
        parts.push({
          source: segment,
          target: bounds,
          start: points[start],
          end: points[end]
        });
        continue;
      }
      const targetSegments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["an"])(target, bounds);
      var _iterator19 = _createForOfIteratorHelper(targetSegments),
        _step19;
      try {
        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
          const tgt = _step19.value;
          const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
          const fillSources = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ax"])(segment, points, subBounds);
          var _iterator20 = _createForOfIteratorHelper(fillSources),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              const fillSource = _step20.value;
              parts.push({
                source: fillSource,
                target: tgt,
                start: {
                  [property]: _getEdge(bounds, subBounds, 'start', Math.max)
                },
                end: {
                  [property]: _getEdge(bounds, subBounds, 'end', Math.min)
                }
              });
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        }
      } catch (err) {
        _iterator19.e(err);
      } finally {
        _iterator19.f();
      }
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }
  return parts;
}
function _getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }
  let start = first[property];
  let end = last[property];
  if (property === 'angle') {
    start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ay"])(start);
    end = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ay"])(end);
  }
  return {
    property,
    start,
    end
  };
}
function _pointsFromSegments(boundary, line) {
  const _ref10 = boundary || {},
    _ref10$x = _ref10.x,
    x = _ref10$x === void 0 ? null : _ref10$x,
    _ref10$y = _ref10.y,
    y = _ref10$y === void 0 ? null : _ref10$y;
  const linePoints = line.points;
  const points = [];
  line.segments.forEach(function (_ref11) {
    let start = _ref11.start,
      end = _ref11.end;
    end = _findSegmentEnd(start, end, linePoints);
    const first = linePoints[start];
    const last = linePoints[end];
    if (y !== null) {
      points.push({
        x: first.x,
        y
      });
      points.push({
        x: last.x,
        y
      });
    } else if (x !== null) {
      points.push({
        x,
        y: first.y
      });
      points.push({
        x,
        y: last.y
      });
    }
  });
  return points;
}
function _findSegmentEnd(start, end, points) {
  for (; end > start; end--) {
    const point = points[end];
    if (!isNaN(point.x) && !isNaN(point.y)) {
      break;
    }
  }
  return end;
}
function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }
  return a ? a[prop] : b ? b[prop] : 0;
}
function _createBoundaryLine(boundary, line) {
  let points = [];
  let _loop = false;
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = _pointsFromSegments(boundary, line);
  }
  return points.length ? new LineElement({
    points,
    options: {
      tension: 0
    },
    _loop,
    _fullLoop: _loop
  }) : null;
}
function _shouldApplyFill(source) {
  return source && source.fill !== false;
}
function _resolveTarget(sources, index, propagate) {
  const source = sources[index];
  let fill = source.fill;
  const visited = [index];
  let target;
  if (!propagate) {
    return fill;
  }
  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(fill)) {
      return fill;
    }
    target = sources[fill];
    if (!target) {
      return false;
    }
    if (target.visible) {
      return fill;
    }
    visited.push(fill);
    fill = target.fill;
  }
  return false;
}
function _decodeFill(line, index, count) {
  const fill = parseFillOption(line);
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(fill)) {
    return isNaN(fill.value) ? false : fill;
  }
  let target = parseFloat(fill);
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(target) && Math.floor(target) === target) {
    return decodeTargetIndex(fill[0], index, target, count);
  }
  return ['origin', 'start', 'end', 'stack', 'shape'].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
  if (firstCh === '-' || firstCh === '+') {
    target = index + target;
  }
  if (target === index || target < 0 || target >= count) {
    return false;
  }
  return target;
}
function _getTargetPixel(fill, scale) {
  let pixel = null;
  if (fill === 'start') {
    pixel = scale.bottom;
  } else if (fill === 'end') {
    pixel = scale.top;
  } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(fill)) {
    pixel = scale.getPixelForValue(fill.value);
  } else if (scale.getBasePixel) {
    pixel = scale.getBasePixel();
  }
  return pixel;
}
function _getTargetValue(fill, scale, startValue) {
  let value;
  if (fill === 'start') {
    value = startValue;
  } else if (fill === 'end') {
    value = scale.options.reverse ? scale.min : scale.max;
  } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(fill)) {
    value = fill.value;
  } else {
    value = scale.getBaseValue();
  }
  return value;
}
function parseFillOption(line) {
  const options = line.options;
  const fillOption = options.fill;
  let fill = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(fillOption && fillOption.target, fillOption);
  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }
  if (fill === false || fill === null) {
    return false;
  }
  if (fill === true) {
    return 'origin';
  }
  return fill;
}
function _buildStackLine(source) {
  const scale = source.scale,
    index = source.index,
    line = source.line;
  const points = [];
  const segments = line.segments;
  const sourcePoints = line.points;
  const linesBelow = getLinesBelow(scale, index);
  linesBelow.push(_createBoundaryLine({
    x: null,
    y: scale.bottom
  }, line));
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    for (let j = segment.start; j <= segment.end; j++) {
      addPointsBelow(points, sourcePoints[j], linesBelow);
    }
  }
  return new LineElement({
    points,
    options: {}
  });
}
function getLinesBelow(scale, index) {
  const below = [];
  const metas = scale.getMatchingVisibleMetas('line');
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.index === index) {
      break;
    }
    if (!meta.hidden) {
      below.unshift(meta.dataset);
    }
  }
  return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
  const postponed = [];
  for (let j = 0; j < linesBelow.length; j++) {
    const line = linesBelow[j];
    const _findPoint = findPoint(line, sourcePoint, 'x'),
      first = _findPoint.first,
      last = _findPoint.last,
      point = _findPoint.point;
    if (!point || first && last) {
      continue;
    }
    if (first) {
      postponed.unshift(point);
    } else {
      points.push(point);
      if (!last) {
        break;
      }
    }
  }
  points.push.apply(points, postponed);
}
function findPoint(line, sourcePoint, property) {
  const point = line.interpolate(sourcePoint, property);
  if (!point) {
    return {};
  }
  const pointValue = point[property];
  const segments = line.segments;
  const linePoints = line.points;
  let first = false;
  let last = false;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const firstValue = linePoints[segment.start][property];
    const lastValue = linePoints[segment.end][property];
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aj"])(pointValue, firstValue, lastValue)) {
      first = pointValue === firstValue;
      last = pointValue === lastValue;
      break;
    }
  }
  return {
    first,
    last,
    point
  };
}
let simpleArc = /*#__PURE__*/function () {
  function simpleArc(opts) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, simpleArc);
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(simpleArc, [{
    key: "pathSegment",
    value: function pathSegment(ctx, bounds, opts) {
      const x = this.x,
        y = this.y,
        radius = this.radius;
      bounds = bounds || {
        start: 0,
        end: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"]
      };
      ctx.arc(x, y, radius, bounds.end, bounds.start, true);
      return !opts.bounds;
    }
  }, {
    key: "interpolate",
    value: function interpolate(point) {
      const x = this.x,
        y = this.y,
        radius = this.radius;
      const angle = point.angle;
      return {
        x: x + Math.cos(angle) * radius,
        y: y + Math.sin(angle) * radius,
        angle
      };
    }
  }]);
  return simpleArc;
}();
function _getTarget(source) {
  const chart = source.chart,
    fill = source.fill,
    line = source.line;
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(fill)) {
    return getLineByIndex(chart, fill);
  }
  if (fill === 'stack') {
    return _buildStackLine(source);
  }
  if (fill === 'shape') {
    return true;
  }
  const boundary = computeBoundary(source);
  if (boundary instanceof simpleArc) {
    return boundary;
  }
  return _createBoundaryLine(boundary, line);
}
function getLineByIndex(chart, index) {
  const meta = chart.getDatasetMeta(index);
  const visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}
function computeBoundary(source) {
  const scale = source.scale || {};
  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }
  return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
  const _source$scale = source.scale,
    scale = _source$scale === void 0 ? {} : _source$scale,
    fill = source.fill;
  const pixel = _getTargetPixel(fill, scale);
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(pixel)) {
    const horizontal = scale.isHorizontal();
    return {
      x: horizontal ? pixel : null,
      y: horizontal ? null : pixel
    };
  }
  return null;
}
function computeCircularBoundary(source) {
  const scale = source.scale,
    fill = source.fill;
  const options = scale.options;
  const length = scale.getLabels().length;
  const start = options.reverse ? scale.max : scale.min;
  const value = _getTargetValue(fill, scale, start);
  const target = [];
  if (options.grid.circular) {
    const center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }
  for (let i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }
  return target;
}
function _drawfill(ctx, source, area) {
  const target = _getTarget(source);
  const line = source.line,
    scale = source.scale,
    axis = source.axis;
  const lineOpts = line.options;
  const fillOption = lineOpts.fill;
  const color = lineOpts.backgroundColor;
  const _ref12 = fillOption || {},
    _ref12$above = _ref12.above,
    above = _ref12$above === void 0 ? color : _ref12$above,
    _ref12$below = _ref12.below,
    below = _ref12$below === void 0 ? color : _ref12$below;
  if (target && line.points.length) {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Y"])(ctx, area);
    doFill(ctx, {
      line,
      target,
      above,
      below,
      area,
      scale,
      axis
    });
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["$"])(ctx);
  }
}
function doFill(ctx, cfg) {
  const line = cfg.line,
    target = cfg.target,
    above = cfg.above,
    below = cfg.below,
    area = cfg.area,
    scale = cfg.scale;
  const property = line._loop ? 'angle' : cfg.axis;
  ctx.save();
  if (property === 'x' && below !== above) {
    clipVertical(ctx, target, area.top);
    fill(ctx, {
      line,
      target,
      color: above,
      scale,
      property
    });
    ctx.restore();
    ctx.save();
    clipVertical(ctx, target, area.bottom);
  }
  fill(ctx, {
    line,
    target,
    color: below,
    scale,
    property
  });
  ctx.restore();
}
function clipVertical(ctx, target, clipY) {
  const segments = target.segments,
    points = target.points;
  let first = true;
  let lineLoop = false;
  ctx.beginPath();
  var _iterator21 = _createForOfIteratorHelper(segments),
    _step21;
  try {
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      const segment = _step21.value;
      const start = segment.start,
        end = segment.end;
      const firstPoint = points[start];
      const lastPoint = points[_findSegmentEnd(start, end, points)];
      if (first) {
        ctx.moveTo(firstPoint.x, firstPoint.y);
        first = false;
      } else {
        ctx.lineTo(firstPoint.x, clipY);
        ctx.lineTo(firstPoint.x, firstPoint.y);
      }
      lineLoop = !!target.pathSegment(ctx, segment, {
        move: lineLoop
      });
      if (lineLoop) {
        ctx.closePath();
      } else {
        ctx.lineTo(lastPoint.x, clipY);
      }
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}
function fill(ctx, cfg) {
  const line = cfg.line,
    target = cfg.target,
    property = cfg.property,
    color = cfg.color,
    scale = cfg.scale;
  const segments = _segments(line, target, property);
  var _iterator22 = _createForOfIteratorHelper(segments),
    _step22;
  try {
    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      const _ref13 = _step22.value;
      const src = _ref13.source;
      const tgt = _ref13.target;
      const start = _ref13.start;
      const end = _ref13.end;
      const _src$style = src.style,
        _src$style2 = _src$style === void 0 ? {} : _src$style,
        _src$style2$backgroun = _src$style2.backgroundColor,
        backgroundColor = _src$style2$backgroun === void 0 ? color : _src$style2$backgroun;
      const notShape = target !== true;
      ctx.save();
      ctx.fillStyle = backgroundColor;
      clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
      ctx.beginPath();
      const lineLoop = !!line.pathSegment(ctx, src);
      let loop;
      if (notShape) {
        if (lineLoop) {
          ctx.closePath();
        } else {
          interpolatedLineTo(ctx, target, end, property);
        }
        const targetLoop = !!target.pathSegment(ctx, tgt, {
          move: lineLoop,
          reverse: true
        });
        loop = lineLoop && targetLoop;
        if (!loop) {
          interpolatedLineTo(ctx, target, start, property);
        }
      }
      ctx.closePath();
      ctx.fill(loop ? 'evenodd' : 'nonzero');
      ctx.restore();
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
}
function clipBounds(ctx, scale, bounds) {
  const _scale$chart$chartAre = scale.chart.chartArea,
    top = _scale$chart$chartAre.top,
    bottom = _scale$chart$chartAre.bottom;
  const _ref14 = bounds || {},
    property = _ref14.property,
    start = _ref14.start,
    end = _ref14.end;
  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}
function interpolatedLineTo(ctx, target, point, property) {
  const interpolatedPoint = target.interpolate(point, property);
  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}
var index = {
  id: 'filler',
  afterDatasetsUpdate(chart, _args, options) {
    const count = (chart.data.datasets || []).length;
    const sources = [];
    let meta, i, line, source;
    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;
      if (line && line.options && line instanceof LineElement) {
        source = {
          visible: chart.isDatasetVisible(i),
          index: i,
          fill: _decodeFill(line, i, count),
          chart,
          axis: meta.controller.options.indexAxis,
          scale: meta.vScale,
          line
        };
      }
      meta.$filler = source;
      sources.push(source);
    }
    for (i = 0; i < count; ++i) {
      source = sources[i];
      if (!source || source.fill === false) {
        continue;
      }
      source.fill = _resolveTarget(sources, i, options.propagate);
    }
  },
  beforeDraw(chart, _args, options) {
    const draw = options.drawTime === 'beforeDraw';
    const metasets = chart.getSortedVisibleDatasetMetas();
    const area = chart.chartArea;
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (!source) {
        continue;
      }
      source.line.updateControlPoints(area, source.axis);
      if (draw && source.fill) {
        _drawfill(chart.ctx, source, area);
      }
    }
  },
  beforeDatasetsDraw(chart, _args, options) {
    if (options.drawTime !== 'beforeDatasetsDraw') {
      return;
    }
    const metasets = chart.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (_shouldApplyFill(source)) {
        _drawfill(chart.ctx, source, chart.chartArea);
      }
    }
  },
  beforeDatasetDraw(chart, args, options) {
    const source = args.meta.$filler;
    if (!_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') {
      return;
    }
    _drawfill(chart.ctx, source, chart.chartArea);
  },
  defaults: {
    propagate: true,
    drawTime: 'beforeDatasetDraw'
  }
};
const getBoxSize = function (labelOpts, fontSize) {
  let _labelOpts$boxHeight = labelOpts.boxHeight,
    boxHeight = _labelOpts$boxHeight === void 0 ? fontSize : _labelOpts$boxHeight,
    _labelOpts$boxWidth = labelOpts.boxWidth,
    boxWidth = _labelOpts$boxWidth === void 0 ? fontSize : _labelOpts$boxWidth;
  if (labelOpts.usePointStyle) {
    boxHeight = Math.min(boxHeight, fontSize);
    boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
  }
  return {
    boxWidth,
    boxHeight,
    itemHeight: Math.max(fontSize, boxHeight)
  };
};
const itemsEqual = function (a, b) {
  return a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
};
let Legend = /*#__PURE__*/function (_Element6) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Legend, _Element6);
  var _super16 = _createSuper(Legend);
  function Legend(config) {
    var _this27;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Legend);
    _this27 = _super16.call(this);
    _this27._added = false;
    _this27.legendHitBoxes = [];
    _this27._hoveredItem = null;
    _this27.doughnutMode = false;
    _this27.chart = config.chart;
    _this27.options = config.options;
    _this27.ctx = config.ctx;
    _this27.legendItems = undefined;
    _this27.columnSizes = undefined;
    _this27.lineWidths = undefined;
    _this27.maxHeight = undefined;
    _this27.maxWidth = undefined;
    _this27.top = undefined;
    _this27.bottom = undefined;
    _this27.left = undefined;
    _this27.right = undefined;
    _this27.height = undefined;
    _this27.width = undefined;
    _this27._margins = undefined;
    _this27.position = undefined;
    _this27.weight = undefined;
    _this27.fullSize = undefined;
    return _this27;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Legend, [{
    key: "update",
    value: function update(maxWidth, maxHeight, margins) {
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins;
      this.setDimensions();
      this.buildLabels();
      this.fit();
    }
  }, {
    key: "setDimensions",
    value: function setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = this._margins.left;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = this._margins.top;
        this.bottom = this.height;
      }
    }
  }, {
    key: "buildLabels",
    value: function buildLabels() {
      var _this28 = this;
      const labelOpts = this.options.labels || {};
      let legendItems = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(labelOpts.generateLabels, [this.chart], this) || [];
      if (labelOpts.filter) {
        legendItems = legendItems.filter(function (item) {
          return labelOpts.filter(item, _this28.chart.data);
        });
      }
      if (labelOpts.sort) {
        legendItems = legendItems.sort(function (a, b) {
          return labelOpts.sort(a, b, _this28.chart.data);
        });
      }
      if (this.options.reverse) {
        legendItems.reverse();
      }
      this.legendItems = legendItems;
    }
  }, {
    key: "fit",
    value: function fit() {
      const options = this.options,
        ctx = this.ctx;
      if (!options.display) {
        this.width = this.height = 0;
        return;
      }
      const labelOpts = options.labels;
      const labelFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(labelOpts.font);
      const fontSize = labelFont.size;
      const titleHeight = this._computeTitleHeight();
      const _getBoxSize = getBoxSize(labelOpts, fontSize),
        boxWidth = _getBoxSize.boxWidth,
        itemHeight = _getBoxSize.itemHeight;
      let width, height;
      ctx.font = labelFont.string;
      if (this.isHorizontal()) {
        width = this.maxWidth;
        height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
      } else {
        height = this.maxHeight;
        width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
      }
      this.width = Math.min(width, options.maxWidth || this.maxWidth);
      this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
  }, {
    key: "_fitRows",
    value: function _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
      const ctx = this.ctx,
        maxWidth = this.maxWidth,
        padding = this.options.labels.padding;
      const hitboxes = this.legendHitBoxes = [];
      const lineWidths = this.lineWidths = [0];
      const lineHeight = itemHeight + padding;
      let totalHeight = titleHeight;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      let row = -1;
      let top = -lineHeight;
      this.legendItems.forEach(function (legendItem, i) {
        const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
        if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
          totalHeight += lineHeight;
          lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
          top += lineHeight;
          row++;
        }
        hitboxes[i] = {
          left: 0,
          top,
          row,
          width: itemWidth,
          height: itemHeight
        };
        lineWidths[lineWidths.length - 1] += itemWidth + padding;
      });
      return totalHeight;
    }
  }, {
    key: "_fitCols",
    value: function _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
      const ctx = this.ctx,
        maxHeight = this.maxHeight,
        padding = this.options.labels.padding;
      const hitboxes = this.legendHitBoxes = [];
      const columnSizes = this.columnSizes = [];
      const heightLimit = maxHeight - titleHeight;
      let totalWidth = padding;
      let currentColWidth = 0;
      let currentColHeight = 0;
      let left = 0;
      let col = 0;
      this.legendItems.forEach(function (legendItem, i) {
        const _calculateItemSize = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight),
          itemWidth = _calculateItemSize.itemWidth,
          itemHeight = _calculateItemSize.itemHeight;
        if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
          totalWidth += currentColWidth + padding;
          columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
          });
          left += currentColWidth + padding;
          col++;
          currentColWidth = currentColHeight = 0;
        }
        hitboxes[i] = {
          left,
          top: currentColHeight,
          col,
          width: itemWidth,
          height: itemHeight
        };
        currentColWidth = Math.max(currentColWidth, itemWidth);
        currentColHeight += itemHeight + padding;
      });
      totalWidth += currentColWidth;
      columnSizes.push({
        width: currentColWidth,
        height: currentColHeight
      });
      return totalWidth;
    }
  }, {
    key: "adjustHitBoxes",
    value: function adjustHitBoxes() {
      if (!this.options.display) {
        return;
      }
      const titleHeight = this._computeTitleHeight();
      const hitboxes = this.legendHitBoxes,
        _this$options15 = this.options,
        align = _this$options15.align,
        padding = _this$options15.labels.padding,
        rtl = _this$options15.rtl;
      const rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["az"])(rtl, this.left, this.width);
      if (this.isHorizontal()) {
        let row = 0;
        let left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, this.left + padding, this.right - this.lineWidths[row]);
        var _iterator23 = _createForOfIteratorHelper(hitboxes),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            const hitbox = _step23.value;
            if (row !== hitbox.row) {
              row = hitbox.row;
              left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, this.left + padding, this.right - this.lineWidths[row]);
            }
            hitbox.top += this.top + titleHeight + padding;
            hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
            left += hitbox.width + padding;
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      } else {
        let col = 0;
        let top = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        var _iterator24 = _createForOfIteratorHelper(hitboxes),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            const hitbox1 = _step24.value;
            if (hitbox1.col !== col) {
              col = hitbox1.col;
              top = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            }
            hitbox1.top = top;
            hitbox1.left += this.left + padding;
            hitbox1.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox1.left), hitbox1.width);
            top += hitbox1.height + padding;
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.options.position === 'top' || this.options.position === 'bottom';
    }
  }, {
    key: "draw",
    value: function draw() {
      if (this.options.display) {
        const ctx = this.ctx;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Y"])(ctx, this);
        this._draw();
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["$"])(ctx);
      }
    }
  }, {
    key: "_draw",
    value: function _draw() {
      var _this29 = this;
      const opts = this.options,
        columnSizes = this.columnSizes,
        lineWidths = this.lineWidths,
        ctx = this.ctx;
      const align = opts.align,
        labelOpts = opts.labels;
      const defaultColor = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].color;
      const rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["az"])(opts.rtl, this.left, this.width);
      const labelFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(labelOpts.font);
      const padding = labelOpts.padding;
      const fontSize = labelFont.size;
      const halfFontSize = fontSize / 2;
      let cursor;
      this.drawTitle();
      ctx.textAlign = rtlHelper.textAlign('left');
      ctx.textBaseline = 'middle';
      ctx.lineWidth = 0.5;
      ctx.font = labelFont.string;
      const _getBoxSize2 = getBoxSize(labelOpts, fontSize),
        boxWidth = _getBoxSize2.boxWidth,
        boxHeight = _getBoxSize2.boxHeight,
        itemHeight = _getBoxSize2.itemHeight;
      const drawLegendBox = function (x, y, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
          return;
        }
        ctx.save();
        const lineWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(legendItem.lineWidth, 1);
        ctx.fillStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(legendItem.fillStyle, defaultColor);
        ctx.lineCap = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(legendItem.lineCap, 'butt');
        ctx.lineDashOffset = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(legendItem.lineDashOffset, 0);
        ctx.lineJoin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(legendItem.lineJoin, 'miter');
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(legendItem.strokeStyle, defaultColor);
        ctx.setLineDash(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(legendItem.lineDash, []));
        if (labelOpts.usePointStyle) {
          const drawOptions = {
            radius: boxHeight * Math.SQRT2 / 2,
            pointStyle: legendItem.pointStyle,
            rotation: legendItem.rotation,
            borderWidth: lineWidth
          };
          const centerX = rtlHelper.xPlus(x, boxWidth / 2);
          const centerY = y + halfFontSize;
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aD"])(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
        } else {
          const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
          const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
          const borderRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aw"])(legendItem.borderRadius);
          ctx.beginPath();
          if (Object.values(borderRadius).some(function (v) {
            return v !== 0;
          })) {
            Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["au"])(ctx, {
              x: xBoxLeft,
              y: yBoxTop,
              w: boxWidth,
              h: boxHeight,
              radius: borderRadius
            });
          } else {
            ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
          }
          ctx.fill();
          if (lineWidth !== 0) {
            ctx.stroke();
          }
        }
        ctx.restore();
      };
      const fillText = function (x, y, legendItem) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Z"])(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
          strikethrough: legendItem.hidden,
          textAlign: rtlHelper.textAlign(legendItem.textAlign)
        });
      };
      const isHorizontal = this.isHorizontal();
      const titleHeight = this._computeTitleHeight();
      if (isHorizontal) {
        cursor = {
          x: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, this.left + padding, this.right - lineWidths[0]),
          y: this.top + padding + titleHeight,
          line: 0
        };
      } else {
        cursor = {
          x: this.left + padding,
          y: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
          line: 0
        };
      }
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aA"])(this.ctx, opts.textDirection);
      const lineHeight = itemHeight + padding;
      this.legendItems.forEach(function (legendItem, i) {
        ctx.strokeStyle = legendItem.fontColor;
        ctx.fillStyle = legendItem.fontColor;
        const textWidth = ctx.measureText(legendItem.text).width;
        const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
        const width = boxWidth + halfFontSize + textWidth;
        let x = cursor.x;
        let y = cursor.y;
        rtlHelper.setWidth(_this29.width);
        if (isHorizontal) {
          if (i > 0 && x + width + padding > _this29.right) {
            y = cursor.y += lineHeight;
            cursor.line++;
            x = cursor.x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, _this29.left + padding, _this29.right - lineWidths[cursor.line]);
          }
        } else if (i > 0 && y + lineHeight > _this29.bottom) {
          x = cursor.x = x + columnSizes[cursor.line].width + padding;
          cursor.line++;
          y = cursor.y = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, _this29.top + titleHeight + padding, _this29.bottom - columnSizes[cursor.line].height);
        }
        const realX = rtlHelper.x(x);
        drawLegendBox(realX, y, legendItem);
        x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aB"])(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : _this29.right, opts.rtl);
        fillText(rtlHelper.x(x), y, legendItem);
        if (isHorizontal) {
          cursor.x += width + padding;
        } else if (typeof legendItem.text !== 'string') {
          const fontLineHeight = labelFont.lineHeight;
          cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight);
        } else {
          cursor.y += lineHeight;
        }
      });
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aC"])(this.ctx, opts.textDirection);
    }
  }, {
    key: "drawTitle",
    value: function drawTitle() {
      const opts = this.options;
      const titleOpts = opts.title;
      const titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(titleOpts.font);
      const titlePadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(titleOpts.padding);
      if (!titleOpts.display) {
        return;
      }
      const rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["az"])(opts.rtl, this.left, this.width);
      const ctx = this.ctx;
      const position = titleOpts.position;
      const halfFontSize = titleFont.size / 2;
      const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
      let y;
      let left = this.left;
      let maxWidth = this.width;
      if (this.isHorizontal()) {
        maxWidth = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(this.lineWidths));
        y = this.top + topPaddingPlusHalfFontSize;
        left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(opts.align, left, this.right - maxWidth);
      } else {
        const maxHeight = this.columnSizes.reduce(function (acc, size) {
          return Math.max(acc, size.height);
        }, 0);
        y = topPaddingPlusHalfFontSize + Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
      }
      const x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(position, left, left + maxWidth);
      ctx.textAlign = rtlHelper.textAlign(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a1"])(position));
      ctx.textBaseline = 'middle';
      ctx.strokeStyle = titleOpts.color;
      ctx.fillStyle = titleOpts.color;
      ctx.font = titleFont.string;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Z"])(ctx, titleOpts.text, x, y, titleFont);
    }
  }, {
    key: "_computeTitleHeight",
    value: function _computeTitleHeight() {
      const titleOpts = this.options.title;
      const titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(titleOpts.font);
      const titlePadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(titleOpts.padding);
      return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
  }, {
    key: "_getLegendItemAt",
    value: function _getLegendItemAt(x, y) {
      let i, hitBox, lh;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aj"])(x, this.left, this.right) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aj"])(y, this.top, this.bottom)) {
        lh = this.legendHitBoxes;
        for (i = 0; i < lh.length; ++i) {
          hitBox = lh[i];
          if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aj"])(x, hitBox.left, hitBox.left + hitBox.width) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aj"])(y, hitBox.top, hitBox.top + hitBox.height)) {
            return this.legendItems[i];
          }
        }
      }
      return null;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e) {
      const opts = this.options;
      if (!isListened(e.type, opts)) {
        return;
      }
      const hoveredItem = this._getLegendItemAt(e.x, e.y);
      if (e.type === 'mousemove' || e.type === 'mouseout') {
        const previous = this._hoveredItem;
        const sameItem = itemsEqual(previous, hoveredItem);
        if (previous && !sameItem) {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(opts.onLeave, [e, previous, this], this);
        }
        this._hoveredItem = hoveredItem;
        if (hoveredItem && !sameItem) {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(opts.onHover, [e, hoveredItem, this], this);
        }
      } else if (hoveredItem) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(opts.onClick, [e, hoveredItem, this], this);
      }
    }
  }]);
  return Legend;
}(Element);
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
  const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
  const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
  return {
    itemWidth,
    itemHeight
  };
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
  let legendItemText = legendItem.text;
  if (legendItemText && typeof legendItemText !== 'string') {
    legendItemText = legendItemText.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    });
  }
  return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
  let itemHeight = _itemHeight;
  if (typeof legendItem.text !== 'string') {
    itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
  }
  return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
  const labelHeight = legendItem.text ? legendItem.text.length + 0.5 : 0;
  return fontLineHeight * labelHeight;
}
function isListened(type, opts) {
  if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) {
    return true;
  }
  if (opts.onClick && (type === 'click' || type === 'mouseup')) {
    return true;
  }
  return false;
}
var plugin_legend = {
  id: 'legend',
  _element: Legend,
  start(chart, _args, options) {
    const legend = chart.legend = new Legend({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, legend, options);
    layouts.addBox(chart, legend);
  },
  stop(chart) {
    layouts.removeBox(chart, chart.legend);
    delete chart.legend;
  },
  beforeUpdate(chart, _args, options) {
    const legend = chart.legend;
    layouts.configure(chart, legend, options);
    legend.options = options;
  },
  afterUpdate(chart) {
    const legend = chart.legend;
    legend.buildLabels();
    legend.adjustHitBoxes();
  },
  afterEvent(chart, args) {
    if (!args.replay) {
      chart.legend.handleEvent(args.event);
    }
  },
  defaults: {
    display: true,
    position: 'top',
    align: 'center',
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
      } else {
        ci.show(index);
        legendItem.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: function (ctx) {
        return ctx.chart.options.color;
      },
      boxWidth: 40,
      padding: 10,
      generateLabels(chart) {
        const datasets = chart.data.datasets;
        const _chart$legend$options = chart.legend.options.labels,
          usePointStyle = _chart$legend$options.usePointStyle,
          pointStyle = _chart$legend$options.pointStyle,
          textAlign = _chart$legend$options.textAlign,
          color = _chart$legend$options.color,
          useBorderRadius = _chart$legend$options.useBorderRadius,
          borderRadius = _chart$legend$options.borderRadius;
        return chart._getSortedDatasetMetas().map(function (meta) {
          const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          const borderWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(style.borderWidth);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            fontColor: color,
            hidden: !meta.visible,
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: (borderWidth.width + borderWidth.height) / 4,
            strokeStyle: style.borderColor,
            pointStyle: pointStyle || style.pointStyle,
            rotation: style.rotation,
            textAlign: textAlign || style.textAlign,
            borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
            datasetIndex: meta.index
          };
        }, this);
      }
    },
    title: {
      color: function (ctx) {
        return ctx.chart.options.color;
      },
      display: false,
      position: 'center',
      text: ''
    }
  },
  descriptors: {
    _scriptable: function (name) {
      return !name.startsWith('on');
    },
    labels: {
      _scriptable: function (name) {
        return !['generateLabels', 'filter', 'sort'].includes(name);
      }
    }
  }
};
let Title = /*#__PURE__*/function (_Element7) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Title, _Element7);
  var _super17 = _createSuper(Title);
  function Title(config) {
    var _this30;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Title);
    _this30 = _super17.call(this);
    _this30.chart = config.chart;
    _this30.options = config.options;
    _this30.ctx = config.ctx;
    _this30._padding = undefined;
    _this30.top = undefined;
    _this30.bottom = undefined;
    _this30.left = undefined;
    _this30.right = undefined;
    _this30.width = undefined;
    _this30.height = undefined;
    _this30.position = undefined;
    _this30.weight = undefined;
    _this30.fullSize = undefined;
    return _this30;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Title, [{
    key: "update",
    value: function update(maxWidth, maxHeight) {
      const opts = this.options;
      this.left = 0;
      this.top = 0;
      if (!opts.display) {
        this.width = this.height = this.right = this.bottom = 0;
        return;
      }
      this.width = this.right = maxWidth;
      this.height = this.bottom = maxHeight;
      const lineCount = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(opts.text) ? opts.text.length : 1;
      this._padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(opts.padding);
      const textSize = lineCount * Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(opts.font).lineHeight + this._padding.height;
      if (this.isHorizontal()) {
        this.height = textSize;
      } else {
        this.width = textSize;
      }
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      const pos = this.options.position;
      return pos === 'top' || pos === 'bottom';
    }
  }, {
    key: "_drawArgs",
    value: function _drawArgs(offset) {
      const top = this.top,
        left = this.left,
        bottom = this.bottom,
        right = this.right,
        options = this.options;
      const align = options.align;
      let rotation = 0;
      let maxWidth, titleX, titleY;
      if (this.isHorizontal()) {
        titleX = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, left, right);
        titleY = top + offset;
        maxWidth = right - left;
      } else {
        if (options.position === 'left') {
          titleX = left + offset;
          titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, bottom, top);
          rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"] * -0.5;
        } else {
          titleX = right - offset;
          titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a2"])(align, top, bottom);
          rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"] * 0.5;
        }
        maxWidth = bottom - top;
      }
      return {
        titleX,
        titleY,
        maxWidth,
        rotation
      };
    }
  }, {
    key: "draw",
    value: function draw() {
      const ctx = this.ctx;
      const opts = this.options;
      if (!opts.display) {
        return;
      }
      const fontOpts = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(opts.font);
      const lineHeight = fontOpts.lineHeight;
      const offset = lineHeight / 2 + this._padding.top;
      const _this$_drawArgs = this._drawArgs(offset),
        titleX = _this$_drawArgs.titleX,
        titleY = _this$_drawArgs.titleY,
        maxWidth = _this$_drawArgs.maxWidth,
        rotation = _this$_drawArgs.rotation;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Z"])(ctx, opts.text, 0, 0, fontOpts, {
        color: opts.color,
        maxWidth,
        rotation,
        textAlign: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a1"])(opts.align),
        textBaseline: 'middle',
        translation: [titleX, titleY]
      });
    }
  }]);
  return Title;
}(Element);
function createTitle(chart, titleOpts) {
  const title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}
var plugin_title = {
  id: 'title',
  _element: Title,
  start(chart, _args, options) {
    createTitle(chart, options);
  },
  stop(chart) {
    const titleBlock = chart.titleBlock;
    layouts.removeBox(chart, titleBlock);
    delete chart.titleBlock;
  },
  beforeUpdate(chart, _args, options) {
    const title = chart.titleBlock;
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'bold'
    },
    fullSize: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
const map = new WeakMap();
var plugin_subtitle = {
  id: 'subtitle',
  start(chart, _args, options) {
    const title = new Title({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, title, options);
    layouts.addBox(chart, title);
    map.set(chart, title);
  },
  stop(chart) {
    layouts.removeBox(chart, map.get(chart));
    map.delete(chart);
  },
  beforeUpdate(chart, _args, options) {
    const title = map.get(chart);
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'normal'
    },
    fullSize: true,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
const positioners = {
  average(items) {
    if (!items.length) {
      return false;
    }
    let i, len;
    let x = 0;
    let y = 0;
    let count = 0;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }
    return {
      x: x / count,
      y: y / count
    };
  },
  nearest(items, eventPosition) {
    if (!items.length) {
      return false;
    }
    let x = eventPosition.x;
    let y = eventPosition.y;
    let minDistance = Number.POSITIVE_INFINITY;
    let i, len, nearestElement;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const center = el.getCenterPoint();
        const d = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aE"])(eventPosition, center);
        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }
    if (nearestElement) {
      const tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }
    return {
      x,
      y
    };
  }
};
function pushOrConcat(base, toPush) {
  if (toPush) {
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }
  return base;
}
function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }
  return str;
}
function createTooltipItem(chart, item) {
  const element = item.element,
    datasetIndex = item.datasetIndex,
    index = item.index;
  const controller = chart.getDatasetMeta(datasetIndex).controller;
  const _controller$getLabelA = controller.getLabelAndValue(index),
    label = _controller$getLabelA.label,
    value = _controller$getLabelA.value;
  return {
    chart,
    label,
    parsed: controller.getParsed(index),
    raw: chart.data.datasets[datasetIndex].data[index],
    formattedValue: value,
    dataset: controller.getDataset(),
    dataIndex: index,
    datasetIndex,
    element
  };
}
function getTooltipSize(tooltip, options) {
  const ctx = tooltip.chart.ctx;
  const body = tooltip.body,
    footer = tooltip.footer,
    title = tooltip.title;
  const boxWidth = options.boxWidth,
    boxHeight = options.boxHeight;
  const bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(options.bodyFont);
  const titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(options.titleFont);
  const footerFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(options.footerFont);
  const titleLineCount = title.length;
  const footerLineCount = footer.length;
  const bodyLineItemCount = body.length;
  const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(options.padding);
  let height = padding.height;
  let width = 0;
  let combinedBodyLength = body.reduce(function (count, bodyItem) {
    return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
  }, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
  if (titleLineCount) {
    height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
  }
  if (combinedBodyLength) {
    const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
    height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
  }
  if (footerLineCount) {
    height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
  }
  let widthPadding = 0;
  const maxLineWidth = function (line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };
  ctx.save();
  ctx.font = titleFont.string;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(tooltip.title, maxLineWidth);
  ctx.font = bodyFont.string;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(body, function (bodyItem) {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(bodyItem.before, maxLineWidth);
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(bodyItem.lines, maxLineWidth);
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = footerFont.string;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += padding.width;
  return {
    width,
    height
  };
}
function determineYAlign(chart, size) {
  const y = size.y,
    height = size.height;
  if (y < height / 2) {
    return 'top';
  } else if (y > chart.height - height / 2) {
    return 'bottom';
  }
  return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
  const x = size.x,
    width = size.width;
  const caret = options.caretSize + options.caretPadding;
  if (xAlign === 'left' && x + width + caret > chart.width) {
    return true;
  }
  if (xAlign === 'right' && x - width - caret < 0) {
    return true;
  }
}
function determineXAlign(chart, options, size, yAlign) {
  const x = size.x,
    width = size.width;
  const chartWidth = chart.width,
    _chart$chartArea = chart.chartArea,
    left = _chart$chartArea.left,
    right = _chart$chartArea.right;
  let xAlign = 'center';
  if (yAlign === 'center') {
    xAlign = x <= (left + right) / 2 ? 'left' : 'right';
  } else if (x <= width / 2) {
    xAlign = 'left';
  } else if (x >= chartWidth - width / 2) {
    xAlign = 'right';
  }
  if (doesNotFitWithAlign(xAlign, chart, options, size)) {
    xAlign = 'center';
  }
  return xAlign;
}
function determineAlignment(chart, options, size) {
  const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
  return {
    xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
    yAlign
  };
}
function alignX(size, xAlign) {
  let x = size.x,
    width = size.width;
  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= width / 2;
  }
  return x;
}
function alignY(size, yAlign, paddingAndSize) {
  let y = size.y,
    height = size.height;
  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= height / 2;
  }
  return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
  const caretSize = options.caretSize,
    caretPadding = options.caretPadding,
    cornerRadius = options.cornerRadius;
  const xAlign = alignment.xAlign,
    yAlign = alignment.yAlign;
  const paddingAndSize = caretSize + caretPadding;
  const _toTRBLCorners = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aw"])(cornerRadius),
    topLeft = _toTRBLCorners.topLeft,
    topRight = _toTRBLCorners.topRight,
    bottomLeft = _toTRBLCorners.bottomLeft,
    bottomRight = _toTRBLCorners.bottomRight;
  let x = alignX(size, xAlign);
  const y = alignY(size, yAlign, paddingAndSize);
  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= Math.max(topLeft, bottomLeft) + caretSize;
  } else if (xAlign === 'right') {
    x += Math.max(topRight, bottomRight) + caretSize;
  }
  return {
    x: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(x, 0, chart.width - size.width),
    y: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(y, 0, chart.height - size.height)
  };
}
function getAlignedX(tooltip, align, options) {
  const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(options.padding);
  return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["j"])(parent, {
    tooltip,
    tooltipItems,
    type: 'tooltip'
  });
}
function overrideCallbacks(callbacks, context) {
  const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
  return override ? callbacks.override(override) : callbacks;
}
const defaultCallbacks = {
  beforeTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"],
  title(tooltipItems) {
    if (tooltipItems.length > 0) {
      const item = tooltipItems[0];
      const labels = item.chart.data.labels;
      const labelCount = labels ? labels.length : 0;
      if (this && this.options && this.options.mode === 'dataset') {
        return item.dataset.label || '';
      } else if (item.label) {
        return item.label;
      } else if (labelCount > 0 && item.dataIndex < labelCount) {
        return labels[item.dataIndex];
      }
    }
    return '';
  },
  afterTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"],
  beforeBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"],
  beforeLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"],
  label(tooltipItem) {
    if (this && this.options && this.options.mode === 'dataset') {
      return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
    }
    let label = tooltipItem.dataset.label || '';
    if (label) {
      label += ': ';
    }
    const value = tooltipItem.formattedValue;
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(value)) {
      label += value;
    }
    return label;
  },
  labelColor(tooltipItem) {
    const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
    const options = meta.controller.getStyle(tooltipItem.dataIndex);
    return {
      borderColor: options.borderColor,
      backgroundColor: options.backgroundColor,
      borderWidth: options.borderWidth,
      borderDash: options.borderDash,
      borderDashOffset: options.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(tooltipItem) {
    const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
    const options = meta.controller.getStyle(tooltipItem.dataIndex);
    return {
      pointStyle: options.pointStyle,
      rotation: options.rotation
    };
  },
  afterLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"],
  afterBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"],
  beforeFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"],
  footer: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"],
  afterFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aF"]
};
function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
  const result = callbacks[name].call(ctx, arg);
  if (typeof result === 'undefined') {
    return defaultCallbacks[name].call(ctx, arg);
  }
  return result;
}
let Tooltip = /*#__PURE__*/function (_Element8) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Tooltip, _Element8);
  var _super18 = _createSuper(Tooltip);
  function Tooltip(config) {
    var _this31;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Tooltip);
    _this31 = _super18.call(this);
    _this31.opacity = 0;
    _this31._active = [];
    _this31._eventPosition = undefined;
    _this31._size = undefined;
    _this31._cachedAnimations = undefined;
    _this31._tooltipItems = [];
    _this31.$animations = undefined;
    _this31.$context = undefined;
    _this31.chart = config.chart;
    _this31.options = config.options;
    _this31.dataPoints = undefined;
    _this31.title = undefined;
    _this31.beforeBody = undefined;
    _this31.body = undefined;
    _this31.afterBody = undefined;
    _this31.footer = undefined;
    _this31.xAlign = undefined;
    _this31.yAlign = undefined;
    _this31.x = undefined;
    _this31.y = undefined;
    _this31.height = undefined;
    _this31.width = undefined;
    _this31.caretX = undefined;
    _this31.caretY = undefined;
    _this31.labelColors = undefined;
    _this31.labelPointStyles = undefined;
    _this31.labelTextColors = undefined;
    return _this31;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Tooltip, [{
    key: "initialize",
    value: function initialize(options) {
      this.options = options;
      this._cachedAnimations = undefined;
      this.$context = undefined;
    }
  }, {
    key: "_resolveAnimations",
    value: function _resolveAnimations() {
      const cached = this._cachedAnimations;
      if (cached) {
        return cached;
      }
      const chart = this.chart;
      const options = this.options.setContext(this.getContext());
      const opts = options.enabled && chart.options.animation && options.animations;
      const animations = new Animations(this.chart, opts);
      if (opts._cacheable) {
        this._cachedAnimations = Object.freeze(animations);
      }
      return animations;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
  }, {
    key: "getTitle",
    value: function getTitle(context, options) {
      const callbacks = options.callbacks;
      const beforeTitle = invokeCallbackWithFallback(callbacks, 'beforeTitle', this, context);
      const title = invokeCallbackWithFallback(callbacks, 'title', this, context);
      const afterTitle = invokeCallbackWithFallback(callbacks, 'afterTitle', this, context);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
      return lines;
    }
  }, {
    key: "getBeforeBody",
    value: function getBeforeBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'beforeBody', this, tooltipItems));
    }
  }, {
    key: "getBody",
    value: function getBody(tooltipItems, options) {
      var _this32 = this;
      const callbacks = options.callbacks;
      const bodyItems = [];
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(tooltipItems, function (context) {
        const bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        const scoped = overrideCallbacks(callbacks, context);
        pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, 'beforeLabel', _this32, context)));
        pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, 'label', _this32, context));
        pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, 'afterLabel', _this32, context)));
        bodyItems.push(bodyItem);
      });
      return bodyItems;
    }
  }, {
    key: "getAfterBody",
    value: function getAfterBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'afterBody', this, tooltipItems));
    }
  }, {
    key: "getFooter",
    value: function getFooter(tooltipItems, options) {
      const callbacks = options.callbacks;
      const beforeFooter = invokeCallbackWithFallback(callbacks, 'beforeFooter', this, tooltipItems);
      const footer = invokeCallbackWithFallback(callbacks, 'footer', this, tooltipItems);
      const afterFooter = invokeCallbackWithFallback(callbacks, 'afterFooter', this, tooltipItems);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
      return lines;
    }
  }, {
    key: "_createItems",
    value: function _createItems(options) {
      var _this33 = this;
      const active = this._active;
      const data = this.chart.data;
      const labelColors = [];
      const labelPointStyles = [];
      const labelTextColors = [];
      let tooltipItems = [];
      let i, len;
      for (i = 0, len = active.length; i < len; ++i) {
        tooltipItems.push(createTooltipItem(this.chart, active[i]));
      }
      if (options.filter) {
        tooltipItems = tooltipItems.filter(function (element, index, array) {
          return options.filter(element, index, array, data);
        });
      }
      if (options.itemSort) {
        tooltipItems = tooltipItems.sort(function (a, b) {
          return options.itemSort(a, b, data);
        });
      }
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(tooltipItems, function (context) {
        const scoped = overrideCallbacks(options.callbacks, context);
        labelColors.push(invokeCallbackWithFallback(scoped, 'labelColor', _this33, context));
        labelPointStyles.push(invokeCallbackWithFallback(scoped, 'labelPointStyle', _this33, context));
        labelTextColors.push(invokeCallbackWithFallback(scoped, 'labelTextColor', _this33, context));
      });
      this.labelColors = labelColors;
      this.labelPointStyles = labelPointStyles;
      this.labelTextColors = labelTextColors;
      this.dataPoints = tooltipItems;
      return tooltipItems;
    }
  }, {
    key: "update",
    value: function update(changed, replay) {
      const options = this.options.setContext(this.getContext());
      const active = this._active;
      let properties;
      let tooltipItems = [];
      if (!active.length) {
        if (this.opacity !== 0) {
          properties = {
            opacity: 0
          };
        }
      } else {
        const position = positioners[options.position].call(this, active, this._eventPosition);
        tooltipItems = this._createItems(options);
        this.title = this.getTitle(tooltipItems, options);
        this.beforeBody = this.getBeforeBody(tooltipItems, options);
        this.body = this.getBody(tooltipItems, options);
        this.afterBody = this.getAfterBody(tooltipItems, options);
        this.footer = this.getFooter(tooltipItems, options);
        const size = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, size);
        const alignment = determineAlignment(this.chart, options, positionAndSize);
        const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        properties = {
          opacity: 1,
          x: backgroundPoint.x,
          y: backgroundPoint.y,
          width: size.width,
          height: size.height,
          caretX: position.x,
          caretY: position.y
        };
      }
      this._tooltipItems = tooltipItems;
      this.$context = undefined;
      if (properties) {
        this._resolveAnimations().update(this, properties);
      }
      if (changed && options.external) {
        options.external.call(this, {
          chart: this.chart,
          tooltip: this,
          replay
        });
      }
    }
  }, {
    key: "drawCaret",
    value: function drawCaret(tooltipPoint, ctx, size, options) {
      const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
  }, {
    key: "getCaretPosition",
    value: function getCaretPosition(tooltipPoint, size, options) {
      const xAlign = this.xAlign,
        yAlign = this.yAlign;
      const caretSize = options.caretSize,
        cornerRadius = options.cornerRadius;
      const _toTRBLCorners2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aw"])(cornerRadius),
        topLeft = _toTRBLCorners2.topLeft,
        topRight = _toTRBLCorners2.topRight,
        bottomLeft = _toTRBLCorners2.bottomLeft,
        bottomRight = _toTRBLCorners2.bottomRight;
      const ptX = tooltipPoint.x,
        ptY = tooltipPoint.y;
      const width = size.width,
        height = size.height;
      let x1, x2, x3, y1, y2, y3;
      if (yAlign === 'center') {
        y2 = ptY + height / 2;
        if (xAlign === 'left') {
          x1 = ptX;
          x2 = x1 - caretSize;
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
        x3 = x1;
      } else {
        if (xAlign === 'left') {
          x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
        } else if (xAlign === 'right') {
          x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
        } else {
          x2 = this.caretX;
        }
        if (yAlign === 'top') {
          y1 = ptY;
          y2 = y1 - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          x1 = x2 + caretSize;
          x3 = x2 - caretSize;
        }
        y3 = y1;
      }
      return {
        x1,
        x2,
        x3,
        y1,
        y2,
        y3
      };
    }
  }, {
    key: "drawTitle",
    value: function drawTitle(pt, ctx, options) {
      const title = this.title;
      const length = title.length;
      let titleFont, titleSpacing, i;
      if (length) {
        const rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["az"])(options.rtl, this.x, this.width);
        pt.x = getAlignedX(this, options.titleAlign, options);
        ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
        ctx.textBaseline = 'middle';
        titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(options.titleFont);
        titleSpacing = options.titleSpacing;
        ctx.fillStyle = options.titleColor;
        ctx.font = titleFont.string;
        for (i = 0; i < length; ++i) {
          ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
          pt.y += titleFont.lineHeight + titleSpacing;
          if (i + 1 === length) {
            pt.y += options.titleMarginBottom - titleSpacing;
          }
        }
      }
    }
  }, {
    key: "_drawColorBox",
    value: function _drawColorBox(ctx, pt, i, rtlHelper, options) {
      const labelColors = this.labelColors[i];
      const labelPointStyle = this.labelPointStyles[i];
      const boxHeight = options.boxHeight,
        boxWidth = options.boxWidth,
        boxPadding = options.boxPadding;
      const bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(options.bodyFont);
      const colorX = getAlignedX(this, 'left', options);
      const rtlColorX = rtlHelper.x(colorX);
      const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
      const colorY = pt.y + yOffSet;
      if (options.usePointStyle) {
        const drawOptions = {
          radius: Math.min(boxWidth, boxHeight) / 2,
          pointStyle: labelPointStyle.pointStyle,
          rotation: labelPointStyle.rotation,
          borderWidth: 1
        };
        const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
        const centerY = colorY + boxHeight / 2;
        ctx.strokeStyle = options.multiKeyBackground;
        ctx.fillStyle = options.multiKeyBackground;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["at"])(ctx, drawOptions, centerX, centerY);
        ctx.strokeStyle = labelColors.borderColor;
        ctx.fillStyle = labelColors.backgroundColor;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["at"])(ctx, drawOptions, centerX, centerY);
      } else {
        ctx.lineWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["i"])(labelColors.borderWidth) ? Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_7___default()(Object.values(labelColors.borderWidth))) : labelColors.borderWidth || 1;
        ctx.strokeStyle = labelColors.borderColor;
        ctx.setLineDash(labelColors.borderDash || []);
        ctx.lineDashOffset = labelColors.borderDashOffset || 0;
        const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
        const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
        const borderRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aw"])(labelColors.borderRadius);
        if (Object.values(borderRadius).some(function (v) {
          return v !== 0;
        })) {
          ctx.beginPath();
          ctx.fillStyle = options.multiKeyBackground;
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["au"])(ctx, {
            x: outerX,
            y: colorY,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius
          });
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = labelColors.backgroundColor;
          ctx.beginPath();
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["au"])(ctx, {
            x: innerX,
            y: colorY + 1,
            w: boxWidth - 2,
            h: boxHeight - 2,
            radius: borderRadius
          });
          ctx.fill();
        } else {
          ctx.fillStyle = options.multiKeyBackground;
          ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
          ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
          ctx.fillStyle = labelColors.backgroundColor;
          ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
        }
      }
      ctx.fillStyle = this.labelTextColors[i];
    }
  }, {
    key: "drawBody",
    value: function drawBody(pt, ctx, options) {
      const body = this.body;
      const bodySpacing = options.bodySpacing,
        bodyAlign = options.bodyAlign,
        displayColors = options.displayColors,
        boxHeight = options.boxHeight,
        boxWidth = options.boxWidth,
        boxPadding = options.boxPadding;
      const bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(options.bodyFont);
      let bodyLineHeight = bodyFont.lineHeight;
      let xLinePadding = 0;
      const rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["az"])(options.rtl, this.x, this.width);
      const fillLineOfText = function (line) {
        ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
        pt.y += bodyLineHeight + bodySpacing;
      };
      const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
      let bodyItem, textColor, lines, i, j, ilen, jlen;
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = 'middle';
      ctx.font = bodyFont.string;
      pt.x = getAlignedX(this, bodyAlignForCalculation, options);
      ctx.fillStyle = options.bodyColor;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(this.beforeBody, fillLineOfText);
      xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
      for (i = 0, ilen = body.length; i < ilen; ++i) {
        bodyItem = body[i];
        textColor = this.labelTextColors[i];
        ctx.fillStyle = textColor;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(bodyItem.before, fillLineOfText);
        lines = bodyItem.lines;
        if (displayColors && lines.length) {
          this._drawColorBox(ctx, pt, i, rtlHelper, options);
          bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
        }
        for (j = 0, jlen = lines.length; j < jlen; ++j) {
          fillLineOfText(lines[j]);
          bodyLineHeight = bodyFont.lineHeight;
        }
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(bodyItem.after, fillLineOfText);
      }
      xLinePadding = 0;
      bodyLineHeight = bodyFont.lineHeight;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["F"])(this.afterBody, fillLineOfText);
      pt.y -= bodySpacing;
    }
  }, {
    key: "drawFooter",
    value: function drawFooter(pt, ctx, options) {
      const footer = this.footer;
      const length = footer.length;
      let footerFont, i;
      if (length) {
        const rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["az"])(options.rtl, this.x, this.width);
        pt.x = getAlignedX(this, options.footerAlign, options);
        pt.y += options.footerMarginTop;
        ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
        ctx.textBaseline = 'middle';
        footerFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(options.footerFont);
        ctx.fillStyle = options.footerColor;
        ctx.font = footerFont.string;
        for (i = 0; i < length; ++i) {
          ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
          pt.y += footerFont.lineHeight + options.footerSpacing;
        }
      }
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(pt, ctx, tooltipSize, options) {
      const xAlign = this.xAlign,
        yAlign = this.yAlign;
      const x = pt.x,
        y = pt.y;
      const width = tooltipSize.width,
        height = tooltipSize.height;
      const _toTRBLCorners3 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aw"])(options.cornerRadius),
        topLeft = _toTRBLCorners3.topLeft,
        topRight = _toTRBLCorners3.topRight,
        bottomLeft = _toTRBLCorners3.bottomLeft,
        bottomRight = _toTRBLCorners3.bottomRight;
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.beginPath();
      ctx.moveTo(x + topLeft, y);
      if (yAlign === 'top') {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + width - topRight, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
      if (yAlign === 'center' && xAlign === 'right') {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + width, y + height - bottomRight);
      ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
      if (yAlign === 'bottom') {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x + bottomLeft, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
      if (yAlign === 'center' && xAlign === 'left') {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x, y + topLeft);
      ctx.quadraticCurveTo(x, y, x + topLeft, y);
      ctx.closePath();
      ctx.fill();
      if (options.borderWidth > 0) {
        ctx.stroke();
      }
    }
  }, {
    key: "_updateAnimationTarget",
    value: function _updateAnimationTarget(options) {
      const chart = this.chart;
      const anims = this.$animations;
      const animX = anims && anims.x;
      const animY = anims && anims.y;
      if (animX || animY) {
        const position = positioners[options.position].call(this, this._active, this._eventPosition);
        if (!position) {
          return;
        }
        const size = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, this._size);
        const alignment = determineAlignment(chart, options, positionAndSize);
        const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
        if (animX._to !== point.x || animY._to !== point.y) {
          this.xAlign = alignment.xAlign;
          this.yAlign = alignment.yAlign;
          this.width = size.width;
          this.height = size.height;
          this.caretX = position.x;
          this.caretY = position.y;
          this._resolveAnimations().update(this, point);
        }
      }
    }
  }, {
    key: "_willRender",
    value: function _willRender() {
      return !!this.opacity;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      const options = this.options.setContext(this.getContext());
      let opacity = this.opacity;
      if (!opacity) {
        return;
      }
      this._updateAnimationTarget(options);
      const tooltipSize = {
        width: this.width,
        height: this.height
      };
      const pt = {
        x: this.x,
        y: this.y
      };
      opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
      const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(options.padding);
      const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
      if (options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity;
        this.drawBackground(pt, ctx, tooltipSize, options);
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aA"])(ctx, options.textDirection);
        pt.y += padding.top;
        this.drawTitle(pt, ctx, options);
        this.drawBody(pt, ctx, options);
        this.drawFooter(pt, ctx, options);
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aC"])(ctx, options.textDirection);
        ctx.restore();
      }
    }
  }, {
    key: "getActiveElements",
    value: function getActiveElements() {
      return this._active || [];
    }
  }, {
    key: "setActiveElements",
    value: function setActiveElements(activeElements, eventPosition) {
      var _this34 = this;
      const lastActive = this._active;
      const active = activeElements.map(function (_ref15) {
        let datasetIndex = _ref15.datasetIndex,
          index = _ref15.index;
        const meta = _this34.chart.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error('Cannot find a dataset at index ' + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index],
          index
        };
      });
      const changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ah"])(lastActive, active);
      const positionChanged = this._positionChanged(active, eventPosition);
      if (changed || positionChanged) {
        this._active = active;
        this._eventPosition = eventPosition;
        this._ignoreReplayEvents = true;
        this.update(true);
      }
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(e, replay) {
      let inChartArea = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (replay && this._ignoreReplayEvents) {
        return false;
      }
      this._ignoreReplayEvents = false;
      const options = this.options;
      const lastActive = this._active || [];
      const active = this._getActiveElements(e, lastActive, replay, inChartArea);
      const positionChanged = this._positionChanged(active, e);
      const changed = replay || !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ah"])(active, lastActive) || positionChanged;
      if (changed) {
        this._active = active;
        if (options.enabled || options.external) {
          this._eventPosition = {
            x: e.x,
            y: e.y
          };
          this.update(true, replay);
        }
      }
      return changed;
    }
  }, {
    key: "_getActiveElements",
    value: function _getActiveElements(e, lastActive, replay, inChartArea) {
      const options = this.options;
      if (e.type === 'mouseout') {
        return [];
      }
      if (!inChartArea) {
        return lastActive;
      }
      const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
      if (options.reverse) {
        active.reverse();
      }
      return active;
    }
  }, {
    key: "_positionChanged",
    value: function _positionChanged(active, e) {
      const caretX = this.caretX,
        caretY = this.caretY,
        options = this.options;
      const position = positioners[options.position].call(this, active, e);
      return position !== false && (caretX !== position.x || caretY !== position.y);
    }
  }]);
  return Tooltip;
}(Element);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Tooltip, "positioners", positioners);
var plugin_tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners,
  afterInit(chart, _args, options) {
    if (options) {
      chart.tooltip = new Tooltip({
        chart,
        options
      });
    }
  },
  beforeUpdate(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  reset(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  afterDraw(chart) {
    const tooltip = chart.tooltip;
    if (tooltip && tooltip._willRender()) {
      const args = {
        tooltip
      };
      if (chart.notifyPlugins('beforeTooltipDraw', _objectSpread(_objectSpread({}, args), {}, {
        cancelable: true
      })) === false) {
        return;
      }
      tooltip.draw(chart.ctx);
      chart.notifyPlugins('afterTooltipDraw', args);
    }
  },
  afterEvent(chart, args) {
    if (chart.tooltip) {
      const useFinalPosition = args.replay;
      if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
        args.changed = true;
      }
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold'
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold'
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: function (ctx, opts) {
      return opts.bodyFont.size;
    },
    boxWidth: function (ctx, opts) {
      return opts.bodyFont.size;
    },
    multiKeyBackground: '#fff',
    displayColors: true,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart'
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY']
      },
      opacity: {
        easing: 'linear',
        duration: 200
      }
    },
    callbacks: defaultCallbacks
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font'
  },
  descriptors: {
    _scriptable: function (name) {
      return name !== 'filter' && name !== 'itemSort' && name !== 'external';
    },
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: 'animation'
    }
  },
  additionalOptionScopes: ['interaction']
};
var plugins = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Colors: plugin_colors,
  Decimation: plugin_decimation,
  Filler: index,
  Legend: plugin_legend,
  SubTitle: plugin_subtitle,
  Title: plugin_title,
  Tooltip: plugin_tooltip
});
const addIfString = function (labels, raw, index, addedLabels) {
  if (typeof raw === 'string') {
    index = labels.push(raw) - 1;
    addedLabels.unshift({
      index,
      label: raw
    });
  } else if (isNaN(raw)) {
    index = null;
  }
  return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
  const first = labels.indexOf(raw);
  if (first === -1) {
    return addIfString(labels, raw, index, addedLabels);
  }
  const last = labels.lastIndexOf(raw);
  return first !== last ? index : first;
}
const validIndex = function (index, max) {
  return index === null ? null : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(Math.round(index), 0, max);
};
function _getLabelForValue(value) {
  const labels = this.getLabels();
  if (value >= 0 && value < labels.length) {
    return labels[value];
  }
  return value;
}
let CategoryScale = /*#__PURE__*/function (_Scale) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(CategoryScale, _Scale);
  var _super19 = _createSuper(CategoryScale);
  function CategoryScale(cfg) {
    var _this35;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, CategoryScale);
    _this35 = _super19.call(this, cfg);
    _this35._startValue = undefined;
    _this35._valueRange = 0;
    _this35._addedLabels = [];
    return _this35;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(CategoryScale, [{
    key: "init",
    value: function init(scaleOptions) {
      const added = this._addedLabels;
      if (added.length) {
        const labels = this.getLabels();
        var _iterator25 = _createForOfIteratorHelper(added),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            const _ref16 = _step25.value;
            const index = _ref16.index;
            const label = _ref16.label;
            if (labels[index] === label) {
              labels.splice(index, 1);
            }
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
        this._addedLabels = [];
      }
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CategoryScale.prototype), "init", this).call(this, scaleOptions);
    }
  }, {
    key: "parse",
    value: function parse(raw, index) {
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(raw)) {
        return null;
      }
      const labels = this.getLabels();
      index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(index, raw), this._addedLabels);
      return validIndex(index, labels.length - 1);
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {
      const _this$getUserBounds2 = this.getUserBounds(),
        minDefined = _this$getUserBounds2.minDefined,
        maxDefined = _this$getUserBounds2.maxDefined;
      let _this$getMinMax = this.getMinMax(true),
        min = _this$getMinMax.min,
        max = _this$getMinMax.max;
      if (this.options.bounds === 'ticks') {
        if (!minDefined) {
          min = 0;
        }
        if (!maxDefined) {
          max = this.getLabels().length - 1;
        }
      }
      this.min = min;
      this.max = max;
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      const min = this.min;
      const max = this.max;
      const offset = this.options.offset;
      const ticks = [];
      let labels = this.getLabels();
      labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
      this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
      this._startValue = this.min - (offset ? 0.5 : 0);
      for (let value = min; value <= max; value++) {
        ticks.push({
          value
        });
      }
      return ticks;
    }
  }, {
    key: "getLabelForValue",
    value: function getLabelForValue(value) {
      return _getLabelForValue.call(this, value);
    }
  }, {
    key: "configure",
    value: function configure() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CategoryScale.prototype), "configure", this).call(this);
      if (!this.isHorizontal()) {
        this._reversePixels = !this._reversePixels;
      }
    }
  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value) {
      if (typeof value !== 'number') {
        value = this.parse(value);
      }
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
  }, {
    key: "getPixelForTick",
    value: function getPixelForTick(index) {
      const ticks = this.ticks;
      if (index < 0 || index > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index].value);
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
  }, {
    key: "getBasePixel",
    value: function getBasePixel() {
      return this.bottom;
    }
  }]);
  return CategoryScale;
}(Scale);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(CategoryScale, "id", 'category');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(CategoryScale, "defaults", {
  ticks: {
    callback: _getLabelForValue
  }
});
function generateTicks$1(generationOptions, dataRange) {
  const ticks = [];
  const MIN_SPACING = 1e-14;
  const bounds = generationOptions.bounds,
    step = generationOptions.step,
    min = generationOptions.min,
    max = generationOptions.max,
    precision = generationOptions.precision,
    count = generationOptions.count,
    maxTicks = generationOptions.maxTicks,
    maxDigits = generationOptions.maxDigits,
    includeBounds = generationOptions.includeBounds;
  const unit = step || 1;
  const maxSpaces = maxTicks - 1;
  const rmin = dataRange.min,
    rmax = dataRange.max;
  const minDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(min);
  const maxDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(max);
  const countDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(count);
  const minSpacing = (rmax - rmin) / (maxDigits + 1);
  let spacing = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aH"])((rmax - rmin) / maxSpaces / unit) * unit;
  let factor, niceMin, niceMax, numSpaces;
  if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
    return [{
      value: rmin
    }, {
      value: rmax
    }];
  }
  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
  if (numSpaces > maxSpaces) {
    spacing = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aH"])(numSpaces * spacing / maxSpaces / unit) * unit;
  }
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(precision)) {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }
  if (bounds === 'ticks') {
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  } else {
    niceMin = rmin;
    niceMax = rmax;
  }
  if (minDefined && maxDefined && step && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aI"])((max - min) / step, spacing / 1000)) {
    numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
    spacing = (max - min) / numSpaces;
    niceMin = min;
    niceMax = max;
  } else if (countDefined) {
    niceMin = minDefined ? min : niceMin;
    niceMax = maxDefined ? max : niceMax;
    numSpaces = count - 1;
    spacing = (niceMax - niceMin) / numSpaces;
  } else {
    numSpaces = (niceMax - niceMin) / spacing;
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aJ"])(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  }
  const decimalPlaces = Math.max(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aK"])(spacing), Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aK"])(niceMin));
  factor = Math.pow(10, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(precision) ? decimalPlaces : precision);
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  let j = 0;
  if (minDefined) {
    if (includeBounds && niceMin !== min) {
      ticks.push({
        value: min
      });
      if (niceMin < min) {
        j++;
      }
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aJ"])(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
        j++;
      }
    } else if (niceMin < min) {
      j++;
    }
  }
  for (; j < numSpaces; ++j) {
    ticks.push({
      value: Math.round((niceMin + j * spacing) * factor) / factor
    });
  }
  if (maxDefined && includeBounds && niceMax !== max) {
    if (ticks.length && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aJ"])(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
      ticks[ticks.length - 1].value = max;
    } else {
      ticks.push({
        value: max
      });
    }
  } else if (!maxDefined || niceMax === max) {
    ticks.push({
      value: niceMax
    });
  }
  return ticks;
}
function relativeLabelSize(value, minSpacing, _ref17) {
  let horizontal = _ref17.horizontal,
    minRotation = _ref17.minRotation;
  const rad = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(minRotation);
  const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
  const length = 0.75 * minSpacing * ('' + value).length;
  return Math.min(minSpacing / ratio, length);
}
let LinearScaleBase = /*#__PURE__*/function (_Scale2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LinearScaleBase, _Scale2);
  var _super20 = _createSuper(LinearScaleBase);
  function LinearScaleBase(cfg) {
    var _this36;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, LinearScaleBase);
    _this36 = _super20.call(this, cfg);
    _this36.start = undefined;
    _this36.end = undefined;
    _this36._startValue = undefined;
    _this36._endValue = undefined;
    _this36._valueRange = 0;
    return _this36;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(LinearScaleBase, [{
    key: "parse",
    value: function parse(raw, index) {
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(raw)) {
        return null;
      }
      if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
        return null;
      }
      return +raw;
    }
  }, {
    key: "handleTickRangeOptions",
    value: function handleTickRangeOptions() {
      const beginAtZero = this.options.beginAtZero;
      const _this$getUserBounds3 = this.getUserBounds(),
        minDefined = _this$getUserBounds3.minDefined,
        maxDefined = _this$getUserBounds3.maxDefined;
      let min = this.min,
        max = this.max;
      const setMin = function (v) {
        return min = minDefined ? min : v;
      };
      const setMax = function (v) {
        return max = maxDefined ? max : v;
      };
      if (beginAtZero) {
        const minSign = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["s"])(min);
        const maxSign = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["s"])(max);
        if (minSign < 0 && maxSign < 0) {
          setMax(0);
        } else if (minSign > 0 && maxSign > 0) {
          setMin(0);
        }
      }
      if (min === max) {
        let offset = max === 0 ? 1 : Math.abs(max * 0.05);
        setMax(max + offset);
        if (!beginAtZero) {
          setMin(min - offset);
        }
      }
      this.min = min;
      this.max = max;
    }
  }, {
    key: "getTickLimit",
    value: function getTickLimit() {
      const tickOpts = this.options.ticks;
      let maxTicksLimit = tickOpts.maxTicksLimit,
        stepSize = tickOpts.stepSize;
      let maxTicks;
      if (stepSize) {
        maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
        if (maxTicks > 1000) {
          console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
          maxTicks = 1000;
        }
      } else {
        maxTicks = this.computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }
      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }
      return maxTicks;
    }
  }, {
    key: "computeTickLimit",
    value: function computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      const opts = this.options;
      const tickOpts = opts.ticks;
      let maxTicks = this.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
      const numericGeneratorOptions = {
        maxTicks,
        bounds: opts.bounds,
        min: opts.min,
        max: opts.max,
        precision: tickOpts.precision,
        step: tickOpts.stepSize,
        count: tickOpts.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: tickOpts.minRotation || 0,
        includeBounds: tickOpts.includeBounds !== false
      };
      const dataRange = this._range || this;
      const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
      if (opts.bounds === 'ticks') {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aG"])(ticks, this, 'value');
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
  }, {
    key: "configure",
    value: function configure() {
      const ticks = this.ticks;
      let start = this.min;
      let end = this.max;
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LinearScaleBase.prototype), "configure", this).call(this);
      if (this.options.offset && ticks.length) {
        const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
        start -= offset;
        end += offset;
      }
      this._startValue = start;
      this._endValue = end;
      this._valueRange = end - start;
    }
  }, {
    key: "getLabelForValue",
    value: function getLabelForValue(value) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["o"])(value, this.chart.options.locale, this.options.ticks.format);
    }
  }]);
  return LinearScaleBase;
}(Scale);
let LinearScale = /*#__PURE__*/function (_LinearScaleBase) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LinearScale, _LinearScaleBase);
  var _super21 = _createSuper(LinearScale);
  function LinearScale() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, LinearScale);
    return _super21.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(LinearScale, [{
    key: "determineDataLimits",
    value: function determineDataLimits() {
      const _this$getMinMax2 = this.getMinMax(true),
        min = _this$getMinMax2.min,
        max = _this$getMinMax2.max;
      this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(min) ? min : 0;
      this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(max) ? max : 1;
      this.handleTickRangeOptions();
    }
  }, {
    key: "computeTickLimit",
    value: function computeTickLimit() {
      const horizontal = this.isHorizontal();
      const length = horizontal ? this.width : this.height;
      const minRotation = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.options.ticks.minRotation);
      const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
      const tickFont = this._resolveTickFontOptions(0);
      return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value) {
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
  }]);
  return LinearScale;
}(LinearScaleBase);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LinearScale, "id", 'linear');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LinearScale, "defaults", {
  ticks: {
    callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aL"].formatters.numeric
  }
});
const log10Floor = function (v) {
  return Math.floor(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aM"])(v));
};
const changeExponent = function (v, m) {
  return Math.pow(10, log10Floor(v) + m);
};
function isMajor(tickVal) {
  const remain = tickVal / Math.pow(10, log10Floor(tickVal));
  return remain === 1;
}
function steps(min, max, rangeExp) {
  const rangeStep = Math.pow(10, rangeExp);
  const start = Math.floor(min / rangeStep);
  const end = Math.ceil(max / rangeStep);
  return end - start;
}
function startExp(min, max) {
  const range = max - min;
  let rangeExp = log10Floor(range);
  while (steps(min, max, rangeExp) > 10) {
    rangeExp++;
  }
  while (steps(min, max, rangeExp) < 10) {
    rangeExp--;
  }
  return Math.min(rangeExp, log10Floor(min));
}
function generateTicks(generationOptions, _ref18) {
  let min = _ref18.min,
    max = _ref18.max;
  min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(generationOptions.min, min);
  const ticks = [];
  const minExp = log10Floor(min);
  let exp = startExp(min, max);
  let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  const stepSize = Math.pow(10, exp);
  const base = minExp > exp ? Math.pow(10, minExp) : 0;
  const start = Math.round((min - base) * precision) / precision;
  const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
  let significand = Math.floor((start - offset) / Math.pow(10, exp));
  let value = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
  while (value < max) {
    ticks.push({
      value,
      major: isMajor(value),
      significand
    });
    if (significand >= 10) {
      significand = significand < 15 ? 15 : 20;
    } else {
      significand++;
    }
    if (significand >= 20) {
      exp++;
      significand = 2;
      precision = exp >= 0 ? 1 : precision;
    }
    value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
  }
  const lastTick = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["O"])(generationOptions.max, value);
  ticks.push({
    value: lastTick,
    major: isMajor(lastTick),
    significand
  });
  return ticks;
}
let LogarithmicScale = /*#__PURE__*/function (_Scale3) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LogarithmicScale, _Scale3);
  var _super22 = _createSuper(LogarithmicScale);
  function LogarithmicScale(cfg) {
    var _this37;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, LogarithmicScale);
    _this37 = _super22.call(this, cfg);
    _this37.start = undefined;
    _this37.end = undefined;
    _this37._startValue = undefined;
    _this37._valueRange = 0;
    return _this37;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(LogarithmicScale, [{
    key: "parse",
    value: function parse(raw, index) {
      const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
      if (value === 0) {
        this._zero = true;
        return undefined;
      }
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(value) && value > 0 ? value : null;
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {
      const _this$getMinMax3 = this.getMinMax(true),
        min = _this$getMinMax3.min,
        max = _this$getMinMax3.max;
      this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(min) ? Math.max(0, min) : null;
      this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(max) ? Math.max(0, max) : null;
      if (this.options.beginAtZero) {
        this._zero = true;
      }
      if (this._zero && this.min !== this._suggestedMin && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(this._userMin)) {
        this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
      }
      this.handleTickRangeOptions();
    }
  }, {
    key: "handleTickRangeOptions",
    value: function handleTickRangeOptions() {
      const _this$getUserBounds4 = this.getUserBounds(),
        minDefined = _this$getUserBounds4.minDefined,
        maxDefined = _this$getUserBounds4.maxDefined;
      let min = this.min;
      let max = this.max;
      const setMin = function (v) {
        return min = minDefined ? min : v;
      };
      const setMax = function (v) {
        return max = maxDefined ? max : v;
      };
      if (min === max) {
        if (min <= 0) {
          setMin(1);
          setMax(10);
        } else {
          setMin(changeExponent(min, -1));
          setMax(changeExponent(max, +1));
        }
      }
      if (min <= 0) {
        setMin(changeExponent(max, -1));
      }
      if (max <= 0) {
        setMax(changeExponent(min, +1));
      }
      this.min = min;
      this.max = max;
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      const opts = this.options;
      const generationOptions = {
        min: this._userMin,
        max: this._userMax
      };
      const ticks = generateTicks(generationOptions, this);
      if (opts.bounds === 'ticks') {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aG"])(ticks, this, 'value');
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
  }, {
    key: "getLabelForValue",
    value: function getLabelForValue(value) {
      return value === undefined ? '0' : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["o"])(value, this.chart.options.locale, this.options.ticks.format);
    }
  }, {
    key: "configure",
    value: function configure() {
      const start = this.min;
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(LogarithmicScale.prototype), "configure", this).call(this);
      this._startValue = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aM"])(start);
      this._valueRange = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aM"])(this.max) - Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aM"])(start);
    }
  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value) {
      if (value === undefined || value === 0) {
        value = this.min;
      }
      if (value === null || isNaN(value)) {
        return NaN;
      }
      return this.getPixelForDecimal(value === this.min ? 0 : (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aM"])(value) - this._startValue) / this._valueRange);
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      const decimal = this.getDecimalForPixel(pixel);
      return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
  }]);
  return LogarithmicScale;
}(Scale);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LogarithmicScale, "id", 'logarithmic');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LogarithmicScale, "defaults", {
  ticks: {
    callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aL"].formatters.logarithmic,
    major: {
      enabled: true
    }
  }
});
function getTickBackdropHeight(opts) {
  const tickOpts = opts.ticks;
  if (tickOpts.display && opts.display) {
    const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(tickOpts.backdropPadding);
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(tickOpts.font && tickOpts.font.size, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["d"].font.size) + padding.height;
  }
  return 0;
}
function measureLabelSize(ctx, font, label) {
  label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["b"])(label) ? label : [label];
  return {
    w: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aN"])(ctx, font.string, label),
    h: label.length * font.lineHeight
  };
}
function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - size / 2,
      end: pos + size / 2
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }
  return {
    start: pos,
    end: pos + size
  };
}
function fitWithPointLabels(scale) {
  const orig = {
    l: scale.left + scale._padding.left,
    r: scale.right - scale._padding.right,
    t: scale.top + scale._padding.top,
    b: scale.bottom - scale._padding.bottom
  };
  const limits = Object.assign({}, orig);
  const labelSizes = [];
  const padding = [];
  const valueCount = scale._pointLabels.length;
  const pointLabelOpts = scale.options.pointLabels;
  const additionalAngle = pointLabelOpts.centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"] / valueCount : 0;
  for (let i = 0; i < valueCount; i++) {
    const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
    padding[i] = opts.padding;
    const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
    const plFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(opts.font);
    const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
    labelSizes[i] = textSize;
    const angleRadians = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ay"])(scale.getIndexAngle(i) + additionalAngle);
    const angle = Math.round(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["U"])(angleRadians));
    const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
    updateLimits(limits, orig, angleRadians, hLimits, vLimits);
  }
  scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
  scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
  const sin = Math.abs(Math.sin(angle));
  const cos = Math.abs(Math.cos(angle));
  let x = 0;
  let y = 0;
  if (hLimits.start < orig.l) {
    x = (orig.l - hLimits.start) / sin;
    limits.l = Math.min(limits.l, orig.l - x);
  } else if (hLimits.end > orig.r) {
    x = (hLimits.end - orig.r) / sin;
    limits.r = Math.max(limits.r, orig.r + x);
  }
  if (vLimits.start < orig.t) {
    y = (orig.t - vLimits.start) / cos;
    limits.t = Math.min(limits.t, orig.t - y);
  } else if (vLimits.end > orig.b) {
    y = (vLimits.end - orig.b) / cos;
    limits.b = Math.max(limits.b, orig.b + y);
  }
}
function buildPointLabelItems(scale, labelSizes, padding) {
  const items = [];
  const valueCount = scale._pointLabels.length;
  const opts = scale.options;
  const extra = getTickBackdropHeight(opts) / 2;
  const outerDistance = scale.drawingArea;
  const additionalAngle = opts.pointLabels.centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["P"] / valueCount : 0;
  for (let i = 0; i < valueCount; i++) {
    const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
    const angle = Math.round(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["U"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ay"])(pointLabelPosition.angle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"])));
    const size = labelSizes[i];
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    items.push({
      x: pointLabelPosition.x,
      y,
      textAlign,
      left,
      top: y,
      right: left + size.w,
      bottom: y + size.h
    });
  }
  return items;
}
function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }
  return 'right';
}
function leftForTextAlign(x, w, align) {
  if (align === 'right') {
    x -= w;
  } else if (align === 'center') {
    x -= w / 2;
  }
  return x;
}
function yForAngle(y, h, angle) {
  if (angle === 90 || angle === 270) {
    y -= h / 2;
  } else if (angle > 270 || angle < 90) {
    y -= h;
  }
  return y;
}
function drawPointLabels(scale, labelCount) {
  const ctx = scale.ctx,
    pointLabels = scale.options.pointLabels;
  for (let i = labelCount - 1; i >= 0; i--) {
    const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
    const plFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(optsAtIndex.font);
    const _scale$_pointLabelIte = scale._pointLabelItems[i],
      x = _scale$_pointLabelIte.x,
      y = _scale$_pointLabelIte.y,
      textAlign = _scale$_pointLabelIte.textAlign,
      left = _scale$_pointLabelIte.left,
      top = _scale$_pointLabelIte.top,
      right = _scale$_pointLabelIte.right,
      bottom = _scale$_pointLabelIte.bottom;
    const backdropColor = optsAtIndex.backdropColor;
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(backdropColor)) {
      const borderRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aw"])(optsAtIndex.borderRadius);
      const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(optsAtIndex.backdropPadding);
      ctx.fillStyle = backdropColor;
      const backdropLeft = left - padding.left;
      const backdropTop = top - padding.top;
      const backdropWidth = right - left + padding.width;
      const backdropHeight = bottom - top + padding.height;
      if (Object.values(borderRadius).some(function (v) {
        return v !== 0;
      })) {
        ctx.beginPath();
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["au"])(ctx, {
          x: backdropLeft,
          y: backdropTop,
          w: backdropWidth,
          h: backdropHeight,
          radius: borderRadius
        });
        ctx.fill();
      } else {
        ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
      }
    }
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Z"])(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
      color: optsAtIndex.color,
      textAlign: textAlign,
      textBaseline: 'middle'
    });
  }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
  const ctx = scale.ctx;
  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"]);
  } else {
    let pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);
    for (let i = 1; i < labelCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
  const ctx = scale.ctx;
  const circular = gridLineOpts.circular;
  const color = gridLineOpts.color,
    lineWidth = gridLineOpts.lineWidth;
  if (!circular && !labelCount || !color || !lineWidth || radius < 0) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(borderOpts.dash);
  ctx.lineDashOffset = borderOpts.dashOffset;
  ctx.beginPath();
  pathRadiusLine(scale, radius, circular, labelCount);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function createPointLabelContext(parent, index, label) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["j"])(parent, {
    label,
    index,
    type: 'pointLabel'
  });
}
let RadialLinearScale = /*#__PURE__*/function (_LinearScaleBase2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(RadialLinearScale, _LinearScaleBase2);
  var _super23 = _createSuper(RadialLinearScale);
  function RadialLinearScale(cfg) {
    var _this38;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, RadialLinearScale);
    _this38 = _super23.call(this, cfg);
    _this38.xCenter = undefined;
    _this38.yCenter = undefined;
    _this38.drawingArea = undefined;
    _this38._pointLabels = [];
    _this38._pointLabelItems = [];
    return _this38;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(RadialLinearScale, [{
    key: "setDimensions",
    value: function setDimensions() {
      const padding = this._padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(getTickBackdropHeight(this.options) / 2);
      const w = this.width = this.maxWidth - padding.width;
      const h = this.height = this.maxHeight - padding.height;
      this.xCenter = Math.floor(this.left + w / 2 + padding.left);
      this.yCenter = Math.floor(this.top + h / 2 + padding.top);
      this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {
      const _this$getMinMax4 = this.getMinMax(false),
        min = _this$getMinMax4.min,
        max = _this$getMinMax4.max;
      this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(min) && !isNaN(min) ? min : 0;
      this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(max) && !isNaN(max) ? max : 0;
      this.handleTickRangeOptions();
    }
  }, {
    key: "computeTickLimit",
    value: function computeTickLimit() {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
  }, {
    key: "generateTickLabels",
    value: function generateTickLabels(ticks) {
      var _this39 = this;
      LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
      this._pointLabels = this.getLabels().map(function (value, index) {
        const label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(_this39.options.pointLabels.callback, [value, index], _this39);
        return label || label === 0 ? label : '';
      }).filter(function (v, i) {
        return _this39.chart.getDataVisibility(i);
      });
    }
  }, {
    key: "fit",
    value: function fit() {
      const opts = this.options;
      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(this);
      } else {
        this.setCenterPoint(0, 0, 0, 0);
      }
    }
  }, {
    key: "setCenterPoint",
    value: function setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
      this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
      this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
      this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
  }, {
    key: "getIndexAngle",
    value: function getIndexAngle(index) {
      const angleMultiplier = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["T"] / (this._pointLabels.length || 1);
      const startAngle = this.options.startAngle || 0;
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ay"])(index * angleMultiplier + Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(startAngle));
    }
  }, {
    key: "getDistanceFromCenterForValue",
    value: function getDistanceFromCenterForValue(value) {
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(value)) {
        return NaN;
      }
      const scalingFactor = this.drawingArea / (this.max - this.min);
      if (this.options.reverse) {
        return (this.max - value) * scalingFactor;
      }
      return (value - this.min) * scalingFactor;
    }
  }, {
    key: "getValueForDistanceFromCenter",
    value: function getValueForDistanceFromCenter(distance) {
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(distance)) {
        return NaN;
      }
      const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
  }, {
    key: "getPointLabelContext",
    value: function getPointLabelContext(index) {
      const pointLabels = this._pointLabels || [];
      if (index >= 0 && index < pointLabels.length) {
        const pointLabel = pointLabels[index];
        return createPointLabelContext(this.getContext(), index, pointLabel);
      }
    }
  }, {
    key: "getPointPosition",
    value: function getPointPosition(index, distanceFromCenter) {
      let additionalAngle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      const angle = this.getIndexAngle(index) - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["H"] + additionalAngle;
      return {
        x: Math.cos(angle) * distanceFromCenter + this.xCenter,
        y: Math.sin(angle) * distanceFromCenter + this.yCenter,
        angle
      };
    }
  }, {
    key: "getPointPositionForValue",
    value: function getPointPositionForValue(index, value) {
      return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
  }, {
    key: "getBasePosition",
    value: function getBasePosition(index) {
      return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
  }, {
    key: "getPointLabelPosition",
    value: function getPointLabelPosition(index) {
      const _this$_pointLabelItem = this._pointLabelItems[index],
        left = _this$_pointLabelItem.left,
        top = _this$_pointLabelItem.top,
        right = _this$_pointLabelItem.right,
        bottom = _this$_pointLabelItem.bottom;
      return {
        left,
        top,
        right,
        bottom
      };
    }
  }, {
    key: "drawBackground",
    value: function drawBackground() {
      const _this$options16 = this.options,
        backgroundColor = _this$options16.backgroundColor,
        circular = _this$options16.grid.circular;
      if (backgroundColor) {
        const ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
        ctx.closePath();
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
      }
    }
  }, {
    key: "drawGrid",
    value: function drawGrid() {
      var _this40 = this;
      const ctx = this.ctx;
      const opts = this.options;
      const angleLines = opts.angleLines,
        grid = opts.grid,
        border = opts.border;
      const labelCount = this._pointLabels.length;
      let i, offset, position;
      if (opts.pointLabels.display) {
        drawPointLabels(this, labelCount);
      }
      if (grid.display) {
        this.ticks.forEach(function (tick, index) {
          if (index !== 0) {
            offset = _this40.getDistanceFromCenterForValue(tick.value);
            const context = _this40.getContext(index);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            drawRadiusLine(_this40, optsAtIndex, offset, labelCount, optsAtIndexBorder);
          }
        });
      }
      if (angleLines.display) {
        ctx.save();
        for (i = labelCount - 1; i >= 0; i--) {
          const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
          const color = optsAtIndex.color,
            lineWidth = optsAtIndex.lineWidth;
          if (!lineWidth || !color) {
            continue;
          }
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = color;
          ctx.setLineDash(optsAtIndex.borderDash);
          ctx.lineDashOffset = optsAtIndex.borderDashOffset;
          offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
          position = this.getPointPosition(i, offset);
          ctx.beginPath();
          ctx.moveTo(this.xCenter, this.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
  }, {
    key: "drawBorder",
    value: function drawBorder() {}
  }, {
    key: "drawLabels",
    value: function drawLabels() {
      var _this41 = this;
      const ctx = this.ctx;
      const opts = this.options;
      const tickOpts = opts.ticks;
      if (!tickOpts.display) {
        return;
      }
      const startAngle = this.getIndexAngle(0);
      let offset, width;
      ctx.save();
      ctx.translate(this.xCenter, this.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      this.ticks.forEach(function (tick, index) {
        if (index === 0 && !opts.reverse) {
          return;
        }
        const optsAtIndex = tickOpts.setContext(_this41.getContext(index));
        const tickFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["a0"])(optsAtIndex.font);
        offset = _this41.getDistanceFromCenterForValue(_this41.ticks[index].value);
        if (optsAtIndex.showLabelBackdrop) {
          ctx.font = tickFont.string;
          width = ctx.measureText(tick.label).width;
          ctx.fillStyle = optsAtIndex.backdropColor;
          const padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["E"])(optsAtIndex.backdropPadding);
          ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
        }
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Z"])(ctx, tick.label, 0, -offset, tickFont, {
          color: optsAtIndex.color
        });
      });
      ctx.restore();
    }
  }, {
    key: "drawTitle",
    value: function drawTitle() {}
  }]);
  return RadialLinearScale;
}(LinearScaleBase);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(RadialLinearScale, "id", 'radialLinear');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(RadialLinearScale, "defaults", {
  display: true,
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  grid: {
    circular: false
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: true,
    callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aL"].formatters.numeric
  },
  pointLabels: {
    backdropColor: undefined,
    backdropPadding: 2,
    display: true,
    font: {
      size: 10
    },
    callback(label) {
      return label;
    },
    padding: 5,
    centerPointLabels: false
  }
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(RadialLinearScale, "defaultRoutes", {
  'angleLines.color': 'borderColor',
  'pointLabels.color': 'color',
  'ticks.color': 'color'
});
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(RadialLinearScale, "descriptors", {
  angleLines: {
    _fallback: 'grid'
  }
});
const INTERVALS = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1000
  },
  second: {
    common: true,
    size: 1000,
    steps: 60
  },
  minute: {
    common: true,
    size: 60000,
    steps: 60
  },
  hour: {
    common: true,
    size: 3600000,
    steps: 24
  },
  day: {
    common: true,
    size: 86400000,
    steps: 30
  },
  week: {
    common: false,
    size: 604800000,
    steps: 4
  },
  month: {
    common: true,
    size: 2.628e9,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7.884e9,
    steps: 4
  },
  year: {
    common: true,
    size: 3.154e10
  }
};
const UNITS = /* #__PURE__ */Object.keys(INTERVALS);
function sorter(a, b) {
  return a - b;
}
function _parse(scale, input) {
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["k"])(input)) {
    return null;
  }
  const adapter = scale._adapter;
  const _scale$_parseOpts = scale._parseOpts,
    parser = _scale$_parseOpts.parser,
    round = _scale$_parseOpts.round,
    isoWeekday = _scale$_parseOpts.isoWeekday;
  let value = input;
  if (typeof parser === 'function') {
    value = parser(value);
  }
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(value)) {
    value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
  }
  if (value === null) {
    return null;
  }
  if (round) {
    value = round === 'week' && (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["x"])(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
  }
  return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  const ilen = UNITS.length;
  for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    const interval = INTERVALS[UNITS[i]];
    const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }
  return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    const unit = UNITS[i];
    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }
  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
  for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
function addTick(ticks, time, timestamps) {
  if (!timestamps) {
    ticks[time] = true;
  } else if (timestamps.length) {
    const _lookup2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aP"])(timestamps, time),
      lo = _lookup2.lo,
      hi = _lookup2.hi;
    const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
    ticks[timestamp] = true;
  }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
  const adapter = scale._adapter;
  const first = +adapter.startOf(ticks[0].value, majorUnit);
  const last = ticks[ticks.length - 1].value;
  let major, index;
  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];
    if (index >= 0) {
      ticks[index].major = true;
    }
  }
  return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
  const ticks = [];
  const map = {};
  const ilen = values.length;
  let i, value;
  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value,
      major: false
    });
  }
  return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
let TimeScale = /*#__PURE__*/function (_Scale4) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(TimeScale, _Scale4);
  var _super24 = _createSuper(TimeScale);
  function TimeScale(props) {
    var _this42;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, TimeScale);
    _this42 = _super24.call(this, props);
    _this42._cache = {
      data: [],
      labels: [],
      all: []
    };
    _this42._unit = 'day';
    _this42._majorUnit = undefined;
    _this42._offsets = {};
    _this42._normalized = false;
    _this42._parseOpts = undefined;
    return _this42;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(TimeScale, [{
    key: "init",
    value: function init(scaleOpts) {
      let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const time = scaleOpts.time || (scaleOpts.time = {});
      const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
      adapter.init(opts);
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["ab"])(time.displayFormats, adapter.formats());
      this._parseOpts = {
        parser: time.parser,
        round: time.round,
        isoWeekday: time.isoWeekday
      };
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TimeScale.prototype), "init", this).call(this, scaleOpts);
      this._normalized = opts.normalized;
    }
  }, {
    key: "parse",
    value: function parse(raw, index) {
      if (raw === undefined) {
        return null;
      }
      return _parse(this, raw);
    }
  }, {
    key: "beforeLayout",
    value: function beforeLayout() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TimeScale.prototype), "beforeLayout", this).call(this);
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
    }
  }, {
    key: "determineDataLimits",
    value: function determineDataLimits() {
      const options = this.options;
      const adapter = this._adapter;
      const unit = options.time.unit || 'day';
      let _this$getUserBounds5 = this.getUserBounds(),
        min = _this$getUserBounds5.min,
        max = _this$getUserBounds5.max,
        minDefined = _this$getUserBounds5.minDefined,
        maxDefined = _this$getUserBounds5.maxDefined;
      function _applyBounds(bounds) {
        if (!minDefined && !isNaN(bounds.min)) {
          min = Math.min(min, bounds.min);
        }
        if (!maxDefined && !isNaN(bounds.max)) {
          max = Math.max(max, bounds.max);
        }
      }
      if (!minDefined || !maxDefined) {
        _applyBounds(this._getLabelBounds());
        if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
          _applyBounds(this.getMinMax(false));
        }
      }
      min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
      max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["g"])(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
      this.min = Math.min(min, max - 1);
      this.max = Math.max(min + 1, max);
    }
  }, {
    key: "_getLabelBounds",
    value: function _getLabelBounds() {
      const arr = this.getLabelTimestamps();
      let min = Number.POSITIVE_INFINITY;
      let max = Number.NEGATIVE_INFINITY;
      if (arr.length) {
        min = arr[0];
        max = arr[arr.length - 1];
      }
      return {
        min,
        max
      };
    }
  }, {
    key: "buildTicks",
    value: function buildTicks() {
      const options = this.options;
      const timeOpts = options.time;
      const tickOpts = options.ticks;
      const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
      if (options.bounds === 'ticks' && timestamps.length) {
        this.min = this._userMin || timestamps[0];
        this.max = this._userMax || timestamps[timestamps.length - 1];
      }
      const min = this.min;
      const max = this.max;
      const ticks = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["aO"])(timestamps, min, max);
      this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
      this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : determineMajorUnit(this._unit);
      this.initOffsets(timestamps);
      if (options.reverse) {
        ticks.reverse();
      }
      return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
  }, {
    key: "afterAutoSkip",
    value: function afterAutoSkip() {
      if (this.options.offsetAfterAutoskip) {
        this.initOffsets(this.ticks.map(function (tick) {
          return +tick.value;
        }));
      }
    }
  }, {
    key: "initOffsets",
    value: function initOffsets() {
      let timestamps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      let start = 0;
      let end = 0;
      let first, last;
      if (this.options.offset && timestamps.length) {
        first = this.getDecimalForValue(timestamps[0]);
        if (timestamps.length === 1) {
          start = 1 - first;
        } else {
          start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
        }
        last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
        if (timestamps.length === 1) {
          end = last;
        } else {
          end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
      }
      const limit = timestamps.length < 3 ? 0.5 : 0.25;
      start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(start, 0, limit);
      end = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["S"])(end, 0, limit);
      this._offsets = {
        start,
        end,
        factor: 1 / (start + 1 + end)
      };
    }
  }, {
    key: "_generate",
    value: function _generate() {
      const adapter = this._adapter;
      const min = this.min;
      const max = this.max;
      const options = this.options;
      const timeOpts = options.time;
      const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
      const stepSize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["v"])(options.ticks.stepSize, 1);
      const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
      const hasWeekday = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["x"])(weekday) || weekday === true;
      const ticks = {};
      let first = min;
      let time, count;
      if (hasWeekday) {
        first = +adapter.startOf(first, 'isoWeek', weekday);
      }
      first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
      if (adapter.diff(max, min, minor) > 100000 * stepSize) {
        throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
      }
      const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
      for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
        addTick(ticks, time, timestamps);
      }
      if (time === max || options.bounds === 'ticks' || count === 1) {
        addTick(ticks, time, timestamps);
      }
      return Object.keys(ticks).sort(function (a, b) {
        return a - b;
      }).map(function (x) {
        return +x;
      });
    }
  }, {
    key: "getLabelForValue",
    value: function getLabelForValue(value) {
      const adapter = this._adapter;
      const timeOpts = this.options.time;
      if (timeOpts.tooltipFormat) {
        return adapter.format(value, timeOpts.tooltipFormat);
      }
      return adapter.format(value, timeOpts.displayFormats.datetime);
    }
  }, {
    key: "_tickFormatFunction",
    value: function _tickFormatFunction(time, index, ticks, format) {
      const options = this.options;
      const formatter = options.ticks.callback;
      if (formatter) {
        return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["Q"])(formatter, [time, index, ticks], this);
      }
      const formats = options.time.displayFormats;
      const unit = this._unit;
      const majorUnit = this._majorUnit;
      const minorFormat = unit && formats[unit];
      const majorFormat = majorUnit && formats[majorUnit];
      const tick = ticks[index];
      const major = majorUnit && majorFormat && tick && tick.major;
      return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
  }, {
    key: "generateTickLabels",
    value: function generateTickLabels(ticks) {
      let i, ilen, tick;
      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        tick.label = this._tickFormatFunction(tick.value, i, ticks);
      }
    }
  }, {
    key: "getDecimalForValue",
    value: function getDecimalForValue(value) {
      return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
  }, {
    key: "getPixelForValue",
    value: function getPixelForValue(value) {
      const offsets = this._offsets;
      const pos = this.getDecimalForValue(value);
      return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      const offsets = this._offsets;
      const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return this.min + pos * (this.max - this.min);
    }
  }, {
    key: "_getLabelSize",
    value: function _getLabelSize(label) {
      const ticksOpts = this.options.ticks;
      const tickLabelWidth = this.ctx.measureText(label).width;
      const angle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["t"])(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
      const cosRotation = Math.cos(angle);
      const sinRotation = Math.sin(angle);
      const tickFontSize = this._resolveTickFontOptions(0).size;
      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
      };
    }
  }, {
    key: "_getLabelCapacity",
    value: function _getLabelCapacity(exampleTime) {
      const timeOpts = this.options.time;
      const displayFormats = timeOpts.displayFormats;
      const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
      const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
      const size = this._getLabelSize(exampleLabel);
      const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
      return capacity > 0 ? capacity : 1;
    }
  }, {
    key: "getDataTimestamps",
    value: function getDataTimestamps() {
      let timestamps = this._cache.data || [];
      let i, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const metas = this.getMatchingVisibleMetas();
      if (this._normalized && metas.length) {
        return this._cache.data = metas[0].controller.getAllParsedValues(this);
      }
      for (i = 0, ilen = metas.length; i < ilen; ++i) {
        timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
      }
      return this._cache.data = this.normalize(timestamps);
    }
  }, {
    key: "getLabelTimestamps",
    value: function getLabelTimestamps() {
      const timestamps = this._cache.labels || [];
      let i, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const labels = this.getLabels();
      for (i = 0, ilen = labels.length; i < ilen; ++i) {
        timestamps.push(_parse(this, labels[i]));
      }
      return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
  }, {
    key: "normalize",
    value: function normalize(values) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["_"])(values.sort(sorter));
    }
  }]);
  return TimeScale;
}(Scale);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(TimeScale, "id", 'time');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(TimeScale, "defaults", {
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    source: 'auto',
    callback: false,
    major: {
      enabled: false
    }
  }
});
function interpolate(table, val, reverse) {
  let lo = 0;
  let hi = table.length - 1;
  let prevSource, nextSource, prevTarget, nextTarget;
  if (reverse) {
    if (val >= table[lo].pos && val <= table[hi].pos) {
      var _lookupByKey2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["B"])(table, 'pos', val);
      lo = _lookupByKey2.lo;
      hi = _lookupByKey2.hi;
    }
    var _table$lo = table[lo];
    prevSource = _table$lo.pos;
    prevTarget = _table$lo.time;
    var _table$hi = table[hi];
    nextSource = _table$hi.pos;
    nextTarget = _table$hi.time;
  } else {
    if (val >= table[lo].time && val <= table[hi].time) {
      var _lookupByKey3 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_10__["B"])(table, 'time', val);
      lo = _lookupByKey3.lo;
      hi = _lookupByKey3.hi;
    }
    var _table$lo2 = table[lo];
    prevSource = _table$lo2.time;
    prevTarget = _table$lo2.pos;
    var _table$hi2 = table[hi];
    nextSource = _table$hi2.time;
    nextTarget = _table$hi2.pos;
  }
  const span = nextSource - prevSource;
  return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
let TimeSeriesScale = /*#__PURE__*/function (_TimeScale) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(TimeSeriesScale, _TimeScale);
  var _super25 = _createSuper(TimeSeriesScale);
  function TimeSeriesScale(props) {
    var _this43;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, TimeSeriesScale);
    _this43 = _super25.call(this, props);
    _this43._table = [];
    _this43._minPos = undefined;
    _this43._tableRange = undefined;
    return _this43;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(TimeSeriesScale, [{
    key: "initOffsets",
    value: function initOffsets() {
      const timestamps = this._getTimestampsForTable();
      const table = this._table = this.buildLookupTable(timestamps);
      this._minPos = interpolate(table, this.min);
      this._tableRange = interpolate(table, this.max) - this._minPos;
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TimeSeriesScale.prototype), "initOffsets", this).call(this, timestamps);
    }
  }, {
    key: "buildLookupTable",
    value: function buildLookupTable(timestamps) {
      const min = this.min,
        max = this.max;
      const items = [];
      const table = [];
      let i, ilen, prev, curr, next;
      for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
        curr = timestamps[i];
        if (curr >= min && curr <= max) {
          items.push(curr);
        }
      }
      if (items.length < 2) {
        return [{
          time: min,
          pos: 0
        }, {
          time: max,
          pos: 1
        }];
      }
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        next = items[i + 1];
        prev = items[i - 1];
        curr = items[i];
        if (Math.round((next + prev) / 2) !== curr) {
          table.push({
            time: curr,
            pos: i / (ilen - 1)
          });
        }
      }
      return table;
    }
  }, {
    key: "_getTimestampsForTable",
    value: function _getTimestampsForTable() {
      let timestamps = this._cache.all || [];
      if (timestamps.length) {
        return timestamps;
      }
      const data = this.getDataTimestamps();
      const label = this.getLabelTimestamps();
      if (data.length && label.length) {
        timestamps = this.normalize(data.concat(label));
      } else {
        timestamps = data.length ? data : label;
      }
      timestamps = this._cache.all = timestamps;
      return timestamps;
    }
  }, {
    key: "getDecimalForValue",
    value: function getDecimalForValue(value) {
      return (interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
  }, {
    key: "getValueForPixel",
    value: function getValueForPixel(pixel) {
      const offsets = this._offsets;
      const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
  }]);
  return TimeSeriesScale;
}(TimeScale);
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(TimeSeriesScale, "id", 'timeseries');
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(TimeSeriesScale, "defaults", TimeScale.defaults);
var TimeSeriesScale$1 = TimeSeriesScale;
var scales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CategoryScale: CategoryScale,
  LinearScale: LinearScale,
  LogarithmicScale: LogarithmicScale,
  RadialLinearScale: RadialLinearScale,
  TimeScale: TimeScale,
  TimeSeriesScale: TimeSeriesScale$1
});
const registerables = [controllers, elements, plugins, scales];


/***/ }),

/***/ "./node_modules/chart.js/dist/chunks/helpers.segment.js":
/*!**************************************************************!*\
  !*** ./node_modules/chart.js/dist/chunks/helpers.segment.js ***!
  \**************************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a$, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, a_, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b, b0, b1, b2, b3, b4, b5, b6, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return unclipArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _rlookupByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return _lookupByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return _isPointInArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return getAngleFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return toPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return getMaximumSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return HALF_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return _getParentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return readUsedSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return supportsEventListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return throttled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return _isDomSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return _factorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return finiteOrDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return _addGrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _limitValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return toDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return _measureText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return _int16Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return _alignPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return clipArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return renderText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _arrayUnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a$", function() { return fontString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return toFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return _toLeftRightCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return _alignStartEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return overrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return _capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return descriptors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a8", function() { return _attachContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a9", function() { return _createResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aA", function() { return overrideTextDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aB", function() { return _textX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aC", function() { return restoreTextDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aD", function() { return drawPointLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aE", function() { return distanceBetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aF", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aG", function() { return _setMinAndMaxByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aH", function() { return niceNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aI", function() { return almostWhole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aJ", function() { return almostEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aK", function() { return _decimalPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aL", function() { return Ticks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aM", function() { return log10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aN", function() { return _longestText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aO", function() { return _filterBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aP", function() { return _lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aQ", function() { return isPatternOrGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aR", function() { return getHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aS", function() { return clone$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aT", function() { return _merger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aU", function() { return _mergerIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aV", function() { return _deprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aW", function() { return _splitKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aX", function() { return toFontString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aY", function() { return splineCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aZ", function() { return splineCurveMonotone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a_", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aa", function() { return _descriptors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return mergeIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ad", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ae", function() { return retinaScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "af", function() { return clearCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ag", function() { return setsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ah", function() { return _elementsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ai", function() { return _isClickEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aj", function() { return _isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ak", function() { return _readValueToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "al", function() { return _updateBezierControlPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "am", function() { return _computeSegments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "an", function() { return _boundSegments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ao", function() { return _steppedInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return _bezierInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aq", function() { return _pointInLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ar", function() { return _steppedLineTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as", function() { return _bezierCurveTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "at", function() { return drawPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "au", function() { return addRoundedRectPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "av", function() { return toTRBL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aw", function() { return toTRBLCorners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ax", function() { return _boundSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ay", function() { return _normalizeAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "az", function() { return getRtlAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b0", function() { return toLineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b1", function() { return PITAU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b2", function() { return INFINITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b3", function() { return RAD_PER_DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b4", function() { return QUARTER_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b5", function() { return TWO_THIRDS_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b6", function() { return _angleDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return effects$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return resolveObjectKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isNumberFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return defined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return createContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isNullOrUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return listenArrayEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return toDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _angleBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _getStartAndCountOfVisiblePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return requestAnimFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return toRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return unlistenArrayEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueOrDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return _scaleRangesChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return _parseObjectDataRadialScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return getRelativePosition; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*!
 * Chart.js v4.0.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
/**
 * @namespace Chart.helpers
 */ /**
    * An empty function that can be used, for example, for optional callback.
    */
function noop() {
  /* noop */}
/**
 * Returns a unique id, sequentially generated from a global variable.
 */
const uid = function () {
  let id = 0;
  return function () {
    return id++;
  };
}();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
function isNullOrUndef(value) {
  return value === null || typeof value === 'undefined';
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */
function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }
  const type = Object.prototype.toString.call(value);
  if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') {
    return true;
  }
  return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */
function isNumberFinite(value) {
  return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */
function finiteOrDefault(value, defaultValue) {
  return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */
function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}
const toPercentage = function (value, dimension) {
  return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : +value / dimension;
};
const toDimension = function (value, dimension) {
  return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
};
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */
function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}
function each(loopable, fn, thisArg, reverse) {
  let i, len, keys;
  if (isArray(loopable)) {
    len = loopable.length;
    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;
    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */
function _elementsEqual(a0, a1) {
  let i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }
  return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */
function clone$1(source) {
  if (isArray(source)) {
    return source.map(clone$1);
  }
  if (isObject(source)) {
    const target = Object.create(null);
    const keys = Object.keys(source);
    const klen = keys.length;
    let k = 0;
    for (; k < klen; ++k) {
      target[keys[k]] = clone$1(source[keys[k]]);
    }
    return target;
  }
  return source;
}
function isValidKey(key) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */
function _merger(key, target, source, options) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    merge(tval, sval, options);
  } else {
    target[key] = clone$1(sval);
  }
}
function merge(target, source, options) {
  const sources = isArray(source) ? source : [source];
  const ilen = sources.length;
  if (!isObject(target)) {
    return target;
  }
  options = options || {};
  const merger = options.merger || _merger;
  let current;
  for (let i = 0; i < ilen; ++i) {
    current = sources[i];
    if (!isObject(current)) {
      continue;
    }
    const keys = Object.keys(current);
    for (let k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, current, options);
    }
  }
  return target;
}
function mergeIf(target, source) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return merge(target, source, {
    merger: _mergerIf
  });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */
function _mergerIf(key, target, source) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone$1(sval);
  }
}
/**
 * @private
 */
function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
  }
}
// resolveObjectKey resolver cache
const keyResolvers = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  '': function (v) {
    return v;
  },
  // default resolvers
  x: function (o) {
    return o.x;
  },
  y: function (o) {
    return o.y;
  }
};
/**
 * @private
 */
function _splitKey(key) {
  const parts = key.split('.');
  const keys = [];
  let tmp = '';
  var _iterator = _createForOfIteratorHelper(parts),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const part = _step.value;
      tmp += part;
      if (tmp.endsWith('\\')) {
        tmp = tmp.slice(0, -1) + '.';
      } else {
        keys.push(tmp);
        tmp = '';
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return keys;
}
function _getKeyResolver(key) {
  const keys = _splitKey(key);
  return function (obj) {
    var _iterator2 = _createForOfIteratorHelper(keys),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        const k = _step2.value;
        if (k === '') {
          break;
        }
        obj = obj && obj[k];
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return obj;
  };
}
function resolveObjectKey(obj, key) {
  const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
  return resolver(obj);
}
/**
 * @private
 */
function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = function (value) {
  return typeof value !== 'undefined';
};
const isFunction = function (value) {
  return typeof value === 'function';
};
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const setsEqual = function (a, b) {
  if (a.size !== b.size) {
    return false;
  }
  var _iterator3 = _createForOfIteratorHelper(a),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      const item = _step3.value;
      if (!b.has(item)) {
        return false;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return true;
};
/**
 * @param e - The event
 * @private
 */
function _isClickEvent(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}

/**
 * @alias Chart.helpers.math
 * @namespace
 */
const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */
function niceNum(range) {
  const roundedRange = Math.round(range);
  range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
  const niceRange = Math.pow(10, Math.floor(log10(range)));
  const fraction = range / niceRange;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */
function _factorize(value) {
  const result = [];
  const sqrt = Math.sqrt(value);
  let i;
  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }
  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }
  result.sort(function (a, b) {
    return a - b;
  }).pop();
  return result;
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
  const rounded = Math.round(x);
  return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */
function _setMinAndMaxByKey(array, target, property) {
  let i, ilen, value;
  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];
    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}
function toRadians(degrees) {
  return degrees * (PI / 180);
}
function toDegrees(radians) {
  return radians * (180 / PI);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */
function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }
  let e = 1;
  let p = 0;
  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }
  return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
  const distanceFromXCenter = anglePoint.x - centrePoint.x;
  const distanceFromYCenter = anglePoint.y - centrePoint.y;
  const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  if (angle < -0.5 * PI) {
    angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
  }

  return {
    angle,
    distance: radialDistanceFromCenter
  };
}
function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */
function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */
function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */
function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
  const a = _normalizeAngle(angle);
  const s = _normalizeAngle(start);
  const e = _normalizeAngle(end);
  const angleToStart = _normalizeAngle(s - a);
  const angleToEnd = _normalizeAngle(e - a);
  const startToAngle = _normalizeAngle(a - s);
  const endToAngle = _normalizeAngle(a - e);
  return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */
function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */
function _int16Range(value) {
  return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */
function _isBetween(value, start, end) {
  let epsilon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e-6;
  return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
  cmp = cmp || function (index) {
    return table[index] < value;
  };
  let hi = table.length - 1;
  let lo = 0;
  let mid;
  while (hi - lo > 1) {
    mid = lo + hi >> 1;
    if (cmp(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {
    lo,
    hi
  };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */
const _lookupByKey = function (table, key, value, last) {
  return _lookup(table, value, last ? function (index) {
    const ti = table[index][key];
    return ti < value || ti === value && table[index + 1][key] === value;
  } : function (index) {
    return table[index][key] < value;
  });
};
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */
const _rlookupByKey = function (table, key, value) {
  return _lookup(table, value, function (index) {
    return table[index][key] >= value;
  });
};
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */
function _filterBetween(values, min, max) {
  let start = 0;
  let end = values.length;
  while (start < end && values[start] < min) {
    start++;
  }
  while (end > start && values[end - 1] > max) {
    end--;
  }
  return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);
    return;
  }
  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach(function (key) {
    const method = '_onData' + _capitalize(key);
    const base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        const res = base.apply(this, args);
        array._chartjs.listeners.forEach(function (object) {
          if (typeof object[method] === 'function') {
            object[method].apply(object, args);
          }
        });
        return res;
      }
    });
  });
}
function unlistenArrayEvents(array, listener) {
  const stub = array._chartjs;
  if (!stub) {
    return;
  }
  const listeners = stub.listeners;
  const index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  if (listeners.length > 0) {
    return;
  }
  arrayEvents.forEach(function (key) {
    delete array[key];
  });
  delete array._chartjs;
}
/**
 * @param items
 */
function _arrayUnique(items) {
  const set = new Set();
  let i, ilen;
  for (i = 0, ilen = items.length; i < ilen; ++i) {
    set.add(items[i]);
  }
  if (set.size === ilen) {
    return items;
  }
  return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
  return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
/**
* Request animation polyfill
*/
const requestAnimFrame = function () {
  if (typeof window === 'undefined') {
    return function (callback) {
      return callback();
    };
  }
  return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */
function throttled(fn, thisArg) {
  let ticking = false;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (!ticking) {
      ticking = true;
      requestAnimFrame.call(window, function () {
        ticking = false;
        fn.apply(thisArg, args);
      });
    }
  };
}
/**
 * Debounces calling `fn` for `delay` ms
 */
function debounce(fn, delay) {
  let timeout;
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay, args);
    } else {
      fn.apply(this, args);
    }
    return delay;
  };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */
const _toLeftRightCenter = function (align) {
  return align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
};
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */
const _alignStartEnd = function (align, start, end) {
  return align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
};
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */
const _textX = function (align, left, right, rtl) {
  const check = rtl ? 'left' : 'right';
  return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */
function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  const pointCount = points.length;
  let start = 0;
  let count = pointCount;
  if (meta._sorted) {
    const iScale = meta.iScale,
      _parsed = meta._parsed;
    const axis = iScale.axis;
    const _iScale$getUserBounds = iScale.getUserBounds(),
      min = _iScale$getUserBounds.min,
      max = _iScale$getUserBounds.max,
      minDefined = _iScale$getUserBounds.minDefined,
      maxDefined = _iScale$getUserBounds.maxDefined;
    if (minDefined) {
      start = _limitValue(Math.min(
      // @ts-expect-error Need to type _parsed
      _lookupByKey(_parsed, iScale.axis, min).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(Math.max(
      // @ts-expect-error Need to type _parsed
      _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }
  return {
    start,
    count
  };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */
function _scaleRangesChanged(meta) {
  const xScale = meta.xScale,
    yScale = meta.yScale,
    _scaleRanges = meta._scaleRanges;
  const newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };
  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }
  const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}
const atEdge = function (t) {
  return t === 0 || t === 1;
};
const elasticIn = function (t, s, p) {
  return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
};
const elasticOut = function (t, s, p) {
  return Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
};
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */
const effects = {
  linear: function (t) {
    return t;
  },
  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return -t * (t - 2);
  },
  easeInOutQuad: function (t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
  },
  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return (t -= 1) * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
  },
  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return -((t -= 1) * t * t * t - 1);
  },
  easeInOutQuart: function (t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
  },
  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return (t -= 1) * t * t * t * t + 1;
  },
  easeInOutQuint: function (t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
  },
  easeInSine: function (t) {
    return -Math.cos(t * HALF_PI) + 1;
  },
  easeOutSine: function (t) {
    return Math.sin(t * HALF_PI);
  },
  easeInOutSine: function (t) {
    return -0.5 * (Math.cos(PI * t) - 1);
  },
  easeInExpo: function (t) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  },
  easeOutExpo: function (t) {
    return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
  },
  easeInOutExpo: function (t) {
    return atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2);
  },
  easeInCirc: function (t) {
    return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
  },
  easeOutCirc: function (t) {
    return Math.sqrt(1 - (t -= 1) * t);
  },
  easeInOutCirc: function (t) {
    return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  easeInElastic: function (t) {
    return atEdge(t) ? t : elasticIn(t, 0.075, 0.3);
  },
  easeOutElastic: function (t) {
    return atEdge(t) ? t : elasticOut(t, 0.075, 0.3);
  },
  easeInOutElastic(t) {
    const s = 0.1125;
    const p = 0.45;
    return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
  },
  easeInBack(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack(t) {
    const s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack(t) {
    let s = 1.70158;
    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    }
    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
  },
  easeInBounce: function (t) {
    return 1 - effects.easeOutBounce(1 - t);
  },
  easeOutBounce(t) {
    const m = 7.5625;
    const d = 2.75;
    if (t < 1 / d) {
      return m * t * t;
    }
    if (t < 2 / d) {
      return m * (t -= 1.5 / d) * t + 0.75;
    }
    if (t < 2.5 / d) {
      return m * (t -= 2.25 / d) * t + 0.9375;
    }
    return m * (t -= 2.625 / d) * t + 0.984375;
  },
  easeInOutBounce: function (t) {
    return t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
  }
};
var effects$1 = effects;

/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
function round(v) {
  return v + 0.5 | 0;
}
const lim = function (v, l, h) {
  return Math.max(Math.min(v, h), l);
};
function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}
function n2b(v) {
  return lim(round(v * 255), 0, 255);
}
function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
  return lim(round(v * 100), 0, 100);
}
const map$1 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
const hex = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()('0123456789ABCDEF');
const h1 = function (b) {
  return hex[b & 0xF];
};
const h2 = function (b) {
  return hex[(b & 0xF0) >> 4] + hex[b & 0xF];
};
const eq = function (b) {
  return (b & 0xF0) >> 4 === (b & 0xF);
};
const isShort = function (v) {
  return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
};
function hexParse(str) {
  var len = str.length;
  var ret;
  if (str[0] === '#') {
    if (len === 4 || len === 5) {
      ret = {
        r: 255 & map$1[str[1]] * 17,
        g: 255 & map$1[str[2]] * 17,
        b: 255 & map$1[str[3]] * 17,
        a: len === 5 ? map$1[str[4]] * 17 : 255
      };
    } else if (len === 7 || len === 9) {
      ret = {
        r: map$1[str[1]] << 4 | map$1[str[2]],
        g: map$1[str[3]] << 4 | map$1[str[4]],
        b: map$1[str[5]] << 4 | map$1[str[6]],
        a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
      };
    }
  }
  return ret;
}
const alpha = function (a, f) {
  return a < 255 ? f(a) : '';
};
function _hexString(v) {
  var f = isShort(v) ? h1 : h2;
  return v ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : undefined;
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = function (n) {
    let k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
  const f = function (n) {
    let k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
  const rgb = hsl2rgbn(h, 1, 0.5);
  let i;
  if (w + b > 1) {
    i = 1 / (w + b);
    w *= i;
    b *= i;
  }
  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b;
    rgb[i] += w;
  }
  return rgb;
}
function hueValue(r, g, b, d, max) {
  if (r === max) {
    return (g - b) / d + (g < b ? 6 : 0);
  }
  if (g === max) {
    return (b - r) / d + 2;
  }
  return (r - g) / d + 4;
}
function rgb2hsl(v) {
  const range = 255;
  const r = v.r / range;
  const g = v.g / range;
  const b = v.b / range;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h, s, d;
  if (max !== min) {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = hueValue(r, g, b, d, max);
    h = h * 60 + 0.5;
  }
  return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
  return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
  return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
  return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
  return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
  return (h % 360 + 360) % 360;
}
function hueParse(str) {
  const m = HUE_RE.exec(str);
  let a = 255;
  let v;
  if (!m) {
    return;
  }
  if (m[5] !== v) {
    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
  }
  const h = hue(+m[2]);
  const p1 = +m[3] / 100;
  const p2 = +m[4] / 100;
  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2);
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2);
  } else {
    v = hsl2rgb(h, p1, p2);
  }
  return {
    r: v[0],
    g: v[1],
    b: v[2],
    a: a
  };
}
function _rotate(v, deg) {
  var h = rgb2hsl(v);
  h[0] = hue(h[0] + deg);
  h = hsl2rgb(h);
  v.r = h[0];
  v.g = h[1];
  v.b = h[2];
}
function _hslString(v) {
  if (!v) {
    return;
  }
  const a = rgb2hsl(v);
  const h = a[0];
  const s = n2p(a[1]);
  const l = n2p(a[2]);
  return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const map = {
  x: 'dark',
  Z: 'light',
  Y: 're',
  X: 'blu',
  W: 'gr',
  V: 'medium',
  U: 'slate',
  A: 'ee',
  T: 'ol',
  S: 'or',
  B: 'ra',
  C: 'lateg',
  D: 'ights',
  R: 'in',
  Q: 'turquois',
  E: 'hi',
  P: 'ro',
  O: 'al',
  N: 'le',
  M: 'de',
  L: 'yello',
  F: 'en',
  K: 'ch',
  G: 'arks',
  H: 'ea',
  I: 'ightg',
  J: 'wh'
};
const names$1 = {
  OiceXe: 'f0f8ff',
  antiquewEte: 'faebd7',
  aqua: 'ffff',
  aquamarRe: '7fffd4',
  azuY: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '0',
  blanKedOmond: 'ffebcd',
  Xe: 'ff',
  XeviTet: '8a2be2',
  bPwn: 'a52a2a',
  burlywood: 'deb887',
  caMtXe: '5f9ea0',
  KartYuse: '7fff00',
  KocTate: 'd2691e',
  cSO: 'ff7f50',
  cSnflowerXe: '6495ed',
  cSnsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: 'ffff',
  xXe: '8b',
  xcyan: '8b8b',
  xgTMnPd: 'b8860b',
  xWay: 'a9a9a9',
  xgYF: '6400',
  xgYy: 'a9a9a9',
  xkhaki: 'bdb76b',
  xmagFta: '8b008b',
  xTivegYF: '556b2f',
  xSange: 'ff8c00',
  xScEd: '9932cc',
  xYd: '8b0000',
  xsOmon: 'e9967a',
  xsHgYF: '8fbc8f',
  xUXe: '483d8b',
  xUWay: '2f4f4f',
  xUgYy: '2f4f4f',
  xQe: 'ced1',
  xviTet: '9400d3',
  dAppRk: 'ff1493',
  dApskyXe: 'bfff',
  dimWay: '696969',
  dimgYy: '696969',
  dodgerXe: '1e90ff',
  fiYbrick: 'b22222',
  flSOwEte: 'fffaf0',
  foYstWAn: '228b22',
  fuKsia: 'ff00ff',
  gaRsbSo: 'dcdcdc',
  ghostwEte: 'f8f8ff',
  gTd: 'ffd700',
  gTMnPd: 'daa520',
  Way: '808080',
  gYF: '8000',
  gYFLw: 'adff2f',
  gYy: '808080',
  honeyMw: 'f0fff0',
  hotpRk: 'ff69b4',
  RdianYd: 'cd5c5c',
  Rdigo: '4b0082',
  ivSy: 'fffff0',
  khaki: 'f0e68c',
  lavFMr: 'e6e6fa',
  lavFMrXsh: 'fff0f5',
  lawngYF: '7cfc00',
  NmoncEffon: 'fffacd',
  ZXe: 'add8e6',
  ZcSO: 'f08080',
  Zcyan: 'e0ffff',
  ZgTMnPdLw: 'fafad2',
  ZWay: 'd3d3d3',
  ZgYF: '90ee90',
  ZgYy: 'd3d3d3',
  ZpRk: 'ffb6c1',
  ZsOmon: 'ffa07a',
  ZsHgYF: '20b2aa',
  ZskyXe: '87cefa',
  ZUWay: '778899',
  ZUgYy: '778899',
  ZstAlXe: 'b0c4de',
  ZLw: 'ffffe0',
  lime: 'ff00',
  limegYF: '32cd32',
  lRF: 'faf0e6',
  magFta: 'ff00ff',
  maPon: '800000',
  VaquamarRe: '66cdaa',
  VXe: 'cd',
  VScEd: 'ba55d3',
  VpurpN: '9370db',
  VsHgYF: '3cb371',
  VUXe: '7b68ee',
  VsprRggYF: 'fa9a',
  VQe: '48d1cc',
  VviTetYd: 'c71585',
  midnightXe: '191970',
  mRtcYam: 'f5fffa',
  mistyPse: 'ffe4e1',
  moccasR: 'ffe4b5',
  navajowEte: 'ffdead',
  navy: '80',
  Tdlace: 'fdf5e6',
  Tive: '808000',
  TivedBb: '6b8e23',
  Sange: 'ffa500',
  SangeYd: 'ff4500',
  ScEd: 'da70d6',
  pOegTMnPd: 'eee8aa',
  pOegYF: '98fb98',
  pOeQe: 'afeeee',
  pOeviTetYd: 'db7093',
  papayawEp: 'ffefd5',
  pHKpuff: 'ffdab9',
  peru: 'cd853f',
  pRk: 'ffc0cb',
  plum: 'dda0dd',
  powMrXe: 'b0e0e6',
  purpN: '800080',
  YbeccapurpN: '663399',
  Yd: 'ff0000',
  Psybrown: 'bc8f8f',
  PyOXe: '4169e1',
  saddNbPwn: '8b4513',
  sOmon: 'fa8072',
  sandybPwn: 'f4a460',
  sHgYF: '2e8b57',
  sHshell: 'fff5ee',
  siFna: 'a0522d',
  silver: 'c0c0c0',
  skyXe: '87ceeb',
  UXe: '6a5acd',
  UWay: '708090',
  UgYy: '708090',
  snow: 'fffafa',
  sprRggYF: 'ff7f',
  stAlXe: '4682b4',
  tan: 'd2b48c',
  teO: '8080',
  tEstN: 'd8bfd8',
  tomato: 'ff6347',
  Qe: '40e0d0',
  viTet: 'ee82ee',
  JHt: 'f5deb3',
  wEte: 'ffffff',
  wEtesmoke: 'f5f5f5',
  Lw: 'ffff00',
  LwgYF: '9acd32'
};
function unpack() {
  const unpacked = {};
  const keys = Object.keys(names$1);
  const tkeys = Object.keys(map);
  let i, j, k, ok, nk;
  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map[k]);
    }
    k = parseInt(names$1[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }
  return unpacked;
}
let names;
function nameParse(str) {
  if (!names) {
    names = unpack();
    names.transparent = [0, 0, 0, 0];
  }
  const a = names[str.toLowerCase()];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
  const m = RGB_RE.exec(str);
  let a = 255;
  let r, g, b;
  if (!m) {
    return;
  }
  if (m[7] !== r) {
    const v = +m[7];
    a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
  }
  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
  g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
  b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function _rgbString(v) {
  return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const to = function (v) {
  return v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
};
const from = function (v) {
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};
function _interpolate(rgb1, rgb2, t) {
  const r = from(b2n(rgb1.r));
  const g = from(b2n(rgb1.g));
  const b = from(b2n(rgb1.b));
  return {
    r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
    g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
    b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
    a: rgb1.a + t * (rgb2.a - rgb1.a)
  };
}
function modHSL(v, i, ratio) {
  if (v) {
    let tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}
function clone(v, proto) {
  return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
  var v = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {
        r: input[0],
        g: input[1],
        b: input[2],
        a: 255
      };
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    v.a = n2b(v.a);
  }
  return v;
}
function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}
let Color = /*#__PURE__*/function () {
  function Color(input) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Color);
    if (input instanceof Color) {
      return input;
    }
    const type = typeof input;
    let v;
    if (type === 'object') {
      v = fromObject(input);
    } else if (type === 'string') {
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }
    this._rgb = v;
    this._valid = !!v;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Color, [{
    key: "valid",
    get: function () {
      return this._valid;
    }
  }, {
    key: "rgb",
    get: function () {
      var v = clone(this._rgb);
      if (v) {
        v.a = b2n(v.a);
      }
      return v;
    },
    set: function (obj) {
      this._rgb = fromObject(obj);
    }
  }, {
    key: "rgbString",
    value: function rgbString() {
      return this._valid ? _rgbString(this._rgb) : undefined;
    }
  }, {
    key: "hexString",
    value: function hexString() {
      return this._valid ? _hexString(this._rgb) : undefined;
    }
  }, {
    key: "hslString",
    value: function hslString() {
      return this._valid ? _hslString(this._rgb) : undefined;
    }
  }, {
    key: "mix",
    value: function mix(color, weight) {
      if (color) {
        const c1 = this.rgb;
        const c2 = color.rgb;
        let w2;
        const p = weight === w2 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a = c1.a - c2.a;
        const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
        w2 = 1 - w1;
        c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
        c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
        c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
        c1.a = p * c1.a + (1 - p) * c2.a;
        this.rgb = c1;
      }
      return this;
    }
  }, {
    key: "interpolate",
    value: function interpolate(color, t) {
      if (color) {
        this._rgb = _interpolate(this._rgb, color._rgb, t);
      }
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Color(this.rgb);
    }
  }, {
    key: "alpha",
    value: function alpha(a) {
      this._rgb.a = n2b(a);
      return this;
    }
  }, {
    key: "clearer",
    value: function clearer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 - ratio;
      return this;
    }
  }, {
    key: "greyscale",
    value: function greyscale() {
      const rgb = this._rgb;
      const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
      rgb.r = rgb.g = rgb.b = val;
      return this;
    }
  }, {
    key: "opaquer",
    value: function opaquer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 + ratio;
      return this;
    }
  }, {
    key: "negate",
    value: function negate() {
      const v = this._rgb;
      v.r = 255 - v.r;
      v.g = 255 - v.g;
      v.b = 255 - v.b;
      return this;
    }
  }, {
    key: "lighten",
    value: function lighten(ratio) {
      modHSL(this._rgb, 2, ratio);
      return this;
    }
  }, {
    key: "darken",
    value: function darken(ratio) {
      modHSL(this._rgb, 2, -ratio);
      return this;
    }
  }, {
    key: "saturate",
    value: function saturate(ratio) {
      modHSL(this._rgb, 1, ratio);
      return this;
    }
  }, {
    key: "desaturate",
    value: function desaturate(ratio) {
      modHSL(this._rgb, 1, -ratio);
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(deg) {
      _rotate(this._rgb, deg);
      return this;
    }
  }]);
  return Color;
}();
function index_esm(input) {
  return new Color(input);
}
function isPatternOrGradient(value) {
  if (value && typeof value === 'object') {
    const type = value.toString();
    return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
  }
  return false;
}
function color(value) {
  return isPatternOrGradient(value) ? value : index_esm(value);
}
function getHoverColor(value) {
  return isPatternOrGradient(value) ? value : index_esm(value).saturate(0.5).darken(0.1).hexString();
}
const numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
const colors = ['color', 'borderColor', 'backgroundColor'];
function applyAnimationsDefaults(defaults) {
  defaults.set('animation', {
    delay: undefined,
    duration: 1000,
    easing: 'easeOutQuart',
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
  });
  defaults.describe('animation', {
    _fallback: false,
    _indexable: false,
    _scriptable: function (name) {
      return name !== 'onProgress' && name !== 'onComplete' && name !== 'fn';
    }
  });
  defaults.set('animations', {
    colors: {
      type: 'color',
      properties: colors
    },
    numbers: {
      type: 'number',
      properties: numbers
    }
  });
  defaults.describe('animations', {
    _fallback: 'animation'
  });
  defaults.set('transitions', {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: 'transparent'
        },
        visible: {
          type: 'boolean',
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: 'transparent'
        },
        visible: {
          type: 'boolean',
          easing: 'linear',
          fn: function (v) {
            return v | 0;
          }
        }
      }
    }
  });
}
function applyLayoutsDefaults(defaults) {
  defaults.set('layout', {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const intlCache = new Map();
function getNumberFormat(locale, options) {
  options = options || {};
  const cacheKey = locale + JSON.stringify(options);
  let formatter = intlCache.get(cacheKey);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    intlCache.set(cacheKey, formatter);
  }
  return formatter;
}
function formatNumber(num, locale, options) {
  return getNumberFormat(locale, options).format(num);
}
const formatters = {
  values(value) {
    return isArray(value) ? value : '' + value;
  },
  numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const locale = this.chart.options.locale;
    let notation;
    let delta = tickValue;
    if (ticks.length > 1) {
      const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }
      delta = calculateDelta(tickValue, ticks);
    }
    const logDelta = log10(Math.abs(delta));
    const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    const options = {
      notation,
      minimumFractionDigits: numDecimal,
      maximumFractionDigits: numDecimal
    };
    Object.assign(options, this.options.ticks.format);
    return formatNumber(tickValue, locale, options);
  },
  logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
    if ([1, 2, 3, 5, 10, 15].includes(remain) || index > 0.8 * ticks.length) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }
    return '';
  }
};
function calculateDelta(tickValue, ticks) {
  let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }
  return delta;
}
var Ticks = {
  formatters
};
function applyScaleDefaults(defaults) {
  defaults.set('scale', {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: 'ticks',
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: function (_ctx, options) {
        return options.lineWidth;
      },
      tickColor: function (_ctx, options) {
        return options.color;
      },
      offset: false
    },
    border: {
      display: true,
      dash: [],
      dashOffset: 0.0,
      width: 1
    },
    title: {
      display: false,
      text: '',
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ticks.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: false,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2
    }
  });
  defaults.route('scale.ticks', 'color', '', 'color');
  defaults.route('scale.grid', 'color', '', 'borderColor');
  defaults.route('scale.border', 'color', '', 'borderColor');
  defaults.route('scale.title', 'color', '', 'color');
  defaults.describe('scale', {
    _fallback: false,
    _scriptable: function (name) {
      return !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser';
    },
    _indexable: function (name) {
      return name !== 'borderDash' && name !== 'tickBorderDash' && name !== 'dash';
    }
  });
  defaults.describe('scales', {
    _fallback: 'scale'
  });
  defaults.describe('scale.ticks', {
    _scriptable: function (name) {
      return name !== 'backdropPadding' && name !== 'callback';
    },
    _indexable: function (name) {
      return name !== 'backdropPadding';
    }
  });
}
const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
  if (!key) {
    return node;
  }
  const keys = key.split('.');
  for (let i = 0, n = keys.length; i < n; ++i) {
    const k = keys[i];
    node = node[k] || (node[k] = Object.create(null));
  }
  return node;
}
function _set(root, scope, values) {
  if (typeof scope === 'string') {
    return merge(getScope$1(root, scope), values);
  }
  return merge(getScope$1(root, ''), scope);
}
let Defaults = /*#__PURE__*/function () {
  function Defaults(_descriptors, _appliers) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Defaults);
    this.animation = undefined;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.borderColor = 'rgba(0,0,0,0.1)';
    this.color = '#666';
    this.datasets = {};
    this.devicePixelRatio = function (context) {
      return context.chart.platform.getDevicePixelRatio();
    };
    this.elements = {};
    this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: 'normal',
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = function (ctx, options) {
      return getHoverColor(options.backgroundColor);
    };
    this.hoverBorderColor = function (ctx, options) {
      return getHoverColor(options.borderColor);
    };
    this.hoverColor = function (ctx, options) {
      return getHoverColor(options.color);
    };
    this.indexAxis = 'x';
    this.interaction = {
      mode: 'nearest',
      intersect: true,
      includeInvisible: false
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.drawActiveElementsOnTop = true;
    this.describe(_descriptors);
    this.apply(_appliers);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Defaults, [{
    key: "set",
    value: function set(scope, values) {
      return _set(this, scope, values);
    }
  }, {
    key: "get",
    value: function get(scope) {
      return getScope$1(this, scope);
    }
  }, {
    key: "describe",
    value: function describe(scope, values) {
      return _set(descriptors, scope, values);
    }
  }, {
    key: "override",
    value: function override(scope, values) {
      return _set(overrides, scope, values);
    }
  }, {
    key: "route",
    value: function route(scope, name, targetScope, targetName) {
      const scopeObject = getScope$1(this, scope);
      const targetScopeObject = getScope$1(this, targetScope);
      const privateName = '_' + name;
      Object.defineProperties(scopeObject, {
        [privateName]: {
          value: scopeObject[name],
          writable: true
        },
        [name]: {
          enumerable: true,
          get() {
            const local = this[privateName];
            const target = targetScopeObject[targetName];
            if (isObject(local)) {
              return Object.assign({}, target, local);
            }
            return valueOrDefault(local, target);
          },
          set(value) {
            this[privateName] = value;
          }
        }
      });
    }
  }, {
    key: "apply",
    value: function apply(appliers) {
      var _this = this;
      appliers.forEach(function (apply) {
        return apply(_this);
      });
    }
  }]);
  return Defaults;
}();
var defaults = /* #__PURE__ */new Defaults({
  _scriptable: function (name) {
    return !name.startsWith('on');
  },
  _indexable: function (name) {
    return name !== 'events';
  },
  hover: {
    _fallback: 'interaction'
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [applyAnimationsDefaults, applyLayoutsDefaults, applyScaleDefaults]);
function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }
  return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
function _measureText(ctx, data, gc, longest, string) {
  let textWidth = data[string];
  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }
  if (textWidth > longest) {
    longest = textWidth;
  }
  return longest;
}
function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  let data = cache.data = cache.data || {};
  let gc = cache.garbageCollect = cache.garbageCollect || [];
  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }
  ctx.save();
  ctx.font = font;
  let longest = 0;
  const ilen = arrayOfThings.length;
  let i, j, jlen, thing, nestedThing;
  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];
    if (thing !== undefined && thing !== null && isArray(thing) !== true) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];
        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }
  ctx.restore();
  const gcLen = gc.length / 2;
  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }
    gc.splice(0, gcLen);
  }
  return longest;
}
function _alignPixel(chart, pixel, width) {
  const devicePixelRatio = chart.currentDevicePixelRatio;
  const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function clearCanvas(canvas, ctx) {
  ctx = ctx || canvas.getContext('2d');
  ctx.save();
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
function drawPoint(ctx, options, x, y) {
  drawPointLegend(ctx, options, x, y, null);
}
function drawPointLegend(ctx, options, x, y, w) {
  let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
  const style = options.pointStyle;
  const rotation = options.rotation;
  const radius = options.radius;
  let rad = (rotation || 0) * RAD_PER_DEG;
  if (style && typeof style === 'object') {
    type = style.toString();
    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }
  if (isNaN(radius) || radius <= 0) {
    return;
  }
  ctx.beginPath();
  switch (style) {
    default:
      if (w) {
        ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
      } else {
        ctx.arc(x, y, radius, 0, TAU);
      }
      ctx.closePath();
      break;
    case 'triangle':
      width = w ? w / 2 : radius;
      ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      ctx.closePath();
      break;
    case 'rectRounded':
      cornerRadius = radius * 0.516;
      size = radius - cornerRadius;
      xOffset = Math.cos(rad + QUARTER_PI) * size;
      xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
      yOffset = Math.sin(rad + QUARTER_PI) * size;
      yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
      ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
      ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
      ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
      ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
      ctx.closePath();
      break;
    case 'rect':
      if (!rotation) {
        size = Math.SQRT1_2 * radius;
        width = w ? w / 2 : size;
        ctx.rect(x - width, y - size, 2 * width, 2 * size);
        break;
      }
      rad += QUARTER_PI;
    case 'rectRot':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      ctx.closePath();
      break;
    case 'crossRot':
      rad += QUARTER_PI;
    case 'cross':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      break;
    case 'star':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      rad += QUARTER_PI;
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      break;
    case 'line':
      xOffset = w ? w / 2 : Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      break;
    case 'dash':
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
      break;
  }
  ctx.fill();
  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}
function _isPointInArea(point, area, margin) {
  margin = margin || 0.5;
  return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}
function unclipArea(ctx) {
  ctx.restore();
}
function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  if (mode === 'middle') {
    const midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }
  ctx.lineTo(target.x, target.y);
}
function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function renderText(ctx, text, x, y, font) {
  let opts = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  const lines = isArray(text) ? text : [text];
  const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
  let i, line;
  ctx.save();
  ctx.font = font.string;
  setRenderOpts(ctx, opts);
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    if (opts.backdrop) {
      drawBackdrop(ctx, opts.backdrop);
    }
    if (stroke) {
      if (opts.strokeColor) {
        ctx.strokeStyle = opts.strokeColor;
      }
      if (!isNullOrUndef(opts.strokeWidth)) {
        ctx.lineWidth = opts.strokeWidth;
      }
      ctx.strokeText(line, x, y, opts.maxWidth);
    }
    ctx.fillText(line, x, y, opts.maxWidth);
    decorateText(ctx, x, y, line, opts);
    y += font.lineHeight;
  }
  ctx.restore();
}
function setRenderOpts(ctx, opts) {
  if (opts.translation) {
    ctx.translate(opts.translation[0], opts.translation[1]);
  }
  if (!isNullOrUndef(opts.rotation)) {
    ctx.rotate(opts.rotation);
  }
  if (opts.color) {
    ctx.fillStyle = opts.color;
  }
  if (opts.textAlign) {
    ctx.textAlign = opts.textAlign;
  }
  if (opts.textBaseline) {
    ctx.textBaseline = opts.textBaseline;
  }
}
function decorateText(ctx, x, y, line, opts) {
  if (opts.strikethrough || opts.underline) {
    const metrics = ctx.measureText(line);
    const left = x - metrics.actualBoundingBoxLeft;
    const right = x + metrics.actualBoundingBoxRight;
    const top = y - metrics.actualBoundingBoxAscent;
    const bottom = y + metrics.actualBoundingBoxDescent;
    const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.lineWidth = opts.decorationWidth || 2;
    ctx.moveTo(left, yDecoration);
    ctx.lineTo(right, yDecoration);
    ctx.stroke();
  }
}
function drawBackdrop(ctx, opts) {
  const oldColor = ctx.fillStyle;
  ctx.fillStyle = opts.color;
  ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
  ctx.fillStyle = oldColor;
}
function addRoundedRectPath(ctx, rect) {
  const x = rect.x,
    y = rect.y,
    w = rect.w,
    h = rect.h,
    radius = rect.radius;
  ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -HALF_PI, PI, true);
  ctx.lineTo(x, y + h - radius.bottomLeft);
  ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
  ctx.lineTo(x + w - radius.bottomRight, y + h);
  ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
  ctx.lineTo(x + w, y + radius.topRight);
  ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
  ctx.lineTo(x + radius.topLeft, y);
}
const LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
    * Converts the given line height `value` in pixels for a specific font `size`.
    * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
    * @param size - The font size (in pixels) used to resolve relative `value`.
    * @returns The effective line height in pixels (size * 1.2 if value is invalid).
    * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
    * @since 2.7.0
    */
function toLineHeight(value, size) {
  const matches = ('' + value).match(LINE_HEIGHT);
  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }
  value = +matches[2];
  switch (matches[3]) {
    case 'px':
      return value;
    case '%':
      value /= 100;
      break;
  }
  return size * value;
}
const numberOrZero = function (v) {
  return +v || 0;
};
function _readValueToProps(value, props) {
  const ret = {};
  const objProps = isObject(props);
  const keys = objProps ? Object.keys(props) : props;
  const read = isObject(value) ? objProps ? function (prop) {
    return valueOrDefault(value[prop], value[props[prop]]);
  } : function (prop) {
    return value[prop];
  } : function () {
    return value;
  };
  var _iterator4 = _createForOfIteratorHelper(keys),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      const prop = _step4.value;
      ret[prop] = numberOrZero(read(prop));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */
function toTRBL(value) {
  return _readValueToProps(value, {
    top: 'y',
    right: 'x',
    bottom: 'y',
    left: 'x'
  });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */
function toTRBLCorners(value) {
  return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */
function toPadding(value) {
  const obj = toTRBL(value);
  obj.width = obj.left + obj.right;
  obj.height = obj.top + obj.bottom;
  return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */
function toFont(options, fallback) {
  options = options || {};
  fallback = fallback || defaults.font;
  let size = valueOrDefault(options.size, fallback.size);
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }
  let style = valueOrDefault(options.style, fallback.style);
  if (style && !('' + style).match(FONT_STYLE)) {
    console.warn('Invalid font style specified: "' + style + '"');
    style = undefined;
  }
  const font = {
    family: valueOrDefault(options.family, fallback.family),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
    size,
    style,
    weight: valueOrDefault(options.weight, fallback.weight),
    string: ''
  };
  font.string = toFontString(font);
  return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */
function resolve(inputs, context, index, info) {
  let cacheable = true;
  let i, ilen, value;
  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];
    if (value === undefined) {
      continue;
    }
    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }
    if (index !== undefined && isArray(value)) {
      value = value[index % value.length];
      cacheable = false;
    }
    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }
      return value;
    }
  }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */
function _addGrace(minmax, grace, beginAtZero) {
  const min = minmax.min,
    max = minmax.max;
  const change = toDimension(grace, (max - min) / 2);
  const keepZero = function (value, add) {
    return beginAtZero && value === 0 ? 0 : value + add;
  };
  return {
    min: keepZero(min, -Math.abs(change)),
    max: keepZero(max, change)
  };
}
/**
 * Create a context inheriting parentContext
 * @param parentContext
 * @param context
 * @returns
 */
function createContext(parentContext, context) {
  return Object.assign(Object.create(parentContext), context);
}
function _createResolver(scopes) {
  let prefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [''];
  let rootScopes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : scopes;
  let fallback = arguments.length > 3 ? arguments[3] : undefined;
  let getTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
    return scopes[0];
  };
  if (!defined(fallback)) {
    fallback = _resolve('_fallback', scopes);
  }
  const cache = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: true,
    _scopes: scopes,
    _rootScopes: rootScopes,
    _fallback: fallback,
    _getTarget: getTarget,
    override: function (scope) {
      return _createResolver([scope].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(scopes)), prefixes, rootScopes, fallback);
    }
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete target._keys;
      delete scopes[0][prop];
      return true;
    },
    get(target, prop) {
      return _cached(target, prop, function () {
        return _resolveWithPrefixes(prop, prefixes, scopes, target);
      });
    },
    getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(scopes[0]);
    },
    has(target, prop) {
      return getKeysFromAllScopes(target).includes(prop);
    },
    ownKeys(target) {
      return getKeysFromAllScopes(target);
    },
    set(target, prop, value) {
      const storage = target._storage || (target._storage = getTarget());
      target[prop] = storage[prop] = value;
      delete target._keys;
      return true;
    }
  });
}
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
  const cache = {
    _cacheable: false,
    _proxy: proxy,
    _context: context,
    _subProxy: subProxy,
    _stack: new Set(),
    _descriptors: _descriptors(proxy, descriptorDefaults),
    setContext: function (ctx) {
      return _attachContext(proxy, ctx, subProxy, descriptorDefaults);
    },
    override: function (scope) {
      return _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults);
    }
  };
  return new Proxy(cache, {
    deleteProperty(target, prop) {
      delete target[prop];
      delete proxy[prop];
      return true;
    },
    get(target, prop, receiver) {
      return _cached(target, prop, function () {
        return _resolveWithContext(target, prop, receiver);
      });
    },
    getOwnPropertyDescriptor(target, prop) {
      return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
        enumerable: true,
        configurable: true
      } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(proxy);
    },
    has(target, prop) {
      return Reflect.has(proxy, prop);
    },
    ownKeys() {
      return Reflect.ownKeys(proxy);
    },
    set(target, prop, value) {
      proxy[prop] = value;
      delete target[prop];
      return true;
    }
  });
}
function _descriptors(proxy) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    scriptable: true,
    indexable: true
  };
  const _proxy$_scriptable = proxy._scriptable,
    _scriptable = _proxy$_scriptable === void 0 ? defaults.scriptable : _proxy$_scriptable,
    _proxy$_indexable = proxy._indexable,
    _indexable = _proxy$_indexable === void 0 ? defaults.indexable : _proxy$_indexable,
    _proxy$_allKeys = proxy._allKeys,
    _allKeys = _proxy$_allKeys === void 0 ? defaults.allKeys : _proxy$_allKeys;
  return {
    allKeys: _allKeys,
    scriptable: _scriptable,
    indexable: _indexable,
    isScriptable: isFunction(_scriptable) ? _scriptable : function () {
      return _scriptable;
    },
    isIndexable: isFunction(_indexable) ? _indexable : function () {
      return _indexable;
    }
  };
}
const readKey = function (prefix, name) {
  return prefix ? prefix + _capitalize(name) : name;
};
const needsSubResolver = function (prop, value) {
  return isObject(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
};
function _cached(target, prop, resolve) {
  if (Object.prototype.hasOwnProperty.call(target, prop)) {
    return target[prop];
  }
  const value = resolve();
  target[prop] = value;
  return value;
}
function _resolveWithContext(target, prop, receiver) {
  const _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    descriptors = target._descriptors;
  let value = _proxy[prop];
  if (isFunction(value) && descriptors.isScriptable(prop)) {
    value = _resolveScriptable(prop, value, target, receiver);
  }
  if (isArray(value) && value.length) {
    value = _resolveArray(prop, value, target, descriptors.isIndexable);
  }
  if (needsSubResolver(prop, value)) {
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
  }
  return value;
}
function _resolveScriptable(prop, value, target, receiver) {
  const _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    _stack = target._stack;
  if (_stack.has(prop)) {
    throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
  }
  _stack.add(prop);
  value = value(_context, _subProxy || receiver);
  _stack.delete(prop);
  if (needsSubResolver(prop, value)) {
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
  }
  return value;
}
function _resolveArray(prop, value, target, isIndexable) {
  const _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    descriptors = target._descriptors;
  if (defined(_context.index) && isIndexable(prop)) {
    value = value[_context.index % value.length];
  } else if (isObject(value[0])) {
    const arr = value;
    const scopes = _proxy._scopes.filter(function (s) {
      return s !== arr;
    });
    value = [];
    var _iterator5 = _createForOfIteratorHelper(arr),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        const item = _step5.value;
        const resolver = createSubResolver(scopes, _proxy, prop, item);
        value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  return value;
}
function resolveFallback(fallback, prop, value) {
  return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = function (key, parent) {
  return key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
};
function addScopes(set, parentScopes, key, parentFallback, value) {
  var _iterator6 = _createForOfIteratorHelper(parentScopes),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      const parent = _step6.value;
      const scope = getScope(key, parent);
      if (scope) {
        set.add(scope);
        const fallback = resolveFallback(scope._fallback, key, value);
        if (defined(fallback) && fallback !== key && fallback !== parentFallback) {
          return fallback;
        }
      } else if (scope === false && defined(parentFallback) && key !== parentFallback) {
        return null;
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
  const rootScopes = resolver._rootScopes;
  const fallback = resolveFallback(resolver._fallback, prop, value);
  const allScopes = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(parentScopes), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(rootScopes));
  const set = new Set();
  set.add(value);
  let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
  if (key === null) {
    return false;
  }
  if (defined(fallback) && fallback !== prop) {
    key = addScopesFromKey(set, allScopes, fallback, key, value);
    if (key === null) {
      return false;
    }
  }
  return _createResolver(Array.from(set), [''], rootScopes, fallback, function () {
    return subGetTarget(resolver, prop, value);
  });
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
  while (key) {
    key = addScopes(set, allScopes, key, fallback, item);
  }
  return key;
}
function subGetTarget(resolver, prop, value) {
  const parent = resolver._getTarget();
  if (!(prop in parent)) {
    parent[prop] = {};
  }
  const target = parent[prop];
  if (isArray(target) && isObject(value)) {
    return value;
  }
  return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
  let value;
  var _iterator7 = _createForOfIteratorHelper(prefixes),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      const prefix = _step7.value;
      value = _resolve(readKey(prefix, prop), scopes);
      if (defined(value)) {
        return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
function _resolve(key, scopes) {
  var _iterator8 = _createForOfIteratorHelper(scopes),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      const scope = _step8.value;
      if (!scope) {
        continue;
      }
      const value = scope[key];
      if (defined(value)) {
        return value;
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}
function getKeysFromAllScopes(target) {
  let keys = target._keys;
  if (!keys) {
    keys = target._keys = resolveKeysFromAllScopes(target._scopes);
  }
  return keys;
}
function resolveKeysFromAllScopes(scopes) {
  const set = new Set();
  var _iterator9 = _createForOfIteratorHelper(scopes),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      const scope = _step9.value;
      var _iterator10 = _createForOfIteratorHelper(Object.keys(scope).filter(function (k) {
          return !k.startsWith('_');
        })),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          const key = _step10.value;
          set.add(key);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
  const iScale = meta.iScale;
  const _this$_parsing$key = this._parsing.key,
    key = _this$_parsing$key === void 0 ? 'r' : _this$_parsing$key;
  const parsed = new Array(count);
  let i, ilen, index, item;
  for (i = 0, ilen = count; i < ilen; ++i) {
    index = i + start;
    item = data[index];
    parsed[i] = {
      r: iScale.parse(resolveObjectKey(item, key), index)
    };
  }
  return parsed;
}
const EPSILON = Number.EPSILON || 1e-14;
const getPoint = function (points, i) {
  return i < points.length && !points[i].skip && points[i];
};
const getValueAxis = function (indexAxis) {
  return indexAxis === 'x' ? 'y' : 'x';
};
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  // Props to Rob Spencer at scaled innovation for his post on splining between points
  // http://scaledinnovation.com/analytics/splines/aboutSplines.html
  // This function must also respect "skipped" points
  const previous = firstPoint.skip ? middlePoint : firstPoint;
  const current = middlePoint;
  const next = afterPoint.skip ? middlePoint : afterPoint;
  const d01 = distanceBetweenPoints(current, previous);
  const d12 = distanceBetweenPoints(next, current);
  let s01 = d01 / (d01 + d12);
  let s12 = d12 / (d01 + d12);
  // If all points are the same, s01 & s02 will be inf
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  const fa = t * s01; // scaling factor for triangle Ta
  const fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}
/**
 * Adjust tangents to ensure monotonic properties
 */
function monotoneAdjust(points, deltaK, mK) {
  const pointsLen = points.length;
  let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent || !pointAfter) {
      continue;
    }
    if (almostEquals(deltaK[i], 0, EPSILON)) {
      mK[i] = mK[i + 1] = 0;
      continue;
    }
    alphaK = mK[i] / deltaK[i];
    betaK = mK[i + 1] / deltaK[i];
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
    if (squaredMagnitude <= 9) {
      continue;
    }
    tauK = 3 / Math.sqrt(squaredMagnitude);
    mK[i] = alphaK * tauK * deltaK[i];
    mK[i + 1] = betaK * tauK * deltaK[i];
  }
}
function monotoneCompute(points, mK) {
  let indexAxis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  let delta, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    const iPixel = pointCurrent[indexAxis];
    const vPixel = pointCurrent[valueAxis];
    if (pointBefore) {
      delta = (iPixel - pointBefore[indexAxis]) / 3;
      pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
      pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
    }
    if (pointAfter) {
      delta = (pointAfter[indexAxis] - iPixel) / 3;
      pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
      pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
    }
  }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */
function splineCurveMonotone(points) {
  let indexAxis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  const deltaK = Array(pointsLen).fill(0);
  const mK = Array(pointsLen);
  // Calculate slopes (deltaK) and initialize tangents (mK)
  let i, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    if (pointAfter) {
      const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
      // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
      deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
    }
    mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
  }
  monotoneAdjust(points, deltaK, mK);
  monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
  let i, ilen, point, inArea, inAreaPrev;
  let inAreaNext = _isPointInArea(points[0], area);
  for (i = 0, ilen = points.length; i < ilen; ++i) {
    inAreaPrev = inArea;
    inArea = inAreaNext;
    inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
    if (!inArea) {
      continue;
    }
    point = points[i];
    if (inAreaPrev) {
      point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
      point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
    }
    if (inAreaNext) {
      point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
      point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
    }
  }
}
/**
 * @private
 */
function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
  let i, ilen, point, controlPoints;
  // Only consider points that are drawn in case the spanGaps option is used
  if (options.spanGaps) {
    points = points.filter(function (pt) {
      return !pt.skip;
    });
  }
  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points, indexAxis);
  } else {
    let prev = loop ? points[points.length - 1] : points[0];
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
      point.cp1x = controlPoints.previous.x;
      point.cp1y = controlPoints.previous.y;
      point.cp2x = controlPoints.next.x;
      point.cp2y = controlPoints.next.y;
      prev = point;
    }
  }
  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import("../core/core.controller").default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
    * @private
    */
function _isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * @private
 */
function _getParentNode(domNode) {
  let parent = domNode.parentNode;
  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }
  return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */
function parseMaxStyle(styleValue, node, parentProperty) {
  let valueInPixels;
  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);
    if (styleValue.indexOf('%') !== -1) {
      // percentage * size in dimension
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }
  return valueInPixels;
}
const getComputedStyle = function (element) {
  return element.ownerDocument.defaultView.getComputedStyle(element, null);
};
function getStyle(el, property) {
  return getComputedStyle(el).getPropertyValue(property);
}
const positions = ['top', 'right', 'bottom', 'left'];
function getPositionedStyle(styles, style, suffix) {
  const result = {};
  suffix = suffix ? '-' + suffix : '';
  for (let i = 0; i < 4; i++) {
    const pos = positions[i];
    result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
  }
  result.width = result.left + result.right;
  result.height = result.top + result.bottom;
  return result;
}
const useOffsetPos = function (x, y, target) {
  return (x > 0 || y > 0) && (!target || !target.shadowRoot);
};
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */
function getCanvasPosition(e, canvas) {
  const touches = e.touches;
  const source = touches && touches.length ? touches[0] : e;
  const offsetX = source.offsetX,
    offsetY = source.offsetY;
  let box = false;
  let x, y;
  if (useOffsetPos(offsetX, offsetY, e.target)) {
    x = offsetX;
    y = offsetY;
  } else {
    const rect = canvas.getBoundingClientRect();
    x = source.clientX - rect.left;
    y = source.clientY - rect.top;
    box = true;
  }
  return {
    x,
    y,
    box
  };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */
function getRelativePosition(event, chart) {
  if ('native' in event) {
    return event;
  }
  const canvas = chart.canvas,
    currentDevicePixelRatio = chart.currentDevicePixelRatio;
  const style = getComputedStyle(canvas);
  const borderBox = style.boxSizing === 'border-box';
  const paddings = getPositionedStyle(style, 'padding');
  const borders = getPositionedStyle(style, 'border', 'width');
  const _getCanvasPosition = getCanvasPosition(event, canvas),
    x = _getCanvasPosition.x,
    y = _getCanvasPosition.y,
    box = _getCanvasPosition.box;
  const xOffset = paddings.left + (box && borders.left);
  const yOffset = paddings.top + (box && borders.top);
  let width = chart.width,
    height = chart.height;
  if (borderBox) {
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  return {
    x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
    y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
  };
}
function getContainerSize(canvas, width, height) {
  let maxWidth, maxHeight;
  if (width === undefined || height === undefined) {
    const container = _getParentNode(canvas);
    if (!container) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    } else {
      const rect = container.getBoundingClientRect(); // this is the border box of the container
      const containerStyle = getComputedStyle(container);
      const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
      const containerPadding = getPositionedStyle(containerStyle, 'padding');
      width = rect.width - containerPadding.width - containerBorder.width;
      height = rect.height - containerPadding.height - containerBorder.height;
      maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
      maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
    }
  }
  return {
    width,
    height,
    maxWidth: maxWidth || INFINITY,
    maxHeight: maxHeight || INFINITY
  };
}
const round1 = function (v) {
  return Math.round(v * 10) / 10;
};
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
  const style = getComputedStyle(canvas);
  const margins = getPositionedStyle(style, 'margin');
  const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
  const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
  const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
  let width = containerSize.width,
    height = containerSize.height;
  if (style.boxSizing === 'content-box') {
    const borders = getPositionedStyle(style, 'border', 'width');
    const paddings = getPositionedStyle(style, 'padding');
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  width = Math.max(0, width - margins.width);
  height = Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height - margins.height);
  width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
  height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
  if (width && !height) {
    // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = round1(width / 2);
  }
  const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
  if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
    height = containerSize.height;
    width = round1(Math.floor(height * aspectRatio));
  }
  return {
    width,
    height
  };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */
function retinaScale(chart, forceRatio, forceStyle) {
  const pixelRatio = forceRatio || 1;
  const deviceHeight = Math.floor(chart.height * pixelRatio);
  const deviceWidth = Math.floor(chart.width * pixelRatio);
  chart.height = deviceHeight / pixelRatio;
  chart.width = deviceWidth / pixelRatio;
  const canvas = chart.canvas;
  // If no style has been set on the canvas, the render size is used as display size,
  // making the chart visually bigger, so let's enforce it to the "correct" values.
  // See https://github.com/chartjs/Chart.js/issues/3575
  if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
    canvas.style.height = `${chart.height}px`;
    canvas.style.width = `${chart.width}px`;
  }
  if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
    chart.currentDevicePixelRatio = pixelRatio;
    canvas.height = deviceHeight;
    canvas.width = deviceWidth;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    return true;
  }
  return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
const supportsEventListenerOptions = function () {
  let passiveSupported = false;
  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (e) {
    // continue regardless of error
  }
  return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
  const value = getStyle(element, property);
  const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}

/**
 * @private
 */
function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}
/**
 * @private
 */
function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
  };
}
/**
 * @private
 */
function _bezierInterpolation(p1, p2, t, mode) {
  const cp1 = {
    x: p1.cp2x,
    y: p1.cp2y
  };
  const cp2 = {
    x: p2.cp1x,
    y: p2.cp1y
  };
  const a = _pointInLine(p1, cp1, t);
  const b = _pointInLine(cp1, cp2, t);
  const c = _pointInLine(cp2, p2, t);
  const d = _pointInLine(a, b, t);
  const e = _pointInLine(b, c, t);
  return _pointInLine(d, e, t);
}
const getRightToLeftAdapter = function (rectX, width) {
  return {
    x(x) {
      return rectX + rectX + width - x;
    },
    setWidth(w) {
      width = w;
    },
    textAlign(align) {
      if (align === 'center') {
        return align;
      }
      return align === 'right' ? 'left' : 'right';
    },
    xPlus(x, value) {
      return x - value;
    },
    leftForLtr(x, itemWidth) {
      return x - itemWidth;
    }
  };
};
const getLeftToRightAdapter = function () {
  return {
    x(x) {
      return x;
    },
    setWidth(w) {},
    textAlign(align) {
      return align;
    },
    xPlus(x, value) {
      return x + value;
    },
    leftForLtr(x, _itemWidth) {
      return x;
    }
  };
};
function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
  let style, original;
  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}
function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}
function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle
    };
  }
  return {
    between: _isBetween,
    compare: function (a, b) {
      return a - b;
    },
    normalize: function (x) {
      return x;
    }
  };
}
function normalizeSegment(_ref) {
  let start = _ref.start,
    end = _ref.end,
    count = _ref.count,
    loop = _ref.loop,
    style = _ref.style;
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0,
    style
  };
}
function getSegment(segment, points, bounds) {
  const property = bounds.property,
    startBound = bounds.start,
    endBound = bounds.end;
  const _propertyFn = propertyFn(property),
    between = _propertyFn.between,
    normalize = _propertyFn.normalize;
  const count = points.length;
  let start = segment.start,
    end = segment.end,
    loop = segment.loop;
  let i, ilen;
  if (loop) {
    start += count;
    end += count;
    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }
      start--;
      end--;
    }
    start %= count;
    end %= count;
  }
  if (end < start) {
    end += count;
  }
  return {
    start,
    end,
    loop,
    style: segment.style
  };
}
function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }
  const property = bounds.property,
    startBound = bounds.start,
    endBound = bounds.end;
  const count = points.length;
  const _propertyFn2 = propertyFn(property),
    compare = _propertyFn2.compare,
    between = _propertyFn2.between,
    normalize = _propertyFn2.normalize;
  const _getSegment = getSegment(segment, points, bounds),
    start = _getSegment.start,
    end = _getSegment.end,
    loop = _getSegment.loop,
    style = _getSegment.style;
  const result = [];
  let inside = false;
  let subStart = null;
  let value, point, prevValue;
  const startIsBefore = function () {
    return between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
  };
  const endIsBefore = function () {
    return compare(endBound, value) === 0 || between(endBound, prevValue, value);
  };
  const shouldStart = function () {
    return inside || startIsBefore();
  };
  const shouldStop = function () {
    return !inside || endIsBefore();
  };
  for (let i = start, prev = start; i <= end; ++i) {
    point = points[i % count];
    if (point.skip) {
      continue;
    }
    value = normalize(point[property]);
    if (value === prevValue) {
      continue;
    }
    inside = between(value, startBound, endBound);
    if (subStart === null && shouldStart()) {
      subStart = compare(value, startBound) === 0 ? i : prev;
    }
    if (subStart !== null && shouldStop()) {
      result.push(normalizeSegment({
        start: subStart,
        end: i,
        loop,
        count,
        style
      }));
      subStart = null;
    }
    prev = i;
    prevValue = value;
  }
  if (subStart !== null) {
    result.push(normalizeSegment({
      start: subStart,
      end,
      loop,
      count,
      style
    }));
  }
  return result;
}
function _boundSegments(line, bounds) {
  const result = [];
  const segments = line.segments;
  for (let i = 0; i < segments.length; i++) {
    const sub = _boundSegment(segments[i], line.points, bounds);
    if (sub.length) {
      result.push.apply(result, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(sub));
    }
  }
  return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
  let start = 0;
  let end = count - 1;
  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }
  while (start < count && points[start].skip) {
    start++;
  }
  start %= count;
  if (loop) {
    end += start;
  }
  while (end > start && points[end % count].skip) {
    end--;
  }
  end %= count;
  return {
    start,
    end
  };
}
function solidSegments(points, start, max, loop) {
  const count = points.length;
  const result = [];
  let last = start;
  let prev = points[start];
  let end;
  for (end = start + 1; end <= max; ++end) {
    const cur = points[end % count];
    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({
          start: start % count,
          end: (end - 1) % count,
          loop
        });
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;
      if (prev.skip) {
        start = end;
      }
    }
    prev = cur;
  }
  if (last !== null) {
    result.push({
      start: start % count,
      end: last % count,
      loop
    });
  }
  return result;
}
function _computeSegments(line, segmentOptions) {
  const points = line.points;
  const spanGaps = line.options.spanGaps;
  const count = points.length;
  if (!count) {
    return [];
  }
  const loop = !!line._loop;
  const _findStartAndEnd = findStartAndEnd(points, count, loop, spanGaps),
    start = _findStartAndEnd.start,
    end = _findStartAndEnd.end;
  if (spanGaps === true) {
    return splitByStyles(line, [{
      start,
      end,
      loop
    }], points, segmentOptions);
  }
  const max = end < start ? end + count : end;
  const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
  if (!segmentOptions || !segmentOptions.setContext || !points) {
    return segments;
  }
  return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
  const chartContext = line._chart.getContext();
  const baseStyle = readStyle(line.options);
  const datasetIndex = line._datasetIndex,
    spanGaps = line.options.spanGaps;
  const count = points.length;
  const result = [];
  let prevStyle = baseStyle;
  let start = segments[0].start;
  let i = start;
  function addStyle(s, e, l, st) {
    const dir = spanGaps ? -1 : 1;
    if (s === e) {
      return;
    }
    s += count;
    while (points[s % count].skip) {
      s -= dir;
    }
    while (points[e % count].skip) {
      e += dir;
    }
    if (s % count !== e % count) {
      result.push({
        start: s % count,
        end: e % count,
        loop: l,
        style: st
      });
      prevStyle = st;
      start = e % count;
    }
  }
  var _iterator11 = _createForOfIteratorHelper(segments),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      const segment = _step11.value;
      start = spanGaps ? start : segment.start;
      let prev = points[start % count];
      let style;
      for (i = start + 1; i <= segment.end; i++) {
        const pt = points[i % count];
        style = readStyle(segmentOptions.setContext(createContext(chartContext, {
          type: 'segment',
          p0: prev,
          p1: pt,
          p0DataIndex: (i - 1) % count,
          p1DataIndex: i % count,
          datasetIndex
        })));
        if (styleChanged(style, prevStyle)) {
          addStyle(start, i - 1, segment.loop, prevStyle);
        }
        prev = pt;
        prevStyle = style;
      }
      if (start < i - 1) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  return result;
}
function readStyle(options) {
  return {
    backgroundColor: options.backgroundColor,
    borderCapStyle: options.borderCapStyle,
    borderDash: options.borderDash,
    borderDashOffset: options.borderDashOffset,
    borderJoinStyle: options.borderJoinStyle,
    borderWidth: options.borderWidth,
    borderColor: options.borderColor
  };
}
function styleChanged(style, prevStyle) {
  return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}


/***/ })

}]);