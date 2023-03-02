(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@sentry/tracing/esm/browser/backgroundtab.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/backgroundtab.js ***!
  \*******************************************************************/
/*! exports provided: registerBackgroundTabDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBackgroundTabDetection", function() { return registerBackgroundTabDetection; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@sentry/tracing/esm/utils.js");



/**
 * Add a listener that cancels and finishes a transaction when the global
 * document is hidden.
 */
function registerBackgroundTabDetection() {
  if (_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].document) {
    _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].document.addEventListener('visibilitychange', function () {
      const activeTransaction = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getActiveTransaction"])();
      if (_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].document.hidden && activeTransaction) {
        const statusType = 'cancelled';
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`[Tracing] Transaction: ${statusType} -> since tab moved to the background, op: ${activeTransaction.op}`);
        // We should not set status if it is already set, this prevent important statuses like
        // error or data loss from being overwritten on transaction.
        if (!activeTransaction.status) {
          activeTransaction.setStatus(statusType);
        }
        activeTransaction.setTag('visibilitychange', 'document.hidden');
        activeTransaction.finish();
      }
    });
  } else {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('[Tracing] Could not set up background tab detection due to lack of global document');
  }
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/browsertracing.js ***!
  \********************************************************************/
/*! exports provided: BROWSER_TRACING_INTEGRATION_ID, BrowserTracing, getMetaContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_TRACING_INTEGRATION_ID", function() { return BROWSER_TRACING_INTEGRATION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserTracing", function() { return BrowserTracing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetaContent", function() { return getMetaContent; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _hubextensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hubextensions.js */ "./node_modules/@sentry/tracing/esm/hubextensions.js");
/* harmony import */ var _idletransaction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../idletransaction.js */ "./node_modules/@sentry/tracing/esm/idletransaction.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@sentry/tracing/esm/utils.js");
/* harmony import */ var _backgroundtab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./backgroundtab.js */ "./node_modules/@sentry/tracing/esm/browser/backgroundtab.js");
/* harmony import */ var _metrics_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metrics/index.js */ "./node_modules/@sentry/tracing/esm/browser/metrics/index.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request.js */ "./node_modules/@sentry/tracing/esm/browser/request.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./router.js */ "./node_modules/@sentry/tracing/esm/browser/router.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









const BROWSER_TRACING_INTEGRATION_ID = 'BrowserTracing';

/** Options for Browser Tracing integration */

const DEFAULT_BROWSER_TRACING_OPTIONS = _objectSpread({
  idleTimeout: _idletransaction_js__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_IDLE_TIMEOUT"],
  finalTimeout: _idletransaction_js__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_FINAL_TIMEOUT"],
  heartbeatInterval: _idletransaction_js__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_HEARTBEAT_INTERVAL"],
  markBackgroundTransactions: true,
  routingInstrumentation: _router_js__WEBPACK_IMPORTED_MODULE_11__["instrumentRoutingWithDefaults"],
  startTransactionOnLocationChange: true,
  startTransactionOnPageLoad: true,
  _experiments: {
    enableLongTask: true
  }
}, _request_js__WEBPACK_IMPORTED_MODULE_10__["defaultRequestInstrumentationOptions"]);

/**
 * The Browser Tracing integration automatically instruments browser pageload/navigation
 * actions as transactions, and captures requests, metrics and errors as spans.
 *
 * The integration can be configured with a variety of options, and can be extended to use
 * any routing library. This integration uses {@see IdleTransaction} to create transactions.
 */
let BrowserTracing = /*#__PURE__*/function () {
  function BrowserTracing(_options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BrowserTracing);
    ;
    BrowserTracing.prototype.__init.call(this);
    let tracingOrigins = _request_js__WEBPACK_IMPORTED_MODULE_10__["defaultRequestInstrumentationOptions"].tracingOrigins;
    // NOTE: Logger doesn't work in constructors, as it's initialized after integrations instances
    if (_options) {
      if (_options.tracingOrigins && Array.isArray(_options.tracingOrigins)) {
        tracingOrigins = _options.tracingOrigins;
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && (this._emitOptionsWarning = true);
      }
    }
    this.options = _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_BROWSER_TRACING_OPTIONS), _options), {}, {
      tracingOrigins
    });
    const _metricOptions = this.options._metricOptions;
    Object(_metrics_index_js__WEBPACK_IMPORTED_MODULE_9__["startTrackingWebVitals"])(_metricOptions && _metricOptions._reportAllChanges);
    if (Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_optionalChain"])([this, 'access', function (_2) {
      return _2.options;
    }, 'access', function (_3) {
      return _3._experiments;
    }, 'optionalAccess', function (_4) {
      return _4.enableLongTask;
    }])) {
      Object(_metrics_index_js__WEBPACK_IMPORTED_MODULE_9__["startTrackingLongTasks"])();
    }
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BrowserTracing, [{
    key: "__init",
    value:
    // This class currently doesn't have a static `id` field like the other integration classes, because it prevented
    // @sentry/tracing from being treeshaken. Tree shakers do not like static fields, because they behave like side effects.
    // TODO: Come up with a better plan, than using static fields on integration classes, and use that plan on all
    // integrations.

    /** Browser Tracing integration options */

    /**
     * @inheritDoc
     */
    function __init() {
      this.name = BROWSER_TRACING_INTEGRATION_ID;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce(_, getCurrentHub) {
      var _this = this;
      this._getCurrentHub = getCurrentHub;
      if (this._emitOptionsWarning) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].warn('[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.');
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].warn(`[Tracing] We added a reasonable default for you: ${_request_js__WEBPACK_IMPORTED_MODULE_10__["defaultRequestInstrumentationOptions"].tracingOrigins}`);
      }

      // eslint-disable-next-line @typescript-eslint/unbound-method
      const _this$options = this.options,
        instrumentRouting = _this$options.routingInstrumentation,
        startTransactionOnLocationChange = _this$options.startTransactionOnLocationChange,
        startTransactionOnPageLoad = _this$options.startTransactionOnPageLoad,
        markBackgroundTransactions = _this$options.markBackgroundTransactions,
        traceFetch = _this$options.traceFetch,
        traceXHR = _this$options.traceXHR,
        tracingOrigins = _this$options.tracingOrigins,
        shouldCreateSpanForRequest = _this$options.shouldCreateSpanForRequest;
      instrumentRouting(function (context) {
        return _this._createRouteTransaction(context);
      }, startTransactionOnPageLoad, startTransactionOnLocationChange);
      if (markBackgroundTransactions) {
        Object(_backgroundtab_js__WEBPACK_IMPORTED_MODULE_8__["registerBackgroundTabDetection"])();
      }
      Object(_request_js__WEBPACK_IMPORTED_MODULE_10__["instrumentOutgoingRequests"])({
        traceFetch,
        traceXHR,
        tracingOrigins,
        shouldCreateSpanForRequest
      });
    }

    /** Create routing idle transaction. */
  }, {
    key: "_createRouteTransaction",
    value: function _createRouteTransaction(context) {
      var _this2 = this;
      if (!this._getCurrentHub) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].warn(`[Tracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
        return undefined;
      }

      // eslint-disable-next-line @typescript-eslint/unbound-method
      const _this$options2 = this.options,
        beforeNavigate = _this$options2.beforeNavigate,
        idleTimeout = _this$options2.idleTimeout,
        finalTimeout = _this$options2.finalTimeout,
        heartbeatInterval = _this$options2.heartbeatInterval;
      const isPageloadTransaction = context.op === 'pageload';
      const sentryTraceMetaTagValue = isPageloadTransaction ? getMetaContent('sentry-trace') : null;
      const baggageMetaTagValue = isPageloadTransaction ? getMetaContent('baggage') : null;
      const traceParentData = sentryTraceMetaTagValue ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["extractTraceparentData"])(sentryTraceMetaTagValue) : undefined;
      const dynamicSamplingContext = baggageMetaTagValue ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["baggageHeaderToDynamicSamplingContext"])(baggageMetaTagValue) : undefined;
      const expandedContext = _objectSpread(_objectSpread(_objectSpread({}, context), traceParentData), {}, {
        metadata: _objectSpread(_objectSpread({}, context.metadata), {}, {
          dynamicSamplingContext: traceParentData && !dynamicSamplingContext ? {} : dynamicSamplingContext
        }),
        trimEnd: true
      });
      const modifiedContext = typeof beforeNavigate === 'function' ? beforeNavigate(expandedContext) : expandedContext;

      // For backwards compatibility reasons, beforeNavigate can return undefined to "drop" the transaction (prevent it
      // from being sent to Sentry).
      const finalContext = modifiedContext === undefined ? _objectSpread(_objectSpread({}, expandedContext), {}, {
        sampled: false
      }) : modifiedContext;

      // If `beforeNavigate` set a custom name, record that fact
      finalContext.metadata = finalContext.name !== expandedContext.name ? _objectSpread(_objectSpread({}, finalContext.metadata), {}, {
        source: 'custom'
      }) : finalContext.metadata;
      if (finalContext.sampled === false) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].log(`[Tracing] Will not send ${finalContext.op} transaction because of beforeNavigate.`);
      }
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].log(`[Tracing] Starting ${finalContext.op} transaction on scope`);
      const hub = this._getCurrentHub();
      const location = _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].location;
      const idleTransaction = Object(_hubextensions_js__WEBPACK_IMPORTED_MODULE_5__["startIdleTransaction"])(hub, finalContext, idleTimeout, finalTimeout, true, {
        location
      },
      // for use in the tracesSampler
      heartbeatInterval);
      idleTransaction.registerBeforeFinishCallback(function (transaction) {
        Object(_metrics_index_js__WEBPACK_IMPORTED_MODULE_9__["addPerformanceEntries"])(transaction);
        transaction.setTag('sentry_reportAllChanges', Boolean(_this2.options._metricOptions && _this2.options._metricOptions._reportAllChanges));
      });
      return idleTransaction;
    }
  }]);
  return BrowserTracing;
}();
/** Returns the value of a meta tag */
function getMetaContent(metaName) {
  // Can't specify generic to `getDomElement` because tracing can be used
  // in a variety of environments, have to disable `no-unsafe-member-access`
  // as a result.
  const metaTag = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["getDomElement"])(`meta[name=${metaName}]`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return metaTag ? metaTag.getAttribute('content') : null;
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/index.js ***!
  \***********************************************************/
/*! exports provided: BROWSER_TRACING_INTEGRATION_ID, BrowserTracing, defaultRequestInstrumentationOptions, instrumentOutgoingRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browsertracing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browsertracing.js */ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BROWSER_TRACING_INTEGRATION_ID", function() { return _browsertracing_js__WEBPACK_IMPORTED_MODULE_0__["BROWSER_TRACING_INTEGRATION_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserTracing", function() { return _browsertracing_js__WEBPACK_IMPORTED_MODULE_0__["BrowserTracing"]; });

/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.js */ "./node_modules/@sentry/tracing/esm/browser/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRequestInstrumentationOptions", function() { return _request_js__WEBPACK_IMPORTED_MODULE_1__["defaultRequestInstrumentationOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instrumentOutgoingRequests", function() { return _request_js__WEBPACK_IMPORTED_MODULE_1__["instrumentOutgoingRequests"]; });



;

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/metrics/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/metrics/index.js ***!
  \*******************************************************************/
/*! exports provided: _addMeasureSpans, _addResourceSpans, addPerformanceEntries, startTrackingLongTasks, startTrackingWebVitals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_addMeasureSpans", function() { return _addMeasureSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_addResourceSpans", function() { return _addResourceSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPerformanceEntries", function() { return addPerformanceEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTrackingLongTasks", function() { return startTrackingLongTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTrackingWebVitals", function() { return startTrackingWebVitals; });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/@sentry/tracing/esm/utils.js");
/* harmony import */ var _web_vitals_getCLS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web-vitals/getCLS.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getCLS.js");
/* harmony import */ var _web_vitals_getFID_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web-vitals/getFID.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getFID.js");
/* harmony import */ var _web_vitals_getLCP_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web-vitals/getLCP.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getLCP.js");
/* harmony import */ var _web_vitals_lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../web-vitals/lib/getVisibilityWatcher.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js");
/* harmony import */ var _web_vitals_lib_observe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../web-vitals/lib/observe.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@sentry/tracing/esm/browser/metrics/utils.js");









function getBrowserPerformanceAPI() {
  return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].addEventListener && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].performance;
}
let _performanceCursor = 0;
let _measurements = {};
let _lcpEntry;
let _clsEntry;

/**
 * Start tracking web vitals
 */
function startTrackingWebVitals() {
  let reportAllChanges = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  const performance = getBrowserPerformanceAPI();
  if (performance && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["browserPerformanceTimeOrigin"]) {
    if (performance.mark) {
      _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].performance.mark('sentry-tracing-init');
    }
    _trackCLS();
    _trackLCP(reportAllChanges);
    _trackFID();
  }
}

/**
 * Start tracking long tasks.
 */
function startTrackingLongTasks() {
  const entryHandler = function (entry) {
    const transaction = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getActiveTransaction"])();
    if (!transaction) {
      return;
    }
    const startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["browserPerformanceTimeOrigin"] + entry.startTime);
    const duration = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.duration);
    transaction.startChild({
      description: 'Main UI thread blocked',
      op: 'ui.long-task',
      startTimestamp: startTime,
      endTimestamp: startTime + duration
    });
  };
  Object(_web_vitals_lib_observe_js__WEBPACK_IMPORTED_MODULE_7__["observe"])('longtask', entryHandler);
}

/** Starts tracking the Cumulative Layout Shift on the current page. */
function _trackCLS() {
  // See:
  // https://web.dev/evolving-cls/
  // https://web.dev/cls-web-tooling/
  Object(_web_vitals_getCLS_js__WEBPACK_IMPORTED_MODULE_3__["getCLS"])(function (metric) {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Measurements] Adding CLS');
    _measurements['cls'] = {
      value: metric.value,
      unit: ''
    };
    _clsEntry = entry;
  });
}

/** Starts tracking the Largest Contentful Paint on the current page. */
function _trackLCP(reportAllChanges) {
  Object(_web_vitals_getLCP_js__WEBPACK_IMPORTED_MODULE_5__["getLCP"])(function (metric) {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Measurements] Adding LCP');
    _measurements['lcp'] = {
      value: metric.value,
      unit: 'millisecond'
    };
    _lcpEntry = entry;
  }, reportAllChanges);
}

/** Starts tracking the First Input Delay on the current page. */
function _trackFID() {
  Object(_web_vitals_getFID_js__WEBPACK_IMPORTED_MODULE_4__["getFID"])(function (metric) {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }
    const timeOrigin = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["browserPerformanceTimeOrigin"]);
    const startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.startTime);
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Measurements] Adding FID');
    _measurements['fid'] = {
      value: metric.value,
      unit: 'millisecond'
    };
    _measurements['mark.fid'] = {
      value: timeOrigin + startTime,
      unit: 'second'
    };
  });
}

/** Add performance related spans to a transaction */
function addPerformanceEntries(transaction) {
  const performance = getBrowserPerformanceAPI();
  if (!performance || !_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].performance.getEntries || !_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["browserPerformanceTimeOrigin"]) {
    // Gatekeeper if performance API not available
    return;
  }
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Tracing] Adding & adjusting spans using Performance API');
  const timeOrigin = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["browserPerformanceTimeOrigin"]);
  const performanceEntries = performance.getEntries();
  let responseStartTimestamp;
  let requestStartTimestamp;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  performanceEntries.slice(_performanceCursor).forEach(function (entry) {
    const startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.startTime);
    const duration = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.duration);
    if (transaction.op === 'navigation' && timeOrigin + startTime < transaction.startTimestamp) {
      return;
    }
    switch (entry.entryType) {
      case 'navigation':
        {
          _addNavigationSpans(transaction, entry, timeOrigin);
          responseStartTimestamp = timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.responseStart);
          requestStartTimestamp = timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.requestStart);
          break;
        }
      case 'mark':
      case 'paint':
      case 'measure':
        {
          _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);

          // capture web vitals
          const firstHidden = Object(_web_vitals_lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_6__["getVisibilityWatcher"])();
          // Only report if the page wasn't hidden prior to the web vital.
          const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
          if (entry.name === 'first-paint' && shouldRecord) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Measurements] Adding FP');
            _measurements['fp'] = {
              value: entry.startTime,
              unit: 'millisecond'
            };
          }
          if (entry.name === 'first-contentful-paint' && shouldRecord) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Measurements] Adding FCP');
            _measurements['fcp'] = {
              value: entry.startTime,
              unit: 'millisecond'
            };
          }
          break;
        }
      case 'resource':
        {
          const resourceName = entry.name.replace(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].location.origin, '');
          _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
          break;
        }
      default:
      // Ignore other entry types.
    }
  });

  _performanceCursor = Math.max(performanceEntries.length - 1, 0);
  _trackNavigator(transaction);

  // Measurements are only available for pageload transactions
  if (transaction.op === 'pageload') {
    // Generate TTFB (Time to First Byte), which measured as the time between the beginning of the transaction and the
    // start of the response in milliseconds
    if (typeof responseStartTimestamp === 'number') {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Measurements] Adding TTFB');
      _measurements['ttfb'] = {
        value: (responseStartTimestamp - transaction.startTimestamp) * 1000,
        unit: 'millisecond'
      };
      if (typeof requestStartTimestamp === 'number' && requestStartTimestamp <= responseStartTimestamp) {
        // Capture the time spent making the request and receiving the first byte of the response.
        // This is the time between the start of the request and the start of the response in milliseconds.
        _measurements['ttfb.requestTime'] = {
          value: (responseStartTimestamp - requestStartTimestamp) * 1000,
          unit: 'millisecond'
        };
      }
    }
    ['fcp', 'fp', 'lcp'].forEach(function (name) {
      if (!_measurements[name] || timeOrigin >= transaction.startTimestamp) {
        return;
      }
      // The web vitals, fcp, fp, lcp, and ttfb, all measure relative to timeOrigin.
      // Unfortunately, timeOrigin is not captured within the transaction span data, so these web vitals will need
      // to be adjusted to be relative to transaction.startTimestamp.
      const oldValue = _measurements[name].value;
      const measurementTimestamp = timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(oldValue);

      // normalizedValue should be in milliseconds
      const normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1000);
      const delta = normalizedValue - oldValue;
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`[Measurements] Normalized ${name} from ${oldValue} to ${normalizedValue} (${delta})`);
      _measurements[name].value = normalizedValue;
    });
    const fidMark = _measurements['mark.fid'];
    if (fidMark && _measurements['fid']) {
      // create span for FID
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["_startChild"])(transaction, {
        description: 'first input delay',
        endTimestamp: fidMark.value + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(_measurements['fid'].value),
        op: 'ui.action',
        startTimestamp: fidMark.value
      });

      // Delete mark.fid as we don't want it to be part of final payload
      delete _measurements['mark.fid'];
    }

    // If FCP is not recorded we should not record the cls value
    // according to the new definition of CLS.
    if (!('fcp' in _measurements)) {
      delete _measurements.cls;
    }
    Object.keys(_measurements).forEach(function (measurementName) {
      transaction.setMeasurement(measurementName, _measurements[measurementName].value, _measurements[measurementName].unit);
    });
    _tagMetricInfo(transaction);
  }
  _lcpEntry = undefined;
  _clsEntry = undefined;
  _measurements = {};
}

/** Create measure related spans */
function _addMeasureSpans(transaction,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
entry, startTime, duration, timeOrigin) {
  const measureStartTimestamp = timeOrigin + startTime;
  const measureEndTimestamp = measureStartTimestamp + duration;
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["_startChild"])(transaction, {
    description: entry.name,
    endTimestamp: measureEndTimestamp,
    op: entry.entryType,
    startTimestamp: measureStartTimestamp
  });
  return measureStartTimestamp;
}

/** Instrument navigation entries */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _addNavigationSpans(transaction, entry, timeOrigin) {
  ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach(function (event) {
    _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
  });
  _addPerformanceNavigationTiming(transaction, entry, 'secureConnection', timeOrigin, 'TLS/SSL', 'connectEnd');
  _addPerformanceNavigationTiming(transaction, entry, 'fetch', timeOrigin, 'cache', 'domainLookupStart');
  _addPerformanceNavigationTiming(transaction, entry, 'domainLookup', timeOrigin, 'DNS');
  _addRequest(transaction, entry, timeOrigin);
}

/** Create performance navigation related spans */
function _addPerformanceNavigationTiming(transaction,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
entry, event, timeOrigin, description, eventEnd) {
  const end = eventEnd ? entry[eventEnd] : entry[`${event}End`];
  const start = entry[`${event}Start`];
  if (!start || !end) {
    return;
  }
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["_startChild"])(transaction, {
    op: 'browser',
    description: Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__["_nullishCoalesce"])(description, function () {
      return event;
    }),
    startTimestamp: timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(start),
    endTimestamp: timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(end)
  });
}

/** Create request and response related spans */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _addRequest(transaction, entry, timeOrigin) {
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["_startChild"])(transaction, {
    op: 'browser',
    description: 'request',
    startTimestamp: timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.requestStart),
    endTimestamp: timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.responseEnd)
  });
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["_startChild"])(transaction, {
    op: 'browser',
    description: 'response',
    startTimestamp: timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.responseStart),
    endTimestamp: timeOrigin + Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["msToSec"])(entry.responseEnd)
  });
}

/** Create resource-related spans */
function _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
  // we already instrument based on fetch and xhr, so we don't need to
  // duplicate spans here.
  if (entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch') {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = {};
  if ('transferSize' in entry) {
    data['Transfer Size'] = entry.transferSize;
  }
  if ('encodedBodySize' in entry) {
    data['Encoded Body Size'] = entry.encodedBodySize;
  }
  if ('decodedBodySize' in entry) {
    data['Decoded Body Size'] = entry.decodedBodySize;
  }
  const startTimestamp = timeOrigin + startTime;
  const endTimestamp = startTimestamp + duration;
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["_startChild"])(transaction, {
    description: resourceName,
    endTimestamp,
    op: entry.initiatorType ? `resource.${entry.initiatorType}` : 'resource.other',
    startTimestamp,
    data
  });
}

/**
 * Capture the information of the user agent.
 */
function _trackNavigator(transaction) {
  const navigator = _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].navigator;
  if (!navigator) {
    return;
  }

  // track network connectivity
  const connection = navigator.connection;
  if (connection) {
    if (connection.effectiveType) {
      transaction.setTag('effectiveConnectionType', connection.effectiveType);
    }
    if (connection.type) {
      transaction.setTag('connectionType', connection.type);
    }
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["isMeasurementValue"])(connection.rtt)) {
      _measurements['connection.rtt'] = {
        value: connection.rtt,
        unit: 'millisecond'
      };
    }
  }
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["isMeasurementValue"])(navigator.deviceMemory)) {
    transaction.setTag('deviceMemory', `${navigator.deviceMemory} GB`);
  }
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_8__["isMeasurementValue"])(navigator.hardwareConcurrency)) {
    transaction.setTag('hardwareConcurrency', String(navigator.hardwareConcurrency));
  }
}

/** Add LCP / CLS data to transaction to allow debugging */
function _tagMetricInfo(transaction) {
  if (_lcpEntry) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Measurements] Adding LCP Data');

    // Capture Properties of the LCP element that contributes to the LCP.

    if (_lcpEntry.element) {
      transaction.setTag('lcp.element', Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"])(_lcpEntry.element));
    }
    if (_lcpEntry.id) {
      transaction.setTag('lcp.id', _lcpEntry.id);
    }
    if (_lcpEntry.url) {
      // Trim URL to the first 200 characters.
      transaction.setTag('lcp.url', _lcpEntry.url.trim().slice(0, 200));
    }
    transaction.setTag('lcp.size', _lcpEntry.size);
  }

  // See: https://developer.mozilla.org/en-US/docs/Web/API/LayoutShift
  if (_clsEntry && _clsEntry.sources) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log('[Measurements] Adding CLS Data');
    _clsEntry.sources.forEach(function (source, index) {
      return transaction.setTag(`cls.source.${index + 1}`, Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"])(source.node));
    });
  }
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/metrics/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/metrics/utils.js ***!
  \*******************************************************************/
/*! exports provided: _startChild, isMeasurementValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startChild", function() { return _startChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMeasurementValue", function() { return isMeasurementValue; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);


const _excluded = ["startTimestamp"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Checks if a given value is a valid measurement value.
 */
function isMeasurementValue(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Helper function to start child on transactions. This function will make sure that the transaction will
 * use the start timestamp of the created child span if it is earlier than the transactions actual
 * start timestamp.
 */
function _startChild(transaction, _ref) {
  let startTimestamp = _ref.startTimestamp,
    ctx = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);
  if (startTimestamp && transaction.startTimestamp > startTimestamp) {
    transaction.startTimestamp = startTimestamp;
  }
  return transaction.startChild(_objectSpread({
    startTimestamp
  }, ctx));
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/request.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/request.js ***!
  \*************************************************************/
/*! exports provided: DEFAULT_TRACING_ORIGINS, defaultRequestInstrumentationOptions, fetchCallback, instrumentOutgoingRequests, xhrCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRACING_ORIGINS", function() { return DEFAULT_TRACING_ORIGINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRequestInstrumentationOptions", function() { return defaultRequestInstrumentationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCallback", function() { return fetchCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instrumentOutgoingRequests", function() { return instrumentOutgoingRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhrCallback", function() { return xhrCallback; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@sentry/tracing/esm/utils.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const DEFAULT_TRACING_ORIGINS = ['localhost', /^\//];

/** Options for Request Instrumentation */

const defaultRequestInstrumentationOptions = {
  traceFetch: true,
  traceXHR: true,
  tracingOrigins: DEFAULT_TRACING_ORIGINS
};

/** Registers span creators for xhr and fetch requests  */
function instrumentOutgoingRequests(_options) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const _defaultRequestInstru = _objectSpread(_objectSpread({}, defaultRequestInstrumentationOptions), _options),
    traceFetch = _defaultRequestInstru.traceFetch,
    traceXHR = _defaultRequestInstru.traceXHR,
    tracingOrigins = _defaultRequestInstru.tracingOrigins,
    shouldCreateSpanForRequest = _defaultRequestInstru.shouldCreateSpanForRequest;

  // We should cache url -> decision so that we don't have to compute
  // regexp everytime we create a request.
  const urlMap = {};
  const defaultShouldCreateSpan = function (url) {
    if (urlMap[url]) {
      return urlMap[url];
    }
    const origins = tracingOrigins;
    urlMap[url] = origins.some(function (origin) {
      return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isMatchingPattern"])(url, origin);
    }) && !Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isMatchingPattern"])(url, 'sentry_key');
    return urlMap[url];
  };

  // We want that our users don't have to re-implement shouldCreateSpanForRequest themselves
  // That's why we filter out already unwanted Spans from tracingOrigins
  let shouldCreateSpan = defaultShouldCreateSpan;
  if (typeof shouldCreateSpanForRequest === 'function') {
    shouldCreateSpan = function (url) {
      return defaultShouldCreateSpan(url) && shouldCreateSpanForRequest(url);
    };
  }
  const spans = {};
  if (traceFetch) {
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addInstrumentationHandler"])('fetch', function (handlerData) {
      fetchCallback(handlerData, shouldCreateSpan, spans);
    });
  }
  if (traceXHR) {
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addInstrumentationHandler"])('xhr', function (handlerData) {
      xhrCallback(handlerData, shouldCreateSpan, spans);
    });
  }
}

/**
 * Create and track fetch request spans
 */
function fetchCallback(handlerData, shouldCreateSpan, spans) {
  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hasTracingEnabled"])() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) {
    return;
  }
  if (handlerData.endTimestamp) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId) return;
    const span = spans[spanId];
    if (span) {
      if (handlerData.response) {
        // TODO (kmclb) remove this once types PR goes through
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        span.setHttpStatus(handlerData.response.status);
      } else if (handlerData.error) {
        span.setStatus('internal_error');
      }
      span.finish();

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete spans[spanId];
    }
    return;
  }
  const activeTransaction = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getActiveTransaction"])();
  if (activeTransaction) {
    const span = activeTransaction.startChild({
      data: _objectSpread(_objectSpread({}, handlerData.fetchData), {}, {
        type: 'fetch'
      }),
      description: `${handlerData.fetchData.method} ${handlerData.fetchData.url}`,
      op: 'http.client'
    });
    handlerData.fetchData.__span = span.spanId;
    spans[span.spanId] = span;
    const request = handlerData.args[0];

    // In case the user hasn't set the second argument of a fetch call we default it to `{}`.
    handlerData.args[1] = handlerData.args[1] || {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options = handlerData.args[1];
    options.headers = addTracingHeadersToFetchRequest(request, activeTransaction.getDynamicSamplingContext(), span, options);
    activeTransaction.metadata.propagations += 1;
  }
}
function addTracingHeadersToFetchRequest(request, dynamicSamplingContext, span, options) {
  const sentryBaggageHeader = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["dynamicSamplingContextToSentryBaggageHeader"])(dynamicSamplingContext);
  const sentryTraceHeader = span.toTraceparent();
  const headers = typeof Request !== 'undefined' && Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(request, Request) ? request.headers : options.headers;
  if (!headers) {
    return {
      'sentry-trace': sentryTraceHeader,
      baggage: sentryBaggageHeader
    };
  } else if (typeof Headers !== 'undefined' && Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(headers, Headers)) {
    const newHeaders = new Headers(headers);
    newHeaders.append('sentry-trace', sentryTraceHeader);
    if (sentryBaggageHeader) {
      // If the same header is appended miultiple times the browser will merge the values into a single request header.
      // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
      newHeaders.append(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["BAGGAGE_HEADER_NAME"], sentryBaggageHeader);
    }
    return newHeaders;
  } else if (Array.isArray(headers)) {
    const newHeaders = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(headers), [['sentry-trace', sentryTraceHeader]]);
    if (sentryBaggageHeader) {
      // If there are multiple entries with the same key, the browser will merge the values into a single request header.
      // Its therefore safe to simply push a "baggage" entry, even though there might already be another baggage header.
      newHeaders.push([_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["BAGGAGE_HEADER_NAME"], sentryBaggageHeader]);
    }
    return newHeaders;
  } else {
    const existingBaggageHeader = 'baggage' in headers ? headers.baggage : undefined;
    const newBaggageHeaders = [];
    if (Array.isArray(existingBaggageHeader)) {
      newBaggageHeaders.push.apply(newBaggageHeaders, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(existingBaggageHeader));
    } else if (existingBaggageHeader) {
      newBaggageHeaders.push(existingBaggageHeader);
    }
    if (sentryBaggageHeader) {
      newBaggageHeaders.push(sentryBaggageHeader);
    }
    return _objectSpread(_objectSpread({}, headers), {}, {
      'sentry-trace': sentryTraceHeader,
      baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(',') : undefined
    });
  }
}

/**
 * Create and track xhr request spans
 */
function xhrCallback(handlerData, shouldCreateSpan, spans) {
  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hasTracingEnabled"])() || handlerData.xhr && handlerData.xhr.__sentry_own_request__ || !(handlerData.xhr && handlerData.xhr.__sentry_xhr__ && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))) {
    return;
  }
  const xhr = handlerData.xhr.__sentry_xhr__;

  // check first if the request has finished and is tracked by an existing span which should now end
  if (handlerData.endTimestamp) {
    const spanId = handlerData.xhr.__sentry_xhr_span_id__;
    if (!spanId) return;
    const span = spans[spanId];
    if (span) {
      span.setHttpStatus(xhr.status_code);
      span.finish();

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete spans[spanId];
    }
    return;
  }

  // if not, create a new span to track it
  const activeTransaction = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getActiveTransaction"])();
  if (activeTransaction) {
    const span = activeTransaction.startChild({
      data: _objectSpread(_objectSpread({}, xhr.data), {}, {
        type: 'xhr',
        method: xhr.method,
        url: xhr.url
      }),
      description: `${xhr.method} ${xhr.url}`,
      op: 'http.client'
    });
    handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
    spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
    if (handlerData.xhr.setRequestHeader) {
      try {
        handlerData.xhr.setRequestHeader('sentry-trace', span.toTraceparent());
        const dynamicSamplingContext = activeTransaction.getDynamicSamplingContext();
        const sentryBaggageHeader = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["dynamicSamplingContextToSentryBaggageHeader"])(dynamicSamplingContext);
        if (sentryBaggageHeader) {
          // From MDN: "If this method is called several times with the same header, the values are merged into one single request header."
          // We can therefore simply set a baggage header without checking what was there before
          // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
          handlerData.xhr.setRequestHeader(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["BAGGAGE_HEADER_NAME"], sentryBaggageHeader);
        }
        activeTransaction.metadata.propagations += 1;
      } catch (_) {
        // Error: InvalidStateError: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/router.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/router.js ***!
  \************************************************************/
/*! exports provided: instrumentRoutingWithDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instrumentRoutingWithDefaults", function() { return instrumentRoutingWithDefaults; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/**
 * Default function implementing pageload and navigation transactions
 */
function instrumentRoutingWithDefaults(customStartTransaction) {
  let startTransactionOnPageLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  let startTransactionOnLocationChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"] || !_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].location) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Could not initialize routing instrumentation due to invalid location');
    return;
  }
  let startingUrl = _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].location.href;
  let activeTransaction;
  if (startTransactionOnPageLoad) {
    activeTransaction = customStartTransaction({
      name: _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].location.pathname,
      op: 'pageload',
      metadata: {
        source: 'url'
      }
    });
  }
  if (startTransactionOnLocationChange) {
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addInstrumentationHandler"])('history', function (_ref) {
      let to = _ref.to,
        from = _ref.from;
      /**
       * This early return is there to account for some cases where a navigation transaction starts right after
       * long-running pageload. We make sure that if `from` is undefined and a valid `startingURL` exists, we don't
       * create an uneccessary navigation transaction.
       *
       * This was hard to duplicate, but this behavior stopped as soon as this fix was applied. This issue might also
       * only be caused in certain development environments where the usage of a hot module reloader is causing
       * errors.
       */
      if (from === undefined && startingUrl && startingUrl.indexOf(to) !== -1) {
        startingUrl = undefined;
        return;
      }
      if (from !== to) {
        startingUrl = undefined;
        if (activeTransaction) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`[Tracing] Finishing current transaction with op: ${activeTransaction.op}`);
          // If there's an open transaction on the scope, we need to finish it before creating an new one.
          activeTransaction.finish();
        }
        activeTransaction = customStartTransaction({
          name: _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].location.pathname,
          op: 'navigation',
          metadata: {
            source: 'url'
          }
        });
      }
    });
  }
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getCLS.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/getCLS.js ***!
  \***********************************************************************/
/*! exports provided: getCLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return getCLS; });
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/initMetric.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/observe.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/onHidden.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js");





/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// https://wicg.github.io/layout-instability/#sec-layout-shift

const getCLS = function (onReport, reportAllChanges) {
  const metric = Object(_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_1__["initMetric"])('CLS', 0);
  let report;
  let sessionValue = 0;
  let sessionEntries = [];
  const entryHandler = function (entry) {
    // Only count layout shifts without recent user input.
    // TODO: Figure out why entry can be undefined
    if (entry && !entry.hadRecentInput) {
      const firstSessionEntry = sessionEntries[0];
      const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

      // If the entry occurred less than 1 second after the previous entry and
      // less than 5 seconds after the first entry in the session, include the
      // entry in the current session. Otherwise, start a new session.
      if (sessionValue && sessionEntries.length !== 0 && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
        sessionValue += entry.value;
        sessionEntries.push(entry);
      } else {
        sessionValue = entry.value;
        sessionEntries = [entry];
      }

      // If the current session value is larger than the current CLS value,
      // update CLS and the entries contributing to it.
      if (sessionValue > metric.value) {
        metric.value = sessionValue;
        metric.entries = sessionEntries;
        if (report) {
          report();
        }
      }
    }
  };
  const po = Object(_lib_observe_js__WEBPACK_IMPORTED_MODULE_2__["observe"])('layout-shift', entryHandler);
  if (po) {
    report = Object(_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__["bindReporter"])(onReport, metric, reportAllChanges);
    Object(_lib_onHidden_js__WEBPACK_IMPORTED_MODULE_3__["onHidden"])(function () {
      po.takeRecords().map(entryHandler);
      report(true);
    });
  }
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getFID.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/getFID.js ***!
  \***********************************************************************/
/*! exports provided: getFID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return getFID; });
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js");
/* harmony import */ var _lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/getVisibilityWatcher.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/initMetric.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/observe.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/onHidden.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js");






/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const getFID = function (onReport, reportAllChanges) {
  const visibilityWatcher = Object(_lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_1__["getVisibilityWatcher"])();
  const metric = Object(_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_2__["initMetric"])('FID');
  let report;
  const entryHandler = function (entry) {
    // Only report if the page wasn't hidden prior to the first input.
    if (report && entry.startTime < visibilityWatcher.firstHiddenTime) {
      metric.value = entry.processingStart - entry.startTime;
      metric.entries.push(entry);
      report(true);
    }
  };
  const po = Object(_lib_observe_js__WEBPACK_IMPORTED_MODULE_3__["observe"])('first-input', entryHandler);
  if (po) {
    report = Object(_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__["bindReporter"])(onReport, metric, reportAllChanges);
    Object(_lib_onHidden_js__WEBPACK_IMPORTED_MODULE_4__["onHidden"])(function () {
      po.takeRecords().map(entryHandler);
      po.disconnect();
    }, true);
  }
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/getLCP.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/getLCP.js ***!
  \***********************************************************************/
/*! exports provided: getLCP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return getLCP; });
/* harmony import */ var _lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/bindReporter.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js");
/* harmony import */ var _lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/getVisibilityWatcher.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js");
/* harmony import */ var _lib_initMetric_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/initMetric.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js");
/* harmony import */ var _lib_observe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/observe.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js");
/* harmony import */ var _lib_onHidden_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/onHidden.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js");






/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// https://wicg.github.io/largest-contentful-paint/#sec-largest-contentful-paint-interface

const reportedMetricIDs = {};
const getLCP = function (onReport, reportAllChanges) {
  const visibilityWatcher = Object(_lib_getVisibilityWatcher_js__WEBPACK_IMPORTED_MODULE_1__["getVisibilityWatcher"])();
  const metric = Object(_lib_initMetric_js__WEBPACK_IMPORTED_MODULE_2__["initMetric"])('LCP');
  let report;
  const entryHandler = function (entry) {
    // The startTime attribute returns the value of the renderTime if it is not 0,
    // and the value of the loadTime otherwise.
    const value = entry.startTime;

    // If the page was hidden prior to paint time of the entry,
    // ignore it and mark the metric as final, otherwise add the entry.
    if (value < visibilityWatcher.firstHiddenTime) {
      metric.value = value;
      metric.entries.push(entry);
    }
    if (report) {
      report();
    }
  };
  const po = Object(_lib_observe_js__WEBPACK_IMPORTED_MODULE_3__["observe"])('largest-contentful-paint', entryHandler);
  if (po) {
    report = Object(_lib_bindReporter_js__WEBPACK_IMPORTED_MODULE_0__["bindReporter"])(onReport, metric, reportAllChanges);
    const stopListening = function () {
      if (!reportedMetricIDs[metric.id]) {
        po.takeRecords().map(entryHandler);
        po.disconnect();
        reportedMetricIDs[metric.id] = true;
        report(true);
      }
    };

    // Stop listening after input. Note: while scrolling is an input that
    // stop LCP observation, it's unreliable since it can be programmatically
    // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
    ['keydown', 'click'].forEach(function (type) {
      addEventListener(type, stopListening, {
        once: true,
        capture: true
      });
    });
    Object(_lib_onHidden_js__WEBPACK_IMPORTED_MODULE_4__["onHidden"])(stopListening, true);
  }
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/bindReporter.js ***!
  \*********************************************************************************/
/*! exports provided: bindReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindReporter", function() { return bindReporter; });
const bindReporter = function (callback, metric, reportAllChanges) {
  let prevValue;
  return function (forceReport) {
    if (metric.value >= 0) {
      if (forceReport || reportAllChanges) {
        metric.delta = metric.value - (prevValue || 0);

        // Report the metric if there's a non-zero delta or if no previous
        // value exists (which can happen in the case of the document becoming
        // hidden when the metric value is 0).
        // See: https://github.com/GoogleChrome/web-vitals/issues/14
        if (metric.delta || prevValue === undefined) {
          prevValue = metric.value;
          callback(metric);
        }
      }
    }
  };
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/generateUniqueID.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/generateUniqueID.js ***!
  \*************************************************************************************/
/*! exports provided: generateUniqueID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueID", function() { return generateUniqueID; });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */
const generateUniqueID = function () {
  return `v2-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/getVisibilityWatcher.js ***!
  \*****************************************************************************************/
/*! exports provided: getVisibilityWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibilityWatcher", function() { return getVisibilityWatcher; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _onHidden_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onHidden.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js");



/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let firstHiddenTime = -1;
const initHiddenTime = function () {
  return _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].document.visibilityState === 'hidden' ? 0 : Infinity;
};
const trackChanges = function () {
  // Update the time if/when the document becomes hidden.
  Object(_onHidden_js__WEBPACK_IMPORTED_MODULE_1__["onHidden"])(function (_ref) {
    let timeStamp = _ref.timeStamp;
    firstHiddenTime = timeStamp;
  }, true);
};
const getVisibilityWatcher = function () {
  if (firstHiddenTime < 0) {
    // If the document is hidden when this code runs, assume it was hidden
    // since navigation start. This isn't a perfect heuristic, but it's the
    // best we can do until an API is available to support querying past
    // visibilityState.
    firstHiddenTime = initHiddenTime();
    trackChanges();
  }
  return {
    get firstHiddenTime() {
      return firstHiddenTime;
    }
  };
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/initMetric.js ***!
  \*******************************************************************************/
/*! exports provided: initMetric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMetric", function() { return initMetric; });
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _generateUniqueID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateUniqueID.js */ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/generateUniqueID.js");


const initMetric = function (name, value) {
  return {
    name,
    value: Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_0__["_nullishCoalesce"])(value, function () {
      return -1;
    }),
    delta: 0,
    entries: [],
    id: Object(_generateUniqueID_js__WEBPACK_IMPORTED_MODULE_1__["generateUniqueID"])()
  };
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/observe.js ***!
  \****************************************************************************/
/*! exports provided: observe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Takes a performance entry type and a callback function, and creates a
 * `PerformanceObserver` instance that will observe the specified entry type
 * with buffering enabled and call the callback _for each entry_.
 *
 * This function also feature-detects entry support and wraps the logic in a
 * try/catch to avoid errors in unsupporting browsers.
 */
const observe = function (type, callback) {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) {
      // More extensive feature detect needed for Firefox due to:
      // https://github.com/GoogleChrome/web-vitals/issues/142
      if (type === 'first-input' && !('PerformanceEventTiming' in self)) {
        return;
      }
      const po = new PerformanceObserver(function (l) {
        return l.getEntries().map(callback);
      });
      po.observe({
        type,
        buffered: true
      });
      return po;
    }
  } catch (e) {
    // Do nothing.
  }
  return;
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/browser/web-vitals/lib/onHidden.js ***!
  \*****************************************************************************/
/*! exports provided: onHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHidden", function() { return onHidden; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const onHidden = function (cb, once) {
  const onHiddenOrPageHide = function (event) {
    if (event.type === 'pagehide' || _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].document.visibilityState === 'hidden') {
      cb(event);
      if (once) {
        removeEventListener('visibilitychange', onHiddenOrPageHide, true);
        removeEventListener('pagehide', onHiddenOrPageHide, true);
      }
    }
  };
  addEventListener('visibilitychange', onHiddenOrPageHide, true);
  // Some browsers have buggy implementations of visibilitychange,
  // so we use pagehide in addition, just to be safe.
  addEventListener('pagehide', onHiddenOrPageHide, true);
};


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/errors.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/errors.js ***!
  \****************************************************/
/*! exports provided: registerErrorInstrumentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerErrorInstrumentation", function() { return registerErrorInstrumentation; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@sentry/tracing/esm/utils.js");



/**
 * Configures global error listeners
 */
function registerErrorInstrumentation() {
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addInstrumentationHandler"])('error', errorCallback);
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["addInstrumentationHandler"])('unhandledrejection', errorCallback);
}

/**
 * If an error or unhandled promise occurs, we mark the active transaction as failed
 */
function errorCallback() {
  const activeTransaction = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getActiveTransaction"])();
  if (activeTransaction) {
    const status = 'internal_error';
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`[Tracing] Transaction: ${status} -> Global error occured`);
    activeTransaction.setStatus(status);
  }
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/hubextensions.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/hubextensions.js ***!
  \***********************************************************/
/*! exports provided: _addTracingExtensions, addExtensionMethods, startIdleTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_addTracingExtensions", function() { return _addTracingExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExtensionMethods", function() { return addExtensionMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startIdleTransaction", function() { return startIdleTransaction; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors.js */ "./node_modules/@sentry/tracing/esm/errors.js");
/* harmony import */ var _idletransaction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./idletransaction.js */ "./node_modules/@sentry/tracing/esm/idletransaction.js");
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction.js */ "./node_modules/@sentry/tracing/esm/transaction.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@sentry/tracing/esm/utils.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







/** Returns all trace headers that are currently on the top scope. */
function traceHeaders() {
  const scope = this.getScope();
  if (scope) {
    const span = scope.getSpan();
    if (span) {
      return {
        'sentry-trace': span.toTraceparent()
      };
    }
  }
  return {};
}

/**
 * Makes a sampling decision for the given transaction and stores it on the transaction.
 *
 * Called every time a transaction is created. Only transactions which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 *
 * @param transaction: The transaction needing a sampling decision
 * @param options: The current client's options, so we can access `tracesSampleRate` and/or `tracesSampler`
 * @param samplingContext: Default and user-provided data which may be used to help make the decision
 *
 * @returns The given transaction with its `sampled` value set
 */
function sample(transaction, options, samplingContext) {
  // nothing to do if tracing is not enabled
  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["hasTracingEnabled"])(options)) {
    transaction.sampled = false;
    return transaction;
  }

  // if the user has forced a sampling decision by passing a `sampled` value in their transaction context, go with that
  if (transaction.sampled !== undefined) {
    transaction.setMetadata({
      sampleRate: Number(transaction.sampled)
    });
    return transaction;
  }

  // we would have bailed already if neither `tracesSampler` nor `tracesSampleRate` were defined, so one of these should
  // work; prefer the hook if so
  let sampleRate;
  if (typeof options.tracesSampler === 'function') {
    sampleRate = options.tracesSampler(samplingContext);
    transaction.setMetadata({
      sampleRate: Number(sampleRate)
    });
  } else if (samplingContext.parentSampled !== undefined) {
    sampleRate = samplingContext.parentSampled;
  } else {
    sampleRate = options.tracesSampleRate;
    transaction.setMetadata({
      sampleRate: Number(sampleRate)
    });
  }

  // Since this is coming from the user (or from a function provided by the user), who knows what we might get. (The
  // only valid values are booleans or numbers between 0 and 1.)
  if (!isValidSampleRate(sampleRate)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn('[Tracing] Discarding transaction because of invalid sample rate.');
    transaction.sampled = false;
    return transaction;
  }

  // if the function returned 0 (or false), or if `tracesSampleRate` is 0, it's a sign the transaction should be dropped
  if (!sampleRate) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`[Tracing] Discarding transaction because ${typeof options.tracesSampler === 'function' ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'}`);
    transaction.sampled = false;
    return transaction;
  }

  // Now we roll the dice. Math.random is inclusive of 0, but not of 1, so strict < is safe here. In case sampleRate is
  // a boolean, the < comparison will cause it to be automatically cast to 1 if it's true and 0 if it's false.
  transaction.sampled = Math.random() < sampleRate;

  // if we're not going to keep it, we're done
  if (!transaction.sampled) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(sampleRate)})`);
    return transaction;
  }
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
  return transaction;
}

/**
 * Checks the given sample rate to make sure it is valid type and value (a boolean, or a number between 0 and 1).
 */
function isValidSampleRate(rate) {
  // we need to check NaN explicitly because it's of type 'number' and therefore wouldn't get caught by this typecheck
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isNaN"])(rate) || !(typeof rate === 'number' || typeof rate === 'boolean')) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(rate)} of type ${JSON.stringify(typeof rate)}.`);
    return false;
  }

  // in case sampleRate is a boolean, it will get automatically cast to 1 if it's true and 0 if it's false
  if (rate < 0 || rate > 1) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
    return false;
  }
  return true;
}

/**
 * Creates a new transaction and adds a sampling decision if it doesn't yet have one.
 *
 * The Hub.startTransaction method delegates to this method to do its work, passing the Hub instance in as `this`, as if
 * it had been called on the hub directly. Exists as a separate function so that it can be injected into the class as an
 * "extension method."
 *
 * @param this: The Hub starting the transaction
 * @param transactionContext: Data used to configure the transaction
 * @param CustomSamplingContext: Optional data to be provided to the `tracesSampler` function (if any)
 *
 * @returns The new transaction
 *
 * @see {@link Hub.startTransaction}
 */
function _startTransaction(transactionContext, customSamplingContext) {
  const client = this.getClient();
  const options = client && client.getOptions() || {};
  let transaction = new _transaction_js__WEBPACK_IMPORTED_MODULE_6__["Transaction"](transactionContext, this);
  transaction = sample(transaction, options, _objectSpread({
    parentSampled: transactionContext.parentSampled,
    transactionContext
  }, customSamplingContext));
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
  }
  return transaction;
}

/**
 * Create new idle transaction.
 */
function startIdleTransaction(hub, transactionContext, idleTimeout, finalTimeout, onScope, customSamplingContext, heartbeatInterval) {
  const client = hub.getClient();
  const options = client && client.getOptions() || {};
  let transaction = new _idletransaction_js__WEBPACK_IMPORTED_MODULE_5__["IdleTransaction"](transactionContext, hub, idleTimeout, finalTimeout, heartbeatInterval, onScope);
  transaction = sample(transaction, options, _objectSpread({
    parentSampled: transactionContext.parentSampled,
    transactionContext
  }, customSamplingContext));
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
  }
  return transaction;
}

/**
 * @private
 */
function _addTracingExtensions() {
  const carrier = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_2__["getMainCarrier"])();
  if (!carrier.__SENTRY__) {
    return;
  }
  carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
  if (!carrier.__SENTRY__.extensions.startTransaction) {
    carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
  }
  if (!carrier.__SENTRY__.extensions.traceHeaders) {
    carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
  }
}

/**
 * @private
 */
function _autoloadDatabaseIntegrations() {
  const carrier = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_2__["getMainCarrier"])();
  if (!carrier.__SENTRY__) {
    return;
  }
  const packageToIntegrationMapping = {
    mongodb() {
      const integration = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["dynamicRequire"])(module, './integrations/node/mongo');
      return new integration.Mongo();
    },
    mongoose() {
      const integration = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["dynamicRequire"])(module, './integrations/node/mongo');
      return new integration.Mongo({
        mongoose: true
      });
    },
    mysql() {
      const integration = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["dynamicRequire"])(module, './integrations/node/mysql');
      return new integration.Mysql();
    },
    pg() {
      const integration = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["dynamicRequire"])(module, './integrations/node/postgres');
      return new integration.Postgres();
    }
  };
  const mappedPackages = Object.keys(packageToIntegrationMapping).filter(function (moduleName) {
    return !!Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["loadModule"])(moduleName);
  }).map(function (pkg) {
    try {
      return packageToIntegrationMapping[pkg]();
    } catch (e) {
      return undefined;
    }
  }).filter(function (p) {
    return p;
  });
  if (mappedPackages.length > 0) {
    carrier.__SENTRY__.integrations = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(carrier.__SENTRY__.integrations || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(mappedPackages));
  }
}

/**
 * This patches the global object and injects the Tracing extensions methods
 */
function addExtensionMethods() {
  _addTracingExtensions();

  // Detect and automatically load specified integrations.
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isNodeEnv"])()) {
    _autoloadDatabaseIntegrations();
  }

  // If an error happens globally, we should make sure transaction status is set to error.
  Object(_errors_js__WEBPACK_IMPORTED_MODULE_4__["registerErrorInstrumentation"])();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/idletransaction.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/idletransaction.js ***!
  \*************************************************************/
/*! exports provided: DEFAULT_FINAL_TIMEOUT, DEFAULT_HEARTBEAT_INTERVAL, DEFAULT_IDLE_TIMEOUT, IdleTransaction, IdleTransactionSpanRecorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FINAL_TIMEOUT", function() { return DEFAULT_FINAL_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEARTBEAT_INTERVAL", function() { return DEFAULT_HEARTBEAT_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_IDLE_TIMEOUT", function() { return DEFAULT_IDLE_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdleTransaction", function() { return IdleTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdleTransactionSpanRecorder", function() { return IdleTransactionSpanRecorder; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _span_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./span.js */ "./node_modules/@sentry/tracing/esm/span.js");
/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transaction.js */ "./node_modules/@sentry/tracing/esm/transaction.js");







function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



const DEFAULT_IDLE_TIMEOUT = 1000;
const DEFAULT_FINAL_TIMEOUT = 30000;
const DEFAULT_HEARTBEAT_INTERVAL = 5000;

/**
 * @inheritDoc
 */
let IdleTransactionSpanRecorder = /*#__PURE__*/function (_SpanRecorder) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(IdleTransactionSpanRecorder, _SpanRecorder);
  var _super = _createSuper(IdleTransactionSpanRecorder);
  function IdleTransactionSpanRecorder(_pushActivity, _popActivity, transactionSpanId, maxlen) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, IdleTransactionSpanRecorder);
    _this = _super.call(this, maxlen);
    _this._pushActivity = _pushActivity;
    _this._popActivity = _popActivity;
    _this.transactionSpanId = transactionSpanId;
    ;
    return _this;
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(IdleTransactionSpanRecorder, [{
    key: "add",
    value: function add(span) {
      var _this2 = this;
      // We should make sure we do not push and pop activities for
      // the transaction that this span recorder belongs to.
      if (span.spanId !== this.transactionSpanId) {
        // We patch span.finish() to pop an activity after setting an endTimestamp.
        span.finish = function (endTimestamp) {
          span.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["timestampWithMs"])();
          _this2._popActivity(span.spanId);
        };

        // We should only push new activities if the span does not have an end timestamp.
        if (span.endTimestamp === undefined) {
          this._pushActivity(span.spanId);
        }
      }
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(IdleTransactionSpanRecorder.prototype), "add", this).call(this, span);
    }
  }]);
  return IdleTransactionSpanRecorder;
}(_span_js__WEBPACK_IMPORTED_MODULE_8__["SpanRecorder"]);
/**
 * An IdleTransaction is a transaction that automatically finishes. It does this by tracking child spans as activities.
 * You can have multiple IdleTransactions active, but if the `onScope` option is specified, the idle transaction will
 * put itself on the scope on creation.
 */
let IdleTransaction = /*#__PURE__*/function (_Transaction) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(IdleTransaction, _Transaction);
  var _super2 = _createSuper(IdleTransaction);
  /**
   * Timer that tracks Transaction idleTimeout
   */

  function IdleTransaction(transactionContext, _idleHub) {
    var _this3;
    let _idleTimeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_IDLE_TIMEOUT;
    let _finalTimeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_FINAL_TIMEOUT;
    let _heartbeatInterval = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : DEFAULT_HEARTBEAT_INTERVAL;
    let _onScope = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, IdleTransaction);
    _this3 = _super2.call(this, transactionContext, _idleHub);
    _this3._idleHub = _idleHub;
    _this3._idleTimeout = _idleTimeout;
    _this3._finalTimeout = _finalTimeout;
    _this3._heartbeatInterval = _heartbeatInterval;
    _this3._onScope = _onScope;
    IdleTransaction.prototype.__init.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this3));
    IdleTransaction.prototype.__init2.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this3));
    IdleTransaction.prototype.__init3.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this3));
    IdleTransaction.prototype.__init4.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this3));
    ;
    if (_onScope) {
      // There should only be one active transaction on the scope
      clearActiveTransaction(_idleHub);

      // We set the transaction here on the scope so error events pick up the trace
      // context and attach it to the error.
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log(`Setting idle transaction on scope. Span ID: ${_this3.spanId}`);
      _idleHub.configureScope(function (scope) {
        return scope.setSpan(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this3));
      });
    }
    _this3._startIdleTimeout();
    setTimeout(function () {
      if (!_this3._finished) {
        _this3.setStatus('deadline_exceeded');
        _this3.finish();
      }
    }, _this3._finalTimeout);
    return _this3;
  }

  /** {@inheritDoc} */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(IdleTransaction, [{
    key: "__init",
    value:
    // Activities store a list of active spans
    function __init() {
      this.activities = {};
    }

    // Track state of activities in previous heartbeat

    // Amount of times heartbeat has counted. Will cause transaction to finish after 3 beats.
  }, {
    key: "__init2",
    value: function __init2() {
      this._heartbeatCounter = 0;
    }

    // We should not use heartbeat if we finished a transaction
  }, {
    key: "__init3",
    value: function __init3() {
      this._finished = false;
    }
  }, {
    key: "__init4",
    value: function __init4() {
      this._beforeFinishCallbacks = [];
    }
  }, {
    key: "finish",
    value: function finish() {
      var _this4 = this;
      let endTimestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["timestampWithMs"])();
      this._finished = true;
      this.activities = {};
      if (this.spanRecorder) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('[Tracing] finishing IdleTransaction', new Date(endTimestamp * 1000).toISOString(), this.op);
        var _iterator = _createForOfIteratorHelper(this._beforeFinishCallbacks),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            const callback = _step.value;
            callback(this, endTimestamp);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.spanRecorder.spans = this.spanRecorder.spans.filter(function (span) {
          // If we are dealing with the transaction itself, we just return it
          if (span.spanId === _this4.spanId) {
            return true;
          }

          // We cancel all pending spans with status "cancelled" to indicate the idle transaction was finished early
          if (!span.endTimestamp) {
            span.endTimestamp = endTimestamp;
            span.setStatus('cancelled');
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('[Tracing] cancelling span since transaction ended early', JSON.stringify(span, undefined, 2));
          }
          const keepSpan = span.startTimestamp < endTimestamp;
          if (!keepSpan) {
            (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('[Tracing] discarding Span since it happened after Transaction was finished', JSON.stringify(span, undefined, 2));
          }
          return keepSpan;
        });
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('[Tracing] flushing IdleTransaction');
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('[Tracing] No active IdleTransaction');
      }

      // if `this._onScope` is `true`, the transaction put itself on the scope when it started
      if (this._onScope) {
        clearActiveTransaction(this._idleHub);
      }
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(IdleTransaction.prototype), "finish", this).call(this, endTimestamp);
    }

    /**
     * Register a callback function that gets excecuted before the transaction finishes.
     * Useful for cleanup or if you want to add any additional spans based on current context.
     *
     * This is exposed because users have no other way of running something before an idle transaction
     * finishes.
     */
  }, {
    key: "registerBeforeFinishCallback",
    value: function registerBeforeFinishCallback(callback) {
      this._beforeFinishCallbacks.push(callback);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "initSpanRecorder",
    value: function initSpanRecorder(maxlen) {
      var _this5 = this;
      if (!this.spanRecorder) {
        const pushActivity = function (id) {
          if (_this5._finished) {
            return;
          }
          _this5._pushActivity(id);
        };
        const popActivity = function (id) {
          if (_this5._finished) {
            return;
          }
          _this5._popActivity(id);
        };
        this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);

        // Start heartbeat so that transactions do not run forever.
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('Starting heartbeat');
        this._pingHeartbeat();
      }
      this.spanRecorder.add(this);
    }

    /**
     * Cancels the existing idletimeout, if there is one
     */
  }, {
    key: "_cancelIdleTimeout",
    value: function _cancelIdleTimeout() {
      if (this._idleTimeoutID) {
        clearTimeout(this._idleTimeoutID);
        this._idleTimeoutID = undefined;
      }
    }

    /**
     * Creates an idletimeout
     */
  }, {
    key: "_startIdleTimeout",
    value: function _startIdleTimeout(endTimestamp) {
      var _this6 = this;
      this._cancelIdleTimeout();
      this._idleTimeoutID = setTimeout(function () {
        if (!_this6._finished && Object.keys(_this6.activities).length === 0) {
          _this6.finish(endTimestamp);
        }
      }, this._idleTimeout);
    }

    /**
     * Start tracking a specific activity.
     * @param spanId The span id that represents the activity
     */
  }, {
    key: "_pushActivity",
    value: function _pushActivity(spanId) {
      this._cancelIdleTimeout();
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log(`[Tracing] pushActivity: ${spanId}`);
      this.activities[spanId] = true;
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('[Tracing] new activities count', Object.keys(this.activities).length);
    }

    /**
     * Remove an activity from usage
     * @param spanId The span id that represents the activity
     */
  }, {
    key: "_popActivity",
    value: function _popActivity(spanId) {
      if (this.activities[spanId]) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log(`[Tracing] popActivity ${spanId}`);
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this.activities[spanId];
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('[Tracing] new activities count', Object.keys(this.activities).length);
      }
      if (Object.keys(this.activities).length === 0) {
        // We need to add the timeout here to have the real endtimestamp of the transaction
        // Remember timestampWithMs is in seconds, timeout is in ms
        const endTimestamp = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["timestampWithMs"])() + this._idleTimeout / 1000;
        this._startIdleTimeout(endTimestamp);
      }
    }

    /**
     * Checks when entries of this.activities are not changing for 3 beats.
     * If this occurs we finish the transaction.
     */
  }, {
    key: "_beat",
    value: function _beat() {
      // We should not be running heartbeat if the idle transaction is finished.
      if (this._finished) {
        return;
      }
      const heartbeatString = Object.keys(this.activities).join('');
      if (heartbeatString === this._prevHeartbeatString) {
        this._heartbeatCounter += 1;
      } else {
        this._heartbeatCounter = 1;
      }
      this._prevHeartbeatString = heartbeatString;
      if (this._heartbeatCounter >= 3) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('[Tracing] Transaction finished because of no change for 3 heart beats');
        this.setStatus('deadline_exceeded');
        this.finish();
      } else {
        this._pingHeartbeat();
      }
    }

    /**
     * Pings the heartbeat
     */
  }, {
    key: "_pingHeartbeat",
    value: function _pingHeartbeat() {
      var _this7 = this;
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`);
      setTimeout(function () {
        _this7._beat();
      }, this._heartbeatInterval);
    }
  }]);
  return IdleTransaction;
}(_transaction_js__WEBPACK_IMPORTED_MODULE_9__["Transaction"]);
/**
 * Reset transaction on scope to `undefined`
 */
function clearActiveTransaction(hub) {
  const scope = hub.getScope();
  if (scope) {
    const transaction = scope.getTransaction();
    if (transaction) {
      scope.setSpan(undefined);
    }
  }
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/index.js ***!
  \***************************************************/
/*! exports provided: addExtensionMethods, startIdleTransaction, Integrations, Span, spanStatusfromHttpCode, SpanStatus, Transaction, IdleTransaction, getActiveTransaction, hasTracingEnabled, BROWSER_TRACING_INTEGRATION_ID, BrowserTracing, defaultRequestInstrumentationOptions, instrumentOutgoingRequests, TRACEPARENT_REGEXP, extractTraceparentData, stripUrlQueryAndFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hubextensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hubextensions.js */ "./node_modules/@sentry/tracing/esm/hubextensions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExtensionMethods", function() { return _hubextensions_js__WEBPACK_IMPORTED_MODULE_0__["addExtensionMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startIdleTransaction", function() { return _hubextensions_js__WEBPACK_IMPORTED_MODULE_0__["startIdleTransaction"]; });

/* harmony import */ var _integrations_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integrations/index.js */ "./node_modules/@sentry/tracing/esm/integrations/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return _integrations_index_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _browser_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser/index.js */ "./node_modules/@sentry/tracing/esm/browser/index.js");
/* harmony import */ var _span_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./span.js */ "./node_modules/@sentry/tracing/esm/span.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _span_js__WEBPACK_IMPORTED_MODULE_3__["Span"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spanStatusfromHttpCode", function() { return _span_js__WEBPACK_IMPORTED_MODULE_3__["spanStatusfromHttpCode"]; });

/* harmony import */ var _spanstatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spanstatus.js */ "./node_modules/@sentry/tracing/esm/spanstatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpanStatus", function() { return _spanstatus_js__WEBPACK_IMPORTED_MODULE_4__["SpanStatus"]; });

/* harmony import */ var _transaction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction.js */ "./node_modules/@sentry/tracing/esm/transaction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return _transaction_js__WEBPACK_IMPORTED_MODULE_5__["Transaction"]; });

/* harmony import */ var _idletransaction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./idletransaction.js */ "./node_modules/@sentry/tracing/esm/idletransaction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdleTransaction", function() { return _idletransaction_js__WEBPACK_IMPORTED_MODULE_6__["IdleTransaction"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@sentry/tracing/esm/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveTransaction", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_7__["getActiveTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasTracingEnabled", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_7__["hasTracingEnabled"]; });

/* harmony import */ var _browser_browsertracing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./browser/browsertracing.js */ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BROWSER_TRACING_INTEGRATION_ID", function() { return _browser_browsertracing_js__WEBPACK_IMPORTED_MODULE_8__["BROWSER_TRACING_INTEGRATION_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserTracing", function() { return _browser_browsertracing_js__WEBPACK_IMPORTED_MODULE_8__["BrowserTracing"]; });

/* harmony import */ var _browser_request_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./browser/request.js */ "./node_modules/@sentry/tracing/esm/browser/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRequestInstrumentationOptions", function() { return _browser_request_js__WEBPACK_IMPORTED_MODULE_9__["defaultRequestInstrumentationOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instrumentOutgoingRequests", function() { return _browser_request_js__WEBPACK_IMPORTED_MODULE_9__["instrumentOutgoingRequests"]; });

/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return _sentry_utils__WEBPACK_IMPORTED_MODULE_10__["TRACEPARENT_REGEXP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractTraceparentData", function() { return _sentry_utils__WEBPACK_IMPORTED_MODULE_10__["extractTraceparentData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return _sentry_utils__WEBPACK_IMPORTED_MODULE_10__["stripUrlQueryAndFragment"]; });














;
;

// Treeshakable guard to remove all code related to tracing

// Guard for tree
if (typeof __SENTRY_TRACING__ === 'undefined' || __SENTRY_TRACING__) {
  // We are patching the global object with our hub extension methods
  Object(_hubextensions_js__WEBPACK_IMPORTED_MODULE_0__["addExtensionMethods"])();
}

/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/index.js ***!
  \****************************************************************/
/*! exports provided: Express, Postgres, Mysql, Mongo, Prisma, GraphQL, Apollo, BrowserTracing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_express_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node/express.js */ "./node_modules/@sentry/tracing/esm/integrations/node/express.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Express", function() { return _node_express_js__WEBPACK_IMPORTED_MODULE_0__["Express"]; });

/* harmony import */ var _node_postgres_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/postgres.js */ "./node_modules/@sentry/tracing/esm/integrations/node/postgres.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Postgres", function() { return _node_postgres_js__WEBPACK_IMPORTED_MODULE_1__["Postgres"]; });

/* harmony import */ var _node_mysql_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node/mysql.js */ "./node_modules/@sentry/tracing/esm/integrations/node/mysql.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mysql", function() { return _node_mysql_js__WEBPACK_IMPORTED_MODULE_2__["Mysql"]; });

/* harmony import */ var _node_mongo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node/mongo.js */ "./node_modules/@sentry/tracing/esm/integrations/node/mongo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mongo", function() { return _node_mongo_js__WEBPACK_IMPORTED_MODULE_3__["Mongo"]; });

/* harmony import */ var _node_prisma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node/prisma.js */ "./node_modules/@sentry/tracing/esm/integrations/node/prisma.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prisma", function() { return _node_prisma_js__WEBPACK_IMPORTED_MODULE_4__["Prisma"]; });

/* harmony import */ var _node_graphql_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node/graphql.js */ "./node_modules/@sentry/tracing/esm/integrations/node/graphql.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQL", function() { return _node_graphql_js__WEBPACK_IMPORTED_MODULE_5__["GraphQL"]; });

/* harmony import */ var _node_apollo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node/apollo.js */ "./node_modules/@sentry/tracing/esm/integrations/node/apollo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Apollo", function() { return _node_apollo_js__WEBPACK_IMPORTED_MODULE_6__["Apollo"]; });

/* harmony import */ var _browser_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../browser/index.js */ "./node_modules/@sentry/tracing/esm/browser/index.js");
/* harmony import */ var _browser_browsertracing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../browser/browsertracing.js */ "./node_modules/@sentry/tracing/esm/browser/browsertracing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserTracing", function() { return _browser_browsertracing_js__WEBPACK_IMPORTED_MODULE_8__["BrowserTracing"]; });











/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/apollo.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/apollo.js ***!
  \**********************************************************************/
/*! exports provided: Apollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apollo", function() { return Apollo; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");





/** Tracing integration for Apollo */
let Apollo = /*#__PURE__*/function () {
  function Apollo() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Apollo);
    Apollo.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Apollo, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = Apollo.id;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setupOnce",
    value: function setupOnce(_, getCurrentHub) {
      const pkg = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["loadModule"])('apollo-server-core');
      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error('Apollo Integration was unable to require apollo-server-core package.');
        return;
      }

      /**
       * Iterate over resolvers of the ApolloServer instance before schemas are constructed.
       */
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(pkg.ApolloServerBase.prototype, 'constructSchema', function (orig) {
        return function () {
          if (!this.config.resolvers) {
            if (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) {
              if (this.config.schema) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn('Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.');
              } else if (this.config.modules) {
                _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn('Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.');
              }
              _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error('Skipping tracing as no resolvers found on the `ApolloServer` instance.');
            }
            return orig.call(this);
          }
          const resolvers = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["arrayify"])(this.config.resolvers);
          this.config.resolvers = resolvers.map(function (model) {
            Object.keys(model).forEach(function (resolverGroupName) {
              Object.keys(model[resolverGroupName]).forEach(function (resolverName) {
                if (typeof model[resolverGroupName][resolverName] !== 'function') {
                  return;
                }
                wrapResolver(model, resolverGroupName, resolverName, getCurrentHub);
              });
            });
            return model;
          });
          return orig.call(this);
        };
      });
    }
  }], [{
    key: "__initStatic",
    value: function __initStatic() {
      this.id = 'Apollo';
    }
  }]);
  return Apollo;
}();
Apollo.__initStatic();

/**
 * Wrap a single resolver which can be a parent of other resolvers and/or db operations.
 */
function wrapResolver(model, resolverGroupName, resolverName, getCurrentHub) {
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(model[resolverGroupName], resolverName, function (orig) {
    return function () {
      const scope = getCurrentHub().getScope();
      const parentSpan = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([scope, 'optionalAccess', function (_2) {
        return _2.getSpan;
      }, 'call', function (_3) {
        return _3();
      }]);
      const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([parentSpan, 'optionalAccess', function (_4) {
        return _4.startChild;
      }, 'call', function (_5) {
        return _5({
          description: `${resolverGroupName}.${resolverName}`,
          op: 'graphql.resolve'
        });
      }]);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const rv = orig.call.apply(orig, [this].concat(args));
      if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isThenable"])(rv)) {
        return rv.then(function (res) {
          Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_6) {
            return _6.finish;
          }, 'call', function (_7) {
            return _7();
          }]);
          return res;
        });
      }
      Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_8) {
        return _8.finish;
      }, 'call', function (_9) {
        return _9();
      }]);
      return rv;
    };
  });
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/express.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/express.js ***!
  \***********************************************************************/
/*! exports provided: Express */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Express", function() { return Express; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");






/**
 * Express integration
 *
 * Provides an request and error handler for Express framework as well as tracing capabilities
 */
let Express = /*#__PURE__*/function () {
  /**
   * Express App instance
   */

  /**
   * @inheritDoc
   */
  function Express() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Express);
    ;
    Express.prototype.__init.call(this);
    this._router = options.router || options.app;
    this._methods = (Array.isArray(options.methods) ? options.methods : []).concat('use');
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Express, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = Express.id;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce() {
      if (!this._router) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].error('ExpressIntegration is missing an Express instance');
        return;
      }
      instrumentMiddlewares(this._router, this._methods);
      instrumentRouter(this._router);
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = 'Express';
    }
  }]);
  return Express;
}();
Express.__initStatic();

/**
 * Wraps original middleware function in a tracing call, which stores the info about the call as a span,
 * and finishes it once the middleware is done invoking.
 *
 * Express middlewares have 3 various forms, thus we have to take care of all of them:
 * // sync
 * app.use(function (req, res) { ... })
 * // async
 * app.use(function (req, res, next) { ... })
 * // error handler
 * app.use(function (err, req, res, next) { ... })
 *
 * They all internally delegate to the `router[method]` of the given application instance.
 */
// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
function wrap(fn, method) {
  const arity = fn.length;
  switch (arity) {
    case 2:
      {
        return function (req, res) {
          const transaction = res.__sentry_transaction;
          if (transaction) {
            const span = transaction.startChild({
              description: fn.name,
              op: `middleware.express.${method}`
            });
            res.once('finish', function () {
              span.finish();
            });
          }
          return fn.call(this, req, res);
        };
      }
    case 3:
      {
        return function (req, res, next) {
          const transaction = res.__sentry_transaction;
          const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_optionalChain"])([transaction, 'optionalAccess', function (_) {
            return _.startChild;
          }, 'call', function (_2) {
            return _2({
              description: fn.name,
              op: `express.middleware.${method}`
            });
          }]);
          fn.call(this, req, res, function () {
            Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_optionalChain"])([span, 'optionalAccess', function (_3) {
              return _3.finish;
            }, 'call', function (_4) {
              return _4();
            }]);
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            next.call.apply(next, [this].concat(args));
          });
        };
      }
    case 4:
      {
        return function (err, req, res, next) {
          const transaction = res.__sentry_transaction;
          const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_optionalChain"])([transaction, 'optionalAccess', function (_5) {
            return _5.startChild;
          }, 'call', function (_6) {
            return _6({
              description: fn.name,
              op: `express.middleware.${method}`
            });
          }]);
          fn.call(this, err, req, res, function () {
            Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_optionalChain"])([span, 'optionalAccess', function (_7) {
              return _7.finish;
            }, 'call', function (_8) {
              return _8();
            }]);
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            next.call.apply(next, [this].concat(args));
          });
        };
      }
    default:
      {
        throw new Error(`Express middleware takes 2-4 arguments. Got: ${arity}`);
      }
  }
}

/**
 * Takes all the function arguments passed to the original `app` or `router` method, eg. `app.use` or `router.use`
 * and wraps every function, as well as array of functions with a call to our `wrap` method.
 * We have to take care of the arrays as well as iterate over all of the arguments,
 * as `app.use` can accept middlewares in few various forms.
 *
 * app.use([<path>], <fn>)
 * app.use([<path>], <fn>, ...<fn>)
 * app.use([<path>], ...<fn>[])
 */
function wrapMiddlewareArgs(args, method) {
  return args.map(function (arg) {
    if (typeof arg === 'function') {
      return wrap(arg, method);
    }
    if (Array.isArray(arg)) {
      return arg.map(function (a) {
        if (typeof a === 'function') {
          return wrap(a, method);
        }
        return a;
      });
    }
    return arg;
  });
}

/**
 * Patches original router to utilize our tracing functionality
 */
function patchMiddleware(router, method) {
  const originalCallback = router[method];
  router[method] = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return originalCallback.call.apply(originalCallback, [this].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(wrapMiddlewareArgs(args, method))));
  };
  return router;
}

/**
 * Patches original router methods
 */
function instrumentMiddlewares(router) {
  let methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  methods.forEach(function (method) {
    return patchMiddleware(router, method);
  });
}

/**
 * Patches the prototype of Express.Router to accumulate the resolved route
 * if a layer instance's `match` function was called and it returned a successful match.
 *
 * @see https://github.com/expressjs/express/blob/master/lib/router/index.js
 *
 * @param appOrRouter the router instance which can either be an app (i.e. top-level) or a (nested) router.
 */
function instrumentRouter(appOrRouter) {
  // This is how we can distinguish between app and routers
  const isApp = ('settings' in appOrRouter);

  // In case the app's top-level router hasn't been initialized yet, we have to do it now
  if (isApp && appOrRouter._router === undefined && appOrRouter.lazyrouter) {
    appOrRouter.lazyrouter();
  }
  const router = isApp ? appOrRouter._router : appOrRouter;
  if (!router) {
    /*
    If we end up here, this means likely that this integration is used with Express 3 or Express 5.
    For now, we don't support these versions (3 is very old and 5 is still in beta). To support Express 5,
    we'd need to make more changes to the routing instrumentation because the router is no longer part of
    the Express core package but maintained in its own package. The new router has different function
    signatures and works slightly differently, demanding more changes than just taking the router from
    `app.router` instead of `app._router`.
    @see https://github.com/pillarjs/router
     TODO: Proper Express 5 support
    */
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].debug('Cannot instrument router for URL Parameterization (did not find a valid router).');
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].debug('Routing instrumentation is currently only supported in Express 4.');
    return;
  }
  const routerProto = Object.getPrototypeOf(router);
  const originalProcessParams = routerProto.process_params;
  routerProto.process_params = function process_params(layer, called, req, res, done) {
    // Base case: We're in the first part of the URL (thus we start with the root '/')
    if (!req._reconstructedRoute) {
      req._reconstructedRoute = '';
    }

    // If the layer's partial route has params, is a regex or an array, the route is stored in layer.route.
    const _getLayerRoutePathInf = getLayerRoutePathInfo(layer),
      layerRoutePath = _getLayerRoutePathInf.layerRoutePath,
      isRegex = _getLayerRoutePathInf.isRegex,
      isArray = _getLayerRoutePathInf.isArray,
      numExtraSegments = _getLayerRoutePathInf.numExtraSegments;

    // Otherwise, the hardcoded path (i.e. a partial route without params) is stored in layer.path
    const partialRoute = layerRoutePath || layer.path || '';

    // Normalize the partial route so that it doesn't contain leading or trailing slashes
    // and exclude empty or '*' wildcard routes.
    // The exclusion of '*' routes is our best effort to not "pollute" the transaction name
    // with interim handlers (e.g. ones that check authentication or do other middleware stuff).
    // We want to end up with the parameterized URL of the incoming request without any extraneous path segments.
    const finalPartialRoute = partialRoute.split('/').filter(function (segment) {
      return segment.length > 0 && (isRegex || isArray || !segment.includes('*'));
    }).join('/');

    // If we found a valid partial URL, we append it to the reconstructed route
    if (finalPartialRoute && finalPartialRoute.length > 0) {
      // If the partial route is from a regex route, we append a '/' to close the regex
      req._reconstructedRoute += `/${finalPartialRoute}${isRegex ? '/' : ''}`;
    }

    // Now we check if we are in the "last" part of the route. We determine this by comparing the
    // number of URL segments from the original URL to that of our reconstructed parameterized URL.
    // If we've reached our final destination, we update the transaction name.
    const urlLength = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["getNumberOfUrlSegments"])(req.originalUrl || '') + numExtraSegments;
    const routeLength = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["getNumberOfUrlSegments"])(req._reconstructedRoute);
    if (urlLength === routeLength) {
      const transaction = res.__sentry_transaction;
      if (transaction && transaction.metadata.source !== 'custom') {
        // If the request URL is '/' or empty, the reconstructed route will be empty.
        // Therefore, we fall back to setting the final route to '/' in this case.
        const finalRoute = req._reconstructedRoute || '/';
        transaction.setName.apply(transaction, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["extractPathForTransaction"])(req, {
          path: true,
          method: true,
          customRoute: finalRoute
        })));
      }
    }
    return originalProcessParams.call(this, layer, called, req, res, done);
  };
}

/**
 * Extracts and stringifies the layer's route which can either be a string with parameters (`users/:id`),
 * a RegEx (`/test/`) or an array of strings and regexes (`['/path1', /\/path[2-5]/, /path/:id]`). Additionally
 * returns extra information about the route, such as if the route is defined as regex or as an array.
 *
 * @param layer the layer to extract the stringified route from
 *
 * @returns an object containing the stringified route, a flag determining if the route was a regex
 *          and the number of extra segments to the matched path that are additionally in the route,
 *          if the route was an array (defaults to 0).
 */
function getLayerRoutePathInfo(layer) {
  const lrp = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_optionalChain"])([layer, 'access', function (_9) {
    return _9.route;
  }, 'optionalAccess', function (_10) {
    return _10.path;
  }]);
  const isRegex = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["isRegExp"])(lrp);
  const isArray = Array.isArray(lrp);
  if (!lrp) {
    return {
      isRegex,
      isArray,
      numExtraSegments: 0
    };
  }
  const numExtraSegments = isArray ? Math.max(getNumberOfArrayUrlSegments(lrp) - Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["getNumberOfUrlSegments"])(layer.path || ''), 0) : 0;
  const layerRoutePath = getLayerRoutePathString(isArray, lrp);
  return {
    layerRoutePath,
    isRegex,
    isArray,
    numExtraSegments
  };
}

/**
 * Returns the number of URL segments in an array of routes
 *
 * Example: ['/api/test', /\/api\/post[0-9]/, '/users/:id/details`] -> 7
 */
function getNumberOfArrayUrlSegments(routesArray) {
  return routesArray.reduce(function (accNumSegments, currentRoute) {
    // array members can be a RegEx -> convert them toString
    return accNumSegments + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["getNumberOfUrlSegments"])(currentRoute.toString());
  }, 0);
}

/**
 * Extracts and returns the stringified version of the layers route path
 * Handles route arrays (by joining the paths together) as well as RegExp and normal
 * string values (in the latter case the toString conversion is technically unnecessary but
 * it doesn't hurt us either).
 */
function getLayerRoutePathString(isArray, lrp) {
  if (isArray) {
    return lrp.map(function (r) {
      return r.toString();
    }).join(',');
  }
  return lrp && lrp.toString();
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/graphql.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/graphql.js ***!
  \***********************************************************************/
/*! exports provided: GraphQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQL", function() { return GraphQL; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");





/** Tracing integration for graphql package */
let GraphQL = /*#__PURE__*/function () {
  function GraphQL() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GraphQL);
    GraphQL.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GraphQL, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = GraphQL.id;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setupOnce",
    value: function setupOnce(_, getCurrentHub) {
      const pkg = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["loadModule"])('graphql/execution/execute.js');
      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error('GraphQL Integration was unable to require graphql/execution package.');
        return;
      }
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(pkg, 'execute', function (orig) {
        return function () {
          const scope = getCurrentHub().getScope();
          const parentSpan = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([scope, 'optionalAccess', function (_2) {
            return _2.getSpan;
          }, 'call', function (_3) {
            return _3();
          }]);
          const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([parentSpan, 'optionalAccess', function (_4) {
            return _4.startChild;
          }, 'call', function (_5) {
            return _5({
              description: 'execute',
              op: 'graphql.execute'
            });
          }]);
          Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([scope, 'optionalAccess', function (_6) {
            return _6.setSpan;
          }, 'call', function (_7) {
            return _7(span);
          }]);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          const rv = orig.call.apply(orig, [this].concat(args));
          if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isThenable"])(rv)) {
            return rv.then(function (res) {
              Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_8) {
                return _8.finish;
              }, 'call', function (_9) {
                return _9();
              }]);
              Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([scope, 'optionalAccess', function (_10) {
                return _10.setSpan;
              }, 'call', function (_11) {
                return _11(parentSpan);
              }]);
              return res;
            });
          }
          Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_12) {
            return _12.finish;
          }, 'call', function (_13) {
            return _13();
          }]);
          Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([scope, 'optionalAccess', function (_14) {
            return _14.setSpan;
          }, 'call', function (_15) {
            return _15(parentSpan);
          }]);
          return rv;
        };
      });
    }
  }], [{
    key: "__initStatic",
    value: function __initStatic() {
      this.id = 'GraphQL';
    }
  }]);
  return GraphQL;
}();
GraphQL.__initStatic();


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/mongo.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/mongo.js ***!
  \*********************************************************************/
/*! exports provided: Mongo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mongo", function() { return Mongo; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");







// This allows us to use the same array for both defaults options and the type itself.
// (note `as const` at the end to make it a union of string literal types (i.e. "a" | "b" | ... )
// and not just a string[])

const OPERATIONS = ['aggregate',
// aggregate(pipeline, options, callback)
'bulkWrite',
// bulkWrite(operations, options, callback)
'countDocuments',
// countDocuments(query, options, callback)
'createIndex',
// createIndex(fieldOrSpec, options, callback)
'createIndexes',
// createIndexes(indexSpecs, options, callback)
'deleteMany',
// deleteMany(filter, options, callback)
'deleteOne',
// deleteOne(filter, options, callback)
'distinct',
// distinct(key, query, options, callback)
'drop',
// drop(options, callback)
'dropIndex',
// dropIndex(indexName, options, callback)
'dropIndexes',
// dropIndexes(options, callback)
'estimatedDocumentCount',
// estimatedDocumentCount(options, callback)
'find',
// find(query, options, callback)
'findOne',
// findOne(query, options, callback)
'findOneAndDelete',
// findOneAndDelete(filter, options, callback)
'findOneAndReplace',
// findOneAndReplace(filter, replacement, options, callback)
'findOneAndUpdate',
// findOneAndUpdate(filter, update, options, callback)
'indexes',
// indexes(options, callback)
'indexExists',
// indexExists(indexes, options, callback)
'indexInformation',
// indexInformation(options, callback)
'initializeOrderedBulkOp',
// initializeOrderedBulkOp(options, callback)
'insertMany',
// insertMany(docs, options, callback)
'insertOne',
// insertOne(doc, options, callback)
'isCapped',
// isCapped(options, callback)
'mapReduce',
// mapReduce(map, reduce, options, callback)
'options',
// options(options, callback)
'parallelCollectionScan',
// parallelCollectionScan(options, callback)
'rename',
// rename(newName, options, callback)
'replaceOne',
// replaceOne(filter, doc, options, callback)
'stats',
// stats(options, callback)
'updateMany',
// updateMany(filter, update, options, callback)
'updateOne' // updateOne(filter, update, options, callback)
];

// All of the operations above take `options` and `callback` as their final parameters, but some of them
// take additional parameters as well. For those operations, this is a map of
// { <operation name>:  [<names of additional parameters>] }, as a way to know what to call the operation's
// positional arguments when we add them to the span's `data` object later
const OPERATION_SIGNATURES = {
  // aggregate intentionally not included because `pipeline` arguments are too complex to serialize well
  // see https://github.com/getsentry/sentry-javascript/pull/3102
  bulkWrite: ['operations'],
  countDocuments: ['query'],
  createIndex: ['fieldOrSpec'],
  createIndexes: ['indexSpecs'],
  deleteMany: ['filter'],
  deleteOne: ['filter'],
  distinct: ['key', 'query'],
  dropIndex: ['indexName'],
  find: ['query'],
  findOne: ['query'],
  findOneAndDelete: ['filter'],
  findOneAndReplace: ['filter', 'replacement'],
  findOneAndUpdate: ['filter', 'update'],
  indexExists: ['indexes'],
  insertMany: ['docs'],
  insertOne: ['doc'],
  mapReduce: ['map', 'reduce'],
  rename: ['newName'],
  replaceOne: ['filter', 'doc'],
  updateMany: ['filter', 'update'],
  updateOne: ['filter', 'update']
};

/** Tracing integration for mongo package */
let Mongo = /*#__PURE__*/function () {
  /**
   * @inheritDoc
   */
  function Mongo() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Mongo);
    ;
    Mongo.prototype.__init.call(this);
    this._operations = Array.isArray(options.operations) ? options.operations : OPERATIONS;
    this._describeOperations = 'describeOperations' in options ? options.describeOperations : true;
    this._useMongoose = !!options.useMongoose;
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Mongo, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = Mongo.id;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce(_, getCurrentHub) {
      const moduleName = this._useMongoose ? 'mongoose' : 'mongodb';
      const pkg = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["loadModule"])(moduleName);
      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].error(`Mongo Integration was unable to require \`${moduleName}\` package.`);
        return;
      }
      this._instrumentOperations(pkg.Collection, this._operations, getCurrentHub);
    }

    /**
     * Patches original collection methods
     */
  }, {
    key: "_instrumentOperations",
    value: function _instrumentOperations(collection, operations, getCurrentHub) {
      var _this = this;
      operations.forEach(function (operation) {
        return _this._patchOperation(collection, operation, getCurrentHub);
      });
    }

    /**
     * Patches original collection to utilize our tracing functionality
     */
  }, {
    key: "_patchOperation",
    value: function _patchOperation(collection, operation, getCurrentHub) {
      if (!(operation in collection.prototype)) return;
      const getSpanContext = this._getSpanContextFromOperationArguments.bind(this);
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["fill"])(collection.prototype, operation, function (orig) {
        return function () {
          var _this2 = this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          const lastArg = args[args.length - 1];
          const scope = getCurrentHub().getScope();
          const parentSpan = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__["_optionalChain"])([scope, 'optionalAccess', function (_2) {
            return _2.getSpan;
          }, 'call', function (_3) {
            return _3();
          }]);

          // Check if the operation was passed a callback. (mapReduce requires a different check, as
          // its (non-callback) arguments can also be functions.)
          if (typeof lastArg !== 'function' || operation === 'mapReduce' && args.length === 2) {
            const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__["_optionalChain"])([parentSpan, 'optionalAccess', function (_4) {
              return _4.startChild;
            }, 'call', function (_5) {
              return _5(getSpanContext(_this2, operation, args));
            }]);
            const maybePromise = orig.call.apply(orig, [this].concat(args));
            if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isThenable"])(maybePromise)) {
              return maybePromise.then(function (res) {
                Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__["_optionalChain"])([span, 'optionalAccess', function (_6) {
                  return _6.finish;
                }, 'call', function (_7) {
                  return _7();
                }]);
                return res;
              });
            } else {
              Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__["_optionalChain"])([span, 'optionalAccess', function (_8) {
                return _8.finish;
              }, 'call', function (_9) {
                return _9();
              }]);
              return maybePromise;
            }
          }
          const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__["_optionalChain"])([parentSpan, 'optionalAccess', function (_10) {
            return _10.startChild;
          }, 'call', function (_11) {
            return _11(getSpanContext(_this2, operation, args.slice(0, -1)));
          }]);
          return orig.call.apply(orig, [this].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(args.slice(0, -1)), [function (err, result) {
            Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_4__["_optionalChain"])([span, 'optionalAccess', function (_12) {
              return _12.finish;
            }, 'call', function (_13) {
              return _13();
            }]);
            lastArg(err, result);
          }]));
        };
      });
    }

    /**
     * Form a SpanContext based on the user input to a given operation.
     */
  }, {
    key: "_getSpanContextFromOperationArguments",
    value: function _getSpanContextFromOperationArguments(collection, operation, args) {
      const data = {
        collectionName: collection.collectionName,
        dbName: collection.dbName,
        namespace: collection.namespace
      };
      const spanContext = {
        op: 'db',
        description: operation,
        data
      };

      // If the operation takes no arguments besides `options` and `callback`, or if argument
      // collection is disabled for this operation, just return early.
      const signature = OPERATION_SIGNATURES[operation];
      const shouldDescribe = Array.isArray(this._describeOperations) ? this._describeOperations.includes(operation) : this._describeOperations;
      if (!signature || !shouldDescribe) {
        return spanContext;
      }
      try {
        // Special case for `mapReduce`, as the only one accepting functions as arguments.
        if (operation === 'mapReduce') {
          const _args = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(args, 2),
            map = _args[0],
            reduce = _args[1];
          data[signature[0]] = typeof map === 'string' ? map : map.name || '<anonymous>';
          data[signature[1]] = typeof reduce === 'string' ? reduce : reduce.name || '<anonymous>';
        } else {
          for (let i = 0; i < signature.length; i++) {
            data[signature[i]] = JSON.stringify(args[i]);
          }
        }
      } catch (_oO) {
        // no-empty
      }
      return spanContext;
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = 'Mongo';
    }
  }]);
  return Mongo;
}();
Mongo.__initStatic();


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/mysql.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/mysql.js ***!
  \*********************************************************************/
/*! exports provided: Mysql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mysql", function() { return Mysql; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");





/** Tracing integration for node-mysql package */
let Mysql = /*#__PURE__*/function () {
  function Mysql() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mysql);
    Mysql.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mysql, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = Mysql.id;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setupOnce",
    value: function setupOnce(_, getCurrentHub) {
      const pkg = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["loadModule"])('mysql/lib/Connection.js');
      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error('Mysql Integration was unable to require `mysql` package.');
        return;
      }

      // The original function will have one of these signatures:
      //    function (callback) => void
      //    function (options, callback) => void
      //    function (options, values, callback) => void
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(pkg, 'createQuery', function (orig) {
        return function (options, values, callback) {
          const scope = getCurrentHub().getScope();
          const parentSpan = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([scope, 'optionalAccess', function (_2) {
            return _2.getSpan;
          }, 'call', function (_3) {
            return _3();
          }]);
          const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([parentSpan, 'optionalAccess', function (_4) {
            return _4.startChild;
          }, 'call', function (_5) {
            return _5({
              description: typeof options === 'string' ? options : options.sql,
              op: 'db'
            });
          }]);
          if (typeof callback === 'function') {
            return orig.call(this, options, values, function (err, result, fields) {
              Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_6) {
                return _6.finish;
              }, 'call', function (_7) {
                return _7();
              }]);
              callback(err, result, fields);
            });
          }
          if (typeof values === 'function') {
            return orig.call(this, options, function (err, result, fields) {
              Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_8) {
                return _8.finish;
              }, 'call', function (_9) {
                return _9();
              }]);
              values(err, result, fields);
            });
          }
          return orig.call(this, options, values, callback);
        };
      });
    }
  }], [{
    key: "__initStatic",
    value: function __initStatic() {
      this.id = 'Mysql';
    }
  }]);
  return Mysql;
}();
Mysql.__initStatic();


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/postgres.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/postgres.js ***!
  \************************************************************************/
/*! exports provided: Postgres */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postgres", function() { return Postgres; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");





/** Tracing integration for node-postgres package */
let Postgres = /*#__PURE__*/function () {
  function Postgres() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Postgres);
    ;
    Postgres.prototype.__init.call(this);
    this._usePgNative = !!options.usePgNative;
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Postgres, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = Postgres.id;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce(_, getCurrentHub) {
      const pkg = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["loadModule"])('pg');
      if (!pkg) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error('Postgres Integration was unable to require `pg` package.');
        return;
      }
      if (this._usePgNative && !Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([pkg, 'access', function (_2) {
        return _2.native;
      }, 'optionalAccess', function (_3) {
        return _3.Client;
      }])) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error("Postgres Integration was unable to access 'pg-native' bindings.");
        return;
      }
      const _ref = this._usePgNative ? pkg.native : pkg,
        Client = _ref.Client;

      /**
       * function (query, callback) => void
       * function (query, params, callback) => void
       * function (query) => Promise
       * function (query, params) => Promise
       * function (pg.Cursor) => pg.Cursor
       */
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(Client.prototype, 'query', function (orig) {
        return function (config, values, callback) {
          const scope = getCurrentHub().getScope();
          const parentSpan = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([scope, 'optionalAccess', function (_4) {
            return _4.getSpan;
          }, 'call', function (_5) {
            return _5();
          }]);
          const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([parentSpan, 'optionalAccess', function (_6) {
            return _6.startChild;
          }, 'call', function (_7) {
            return _7({
              description: typeof config === 'string' ? config : config.text,
              op: 'db'
            });
          }]);
          if (typeof callback === 'function') {
            return orig.call(this, config, values, function (err, result) {
              Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_8) {
                return _8.finish;
              }, 'call', function (_9) {
                return _9();
              }]);
              callback(err, result);
            });
          }
          if (typeof values === 'function') {
            return orig.call(this, config, function (err, result) {
              Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_10) {
                return _10.finish;
              }, 'call', function (_11) {
                return _11();
              }]);
              values(err, result);
            });
          }
          const rv = typeof values !== 'undefined' ? orig.call(this, config, values) : orig.call(this, config);
          if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isThenable"])(rv)) {
            return rv.then(function (res) {
              Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_12) {
                return _12.finish;
              }, 'call', function (_13) {
                return _13();
              }]);
              return res;
            });
          }
          Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_14) {
            return _14.finish;
          }, 'call', function (_15) {
            return _15();
          }]);
          return rv;
        };
      });
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = 'Postgres';
    }
  }]);
  return Postgres;
}();
Postgres.__initStatic();


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/integrations/node/prisma.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/integrations/node/prisma.js ***!
  \**********************************************************************/
/*! exports provided: Prisma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prisma", function() { return Prisma; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");




function isValidPrismaClient(possibleClient) {
  return possibleClient && !!possibleClient['$use'];
}

/** Tracing integration for @prisma/client package */
let Prisma = /*#__PURE__*/function () {
  /**
   * Prisma ORM Client Instance
   */

  /**
   * @inheritDoc
   */
  function Prisma() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Prisma);
    ;
    Prisma.prototype.__init.call(this);
    if (isValidPrismaClient(options.client)) {
      this._client = options.client;
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(options.client)}`);
    }
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Prisma, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = Prisma.id;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce(_, getCurrentHub) {
      if (!this._client) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error('PrismaIntegration is missing a Prisma Client Instance');
        return;
      }
      this._client.$use(function (params, next) {
        const scope = getCurrentHub().getScope();
        const parentSpan = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([scope, 'optionalAccess', function (_2) {
          return _2.getSpan;
        }, 'call', function (_3) {
          return _3();
        }]);
        const action = params.action;
        const model = params.model;
        const span = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([parentSpan, 'optionalAccess', function (_4) {
          return _4.startChild;
        }, 'call', function (_5) {
          return _5({
            description: model ? `${model} ${action}` : action,
            op: 'db.sql.prisma'
          });
        }]);
        const rv = next(params);
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isThenable"])(rv)) {
          return rv.then(function (res) {
            Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_6) {
              return _6.finish;
            }, 'call', function (_7) {
              return _7();
            }]);
            return res;
          });
        }
        Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([span, 'optionalAccess', function (_8) {
          return _8.finish;
        }, 'call', function (_9) {
          return _9();
        }]);
        return rv;
      });
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = 'Prisma';
    }
  }]);
  return Prisma;
}();
Prisma.__initStatic();


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/span.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/span.js ***!
  \**************************************************/
/*! exports provided: Span, SpanRecorder, spanStatusfromHttpCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpanRecorder", function() { return SpanRecorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spanStatusfromHttpCode", function() { return spanStatusfromHttpCode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * Keeps track of finished spans for a given transaction
 * @internal
 * @hideconstructor
 * @hidden
 */
let SpanRecorder = /*#__PURE__*/function () {
  function SpanRecorder() {
    let maxlen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SpanRecorder);
    ;
    SpanRecorder.prototype.__init.call(this);
    this._maxlen = maxlen;
  }

  /**
   * This is just so that we don't run out of memory while recording a lot
   * of spans. At some point we just stop and flush out the start of the
   * trace tree (i.e.the first n spans with the smallest
   * start_timestamp).
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SpanRecorder, [{
    key: "__init",
    value: function __init() {
      this.spans = [];
    }
  }, {
    key: "add",
    value: function add(span) {
      if (this.spans.length > this._maxlen) {
        span.spanRecorder = undefined;
      } else {
        this.spans.push(span);
      }
    }
  }]);
  return SpanRecorder;
}();
/**
 * Span contains all data about a span
 */
let Span = /*#__PURE__*/function () {
  /**
   * List of spans that were finalized
   */

  /**
   * @inheritDoc
   */

  /**
   * You should never call the constructor manually, always use `Sentry.startTransaction()`
   * or call `startChild()` on an existing span.
   * @internal
   * @hideconstructor
   * @hidden
   */
  function Span(spanContext) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Span);
    ;
    Span.prototype.__init2.call(this);
    Span.prototype.__init3.call(this);
    Span.prototype.__init4.call(this);
    Span.prototype.__init5.call(this);
    Span.prototype.__init6.call(this);
    if (!spanContext) {
      return this;
    }
    if (spanContext.traceId) {
      this.traceId = spanContext.traceId;
    }
    if (spanContext.spanId) {
      this.spanId = spanContext.spanId;
    }
    if (spanContext.parentSpanId) {
      this.parentSpanId = spanContext.parentSpanId;
    }
    // We want to include booleans as well here
    if ('sampled' in spanContext) {
      this.sampled = spanContext.sampled;
    }
    if (spanContext.op) {
      this.op = spanContext.op;
    }
    if (spanContext.description) {
      this.description = spanContext.description;
    }
    if (spanContext.data) {
      this.data = spanContext.data;
    }
    if (spanContext.tags) {
      this.tags = spanContext.tags;
    }
    if (spanContext.status) {
      this.status = spanContext.status;
    }
    if (spanContext.startTimestamp) {
      this.startTimestamp = spanContext.startTimestamp;
    }
    if (spanContext.endTimestamp) {
      this.endTimestamp = spanContext.endTimestamp;
    }
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Span, [{
    key: "__init2",
    value:
    /**
     * @inheritDoc
     */
    function __init2() {
      this.traceId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["uuid4"])();
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "__init3",
    value: function __init3() {
      this.spanId = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["uuid4"])().substring(16);
    }

    /**
     * @inheritDoc
     */

    /**
     * Internal keeper of the status
     */

    /**
     * @inheritDoc
     */

    /**
     * Timestamp in seconds when the span was created.
     */
  }, {
    key: "__init4",
    value: function __init4() {
      this.startTimestamp = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["timestampWithMs"])();
    }

    /**
     * Timestamp in seconds when the span ended.
     */

    /**
     * @inheritDoc
     */

    /**
     * @inheritDoc
     */

    /**
     * @inheritDoc
     */
  }, {
    key: "__init5",
    value: function __init5() {
      this.tags = {};
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "__init6",
    value: function __init6() {
      this.data = {};
    }
  }, {
    key: "startChild",
    value: function startChild(spanContext) {
      const childSpan = new Span(_objectSpread(_objectSpread({}, spanContext), {}, {
        parentSpanId: this.spanId,
        sampled: this.sampled,
        traceId: this.traceId
      }));
      childSpan.spanRecorder = this.spanRecorder;
      if (childSpan.spanRecorder) {
        childSpan.spanRecorder.add(childSpan);
      }
      childSpan.transaction = this.transaction;
      if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && childSpan.transaction) {
        const opStr = spanContext && spanContext.op || '< unknown op >';
        const nameStr = childSpan.transaction.name || '< unknown name >';
        const idStr = childSpan.transaction.spanId;
        const logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
        childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = {
          logMessage
        };
        _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].log(logMessage);
      }
      return childSpan;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setTag",
    value: function setTag(key, value) {
      this.tags = _objectSpread(_objectSpread({}, this.tags), {}, {
        [key]: value
      });
      return this;
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  }, {
    key: "setData",
    value: function setData(key, value) {
      this.data = _objectSpread(_objectSpread({}, this.data), {}, {
        [key]: value
      });
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setStatus",
    value: function setStatus(value) {
      this.status = value;
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setHttpStatus",
    value: function setHttpStatus(httpStatus) {
      this.setTag('http.status_code', String(httpStatus));
      const spanStatus = spanStatusfromHttpCode(httpStatus);
      if (spanStatus !== 'unknown_error') {
        this.setStatus(spanStatus);
      }
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "isSuccess",
    value: function isSuccess() {
      return this.status === 'ok';
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "finish",
    value: function finish(endTimestamp) {
      if ((typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) &&
      // Don't call this for transactions
      this.transaction && this.transaction.spanId !== this.spanId) {
        const logMessage = this.transaction.metadata.spanMetadata[this.spanId].logMessage;
        if (logMessage) {
          _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].log(logMessage.replace('Starting', 'Finishing'));
        }
      }
      this.endTimestamp = typeof endTimestamp === 'number' ? endTimestamp : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["timestampWithMs"])();
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "toTraceparent",
    value: function toTraceparent() {
      let sampledString = '';
      if (this.sampled !== undefined) {
        sampledString = this.sampled ? '-1' : '-0';
      }
      return `${this.traceId}-${this.spanId}${sampledString}`;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "toContext",
    value: function toContext() {
      return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["dropUndefinedKeys"])({
        data: this.data,
        description: this.description,
        endTimestamp: this.endTimestamp,
        op: this.op,
        parentSpanId: this.parentSpanId,
        sampled: this.sampled,
        spanId: this.spanId,
        startTimestamp: this.startTimestamp,
        status: this.status,
        tags: this.tags,
        traceId: this.traceId
      });
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "updateWithContext",
    value: function updateWithContext(spanContext) {
      var _this = this;
      this.data = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_nullishCoalesce"])(spanContext.data, function () {
        return {};
      });
      this.description = spanContext.description;
      this.endTimestamp = spanContext.endTimestamp;
      this.op = spanContext.op;
      this.parentSpanId = spanContext.parentSpanId;
      this.sampled = spanContext.sampled;
      this.spanId = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_nullishCoalesce"])(spanContext.spanId, function () {
        return _this.spanId;
      });
      this.startTimestamp = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_nullishCoalesce"])(spanContext.startTimestamp, function () {
        return _this.startTimestamp;
      });
      this.status = spanContext.status;
      this.tags = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_nullishCoalesce"])(spanContext.tags, function () {
        return {};
      });
      this.traceId = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_3__["_nullishCoalesce"])(spanContext.traceId, function () {
        return _this.traceId;
      });
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getTraceContext",
    value: function getTraceContext() {
      return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["dropUndefinedKeys"])({
        data: Object.keys(this.data).length > 0 ? this.data : undefined,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
        trace_id: this.traceId
      });
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "toJSON",
    value: function toJSON() {
      return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["dropUndefinedKeys"])({
        data: Object.keys(this.data).length > 0 ? this.data : undefined,
        description: this.description,
        op: this.op,
        parent_span_id: this.parentSpanId,
        span_id: this.spanId,
        start_timestamp: this.startTimestamp,
        status: this.status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : undefined,
        timestamp: this.endTimestamp,
        trace_id: this.traceId
      });
    }
  }]);
  return Span;
}();
/**
 * Converts a HTTP status code into a {@link SpanStatusType}.
 *
 * @param httpStatus The HTTP response status code.
 * @returns The span status or unknown_error.
 */
function spanStatusfromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return 'ok';
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return 'unauthenticated';
      case 403:
        return 'permission_denied';
      case 404:
        return 'not_found';
      case 409:
        return 'already_exists';
      case 413:
        return 'failed_precondition';
      case 429:
        return 'resource_exhausted';
      default:
        return 'invalid_argument';
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return 'unimplemented';
      case 503:
        return 'unavailable';
      case 504:
        return 'deadline_exceeded';
      default:
        return 'internal_error';
    }
  }
  return 'unknown_error';
}


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/spanstatus.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/spanstatus.js ***!
  \********************************************************/
/*! exports provided: SpanStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpanStatus", function() { return SpanStatus; });
/** The status of an Span.
 *
 * @deprecated Use string literals - if you require type casting, cast to SpanStatusType type
 */
// eslint-disable-next-line import/export
var SpanStatus;
(function (SpanStatus) {
  /** The operation completed successfully. */
  const Ok = 'ok';
  SpanStatus["Ok"] = Ok;
  /** Deadline expired before operation could complete. */
  const DeadlineExceeded = 'deadline_exceeded';
  SpanStatus["DeadlineExceeded"] = DeadlineExceeded;
  /** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
  const Unauthenticated = 'unauthenticated';
  SpanStatus["Unauthenticated"] = Unauthenticated;
  /** 403 Forbidden */
  const PermissionDenied = 'permission_denied';
  SpanStatus["PermissionDenied"] = PermissionDenied;
  /** 404 Not Found. Some requested entity (file or directory) was not found. */
  const NotFound = 'not_found';
  SpanStatus["NotFound"] = NotFound;
  /** 429 Too Many Requests */
  const ResourceExhausted = 'resource_exhausted';
  SpanStatus["ResourceExhausted"] = ResourceExhausted;
  /** Client specified an invalid argument. 4xx. */
  const InvalidArgument = 'invalid_argument';
  SpanStatus["InvalidArgument"] = InvalidArgument;
  /** 501 Not Implemented */
  const Unimplemented = 'unimplemented';
  SpanStatus["Unimplemented"] = Unimplemented;
  /** 503 Service Unavailable */
  const Unavailable = 'unavailable';
  SpanStatus["Unavailable"] = Unavailable;
  /** Other/generic 5xx. */
  const InternalError = 'internal_error';
  SpanStatus["InternalError"] = InternalError;
  /** Unknown. Any non-standard HTTP status code. */
  const UnknownError = 'unknown_error';
  SpanStatus["UnknownError"] = UnknownError;
  /** The operation was cancelled (typically by the user). */
  const Cancelled = 'cancelled';
  SpanStatus["Cancelled"] = Cancelled;
  /** Already exists (409) */
  const AlreadyExists = 'already_exists';
  SpanStatus["AlreadyExists"] = AlreadyExists;
  /** Operation was rejected because the system is not in a state required for the operation's */
  const FailedPrecondition = 'failed_precondition';
  SpanStatus["FailedPrecondition"] = FailedPrecondition;
  /** The operation was aborted, typically due to a concurrency issue. */
  const Aborted = 'aborted';
  SpanStatus["Aborted"] = Aborted;
  /** Operation was attempted past the valid range. */
  const OutOfRange = 'out_of_range';
  SpanStatus["OutOfRange"] = OutOfRange;
  /** Unrecoverable data loss or corruption */
  const DataLoss = 'data_loss';
  SpanStatus["DataLoss"] = DataLoss;
})(SpanStatus || (SpanStatus = {}));


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/transaction.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/transaction.js ***!
  \*********************************************************/
/*! exports provided: Transaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transaction", function() { return Transaction; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/utils/esm/buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _span_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./span.js */ "./node_modules/@sentry/tracing/esm/span.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





/** JSDoc */
let Transaction = /*#__PURE__*/function (_Span) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Transaction, _Span);
  var _super = _createSuper(Transaction);
  /**
   * This constructor should never be called manually. Those instrumenting tracing should use
   * `Sentry.startTransaction()`, and internal methods should use `hub.startTransaction()`.
   * @internal
   * @hideconstructor
   * @hidden
   */
  function Transaction(transactionContext, hub) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Transaction);
    _this = _super.call(this, transactionContext);
    Transaction.prototype.__init.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    Transaction.prototype.__init2.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    ;
    _this._hub = hub || Object(_sentry_core__WEBPACK_IMPORTED_MODULE_9__["getCurrentHub"])();
    _this._name = transactionContext.name || '';
    _this.metadata = _objectSpread(_objectSpread({
      source: 'custom'
    }, transactionContext.metadata), {}, {
      spanMetadata: {},
      changes: [],
      propagations: 0
    });
    _this._trimEnd = transactionContext.trimEnd;

    // this is because transactions are also spans, and spans have a transaction pointer
    _this.transaction = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this);

    // If Dynamic Sampling Context is provided during the creation of the transaction, we freeze it as it usually means
    // there is incoming Dynamic Sampling Context. (Either through an incoming request, a baggage meta-tag, or other means)
    const incomingDynamicSamplingContext = _this.metadata.dynamicSamplingContext;
    if (incomingDynamicSamplingContext) {
      // We shallow copy this in case anything writes to the original reference of the passed in `dynamicSamplingContext`
      _this._frozenDynamicSamplingContext = _objectSpread({}, incomingDynamicSamplingContext);
    }
    return _this;
  }

  /** Getter for `name` property */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Transaction, [{
    key: "__init",
    value:
    /**
     * The reference to the current hub.
     */

    function __init() {
      this._measurements = {};
    }
  }, {
    key: "__init2",
    value: function __init2() {
      this._frozenDynamicSamplingContext = undefined;
    }
  }, {
    key: "name",
    get: function () {
      return this._name;
    }

    /** Setter for `name` property, which also sets `source` as custom */,
    set: function (newName) {
      this.setName(newName);
    }

    /**
     * JSDoc
     */
  }, {
    key: "setName",
    value: function setName(name) {
      let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'custom';
      // `source` could change without the name changing if we discover that an unparameterized route is actually
      // parameterized by virtue of having no parameters in its path
      if (name !== this.name || source !== this.metadata.source) {
        this.metadata.changes.push({
          // log previous source
          source: this.metadata.source,
          timestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_10__["timestampInSeconds"])(),
          propagations: this.metadata.propagations
        });
      }
      this._name = name;
      this.metadata.source = source;
    }

    /**
     * Attaches SpanRecorder to the span itself
     * @param maxlen maximum number of spans that can be recorded
     */
  }, {
    key: "initSpanRecorder",
    value: function initSpanRecorder() {
      let maxlen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
      if (!this.spanRecorder) {
        this.spanRecorder = new _span_js__WEBPACK_IMPORTED_MODULE_11__["SpanRecorder"](maxlen);
      }
      this.spanRecorder.add(this);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setMeasurement",
    value: function setMeasurement(name, value) {
      let unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this._measurements[name] = {
        value,
        unit
      };
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setMetadata",
    value: function setMetadata(newMetadata) {
      this.metadata = _objectSpread(_objectSpread({}, this.metadata), newMetadata);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "finish",
    value: function finish(endTimestamp) {
      var _this2 = this;
      // This transaction is already finished, so we should not flush it again.
      if (this.endTimestamp !== undefined) {
        return undefined;
      }
      if (!this.name) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_10__["logger"].warn('Transaction has no name, falling back to `<unlabeled transaction>`.');
        this.name = '<unlabeled transaction>';
      }

      // just sets the end timestamp
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Transaction.prototype), "finish", this).call(this, endTimestamp);
      if (this.sampled !== true) {
        // At this point if `sampled !== true` we want to discard the transaction.
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_10__["logger"].log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.');
        const client = this._hub.getClient();
        if (client) {
          client.recordDroppedEvent('sample_rate', 'transaction');
        }
        return undefined;
      }
      const finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter(function (s) {
        return s !== _this2 && s.endTimestamp;
      }) : [];
      if (this._trimEnd && finishedSpans.length > 0) {
        this.endTimestamp = finishedSpans.reduce(function (prev, current) {
          if (prev.endTimestamp && current.endTimestamp) {
            return prev.endTimestamp > current.endTimestamp ? prev : current;
          }
          return prev;
        }).endTimestamp;
      }
      const metadata = this.metadata;
      const transaction = _objectSpread({
        contexts: {
          trace: this.getTraceContext()
        },
        spans: finishedSpans,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: 'transaction',
        sdkProcessingMetadata: _objectSpread(_objectSpread({}, metadata), {}, {
          dynamicSamplingContext: this.getDynamicSamplingContext()
        })
      }, metadata.source && {
        transaction_info: {
          source: metadata.source,
          changes: metadata.changes,
          propagations: metadata.propagations
        }
      });
      const hasMeasurements = Object.keys(this._measurements).length > 0;
      if (hasMeasurements) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_10__["logger"].log('[Measurements] Adding measurements to transaction', JSON.stringify(this._measurements, undefined, 2));
        transaction.measurements = this._measurements;
      }
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_10__["logger"].log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);
      return this._hub.captureEvent(transaction);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "toContext",
    value: function toContext() {
      const spanContext = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Transaction.prototype), "toContext", this).call(this);
      return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_10__["dropUndefinedKeys"])(_objectSpread(_objectSpread({}, spanContext), {}, {
        name: this.name,
        trimEnd: this._trimEnd
      }));
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "updateWithContext",
    value: function updateWithContext(transactionContext) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Transaction.prototype), "updateWithContext", this).call(this, transactionContext);
      this.name = Object(_sentry_utils_esm_buildPolyfills__WEBPACK_IMPORTED_MODULE_8__["_nullishCoalesce"])(transactionContext.name, function () {
        return '';
      });
      this._trimEnd = transactionContext.trimEnd;
      return this;
    }

    /**
     * @inheritdoc
     *
     * @experimental
     */
  }, {
    key: "getDynamicSamplingContext",
    value: function getDynamicSamplingContext() {
      if (this._frozenDynamicSamplingContext) {
        return this._frozenDynamicSamplingContext;
      }
      const hub = this._hub || Object(_sentry_core__WEBPACK_IMPORTED_MODULE_9__["getCurrentHub"])();
      const client = hub && hub.getClient();
      if (!client) return {};
      const _ref = client.getOptions() || {},
        environment = _ref.environment,
        release = _ref.release;
      const _ref2 = client.getDsn() || {},
        public_key = _ref2.publicKey;
      const maybeSampleRate = this.metadata.sampleRate;
      const sample_rate = maybeSampleRate !== undefined ? maybeSampleRate.toString() : undefined;
      const scope = hub.getScope();
      const _ref3 = scope && scope.getUser() || {},
        user_segment = _ref3.segment;
      const source = this.metadata.source;

      // We don't want to have a transaction name in the DSC if the source is "url" because URLs might contain PII
      const transaction = source && source !== 'url' ? this.name : undefined;
      const dsc = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_10__["dropUndefinedKeys"])({
        environment,
        release,
        transaction,
        user_segment,
        public_key,
        trace_id: this.traceId,
        sample_rate
      });

      // Uncomment if we want to make DSC immutable
      // this._frozenDynamicSamplingContext = dsc;

      return dsc;
    }
  }]);
  return Transaction;
}(_span_js__WEBPACK_IMPORTED_MODULE_11__["Span"]);


/***/ }),

/***/ "./node_modules/@sentry/tracing/esm/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/tracing/esm/utils.js ***!
  \***************************************************/
/*! exports provided: TRACEPARENT_REGEXP, extractTraceparentData, stripUrlQueryAndFragment, getActiveTransaction, hasTracingEnabled, msToSec, secToMs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTransaction", function() { return getActiveTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTracingEnabled", function() { return hasTracingEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToSec", function() { return msToSec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secToMs", function() { return secToMs; });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["TRACEPARENT_REGEXP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractTraceparentData", function() { return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["extractTraceparentData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["stripUrlQueryAndFragment"]; });




/**
 * Determines if tracing is currently enabled.
 *
 * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
 */
function hasTracingEnabled(maybeOptions) {
  const client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient();
  const options = maybeOptions || client && client.getOptions();
  return !!options && ('tracesSampleRate' in options || 'tracesSampler' in options);
}

/** Grabs active transaction off scope, if any */
function getActiveTransaction(maybeHub) {
  const hub = maybeHub || Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])();
  const scope = hub.getScope();
  return scope && scope.getTransaction();
}

/**
 * Converts from milliseconds to seconds
 * @param time time in ms
 */
function msToSec(time) {
  return time / 1000;
}

/**
 * Converts from seconds to milliseconds
 * @param time time in seconds
 */
function secToMs(time) {
  return time * 1000;
}


/***/ })

}]);