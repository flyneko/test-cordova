(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@sentry/core/esm/api.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/api.js ***!
  \**********************************************/
/*! exports provided: getEnvelopeEndpointWithUrlEncodedAuth, getReportDialogEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeEndpointWithUrlEncodedAuth", function() { return getEnvelopeEndpointWithUrlEncodedAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReportDialogEndpoint", function() { return getReportDialogEndpoint; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const SENTRY_API_VERSION = '7';

/** Returns the prefix to construct Sentry ingestion API endpoints. */
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : '';
  const port = dsn.port ? `:${dsn.port}` : '';
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ''}/api/`;
}

/** Returns the ingest API endpoint for target. */
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}

/** Returns a URL-encoded string with auth config suitable for a query string. */
function _encodedAuth(dsn, sdkInfo) {
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["urlEncode"])(_objectSpread({
    // We send only the minimum set of required information. See
    // https://github.com/getsentry/sentry-javascript/issues/2572.
    sentry_key: dsn.publicKey,
    sentry_version: SENTRY_API_VERSION
  }, sdkInfo && {
    sentry_client: `${sdkInfo.name}/${sdkInfo.version}`
  }));
}

/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */
function getEnvelopeEndpointWithUrlEncodedAuth(dsn) {
  let tunnelOrOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // TODO (v8): Use this code instead
  // const { tunnel, _metadata = {} } = options;
  // return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, _metadata.sdk)}`;

  const tunnel = typeof tunnelOrOptions === 'string' ? tunnelOrOptions : tunnelOrOptions.tunnel;
  const sdkInfo = typeof tunnelOrOptions === 'string' || !tunnelOrOptions._metadata ? undefined : tunnelOrOptions._metadata.sdk;
  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}

/** Returns the url to the report dialog endpoint. */
function getReportDialogEndpoint(dsnLike, dialogOptions) {
  const dsn = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["makeDsn"])(dsnLike);
  const endpoint = `${getBaseApiEndpoint(dsn)}embed/error-page/`;
  let encodedOptions = `dsn=${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["dsnToString"])(dsn)}`;
  for (const key in dialogOptions) {
    if (key === 'dsn') {
      continue;
    }
    if (key === 'user') {
      const user = dialogOptions.user;
      if (!user) {
        continue;
      }
      if (user.name) {
        encodedOptions += `&name=${encodeURIComponent(user.name)}`;
      }
      if (user.email) {
        encodedOptions += `&email=${encodeURIComponent(user.email)}`;
      }
    } else {
      encodedOptions += `&${encodeURIComponent(key)}=${encodeURIComponent(dialogOptions[key])}`;
    }
  }
  return `${endpoint}?${encodedOptions}`;
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/baseclient.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/core/esm/baseclient.js ***!
  \*****************************************************/
/*! exports provided: BaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return BaseClient; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api.js */ "./node_modules/@sentry/core/esm/api.js");
/* harmony import */ var _envelope_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./envelope.js */ "./node_modules/@sentry/core/esm/envelope.js");
/* harmony import */ var _integration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./integration.js */ "./node_modules/@sentry/core/esm/integration.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/core/esm/scope.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/core/esm/session.js");





function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";

/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(options);
 *   }
 *
 *   // ...
 * }
 */
let BaseClient = /*#__PURE__*/function () {
  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
  function BaseClient(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BaseClient);
    ;
    BaseClient.prototype.__init.call(this);
    BaseClient.prototype.__init2.call(this);
    BaseClient.prototype.__init3.call(this);
    BaseClient.prototype.__init4.call(this);
    this._options = options;
    if (options.dsn) {
      this._dsn = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["makeDsn"])(options.dsn);
      const url = Object(_api_js__WEBPACK_IMPORTED_MODULE_6__["getEnvelopeEndpointWithUrlEncodedAuth"])(this._dsn, options);
      this._transport = options.transport(_objectSpread(_objectSpread({
        recordDroppedEvent: this.recordDroppedEvent.bind(this)
      }, options.transportOptions), {}, {
        url
      }));
    } else {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].warn('No DSN provided, client will not do anything.');
    }
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BaseClient, [{
    key: "__init",
    value: /** Options passed to the SDK. */

    /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */

    /** Array of set up integrations. */
    function __init() {
      this._integrations = {};
    }

    /** Indicates whether this client's integrations have been set up. */
  }, {
    key: "__init2",
    value: function __init2() {
      this._integrationsInitialized = false;
    }

    /** Number of calls being processed */
  }, {
    key: "__init3",
    value: function __init3() {
      this._numProcessing = 0;
    }

    /** Holds flushable  */
  }, {
    key: "__init4",
    value: function __init4() {
      this._outcomes = {};
    }
  }, {
    key: "captureException",
    value: function captureException(exception, hint, scope) {
      var _this = this;
      // ensure we haven't captured this very object before
      if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["checkOrSetAlreadyCaught"])(exception)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(this.eventFromException(exception, hint).then(function (event) {
        return _this._captureEvent(event, hint, scope);
      }).then(function (result) {
        eventId = result;
      }));
      return eventId;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "captureMessage",
    value: function captureMessage(message,
    // eslint-disable-next-line deprecation/deprecation
    level, hint, scope) {
      var _this2 = this;
      let eventId = hint && hint.event_id;
      const promisedEvent = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"])(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
      this._process(promisedEvent.then(function (event) {
        return _this2._captureEvent(event, hint, scope);
      }).then(function (result) {
        eventId = result;
      }));
      return eventId;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "captureEvent",
    value: function captureEvent(event, hint, scope) {
      // ensure we haven't captured this very object before
      if (hint && hint.originalException && Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["checkOrSetAlreadyCaught"])(hint.originalException)) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(this._captureEvent(event, hint, scope).then(function (result) {
        eventId = result;
      }));
      return eventId;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "captureSession",
    value: function captureSession(session) {
      if (!this._isEnabled()) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].warn('SDK not enabled, will not capture session.');
        return;
      }
      if (!(typeof session.release === 'string')) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].warn('Discarded session because of missing or non-string release');
      } else {
        this.sendSession(session);
        // After sending, we set init false to indicate it's not the first occurrence
        Object(_session_js__WEBPACK_IMPORTED_MODULE_10__["updateSession"])(session, {
          init: false
        });
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getDsn",
    value: function getDsn() {
      return this._dsn;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getOptions",
    value: function getOptions() {
      return this._options;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getTransport",
    value: function getTransport() {
      return this._transport;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "flush",
    value: function flush(timeout) {
      const transport = this._transport;
      if (transport) {
        return this._isClientDoneProcessing(timeout).then(function (clientFinished) {
          return transport.flush(timeout).then(function (transportFlushed) {
            return clientFinished && transportFlushed;
          });
        });
      } else {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["resolvedSyncPromise"])(true);
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "close",
    value: function close(timeout) {
      var _this3 = this;
      return this.flush(timeout).then(function (result) {
        _this3.getOptions().enabled = false;
        return result;
      });
    }

    /**
     * Sets up the integrations
     */
  }, {
    key: "setupIntegrations",
    value: function setupIntegrations() {
      if (this._isEnabled() && !this._integrationsInitialized) {
        this._integrations = Object(_integration_js__WEBPACK_IMPORTED_MODULE_8__["setupIntegrations"])(this._options.integrations);
        this._integrationsInitialized = true;
      }
    }

    /**
     * Gets an installed integration by its `id`.
     *
     * @returns The installed integration or `undefined` if no integration with that `id` was installed.
     */
  }, {
    key: "getIntegrationById",
    value: function getIntegrationById(integrationId) {
      return this._integrations[integrationId];
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getIntegration",
    value: function getIntegration(integration) {
      try {
        return this._integrations[integration.id] || null;
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(`Cannot retrieve integration ${integration.id} from the current Client`);
        return null;
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "sendEvent",
    value: function sendEvent(event) {
      let hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._dsn) {
        let env = Object(_envelope_js__WEBPACK_IMPORTED_MODULE_7__["createEventEnvelope"])(event, this._dsn, this._options._metadata, this._options.tunnel);
        var _iterator = _createForOfIteratorHelper(hint.attachments || []),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            const attachment = _step.value;
            env = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["addItemToEnvelope"])(env, Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["createAttachmentEnvelopeItem"])(attachment, this._options.transportOptions && this._options.transportOptions.textEncoder));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this._sendEnvelope(env);
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "sendSession",
    value: function sendSession(session) {
      if (this._dsn) {
        const env = Object(_envelope_js__WEBPACK_IMPORTED_MODULE_7__["createSessionEnvelope"])(session, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(env);
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "recordDroppedEvent",
    value: function recordDroppedEvent(reason, category) {
      if (this._options.sendClientReports) {
        // We want to track each category (error, transaction, session) separately
        // but still keep the distinction between different type of outcomes.
        // We could use nested maps, but it's much easier to read and type this way.
        // A correct type for map-based implementation if we want to go that route
        // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
        // With typescript 4.1 we could even use template literal types
        const key = `${reason}:${category}`;
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].log(`Adding outcome: "${key}"`);

        // The following works because undefined + 1 === NaN and NaN is falsy
        this._outcomes[key] = this._outcomes[key] + 1 || 1;
      }
    }

    /** Updates existing session based on the provided event */
  }, {
    key: "_updateSessionFromEvent",
    value: function _updateSessionFromEvent(session, event) {
      let crashed = false;
      let errored = false;
      const exceptions = event.exception && event.exception.values;
      if (exceptions) {
        errored = true;
        var _iterator2 = _createForOfIteratorHelper(exceptions),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            const ex = _step2.value;
            const mechanism = ex.mechanism;
            if (mechanism && mechanism.handled === false) {
              crashed = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      // A session is updated and that session update is sent in only one of the two following scenarios:
      // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
      // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
      const sessionNonTerminal = session.status === 'ok';
      const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
      if (shouldUpdateAndSend) {
        Object(_session_js__WEBPACK_IMPORTED_MODULE_10__["updateSession"])(session, _objectSpread(_objectSpread({}, crashed && {
          status: 'crashed'
        }), {}, {
          errors: session.errors || Number(errored || crashed)
        }));
        this.captureSession(session);
      }
    }

    /**
     * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
     * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
     * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
     * `false` otherwise
     */
  }, {
    key: "_isClientDoneProcessing",
    value: function _isClientDoneProcessing(timeout) {
      var _this4 = this;
      return new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SyncPromise"](function (resolve) {
        let ticked = 0;
        const tick = 1;
        const interval = setInterval(function () {
          if (_this4._numProcessing == 0) {
            clearInterval(interval);
            resolve(true);
          } else {
            ticked += tick;
            if (timeout && ticked >= timeout) {
              clearInterval(interval);
              resolve(false);
            }
          }
        }, tick);
      });
    }

    /** Determines whether this SDK is enabled and a valid Dsn is present. */
  }, {
    key: "_isEnabled",
    value: function _isEnabled() {
      return this.getOptions().enabled !== false && this._dsn !== undefined;
    }

    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
  }, {
    key: "_prepareEvent",
    value: function _prepareEvent(event, hint, scope) {
      var _this5 = this;
      const _this$getOptions = this.getOptions(),
        _this$getOptions$norm = _this$getOptions.normalizeDepth,
        normalizeDepth = _this$getOptions$norm === void 0 ? 3 : _this$getOptions$norm,
        _this$getOptions$norm2 = _this$getOptions.normalizeMaxBreadth,
        normalizeMaxBreadth = _this$getOptions$norm2 === void 0 ? 1000 : _this$getOptions$norm2;
      const prepared = _objectSpread(_objectSpread({}, event), {}, {
        event_id: event.event_id || hint.event_id || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["uuid4"])(),
        timestamp: event.timestamp || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["dateTimestampInSeconds"])()
      });
      this._applyClientOptions(prepared);
      this._applyIntegrationsMetadata(prepared);

      // If we have scope given to us, use it as the base for further modifications.
      // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
      let finalScope = scope;
      if (hint.captureContext) {
        finalScope = _scope_js__WEBPACK_IMPORTED_MODULE_9__["Scope"].clone(finalScope).update(hint.captureContext);
      }

      // We prepare the result here with a resolved Event.
      let result = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["resolvedSyncPromise"])(prepared);

      // This should be the last thing called, since we want that
      // {@link Hub.addEventProcessor} gets the finished prepared event.
      if (finalScope) {
        // Collect attachments from the hint and scope
        const attachments = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(hint.attachments || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(finalScope.getAttachments()));
        if (attachments.length) {
          hint.attachments = attachments;
        }

        // In case we have a hub we reassign it.
        result = finalScope.applyToEvent(prepared, hint);
      }
      return result.then(function (evt) {
        if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
          return _this5._normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
        }
        return evt;
      });
    }

    /**
     * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
     * Normalized keys:
     * - `breadcrumbs.data`
     * - `user`
     * - `contexts`
     * - `extra`
     * @param event Event
     * @returns Normalized event
     */
  }, {
    key: "_normalizeEvent",
    value: function _normalizeEvent(event, depth, maxBreadth) {
      if (!event) {
        return null;
      }
      const normalized = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, event), event.breadcrumbs && {
        breadcrumbs: event.breadcrumbs.map(function (b) {
          return _objectSpread(_objectSpread({}, b), b.data && {
            data: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["normalize"])(b.data, depth, maxBreadth)
          });
        })
      }), event.user && {
        user: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["normalize"])(event.user, depth, maxBreadth)
      }), event.contexts && {
        contexts: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["normalize"])(event.contexts, depth, maxBreadth)
      }), event.extra && {
        extra: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["normalize"])(event.extra, depth, maxBreadth)
      });

      // event.contexts.trace stores information about a Transaction. Similarly,
      // event.spans[] stores information about child Spans. Given that a
      // Transaction is conceptually a Span, normalization should apply to both
      // Transactions and Spans consistently.
      // For now the decision is to skip normalization of Transactions and Spans,
      // so this block overwrites the normalized event to add back the original
      // Transaction information prior to normalization.
      if (event.contexts && event.contexts.trace && normalized.contexts) {
        normalized.contexts.trace = event.contexts.trace;

        // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
        if (event.contexts.trace.data) {
          normalized.contexts.trace.data = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["normalize"])(event.contexts.trace.data, depth, maxBreadth);
        }
      }

      // event.spans[].data may contain circular/dangerous data so we need to normalize it
      if (event.spans) {
        normalized.spans = event.spans.map(function (span) {
          // We cannot use the spread operator here because `toJSON` on `span` is non-enumerable
          if (span.data) {
            span.data = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["normalize"])(span.data, depth, maxBreadth);
          }
          return span;
        });
      }
      return normalized;
    }

    /**
     *  Enhances event using the client configuration.
     *  It takes care of all "static" values like environment, release and `dist`,
     *  as well as truncating overly long values.
     * @param event event instance to be enhanced
     */
  }, {
    key: "_applyClientOptions",
    value: function _applyClientOptions(event) {
      const options = this.getOptions();
      const environment = options.environment,
        release = options.release,
        dist = options.dist,
        _options$maxValueLeng = options.maxValueLength,
        maxValueLength = _options$maxValueLeng === void 0 ? 250 : _options$maxValueLeng;
      if (!('environment' in event)) {
        event.environment = 'environment' in options ? environment : 'production';
      }
      if (event.release === undefined && release !== undefined) {
        event.release = release;
      }
      if (event.dist === undefined && dist !== undefined) {
        event.dist = dist;
      }
      if (event.message) {
        event.message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["truncate"])(event.message, maxValueLength);
      }
      const exception = event.exception && event.exception.values && event.exception.values[0];
      if (exception && exception.value) {
        exception.value = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["truncate"])(exception.value, maxValueLength);
      }
      const request = event.request;
      if (request && request.url) {
        request.url = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["truncate"])(request.url, maxValueLength);
      }
    }

    /**
     * This function adds all used integrations to the SDK info in the event.
     * @param event The event that will be filled with all integrations.
     */
  }, {
    key: "_applyIntegrationsMetadata",
    value: function _applyIntegrationsMetadata(event) {
      const integrationsArray = Object.keys(this._integrations);
      if (integrationsArray.length > 0) {
        event.sdk = event.sdk || {};
        event.sdk.integrations = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(event.sdk.integrations || []), integrationsArray);
      }
    }

    /**
     * Processes the event and logs an error in case of rejection
     * @param event
     * @param hint
     * @param scope
     */
  }, {
    key: "_captureEvent",
    value: function _captureEvent(event) {
      let hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let scope = arguments.length > 2 ? arguments[2] : undefined;
      return this._processEvent(event, hint, scope).then(function (finalEvent) {
        return finalEvent.event_id;
      }, function (reason) {
        if (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) {
          // If something's gone wrong, log the error as a warning. If it's just us having used a `SentryError` for
          // control flow, log just the message (no stack) as a log-level log.
          const sentryError = reason;
          if (sentryError.logLevel === 'log') {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].log(sentryError.message);
          } else {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].warn(sentryError);
          }
        }
        return undefined;
      });
    }

    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
  }, {
    key: "_processEvent",
    value: function _processEvent(event, hint, scope) {
      var _this6 = this;
      const _this$getOptions2 = this.getOptions(),
        beforeSend = _this$getOptions2.beforeSend,
        sampleRate = _this$getOptions2.sampleRate;
      if (!this._isEnabled()) {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["rejectedSyncPromise"])(new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"]('SDK not enabled, will not capture event.', 'log'));
      }
      const isTransaction = event.type === 'transaction';
      // 1.0 === 100% events are sent
      // 0.0 === 0% events are sent
      // Sampling for transaction happens somewhere else
      if (!isTransaction && typeof sampleRate === 'number' && Math.random() > sampleRate) {
        this.recordDroppedEvent('sample_rate', 'error');
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["rejectedSyncPromise"])(new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`, 'log'));
      }
      return this._prepareEvent(event, hint, scope).then(function (prepared) {
        if (prepared === null) {
          _this6.recordDroppedEvent('event_processor', event.type || 'error');
          throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"]('An event processor returned null, will not send event.', 'log');
        }
        const isInternalException = hint.data && hint.data.__sentry__ === true;
        if (isInternalException || isTransaction || !beforeSend) {
          return prepared;
        }
        const beforeSendResult = beforeSend(prepared, hint);
        return _ensureBeforeSendRv(beforeSendResult);
      }).then(function (processedEvent) {
        if (processedEvent === null) {
          _this6.recordDroppedEvent('before_send', event.type || 'error');
          throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"]('`beforeSend` returned `null`, will not send event.', 'log');
        }
        const session = scope && scope.getSession();
        if (!isTransaction && session) {
          _this6._updateSessionFromEvent(session, processedEvent);
        }

        // None of the Sentry built event processor will update transaction name,
        // so if the transaction name has been changed by an event processor, we know
        // it has to come from custom event processor added by a user
        const transactionInfo = processedEvent.transaction_info;
        if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
          const source = 'custom';
          processedEvent.transaction_info = _objectSpread(_objectSpread({}, transactionInfo), {}, {
            source,
            changes: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(transactionInfo.changes), [{
              source,
              // use the same timestamp as the processed event.
              timestamp: processedEvent.timestamp,
              propagations: transactionInfo.propagations
            }])
          });
        }
        _this6.sendEvent(processedEvent, hint);
        return processedEvent;
      }).then(null, function (reason) {
        if (reason instanceof _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"]) {
          throw reason;
        }
        _this6.captureException(reason, {
          data: {
            __sentry__: true
          },
          originalException: reason
        });
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`);
      });
    }

    /**
     * Occupies the client with processing and event
     */
  }, {
    key: "_process",
    value: function _process(promise) {
      var _this7 = this;
      this._numProcessing += 1;
      void promise.then(function (value) {
        _this7._numProcessing -= 1;
        return value;
      }, function (reason) {
        _this7._numProcessing -= 1;
        return reason;
      });
    }

    /**
     * @inheritdoc
     */
  }, {
    key: "_sendEnvelope",
    value: function _sendEnvelope(envelope) {
      if (this._transport && this._dsn) {
        this._transport.send(envelope).then(null, function (reason) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].error('Error while sending event:', reason);
        });
      } else {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].error('Transport disabled');
      }
    }

    /**
     * Clears outcomes on this client and returns them.
     */
  }, {
    key: "_clearOutcomes",
    value: function _clearOutcomes() {
      const outcomes = this._outcomes;
      this._outcomes = {};
      return Object.keys(outcomes).map(function (key) {
        const _key$split = key.split(':'),
          _key$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_key$split, 2),
          reason = _key$split2[0],
          category = _key$split2[1];
        return {
          reason,
          category,
          quantity: outcomes[key]
        };
      });
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  }]);
  return BaseClient;
}();
/**
 * Verifies that return value of configured `beforeSend` is of expected type.
 */
function _ensureBeforeSendRv(rv) {
  const nullErr = '`beforeSend` method has to return `null` or a valid event.';
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isThenable"])(rv)) {
    return rv.then(function (event) {
      if (!(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(event) || event === null)) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](nullErr);
      }
      return event;
    }, function (e) {
      throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](`beforeSend rejected with ${e}`);
    });
  } else if (!(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(rv) || rv === null)) {
    throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](nullErr);
  }
  return rv;
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/envelope.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/core/esm/envelope.js ***!
  \***************************************************/
/*! exports provided: createEventEnvelope, createSessionEnvelope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventEnvelope", function() { return createEventEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSessionEnvelope", function() { return createSessionEnvelope; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


/** Extract sdk info from from the API metadata */
function getSdkMetadataForEnvelopeHeader(metadata) {
  if (!metadata || !metadata.sdk) {
    return;
  }
  const _metadata$sdk = metadata.sdk,
    name = _metadata$sdk.name,
    version = _metadata$sdk.version;
  return {
    name,
    version
  };
}

/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
  if (!sdkInfo) {
    return event;
  }
  event.sdk = event.sdk || {};
  event.sdk.name = event.sdk.name || sdkInfo.name;
  event.sdk.version = event.sdk.version || sdkInfo.version;
  event.sdk.integrations = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(event.sdk.integrations || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(sdkInfo.integrations || []));
  event.sdk.packages = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(event.sdk.packages || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(sdkInfo.packages || []));
  return event;
}

/** Creates an envelope from a Session */
function createSessionEnvelope(session, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = _objectSpread(_objectSpread({
    sent_at: new Date().toISOString()
  }, sdkInfo && {
    sdk: sdkInfo
  }), !!tunnel && {
    dsn: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["dsnToString"])(dsn)
  });
  const envelopeItem = 'aggregates' in session ? [{
    type: 'sessions'
  }, session] : [{
    type: 'session'
  }, session];
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["createEnvelope"])(envelopeHeaders, [envelopeItem]);
}

/**
 * Create an Envelope from an event.
 */
function createEventEnvelope(event, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const eventType = event.type || 'event';
  enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);

  // Prevent this data (which, if it exists, was used in earlier steps in the processing pipeline) from being sent to
  // sentry. (Note: Our use of this property comes and goes with whatever we might be debugging, whatever hacks we may
  // have temporarily added, etc. Even if we don't happen to be using it at some point in the future, let's not get rid
  // of this `delete`, lest we miss putting it back in the next time the property is in use.)
  delete event.sdkProcessingMetadata;
  const eventItem = [{
    type: eventType
  }, event];
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["createEnvelope"])(envelopeHeaders, [eventItem]);
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
  const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
  return _objectSpread(_objectSpread(_objectSpread({
    event_id: event.event_id,
    sent_at: new Date().toISOString()
  }, sdkInfo && {
    sdk: sdkInfo
  }), !!tunnel && {
    dsn: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["dsnToString"])(dsn)
  }), event.type === 'transaction' && dynamicSamplingContext && {
    trace: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["dropUndefinedKeys"])(_objectSpread({}, dynamicSamplingContext))
  });
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/exports.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/core/esm/exports.js ***!
  \**************************************************/
/*! exports provided: addBreadcrumb, captureEvent, captureException, captureMessage, configureScope, setContext, setExtra, setExtras, setTag, setTags, setUser, startTransaction, withScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return addBreadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return captureEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return captureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return captureMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return configureScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return setExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return setExtras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return setTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return setTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return startTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return withScope; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/core/esm/hub.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


// Note: All functions in this file are typed with a return value of `ReturnType<Hub[HUB_FUNCTION]>`,
// where HUB_FUNCTION is some method on the Hub class.
//
// This is done to make sure the top level SDK methods stay in sync with the hub methods.
// Although every method here has an explicit return type, some of them (that map to void returns) do not
// contain `return` keywords. This is done to save on bundle size, as `return` is not minifiable.

/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @param captureContext Additional scope data to apply to exception event.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
  return Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().captureException(exception, {
    captureContext
  });
}

/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param Severity Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message,
// eslint-disable-next-line deprecation/deprecation
captureContext) {
  // This is necessary to provide explicit scopes upgrade, without changing the original
  // arity of the `captureMessage(message, level)` method.
  const level = typeof captureContext === 'string' ? captureContext : undefined;
  const context = typeof captureContext !== 'string' ? {
    captureContext
  } : undefined;
  return Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().captureMessage(message, level, context);
}

/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event, hint) {
  return Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().captureEvent(event, hint);
}

/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().configureScope(callback);
}

/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb(breadcrumb);
}

/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setContext(name, context) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().setContext(name, context);
}

/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().setExtras(extras);
}

/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().setExtra(key, extra);
}

/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().setTags(tags);
}

/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().setTag(key, value);
}

/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().setUser(user);
}

/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
  Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().withScope(callback);
}

/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * NOTE: This function should only be used for *manual* instrumentation. Auto-instrumentation should call
 * `startTransaction` directly on the hub.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */
function startTransaction(context, customSamplingContext) {
  return Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().startTransaction(_objectSpread({}, context), customSamplingContext);
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/hub.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/hub.js ***!
  \**********************************************/
/*! exports provided: API_VERSION, Hub, getCurrentHub, getHubFromCarrier, getMainCarrier, makeMain, setHubOnCarrier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return Hub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return getCurrentHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return getHubFromCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return getMainCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return makeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return setHubOnCarrier; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/core/esm/scope.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/core/esm/session.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
const API_VERSION = 4;

/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
const DEFAULT_BREADCRUMBS = 100;

/**
 * A layer in the process stack.
 * @hidden
 */

/**
 * @inheritDoc
 */
let Hub = /*#__PURE__*/function () {
  /** Contains the last event id of a captured event.  */

  /**
   * Creates a new instance of the hub, will push one {@link Layer} into the
   * internal stack on creation.
   *
   * @param client bound to the hub.
   * @param scope bound to the hub.
   * @param version number, higher number means higher priority.
   */
  function Hub(client) {
    let scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _scope_js__WEBPACK_IMPORTED_MODULE_4__["Scope"]();
    let _version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : API_VERSION;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Hub);
    ;
    this._version = _version;
    Hub.prototype.__init.call(this);
    this.getStackTop().scope = scope;
    if (client) {
      this.bindClient(client);
    }
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Hub, [{
    key: "__init",
    value: /** Is a {@link Layer}[] containing the client and scope */
    function __init() {
      this._stack = [{}];
    }
  }, {
    key: "isOlderThan",
    value: function isOlderThan(version) {
      return this._version < version;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "bindClient",
    value: function bindClient(client) {
      const top = this.getStackTop();
      top.client = client;
      if (client && client.setupIntegrations) {
        client.setupIntegrations();
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "pushScope",
    value: function pushScope() {
      // We want to clone the content of prev scope
      const scope = _scope_js__WEBPACK_IMPORTED_MODULE_4__["Scope"].clone(this.getScope());
      this.getStack().push({
        client: this.getClient(),
        scope
      });
      return scope;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "popScope",
    value: function popScope() {
      if (this.getStack().length <= 1) return false;
      return !!this.getStack().pop();
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "withScope",
    value: function withScope(callback) {
      const scope = this.pushScope();
      try {
        callback(scope);
      } finally {
        this.popScope();
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getClient",
    value: function getClient() {
      return this.getStackTop().client;
    }

    /** Returns the scope of the top stack. */
  }, {
    key: "getScope",
    value: function getScope() {
      return this.getStackTop().scope;
    }

    /** Returns the scope stack for domains or the process. */
  }, {
    key: "getStack",
    value: function getStack() {
      return this._stack;
    }

    /** Returns the topmost scope layer in the order domain > local > process. */
  }, {
    key: "getStackTop",
    value: function getStackTop() {
      return this._stack[this._stack.length - 1];
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  }, {
    key: "captureException",
    value: function captureException(exception, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["uuid4"])();
      const syntheticException = new Error('Sentry syntheticException');
      this._withClient(function (client, scope) {
        client.captureException(exception, _objectSpread(_objectSpread({
          originalException: exception,
          syntheticException
        }, hint), {}, {
          event_id: eventId
        }), scope);
      });
      return eventId;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "captureMessage",
    value: function captureMessage(message,
    // eslint-disable-next-line deprecation/deprecation
    level, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["uuid4"])();
      const syntheticException = new Error(message);
      this._withClient(function (client, scope) {
        client.captureMessage(message, level, _objectSpread(_objectSpread({
          originalException: message,
          syntheticException
        }, hint), {}, {
          event_id: eventId
        }), scope);
      });
      return eventId;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "captureEvent",
    value: function captureEvent(event, hint) {
      const eventId = hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["uuid4"])();
      if (event.type !== 'transaction') {
        this._lastEventId = eventId;
      }
      this._withClient(function (client, scope) {
        client.captureEvent(event, _objectSpread(_objectSpread({}, hint), {}, {
          event_id: eventId
        }), scope);
      });
      return eventId;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "lastEventId",
    value: function lastEventId() {
      return this._lastEventId;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "addBreadcrumb",
    value: function addBreadcrumb(breadcrumb, hint) {
      const _this$getStackTop = this.getStackTop(),
        scope = _this$getStackTop.scope,
        client = _this$getStackTop.client;
      if (!scope || !client) return;

      // eslint-disable-next-line @typescript-eslint/unbound-method
      const _ref = client.getOptions && client.getOptions() || {},
        _ref$beforeBreadcrumb = _ref.beforeBreadcrumb,
        beforeBreadcrumb = _ref$beforeBreadcrumb === void 0 ? null : _ref$beforeBreadcrumb,
        _ref$maxBreadcrumbs = _ref.maxBreadcrumbs,
        maxBreadcrumbs = _ref$maxBreadcrumbs === void 0 ? DEFAULT_BREADCRUMBS : _ref$maxBreadcrumbs;
      if (maxBreadcrumbs <= 0) return;
      const timestamp = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["dateTimestampInSeconds"])();
      const mergedBreadcrumb = _objectSpread({
        timestamp
      }, breadcrumb);
      const finalBreadcrumb = beforeBreadcrumb ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["consoleSandbox"])(function () {
        return beforeBreadcrumb(mergedBreadcrumb, hint);
      }) : mergedBreadcrumb;
      if (finalBreadcrumb === null) return;
      scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setUser",
    value: function setUser(user) {
      const scope = this.getScope();
      if (scope) scope.setUser(user);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setTags",
    value: function setTags(tags) {
      const scope = this.getScope();
      if (scope) scope.setTags(tags);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setExtras",
    value: function setExtras(extras) {
      const scope = this.getScope();
      if (scope) scope.setExtras(extras);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setTag",
    value: function setTag(key, value) {
      const scope = this.getScope();
      if (scope) scope.setTag(key, value);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setExtra",
    value: function setExtra(key, extra) {
      const scope = this.getScope();
      if (scope) scope.setExtra(key, extra);
    }

    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "setContext",
    value: function setContext(name, context) {
      const scope = this.getScope();
      if (scope) scope.setContext(name, context);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "configureScope",
    value: function configureScope(callback) {
      const _this$getStackTop2 = this.getStackTop(),
        scope = _this$getStackTop2.scope,
        client = _this$getStackTop2.client;
      if (scope && client) {
        callback(scope);
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "run",
    value: function run(callback) {
      const oldHub = makeMain(this);
      try {
        callback(this);
      } finally {
        makeMain(oldHub);
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getIntegration",
    value: function getIntegration(integration) {
      const client = this.getClient();
      if (!client) return null;
      try {
        return client.getIntegration(integration);
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
        return null;
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "startTransaction",
    value: function startTransaction(context, customSamplingContext) {
      return this._callExtensionMethod('startTransaction', context, customSamplingContext);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "traceHeaders",
    value: function traceHeaders() {
      return this._callExtensionMethod('traceHeaders');
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "captureSession",
    value: function captureSession() {
      let endSession = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // both send the update and pull the session from the scope
      if (endSession) {
        return this.endSession();
      }

      // only send the update
      this._sendSessionUpdate();
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "endSession",
    value: function endSession() {
      const layer = this.getStackTop();
      const scope = layer && layer.scope;
      const session = scope && scope.getSession();
      if (session) {
        Object(_session_js__WEBPACK_IMPORTED_MODULE_5__["closeSession"])(session);
      }
      this._sendSessionUpdate();

      // the session is over; take it off of the scope
      if (scope) {
        scope.setSession();
      }
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "startSession",
    value: function startSession(context) {
      const _this$getStackTop3 = this.getStackTop(),
        scope = _this$getStackTop3.scope,
        client = _this$getStackTop3.client;
      const _ref2 = client && client.getOptions() || {},
        release = _ref2.release,
        environment = _ref2.environment;

      // Will fetch userAgent if called from browser sdk
      const _ref3 = _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["GLOBAL_OBJ"].navigator || {},
        userAgent = _ref3.userAgent;
      const session = Object(_session_js__WEBPACK_IMPORTED_MODULE_5__["makeSession"])(_objectSpread(_objectSpread(_objectSpread({
        release,
        environment
      }, scope && {
        user: scope.getUser()
      }), userAgent && {
        userAgent
      }), context));
      if (scope) {
        // End existing session if there's one
        const currentSession = scope.getSession && scope.getSession();
        if (currentSession && currentSession.status === 'ok') {
          Object(_session_js__WEBPACK_IMPORTED_MODULE_5__["updateSession"])(currentSession, {
            status: 'exited'
          });
        }
        this.endSession();

        // Afterwards we set the new session on the scope
        scope.setSession(session);
      }
      return session;
    }

    /**
     * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
     * when Tracing is used.
     */
  }, {
    key: "shouldSendDefaultPii",
    value: function shouldSendDefaultPii() {
      const client = this.getClient();
      const options = client && client.getOptions();
      return Boolean(options && options.sendDefaultPii);
    }

    /**
     * Sends the current Session on the scope
     */
  }, {
    key: "_sendSessionUpdate",
    value: function _sendSessionUpdate() {
      const _this$getStackTop4 = this.getStackTop(),
        scope = _this$getStackTop4.scope,
        client = _this$getStackTop4.client;
      if (!scope) return;
      const session = scope.getSession();
      if (session) {
        if (client && client.captureSession) {
          client.captureSession(session);
        }
      }
    }

    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
  }, {
    key: "_withClient",
    value: function _withClient(callback) {
      const _this$getStackTop5 = this.getStackTop(),
        scope = _this$getStackTop5.scope,
        client = _this$getStackTop5.client;
      if (client) {
        callback(client, scope);
      }
    }

    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "_callExtensionMethod",
    value: function _callExtensionMethod(method) {
      const carrier = getMainCarrier();
      const sentry = carrier.__SENTRY__;
      if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return sentry.extensions[method].apply(this, args);
      }
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Extension method ${method} couldn't be found, doing nothing.`);
    }
  }]);
  return Hub;
}();
/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
  _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["GLOBAL_OBJ"].__SENTRY__ = _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["GLOBAL_OBJ"].__SENTRY__ || {
    extensions: {},
    hub: undefined
  };
  return _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["GLOBAL_OBJ"];
}

/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
  const registry = getMainCarrier();
  const oldHub = getHubFromCarrier(registry);
  setHubOnCarrier(registry, hub);
  return oldHub;
}

/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
  // Get main carrier (global for every environment)
  const registry = getMainCarrier();

  // If there's no hub, or its an old API, assign a new one
  if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
    setHubOnCarrier(registry, new Hub());
  }

  // Prefer domains over global if they are there (applicable only to Node environment)
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isNodeEnv"])()) {
    return getHubFromActiveDomain(registry);
  }
  // Return hub that lives on a global object
  return getHubFromCarrier(registry);
}

/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
  try {
    const sentry = getMainCarrier().__SENTRY__;
    const activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;

    // If there's no active domain, just return global hub
    if (!activeDomain) {
      return getHubFromCarrier(registry);
    }

    // If there's no hub on current domain, or it's an old API, assign a new one
    if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
      const registryHubTopStack = getHubFromCarrier(registry).getStackTop();
      setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, _scope_js__WEBPACK_IMPORTED_MODULE_4__["Scope"].clone(registryHubTopStack.scope)));
    }

    // Return hub that lives on a domain
    return getHubFromCarrier(activeDomain);
  } catch (_Oo) {
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
  }
}

/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
  return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}

/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getGlobalSingleton"])('hub', function () {
    return new Hub();
  }, carrier);
}

/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
  if (!carrier) return false;
  const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  __SENTRY__.hub = hub;
  return true;
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/core/esm/index.js ***!
  \************************************************/
/*! exports provided: addBreadcrumb, captureEvent, captureException, captureMessage, configureScope, setContext, setExtra, setExtras, setTag, setTags, setUser, startTransaction, withScope, Hub, getCurrentHub, getHubFromCarrier, getMainCarrier, makeMain, setHubOnCarrier, closeSession, makeSession, updateSession, SessionFlusher, Scope, addGlobalEventProcessor, getEnvelopeEndpointWithUrlEncodedAuth, getReportDialogEndpoint, BaseClient, initAndBind, createTransport, SDK_VERSION, getIntegrationsToSetup, Integrations, FunctionToString, InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports.js */ "./node_modules/@sentry/core/esm/exports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _exports_js__WEBPACK_IMPORTED_MODULE_0__["withScope"]; });

/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/core/esm/hub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["getMainCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["setHubOnCarrier"]; });

/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/core/esm/session.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSession", function() { return _session_js__WEBPACK_IMPORTED_MODULE_2__["closeSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSession", function() { return _session_js__WEBPACK_IMPORTED_MODULE_2__["makeSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSession", function() { return _session_js__WEBPACK_IMPORTED_MODULE_2__["updateSession"]; });

/* harmony import */ var _sessionflusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessionflusher.js */ "./node_modules/@sentry/core/esm/sessionflusher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionFlusher", function() { return _sessionflusher_js__WEBPACK_IMPORTED_MODULE_3__["SessionFlusher"]; });

/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/core/esm/scope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope_js__WEBPACK_IMPORTED_MODULE_4__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _scope_js__WEBPACK_IMPORTED_MODULE_4__["addGlobalEventProcessor"]; });

/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.js */ "./node_modules/@sentry/core/esm/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeEndpointWithUrlEncodedAuth", function() { return _api_js__WEBPACK_IMPORTED_MODULE_5__["getEnvelopeEndpointWithUrlEncodedAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportDialogEndpoint", function() { return _api_js__WEBPACK_IMPORTED_MODULE_5__["getReportDialogEndpoint"]; });

/* harmony import */ var _baseclient_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./baseclient.js */ "./node_modules/@sentry/core/esm/baseclient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return _baseclient_js__WEBPACK_IMPORTED_MODULE_6__["BaseClient"]; });

/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sdk.js */ "./node_modules/@sentry/core/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_7__["initAndBind"]; });

/* harmony import */ var _transports_base_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transports/base.js */ "./node_modules/@sentry/core/esm/transports/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return _transports_base_js__WEBPACK_IMPORTED_MODULE_8__["createTransport"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./version.js */ "./node_modules/@sentry/core/esm/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _version_js__WEBPACK_IMPORTED_MODULE_9__["SDK_VERSION"]; });

/* harmony import */ var _integration_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./integration.js */ "./node_modules/@sentry/core/esm/integration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntegrationsToSetup", function() { return _integration_js__WEBPACK_IMPORTED_MODULE_10__["getIntegrationsToSetup"]; });

/* harmony import */ var _integrations_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./integrations/index.js */ "./node_modules/@sentry/core/esm/integrations/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return _integrations_index_js__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _integrations_functiontostring_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./integrations/functiontostring.js */ "./node_modules/@sentry/core/esm/integrations/functiontostring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _integrations_functiontostring_js__WEBPACK_IMPORTED_MODULE_12__["FunctionToString"]; });

/* harmony import */ var _integrations_inboundfilters_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./integrations/inboundfilters.js */ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _integrations_inboundfilters_js__WEBPACK_IMPORTED_MODULE_13__["InboundFilters"]; });
















;
;

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integration.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integration.js ***!
  \******************************************************/
/*! exports provided: getIntegrationsToSetup, installedIntegrations, setupIntegrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntegrationsToSetup", function() { return getIntegrationsToSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installedIntegrations", function() { return installedIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupIntegrations", function() { return setupIntegrations; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/core/esm/hub.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/core/esm/scope.js");





const installedIntegrations = [];

/** Map of integrations assigned to a client */

/**
 * Remove duplicates from the given array, preferring the last instance of any duplicate. Not guaranteed to
 * preseve the order of integrations in the array.
 *
 * @private
 */
function filterDuplicates(integrations) {
  const integrationsByName = {};
  integrations.forEach(function (currentInstance) {
    const name = currentInstance.name;
    const existingInstance = integrationsByName[name];

    // We want integrations later in the array to overwrite earlier ones of the same type, except that we never want a
    // default instance to overwrite an existing user instance
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }
    integrationsByName[name] = currentInstance;
  });
  return Object.values(integrationsByName);
}

/** Gets integrations to install */
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;

  // We flag default instances, so that later we can tell them apart from any user-created instances of the same class
  defaultIntegrations.forEach(function (integration) {
    integration.isDefaultInstance = true;
  });
  let integrations;
  if (Array.isArray(userIntegrations)) {
    integrations = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(defaultIntegrations), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(userIntegrations));
  } else if (typeof userIntegrations === 'function') {
    integrations = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(userIntegrations(defaultIntegrations));
  } else {
    integrations = defaultIntegrations;
  }
  const finalIntegrations = filterDuplicates(integrations);

  // The `Debug` integration prints copies of the `event` and `hint` which will be passed to `beforeSend`. It therefore
  // has to run after all other integrations, so that the changes of all event processors will be reflected in the
  // printed values. For lack of a more elegant way to guarantee that, we therefore locate it and, assuming it exists,
  // pop it out of its current spot and shove it onto the end of the array.
  const debugIndex = finalIntegrations.findIndex(function (integration) {
    return integration.name === 'Debug';
  });
  if (debugIndex !== -1) {
    const _finalIntegrations$sp = finalIntegrations.splice(debugIndex, 1),
      _finalIntegrations$sp2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_finalIntegrations$sp, 1),
      debugInstance = _finalIntegrations$sp2[0];
    finalIntegrations.push(debugInstance);
  }
  return finalIntegrations;
}

/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(integrations) {
  const integrationIndex = {};
  integrations.forEach(function (integration) {
    integrationIndex[integration.name] = integration;
    if (installedIntegrations.indexOf(integration.name) === -1) {
      integration.setupOnce(_scope_js__WEBPACK_IMPORTED_MODULE_4__["addGlobalEventProcessor"], _hub_js__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"]);
      installedIntegrations.push(integration.name);
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Integration installed: ${integration.name}`);
    }
  });
  return integrationIndex;
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/functiontostring.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/functiontostring.js ***!
  \************************************************************************/
/*! exports provided: FunctionToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return FunctionToString; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



let originalFunctionToString;

/** Patch toString calls to return proper name for wrapped functions */
let FunctionToString = /*#__PURE__*/function () {
  function FunctionToString() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FunctionToString);
    FunctionToString.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FunctionToString, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = FunctionToString.id;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setupOnce",
    value: function setupOnce() {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      originalFunctionToString = Function.prototype.toString;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Function.prototype.toString = function () {
        const context = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getOriginalFunction"])(this) || this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return originalFunctionToString.apply(context, args);
      };
    }
  }], [{
    key: "__initStatic",
    value: function __initStatic() {
      this.id = 'FunctionToString';
    }
  }]);
  return FunctionToString;
}();
FunctionToString.__initStatic();


/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/inboundfilters.js ***!
  \**********************************************************************/
/*! exports provided: InboundFilters, _mergeOptions, _shouldDropEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return InboundFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mergeOptions", function() { return _mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_shouldDropEvent", function() { return _shouldDropEvent; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");





// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
const DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];

/** Options for the InboundFilters integration */

/** Inbound filters configurable by the user */
let InboundFilters = /*#__PURE__*/function () {
  function InboundFilters() {
    let _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, InboundFilters);
    ;
    this._options = _options;
    InboundFilters.prototype.__init.call(this);
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(InboundFilters, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = InboundFilters.id;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce(addGlobalEventProcessor, getCurrentHub) {
      const eventProcess = function (event) {
        const hub = getCurrentHub();
        if (hub) {
          const self = hub.getIntegration(InboundFilters);
          if (self) {
            const client = hub.getClient();
            const clientOptions = client ? client.getOptions() : {};
            const options = _mergeOptions(self._options, clientOptions);
            return _shouldDropEvent(event, options) ? null : event;
          }
        }
        return event;
      };
      eventProcess.id = this.name;
      addGlobalEventProcessor(eventProcess);
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = 'InboundFilters';
    }
  }]);
  return InboundFilters;
}();
InboundFilters.__initStatic();

/** JSDoc */
function _mergeOptions() {
  let internalOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let clientOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    allowUrls: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(internalOptions.allowUrls || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(clientOptions.allowUrls || [])),
    denyUrls: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(internalOptions.denyUrls || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(clientOptions.denyUrls || [])),
    ignoreErrors: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(internalOptions.ignoreErrors || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
    ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true
  };
}

/** JSDoc */
function _shouldDropEvent(event, options) {
  if (options.ignoreInternal && _isSentryError(event)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Event dropped due to being internal Sentry Error.\nEvent: ${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event)}`);
    return true;
  }
  if (_isIgnoredError(event, options.ignoreErrors)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event)}`);
    return true;
  }
  if (_isDeniedUrl(event, options.denyUrls)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
    return true;
  }
  if (!_isAllowedUrl(event, options.allowUrls)) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
    return true;
  }
  return false;
}
function _isIgnoredError(event, ignoreErrors) {
  if (!ignoreErrors || !ignoreErrors.length) {
    return false;
  }
  return _getPossibleEventMessages(event).some(function (message) {
    return ignoreErrors.some(function (pattern) {
      return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isMatchingPattern"])(message, pattern);
    });
  });
}
function _isDeniedUrl(event, denyUrls) {
  // TODO: Use Glob instead?
  if (!denyUrls || !denyUrls.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : denyUrls.some(function (pattern) {
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isMatchingPattern"])(url, pattern);
  });
}
function _isAllowedUrl(event, allowUrls) {
  // TODO: Use Glob instead?
  if (!allowUrls || !allowUrls.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : allowUrls.some(function (pattern) {
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isMatchingPattern"])(url, pattern);
  });
}
function _getPossibleEventMessages(event) {
  if (event.message) {
    return [event.message];
  }
  if (event.exception) {
    try {
      const _ref = event.exception.values && event.exception.values[0] || {},
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? '' : _ref$type,
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
      return [`${value}`, `${type}: ${value}`];
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Cannot extract message for event ${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event)}`);
      return [];
    }
  }
  return [];
}
function _isSentryError(event) {
  try {
    // @ts-ignore can't be a sentry error if undefined
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return event.exception.values[0].type === 'SentryError';
  } catch (e) {
    // ignore
  }
  return false;
}
function _getLastValidUrl() {
  let frames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];
    if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
      return frame.filename || null;
    }
  }
  return null;
}
function _getEventFilterUrl(event) {
  try {
    let frames;
    try {
      // @ts-ignore we only care about frames if the whole thing here is defined
      frames = event.exception.values[0].stacktrace.frames;
    } catch (e) {
      // ignore
    }
    return frames ? _getLastValidUrl(frames) : null;
  } catch (oO) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Cannot extract url for event ${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event)}`);
    return null;
  }
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/index.js ***!
  \*************************************************************/
/*! exports provided: FunctionToString, InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functiontostring_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functiontostring.js */ "./node_modules/@sentry/core/esm/integrations/functiontostring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _functiontostring_js__WEBPACK_IMPORTED_MODULE_0__["FunctionToString"]; });

/* harmony import */ var _inboundfilters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboundfilters.js */ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _inboundfilters_js__WEBPACK_IMPORTED_MODULE_1__["InboundFilters"]; });




/***/ }),

/***/ "./node_modules/@sentry/core/esm/scope.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/core/esm/scope.js ***!
  \************************************************/
/*! exports provided: Scope, addGlobalEventProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return addGlobalEventProcessor; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/core/esm/session.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * Default value for maximum number of breadcrumbs added to an event.
 */
const DEFAULT_MAX_BREADCRUMBS = 100;

/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
let Scope = /*#__PURE__*/function () {
  /** Flag if notifying is happening. */

  /** Callback for client to receive scope changes. */

  /** Callback list that will be called after {@link applyToEvent}. */

  /** Array of breadcrumbs. */

  /** User */

  /** Tags */

  /** Extra */

  /** Contexts */

  /** Attachments */

  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */

  /** Fingerprint */

  /** Severity */
  // eslint-disable-next-line deprecation/deprecation

  /** Transaction Name */

  /** Span */

  /** Session */

  /** Request Mode Session Status */

  function Scope() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Scope);
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
  }

  /**
   * Inherit values from the parent scope.
   * @param scope to clone.
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Scope, [{
    key: "addScopeListener",
    value:
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    function addScopeListener(callback) {
      this._scopeListeners.push(callback);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "addEventProcessor",
    value: function addEventProcessor(callback) {
      this._eventProcessors.push(callback);
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setUser",
    value: function setUser(user) {
      this._user = user || {};
      if (this._session) {
        Object(_session_js__WEBPACK_IMPORTED_MODULE_5__["updateSession"])(this._session, {
          user
        });
      }
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getUser",
    value: function getUser() {
      return this._user;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getRequestSession",
    value: function getRequestSession() {
      return this._requestSession;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setRequestSession",
    value: function setRequestSession(requestSession) {
      this._requestSession = requestSession;
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setTags",
    value: function setTags(tags) {
      this._tags = _objectSpread(_objectSpread({}, this._tags), tags);
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setTag",
    value: function setTag(key, value) {
      this._tags = _objectSpread(_objectSpread({}, this._tags), {}, {
        [key]: value
      });
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setExtras",
    value: function setExtras(extras) {
      this._extra = _objectSpread(_objectSpread({}, this._extra), extras);
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setExtra",
    value: function setExtra(key, extra) {
      this._extra = _objectSpread(_objectSpread({}, this._extra), {}, {
        [key]: extra
      });
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setFingerprint",
    value: function setFingerprint(fingerprint) {
      this._fingerprint = fingerprint;
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setLevel",
    value: function setLevel(
    // eslint-disable-next-line deprecation/deprecation
    level) {
      this._level = level;
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setTransactionName",
    value: function setTransactionName(name) {
      this._transactionName = name;
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setContext",
    value: function setContext(key, context) {
      if (context === null) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete this._contexts[key];
      } else {
        this._contexts = _objectSpread(_objectSpread({}, this._contexts), {}, {
          [key]: context
        });
      }
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setSpan",
    value: function setSpan(span) {
      this._span = span;
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getSpan",
    value: function getSpan() {
      return this._span;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getTransaction",
    value: function getTransaction() {
      // Often, this span (if it exists at all) will be a transaction, but it's not guaranteed to be. Regardless, it will
      // have a pointer to the currently-active transaction.
      const span = this.getSpan();
      return span && span.transaction;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setSession",
    value: function setSession(session) {
      if (!session) {
        delete this._session;
      } else {
        this._session = session;
      }
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getSession",
    value: function getSession() {
      return this._session;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "update",
    value: function update(captureContext) {
      if (!captureContext) {
        return this;
      }
      if (typeof captureContext === 'function') {
        const updatedScope = captureContext(this);
        return updatedScope instanceof Scope ? updatedScope : this;
      }
      if (captureContext instanceof Scope) {
        this._tags = _objectSpread(_objectSpread({}, this._tags), captureContext._tags);
        this._extra = _objectSpread(_objectSpread({}, this._extra), captureContext._extra);
        this._contexts = _objectSpread(_objectSpread({}, this._contexts), captureContext._contexts);
        if (captureContext._user && Object.keys(captureContext._user).length) {
          this._user = captureContext._user;
        }
        if (captureContext._level) {
          this._level = captureContext._level;
        }
        if (captureContext._fingerprint) {
          this._fingerprint = captureContext._fingerprint;
        }
        if (captureContext._requestSession) {
          this._requestSession = captureContext._requestSession;
        }
      } else if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["isPlainObject"])(captureContext)) {
        // eslint-disable-next-line no-param-reassign
        captureContext = captureContext;
        this._tags = _objectSpread(_objectSpread({}, this._tags), captureContext.tags);
        this._extra = _objectSpread(_objectSpread({}, this._extra), captureContext.extra);
        this._contexts = _objectSpread(_objectSpread({}, this._contexts), captureContext.contexts);
        if (captureContext.user) {
          this._user = captureContext.user;
        }
        if (captureContext.level) {
          this._level = captureContext.level;
        }
        if (captureContext.fingerprint) {
          this._fingerprint = captureContext.fingerprint;
        }
        if (captureContext.requestSession) {
          this._requestSession = captureContext.requestSession;
        }
      }
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "clear",
    value: function clear() {
      this._breadcrumbs = [];
      this._tags = {};
      this._extra = {};
      this._user = {};
      this._contexts = {};
      this._level = undefined;
      this._transactionName = undefined;
      this._fingerprint = undefined;
      this._requestSession = undefined;
      this._span = undefined;
      this._session = undefined;
      this._notifyScopeListeners();
      this._attachments = [];
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "addBreadcrumb",
    value: function addBreadcrumb(breadcrumb, maxBreadcrumbs) {
      const maxCrumbs = typeof maxBreadcrumbs === 'number' ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;

      // No data has been changed, so don't notify scope listeners
      if (maxCrumbs <= 0) {
        return this;
      }
      const mergedBreadcrumb = _objectSpread({
        timestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["dateTimestampInSeconds"])()
      }, breadcrumb);
      this._breadcrumbs = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this._breadcrumbs), [mergedBreadcrumb]).slice(-maxCrumbs);
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "clearBreadcrumbs",
    value: function clearBreadcrumbs() {
      this._breadcrumbs = [];
      this._notifyScopeListeners();
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "addAttachment",
    value: function addAttachment(attachment) {
      this._attachments.push(attachment);
      return this;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "getAttachments",
    value: function getAttachments() {
      return this._attachments;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "clearAttachments",
    value: function clearAttachments() {
      this._attachments = [];
      return this;
    }

    /**
     * Applies data from the scope to the event and runs all event processors on it.
     *
     * @param event Event
     * @param hint Object containing additional information about the original exception, for use by the event processors.
     * @hidden
     */
  }, {
    key: "applyToEvent",
    value: function applyToEvent(event) {
      let hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._extra && Object.keys(this._extra).length) {
        event.extra = _objectSpread(_objectSpread({}, this._extra), event.extra);
      }
      if (this._tags && Object.keys(this._tags).length) {
        event.tags = _objectSpread(_objectSpread({}, this._tags), event.tags);
      }
      if (this._user && Object.keys(this._user).length) {
        event.user = _objectSpread(_objectSpread({}, this._user), event.user);
      }
      if (this._contexts && Object.keys(this._contexts).length) {
        event.contexts = _objectSpread(_objectSpread({}, this._contexts), event.contexts);
      }
      if (this._level) {
        event.level = this._level;
      }
      if (this._transactionName) {
        event.transaction = this._transactionName;
      }

      // We want to set the trace context for normal events only if there isn't already
      // a trace context on the event. There is a product feature in place where we link
      // errors with transaction and it relies on that.
      if (this._span) {
        event.contexts = _objectSpread({
          trace: this._span.getTraceContext()
        }, event.contexts);
        const transactionName = this._span.transaction && this._span.transaction.name;
        if (transactionName) {
          event.tags = _objectSpread({
            transaction: transactionName
          }, event.tags);
        }
      }
      this._applyFingerprint(event);
      event.breadcrumbs = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(event.breadcrumbs || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this._breadcrumbs));
      event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
      event.sdkProcessingMetadata = _objectSpread(_objectSpread({}, event.sdkProcessingMetadata), this._sdkProcessingMetadata);
      return this._notifyEventProcessors([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(getGlobalEventProcessors()), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this._eventProcessors)), event, hint);
    }

    /**
     * Add data which will be accessible during event processing but won't get sent to Sentry
     */
  }, {
    key: "setSDKProcessingMetadata",
    value: function setSDKProcessingMetadata(newData) {
      this._sdkProcessingMetadata = _objectSpread(_objectSpread({}, this._sdkProcessingMetadata), newData);
      return this;
    }

    /**
     * This will be called after {@link applyToEvent} is finished.
     */
  }, {
    key: "_notifyEventProcessors",
    value: function _notifyEventProcessors(processors, event, hint) {
      var _this = this;
      let index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return new _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["SyncPromise"](function (resolve, reject) {
        const processor = processors[index];
        if (event === null || typeof processor !== 'function') {
          resolve(event);
        } else {
          const result = processor(_objectSpread({}, event), hint);
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && processor.id && result === null && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["logger"].log(`Event processor "${processor.id}" dropped event`);
          if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["isThenable"])(result)) {
            void result.then(function (final) {
              return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve);
            }).then(null, reject);
          } else {
            void _this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
          }
        }
      });
    }

    /**
     * This will be called on every set call.
     */
  }, {
    key: "_notifyScopeListeners",
    value: function _notifyScopeListeners() {
      var _this2 = this;
      // We need this check for this._notifyingListeners to be able to work on scope during updates
      // If this check is not here we'll produce endless recursion when something is done with the scope
      // during the callback.
      if (!this._notifyingListeners) {
        this._notifyingListeners = true;
        this._scopeListeners.forEach(function (callback) {
          callback(_this2);
        });
        this._notifyingListeners = false;
      }
    }

    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
  }, {
    key: "_applyFingerprint",
    value: function _applyFingerprint(event) {
      // Make sure it's an array first and we actually have something in place
      event.fingerprint = event.fingerprint ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["arrayify"])(event.fingerprint) : [];

      // If we have something on the scope, then merge it with event
      if (this._fingerprint) {
        event.fingerprint = event.fingerprint.concat(this._fingerprint);
      }

      // If we have no data at all, remove empty array default
      if (event.fingerprint && !event.fingerprint.length) {
        delete event.fingerprint;
      }
    }
  }], [{
    key: "clone",
    value: function clone(scope) {
      const newScope = new Scope();
      if (scope) {
        newScope._breadcrumbs = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(scope._breadcrumbs);
        newScope._tags = _objectSpread({}, scope._tags);
        newScope._extra = _objectSpread({}, scope._extra);
        newScope._contexts = _objectSpread({}, scope._contexts);
        newScope._user = scope._user;
        newScope._level = scope._level;
        newScope._span = scope._span;
        newScope._session = scope._session;
        newScope._transactionName = scope._transactionName;
        newScope._fingerprint = scope._fingerprint;
        newScope._eventProcessors = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(scope._eventProcessors);
        newScope._requestSession = scope._requestSession;
        newScope._attachments = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(scope._attachments);
      }
      return newScope;
    }
  }]);
  return Scope;
}();
/**
 * Returns the global event processors.
 */
function getGlobalEventProcessors() {
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["getGlobalSingleton"])('globalEventProcessors', function () {
    return [];
  });
}

/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
  getGlobalEventProcessors().push(callback);
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/sdk.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/sdk.js ***!
  \**********************************************/
/*! exports provided: initAndBind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return initAndBind; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/core/esm/hub.js");



/** A class object that can instantiate Client objects. */

/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
  if (options.debug === true) {
    if (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) {
      _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].enable();
    } else {
      // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
      // eslint-disable-next-line no-console
      console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
    }
  }
  const hub = Object(_hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
  const scope = hub.getScope();
  if (scope) {
    scope.update(options.initialScope);
  }
  const client = new clientClass(options);
  hub.bindClient(client);
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/session.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/core/esm/session.js ***!
  \**************************************************/
/*! exports provided: closeSession, makeSession, updateSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSession", function() { return closeSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSession", function() { return makeSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSession", function() { return updateSession; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */
function makeSession(context) {
  // Both timestamp and started are in seconds since the UNIX epoch.
  const startingTime = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["timestampInSeconds"])();
  const session = {
    sid: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["uuid4"])(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: 'ok',
    errors: 0,
    ignoreDuration: false,
    toJSON: function () {
      return sessionToJSON(session);
    }
  };
  if (context) {
    updateSession(session, context);
  }
  return session;
}

/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see BaseClient.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */
// eslint-disable-next-line complexity
function updateSession(session) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }
    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }
  session.timestamp = context.timestamp || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["timestampInSeconds"])();
  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    // Good enough uuid validation. — Kamil
    session.sid = context.sid.length === 32 ? context.sid : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["uuid4"])();
  }
  if (context.init !== undefined) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === 'number') {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = undefined;
  } else if (typeof context.duration === 'number') {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === 'number') {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}

/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = {
      status
    };
  } else if (session.status === 'ok') {
    context = {
      status: 'exited'
    };
  }
  updateSession(session, context);
}

/**
 * Serializes a passed session object to a JSON object with a slightly different structure.
 * This is necessary because the Sentry backend requires a slightly different schema of a session
 * than the one the JS SDKs use internally.
 *
 * @param session the session to be converted
 *
 * @returns a JSON object of the passed session
 */
function sessionToJSON(session) {
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["dropUndefinedKeys"])({
    sid: `${session.sid}`,
    init: session.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(session.started * 1000).toISOString(),
    timestamp: new Date(session.timestamp * 1000).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === 'number' || typeof session.did === 'string' ? `${session.did}` : undefined,
    duration: session.duration,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent
    }
  });
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/sessionflusher.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/core/esm/sessionflusher.js ***!
  \*********************************************************/
/*! exports provided: SessionFlusher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionFlusher", function() { return SessionFlusher; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/core/esm/hub.js");





/**
 * @inheritdoc
 */
let SessionFlusher = /*#__PURE__*/function () {
  function SessionFlusher(client, attrs) {
    var _this = this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SessionFlusher);
    ;
    SessionFlusher.prototype.__init.call(this);
    SessionFlusher.prototype.__init2.call(this);
    SessionFlusher.prototype.__init3.call(this);
    this._client = client;
    // Call to setInterval, so that flush is called every 60 seconds
    this._intervalId = setInterval(function () {
      return _this.flush();
    }, this.flushTimeout * 1000);
    this._sessionAttrs = attrs;
  }

  /** Checks if `pendingAggregates` has entries, and if it does flushes them by calling `sendSession` */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SessionFlusher, [{
    key: "__init",
    value: function __init() {
      this.flushTimeout = 60;
    }
  }, {
    key: "__init2",
    value: function __init2() {
      this._pendingAggregates = {};
    }
  }, {
    key: "__init3",
    value: function __init3() {
      this._isEnabled = true;
    }
  }, {
    key: "flush",
    value: function flush() {
      const sessionAggregates = this.getSessionAggregates();
      if (sessionAggregates.aggregates.length === 0) {
        return;
      }
      this._pendingAggregates = {};
      this._client.sendSession(sessionAggregates);
    }

    /** Massages the entries in `pendingAggregates` and returns aggregated sessions */
  }, {
    key: "getSessionAggregates",
    value: function getSessionAggregates() {
      var _this2 = this;
      const aggregates = Object.keys(this._pendingAggregates).map(function (key) {
        return _this2._pendingAggregates[parseInt(key)];
      });
      const sessionAggregates = {
        attrs: this._sessionAttrs,
        aggregates
      };
      return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["dropUndefinedKeys"])(sessionAggregates);
    }

    /** JSDoc */
  }, {
    key: "close",
    value: function close() {
      clearInterval(this._intervalId);
      this._isEnabled = false;
      this.flush();
    }

    /**
     * Wrapper function for _incrementSessionStatusCount that checks if the instance of SessionFlusher is enabled then
     * fetches the session status of the request from `Scope.getRequestSession().status` on the scope and passes them to
     * `_incrementSessionStatusCount` along with the start date
     */
  }, {
    key: "incrementSessionStatusCount",
    value: function incrementSessionStatusCount() {
      if (!this._isEnabled) {
        return;
      }
      const scope = Object(_hub_js__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().getScope();
      const requestSession = scope && scope.getRequestSession();
      if (requestSession && requestSession.status) {
        this._incrementSessionStatusCount(requestSession.status, new Date());
        // This is not entirely necessarily but is added as a safe guard to indicate the bounds of a request and so in
        // case captureRequestSession is called more than once to prevent double count
        if (scope) {
          scope.setRequestSession(undefined);
        }
        /* eslint-enable @typescript-eslint/no-unsafe-member-access */
      }
    }

    /**
     * Increments status bucket in pendingAggregates buffer (internal state) corresponding to status of
     * the session received
     */
  }, {
    key: "_incrementSessionStatusCount",
    value: function _incrementSessionStatusCount(status, date) {
      // Truncate minutes and seconds on Session Started attribute to have one minute bucket keys
      const sessionStartedTrunc = new Date(date).setSeconds(0, 0);
      this._pendingAggregates[sessionStartedTrunc] = this._pendingAggregates[sessionStartedTrunc] || {};

      // corresponds to aggregated sessions in one specific minute bucket
      // for example, {"started":"2021-03-16T08:00:00.000Z","exited":4, "errored": 1}
      const aggregationCounts = this._pendingAggregates[sessionStartedTrunc];
      if (!aggregationCounts.started) {
        aggregationCounts.started = new Date(sessionStartedTrunc).toISOString();
      }
      switch (status) {
        case 'errored':
          aggregationCounts.errored = (aggregationCounts.errored || 0) + 1;
          return aggregationCounts.errored;
        case 'ok':
          aggregationCounts.exited = (aggregationCounts.exited || 0) + 1;
          return aggregationCounts.exited;
        default:
          aggregationCounts.crashed = (aggregationCounts.crashed || 0) + 1;
          return aggregationCounts.crashed;
      }
    }
  }]);
  return SessionFlusher;
}();


/***/ }),

/***/ "./node_modules/@sentry/core/esm/transports/base.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/core/esm/transports/base.js ***!
  \**********************************************************/
/*! exports provided: DEFAULT_TRANSPORT_BUFFER_SIZE, createTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRANSPORT_BUFFER_SIZE", function() { return DEFAULT_TRANSPORT_BUFFER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return createTransport; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

const DEFAULT_TRANSPORT_BUFFER_SIZE = 30;

/**
 * Creates an instance of a Sentry `Transport`
 *
 * @param options
 * @param makeRequest
 */
function createTransport(options, makeRequest) {
  let buffer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["makePromiseBuffer"])(options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE);
  let rateLimits = {};
  const flush = function (timeout) {
    return buffer.drain(timeout);
  };
  function send(envelope) {
    const filteredEnvelopeItems = [];

    // Drop rate limited items from envelope
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["forEachEnvelopeItem"])(envelope, function (item, type) {
      const envelopeItemDataCategory = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["envelopeItemTypeToDataCategory"])(type);
      if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isRateLimited"])(rateLimits, envelopeItemDataCategory)) {
        options.recordDroppedEvent('ratelimit_backoff', envelopeItemDataCategory);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });

    // Skip sending if envelope is empty after filtering out rate limited events
    if (filteredEnvelopeItems.length === 0) {
      return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["resolvedSyncPromise"])();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filteredEnvelope = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["createEnvelope"])(envelope[0], filteredEnvelopeItems);

    // Creates client report for each item in an envelope
    const recordEnvelopeLoss = function (reason) {
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["forEachEnvelopeItem"])(filteredEnvelope, function (_, type) {
        options.recordDroppedEvent(reason, Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["envelopeItemTypeToDataCategory"])(type));
      });
    };
    const requestTask = function () {
      return makeRequest({
        body: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["serializeEnvelope"])(filteredEnvelope, options.textEncoder)
      }).then(function (response) {
        // We don't want to throw on NOK responses, but we want to at least log them
        if (response.statusCode !== undefined && (response.statusCode < 200 || response.statusCode >= 300)) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
        }
        rateLimits = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["updateRateLimits"])(rateLimits, response);
      }, function (error) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].error('Failed while sending event:', error);
        recordEnvelopeLoss('network_error');
      });
    };
    return buffer.add(requestTask).then(function (result) {
      return result;
    }, function (error) {
      if (error instanceof _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["SentryError"]) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].error('Skipped sending event because buffer is full.');
        recordEnvelopeLoss('queue_overflow');
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["resolvedSyncPromise"])();
      } else {
        throw error;
      }
    });
  }
  return {
    send,
    flush
  };
}


/***/ }),

/***/ "./node_modules/@sentry/core/esm/version.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/core/esm/version.js ***!
  \**************************************************/
/*! exports provided: SDK_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return SDK_VERSION; });
const SDK_VERSION = '7.16.0';


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/baggage.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/baggage.js ***!
  \***************************************************/
/*! exports provided: BAGGAGE_HEADER_NAME, MAX_BAGGAGE_STRING_LENGTH, SENTRY_BAGGAGE_KEY_PREFIX, SENTRY_BAGGAGE_KEY_PREFIX_REGEX, baggageHeaderToDynamicSamplingContext, dynamicSamplingContextToSentryBaggageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAGGAGE_HEADER_NAME", function() { return BAGGAGE_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_BAGGAGE_STRING_LENGTH", function() { return MAX_BAGGAGE_STRING_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENTRY_BAGGAGE_KEY_PREFIX", function() { return SENTRY_BAGGAGE_KEY_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENTRY_BAGGAGE_KEY_PREFIX_REGEX", function() { return SENTRY_BAGGAGE_KEY_PREFIX_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baggageHeaderToDynamicSamplingContext", function() { return baggageHeaderToDynamicSamplingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicSamplingContextToSentryBaggageHeader", function() { return dynamicSamplingContextToSentryBaggageHeader; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/utils/esm/logger.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const BAGGAGE_HEADER_NAME = 'baggage';
const SENTRY_BAGGAGE_KEY_PREFIX = 'sentry-';
const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;

/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */
const MAX_BAGGAGE_STRING_LENGTH = 8192;

/**
 * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
 * from it.
 *
 * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
 * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
 */
function baggageHeaderToDynamicSamplingContext(
// Very liberal definition of what any incoming header might look like
baggageHeader) {
  if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(baggageHeader) && !Array.isArray(baggageHeader)) {
    return undefined;
  }

  // Intermediary object to store baggage key value pairs of incoming baggage headers on.
  // It is later used to read Sentry-DSC-values from.
  let baggageObject = {};
  if (Array.isArray(baggageHeader)) {
    // Combine all baggage headers into one object containing the baggage values so we can later read the Sentry-DSC-values from it
    baggageObject = baggageHeader.reduce(function (acc, curr) {
      const currBaggageObject = baggageHeaderToObject(curr);
      return _objectSpread(_objectSpread({}, acc), currBaggageObject);
    }, {});
  } else {
    // Return undefined if baggage header is an empty string (technically an empty baggage header is not spec conform but
    // this is how we choose to handle it)
    if (!baggageHeader) {
      return undefined;
    }
    baggageObject = baggageHeaderToObject(baggageHeader);
  }

  // Read all "sentry-" prefixed values out of the baggage object and put it onto a dynamic sampling context object.
  const dynamicSamplingContext = Object.entries(baggageObject).reduce(function (acc, _ref) {
    let _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});

  // Only return a dynamic sampling context object if there are keys in it.
  // A keyless object means there were no sentry values on the header, which means that there is no DSC.
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext;
  } else {
    return undefined;
  }
}

/**
 * Turns a Dynamic Sampling Object into a baggage header by prefixing all the keys on the object with "sentry-".
 *
 * @param dynamicSamplingContext The Dynamic Sampling Context to turn into a header. For convenience and compatibility
 * with the `getDynamicSamplingContext` method on the Transaction class ,this argument can also be `undefined`. If it is
 * `undefined` the function will return `undefined`.
 * @returns a baggage header, created from `dynamicSamplingContext`, or `undefined` either if `dynamicSamplingContext`
 * was `undefined`, or if `dynamicSamplingContext` didn't contain any values.
 */
function dynamicSamplingContextToSentryBaggageHeader(
// this also takes undefined for convenience and bundle size in other places
dynamicSamplingContext) {
  // Prefix all DSC keys with "sentry-" and put them into a new object
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(function (acc, _ref3) {
    let _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 2),
      dscKey = _ref4[0],
      dscValue = _ref4[1];
    if (dscValue) {
      acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
    }
    return acc;
  }, {});
  return objectToBaggageHeader(sentryPrefixedDSC);
}

/**
 * Will parse a baggage header, which is a simple key-value map, into a flat object.
 *
 * @param baggageHeader The baggage header to parse.
 * @returns a flat object containing all the key-value pairs from `baggageHeader`.
 */
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader.split(',').map(function (baggageEntry) {
    return baggageEntry.split('=').map(function (keyOrValue) {
      return decodeURIComponent(keyOrValue.trim());
    });
  }).reduce(function (acc, _ref5) {
    let _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, 2),
      key = _ref6[0],
      value = _ref6[1];
    acc[key] = value;
    return acc;
  }, {});
}

/**
 * Turns a flat object (key-value pairs) into a baggage header, which is also just key-value pairs.
 *
 * @param object The object to turn into a baggage header.
 * @returns a baggage header string, or `undefined` if the object didn't have any values, since an empty baggage header
 * is not spec compliant.
 */
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    // An empty baggage header is not spec compliant: We return undefined.
    return undefined;
  }
  return Object.entries(object).reduce(function (baggageHeader, _ref7, currentIndex) {
    let _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref7, 2),
      objectKey = _ref8[0],
      objectValue = _ref8[1];
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`);
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, '');
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/browser.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/browser.js ***!
  \***************************************************/
/*! exports provided: WINDOW, getDomElement, getLocationHref, htmlTreeAsString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomElement", function() { return getDomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return getLocationHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return htmlTreeAsString; });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/utils/esm/worldwide.js");



/**
 * TODO: Move me to @sentry/browser when @sentry/utils no longer contains any browser code
 */
const WINDOW = _worldwide_js__WEBPACK_IMPORTED_MODULE_1__["GLOBAL_OBJ"];

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem, keyAttrs) {
  // try/catch both:
  // - accessing event.target (see getsentry/raven-js#838, #768)
  // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
  // - can throw an exception in some circumstances.
  try {
    let currentElem = elem;
    const MAX_TRAVERSE_HEIGHT = 5;
    const MAX_OUTPUT_LEN = 80;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = ' > ';
    const sepLength = separator.length;
    let nextStr;

    // eslint-disable-next-line no-plusplus
    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      // bail out if
      // - nextStr is the 'html' element
      // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
      //   (ignore this limit if we are on the first iteration)
      if (nextStr === 'html' || height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN) {
        break;
      }
      out.push(nextStr);
      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }
    return out.reverse().join(separator);
  } catch (_oO) {
    return '<unknown>';
  }
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
  const elem = el;
  const out = [];
  let className;
  let classes;
  let key;
  let attr;
  let i;
  if (!elem || !elem.tagName) {
    return '';
  }
  out.push(elem.tagName.toLowerCase());

  // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
  const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter(function (keyAttr) {
    return elem.getAttribute(keyAttr);
  }).map(function (keyAttr) {
    return [keyAttr, elem.getAttribute(keyAttr)];
  }) : null;
  if (keyAttrPairs && keyAttrPairs.length) {
    keyAttrPairs.forEach(function (keyAttrPair) {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }

    // eslint-disable-next-line prefer-const
    className = elem.className;
    if (className && Object(_is_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(className)) {
      classes = className.split(/\s+/);
      for (i = 0; i < classes.length; i++) {
        out.push(`.${classes[i]}`);
      }
    }
  }
  const allowedAttrs = ['type', 'name', 'title', 'alt'];
  for (i = 0; i < allowedAttrs.length; i++) {
    key = allowedAttrs[i];
    attr = elem.getAttribute(key);
    if (attr) {
      out.push(`[${key}="${attr}"]`);
    }
  }
  return out.join('');
}

/**
 * A safe form of location.href
 */
function getLocationHref() {
  try {
    return WINDOW.document.location.href;
  } catch (oO) {
    return '';
  }
}

/**
 * Gets a DOM element by using document.querySelector.
 *
 * This wrapper will first check for the existance of the function before
 * actually calling it so that we don't have to take care of this check,
 * every time we want to access the DOM.
 *
 * Reason: DOM/querySelector is not available in all environments.
 *
 * We have to cast to any because utils can be consumed by a variety of environments,
 * and we don't want to break TS users. If you know what element will be selected by
 * `document.querySelector`, specify it as part of the generic call. For example,
 * `const element = getDomElement<Element>('selector');`
 *
 * @param selector the selector string passed on to document.querySelector
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDomElement(selector) {
  if (WINDOW.document && WINDOW.document.querySelector) {
    return WINDOW.document.querySelector(selector);
  }
  return null;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_asyncNullishCoalesce.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_asyncNullishCoalesce.js ***!
  \********************************************************************************/
/*! exports provided: _asyncNullishCoalesce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_asyncNullishCoalesce", function() { return _asyncNullishCoalesce; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nullishCoalesce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nullishCoalesce.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js");



// adapted from Sucrase (https://github.com/alangpierce/sucrase)

/**
 * Polyfill for the nullish coalescing operator (`??`), when used in situations where at least one of the values is the
 * result of an async operation.
 *
 * Note that the RHS is wrapped in a function so that if it's a computed value, that evaluation won't happen unless the
 * LHS evaluates to a nullish value, to mimic the operator's short-circuiting behavior.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param lhs The value of the expression to the left of the `??`
 * @param rhsFn A function returning the value of the expression to the right of the `??`
 * @returns The LHS value, unless it's `null` or `undefined`, in which case, the RHS value
 */
// eslint-disable-next-line @sentry-internal/sdk/no-async-await
function _asyncNullishCoalesce(lhs, rhsFn) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _asyncNullishCoalesce$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        return _context.abrupt("return", Object(_nullishCoalesce_js__WEBPACK_IMPORTED_MODULE_1__["_nullishCoalesce"])(lhs, rhsFn));
      case 1:
      case "end":
        return _context.stop();
    }
  }, null, null, null, Promise);
}

// Sucrase version:
// async function _asyncNullishCoalesce(lhs, rhsFn) {
//   if (lhs != null) {
//     return lhs;
//   } else {
//     return await rhsFn();
//   }
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChain.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChain.js ***!
  \******************************************************************************/
/*! exports provided: _asyncOptionalChain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_asyncOptionalChain", function() { return _asyncOptionalChain; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
 * descriptors, and functions, for situations in which at least one part of the expression is async.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase) See
 * https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
 *
 * @param ops Array result of expression conversion
 * @returns The value of the expression
 */
// eslint-disable-next-line @sentry-internal/sdk/no-async-await
function _asyncOptionalChain(ops) {
  var lastAccessLHS, value, i, op, fn;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _asyncOptionalChain$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        lastAccessLHS = undefined;
        value = ops[0];
        i = 1;
      case 3:
        if (!(i < ops.length)) {
          _context.next = 23;
          break;
        }
        op = ops[i];
        fn = ops[i + 1];
        i += 2;
        // by checking for loose equality to `null`, we catch both `null` and `undefined`
        if (!((op === 'optionalAccess' || op === 'optionalCall') && value == null)) {
          _context.next = 9;
          break;
        }
        return _context.abrupt("return");
      case 9:
        if (!(op === 'access' || op === 'optionalAccess')) {
          _context.next = 16;
          break;
        }
        lastAccessLHS = value;
        _context.next = 13;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fn(value));
      case 13:
        value = _context.sent;
        _context.next = 21;
        break;
      case 16:
        if (!(op === 'call' || op === 'optionalCall')) {
          _context.next = 21;
          break;
        }
        _context.next = 19;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fn(function () {
          var _value;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return (_value = value).call.apply(_value, [lastAccessLHS].concat(args));
        }));
      case 19:
        value = _context.sent;
        lastAccessLHS = undefined;
      case 21:
        _context.next = 3;
        break;
      case 23:
        return _context.abrupt("return", value);
      case 24:
      case "end":
        return _context.stop();
    }
  }, null, null, null, Promise);
}

// Sucrase version:
// async function _asyncOptionalChain(ops) {
//   let lastAccessLHS = undefined;
//   let value = ops[0];
//   let i = 1;
//   while (i < ops.length) {
//     const op = ops[i];
//     const fn = ops[i + 1];
//     i += 2;
//     if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
//       return undefined;
//     }
//     if (op === 'access' || op === 'optionalAccess') {
//       lastAccessLHS = value;
//       value = await fn(value);
//     } else if (op === 'call' || op === 'optionalCall') {
//       value = await fn((...args) => value.call(lastAccessLHS, ...args));
//       lastAccessLHS = undefined;
//     }
//   }
//   return value;
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChainDelete.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChainDelete.js ***!
  \************************************************************************************/
/*! exports provided: _asyncOptionalChainDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_asyncOptionalChainDelete", function() { return _asyncOptionalChainDelete; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _asyncOptionalChain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_asyncOptionalChain.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChain.js");



/**
 * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
 * descriptors, and functions, in cases where the value of the expression is to be deleted.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase) See
 * https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
 *
 * @param ops Array result of expression conversion
 * @returns The return value of the `delete` operator: `true`, unless the deletion target is an own, non-configurable
 * property (one which can't be deleted or turned into an accessor, and whose enumerability can't be changed), in which
 * case `false`.
 */
// eslint-disable-next-line @sentry-internal/sdk/no-async-await
function _asyncOptionalChainDelete(ops) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _asyncOptionalChainDelete$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_asyncOptionalChain_js__WEBPACK_IMPORTED_MODULE_1__["_asyncOptionalChain"])(ops));
      case 2:
        result = _context.sent;
        return _context.abrupt("return", result == null ? true : result);
      case 4:
      case "end":
        return _context.stop();
    }
  }, null, null, null, Promise);
}

// Sucrase version:
// async function asyncOptionalChainDelete(ops) {
//   const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
//   return result == null ? true : result;
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_createNamedExportFrom.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_createNamedExportFrom.js ***!
  \*********************************************************************************/
/*! exports provided: _createNamedExportFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createNamedExportFrom", function() { return _createNamedExportFrom; });
/**
 * Copy a property from the given object into `exports`, under the given name.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param obj The object containing the property to copy.
 * @param localName The name under which to export the property
 * @param importedName The name under which the property lives in `obj`
 */
function _createNamedExportFrom(obj, localName, importedName) {
  exports[localName] = obj[importedName];
}

// Sucrase version:
// function _createNamedExportFrom(obj, localName, importedName) {
//   Object.defineProperty(exports, localName, {enumerable: true, get: () => obj[importedName]});
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_createStarExport.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_createStarExport.js ***!
  \****************************************************************************/
/*! exports provided: _createStarExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createStarExport", function() { return _createStarExport; });
/**
 * Copy properties from an object into `exports`.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param obj The object containing the properties to copy.
 */
function _createStarExport(obj) {
  Object.keys(obj).filter(function (key) {
    return key !== 'default' && key !== '__esModule' && !(key in exports);
  }).forEach(function (key) {
    return exports[key] = obj[key];
  });
}

// Sucrase version:
// function _createStarExport(obj) {
//   Object.keys(obj)
//     .filter(key => key !== 'default' && key !== '__esModule')
//     .forEach(key => {
//       if (exports.hasOwnProperty(key)) {
//         return;
//       }
//       Object.defineProperty(exports, key, { enumerable: true, get: () => obj[key] });
//     });
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopDefault.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_interopDefault.js ***!
  \**************************************************************************/
/*! exports provided: _interopDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interopDefault", function() { return _interopDefault; });
/**
 * Unwraps a module if it has been wrapped in an object under the key `default`.
 *
 * Adapted from Rollup (https://github.com/rollup/rollup)
 *
 * @param requireResult The result of calling `require` on a module
 * @returns The full module, unwrapped if necessary.
 */
function _interopDefault(requireResult) {
  return requireResult.__esModule ? requireResult.default : requireResult;
}

// Rollup version:
// function _interopDefault(e) {
//   return e && e.__esModule ? e['default'] : e;
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespace.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespace.js ***!
  \****************************************************************************/
/*! exports provided: _interopNamespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interopNamespace", function() { return _interopNamespace; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Adds a self-referential `default` property to CJS modules which aren't the result of transpilation from ESM modules.
 *
 * Adapted from Rollup (https://github.com/rollup/rollup)
 *
 * @param requireResult The result of calling `require` on a module
 * @returns Either `requireResult` or a copy of `requireResult` with an added self-referential `default` property
 */
function _interopNamespace(requireResult) {
  return requireResult.__esModule ? requireResult : _objectSpread(_objectSpread({}, requireResult), {}, {
    default: requireResult
  });
}

// Rollup version (with `output.externalLiveBindings` and `output.freeze` both set to false)
// function _interopNamespace(e) {
//   if (e && e.__esModule) return e;
//   var n = Object.create(null);
//   if (e) {
//     for (var k in e) {
//       n[k] = e[k];
//     }
//   }
//   n["default"] = e;
//   return n;
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespaceDefaultOnly.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespaceDefaultOnly.js ***!
  \***************************************************************************************/
/*! exports provided: _interopNamespaceDefaultOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interopNamespaceDefaultOnly", function() { return _interopNamespaceDefaultOnly; });
/**
 * Wrap a module in an object, as the value under the key `default`.
 *
 * Adapted from Rollup (https://github.com/rollup/rollup)
 *
 * @param requireResult The result of calling `require` on a module
 * @returns An object containing the key-value pair (`default`, `requireResult`)
 */
function _interopNamespaceDefaultOnly(requireResult) {
  return {
    __proto__: null,
    default: requireResult
  };
}

// Rollup version
// function _interopNamespaceDefaultOnly(e) {
//   return {
//     __proto__: null,
//     'default': e
//   };
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireDefault.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireDefault.js ***!
  \*********************************************************************************/
/*! exports provided: _interopRequireDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interopRequireDefault", function() { return _interopRequireDefault; });
/**
 * Wraps modules which aren't the result of transpiling an ESM module in an object under the key `default`
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param requireResult The result of calling `require` on a module
 * @returns `requireResult` or `requireResult` wrapped in an object, keyed as `default`
 */
function _interopRequireDefault(requireResult) {
  return requireResult.__esModule ? requireResult : {
    default: requireResult
  };
}

// Sucrase version
// function _interopRequireDefault(obj) {
//   return obj && obj.__esModule ? obj : { default: obj };
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireWildcard.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireWildcard.js ***!
  \**********************************************************************************/
/*! exports provided: _interopRequireWildcard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interopRequireWildcard", function() { return _interopRequireWildcard; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Adds a `default` property to CJS modules which aren't the result of transpilation from ESM modules.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param requireResult The result of calling `require` on a module
 * @returns Either `requireResult` or a copy of `requireResult` with an added self-referential `default` property
 */
function _interopRequireWildcard(requireResult) {
  return requireResult.__esModule ? requireResult : _objectSpread(_objectSpread({}, requireResult), {}, {
    default: requireResult
  });
}

// Sucrase version
// function _interopRequireWildcard(obj) {
//   if (obj && obj.__esModule) {
//     return obj;
//   } else {
//     var newObj = {};
//     if (obj != null) {
//       for (var key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//           newObj[key] = obj[key];
//         }
//       }
//     }
//     newObj.default = obj;
//     return newObj;
//   }
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js ***!
  \***************************************************************************/
/*! exports provided: _nullishCoalesce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_nullishCoalesce", function() { return _nullishCoalesce; });
/**
 * Polyfill for the nullish coalescing operator (`??`).
 *
 * Note that the RHS is wrapped in a function so that if it's a computed value, that evaluation won't happen unless the
 * LHS evaluates to a nullish value, to mimic the operator's short-circuiting behavior.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 *
 * @param lhs The value of the expression to the left of the `??`
 * @param rhsFn A function returning the value of the expression to the right of the `??`
 * @returns The LHS value, unless it's `null` or `undefined`, in which case, the RHS value
 */
function _nullishCoalesce(lhs, rhsFn) {
  // by checking for loose equality to `null`, we catch both `null` and `undefined`
  return lhs != null ? lhs : rhsFn();
}

// Sucrase version:
// function _nullishCoalesce(lhs, rhsFn) {
//   if (lhs != null) {
//     return lhs;
//   } else {
//     return rhsFn();
//   }
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js ***!
  \*************************************************************************/
/*! exports provided: _optionalChain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_optionalChain", function() { return _optionalChain; });
/**
 * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
 * descriptors, and functions.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase)
 * See https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
 *
 * @param ops Array result of expression conversion
 * @returns The value of the expression
 */
function _optionalChain(ops) {
  let lastAccessLHS = undefined;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    // by checking for loose equality to `null`, we catch both `null` and `undefined`
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      // really we're meaning to return `undefined` as an actual value here, but it saves bytes not to write it
      return;
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn(function () {
        var _value;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_value = value).call.apply(_value, [lastAccessLHS].concat(args));
      });
      lastAccessLHS = undefined;
    }
  }
  return value;
}

// Sucrase version
// function _optionalChain(ops) {
//   let lastAccessLHS = undefined;
//   let value = ops[0];
//   let i = 1;
//   while (i < ops.length) {
//     const op = ops[i];
//     const fn = ops[i + 1];
//     i += 2;
//     if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
//       return undefined;
//     }
//     if (op === 'access' || op === 'optionalAccess') {
//       lastAccessLHS = value;
//       value = fn(value);
//     } else if (op === 'call' || op === 'optionalCall') {
//       value = fn((...args) => value.call(lastAccessLHS, ...args));
//       lastAccessLHS = undefined;
//     }
//   }
//   return value;
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/_optionalChainDelete.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/_optionalChainDelete.js ***!
  \*******************************************************************************/
/*! exports provided: _optionalChainDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_optionalChainDelete", function() { return _optionalChainDelete; });
/* harmony import */ var _optionalChain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optionalChain.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js");


/**
 * Polyfill for the optional chain operator, `?.`, given previous conversion of the expression into an array of values,
 * descriptors, and functions, in cases where the value of the expression is to be deleted.
 *
 * Adapted from Sucrase (https://github.com/alangpierce/sucrase) See
 * https://github.com/alangpierce/sucrase/blob/265887868966917f3b924ce38dfad01fbab1329f/src/transformers/OptionalChainingNullishTransformer.ts#L15
 *
 * @param ops Array result of expression conversion
 * @returns The return value of the `delete` operator: `true`, unless the deletion target is an own, non-configurable
 * property (one which can't be deleted or turned into an accessor, and whose enumerability can't be changed), in which
 * case `false`.
 */
function _optionalChainDelete(ops) {
  const result = Object(_optionalChain_js__WEBPACK_IMPORTED_MODULE_0__["_optionalChain"])(ops);
  // If `result` is `null`, it means we didn't get to the end of the chain and so nothing was deleted (in which case,
  // return `true` since that's what `delete` does when it no-ops). If it's non-null, we know the delete happened, in
  // which case we return whatever the `delete` returned, which will be a boolean.
  return result == null ? true : result;
}

// Sucrase version:
// function _optionalChainDelete(ops) {
//   const result = _optionalChain(ops);
//   // by checking for loose equality to `null`, we catch both `null` and `undefined`
//   return result == null ? true : result;
// }



/***/ }),

/***/ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/buildPolyfills/index.js ***!
  \****************************************************************/
/*! exports provided: _asyncNullishCoalesce, _asyncOptionalChain, _asyncOptionalChainDelete, _createNamedExportFrom, _createStarExport, _interopDefault, _interopNamespace, _interopNamespaceDefaultOnly, _interopRequireDefault, _interopRequireWildcard, _nullishCoalesce, _optionalChain, _optionalChainDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asyncNullishCoalesce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_asyncNullishCoalesce.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_asyncNullishCoalesce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_asyncNullishCoalesce", function() { return _asyncNullishCoalesce_js__WEBPACK_IMPORTED_MODULE_0__["_asyncNullishCoalesce"]; });

/* harmony import */ var _asyncOptionalChain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_asyncOptionalChain.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_asyncOptionalChain", function() { return _asyncOptionalChain_js__WEBPACK_IMPORTED_MODULE_1__["_asyncOptionalChain"]; });

/* harmony import */ var _asyncOptionalChainDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_asyncOptionalChainDelete.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChainDelete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_asyncOptionalChainDelete", function() { return _asyncOptionalChainDelete_js__WEBPACK_IMPORTED_MODULE_2__["_asyncOptionalChainDelete"]; });

/* harmony import */ var _createNamedExportFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_createNamedExportFrom.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_createNamedExportFrom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_createNamedExportFrom", function() { return _createNamedExportFrom_js__WEBPACK_IMPORTED_MODULE_3__["_createNamedExportFrom"]; });

/* harmony import */ var _createStarExport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_createStarExport.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_createStarExport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_createStarExport", function() { return _createStarExport_js__WEBPACK_IMPORTED_MODULE_4__["_createStarExport"]; });

/* harmony import */ var _interopDefault_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_interopDefault.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopDefault", function() { return _interopDefault_js__WEBPACK_IMPORTED_MODULE_5__["_interopDefault"]; });

/* harmony import */ var _interopNamespace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_interopNamespace.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopNamespace", function() { return _interopNamespace_js__WEBPACK_IMPORTED_MODULE_6__["_interopNamespace"]; });

/* harmony import */ var _interopNamespaceDefaultOnly_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_interopNamespaceDefaultOnly.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespaceDefaultOnly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopNamespaceDefaultOnly", function() { return _interopNamespaceDefaultOnly_js__WEBPACK_IMPORTED_MODULE_7__["_interopNamespaceDefaultOnly"]; });

/* harmony import */ var _interopRequireDefault_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_interopRequireDefault.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopRequireDefault", function() { return _interopRequireDefault_js__WEBPACK_IMPORTED_MODULE_8__["_interopRequireDefault"]; });

/* harmony import */ var _interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_interopRequireWildcard.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireWildcard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopRequireWildcard", function() { return _interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_9__["_interopRequireWildcard"]; });

/* harmony import */ var _nullishCoalesce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_nullishCoalesce.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_nullishCoalesce", function() { return _nullishCoalesce_js__WEBPACK_IMPORTED_MODULE_10__["_nullishCoalesce"]; });

/* harmony import */ var _optionalChain_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_optionalChain.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_optionalChain", function() { return _optionalChain_js__WEBPACK_IMPORTED_MODULE_11__["_optionalChain"]; });

/* harmony import */ var _optionalChainDelete_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_optionalChainDelete.js */ "./node_modules/@sentry/utils/esm/buildPolyfills/_optionalChainDelete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_optionalChainDelete", function() { return _optionalChainDelete_js__WEBPACK_IMPORTED_MODULE_12__["_optionalChainDelete"]; });















/***/ }),

/***/ "./node_modules/@sentry/utils/esm/clientreport.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/clientreport.js ***!
  \********************************************************/
/*! exports provided: createClientReportEnvelope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClientReportEnvelope", function() { return createClientReportEnvelope; });
/* harmony import */ var _envelope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envelope.js */ "./node_modules/@sentry/utils/esm/envelope.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.js */ "./node_modules/@sentry/utils/esm/time.js");



/**
 * Creates client report envelope
 * @param discarded_events An array of discard events
 * @param dsn A DSN that can be set on the header. Optional.
 */
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
  const clientReportItem = [{
    type: 'client_report'
  }, {
    timestamp: timestamp || Object(_time_js__WEBPACK_IMPORTED_MODULE_1__["dateTimestampInSeconds"])(),
    discarded_events
  }];
  return Object(_envelope_js__WEBPACK_IMPORTED_MODULE_0__["createEnvelope"])(dsn ? {
    dsn
  } : {}, [clientReportItem]);
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/dsn.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/dsn.js ***!
  \***********************************************/
/*! exports provided: dsnFromString, dsnToString, makeDsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsnFromString", function() { return dsnFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsnToString", function() { return dsnToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDsn", function() { return makeDsn; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.js */ "./node_modules/@sentry/utils/esm/error.js");



/** Regular expression used to parse a Dsn. */
const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
  return protocol === 'http' || protocol === 'https';
}

/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */
function dsnToString(dsn) {
  let withPassword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const host = dsn.host,
    path = dsn.path,
    pass = dsn.pass,
    port = dsn.port,
    projectId = dsn.projectId,
    protocol = dsn.protocol,
    publicKey = dsn.publicKey;
  return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ''}` + `@${host}${port ? `:${port}` : ''}/${path ? `${path}/` : path}${projectId}`;
}

/**
 * Parses a Dsn from a given string.
 *
 * @param str A Dsn as string
 * @returns Dsn as DsnComponents
 */
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);
  if (!match) {
    throw new _error_js__WEBPACK_IMPORTED_MODULE_1__["SentryError"](`Invalid Sentry Dsn: ${str}`);
  }
  const _match$slice = match.slice(1),
    _match$slice2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_match$slice, 6),
    protocol = _match$slice2[0],
    publicKey = _match$slice2[1],
    _match$slice2$ = _match$slice2[2],
    pass = _match$slice2$ === void 0 ? '' : _match$slice2$,
    host = _match$slice2[3],
    _match$slice2$2 = _match$slice2[4],
    port = _match$slice2$2 === void 0 ? '' : _match$slice2$2,
    lastPath = _match$slice2[5];
  let path = '';
  let projectId = lastPath;
  const split = projectId.split('/');
  if (split.length > 1) {
    path = split.slice(0, -1).join('/');
    projectId = split.pop();
  }
  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }
  return dsnFromComponents({
    host,
    pass,
    path,
    projectId,
    port,
    protocol: protocol,
    publicKey
  });
}
function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || '',
    pass: components.pass || '',
    host: components.host,
    port: components.port || '',
    path: components.path || '',
    projectId: components.projectId
  };
}
function validateDsn(dsn) {
  if (!(typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__)) {
    return;
  }
  const port = dsn.port,
    projectId = dsn.projectId,
    protocol = dsn.protocol;
  const requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
  requiredComponents.forEach(function (component) {
    if (!dsn[component]) {
      throw new _error_js__WEBPACK_IMPORTED_MODULE_1__["SentryError"](`Invalid Sentry Dsn: ${component} missing`);
    }
  });
  if (!projectId.match(/^\d+$/)) {
    throw new _error_js__WEBPACK_IMPORTED_MODULE_1__["SentryError"](`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
  }
  if (!isValidProtocol(protocol)) {
    throw new _error_js__WEBPACK_IMPORTED_MODULE_1__["SentryError"](`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
  }
  if (port && isNaN(parseInt(port, 10))) {
    throw new _error_js__WEBPACK_IMPORTED_MODULE_1__["SentryError"](`Invalid Sentry Dsn: Invalid port ${port}`);
  }
  return true;
}

/** The Sentry Dsn, identifying a Sentry instance and project. */
function makeDsn(from) {
  const components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
  validateDsn(components);
  return components;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/env.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/env.js ***!
  \***********************************************/
/*! exports provided: isBrowserBundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserBundle", function() { return isBrowserBundle; });
/*
 * This module exists for optimizations in the build process through rollup and terser.  We define some global
 * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
 * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
 * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
 * `logger` and preventing node-related code from appearing in browser bundles.
 *
 * Attention:
 * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
 * users. These fags should live in their respective packages, as we identified user tooling (specifically webpack)
 * having issues tree-shaking these constants across package boundaries.
 * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
 * users to be able to shake away expressions that it guards.
 */

/**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && !!__SENTRY_BROWSER_BUNDLE__;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/envelope.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/envelope.js ***!
  \****************************************************/
/*! exports provided: addItemToEnvelope, createAttachmentEnvelopeItem, createEnvelope, envelopeItemTypeToDataCategory, forEachEnvelopeItem, serializeEnvelope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToEnvelope", function() { return addItemToEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttachmentEnvelopeItem", function() { return createAttachmentEnvelopeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEnvelope", function() { return createEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envelopeItemTypeToDataCategory", function() { return envelopeItemTypeToDataCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachEnvelopeItem", function() { return forEachEnvelopeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeEnvelope", function() { return serializeEnvelope; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/@sentry/utils/esm/normalize.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/utils/esm/object.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function createEnvelope(headers) {
  let items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return [headers, items];
}

/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function addItemToEnvelope(envelope, newItem) {
  const _envelope = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(envelope, 2),
    headers = _envelope[0],
    items = _envelope[1];
  return [headers, [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(items), [newItem])];
}

/**
 * Convenience function to loop through the items and item types of an envelope.
 * (This function was mostly created because working with envelope types is painful at the moment)
 */
function forEachEnvelopeItem(envelope, callback) {
  const envelopeItems = envelope[1];
  envelopeItems.forEach(function (envelopeItem) {
    const envelopeItemType = envelopeItem[0].type;
    callback(envelopeItem, envelopeItemType);
  });
}
function encodeUTF8(input, textEncoder) {
  const utf8 = textEncoder || new TextEncoder();
  return utf8.encode(input);
}

/**
 * Serializes an envelope.
 */
function serializeEnvelope(envelope, textEncoder) {
  const _envelope2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(envelope, 2),
    envHeaders = _envelope2[0],
    items = _envelope2[1];

  // Initially we construct our envelope as a string and only convert to binary chunks if we encounter binary data
  let parts = JSON.stringify(envHeaders);
  function append(next) {
    if (typeof parts === 'string') {
      parts = typeof next === 'string' ? parts + next : [encodeUTF8(parts, textEncoder), next];
    } else {
      parts.push(typeof next === 'string' ? encodeUTF8(next, textEncoder) : next);
    }
  }
  var _iterator = _createForOfIteratorHelper(items),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const item = _step.value;
      const _item = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(item, 2),
        itemHeaders = _item[0],
        payload = _item[1];
      append(`\n${JSON.stringify(itemHeaders)}\n`);
      if (typeof payload === 'string' || payload instanceof Uint8Array) {
        append(payload);
      } else {
        let stringifiedPayload;
        try {
          stringifiedPayload = JSON.stringify(payload);
        } catch (e) {
          // In case, despite all our efforts to keep `payload` circular-dependency-free, `JSON.strinify()` still
          // fails, we try again after normalizing it again with infinite normalization depth. This of course has a
          // performance impact but in this case a performance hit is better than throwing.
          stringifiedPayload = JSON.stringify(Object(_normalize_js__WEBPACK_IMPORTED_MODULE_2__["normalize"])(payload));
        }
        append(stringifiedPayload);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return typeof parts === 'string' ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
  const totalLength = buffers.reduce(function (acc, buf) {
    return acc + buf.length;
  }, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  var _iterator2 = _createForOfIteratorHelper(buffers),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      const buffer = _step2.value;
      merged.set(buffer, offset);
      offset += buffer.length;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return merged;
}

/**
 * Creates attachment envelope items
 */
function createAttachmentEnvelopeItem(attachment, textEncoder) {
  const buffer = typeof attachment.data === 'string' ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
  return [Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["dropUndefinedKeys"])({
    type: 'attachment',
    length: buffer.length,
    filename: attachment.filename,
    content_type: attachment.contentType,
    attachment_type: attachment.attachmentType
  }), buffer];
}
const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
  session: 'session',
  sessions: 'session',
  attachment: 'attachment',
  transaction: 'transaction',
  event: 'error',
  client_report: 'internal',
  user_report: 'default'
};

/**
 * Maps the type of an envelope item to a data category.
 */
function envelopeItemTypeToDataCategory(type) {
  return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/error.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/error.js ***!
  \*************************************************/
/*! exports provided: SentryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return SentryError; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/** An error emitted by Sentry SDKs and related utilities. */
let SentryError = /*#__PURE__*/function (_Error) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SentryError, _Error);
  var _super = _createSuper(SentryError);
  /** Display name of this error instance. */

  function SentryError(message) {
    var _this;
    let logLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'warn';
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SentryError);
    _this = _super.call(this, message);
    _this.message = message;
    ;
    _this.name = (this instanceof SentryError ? this.constructor : void 0).prototype.constructor.name;
    // This sets the prototype to be `Error`, not `SentryError`. It's unclear why we do this, but commenting this line
    // out causes various (seemingly totally unrelated) playwright tests consistently time out. FYI, this makes
    // instances of `SentryError` fail `obj instanceof SentryError` checks.
    Object.setPrototypeOf(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), (this instanceof SentryError ? this.constructor : void 0).prototype);
    _this.logLevel = logLevel;
    return _this;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(SentryError);
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Error));


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/index.js ***!
  \*************************************************/
/*! exports provided: WINDOW, getDomElement, getLocationHref, htmlTreeAsString, dsnFromString, dsnToString, makeDsn, SentryError, GLOBAL_OBJ, getGlobalObject, getGlobalSingleton, addInstrumentationHandler, isDOMError, isDOMException, isElement, isError, isErrorEvent, isEvent, isInstanceOf, isNaN, isPlainObject, isPrimitive, isRegExp, isString, isSyntheticEvent, isThenable, CONSOLE_LEVELS, consoleSandbox, logger, memoBuilder, addContextToFrame, addExceptionMechanism, addExceptionTypeValue, arrayify, checkOrSetAlreadyCaught, getEventDescription, parseSemver, uuid4, dynamicRequire, isNodeEnv, loadModule, normalize, normalizeToSize, walk, addNonEnumerableProperty, convertToPlainObject, dropUndefinedKeys, extractExceptionKeysForMessage, fill, getOriginalFunction, markFunctionWrapped, objectify, urlEncode, basename, dirname, isAbsolute, join, normalizePath, relative, resolve, makePromiseBuffer, addRequestDataToEvent, addRequestDataToTransaction, extractPathForTransaction, extractRequestData, severityFromString, severityLevelFromString, validSeverityLevels, createStackParser, getFunctionName, nodeStackLineParser, stackParserFromStackParserOptions, stripSentryFramesAndReverse, escapeStringForRegex, isMatchingPattern, safeJoin, snipLine, truncate, isNativeFetch, supportsDOMError, supportsDOMException, supportsErrorEvent, supportsFetch, supportsHistory, supportsNativeFetch, supportsReferrerPolicy, supportsReportingObserver, SyncPromise, rejectedSyncPromise, resolvedSyncPromise, _browserPerformanceTimeOriginMode, browserPerformanceTimeOrigin, dateTimestampInSeconds, timestampInSeconds, timestampWithMs, usingPerformanceAPI, TRACEPARENT_REGEXP, extractTraceparentData, isBrowserBundle, addItemToEnvelope, createAttachmentEnvelopeItem, createEnvelope, envelopeItemTypeToDataCategory, forEachEnvelopeItem, serializeEnvelope, createClientReportEnvelope, DEFAULT_RETRY_AFTER, disabledUntil, isRateLimited, parseRetryAfterHeader, updateRateLimits, BAGGAGE_HEADER_NAME, MAX_BAGGAGE_STRING_LENGTH, SENTRY_BAGGAGE_KEY_PREFIX, SENTRY_BAGGAGE_KEY_PREFIX_REGEX, baggageHeaderToDynamicSamplingContext, dynamicSamplingContextToSentryBaggageHeader, getNumberOfUrlSegments, parseUrl, stripUrlQueryAndFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return _browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDomElement", function() { return _browser_js__WEBPACK_IMPORTED_MODULE_0__["getDomElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return _browser_js__WEBPACK_IMPORTED_MODULE_0__["getLocationHref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return _browser_js__WEBPACK_IMPORTED_MODULE_0__["htmlTreeAsString"]; });

/* harmony import */ var _dsn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dsn.js */ "./node_modules/@sentry/utils/esm/dsn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsnFromString", function() { return _dsn_js__WEBPACK_IMPORTED_MODULE_1__["dsnFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsnToString", function() { return _dsn_js__WEBPACK_IMPORTED_MODULE_1__["dsnToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeDsn", function() { return _dsn_js__WEBPACK_IMPORTED_MODULE_1__["makeDsn"]; });

/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.js */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return _error_js__WEBPACK_IMPORTED_MODULE_2__["SentryError"]; });

/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/utils/esm/worldwide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_OBJ", function() { return _worldwide_js__WEBPACK_IMPORTED_MODULE_3__["GLOBAL_OBJ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return _worldwide_js__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalSingleton", function() { return _worldwide_js__WEBPACK_IMPORTED_MODULE_3__["getGlobalSingleton"]; });

/* harmony import */ var _instrument_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instrument.js */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return _instrument_js__WEBPACK_IMPORTED_MODULE_4__["addInstrumentationHandler"]; });

/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isInstanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isSyntheticEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return _is_js__WEBPACK_IMPORTED_MODULE_5__["isThenable"]; });

/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_LEVELS", function() { return _logger_js__WEBPACK_IMPORTED_MODULE_6__["CONSOLE_LEVELS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return _logger_js__WEBPACK_IMPORTED_MODULE_6__["consoleSandbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger_js__WEBPACK_IMPORTED_MODULE_6__["logger"]; });

/* harmony import */ var _memo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./memo.js */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoBuilder", function() { return _memo_js__WEBPACK_IMPORTED_MODULE_7__["memoBuilder"]; });

/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./misc.js */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["addContextToFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["addExceptionMechanism"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["addExceptionTypeValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayify", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["arrayify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkOrSetAlreadyCaught", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["checkOrSetAlreadyCaught"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["getEventDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["parseSemver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["uuid4"]; });

/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node.js */ "./node_modules/@sentry/utils/esm/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return _node_js__WEBPACK_IMPORTED_MODULE_9__["dynamicRequire"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return _node_js__WEBPACK_IMPORTED_MODULE_9__["isNodeEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return _node_js__WEBPACK_IMPORTED_MODULE_9__["loadModule"]; });

/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/@sentry/utils/esm/normalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _normalize_js__WEBPACK_IMPORTED_MODULE_10__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return _normalize_js__WEBPACK_IMPORTED_MODULE_10__["normalizeToSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return _normalize_js__WEBPACK_IMPORTED_MODULE_10__["walk"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addNonEnumerableProperty", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["addNonEnumerableProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertToPlainObject", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["convertToPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["dropUndefinedKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["extractExceptionKeysForMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["fill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOriginalFunction", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["getOriginalFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markFunctionWrapped", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["markFunctionWrapped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectify", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["objectify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["urlEncode"]; });

/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./path.js */ "./node_modules/@sentry/utils/esm/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["basename"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["dirname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["isAbsolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["normalizePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["resolve"]; });

/* harmony import */ var _promisebuffer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./promisebuffer.js */ "./node_modules/@sentry/utils/esm/promisebuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePromiseBuffer", function() { return _promisebuffer_js__WEBPACK_IMPORTED_MODULE_13__["makePromiseBuffer"]; });

/* harmony import */ var _requestdata_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./requestdata.js */ "./node_modules/@sentry/utils/esm/requestdata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRequestDataToEvent", function() { return _requestdata_js__WEBPACK_IMPORTED_MODULE_14__["addRequestDataToEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRequestDataToTransaction", function() { return _requestdata_js__WEBPACK_IMPORTED_MODULE_14__["addRequestDataToTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractPathForTransaction", function() { return _requestdata_js__WEBPACK_IMPORTED_MODULE_14__["extractPathForTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractRequestData", function() { return _requestdata_js__WEBPACK_IMPORTED_MODULE_14__["extractRequestData"]; });

/* harmony import */ var _severity_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./severity.js */ "./node_modules/@sentry/utils/esm/severity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "severityFromString", function() { return _severity_js__WEBPACK_IMPORTED_MODULE_15__["severityFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "severityLevelFromString", function() { return _severity_js__WEBPACK_IMPORTED_MODULE_15__["severityLevelFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validSeverityLevels", function() { return _severity_js__WEBPACK_IMPORTED_MODULE_15__["validSeverityLevels"]; });

/* harmony import */ var _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stacktrace.js */ "./node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStackParser", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["createStackParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["getFunctionName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeStackLineParser", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["nodeStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackParserFromStackParserOptions", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["stackParserFromStackParserOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripSentryFramesAndReverse", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["stripSentryFramesAndReverse"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./string.js */ "./node_modules/@sentry/utils/esm/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeStringForRegex", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["escapeStringForRegex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["isMatchingPattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["safeJoin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["snipLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["truncate"]; });

/* harmony import */ var _supports_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./supports.js */ "./node_modules/@sentry/utils/esm/supports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNativeFetch", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["isNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsReferrerPolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsReportingObserver"]; });

/* harmony import */ var _syncpromise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./syncpromise.js */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return _syncpromise_js__WEBPACK_IMPORTED_MODULE_19__["SyncPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rejectedSyncPromise", function() { return _syncpromise_js__WEBPACK_IMPORTED_MODULE_19__["rejectedSyncPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvedSyncPromise", function() { return _syncpromise_js__WEBPACK_IMPORTED_MODULE_19__["resolvedSyncPromise"]; });

/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./time.js */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_browserPerformanceTimeOriginMode", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["_browserPerformanceTimeOriginMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserPerformanceTimeOrigin", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["browserPerformanceTimeOrigin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateTimestampInSeconds", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["dateTimestampInSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampInSeconds", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["timestampInSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["timestampWithMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usingPerformanceAPI", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["usingPerformanceAPI"]; });

/* harmony import */ var _tracing_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tracing.js */ "./node_modules/@sentry/utils/esm/tracing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return _tracing_js__WEBPACK_IMPORTED_MODULE_21__["TRACEPARENT_REGEXP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractTraceparentData", function() { return _tracing_js__WEBPACK_IMPORTED_MODULE_21__["extractTraceparentData"]; });

/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./env.js */ "./node_modules/@sentry/utils/esm/env.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowserBundle", function() { return _env_js__WEBPACK_IMPORTED_MODULE_22__["isBrowserBundle"]; });

/* harmony import */ var _envelope_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./envelope.js */ "./node_modules/@sentry/utils/esm/envelope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addItemToEnvelope", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["addItemToEnvelope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttachmentEnvelopeItem", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["createAttachmentEnvelopeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEnvelope", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["createEnvelope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "envelopeItemTypeToDataCategory", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["envelopeItemTypeToDataCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEachEnvelopeItem", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["forEachEnvelopeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeEnvelope", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["serializeEnvelope"]; });

/* harmony import */ var _clientreport_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./clientreport.js */ "./node_modules/@sentry/utils/esm/clientreport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createClientReportEnvelope", function() { return _clientreport_js__WEBPACK_IMPORTED_MODULE_24__["createClientReportEnvelope"]; });

/* harmony import */ var _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ratelimit.js */ "./node_modules/@sentry/utils/esm/ratelimit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RETRY_AFTER", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_RETRY_AFTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disabledUntil", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["disabledUntil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRateLimited", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["isRateLimited"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["parseRetryAfterHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateRateLimits", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["updateRateLimits"]; });

/* harmony import */ var _baggage_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./baggage.js */ "./node_modules/@sentry/utils/esm/baggage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BAGGAGE_HEADER_NAME", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["BAGGAGE_HEADER_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_BAGGAGE_STRING_LENGTH", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["MAX_BAGGAGE_STRING_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SENTRY_BAGGAGE_KEY_PREFIX", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["SENTRY_BAGGAGE_KEY_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SENTRY_BAGGAGE_KEY_PREFIX_REGEX", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["SENTRY_BAGGAGE_KEY_PREFIX_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baggageHeaderToDynamicSamplingContext", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["baggageHeaderToDynamicSamplingContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicSamplingContextToSentryBaggageHeader", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["dynamicSamplingContextToSentryBaggageHeader"]; });

/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./url.js */ "./node_modules/@sentry/utils/esm/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberOfUrlSegments", function() { return _url_js__WEBPACK_IMPORTED_MODULE_27__["getNumberOfUrlSegments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _url_js__WEBPACK_IMPORTED_MODULE_27__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return _url_js__WEBPACK_IMPORTED_MODULE_27__["stripUrlQueryAndFragment"]; });






























/***/ }),

/***/ "./node_modules/@sentry/utils/esm/instrument.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/instrument.js ***!
  \******************************************************/
/*! exports provided: addInstrumentationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return addInstrumentationHandler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _stacktrace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stacktrace.js */ "./node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony import */ var _supports_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./supports.js */ "./node_modules/@sentry/utils/esm/supports.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }







/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */

const handlers = {};
const instrumented = {};

/** Instruments given API */
function instrument(type) {
  if (instrumented[type]) {
    return;
  }
  instrumented[type] = true;
  switch (type) {
    case 'console':
      instrumentConsole();
      break;
    case 'dom':
      instrumentDOM();
      break;
    case 'xhr':
      instrumentXHR();
      break;
    case 'fetch':
      instrumentFetch();
      break;
    case 'history':
      instrumentHistory();
      break;
    case 'error':
      instrumentError();
      break;
    case 'unhandledrejection':
      instrumentUnhandledRejection();
      break;
    default:
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].warn('unknown instrumentation type:', type);
      return;
  }
}

/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(type, callback) {
  handlers[type] = handlers[type] || [];
  handlers[type].push(callback);
  instrument(type);
}

/** JSDoc */
function triggerHandlers(type, data) {
  if (!type || !handlers[type]) {
    return;
  }
  var _iterator = _createForOfIteratorHelper(handlers[type] || []),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const handler = _step.value;
      try {
        handler(data);
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Error while triggering instrumentation handler.\nType: ${type}\nName: ${Object(_stacktrace_js__WEBPACK_IMPORTED_MODULE_5__["getFunctionName"])(handler)}\nError:`, e);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/** JSDoc */
function instrumentConsole() {
  if (!('console' in _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"])) {
    return;
  }
  _logger_js__WEBPACK_IMPORTED_MODULE_3__["CONSOLE_LEVELS"].forEach(function (level) {
    if (!(level in _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].console)) {
      return;
    }
    Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(_browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].console, level, function (originalConsoleMethod) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        triggerHandlers('console', {
          args,
          level
        });

        // this fails for some browsers. :(
        if (originalConsoleMethod) {
          originalConsoleMethod.apply(_browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].console, args);
        }
      };
    });
  });
}

/** JSDoc */
function instrumentFetch() {
  if (!Object(_supports_js__WEBPACK_IMPORTED_MODULE_6__["supportsNativeFetch"])()) {
    return;
  }
  Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(_browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"], 'fetch', function (originalFetch) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      const handlerData = {
        args,
        fetchData: {
          method: getFetchMethod(args),
          url: getFetchUrl(args)
        },
        startTimestamp: Date.now()
      };
      triggerHandlers('fetch', _objectSpread({}, handlerData));

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return originalFetch.apply(_browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"], args).then(function (response) {
        triggerHandlers('fetch', _objectSpread(_objectSpread({}, handlerData), {}, {
          endTimestamp: Date.now(),
          response
        }));
        return response;
      }, function (error) {
        triggerHandlers('fetch', _objectSpread(_objectSpread({}, handlerData), {}, {
          endTimestamp: Date.now(),
          error
        }));
        // NOTE: If you are a Sentry user, and you are seeing this stack frame,
        //       it means the sentry.javascript SDK caught an error invoking your application code.
        //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
        throw error;
      });
    };
  });
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** Extract `method` from fetch call arguments */
function getFetchMethod() {
  let fetchArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if ('Request' in _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"] && Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(fetchArgs[0], Request) && fetchArgs[0].method) {
    return String(fetchArgs[0].method).toUpperCase();
  }
  if (fetchArgs[1] && fetchArgs[1].method) {
    return String(fetchArgs[1].method).toUpperCase();
  }
  return 'GET';
}

/** Extract `url` from fetch call arguments */
function getFetchUrl() {
  let fetchArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (typeof fetchArgs[0] === 'string') {
    return fetchArgs[0];
  }
  if ('Request' in _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"] && Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(fetchArgs[0], Request)) {
    return fetchArgs[0].url;
  }
  return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

/** JSDoc */
function instrumentXHR() {
  if (!('XMLHttpRequest' in _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"])) {
    return;
  }
  const xhrproto = XMLHttpRequest.prototype;
  Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhrproto, 'open', function (originalOpen) {
    return function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const xhr = this;
      const url = args[1];
      const xhrInfo = xhr.__sentry_xhr__ = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        method: Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(args[0]) ? args[0].toUpperCase() : args[0],
        url: args[1]
      };

      // if Sentry key appears in URL, don't capture it as a request
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(url) && xhrInfo.method === 'POST' && url.match(/sentry_key/)) {
        xhr.__sentry_own_request__ = true;
      }
      const onreadystatechangeHandler = function () {
        if (xhr.readyState === 4) {
          try {
            // touching statusCode in some platforms throws
            // an exception
            xhrInfo.status_code = xhr.status;
          } catch (e) {
            /* do nothing */
          }
          triggerHandlers('xhr', {
            args,
            endTimestamp: Date.now(),
            startTimestamp: Date.now(),
            xhr
          });
        }
      };
      if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
        Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhr, 'onreadystatechange', function (original) {
          return function () {
            onreadystatechangeHandler();
            for (var _len4 = arguments.length, readyStateArgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              readyStateArgs[_key4] = arguments[_key4];
            }
            return original.apply(xhr, readyStateArgs);
          };
        });
      } else {
        xhr.addEventListener('readystatechange', onreadystatechangeHandler);
      }
      return originalOpen.apply(xhr, args);
    };
  });
  Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(xhrproto, 'send', function (originalSend) {
    return function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      if (this.__sentry_xhr__ && args[0] !== undefined) {
        this.__sentry_xhr__.body = args[0];
      }
      triggerHandlers('xhr', {
        args,
        startTimestamp: Date.now(),
        xhr: this
      });
      return originalSend.apply(this, args);
    };
  });
}
let lastHref;

/** JSDoc */
function instrumentHistory() {
  if (!Object(_supports_js__WEBPACK_IMPORTED_MODULE_6__["supportsHistory"])()) {
    return;
  }
  const oldOnPopState = _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].onpopstate;
  _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].onpopstate = function () {
    const to = _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].location.href;
    // keep track of the current URL state, as we always receive only the updated state
    const from = lastHref;
    lastHref = to;
    triggerHandlers('history', {
      from,
      to
    });
    if (oldOnPopState) {
      // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
      // https://github.com/getsentry/sentry-javascript/issues/3344
      // https://github.com/bugsnag/bugsnag-js/issues/469
      try {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        return oldOnPopState.apply(this, args);
      } catch (_oO) {
        // no-empty
      }
    }
  };

  /** @hidden */
  function historyReplacementFunction(originalHistoryFunction) {
    return function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      const url = args.length > 2 ? args[2] : undefined;
      if (url) {
        // coerce to string (this is what pushState does)
        const from = lastHref;
        const to = String(url);
        // keep track of the current URL state, as we always receive only the updated state
        lastHref = to;
        triggerHandlers('history', {
          from,
          to
        });
      }
      return originalHistoryFunction.apply(this, args);
    };
  }
  Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(_browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].history, 'pushState', historyReplacementFunction);
  Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(_browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].history, 'replaceState', historyReplacementFunction);
}
const debounceDuration = 1000;
let debounceTimerID;
let lastCapturedEvent;

/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
  // If there was no previous event, it should always be swapped for the new one.
  if (!previous) {
    return true;
  }

  // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
  if (previous.type !== current.type) {
    return true;
  }
  try {
    // If both events have the same type, it's still possible that actions were performed on different targets.
    // e.g. 2 clicks on different buttons.
    if (previous.target !== current.target) {
      return true;
    }
  } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
  }

  // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
  // to which an event listener was attached), we treat them as the same action, as we want to capture
  // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
  return false;
}

/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
  // We are only interested in filtering `keypress` events for now.
  if (event.type !== 'keypress') {
    return false;
  }
  try {
    const target = event.target;
    if (!target || !target.tagName) {
      return true;
    }

    // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
    // e.g.tabbing through elements, hotkeys, etc.
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return false;
    }
  } catch (e) {
    // just accessing `target` property can throw an exception in some rare circumstances
    // see: https://github.com/getsentry/sentry-javascript/issues/838
  }
  return true;
}

/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler) {
  let globalListener = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (event) {
    // It's possible this handler might trigger multiple times for the same
    // event (e.g. event propagation through node ancestors).
    // Ignore if we've already captured that event.
    if (!event || lastCapturedEvent === event) {
      return;
    }

    // We always want to skip _some_ events.
    if (shouldSkipDOMEvent(event)) {
      return;
    }
    const name = event.type === 'keypress' ? 'input' : event.type;

    // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
    if (debounceTimerID === undefined) {
      handler({
        event: event,
        name,
        global: globalListener
      });
      lastCapturedEvent = event;
    }
    // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
    // If that's the case, emit the previous event and store locally the newly-captured DOM event.
    else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
      handler({
        event: event,
        name,
        global: globalListener
      });
      lastCapturedEvent = event;
    }

    // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
    clearTimeout(debounceTimerID);
    debounceTimerID = _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].setTimeout(function () {
      debounceTimerID = undefined;
    }, debounceDuration);
  };
}

/** JSDoc */
function instrumentDOM() {
  if (!('document' in _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"])) {
    return;
  }

  // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
  // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
  // we instrument `addEventListener` so that we don't end up attaching this handler twice.
  const triggerDOMHandler = triggerHandlers.bind(null, 'dom');
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].document.addEventListener('click', globalDOMEventHandler, false);
  _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].document.addEventListener('keypress', globalDOMEventHandler, false);

  // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
  // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
  // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
  // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
  // guaranteed to fire at least once.)
  ['EventTarget', 'Node'].forEach(function (target) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const proto = _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"][target] && _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"][target].prototype;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
      return;
    }
    Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(proto, 'addEventListener', function (originalAddEventListener) {
      return function (type, listener, options) {
        if (type === 'click' || type == 'keypress') {
          try {
            const el = this;
            const handlers = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
            const handlerForType = handlers[type] = handlers[type] || {
              refCount: 0
            };
            if (!handlerForType.handler) {
              const handler = makeDOMEventHandler(triggerDOMHandler);
              handlerForType.handler = handler;
              originalAddEventListener.call(this, type, handler, options);
            }
            handlerForType.refCount += 1;
          } catch (e) {
            // Accessing dom properties is always fragile.
            // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
          }
        }
        return originalAddEventListener.call(this, type, listener, options);
      };
    });
    Object(_object_js__WEBPACK_IMPORTED_MODULE_4__["fill"])(proto, 'removeEventListener', function (originalRemoveEventListener) {
      return function (type, listener, options) {
        if (type === 'click' || type == 'keypress') {
          try {
            const el = this;
            const handlers = el.__sentry_instrumentation_handlers__ || {};
            const handlerForType = handlers[type];
            if (handlerForType) {
              handlerForType.refCount -= 1;
              // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
              if (handlerForType.refCount <= 0) {
                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                handlerForType.handler = undefined;
                delete handlers[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
              }

              // If there are no longer any custom handlers of any type on this element, cleanup everything.
              if (Object.keys(handlers).length === 0) {
                delete el.__sentry_instrumentation_handlers__;
              }
            }
          } catch (e) {
            // Accessing dom properties is always fragile.
            // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
          }
        }
        return originalRemoveEventListener.call(this, type, listener, options);
      };
    });
  });
}
let _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
  _oldOnErrorHandler = _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].onerror;
  _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].onerror = function (msg, url, line, column, error) {
    triggerHandlers('error', {
      column,
      error,
      line,
      msg,
      url
    });
    if (_oldOnErrorHandler) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnErrorHandler.apply(this, arguments);
    }
    return false;
  };
}
let _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].onunhandledrejection;
  _browser_js__WEBPACK_IMPORTED_MODULE_1__["WINDOW"].onunhandledrejection = function (e) {
    triggerHandlers('unhandledrejection', e);
    if (_oldOnUnhandledRejectionHandler) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }
    return true;
  };
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/is.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/is.js ***!
  \**********************************************/
/*! exports provided: isDOMError, isDOMException, isElement, isError, isErrorEvent, isEvent, isInstanceOf, isNaN, isPlainObject, isPrimitive, isRegExp, isString, isSyntheticEvent, isThenable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return isDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return isDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return isErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return isEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return isInstanceOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return isSyntheticEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return isThenable; });
// eslint-disable-next-line @typescript-eslint/unbound-method
const objectToString = Object.prototype.toString;

/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
  switch (objectToString.call(wat)) {
    case '[object Error]':
    case '[object Exception]':
    case '[object DOMException]':
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
/**
 * Checks whether given value is an instance of the given built-in class.
 *
 * @param wat The value to be checked
 * @param className
 * @returns A boolean representing the result.
 */
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}

/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
  return isBuiltin(wat, 'ErrorEvent');
}

/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
  return isBuiltin(wat, 'DOMError');
}

/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
  return isBuiltin(wat, 'DOMException');
}

/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
  return isBuiltin(wat, 'String');
}

/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
  return wat === null || typeof wat !== 'object' && typeof wat !== 'function';
}

/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
  return isBuiltin(wat, 'Object');
}

/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
  return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}

/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
  return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}

/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
  return isBuiltin(wat, 'RegExp');
}

/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return Boolean(wat && wat.then && typeof wat.then === 'function');
}

/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
  return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}

/**
 * Checks whether given value is NaN
 * {@link isNaN}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isNaN(wat) {
  return typeof wat === 'number' && wat !== wat;
}

/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/logger.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/logger.js ***!
  \**************************************************/
/*! exports provided: CONSOLE_LEVELS, consoleSandbox, logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_LEVELS", function() { return CONSOLE_LEVELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return consoleSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/utils/esm/worldwide.js");


/** Prefix for logging strings */
const PREFIX = 'Sentry Logger ';
const CONSOLE_LEVELS = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'];

/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
  if (!('console' in _worldwide_js__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_OBJ"])) {
    return callback();
  }
  const originalConsole = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_OBJ"].console;
  const wrappedLevels = {};

  // Restore all wrapped console methods
  CONSOLE_LEVELS.forEach(function (level) {
    // TODO(v7): Remove this check as it's only needed for Node 6
    const originalWrappedFunc = originalConsole[level] && originalConsole[level].__sentry_original__;
    if (level in originalConsole && originalWrappedFunc) {
      wrappedLevels[level] = originalConsole[level];
      originalConsole[level] = originalWrappedFunc;
    }
  });
  try {
    return callback();
  } finally {
    // Revert restoration to wrapped state
    Object.keys(wrappedLevels).forEach(function (level) {
      originalConsole[level] = wrappedLevels[level];
    });
  }
}
function makeLogger() {
  let enabled = false;
  const logger = {
    enable: function () {
      enabled = true;
    },
    disable: function () {
      enabled = false;
    }
  };
  if (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) {
    CONSOLE_LEVELS.forEach(function (name) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      logger[name] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (enabled) {
          consoleSandbox(function () {
            var _GLOBAL_OBJ$console;
            (_GLOBAL_OBJ$console = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__["GLOBAL_OBJ"].console)[name].apply(_GLOBAL_OBJ$console, [`${PREFIX}[${name}]:`].concat(args));
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach(function (name) {
      logger[name] = function () {
        return undefined;
      };
    });
  }
  return logger;
}

// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
let logger;
if (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) {
  logger = Object(_worldwide_js__WEBPACK_IMPORTED_MODULE_0__["getGlobalSingleton"])('logger', makeLogger);
} else {
  logger = makeLogger();
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/memo.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/memo.js ***!
  \************************************************/
/*! exports provided: memoBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoBuilder", function() { return memoBuilder; });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Helper to decycle json objects
 */
function memoBuilder() {
  const hasWeakSet = typeof WeakSet === 'function';
  const inner = hasWeakSet ? new WeakSet() : [];
  function memoize(obj) {
    if (hasWeakSet) {
      if (inner.has(obj)) {
        return true;
      }
      inner.add(obj);
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < inner.length; i++) {
      const value = inner[i];
      if (value === obj) {
        return true;
      }
    }
    inner.push(obj);
    return false;
  }
  function unmemoize(obj) {
    if (hasWeakSet) {
      inner.delete(obj);
    } else {
      for (let i = 0; i < inner.length; i++) {
        if (inner[i] === obj) {
          inner.splice(i, 1);
          break;
        }
      }
    }
  }
  return [memoize, unmemoize];
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/misc.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/misc.js ***!
  \************************************************/
/*! exports provided: addContextToFrame, addExceptionMechanism, addExceptionTypeValue, arrayify, checkOrSetAlreadyCaught, getEventDescription, parseSemver, uuid4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return addContextToFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return addExceptionMechanism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return addExceptionTypeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayify", function() { return arrayify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOrSetAlreadyCaught", function() { return checkOrSetAlreadyCaught; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return getEventDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return parseSemver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string.js */ "./node_modules/@sentry/utils/esm/string.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/utils/esm/worldwide.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
  const gbl = _worldwide_js__WEBPACK_IMPORTED_MODULE_3__["GLOBAL_OBJ"];
  const crypto = gbl.crypto || gbl.msCrypto;
  if (crypto && crypto.randomUUID) {
    return crypto.randomUUID().replace(/-/g, '');
  }
  const getRandomByte = crypto && crypto.getRandomValues ? function () {
    return crypto.getRandomValues(new Uint8Array(1))[0];
  } : function () {
    return Math.random() * 16;
  };

  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function (c) {
    return (
      // eslint-disable-next-line no-bitwise
      (c ^ (getRandomByte() & 15) >> c / 4).toString(16)
    );
  });
}
function getFirstException(event) {
  return event.exception && event.exception.values ? event.exception.values[0] : undefined;
}

/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
  const message = event.message,
    eventId = event.event_id;
  if (message) {
    return message;
  }
  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || '<unknown>';
  }
  return eventId || '<unknown>';
}

/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
  const exception = event.exception = event.exception || {};
  const values = exception.values = exception.values || [];
  const firstException = values[0] = values[0] || {};
  if (!firstException.value) {
    firstException.value = value || '';
  }
  if (!firstException.type) {
    firstException.type = type || 'Error';
  }
}

/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }
  const defaultMechanism = {
    type: 'generic',
    handled: true
  };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = _objectSpread(_objectSpread(_objectSpread({}, defaultMechanism), currentMechanism), newMechanism);
  if (newMechanism && 'data' in newMechanism) {
    const mergedData = _objectSpread(_objectSpread({}, currentMechanism && currentMechanism.data), newMechanism.data);
    firstException.mechanism.data = mergedData;
  }
}

// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/**
 * Represents Semantic Versioning object
 */

/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
  const match = input.match(SEMVER_REGEXP) || [];
  const major = parseInt(match[1], 10);
  const minor = parseInt(match[2], 10);
  const patch = parseInt(match[3], 10);
  return {
    buildmetadata: match[5],
    major: isNaN(major) ? undefined : major,
    minor: isNaN(minor) ? undefined : minor,
    patch: isNaN(patch) ? undefined : patch,
    prerelease: match[4]
  };
}

/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame) {
  let linesOfContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  const lineno = frame.lineno || 0;
  const maxLines = lines.length;
  const sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
  frame.pre_context = lines.slice(Math.max(0, sourceLine - linesOfContext), sourceLine).map(function (line) {
    return Object(_string_js__WEBPACK_IMPORTED_MODULE_2__["snipLine"])(line, 0);
  });
  frame.context_line = Object(_string_js__WEBPACK_IMPORTED_MODULE_2__["snipLine"])(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
  frame.post_context = lines.slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext).map(function (line) {
    return Object(_string_js__WEBPACK_IMPORTED_MODULE_2__["snipLine"])(line, 0);
  });
}

/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (exception && exception.__sentry_captured__) {
    return true;
  }
  try {
    // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
    // `ExtraErrorData` integration
    Object(_object_js__WEBPACK_IMPORTED_MODULE_1__["addNonEnumerableProperty"])(exception, '__sentry_captured__', true);
  } catch (err) {
    // `exception` is a primitive, so we can't mark it seen
  }
  return false;
}

/**
 * Checks whether the given input is already an array, and if it isn't, wraps it in one.
 *
 * @param maybeArray Input to turn into an array, if necessary
 * @returns The input, if already an array, or an array with the input as the only element, if not
 */
function arrayify(maybeArray) {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/node.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/node.js ***!
  \************************************************/
/*! exports provided: dynamicRequire, isNodeEnv, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return dynamicRequire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return isNodeEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@sentry/utils/esm/env.js");


/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */

/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
  // explicitly check for browser bundles as those can be optimized statically
  // by terser/rollup.
  return !Object(_env_js__WEBPACK_IMPORTED_MODULE_0__["isBrowserBundle"])() && Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
}

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return mod.require(request);
}

/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */
function loadModule(moduleName) {
  let mod;
  try {
    mod = dynamicRequire(module, moduleName);
  } catch (e) {
    // no-empty
  }
  try {
    const _dynamicRequire = dynamicRequire(module, 'process'),
      cwd = _dynamicRequire.cwd;
    mod = dynamicRequire(module, `${cwd()}/node_modules/${moduleName}`);
  } catch (e) {
    // no-empty
  }
  return mod;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/normalize.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/normalize.js ***!
  \*****************************************************/
/*! exports provided: normalize, normalizeToSize, walk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return normalizeToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return visit; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _memo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memo.js */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _stacktrace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stacktrace.js */ "./node_modules/@sentry/utils/esm/stacktrace.js");






/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normallized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalize(input) {
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : +Infinity;
  let maxProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : +Infinity;
  try {
    // since we're at the outermost level, we don't provide a key
    return visit('', input, depth, maxProperties);
  } catch (err) {
    return {
      ERROR: `**non-serializable** (${err})`
    };
  }
}

/** JSDoc */
function normalizeToSize(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
object) {
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  let maxSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100 * 1024;
  const normalized = normalize(object, depth);
  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }
  return normalized;
}

/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */
function visit(key, value) {
  let depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : +Infinity;
  let maxProperties = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : +Infinity;
  let memo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Object(_memo_js__WEBPACK_IMPORTED_MODULE_2__["memoBuilder"])();
  const _memo = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(memo, 2),
    memoize = _memo[0],
    unmemoize = _memo[1];

  // Get the simple cases out of the way first
  if (value === null || ['number', 'boolean', 'string'].includes(typeof value) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(value)) {
    return value;
  }
  const stringified = stringifyValue(key, value);

  // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
  // Everything else will have already been serialized, so if we don't see that pattern, we're done.
  if (!stringified.startsWith('[object ')) {
    return stringified;
  }

  // From here on, we can assert that `value` is either an object or an array.

  // Do not normalize objects that we know have already been normalized. As a general rule, the
  // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
  // have already been normalized.
  if (value['__sentry_skip_normalization__']) {
    return value;
  }

  // We're also done if we've reached the max depth
  if (depth === 0) {
    // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
    return stringified.replace('object ', '');
  }

  // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
  if (memoize(value)) {
    return '[Circular ~]';
  }

  // If the value has a `toJSON` method, we call it to extract more information
  const valueWithToJSON = value;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      // We need to normalize the return value of `.toJSON()` in case it has circular references
      return visit('', jsonValue, depth - 1, maxProperties, memo);
    } catch (err) {
      // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
    }
  }

  // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
  // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
  // property/entry, and keep track of the number of items we add to it.
  const normalized = Array.isArray(value) ? [] : {};
  let numAdded = 0;

  // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
  // properties are non-enumerable and otherwise would get missed.
  const visitable = Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["convertToPlainObject"])(value);
  for (const visitKey in visitable) {
    // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }
    if (numAdded >= maxProperties) {
      normalized[visitKey] = '[MaxProperties ~]';
      break;
    }

    // Recursively visit all the child nodes
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);
    numAdded += 1;
  }

  // Once we've visited all the branches, remove the parent from memo storage
  unmemoize(value);

  // Return accumulated values
  return normalized;
}

/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */
function stringifyValue(key,
// this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
// our internal use, it'll do
value) {
  try {
    if (key === 'domain' && value && typeof value === 'object' && value._events) {
      return '[Domain]';
    }
    if (key === 'domainEmitter') {
      return '[DomainEmitter]';
    }

    // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
    // which won't throw if they are not present.

    if (typeof global !== 'undefined' && value === global) {
      return '[Global]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== 'undefined' && value === window) {
      return '[Window]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined' && value === document) {
      return '[Document]';
    }

    // React's SyntheticEvent thingy
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__["isSyntheticEvent"])(value)) {
      return '[SyntheticEvent]';
    }
    if (typeof value === 'number' && value !== value) {
      return '[NaN]';
    }

    // this catches `undefined` (but not `null`, which is a primitive and can be serialized on its own)
    if (value === void 0) {
      return '[undefined]';
    }
    if (typeof value === 'function') {
      return `[Function: ${Object(_stacktrace_js__WEBPACK_IMPORTED_MODULE_4__["getFunctionName"])(value)}]`;
    }
    if (typeof value === 'symbol') {
      return `[${String(value)}]`;
    }

    // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
    if (typeof value === 'bigint') {
      return `[BigInt: ${String(value)}]`;
    }

    // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
    // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
    // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
    // we can make sure that only plain objects come out that way.
    return `[object ${Object.getPrototypeOf(value).constructor.name}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}

/** Calculates bytes size of input string */
function utf8Length(value) {
  // eslint-disable-next-line no-bitwise
  return ~-encodeURI(value).split(/%..|./).length;
}

/** Calculates bytes size of input object */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/object.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/object.js ***!
  \**************************************************/
/*! exports provided: addNonEnumerableProperty, convertToPlainObject, dropUndefinedKeys, extractExceptionKeysForMessage, fill, getOriginalFunction, markFunctionWrapped, objectify, urlEncode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNonEnumerableProperty", function() { return addNonEnumerableProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPlainObject", function() { return convertToPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return dropUndefinedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return extractExceptionKeysForMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginalFunction", function() { return getOriginalFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markFunctionWrapped", function() { return markFunctionWrapped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectify", function() { return objectify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return urlEncode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string.js */ "./node_modules/@sentry/utils/esm/string.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }
  const original = source[name];
  const wrapped = replacementFactory(original);

  // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  if (typeof wrapped === 'function') {
    try {
      markFunctionWrapped(wrapped, original);
    } catch (_Oo) {
      // This can throw if multiple fill happens on a global object like XMLHttpRequest
      // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
    }
  }
  source[name] = wrapped;
}

/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */
function addNonEnumerableProperty(obj, name, value) {
  Object.defineProperty(obj, name, {
    // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
    value: value,
    writable: true,
    configurable: true
  });
}

/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */
function markFunctionWrapped(wrapped, original) {
  const proto = original.prototype || {};
  wrapped.prototype = original.prototype = proto;
  addNonEnumerableProperty(wrapped, '__sentry_original__', original);
}

/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */
function getOriginalFunction(func) {
  return func.__sentry_original__;
}

/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
  return Object.keys(object).map(function (key) {
    return `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`;
  }).join('&');
}

/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argurment itself, when value is neither an Event nor
 *  an Error.
 */
function convertToPlainObject(value) {
  if (Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isError"])(value)) {
    return _objectSpread({
      message: value.message,
      name: value.name,
      stack: value.stack
    }, getOwnProperties(value));
  } else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isEvent"])(value)) {
    const newObj = _objectSpread({
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget)
    }, getOwnProperties(value));
    if (typeof CustomEvent !== 'undefined' && Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(value, CustomEvent)) {
      newObj.detail = value.detail;
    }
    return newObj;
  } else {
    return value;
  }
}

/** Creates a string representation of the target of an `Event` object */
function serializeEventTarget(target) {
  try {
    return Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isElement"])(target) ? Object(_browser_js__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"])(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return '<unknown>';
  }
}

/** Filters out all but an object's own properties */
function getOwnProperties(obj) {
  if (typeof obj === 'object' && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = obj[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}

/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
function extractExceptionKeysForMessage(exception) {
  let maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();
  if (!keys.length) {
    return '[object has no keys]';
  }
  if (keys[0].length >= maxLength) {
    return Object(_string_js__WEBPACK_IMPORTED_MODULE_3__["truncate"])(keys[0], maxLength);
  }
  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(', ');
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return Object(_string_js__WEBPACK_IMPORTED_MODULE_3__["truncate"])(serialized, maxLength);
  }
  return '';
}

/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 */
function dropUndefinedKeys(inputValue) {
  // This map keeps track of what already visited nodes map to.
  // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
  // references as the input object.
  const memoizationMap = new Map();

  // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
  return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
  if (Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(inputValue)) {
    // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal;
    }
    const returnValue = {};
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);
    for (var _i = 0, _Object$keys = Object.keys(inputValue); _i < _Object$keys.length; _i++) {
      const key = _Object$keys[_i];
      if (typeof inputValue[key] !== 'undefined') {
        returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
      }
    }
    return returnValue;
  }
  if (Array.isArray(inputValue)) {
    // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal;
    }
    const returnValue = [];
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);
    inputValue.forEach(function (item) {
      returnValue.push(_dropUndefinedKeys(item, memoizationMap));
    });
    return returnValue;
  }
  return inputValue;
}

/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
function objectify(wat) {
  let objectified;
  switch (true) {
    case wat === undefined || wat === null:
      objectified = new String(wat);
      break;

    // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
    // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
    // an object in order to wrap it.
    case typeof wat === 'symbol' || typeof wat === 'bigint':
      objectified = Object(wat);
      break;

    // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
    case Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"])(wat):
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      objectified = new wat.constructor(wat);
      break;

    // by process of elimination, at this point we know that `wat` must already be an object
    default:
      objectified = wat;
      break;
  }
  return objectified;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/path.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/path.js ***!
  \************************************************/
/*! exports provided: basename, dirname, isAbsolute, join, normalizePath, relative, resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return isAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return normalizePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js

/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  let up = 0;
  for (let i = parts.length - 1; i >= 0; i--) {
    const last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      // eslint-disable-next-line no-plusplus
      up++;
    } else if (up) {
      parts.splice(i, 1);
      // eslint-disable-next-line no-plusplus
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    // eslint-disable-next-line no-plusplus
    for (; up--; up) {
      parts.unshift('..');
    }
  }
  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
const splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
/** JSDoc */
function splitPath(filename) {
  const parts = splitPathRe.exec(filename);
  return parts ? parts.slice(1) : [];
}

// path.resolve([from ...], to)
// posix version
/** JSDoc */
function resolve() {
  let resolvedPath = '';
  let resolvedAbsolute = false;
  for (let i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path = i >= 0 ? i < 0 || arguments.length <= i ? undefined : arguments[i] : '/';

    // Skip empty entries
    if (!path) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}

/** JSDoc */
function trim(arr) {
  let start = 0;
  for (; start < arr.length; start++) {
    if (arr[start] !== '') {
      break;
    }
  }
  let end = arr.length - 1;
  for (; end >= 0; end--) {
    if (arr[end] !== '') {
      break;
    }
  }
  if (start > end) {
    return [];
  }
  return arr.slice(start, end - start + 1);
}

// path.relative(from, to)
// posix version
/** JSDoc */
function relative(from, to) {
  /* eslint-disable no-param-reassign */
  from = resolve(from).substr(1);
  to = resolve(to).substr(1);
  /* eslint-enable no-param-reassign */

  const fromParts = trim(from.split('/'));
  const toParts = trim(to.split('/'));
  const length = Math.min(fromParts.length, toParts.length);
  let samePartsLength = length;
  for (let i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }
  let outputParts = [];
  for (let i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
}

// path.normalize(path)
// posix version
/** JSDoc */
function normalizePath(path) {
  const isPathAbsolute = isAbsolute(path);
  const trailingSlash = path.substr(-1) === '/';

  // Normalize the path
  let normalizedPath = normalizeArray(path.split('/').filter(function (p) {
    return !!p;
  }), !isPathAbsolute).join('/');
  if (!normalizedPath && !isPathAbsolute) {
    normalizedPath = '.';
  }
  if (normalizedPath && trailingSlash) {
    normalizedPath += '/';
  }
  return (isPathAbsolute ? '/' : '') + normalizedPath;
}

// posix version
/** JSDoc */
function isAbsolute(path) {
  return path.charAt(0) === '/';
}

// posix version
/** JSDoc */
function join() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return normalizePath(args.join('/'));
}

/** JSDoc */
function dirname(path) {
  const result = splitPath(path);
  const root = result[0];
  let dir = result[1];
  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }
  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
}

/** JSDoc */
function basename(path, ext) {
  let f = splitPath(path)[2];
  if (ext && f.substr(ext.length * -1) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/promisebuffer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/promisebuffer.js ***!
  \*********************************************************/
/*! exports provided: makePromiseBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromiseBuffer", function() { return makePromiseBuffer; });
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _syncpromise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncpromise.js */ "./node_modules/@sentry/utils/esm/syncpromise.js");



/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */
function makePromiseBuffer(limit) {
  const buffer = [];
  function isReady() {
    return limit === undefined || buffer.length < limit;
  }

  /**
   * Remove a promise from the queue.
   *
   * @param task Can be any PromiseLike<T>
   * @returns Removed promise.
   */
  function remove(task) {
    return buffer.splice(buffer.indexOf(task), 1)[0];
  }

  /**
   * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
   *
   * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
   *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
   *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
   *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
   *        limit check.
   * @returns The original promise.
   */
  function add(taskProducer) {
    if (!isReady()) {
      return Object(_syncpromise_js__WEBPACK_IMPORTED_MODULE_1__["rejectedSyncPromise"])(new _error_js__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Not adding Promise because buffer limit was reached.'));
    }

    // start the task and add its promise to the queue
    const task = taskProducer();
    if (buffer.indexOf(task) === -1) {
      buffer.push(task);
    }
    void task.then(function () {
      return remove(task);
    })
    // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
    // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
    // have promises, so TS has to polyfill when down-compiling.)
    .then(null, function () {
      return remove(task).then(null, function () {
        // We have to add another catch here because `remove()` starts a new promise chain.
      });
    });
    return task;
  }

  /**
   * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
   *
   * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
   * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
   * `true`.
   * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
   * `false` otherwise
   */
  function drain(timeout) {
    return new _syncpromise_js__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
      let counter = buffer.length;
      if (!counter) {
        return resolve(true);
      }

      // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
      const capturedSetTimeout = setTimeout(function () {
        if (timeout && timeout > 0) {
          resolve(false);
        }
      }, timeout);

      // if all promises resolve in time, cancel the timer and resolve to `true`
      buffer.forEach(function (item) {
        void Object(_syncpromise_js__WEBPACK_IMPORTED_MODULE_1__["resolvedSyncPromise"])(item).then(function () {
          // eslint-disable-next-line no-plusplus
          if (! --counter) {
            clearTimeout(capturedSetTimeout);
            resolve(true);
          }
        }, reject);
      });
    });
  }
  return {
    $: buffer,
    add,
    drain
  };
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/ratelimit.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/ratelimit.js ***!
  \*****************************************************/
/*! exports provided: DEFAULT_RETRY_AFTER, disabledUntil, isRateLimited, parseRetryAfterHeader, updateRateLimits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RETRY_AFTER", function() { return DEFAULT_RETRY_AFTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledUntil", function() { return disabledUntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRateLimited", function() { return isRateLimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return parseRetryAfterHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRateLimits", function() { return updateRateLimits; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// Intentionally keeping the key broad, as we don't know for sure what rate limit headers get returned from backend

const DEFAULT_RETRY_AFTER = 60 * 1000; // 60 seconds

/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */
function parseRetryAfterHeader(header) {
  let now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1000;
  }
  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }
  return DEFAULT_RETRY_AFTER;
}

/**
 * Gets the time that given category is disabled until for rate limiting
 */
function disabledUntil(limits, category) {
  return limits[category] || limits.all || 0;
}

/**
 * Checks if a category is rate limited
 */
function isRateLimited(limits, category) {
  let now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
  return disabledUntil(limits, category) > now;
}

/**
 * Update ratelimits from incoming headers.
 * Returns true if headers contains a non-empty rate limiting header.
 */
function updateRateLimits(limits, _ref) {
  let statusCode = _ref.statusCode,
    headers = _ref.headers;
  let now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
  const updatedRateLimits = _objectSpread({}, limits);

  // "The name is case-insensitive."
  // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
  const rateLimitHeader = headers && headers['x-sentry-rate-limits'];
  const retryAfterHeader = headers && headers['retry-after'];
  if (rateLimitHeader) {
    /**
     * rate limit headers are of the form
     *     <header>,<header>,..
     * where each <header> is of the form
     *     <retry_after>: <categories>: <scope>: <reason_code>
     * where
     *     <retry_after> is a delay in seconds
     *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
     *         <category>;<category>;...
     *     <scope> is what's being limited (org, project, or key) - ignored by SDK
     *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
     */
    var _iterator = _createForOfIteratorHelper(rateLimitHeader.trim().split(',')),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const limit = _step.value;
        const _limit$split = limit.split(':', 2),
          _limit$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_limit$split, 2),
          retryAfter = _limit$split2[0],
          categories = _limit$split2[1];
        const headerDelay = parseInt(retryAfter, 10);
        const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
        if (!categories) {
          updatedRateLimits.all = now + delay;
        } else {
          var _iterator2 = _createForOfIteratorHelper(categories.split(';')),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              const category = _step2.value;
              updatedRateLimits[category] = now + delay;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1000;
  }
  return updatedRateLimits;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/requestdata.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/requestdata.js ***!
  \*******************************************************/
/*! exports provided: addRequestDataToEvent, addRequestDataToTransaction, extractPathForTransaction, extractRequestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRequestDataToEvent", function() { return addRequestDataToEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRequestDataToTransaction", function() { return addRequestDataToTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractPathForTransaction", function() { return extractPathForTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractRequestData", function() { return extractRequestData; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/@sentry/utils/esm/normalize.js");
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url.js */ "./node_modules/@sentry/utils/esm/url.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const DEFAULT_INCLUDES = {
  ip: false,
  request: true,
  transaction: true,
  user: true
};
const DEFAULT_REQUEST_INCLUDES = ['cookies', 'data', 'headers', 'method', 'query_string', 'url'];
const DEFAULT_USER_INCLUDES = ['id', 'username', 'email'];

/**
 * Sets parameterized route as transaction name e.g.: `GET /users/:id`
 * Also adds more context data on the transaction from the request
 */
function addRequestDataToTransaction(transaction, req, deps) {
  if (!transaction) return;
  if (!transaction.metadata.source || transaction.metadata.source === 'url') {
    // Attempt to grab a parameterized route off of the request
    transaction.setName.apply(transaction, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(extractPathForTransaction(req, {
      path: true,
      method: true
    })));
  }
  transaction.setData('url', req.originalUrl || req.url);
  if (req.baseUrl) {
    transaction.setData('baseUrl', req.baseUrl);
  }
  transaction.setData('query', extractQueryParams(req, deps));
}

/**
 * Extracts a complete and parameterized path from the request object and uses it to construct transaction name.
 * If the parameterized transaction name cannot be extracted, we fall back to the raw URL.
 *
 * Additionally, this function determines and returns the transaction name source
 *
 * eg. GET /mountpoint/user/:id
 *
 * @param req A request object
 * @param options What to include in the transaction name (method, path, or a custom route name to be
 *                used instead of the request's route)
 *
 * @returns A tuple of the fully constructed transaction name [0] and its source [1] (can be either 'route' or 'url')
 */
function extractPathForTransaction(req) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const method = req.method && req.method.toUpperCase();
  let path = '';
  let source = 'url';

  // Check to see if there's a parameterized route we can use (as there is in Express)
  if (options.customRoute || req.route) {
    path = options.customRoute || `${req.baseUrl || ''}${req.route && req.route.path}`;
    source = 'route';
  }

  // Otherwise, just take the original URL
  else if (req.originalUrl || req.url) {
    path = Object(_url_js__WEBPACK_IMPORTED_MODULE_5__["stripUrlQueryAndFragment"])(req.originalUrl || req.url || '');
  }
  let name = '';
  if (options.method && method) {
    name += method;
  }
  if (options.method && options.path) {
    name += ' ';
  }
  if (options.path && path) {
    name += path;
  }
  return [name, source];
}

/** JSDoc */
function extractTransaction(req, type) {
  switch (type) {
    case 'path':
      {
        return extractPathForTransaction(req, {
          path: true
        })[0];
      }
    case 'handler':
      {
        return req.route && req.route.stack && req.route.stack[0] && req.route.stack[0].name || '<anonymous>';
      }
    case 'methodPath':
    default:
      {
        return extractPathForTransaction(req, {
          path: true,
          method: true
        })[0];
      }
  }
}

/** JSDoc */
function extractUserData(user, keys) {
  const extractedUser = {};
  const attributes = Array.isArray(keys) ? keys : DEFAULT_USER_INCLUDES;
  attributes.forEach(function (key) {
    if (user && key in user) {
      extractedUser[key] = user[key];
    }
  });
  return extractedUser;
}

/**
 * Normalize data from the request object, accounting for framework differences.
 *
 * @param req The request object from which to extract data
 * @param options.include An optional array of keys to include in the normalized data. Defaults to
 * DEFAULT_REQUEST_INCLUDES if not provided.
 * @param options.deps Injected, platform-specific dependencies
 * @returns An object containing normalized request data
 */
function extractRequestData(req, options) {
  const _ref = options || {},
    _ref$include = _ref.include,
    include = _ref$include === void 0 ? DEFAULT_REQUEST_INCLUDES : _ref$include,
    deps = _ref.deps;
  const requestData = {};

  // headers:
  //   node, express, koa, nextjs: req.headers
  const headers = req.headers || {};
  // method:
  //   node, express, koa, nextjs: req.method
  const method = req.method;
  // host:
  //   express: req.hostname in > 4 and req.host in < 4
  //   koa: req.host
  //   node, nextjs: req.headers.host
  const host = req.hostname || req.host || headers.host || '<no host>';
  // protocol:
  //   node, nextjs: <n/a>
  //   express, koa: req.protocol
  const protocol = req.protocol === 'https' || req.socket && req.socket.encrypted ? 'https' : 'http';
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  const originalUrl = req.originalUrl || req.url || '';
  // absolute url
  const absoluteUrl = `${protocol}://${host}${originalUrl}`;
  include.forEach(function (key) {
    switch (key) {
      case 'headers':
        {
          requestData.headers = headers;
          break;
        }
      case 'method':
        {
          requestData.method = method;
          break;
        }
      case 'url':
        {
          requestData.url = absoluteUrl;
          break;
        }
      case 'cookies':
        {
          // cookies:
          //   node, express, koa: req.headers.cookie
          //   vercel, sails.js, express (w/ cookie middleware), nextjs: req.cookies
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          requestData.cookies =
          // TODO (v8 / #5257): We're only sending the empty object for backwards compatibility, so the last bit can
          // come off in v8
          req.cookies || headers.cookie && deps && deps.cookie && deps.cookie.parse(headers.cookie) || {};
          break;
        }
      case 'query_string':
        {
          // query string:
          //   node: req.url (raw)
          //   express, koa, nextjs: req.query
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          requestData.query_string = extractQueryParams(req, deps);
          break;
        }
      case 'data':
        {
          if (method === 'GET' || method === 'HEAD') {
            break;
          }
          // body data:
          //   express, koa, nextjs: req.body
          //
          //   when using node by itself, you have to read the incoming stream(see
          //   https://nodejs.dev/learn/get-http-request-body-data-using-nodejs); if a user is doing that, we can't know
          //   where they're going to store the final result, so they'll have to capture this data themselves
          if (req.body !== undefined) {
            requestData.data = Object(_is_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(req.body) ? req.body : JSON.stringify(Object(_normalize_js__WEBPACK_IMPORTED_MODULE_4__["normalize"])(req.body));
          }
          break;
        }
      default:
        {
          if ({}.hasOwnProperty.call(req, key)) {
            requestData[key] = req[key];
          }
        }
    }
  });
  return requestData;
}

/**
 * Options deciding what parts of the request to use when enhancing an event
 */

/**
 * Add data from the given request to the given event
 *
 * @param event The event to which the request data will be added
 * @param req Request object
 * @param options.include Flags to control what data is included
 * @param options.deps Injected platform-specific dependencies
 * @hidden
 */
function addRequestDataToEvent(event, req, options) {
  const include = _objectSpread(_objectSpread({}, DEFAULT_INCLUDES), Object(_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([options, 'optionalAccess', function (_) {
    return _.include;
  }]));
  if (include.request) {
    const extractedRequestData = Array.isArray(include.request) ? extractRequestData(req, {
      include: include.request,
      deps: Object(_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([options, 'optionalAccess', function (_2) {
        return _2.deps;
      }])
    }) : extractRequestData(req, {
      deps: Object(_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([options, 'optionalAccess', function (_3) {
        return _3.deps;
      }])
    });
    event.request = _objectSpread(_objectSpread({}, event.request), extractedRequestData);
  }
  if (include.user) {
    const extractedUser = req.user && Object(_is_js__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(req.user) ? extractUserData(req.user, include.user) : {};
    if (Object.keys(extractedUser).length) {
      event.user = _objectSpread(_objectSpread({}, event.user), extractedUser);
    }
  }

  // client ip:
  //   node, nextjs: req.socket.remoteAddress
  //   express, koa: req.ip
  if (include.ip) {
    const ip = req.ip || req.socket && req.socket.remoteAddress;
    if (ip) {
      event.user = _objectSpread(_objectSpread({}, event.user), {}, {
        ip_address: ip
      });
    }
  }
  if (include.transaction && !event.transaction) {
    // TODO do we even need this anymore?
    // TODO make this work for nextjs
    event.transaction = extractTransaction(req, include.transaction);
  }
  return event;
}
function extractQueryParams(req, deps) {
  // url (including path and query string):
  //   node, express: req.originalUrl
  //   koa, nextjs: req.url
  let originalUrl = req.originalUrl || req.url || '';
  if (!originalUrl) {
    return;
  }

  // The `URL` constructor can't handle internal URLs of the form `/some/path/here`, so stick a dummy protocol and
  // hostname on the beginning. Since the point here is just to grab the query string, it doesn't matter what we use.
  if (originalUrl.startsWith('/')) {
    originalUrl = `http://dogs.are.great${originalUrl}`;
  }
  return req.query || typeof URL !== undefined && new URL(originalUrl).search.replace('?', '') ||
  // In Node 8, `URL` isn't in the global scope, so we have to use the built-in module from Node
  deps && deps.url && deps.url.parse(originalUrl).query || undefined;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/severity.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/severity.js ***!
  \****************************************************/
/*! exports provided: severityFromString, severityLevelFromString, validSeverityLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "severityFromString", function() { return severityFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "severityLevelFromString", function() { return severityLevelFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validSeverityLevels", function() { return validSeverityLevels; });
// Note: Ideally the `SeverityLevel` type would be derived from `validSeverityLevels`, but that would mean either
//
// a) moving `validSeverityLevels` to `@sentry/types`,
// b) moving the`SeverityLevel` type here, or
// c) importing `validSeverityLevels` from here into `@sentry/types`.
//
// Option A would make `@sentry/types` a runtime dependency of `@sentry/utils` (not good), and options B and C would
// create a circular dependency between `@sentry/types` and `@sentry/utils` (also not good). So a TODO accompanying the
// type, reminding anyone who changes it to change this list also, will have to do.

const validSeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];

/**
 * Converts a string-based level into a member of the deprecated {@link Severity} enum.
 *
 * @deprecated `severityFromString` is deprecated. Please use `severityLevelFromString` instead.
 *
 * @param level String representation of Severity
 * @returns Severity
 */
function severityFromString(level) {
  return severityLevelFromString(level);
}

/**
 * Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
 *
 * @param level String representation of desired `SeverityLevel`.
 * @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
 */
function severityLevelFromString(level) {
  return level === 'warn' ? 'warning' : validSeverityLevels.includes(level) ? level : 'log';
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/stacktrace.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/stacktrace.js ***!
  \******************************************************/
/*! exports provided: createStackParser, getFunctionName, nodeStackLineParser, stackParserFromStackParserOptions, stripSentryFramesAndReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStackParser", function() { return createStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeStackLineParser", function() { return nodeStackLineParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackParserFromStackParserOptions", function() { return stackParserFromStackParserOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSentryFramesAndReverse", function() { return stripSentryFramesAndReverse; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildPolyfills */ "./node_modules/@sentry/utils/esm/buildPolyfills/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

const STACKTRACE_LIMIT = 50;

/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */
function createStackParser() {
  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }
  const sortedParsers = parsers.sort(function (a, b) {
    return a[0] - b[0];
  }).map(function (p) {
    return p[1];
  });
  return function (stack) {
    let skipFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const frames = [];
    var _iterator = _createForOfIteratorHelper(stack.split('\n').slice(skipFirst)),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const line = _step.value;
        // https://github.com/getsentry/sentry-javascript/issues/5459
        // Remove webpack (error: *) wrappers
        const cleanedLine = line.replace(/\(error: (.*)\)/, '$1');
        var _iterator2 = _createForOfIteratorHelper(sortedParsers),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            const parser = _step2.value;
            const frame = parser(cleanedLine);
            if (frame) {
              frames.push(frame);
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return stripSentryFramesAndReverse(frames);
  };
}

/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(stackParser));
  }
  return stackParser;
}

/**
 * @hidden
 */
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }
  let localStack = stack;
  const firstFrameFunction = localStack[0].function || '';
  const lastFrameFunction = localStack[localStack.length - 1].function || '';

  // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
  if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
    localStack = localStack.slice(1);
  }

  // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
  if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
    localStack = localStack.slice(0, -1);
  }

  // The frame where the crash happened, should be the last entry in the array
  return localStack.slice(0, STACKTRACE_LIMIT).map(function (frame) {
    return _objectSpread(_objectSpread({}, frame), {}, {
      filename: frame.filename || localStack[0].filename,
      function: frame.function || '?'
    });
  }).reverse();
}
const defaultFunctionName = '<anonymous>';

/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== 'function') {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    return defaultFunctionName;
  }
}

// eslint-disable-next-line complexity
function node(getModule) {
  const FILENAME_MATCH = /^\s*[-]{4,}$/;
  const FULL_MATCH = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;

  // eslint-disable-next-line complexity
  return function (line) {
    if (line.match(FILENAME_MATCH)) {
      return {
        filename: line
      };
    }
    const lineMatch = line.match(FULL_MATCH);
    if (!lineMatch) {
      return undefined;
    }
    let object;
    let method;
    let functionName;
    let typeName;
    let methodName;
    if (lineMatch[1]) {
      functionName = lineMatch[1];
      let methodStart = functionName.lastIndexOf('.');
      if (functionName[methodStart - 1] === '.') {
        // eslint-disable-next-line no-plusplus
        methodStart--;
      }
      if (methodStart > 0) {
        object = functionName.substr(0, methodStart);
        method = functionName.substr(methodStart + 1);
        const objectEnd = object.indexOf('.Module');
        if (objectEnd > 0) {
          functionName = functionName.substr(objectEnd + 1);
          object = object.substr(0, objectEnd);
        }
      }
      typeName = undefined;
    }
    if (method) {
      typeName = object;
      methodName = method;
    }
    if (method === '<anonymous>') {
      methodName = undefined;
      functionName = undefined;
    }
    if (functionName === undefined) {
      methodName = methodName || '<anonymous>';
      functionName = typeName ? `${typeName}.${methodName}` : methodName;
    }
    const filename = Object(_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([lineMatch, 'access', function (_) {
      return _[2];
    }, 'optionalAccess', function (_2) {
      return _2.startsWith;
    }, 'call', function (_3) {
      return _3('file://');
    }]) ? lineMatch[2].substr(7) : lineMatch[2];
    const isNative = lineMatch[5] === 'native';
    const isInternal = isNative || filename && !filename.startsWith('/') && !filename.startsWith('.') && filename.indexOf(':\\') !== 1;

    // in_app is all that's not an internal Node function or a module within node_modules
    // note that isNative appears to return true even for node core libraries
    // see https://github.com/getsentry/raven-node/issues/176
    const in_app = !isInternal && filename !== undefined && !filename.includes('node_modules/');
    return {
      filename,
      module: Object(_buildPolyfills__WEBPACK_IMPORTED_MODULE_2__["_optionalChain"])([getModule, 'optionalCall', function (_4) {
        return _4(filename);
      }]),
      function: functionName,
      lineno: parseInt(lineMatch[3], 10) || undefined,
      colno: parseInt(lineMatch[4], 10) || undefined,
      in_app
    };
  };
}

/**
 * Node.js stack line parser
 *
 * This is in @sentry/utils so it can be used from the Electron SDK in the browser for when `nodeIntegration == true`.
 * This allows it to be used without referencing or importing any node specific code which causes bundlers to complain
 */
function nodeStackLineParser(getModule) {
  return [90, node(getModule)];
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/string.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/string.js ***!
  \**************************************************/
/*! exports provided: escapeStringForRegex, isMatchingPattern, safeJoin, snipLine, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeStringForRegex", function() { return escapeStringForRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return isMatchingPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return safeJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return snipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");


/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str) {
  let max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (typeof str !== 'string' || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.substr(0, max)}...`;
}

/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
  let newLine = line;
  const lineLength = newLine.length;
  if (lineLength <= 150) {
    return newLine;
  }
  if (colno > lineLength) {
    // eslint-disable-next-line no-param-reassign
    colno = lineLength;
  }
  let start = Math.max(colno - 60, 0);
  if (start < 5) {
    start = 0;
  }
  let end = Math.min(start + 140, lineLength);
  if (end > lineLength - 5) {
    end = lineLength;
  }
  if (end === lineLength) {
    start = Math.max(end - 140, 0);
  }
  newLine = newLine.slice(start, end);
  if (start > 0) {
    newLine = `'{snip} ${newLine}`;
  }
  if (end < lineLength) {
    newLine += ' {snip}';
  }
  return newLine;
}

/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return '';
  }
  const output = [];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    try {
      output.push(String(value));
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }
  return output.join(delimiter);
}

/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
  if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
    return false;
  }
  if (Object(_is_js__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(pattern)) {
    return pattern.test(value);
  }
  if (typeof pattern === 'string') {
    return value.indexOf(pattern) !== -1;
  }
  return false;
}

/**
 * Given a string, escape characters which have meaning in the regex grammar, such that the result is safe to feed to
 * `new RegExp()`.
 *
 * Based on https://github.com/sindresorhus/escape-string-regexp. Vendored to a) reduce the size by skipping the runtime
 * type-checking, and b) ensure it gets down-compiled for old versions of Node (the published package only supports Node
 * 12+).
 *
 * @param regexString The string to escape
 * @returns An version of the string with all special regex characters escaped
 */
function escapeStringForRegex(regexString) {
  // escape the hyphen separately so we can also replace it with a unicode literal hyphen, to avoid the problems
  // discussed in https://github.com/sindresorhus/escape-string-regexp/issues/20.
  return regexString.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/supports.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/supports.js ***!
  \****************************************************/
/*! exports provided: isNativeFetch, supportsDOMError, supportsDOMException, supportsErrorEvent, supportsFetch, supportsHistory, supportsNativeFetch, supportsReferrerPolicy, supportsReportingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNativeFetch", function() { return isNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return supportsDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return supportsDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return supportsErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return supportsFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return supportsNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return supportsReferrerPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return supportsReportingObserver; });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/utils/esm/logger.js");



/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
  try {
    new ErrorEvent('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
  try {
    // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
    // 1 argument required, but only 0 present.
    // @ts-ignore It really needs 1 argument, not 0.
    new DOMError('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
  try {
    new DOMException('');
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
  if (!('fetch' in _browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"])) {
    return false;
  }
  try {
    new Headers();
    new Request('http://www.example.com');
    new Response();
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
  return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}

/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
  if (!supportsFetch()) {
    return false;
  }

  // Fast path to avoid DOM I/O
  // eslint-disable-next-line @typescript-eslint/unbound-method
  if (isNativeFetch(_browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].fetch)) {
    return true;
  }

  // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
  // so create a "pure" iframe to see if that has native fetch
  let result = false;
  const doc = _browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].document;
  // eslint-disable-next-line deprecation/deprecation
  if (doc && typeof doc.createElement === 'function') {
    try {
      const sandbox = doc.createElement('iframe');
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        result = isNativeFetch(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
    }
  }
  return result;
}

/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
  return 'ReportingObserver' in _browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"];
}

/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
  // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
  // (see https://caniuse.com/#feat=referrer-policy),
  // it doesn't. And it throws an exception instead of ignoring this parameter...
  // REF: https://github.com/getsentry/raven-js/issues/1233

  if (!supportsFetch()) {
    return false;
  }
  try {
    new Request('_', {
      referrerPolicy: 'origin'
    });
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
  // NOTE: in Chrome App environment, touching history.pushState, *even inside
  //       a try/catch block*, will cause Chrome to output an error to console.error
  // borrowed from: https://github.com/angular/angular.js/pull/13945/files
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chrome = _browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].chrome;
  const isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
  /* eslint-enable @typescript-eslint/no-unsafe-member-access */
  const hasHistoryApi = 'history' in _browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"] && !!_browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].history.pushState && !!_browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].history.replaceState;
  return !isChromePackagedApp && hasHistoryApi;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/syncpromise.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/syncpromise.js ***!
  \*******************************************************/
/*! exports provided: SyncPromise, rejectedSyncPromise, resolvedSyncPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return SyncPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rejectedSyncPromise", function() { return rejectedSyncPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvedSyncPromise", function() { return resolvedSyncPromise; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/utils/esm/is.js");




/* eslint-disable @typescript-eslint/explicit-function-return-type */

/** SyncPromise internal states */
var States;
(function (States) {
  /** Pending */
  const PENDING = 0;
  States[States["PENDING"] = PENDING] = "PENDING";
  /** Resolved / OK */
  const RESOLVED = 1;
  States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
  /** Rejected / Error */
  const REJECTED = 2;
  States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));

// Overloads so we can call resolvedSyncPromise without arguments and generic argument

/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */
function resolvedSyncPromise(value) {
  return new SyncPromise(function (resolve) {
    resolve(value);
  });
}

/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
function rejectedSyncPromise(reason) {
  return new SyncPromise(function (_, reject) {
    reject(reason);
  });
}

/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
let SyncPromise = /*#__PURE__*/function () {
  function SyncPromise(executor) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SyncPromise);
    ;
    SyncPromise.prototype.__init.call(this);
    SyncPromise.prototype.__init2.call(this);
    SyncPromise.prototype.__init3.call(this);
    SyncPromise.prototype.__init4.call(this);
    SyncPromise.prototype.__init5.call(this);
    SyncPromise.prototype.__init6.call(this);
    try {
      executor(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }

  /** JSDoc */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SyncPromise, [{
    key: "__init",
    value: function __init() {
      this._state = States.PENDING;
    }
  }, {
    key: "__init2",
    value: function __init2() {
      this._handlers = [];
    }
  }, {
    key: "then",
    value: function then(onfulfilled, onrejected) {
      var _this = this;
      return new SyncPromise(function (resolve, reject) {
        _this._handlers.push([false, function (result) {
          if (!onfulfilled) {
            // TODO: ¯\_(ツ)_/¯
            // TODO: FIXME
            resolve(result);
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        }, function (reason) {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        }]);
        _this._executeHandlers();
      });
    }

    /** JSDoc */
  }, {
    key: "catch",
    value: function _catch(onrejected) {
      return this.then(function (val) {
        return val;
      }, onrejected);
    }

    /** JSDoc */
  }, {
    key: "finally",
    value: function _finally(onfinally) {
      var _this2 = this;
      return new SyncPromise(function (resolve, reject) {
        let val;
        let isRejected;
        return _this2.then(function (value) {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        }, function (reason) {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        }).then(function () {
          if (isRejected) {
            reject(val);
            return;
          }
          resolve(val);
        });
      });
    }

    /** JSDoc */
  }, {
    key: "__init3",
    value: function __init3() {
      var _this3 = this;
      this._resolve = function (value) {
        _this3._setResult(States.RESOLVED, value);
      };
    }

    /** JSDoc */
  }, {
    key: "__init4",
    value: function __init4() {
      var _this4 = this;
      this._reject = function (reason) {
        _this4._setResult(States.REJECTED, reason);
      };
    }

    /** JSDoc */
  }, {
    key: "__init5",
    value: function __init5() {
      var _this5 = this;
      this._setResult = function (state, value) {
        if (_this5._state !== States.PENDING) {
          return;
        }
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_2__["isThenable"])(value)) {
          void value.then(_this5._resolve, _this5._reject);
          return;
        }
        _this5._state = state;
        _this5._value = value;
        _this5._executeHandlers();
      };
    }

    /** JSDoc */
  }, {
    key: "__init6",
    value: function __init6() {
      var _this6 = this;
      this._executeHandlers = function () {
        if (_this6._state === States.PENDING) {
          return;
        }
        const cachedHandlers = _this6._handlers.slice();
        _this6._handlers = [];
        cachedHandlers.forEach(function (handler) {
          if (handler[0]) {
            return;
          }
          if (_this6._state === States.RESOLVED) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            handler[1](_this6._value);
          }
          if (_this6._state === States.REJECTED) {
            handler[2](_this6._value);
          }
          handler[0] = true;
        });
      };
    }
  }]);
  return SyncPromise;
}();


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/time.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/time.js ***!
  \************************************************/
/*! exports provided: _browserPerformanceTimeOriginMode, browserPerformanceTimeOrigin, dateTimestampInSeconds, timestampInSeconds, timestampWithMs, usingPerformanceAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_browserPerformanceTimeOriginMode", function() { return _browserPerformanceTimeOriginMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserPerformanceTimeOrigin", function() { return browserPerformanceTimeOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimestampInSeconds", function() { return dateTimestampInSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampInSeconds", function() { return timestampInSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return timestampWithMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usingPerformanceAPI", function() { return usingPerformanceAPI; });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.js */ "./node_modules/@sentry/utils/esm/node.js");



/**
 * An object that can return the current timestamp in seconds since the UNIX epoch.
 */

/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
const dateTimestampSource = {
  nowSeconds: function () {
    return Date.now() / 1000;
  }
};

/**
 * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
 * for accessing a high-resolution monotonic clock.
 */

/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
  const performance = _browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].performance;
  if (!performance || !performance.now) {
    return undefined;
  }

  // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
  //
  // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
  // performance.now() gives a date arbitrarily in the past.
  //
  // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
  // undefined.
  //
  // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
  // interact with data coming out of performance entries.
  //
  // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
  // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
  // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
  // observed skews that can be as long as days, weeks or months.
  //
  // See https://github.com/getsentry/sentry-javascript/issues/2590.
  //
  // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
  // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
  // transactions of long-lived web pages.
  const timeOrigin = Date.now() - performance.now();
  return {
    now: function () {
      return performance.now();
    },
    timeOrigin
  };
}

/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
  try {
    const perfHooks = Object(_node_js__WEBPACK_IMPORTED_MODULE_1__["dynamicRequire"])(module, 'perf_hooks');
    return perfHooks.performance;
  } catch (_) {
    return undefined;
  }
}

/**
 * The Performance API implementation for the current platform, if available.
 */
const platformPerformance = Object(_node_js__WEBPACK_IMPORTED_MODULE_1__["isNodeEnv"])() ? getNodePerformance() : getBrowserPerformance();
const timestampSource = platformPerformance === undefined ? dateTimestampSource : {
  nowSeconds: function () {
    return (platformPerformance.timeOrigin + platformPerformance.now()) / 1000;
  }
};

/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
const dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);

/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
const timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);

// Re-exported with an old name for backwards-compatibility.
const timestampWithMs = timestampInSeconds;

/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */
const usingPerformanceAPI = platformPerformance !== undefined;

/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */
let _browserPerformanceTimeOriginMode;

/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
const browserPerformanceTimeOrigin = function () {
  // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
  // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
  // data as reliable if they are within a reasonable threshold of the current time.

  const performance = _browser_js__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].performance;
  if (!performance || !performance.now) {
    _browserPerformanceTimeOriginMode = 'none';
    return undefined;
  }
  const threshold = 3600 * 1000;
  const performanceNow = performance.now();
  const dateNow = Date.now();

  // if timeOrigin isn't available set delta to threshold so it isn't used
  const timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;

  // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
  // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
  // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
  // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
  // Date API.
  // eslint-disable-next-line deprecation/deprecation
  const navigationStart = performance.timing && performance.timing.navigationStart;
  const hasNavigationStart = typeof navigationStart === 'number';
  // if navigationStart isn't available set delta to threshold so it isn't used
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;
  if (timeOriginIsReliable || navigationStartIsReliable) {
    // Use the more reliable time origin
    if (timeOriginDelta <= navigationStartDelta) {
      _browserPerformanceTimeOriginMode = 'timeOrigin';
      return performance.timeOrigin;
    } else {
      _browserPerformanceTimeOriginMode = 'navigationStart';
      return navigationStart;
    }
  }

  // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
  _browserPerformanceTimeOriginMode = 'dateNow';
  return dateNow;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/tracing.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/tracing.js ***!
  \***************************************************/
/*! exports provided: TRACEPARENT_REGEXP, extractTraceparentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return TRACEPARENT_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractTraceparentData", function() { return extractTraceparentData; });
const TRACEPARENT_REGEXP = new RegExp('^[ \\t]*' +
// whitespace
'([0-9a-f]{32})?' +
// trace_id
'-?([0-9a-f]{16})?' +
// span_id
'-?([01])?' +
// sampled
'[ \\t]*$');

/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
function extractTraceparentData(traceparent) {
  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!traceparent || !matches) {
    // empty string or no matches is invalid traceparent data
    return undefined;
  }
  let parentSampled;
  if (matches[3] === '1') {
    parentSampled = true;
  } else if (matches[3] === '0') {
    parentSampled = false;
  }
  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2]
  };
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/url.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/url.js ***!
  \***********************************************/
/*! exports provided: getNumberOfUrlSegments, parseUrl, stripUrlQueryAndFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfUrlSegments", function() { return getNumberOfUrlSegments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return stripUrlQueryAndFragment; });
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
  if (!url) {
    return {};
  }
  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }

  // coerce to undefined values to empty string so we don't get 'undefined'
  const query = match[6] || '';
  const fragment = match[8] || '';
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    relative: match[5] + query + fragment // everything minus origin
  };
}

/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
  // eslint-disable-next-line no-useless-escape
  return urlPath.split(/[\?#]/, 1)[0];
}

/**
 * Returns number of URL segments of a passed string URL.
 */
function getNumberOfUrlSegments(url) {
  // split at '/' or at '\/' to split regex urls correctly
  return url.split(/\\?\//).filter(function (s) {
    return s.length > 0 && s !== ',';
  }).length;
}


/***/ }),

/***/ "./node_modules/@sentry/utils/esm/worldwide.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/worldwide.js ***!
  \*****************************************************/
/*! exports provided: GLOBAL_OBJ, getGlobalObject, getGlobalSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_OBJ", function() { return GLOBAL_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return getGlobalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalSingleton", function() { return getGlobalSingleton; });
/** Internal global with common properties and Sentry extensions  */

// The code below for 'isGlobalObj' and 'GLOBAL_OBJ' was copied from core-js before modification
// https://github.com/zloirock/core-js/blob/1b944df55282cdc99c90db5f49eb0b6eda2cc0a3/packages/core-js/internals/global.js
// core-js has the following licence:
//
// Copyright (c) 2014-2022 Denis Pushkarev
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/** Returns 'obj' if it's the global object, otherwise returns undefined */
function isGlobalObj(obj) {
  return obj && obj.Math == Math ? obj : undefined;
}

/** Get's the global object for the current JavaScript runtime */
const GLOBAL_OBJ = typeof globalThis == 'object' && isGlobalObj(globalThis) ||
// eslint-disable-next-line no-restricted-globals
typeof window == 'object' && isGlobalObj(window) || typeof self == 'object' && isGlobalObj(self) || typeof global == 'object' && isGlobalObj(global) || function () {
  return this;
}() || {};

/**
 * @deprecated Use GLOBAL_OBJ instead. This will be removed in v8
 */
function getGlobalObject() {
  return GLOBAL_OBJ;
}

/**
 * Returns a global singleton contained in the global `__SENTRY__` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
 * @returns the singleton
 */
function getGlobalSingleton(name, creator, obj) {
  const gbl = obj || GLOBAL_OBJ;
  const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
  const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
  return singleton;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

/***/ })

}]);