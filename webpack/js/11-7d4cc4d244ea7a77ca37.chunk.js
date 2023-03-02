(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@sentry/browser/esm/client.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/client.js ***!
  \****************************************************/
/*! exports provided: BrowserClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return BrowserClient; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventbuilder.js */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _integrations_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./integrations/breadcrumbs.js */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
let BrowserClient = /*#__PURE__*/function (_BaseClient) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(BrowserClient, _BaseClient);
  var _super = _createSuper(BrowserClient);
  /**
   * Creates a new Browser SDK instance.
   *
   * @param options Configuration options for this SDK.
   */
  function BrowserClient(options) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BrowserClient);
    options._metadata = options._metadata || {};
    options._metadata.sdk = options._metadata.sdk || {
      name: 'sentry.javascript.browser',
      packages: [{
        name: 'npm:@sentry/browser',
        version: _sentry_core__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"]
      }],
      version: _sentry_core__WEBPACK_IMPORTED_MODULE_6__["SDK_VERSION"]
    };
    _this = _super.call(this, options);
    if (options.sendClientReports && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["WINDOW"].document) {
      _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["WINDOW"].document.addEventListener('visibilitychange', function () {
        if (_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["WINDOW"].document.visibilityState === 'hidden') {
          _this._flushOutcomes();
        }
      });
    }
    return _this;
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BrowserClient, [{
    key: "eventFromException",
    value: function eventFromException(exception, hint) {
      return Object(_eventbuilder_js__WEBPACK_IMPORTED_MODULE_8__["eventFromException"])(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "eventFromMessage",
    value: function eventFromMessage(message) {
      let level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
      let hint = arguments.length > 2 ? arguments[2] : undefined;
      return Object(_eventbuilder_js__WEBPACK_IMPORTED_MODULE_8__["eventFromMessage"])(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "sendEvent",
    value: function sendEvent(event, hint) {
      // We only want to add the sentry event breadcrumb when the user has the breadcrumb integration installed and
      // activated its `sentry` option.
      // We also do not want to use the `Breadcrumbs` class here directly, because we do not want it to be included in
      // bundles, if it is not used by the SDK.
      // This all sadly is a bit ugly, but we currently don't have a "pre-send" hook on the integrations so we do it this
      // way for now.
      const breadcrumbIntegration = this.getIntegrationById(_integrations_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_9__["BREADCRUMB_INTEGRATION_ID"]);
      if (breadcrumbIntegration &&
      // We check for definedness of `options`, even though it is not strictly necessary, because that access to
      // `.sentry` below does not throw, in case users provided their own integration with id "Breadcrumbs" that does
      // not have an`options` field
      breadcrumbIntegration.options && breadcrumbIntegration.options.sentry) {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_6__["getCurrentHub"])().addBreadcrumb({
          category: `sentry.${event.type === 'transaction' ? 'transaction' : 'event'}`,
          event_id: event.event_id,
          level: event.level,
          message: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["getEventDescription"])(event)
        }, {
          event
        });
      }
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(BrowserClient.prototype), "sendEvent", this).call(this, event, hint);
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "_prepareEvent",
    value: function _prepareEvent(event, hint, scope) {
      event.platform = event.platform || 'javascript';
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(BrowserClient.prototype), "_prepareEvent", this).call(this, event, hint, scope);
    }

    /**
     * Sends client reports as an envelope.
     */
  }, {
    key: "_flushOutcomes",
    value: function _flushOutcomes() {
      const outcomes = this._clearOutcomes();
      if (outcomes.length === 0) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('No outcomes to send');
        return;
      }
      if (!this._dsn) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('No dsn provided, will not send outcomes');
        return;
      }
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].log('Sending outcomes:', outcomes);
      const url = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_6__["getEnvelopeEndpointWithUrlEncodedAuth"])(this._dsn, this._options);
      const envelope = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["createClientReportEnvelope"])(outcomes, this._options.tunnel && Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["dsnToString"])(this._dsn));
      try {
        const isRealNavigator = Object.prototype.toString.call(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["WINDOW"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["WINDOW"].navigator) === '[object Navigator]';
        const hasSendBeacon = isRealNavigator && typeof _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["WINDOW"].navigator.sendBeacon === 'function';
        // Make sure beacon is not used if user configures custom transport options
        if (hasSendBeacon && !this._options.transportOptions) {
          // Prevent illegal invocations - https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
          const sendBeacon = _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["WINDOW"].navigator.sendBeacon.bind(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["WINDOW"].navigator);
          sendBeacon(url, Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_7__["serializeEnvelope"])(envelope));
        } else {
          // If beacon is not supported or if they are using the tunnel option
          // use our regular transport to send client reports to Sentry.
          this._sendEnvelope(envelope);
        }
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_7__["logger"].error(e);
      }
    }
  }]);
  return BrowserClient;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_6__["BaseClient"]);


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/eventbuilder.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/eventbuilder.js ***!
  \**********************************************************/
/*! exports provided: eventFromError, eventFromException, eventFromMessage, eventFromPlainObject, eventFromString, eventFromUnknownInput, exceptionFromError, parseStackFrames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromError", function() { return eventFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromException", function() { return eventFromException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return eventFromMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromPlainObject", function() { return eventFromPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromString", function() { return eventFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromUnknownInput", function() { return eventFromUnknownInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exceptionFromError", function() { return exceptionFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStackFrames", function() { return parseStackFrames; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * This function creates an exception from a JavaScript Error
 */
function exceptionFromError(stackParser, ex) {
  // Get the frames first since Opera can lose the stack if we touch anything else first
  const frames = parseStackFrames(stackParser, ex);
  const exception = {
    type: ex && ex.name,
    value: extractMessage(ex)
  };
  if (frames.length) {
    exception.stacktrace = {
      frames
    };
  }
  if (exception.type === undefined && exception.value === '') {
    exception.value = 'Unrecoverable error caught';
  }
  return exception;
}

/**
 * @hidden
 */
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
  const hub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
  const client = hub.getClient();
  const normalizeDepth = client && client.getOptions().normalizeDepth;
  const event = {
    exception: {
      values: [{
        type: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isEvent"])(exception) ? exception.constructor.name : isUnhandledRejection ? 'UnhandledRejection' : 'Error',
        value: `Non-Error ${isUnhandledRejection ? 'promise rejection' : 'exception'} captured with keys: ${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["extractExceptionKeysForMessage"])(exception)}`
      }]
    },
    extra: {
      __serialized__: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalizeToSize"])(exception, normalizeDepth)
    }
  };
  if (syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      // event.exception.values[0] has been set above
      event.exception.values[0].stacktrace = {
        frames
      };
    }
  }
  return event;
}

/**
 * @hidden
 */
function eventFromError(stackParser, ex) {
  return {
    exception: {
      values: [exceptionFromError(stackParser, ex)]
    }
  };
}

/** Parses stack frames from an error */
function parseStackFrames(stackParser, ex) {
  // Access and store the stacktrace property before doing ANYTHING
  // else to it because Opera is not very good at providing it
  // reliably in other circumstances.
  const stacktrace = ex.stacktrace || ex.stack || '';
  const popSize = getPopSize(ex);
  try {
    return stackParser(stacktrace, popSize);
  } catch (e) {
    // no-empty
  }
  return [];
}

// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
const reactMinifiedRegexp = /Minified React error #\d+;/i;
function getPopSize(ex) {
  if (ex) {
    if (typeof ex.framesToPop === 'number') {
      return ex.framesToPop;
    }
    if (reactMinifiedRegexp.test(ex.message)) {
      return 1;
    }
  }
  return 0;
}

/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
function extractMessage(ex) {
  const message = ex && ex.message;
  if (!message) {
    return 'No error message';
  }
  if (message.error && typeof message.error.message === 'string') {
    return message.error.message;
  }
  return message;
}

/**
 * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
 * @hidden
 */
function eventFromException(stackParser, exception, hint, attachStacktrace) {
  const syntheticException = hint && hint.syntheticException || undefined;
  const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(event); // defaults to { type: 'generic', handled: true }
  event.level = 'error';
  if (hint && hint.event_id) {
    event.event_id = hint.event_id;
  }
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(event);
}

/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(stackParser, message) {
  let level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'info';
  let hint = arguments.length > 3 ? arguments[3] : undefined;
  let attachStacktrace = arguments.length > 4 ? arguments[4] : undefined;
  const syntheticException = hint && hint.syntheticException || undefined;
  const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
  event.level = level;
  if (hint && hint.event_id) {
    event.event_id = hint.event_id;
  }
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(event);
}

/**
 * @hidden
 */
function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
  let event;
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isErrorEvent"])(exception) && exception.error) {
    // If it is an ErrorEvent with `error` property, extract it to get actual Error
    const errorEvent = exception;
    return eventFromError(stackParser, errorEvent.error);
  }

  // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
  // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
  // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
  //
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
  // https://webidl.spec.whatwg.org/#es-DOMException-specialness
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isDOMError"])(exception) || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isDOMException"])(exception)) {
    const domException = exception;
    if ('stack' in exception) {
      event = eventFromError(stackParser, exception);
    } else {
      const name = domException.name || (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isDOMError"])(domException) ? 'DOMError' : 'DOMException');
      const message = domException.message ? `${name}: ${domException.message}` : name;
      event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionTypeValue"])(event, message);
    }
    if ('code' in domException) {
      event.tags = _objectSpread(_objectSpread({}, event.tags), {}, {
        'DOMException.code': `${domException.code}`
      });
    }
    return event;
  }
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isError"])(exception)) {
    // we have a real Error object, do nothing
    return eventFromError(stackParser, exception);
  }
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(exception) || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isEvent"])(exception)) {
    // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
    // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
    // group on any key/value change.
    const objectException = exception;
    event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(event, {
      synthetic: true
    });
    return event;
  }

  // If none of previous checks were valid, then it means that it's not:
  // - an instance of DOMError
  // - an instance of DOMException
  // - an instance of Event
  // - an instance of Error
  // - a valid ErrorEvent (one with an error property)
  // - a plain Object
  //
  // So bail out and capture it as a simple message:
  event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionTypeValue"])(event, `${exception}`, undefined);
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(event, {
    synthetic: true
  });
  return event;
}

/**
 * @hidden
 */
function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
  const event = {
    message: input
  };
  if (attachStacktrace && syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      event.exception = {
        values: [{
          value: input,
          stacktrace: {
            frames
          }
        }]
      };
    }
  }
  return event;
}


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/exports.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/exports.js ***!
  \*****************************************************/
/*! exports provided: FunctionToString, Hub, InboundFilters, SDK_VERSION, Scope, addBreadcrumb, addGlobalEventProcessor, captureEvent, captureException, captureMessage, configureScope, createTransport, getCurrentHub, getHubFromCarrier, makeMain, setContext, setExtra, setExtras, setTag, setTags, setUser, startTransaction, withScope, BrowserClient, chromeStackLineParser, defaultStackLineParsers, defaultStackParser, geckoStackLineParser, opera10StackLineParser, opera11StackLineParser, winjsStackLineParser, close, defaultIntegrations, flush, forceLoad, init, lastEventId, onLoad, showReportDialog, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["FunctionToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["InboundFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["createTransport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_0__["withScope"]; });

/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.js */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _client_js__WEBPACK_IMPORTED_MODULE_1__["BrowserClient"]; });

/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transports/index.js */ "./node_modules/@sentry/browser/esm/transports/index.js");
/* harmony import */ var _stack_parsers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stack-parsers.js */ "./node_modules/@sentry/browser/esm/stack-parsers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chromeStackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_3__["chromeStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultStackLineParsers", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_3__["defaultStackLineParsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultStackParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_3__["defaultStackParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geckoStackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_3__["geckoStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opera10StackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_3__["opera10StackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opera11StackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_3__["opera11StackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "winjsStackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_3__["winjsStackLineParser"]; });

/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sdk.js */ "./node_modules/@sentry/browser/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_4__["wrap"]; });

/* harmony import */ var _integrations_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integrations/index.js */ "./node_modules/@sentry/browser/esm/integrations/index.js");






;
;
;

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/helpers.js ***!
  \*****************************************************/
/*! exports provided: ignoreNextOnError, shouldIgnoreOnError, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreNextOnError", function() { return ignoreNextOnError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldIgnoreOnError", function() { return shouldIgnoreOnError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


let ignoreOnError = 0;

/**
 * @hidden
 */
function shouldIgnoreOnError() {
  return ignoreOnError > 0;
}

/**
 * @hidden
 */
function ignoreNextOnError() {
  // onerror should trigger before setTimeout
  ignoreOnError += 1;
  setTimeout(function () {
    ignoreOnError -= 1;
  });
}

/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
 * has a correct `this` context.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(fn) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let before
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  = arguments.length > 2 ? arguments[2] : undefined;
  // for future readers what this does is wrap a function and then create
  // a bi-directional wrapping between them.
  //
  // example: wrapped = wrap(original);
  //  original.__sentry_wrapped__ -> wrapped
  //  wrapped.__sentry_original__ -> original

  if (typeof fn !== 'function') {
    return fn;
  }
  try {
    // if we're dealing with a function that was previously wrapped, return
    // the original wrapper.
    const wrapper = fn.__sentry_wrapped__;
    if (wrapper) {
      return wrapper;
    }

    // We don't wanna wrap it twice
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getOriginalFunction"])(fn)) {
      return fn;
    }
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    // Bail on wrapping and return the function as-is (defers to window.onerror).
    return fn;
  }

  /* eslint-disable prefer-rest-params */
  // It is important that `sentryWrapped` is not an arrow function to preserve the context of `this`
  const sentryWrapped = function () {
    const args = Array.prototype.slice.call(arguments);
    try {
      if (before && typeof before === 'function') {
        before.apply(this, arguments);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
      const wrappedArguments = args.map(function (arg) {
        return wrap(arg, options);
      });

      // Attempt to invoke user-land function
      // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
      //       means the sentry.javascript SDK caught an error invoking your application code. This
      //       is expected behavior and NOT indicative of a bug with sentry.javascript.
      return fn.apply(this, wrappedArguments);
    } catch (ex) {
      ignoreNextOnError();
      Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["withScope"])(function (scope) {
        scope.addEventProcessor(function (event) {
          if (options.mechanism) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionTypeValue"])(event, undefined, undefined);
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(event, options.mechanism);
          }
          event.extra = _objectSpread(_objectSpread({}, event.extra), {}, {
            arguments: args
          });
          return event;
        });
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureException"])(ex);
      });
      throw ex;
    }
  };
  /* eslint-enable prefer-rest-params */

  // Accessing some objects may throw
  // ref: https://github.com/getsentry/sentry-javascript/issues/1168
  try {
    for (const property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property];
      }
    }
  } catch (_oO) {} // eslint-disable-line no-empty

  // Signal that this function has been wrapped/filled already
  // for both debugging and to prevent it to being wrapped/filled twice
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["markFunctionWrapped"])(sentryWrapped, fn);
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addNonEnumerableProperty"])(fn, '__sentry_wrapped__', sentryWrapped);

  // Restore original function name (not all browsers allow that)
  try {
    const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
    if (descriptor.configurable) {
      Object.defineProperty(sentryWrapped, 'name', {
        get() {
          return fn.name;
        }
      });
    }
    // eslint-disable-next-line no-empty
  } catch (_oO) {}
  return sentryWrapped;
}

/**
 * All properties the report dialog supports
 */



/***/ }),

/***/ "./node_modules/@sentry/browser/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/index.js ***!
  \***************************************************/
/*! exports provided: FunctionToString, Hub, InboundFilters, SDK_VERSION, Scope, addBreadcrumb, addGlobalEventProcessor, captureEvent, captureException, captureMessage, configureScope, createTransport, getCurrentHub, getHubFromCarrier, makeMain, setContext, setExtra, setExtras, setTag, setTags, setUser, startTransaction, withScope, BrowserClient, makeFetchTransport, makeXHRTransport, chromeStackLineParser, defaultStackLineParsers, defaultStackParser, geckoStackLineParser, opera10StackLineParser, opera11StackLineParser, winjsStackLineParser, close, defaultIntegrations, flush, forceLoad, init, lastEventId, onLoad, showReportDialog, wrap, GlobalHandlers, TryCatch, Breadcrumbs, LinkedErrors, HttpContext, Dedupe, Integrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return INTEGRATIONS; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exports_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exports.js */ "./node_modules/@sentry/browser/esm/exports.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["FunctionToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["InboundFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["SDK_VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["createTransport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_2__["withScope"]; });

/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _integrations_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations/index.js */ "./node_modules/@sentry/browser/esm/integrations/index.js");
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.js */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _client_js__WEBPACK_IMPORTED_MODULE_5__["BrowserClient"]; });

/* harmony import */ var _transports_fetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transports/fetch.js */ "./node_modules/@sentry/browser/esm/transports/fetch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeFetchTransport", function() { return _transports_fetch_js__WEBPACK_IMPORTED_MODULE_6__["makeFetchTransport"]; });

/* harmony import */ var _transports_xhr_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transports/xhr.js */ "./node_modules/@sentry/browser/esm/transports/xhr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeXHRTransport", function() { return _transports_xhr_js__WEBPACK_IMPORTED_MODULE_7__["makeXHRTransport"]; });

/* harmony import */ var _stack_parsers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stack-parsers.js */ "./node_modules/@sentry/browser/esm/stack-parsers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chromeStackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_8__["chromeStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultStackLineParsers", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_8__["defaultStackLineParsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultStackParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_8__["defaultStackParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geckoStackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_8__["geckoStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opera10StackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_8__["opera10StackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opera11StackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_8__["opera11StackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "winjsStackLineParser", function() { return _stack_parsers_js__WEBPACK_IMPORTED_MODULE_8__["winjsStackLineParser"]; });

/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sdk.js */ "./node_modules/@sentry/browser/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_9__["wrap"]; });

/* harmony import */ var _integrations_globalhandlers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./integrations/globalhandlers.js */ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return _integrations_globalhandlers_js__WEBPACK_IMPORTED_MODULE_10__["GlobalHandlers"]; });

/* harmony import */ var _integrations_trycatch_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./integrations/trycatch.js */ "./node_modules/@sentry/browser/esm/integrations/trycatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return _integrations_trycatch_js__WEBPACK_IMPORTED_MODULE_11__["TryCatch"]; });

/* harmony import */ var _integrations_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./integrations/breadcrumbs.js */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _integrations_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_12__["Breadcrumbs"]; });

/* harmony import */ var _integrations_linkederrors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./integrations/linkederrors.js */ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return _integrations_linkederrors_js__WEBPACK_IMPORTED_MODULE_13__["LinkedErrors"]; });

/* harmony import */ var _integrations_httpcontext_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./integrations/httpcontext.js */ "./node_modules/@sentry/browser/esm/integrations/httpcontext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpContext", function() { return _integrations_httpcontext_js__WEBPACK_IMPORTED_MODULE_14__["HttpContext"]; });

/* harmony import */ var _integrations_dedupe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./integrations/dedupe.js */ "./node_modules/@sentry/browser/esm/integrations/dedupe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dedupe", function() { return _integrations_dedupe_js__WEBPACK_IMPORTED_MODULE_15__["Dedupe"]; });


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
















let windowIntegrations = {};

// This block is needed to add compatibility with the integrations packages when used with a CDN
if (_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"].Sentry && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"].Sentry.Integrations) {
  windowIntegrations = _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"].Sentry.Integrations;
}
const INTEGRATIONS = _objectSpread(_objectSpread(_objectSpread({}, windowIntegrations), _sentry_core__WEBPACK_IMPORTED_MODULE_2__["Integrations"]), _integrations_index_js__WEBPACK_IMPORTED_MODULE_4__);


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js ***!
  \**********************************************************************/
/*! exports provided: BREADCRUMB_INTEGRATION_ID, Breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMB_INTEGRATION_ID", function() { return BREADCRUMB_INTEGRATION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/** JSDoc */

const BREADCRUMB_INTEGRATION_ID = 'Breadcrumbs';

/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */
let Breadcrumbs = /*#__PURE__*/function () {
  /**
   * Options of the breadcrumbs integration.
   */
  // This field is public, because we use it in the browser client to check if the `sentry` option is enabled.

  /**
   * @inheritDoc
   */
  function Breadcrumbs(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Breadcrumbs);
    ;
    Breadcrumbs.prototype.__init.call(this);
    this.options = _objectSpread({
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true
    }, options);
  }

  /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - Console API
   *  - DOM API (click/typing)
   *  - XMLHttpRequest API
   *  - Fetch API
   *  - History API
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Breadcrumbs, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = Breadcrumbs.id;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce() {
      if (this.options.console) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["addInstrumentationHandler"])('console', _consoleBreadcrumb);
      }
      if (this.options.dom) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["addInstrumentationHandler"])('dom', _domBreadcrumb(this.options.dom));
      }
      if (this.options.xhr) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["addInstrumentationHandler"])('xhr', _xhrBreadcrumb);
      }
      if (this.options.fetch) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["addInstrumentationHandler"])('fetch', _fetchBreadcrumb);
      }
      if (this.options.history) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["addInstrumentationHandler"])('history', _historyBreadcrumb);
      }
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = BREADCRUMB_INTEGRATION_ID;
    }
  }]);
  return Breadcrumbs;
}();
Breadcrumbs.__initStatic();

/**
 * A HOC that creaes a function that creates breadcrumbs from DOM API calls.
 * This is a HOC so that we get access to dom options in the closure.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _domBreadcrumb(dom) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function _innerDomBreadcrumb(handlerData) {
    let target;
    let keyAttrs = typeof dom === 'object' ? dom.serializeAttribute : undefined;
    if (typeof keyAttrs === 'string') {
      keyAttrs = [keyAttrs];
    }

    // Accessing event.target can throw (see getsentry/raven-js#838, #768)
    try {
      target = handlerData.event.target ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["htmlTreeAsString"])(handlerData.event.target, keyAttrs) : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["htmlTreeAsString"])(handlerData.event, keyAttrs);
    } catch (e) {
      target = '<unknown>';
    }
    if (target.length === 0) {
      return;
    }
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().addBreadcrumb({
      category: `ui.${handlerData.name}`,
      message: target
    }, {
      event: handlerData.event,
      name: handlerData.name,
      global: handlerData.global
    });
  }
  return _innerDomBreadcrumb;
}

/**
 * Creates breadcrumbs from console API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _consoleBreadcrumb(handlerData) {
  const breadcrumb = {
    category: 'console',
    data: {
      arguments: handlerData.args,
      logger: 'console'
    },
    level: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["severityLevelFromString"])(handlerData.level),
    message: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["safeJoin"])(handlerData.args, ' ')
  };
  if (handlerData.level === 'assert') {
    if (handlerData.args[0] === false) {
      breadcrumb.message = `Assertion failed: ${Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["safeJoin"])(handlerData.args.slice(1), ' ') || 'console.assert'}`;
      breadcrumb.data.arguments = handlerData.args.slice(1);
    } else {
      // Don't capture a breadcrumb for passed assertions
      return;
    }
  }
  Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().addBreadcrumb(breadcrumb, {
    input: handlerData.args,
    level: handlerData.level
  });
}

/**
 * Creates breadcrumbs from XHR API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _xhrBreadcrumb(handlerData) {
  if (handlerData.endTimestamp) {
    // We only capture complete, non-sentry requests
    if (handlerData.xhr.__sentry_own_request__) {
      return;
    }
    const _ref = handlerData.xhr.__sentry_xhr__ || {},
      method = _ref.method,
      url = _ref.url,
      status_code = _ref.status_code,
      body = _ref.body;
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().addBreadcrumb({
      category: 'xhr',
      data: {
        method,
        url,
        status_code
      },
      type: 'http'
    }, {
      xhr: handlerData.xhr,
      input: body
    });
    return;
  }
}

/**
 * Creates breadcrumbs from fetch API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _fetchBreadcrumb(handlerData) {
  // We only capture complete fetch requests
  if (!handlerData.endTimestamp) {
    return;
  }
  if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
    // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
    return;
  }
  if (handlerData.error) {
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().addBreadcrumb({
      category: 'fetch',
      data: handlerData.fetchData,
      level: 'error',
      type: 'http'
    }, {
      data: handlerData.error,
      input: handlerData.args
    });
  } else {
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().addBreadcrumb({
      category: 'fetch',
      data: _objectSpread(_objectSpread({}, handlerData.fetchData), {}, {
        status_code: handlerData.response.status
      }),
      type: 'http'
    }, {
      input: handlerData.args,
      response: handlerData.response
    });
  }
}

/**
 * Creates breadcrumbs from history API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _historyBreadcrumb(handlerData) {
  let from = handlerData.from;
  let to = handlerData.to;
  const parsedLoc = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["parseUrl"])(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].location.href);
  let parsedFrom = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["parseUrl"])(from);
  const parsedTo = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["parseUrl"])(to);

  // Initial pushState doesn't provide `from` information
  if (!parsedFrom.path) {
    parsedFrom = parsedLoc;
  }

  // Use only the path component of the URL if the URL matches the current
  // document (almost all the time when using pushState)
  if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
    to = parsedTo.relative;
  }
  if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
    from = parsedFrom.relative;
  }
  Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().addBreadcrumb({
    category: 'navigation',
    data: {
      from,
      to
    }
  });
}


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/dedupe.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/dedupe.js ***!
  \*****************************************************************/
/*! exports provided: Dedupe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dedupe", function() { return Dedupe; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");




/** Deduplication filter */
let Dedupe = /*#__PURE__*/function () {
  function Dedupe() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Dedupe);
    Dedupe.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Dedupe, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = Dedupe.id;
    }

    /**
     * @inheritDoc
     */

    /**
     * @inheritDoc
     */
  }, {
    key: "setupOnce",
    value: function setupOnce(addGlobalEventProcessor, getCurrentHub) {
      const eventProcessor = function (currentEvent) {
        const self = getCurrentHub().getIntegration(Dedupe);
        if (self) {
          // Juuust in case something goes wrong
          try {
            if (_shouldDropEvent(currentEvent, self._previousEvent)) {
              (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Event dropped due to being a duplicate of previously captured event.');
              return null;
            }
          } catch (_oO) {
            return self._previousEvent = currentEvent;
          }
          return self._previousEvent = currentEvent;
        }
        return currentEvent;
      };
      eventProcessor.id = this.name;
      addGlobalEventProcessor(eventProcessor);
    }
  }], [{
    key: "__initStatic",
    value: function __initStatic() {
      this.id = 'Dedupe';
    }
  }]);
  return Dedupe;
}();
Dedupe.__initStatic();

/** JSDoc */
function _shouldDropEvent(currentEvent, previousEvent) {
  if (!previousEvent) {
    return false;
  }
  if (_isSameMessageEvent(currentEvent, previousEvent)) {
    return true;
  }
  if (_isSameExceptionEvent(currentEvent, previousEvent)) {
    return true;
  }
  return false;
}

/** JSDoc */
function _isSameMessageEvent(currentEvent, previousEvent) {
  const currentMessage = currentEvent.message;
  const previousMessage = previousEvent.message;

  // If neither event has a message property, they were both exceptions, so bail out
  if (!currentMessage && !previousMessage) {
    return false;
  }

  // If only one event has a stacktrace, but not the other one, they are not the same
  if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
    return false;
  }
  if (currentMessage !== previousMessage) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}

/** JSDoc */
function _isSameExceptionEvent(currentEvent, previousEvent) {
  const previousException = _getExceptionFromEvent(previousEvent);
  const currentException = _getExceptionFromEvent(currentEvent);
  if (!previousException || !currentException) {
    return false;
  }
  if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}

/** JSDoc */
function _isSameStacktrace(currentEvent, previousEvent) {
  let currentFrames = _getFramesFromEvent(currentEvent);
  let previousFrames = _getFramesFromEvent(previousEvent);

  // If neither event has a stacktrace, they are assumed to be the same
  if (!currentFrames && !previousFrames) {
    return true;
  }

  // If only one event has a stacktrace, but not the other one, they are not the same
  if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
    return false;
  }
  currentFrames = currentFrames;
  previousFrames = previousFrames;

  // If number of frames differ, they are not the same
  if (previousFrames.length !== currentFrames.length) {
    return false;
  }

  // Otherwise, compare the two
  for (let i = 0; i < previousFrames.length; i++) {
    const frameA = previousFrames[i];
    const frameB = currentFrames[i];
    if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
      return false;
    }
  }
  return true;
}

/** JSDoc */
function _isSameFingerprint(currentEvent, previousEvent) {
  let currentFingerprint = currentEvent.fingerprint;
  let previousFingerprint = previousEvent.fingerprint;

  // If neither event has a fingerprint, they are assumed to be the same
  if (!currentFingerprint && !previousFingerprint) {
    return true;
  }

  // If only one event has a fingerprint, but not the other one, they are not the same
  if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
    return false;
  }
  currentFingerprint = currentFingerprint;
  previousFingerprint = previousFingerprint;

  // Otherwise, compare the two
  try {
    return !!(currentFingerprint.join('') === previousFingerprint.join(''));
  } catch (_oO) {
    return false;
  }
}

/** JSDoc */
function _getExceptionFromEvent(event) {
  return event.exception && event.exception.values && event.exception.values[0];
}

/** JSDoc */
function _getFramesFromEvent(event) {
  const exception = event.exception;
  if (exception) {
    try {
      // @ts-ignore Object could be undefined
      return exception.values[0].stacktrace.frames;
    } catch (_oO) {
      return undefined;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/globalhandlers.js ***!
  \*************************************************************************/
/*! exports provided: GlobalHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return GlobalHandlers; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../eventbuilder.js */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers.js */ "./node_modules/@sentry/browser/esm/helpers.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/** Global handlers */
let GlobalHandlers = /*#__PURE__*/function () {
  /** JSDoc */
  function GlobalHandlers(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, GlobalHandlers);
    ;
    GlobalHandlers.prototype.__init.call(this);
    GlobalHandlers.prototype.__init2.call(this);
    this._options = _objectSpread({
      onerror: true,
      onunhandledrejection: true
    }, options);
  }
  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(GlobalHandlers, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = GlobalHandlers.id;
    }

    /** JSDoc */

    /**
     * Stores references functions to installing handlers. Will set to undefined
     * after they have been run so that they are not used twice.
     */
  }, {
    key: "__init2",
    value: function __init2() {
      this._installFunc = {
        onerror: _installGlobalOnErrorHandler,
        onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
      };
    }
  }, {
    key: "setupOnce",
    value: function setupOnce() {
      Error.stackTraceLimit = 50;
      const options = this._options;

      // We can disable guard-for-in as we construct the options object above + do checks against
      // `this._installFunc` for the property.
      // eslint-disable-next-line guard-for-in
      for (const key in options) {
        const installFunc = this._installFunc[key];
        if (installFunc && options[key]) {
          globalHandlerLog(key);
          installFunc();
          this._installFunc[key] = undefined;
        }
      }
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = 'GlobalHandlers';
    }
  }]);
  return GlobalHandlers;
}();
GlobalHandlers.__initStatic();

/** JSDoc */
function _installGlobalOnErrorHandler() {
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["addInstrumentationHandler"])('error',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (data) {
    const _getHubAndOptions = getHubAndOptions(),
      _getHubAndOptions2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_getHubAndOptions, 3),
      hub = _getHubAndOptions2[0],
      stackParser = _getHubAndOptions2[1],
      attachStacktrace = _getHubAndOptions2[2];
    if (!hub.getIntegration(GlobalHandlers)) {
      return;
    }
    const msg = data.msg,
      url = data.url,
      line = data.line,
      column = data.column,
      error = data.error;
    if (Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["shouldIgnoreOnError"])() || error && error.__sentry_own_request__) {
      return;
    }
    const event = error === undefined && Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isString"])(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame(Object(_eventbuilder_js__WEBPACK_IMPORTED_MODULE_6__["eventFromUnknownInput"])(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    event.level = 'error';
    addMechanismAndCapture(hub, error, event, 'onerror');
  });
}

/** JSDoc */
function _installGlobalOnUnhandledRejectionHandler() {
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["addInstrumentationHandler"])('unhandledrejection',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (e) {
    const _getHubAndOptions3 = getHubAndOptions(),
      _getHubAndOptions4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_getHubAndOptions3, 3),
      hub = _getHubAndOptions4[0],
      stackParser = _getHubAndOptions4[1],
      attachStacktrace = _getHubAndOptions4[2];
    if (!hub.getIntegration(GlobalHandlers)) {
      return;
    }
    let error = e;

    // dig the object of the rejection out of known event types
    try {
      // PromiseRejectionEvents store the object of the rejection under 'reason'
      // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
      if ('reason' in e) {
        error = e.reason;
      }
      // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
      // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
      // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
      // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
      // https://github.com/getsentry/sentry-javascript/issues/2380
      else if ('detail' in e && 'reason' in e.detail) {
        error = e.detail.reason;
      }
    } catch (_oO) {
      // no-empty
    }
    if (Object(_helpers_js__WEBPACK_IMPORTED_MODULE_7__["shouldIgnoreOnError"])() || error && error.__sentry_own_request__) {
      return true;
    }
    const event = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"])(error) ? _eventFromRejectionWithPrimitive(error) : Object(_eventbuilder_js__WEBPACK_IMPORTED_MODULE_6__["eventFromUnknownInput"])(stackParser, error, undefined, attachStacktrace, true);
    event.level = 'error';
    addMechanismAndCapture(hub, error, event, 'onunhandledrejection');
    return;
  });
}

/**
 * Create an event from a promise rejection where the `reason` is a primitive.
 *
 * @param reason: The `reason` property of the promise rejection
 * @returns An Event object with an appropriate `exception` value
 */
function _eventFromRejectionWithPrimitive(reason) {
  return {
    exception: {
      values: [{
        type: 'UnhandledRejection',
        // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
        value: `Non-Error promise rejection captured with value: ${String(reason)}`
      }]
    }
  };
}

/**
 * This function creates a stack from an old, error-less onerror handler.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _eventFromIncompleteOnError(msg, url, line, column) {
  const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;

  // If 'message' is ErrorEvent, get real message from inside
  let message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isErrorEvent"])(msg) ? msg.message : msg;
  let name = 'Error';
  const groups = message.match(ERROR_TYPES_RE);
  if (groups) {
    name = groups[1];
    message = groups[2];
  }
  const event = {
    exception: {
      values: [{
        type: name,
        value: message
      }]
    }
  };
  return _enhanceEventWithInitialFrame(event, url, line, column);
}

/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _enhanceEventWithInitialFrame(event, url, line, column) {
  // event.exception
  const e = event.exception = event.exception || {};
  // event.exception.values
  const ev = e.values = e.values || [];
  // event.exception.values[0]
  const ev0 = ev[0] = ev[0] || {};
  // event.exception.values[0].stacktrace
  const ev0s = ev0.stacktrace = ev0.stacktrace || {};
  // event.exception.values[0].stacktrace.frames
  const ev0sf = ev0s.frames = ev0s.frames || [];
  const colno = isNaN(parseInt(column, 10)) ? undefined : column;
  const lineno = isNaN(parseInt(line, 10)) ? undefined : line;
  const filename = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isString"])(url) && url.length > 0 ? url : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["getLocationHref"])();

  // event.exception.values[0].stacktrace.frames
  if (ev0sf.length === 0) {
    ev0sf.push({
      colno,
      filename,
      function: '?',
      in_app: true,
      lineno
    });
  }
  return event;
}
function globalHandlerLog(type) {
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["logger"].log(`Global Handler attached: ${type}`);
}
function addMechanismAndCapture(hub, error, event, type) {
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["addExceptionMechanism"])(event, {
    handled: false,
    type
  });
  hub.captureEvent(event, {
    originalException: error
  });
}
function getHubAndOptions() {
  const hub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_4__["getCurrentHub"])();
  const client = hub.getClient();
  const options = client && client.getOptions() || {
    stackParser: function () {
      return [];
    },
    attachStacktrace: false
  };
  return [hub, options.stackParser, options.attachStacktrace];
}


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/httpcontext.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/httpcontext.js ***!
  \**********************************************************************/
/*! exports provided: HttpContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpContext", function() { return HttpContext; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/** HttpContext integration collects information about HTTP request headers */
let HttpContext = /*#__PURE__*/function () {
  function HttpContext() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HttpContext);
    HttpContext.prototype.__init.call(this);
  }
  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HttpContext, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = HttpContext.id;
    }

    /**
     * @inheritDoc
     */
  }, {
    key: "setupOnce",
    value: function setupOnce() {
      Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["addGlobalEventProcessor"])(function (event) {
        if (Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().getIntegration(HttpContext)) {
          // if none of the information we want exists, don't bother
          if (!_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].navigator && !_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].location && !_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].document) {
            return event;
          }

          // grab as much info as exists and add it to the event
          const url = event.request && event.request.url || _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].location && _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].location.href;
          const _ref = _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].document || {},
            referrer = _ref.referrer;
          const _ref2 = _sentry_utils__WEBPACK_IMPORTED_MODULE_4__["WINDOW"].navigator || {},
            userAgent = _ref2.userAgent;
          const headers = _objectSpread(_objectSpread(_objectSpread({}, event.request && event.request.headers), referrer && {
            Referer: referrer
          }), userAgent && {
            'User-Agent': userAgent
          });
          const request = _objectSpread(_objectSpread({}, url && {
            url
          }), {}, {
            headers
          });
          return _objectSpread(_objectSpread({}, event), {}, {
            request
          });
        }
        return event;
      });
    }
  }], [{
    key: "__initStatic",
    value: function __initStatic() {
      this.id = 'HttpContext';
    }
  }]);
  return HttpContext;
}();
HttpContext.__initStatic();


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/index.js ***!
  \****************************************************************/
/*! exports provided: GlobalHandlers, TryCatch, Breadcrumbs, LinkedErrors, HttpContext, Dedupe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalhandlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalhandlers.js */ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return _globalhandlers_js__WEBPACK_IMPORTED_MODULE_0__["GlobalHandlers"]; });

/* harmony import */ var _trycatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trycatch.js */ "./node_modules/@sentry/browser/esm/integrations/trycatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return _trycatch_js__WEBPACK_IMPORTED_MODULE_1__["TryCatch"]; });

/* harmony import */ var _breadcrumbs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs.js */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _breadcrumbs_js__WEBPACK_IMPORTED_MODULE_2__["Breadcrumbs"]; });

/* harmony import */ var _linkederrors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkederrors.js */ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return _linkederrors_js__WEBPACK_IMPORTED_MODULE_3__["LinkedErrors"]; });

/* harmony import */ var _httpcontext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpcontext.js */ "./node_modules/@sentry/browser/esm/integrations/httpcontext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpContext", function() { return _httpcontext_js__WEBPACK_IMPORTED_MODULE_4__["HttpContext"]; });

/* harmony import */ var _dedupe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dedupe.js */ "./node_modules/@sentry/browser/esm/integrations/dedupe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dedupe", function() { return _dedupe_js__WEBPACK_IMPORTED_MODULE_5__["Dedupe"]; });








/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/linkederrors.js ***!
  \***********************************************************************/
/*! exports provided: LinkedErrors, _handler, _walkErrorTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return LinkedErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_handler", function() { return _handler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_walkErrorTree", function() { return _walkErrorTree; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../eventbuilder.js */ "./node_modules/@sentry/browser/esm/eventbuilder.js");






const DEFAULT_KEY = 'cause';
const DEFAULT_LIMIT = 5;

/** Adds SDK info to an event. */
let LinkedErrors = /*#__PURE__*/function () {
  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */
  function LinkedErrors() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LinkedErrors);
    ;
    LinkedErrors.prototype.__init.call(this);
    this._key = options.key || DEFAULT_KEY;
    this._limit = options.limit || DEFAULT_LIMIT;
  }

  /**
   * @inheritDoc
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LinkedErrors, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = LinkedErrors.id;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce() {
      const client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().getClient();
      if (!client) {
        return;
      }
      Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["addGlobalEventProcessor"])(function (event, hint) {
        const self = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"])().getIntegration(LinkedErrors);
        return self ? _handler(client.getOptions().stackParser, self._key, self._limit, event, hint) : event;
      });
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = 'LinkedErrors';
    }
  }]);
  return LinkedErrors;
}();
LinkedErrors.__initStatic();

/**
 * @inheritDoc
 */
function _handler(parser, key, limit, event, hint) {
  if (!event.exception || !event.exception.values || !hint || !Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["isInstanceOf"])(hint.originalException, Error)) {
    return event;
  }
  const linkedErrors = _walkErrorTree(parser, limit, hint.originalException, key);
  event.exception.values = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(linkedErrors), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(event.exception.values));
  return event;
}

/**
 * JSDOC
 */
function _walkErrorTree(parser, limit, error, key) {
  let stack = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  if (!Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_4__["isInstanceOf"])(error[key], Error) || stack.length + 1 >= limit) {
    return stack;
  }
  const exception = Object(_eventbuilder_js__WEBPACK_IMPORTED_MODULE_5__["exceptionFromError"])(parser, error[key]);
  return _walkErrorTree(parser, limit, error[key], key, [exception].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(stack)));
}


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/trycatch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/trycatch.js ***!
  \*******************************************************************/
/*! exports provided: TryCatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return TryCatch; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers.js */ "./node_modules/@sentry/browser/esm/helpers.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const DEFAULT_EVENT_TARGET = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'];

/** Wrap timer functions and event targets to catch errors and provide better meta data */
let TryCatch = /*#__PURE__*/function () {
  /** JSDoc */

  /**
   * @inheritDoc
   */
  function TryCatch(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TryCatch);
    ;
    TryCatch.prototype.__init.call(this);
    this._options = _objectSpread({
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true
    }, options);
  }

  /**
   * Wrap timer functions and event targets to catch errors
   * and provide better metadata.
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TryCatch, [{
    key: "__init",
    value:
    /**
     * @inheritDoc
     */
    function __init() {
      this.name = TryCatch.id;
    }
  }, {
    key: "setupOnce",
    value: function setupOnce() {
      if (this._options.setTimeout) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 'setTimeout', _wrapTimeFunction);
      }
      if (this._options.setInterval) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 'setInterval', _wrapTimeFunction);
      }
      if (this._options.requestAnimationFrame) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 'requestAnimationFrame', _wrapRAF);
      }
      if (this._options.XMLHttpRequest && 'XMLHttpRequest' in _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]) {
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(XMLHttpRequest.prototype, 'send', _wrapXHR);
      }
      const eventTargetOption = this._options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach(_wrapEventTarget);
      }
    }
  }], [{
    key: "__initStatic",
    value:
    /**
     * @inheritDoc
     */
    function __initStatic() {
      this.id = 'TryCatch';
    }
  }]);
  return TryCatch;
}();
TryCatch.__initStatic();

/** JSDoc */
function _wrapTimeFunction(original) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const originalCallback = args[0];
    args[0] = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["wrap"])(originalCallback, {
      mechanism: {
        data: {
          function: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(original)
        },
        handled: true,
        type: 'instrument'
      }
    });
    return original.apply(this, args);
  };
}

/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _wrapRAF(original) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (callback) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return original.apply(this, [Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["wrap"])(callback, {
      mechanism: {
        data: {
          function: 'requestAnimationFrame',
          handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(original)
        },
        handled: true,
        type: 'instrument'
      }
    })]);
  };
}

/** JSDoc */
function _wrapXHR(originalSend) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const xhr = this;
    const xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
    xmlHttpRequestProps.forEach(function (prop) {
      if (prop in xhr && typeof xhr[prop] === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(xhr, prop, function (original) {
          const wrapOptions = {
            mechanism: {
              data: {
                function: prop,
                handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(original)
              },
              handled: true,
              type: 'instrument'
            }
          };

          // If Instrument integration has been called before TryCatch, get the name of original function
          const originalFunction = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getOriginalFunction"])(original);
          if (originalFunction) {
            wrapOptions.mechanism.data.handler = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(originalFunction);
          }

          // Otherwise wrap directly
          return Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["wrap"])(original, wrapOptions);
        });
      }
    });
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return originalSend.apply(this, args);
  };
}

/** JSDoc */
function _wrapEventTarget(target) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globalObject = _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"];
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const proto = globalObject[target] && globalObject[target].prototype;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
  if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
    return;
  }
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(proto, 'addEventListener', function (original) {
    return function (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    eventName, fn, options) {
      try {
        if (typeof fn.handleEvent === 'function') {
          // ESlint disable explanation:
          //  First, it is generally safe to call `wrap` with an unbound function. Furthermore, using `.bind()` would
          //  introduce a bug here, because bind returns a new function that doesn't have our
          //  flags(like __sentry_original__) attached. `wrap` checks for those flags to avoid unnecessary wrapping.
          //  Without those flags, every call to addEventListener wraps the function again, causing a memory leak.
          // eslint-disable-next-line @typescript-eslint/unbound-method
          fn.handleEvent = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["wrap"])(fn.handleEvent, {
            mechanism: {
              data: {
                function: 'handleEvent',
                handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(fn),
                target
              },
              handled: true,
              type: 'instrument'
            }
          });
        }
      } catch (err) {
        // can sometimes get 'Permission denied to access property "handle Event'
      }
      return original.apply(this, [eventName,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["wrap"])(fn, {
        mechanism: {
          data: {
            function: 'addEventListener',
            handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getFunctionName"])(fn),
            target
          },
          handled: true,
          type: 'instrument'
        }
      }), options]);
    };
  });
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["fill"])(proto, 'removeEventListener', function (originalRemoveEventListener
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) {
    return function (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    eventName, fn, options) {
      /**
       * There are 2 possible scenarios here:
       *
       * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
       * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
       * as a pass-through, and call original `removeEventListener` with it.
       *
       * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
       * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
       * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
       * in order for us to make a distinction between wrapped/non-wrapped functions possible.
       * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
       *
       * When someone adds a handler prior to initialization, and then do it again, but after,
       * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
       * to get rid of the initial handler and it'd stick there forever.
       */
      const wrappedEventHandler = fn;
      try {
        const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
        if (originalEventHandler) {
          originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
        }
      } catch (e) {
        // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
      }
      return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
    };
  });
}


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/sdk.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/sdk.js ***!
  \*************************************************/
/*! exports provided: close, defaultIntegrations, flush, forceLoad, init, lastEventId, onLoad, showReportDialog, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return defaultIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return forceLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return lastEventId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return showReportDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.js */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony import */ var _integrations_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integrations/index.js */ "./node_modules/@sentry/browser/esm/integrations/index.js");
/* harmony import */ var _stack_parsers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stack-parsers.js */ "./node_modules/@sentry/browser/esm/stack-parsers.js");
/* harmony import */ var _transports_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transports/index.js */ "./node_modules/@sentry/browser/esm/transports/index.js");
/* harmony import */ var _integrations_trycatch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./integrations/trycatch.js */ "./node_modules/@sentry/browser/esm/integrations/trycatch.js");
/* harmony import */ var _integrations_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./integrations/breadcrumbs.js */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");
/* harmony import */ var _integrations_globalhandlers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./integrations/globalhandlers.js */ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js");
/* harmony import */ var _integrations_linkederrors_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./integrations/linkederrors.js */ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js");
/* harmony import */ var _integrations_dedupe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./integrations/dedupe.js */ "./node_modules/@sentry/browser/esm/integrations/dedupe.js");
/* harmony import */ var _integrations_httpcontext_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./integrations/httpcontext.js */ "./node_modules/@sentry/browser/esm/integrations/httpcontext.js");
/* harmony import */ var _transports_fetch_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./transports/fetch.js */ "./node_modules/@sentry/browser/esm/transports/fetch.js");
/* harmony import */ var _transports_xhr_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transports/xhr.js */ "./node_modules/@sentry/browser/esm/transports/xhr.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















const defaultIntegrations = [new _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Integrations"].InboundFilters(), new _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Integrations"].FunctionToString(), new _integrations_trycatch_js__WEBPACK_IMPORTED_MODULE_8__["TryCatch"](), new _integrations_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_9__["Breadcrumbs"](), new _integrations_globalhandlers_js__WEBPACK_IMPORTED_MODULE_10__["GlobalHandlers"](), new _integrations_linkederrors_js__WEBPACK_IMPORTED_MODULE_11__["LinkedErrors"](), new _integrations_dedupe_js__WEBPACK_IMPORTED_MODULE_12__["Dedupe"](), new _integrations_httpcontext_js__WEBPACK_IMPORTED_MODULE_13__["HttpContext"]()];

/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (options.defaultIntegrations === undefined) {
    options.defaultIntegrations = defaultIntegrations;
  }
  if (options.release === undefined) {
    // This supports the variable that sentry-webpack-plugin injects
    if (_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].SENTRY_RELEASE && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].SENTRY_RELEASE.id) {
      options.release = _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].SENTRY_RELEASE.id;
    }
  }
  if (options.autoSessionTracking === undefined) {
    options.autoSessionTracking = true;
  }
  if (options.sendClientReports === undefined) {
    options.sendClientReports = true;
  }
  const clientOptions = _objectSpread(_objectSpread({}, options), {}, {
    stackParser: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["stackParserFromStackParserOptions"])(options.stackParser || _stack_parsers_js__WEBPACK_IMPORTED_MODULE_6__["defaultStackParser"]),
    integrations: Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getIntegrationsToSetup"])(options),
    transport: options.transport || (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["supportsFetch"])() ? _transports_fetch_js__WEBPACK_IMPORTED_MODULE_14__["makeFetchTransport"] : _transports_xhr_js__WEBPACK_IMPORTED_MODULE_15__["makeXHRTransport"])
  });
  Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["initAndBind"])(_client_js__WEBPACK_IMPORTED_MODULE_3__["BrowserClient"], clientOptions);
  if (options.autoSessionTracking) {
    startSessionTracking();
  }
}

/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let hub = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
  // doesn't work without a document (React Native)
  if (!_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].document) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Global document not defined in showReportDialog call');
    return;
  }
  const _hub$getStackTop = hub.getStackTop(),
    client = _hub$getStackTop.client,
    scope = _hub$getStackTop.scope;
  const dsn = options.dsn || client && client.getDsn();
  if (!dsn) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('DSN not configured for showReportDialog call');
    return;
  }
  if (scope) {
    options.user = _objectSpread(_objectSpread({}, scope.getUser()), options.user);
  }
  if (!options.eventId) {
    options.eventId = hub.lastEventId();
  }
  const script = _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].document.createElement('script');
  script.async = true;
  script.src = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getReportDialogEndpoint"])(dsn, options);
  if (options.onLoad) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    script.onload = options.onLoad;
  }
  const injectionPoint = _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].document.head || _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].document.body;
  if (injectionPoint) {
    injectionPoint.appendChild(script);
  } else {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Not injecting report dialog. No injection point found in HTML');
  }
}

/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
  return Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().lastEventId();
}

/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function forceLoad() {
  // Noop
}

/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function onLoad(callback) {
  callback();
}

/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
function flush(timeout) {
  const client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getClient();
  if (client) {
    return client.flush(timeout);
  }
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Cannot flush events. No client defined.');
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(false);
}

/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
function close(timeout) {
  const client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getClient();
  if (client) {
    return client.close(timeout);
  }
  (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Cannot flush events and disable SDK. No client defined.');
  return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(false);
}

/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 *
 * @returns The result of wrapped function call.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrap(fn) {
  return Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["wrap"])(fn)();
}
function startSessionOnHub(hub) {
  hub.startSession({
    ignoreDuration: true
  });
  hub.captureSession();
}

/**
 * Enable automatic Session Tracking for the initial page load.
 */
function startSessionTracking() {
  if (typeof _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].document === 'undefined') {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
    return;
  }
  const hub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();

  // The only way for this to be false is for there to be a version mismatch between @sentry/browser (>= 6.0.0) and
  // @sentry/hub (< 5.27.0). In the simple case, there won't ever be such a mismatch, because the two packages are
  // pinned at the same version in package.json, but there are edge cases where it's possible. See
  // https://github.com/getsentry/sentry-javascript/issues/3207 and
  // https://github.com/getsentry/sentry-javascript/issues/3234 and
  // https://github.com/getsentry/sentry-javascript/issues/3278.
  if (!hub.captureSession) {
    return;
  }

  // The session duration for browser sessions does not track a meaningful
  // concept that can be used as a metric.
  // Automatically captured sessions are akin to page views, and thus we
  // discard their duration.
  startSessionOnHub(hub);

  // We want to create a session for every navigation as well
  Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addInstrumentationHandler"])('history', function (_ref) {
    let from = _ref.from,
      to = _ref.to;
    // Don't create an additional session for the initial route or if the location did not change
    if (!(from === undefined || from === to)) {
      startSessionOnHub(Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])());
    }
  });
}


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/stack-parsers.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/stack-parsers.js ***!
  \***********************************************************/
/*! exports provided: chromeStackLineParser, defaultStackLineParsers, defaultStackParser, geckoStackLineParser, opera10StackLineParser, opera11StackLineParser, winjsStackLineParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chromeStackLineParser", function() { return chromeStackLineParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStackLineParsers", function() { return defaultStackLineParsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStackParser", function() { return defaultStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geckoStackLineParser", function() { return geckoStackLineParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opera10StackLineParser", function() { return opera10StackLineParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opera11StackLineParser", function() { return opera11StackLineParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "winjsStackLineParser", function() { return winjsStackLineParser; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



// global reference to slice
const UNKNOWN_FUNCTION = '?';
const OPERA10_PRIORITY = 10;
const OPERA11_PRIORITY = 20;
const CHROME_PRIORITY = 30;
const WINJS_PRIORITY = 40;
const GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
  const frame = {
    filename,
    function: func,
    // All browser frames are considered in_app
    in_app: true
  };
  if (lineno !== undefined) {
    frame.lineno = lineno;
  }
  if (colno !== undefined) {
    frame.colno = colno;
  }
  return frame;
}

// Chromium based browsers: Chrome, Brave, new Opera, new Edge
const chromeRegex = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const chrome = function (line) {
  const parts = chromeRegex.exec(line);
  if (parts) {
    const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

    if (isEval) {
      const subMatch = chromeEvalRegex.exec(parts[2]);
      if (subMatch) {
        // throw out eval line/column and use top-most line/column number
        parts[2] = subMatch[1]; // url
        parts[3] = subMatch[2]; // line
        parts[4] = subMatch[3]; // column
      }
    }

    // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
    // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
    const _extractSafariExtensi = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]),
      _extractSafariExtensi2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_extractSafariExtensi, 2),
      func = _extractSafariExtensi2[0],
      filename = _extractSafariExtensi2[1];
    return createFrame(filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
  }
  return;
};
const chromeStackLineParser = [CHROME_PRIORITY, chrome];

// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
const geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const gecko = function (line) {
  const parts = geckoREgex.exec(line);
  if (parts) {
    const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
    if (isEval) {
      const subMatch = geckoEvalRegex.exec(parts[3]);
      if (subMatch) {
        // throw out eval line/column and use top-most line number
        parts[1] = parts[1] || 'eval';
        parts[3] = subMatch[1];
        parts[4] = subMatch[2];
        parts[5] = ''; // no column when eval
      }
    }

    let filename = parts[3];
    let func = parts[1] || UNKNOWN_FUNCTION;
    var _extractSafariExtensi3 = extractSafariExtensionDetails(func, filename);
    var _extractSafariExtensi4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_extractSafariExtensi3, 2);
    func = _extractSafariExtensi4[0];
    filename = _extractSafariExtensi4[1];
    return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
  }
  return;
};
const geckoStackLineParser = [GECKO_PRIORITY, gecko];
const winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const winjs = function (line) {
  const parts = winjsRegex.exec(line);
  return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : undefined) : undefined;
};
const winjsStackLineParser = [WINJS_PRIORITY, winjs];
const opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
const opera10 = function (line) {
  const parts = opera10Regex.exec(line);
  return parts ? createFrame(parts[2], parts[3] || UNKNOWN_FUNCTION, +parts[1]) : undefined;
};
const opera10StackLineParser = [OPERA10_PRIORITY, opera10];
const opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
const opera11 = function (line) {
  const parts = opera11Regex.exec(line);
  return parts ? createFrame(parts[5], parts[3] || parts[4] || UNKNOWN_FUNCTION, +parts[1], +parts[2]) : undefined;
};
const opera11StackLineParser = [OPERA11_PRIORITY, opera11];
const defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser];
const defaultStackParser = _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["createStackParser"].apply(void 0, defaultStackLineParsers);

/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */
const extractSafariExtensionDetails = function (func, filename) {
  const isSafariExtension = func.indexOf('safari-extension') !== -1;
  const isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
  return isSafariExtension || isSafariWebExtension ? [func.indexOf('@') !== -1 ? func.split('@')[0] : UNKNOWN_FUNCTION, isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`] : [func, filename];
};


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/fetch.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/fetch.js ***!
  \**************************************************************/
/*! exports provided: makeFetchTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFetchTransport", function() { return makeFetchTransport; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@sentry/browser/esm/transports/utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * Creates a Transport that uses the Fetch API to send events to Sentry.
 */
function makeFetchTransport(options) {
  let nativeFetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getNativeFetchImplementation"])();
  function makeRequest(request) {
    const requestOptions = _objectSpread({
      body: request.body,
      method: 'POST',
      referrerPolicy: 'origin',
      headers: options.headers,
      // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
      // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
      // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
      // frequently sending events right before the user is switching pages (eg. whenfinishing navigation transactions).
      // Gotchas:
      // - `keepalive` isn't supported by Firefox
      // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch), a request with `keepalive: true`
      //   and a content length of > 64 kibibytes returns a network error. We will therefore only activate the flag when
      //   we're below that limit.
      keepalive: request.body.length <= 65536
    }, options.fetchOptions);
    return nativeFetch(options.url, requestOptions).then(function (response) {
      return {
        statusCode: response.status,
        headers: {
          'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
          'retry-after': response.headers.get('Retry-After')
        }
      };
    });
  }
  return Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["createTransport"])(options, makeRequest);
}


/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/index.js ***!
  \**************************************************************/
/*! exports provided: makeFetchTransport, makeXHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ "./node_modules/@sentry/browser/esm/transports/fetch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeFetchTransport", function() { return _fetch_js__WEBPACK_IMPORTED_MODULE_0__["makeFetchTransport"]; });

/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/@sentry/browser/esm/transports/xhr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeXHRTransport", function() { return _xhr_js__WEBPACK_IMPORTED_MODULE_1__["makeXHRTransport"]; });




/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/utils.js ***!
  \**************************************************************/
/*! exports provided: getNativeFetchImplementation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeFetchImplementation", function() { return getNativeFetchImplementation; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

let cachedFetchImpl;

/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * const f = window.fetch;
 * window.fetch = function () {
 *   const p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */
function getNativeFetchImplementation() {
  if (cachedFetchImpl) {
    return cachedFetchImpl;
  }

  /* eslint-disable @typescript-eslint/unbound-method */

  // Fast path to avoid DOM I/O
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isNativeFetch"])(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].fetch)) {
    return cachedFetchImpl = _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].fetch.bind(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"]);
  }
  const document = _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].document;
  let fetchImpl = _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].fetch;
  // eslint-disable-next-line deprecation/deprecation
  if (document && typeof document.createElement === 'function') {
    try {
      const sandbox = document.createElement('iframe');
      sandbox.hidden = true;
      document.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow.fetch) {
        fetchImpl = contentWindow.fetch;
      }
      document.head.removeChild(sandbox);
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
    }
  }
  return cachedFetchImpl = fetchImpl.bind(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"]);
  /* eslint-enable @typescript-eslint/unbound-method */
}



/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/xhr.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/xhr.js ***!
  \************************************************************/
/*! exports provided: makeXHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeXHRTransport", function() { return makeXHRTransport; });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



/**
 * The DONE ready state for XmlHttpRequest
 *
 * Defining it here as a constant b/c XMLHttpRequest.DONE is not always defined
 * (e.g. during testing, it is `undefined`)
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState}
 */
const XHR_READYSTATE_DONE = 4;

/**
 * Creates a Transport that uses the XMLHttpRequest API to send events to Sentry.
 */
function makeXHRTransport(options) {
  function makeRequest(request) {
    return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.onerror = reject;
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XHR_READYSTATE_DONE) {
          resolve({
            statusCode: xhr.status,
            headers: {
              'x-sentry-rate-limits': xhr.getResponseHeader('X-Sentry-Rate-Limits'),
              'retry-after': xhr.getResponseHeader('Retry-After')
            }
          });
        }
      };
      xhr.open('POST', options.url);
      for (const header in options.headers) {
        if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
          xhr.setRequestHeader(header, options.headers[header]);
        }
      }
      xhr.send(request.body);
    });
  }
  return Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["createTransport"])(options, makeRequest);
}


/***/ }),

/***/ "./node_modules/@sentry/react/esm/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/react/esm/constants.js ***!
  \*****************************************************/
/*! exports provided: REACT_MOUNT_OP, REACT_RENDER_OP, REACT_UPDATE_OP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_MOUNT_OP", function() { return REACT_MOUNT_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_RENDER_OP", function() { return REACT_RENDER_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_UPDATE_OP", function() { return REACT_UPDATE_OP; });
const REACT_RENDER_OP = 'ui.react.render';
const REACT_UPDATE_OP = 'ui.react.update';
const REACT_MOUNT_OP = 'ui.react.mount';


/***/ }),

/***/ "./node_modules/@sentry/react/esm/errorboundary.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/react/esm/errorboundary.js ***!
  \*********************************************************/
/*! exports provided: ErrorBoundary, UNKNOWN_COMPONENT, isAtLeastReact17, withErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_COMPONENT", function() { return UNKNOWN_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAtLeastReact17", function() { return isAtLeastReact17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withErrorBoundary", function() { return withErrorBoundary; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




const _jsxFileName = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/errorboundary.tsx";
function isAtLeastReact17(version) {
  const major = version.match(/^([^.]+)/);
  return major !== null && parseInt(major[0]) >= 17;
}
const UNKNOWN_COMPONENT = 'unknown';
const INITIAL_STATE = {
  componentStack: null,
  error: null,
  eventId: null
};

/**
 * A ErrorBoundary component that logs errors to Sentry. Requires React >= 16.
 * NOTE: If you are a Sentry user, and you are seeing this stack frame, it means the
 * Sentry React SDK ErrorBoundary caught an error invoking your application code. This
 * is expected behavior and NOT indicative of a bug with the Sentry React SDK.
 */
let ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ErrorBoundary, _React$Component);
  var _super = _createSuper(ErrorBoundary);
  function ErrorBoundary() {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ErrorBoundary);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    ErrorBoundary.prototype.__init.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    ErrorBoundary.prototype.__init2.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
    return _this;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ErrorBoundary, [{
    key: "__init",
    value: function __init() {
      this.state = INITIAL_STATE;
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, _ref) {
      var _this2 = this;
      let componentStack = _ref.componentStack;
      const _this$props = this.props,
        beforeCapture = _this$props.beforeCapture,
        onError = _this$props.onError,
        showDialog = _this$props.showDialog,
        dialogOptions = _this$props.dialogOptions;
      Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_7__["withScope"])(function (scope) {
        // If on React version >= 17, create stack trace from componentStack param and links
        // to to the original error using `error.cause` otherwise relies on error param for stacktrace.
        // Linking errors requires the `LinkedErrors` integration be enabled.
        if (isAtLeastReact17(react__WEBPACK_IMPORTED_MODULE_10__["version"])) {
          const errorBoundaryError = new Error(error.message);
          errorBoundaryError.name = `React ErrorBoundary ${errorBoundaryError.name}`;
          errorBoundaryError.stack = componentStack;

          // Using the `LinkedErrors` integration to link the errors together.
          error.cause = errorBoundaryError;
        }
        if (beforeCapture) {
          beforeCapture(scope, error, componentStack);
        }
        const eventId = Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_7__["captureException"])(error, {
          contexts: {
            react: {
              componentStack
            }
          }
        });
        if (onError) {
          onError(error, componentStack, eventId);
        }
        if (showDialog) {
          Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_7__["showReportDialog"])(_objectSpread(_objectSpread({}, dialogOptions), {}, {
            eventId
          }));
        }

        // componentDidCatch is used over getDerivedStateFromError
        // so that componentStack is accessible through state.
        _this2.setState({
          error,
          componentStack,
          eventId
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      const onMount = this.props.onMount;
      if (onMount) {
        onMount();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const _this$state = this.state,
        error = _this$state.error,
        componentStack = _this$state.componentStack,
        eventId = _this$state.eventId;
      const onUnmount = this.props.onUnmount;
      if (onUnmount) {
        onUnmount(error, componentStack, eventId);
      }
    }
  }, {
    key: "__init2",
    value: function __init2() {
      var _this3 = this;
      this.resetErrorBoundary = function () {
        const onReset = _this3.props.onReset;
        const _this3$state = _this3.state,
          error = _this3$state.error,
          componentStack = _this3$state.componentStack,
          eventId = _this3$state.eventId;
        if (onReset) {
          onReset(error, componentStack, eventId);
        }
        _this3.setState(INITIAL_STATE);
      };
    }
  }, {
    key: "render",
    value: function render() {
      const _this$props2 = this.props,
        fallback = _this$props2.fallback,
        children = _this$props2.children;
      const _this$state2 = this.state,
        error = _this$state2.error,
        componentStack = _this$state2.componentStack,
        eventId = _this$state2.eventId;
      if (error) {
        let element = undefined;
        if (typeof fallback === 'function') {
          element = fallback({
            error,
            componentStack,
            resetError: this.resetErrorBoundary,
            eventId
          });
        } else {
          element = fallback;
        }
        if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["isValidElement"](element)) {
          return element;
        }
        if (fallback) {
          (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_8__["logger"].warn('fallback did not produce a valid ReactElement');
        }

        // Fail gracefully if no fallback provided or is not valid
        return null;
      }
      if (typeof children === 'function') {
        return children();
      }
      return children;
    }
  }]);
  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]); // eslint-disable-next-line @typescript-eslint/no-explicit-any
function withErrorBoundary(WrappedComponent, errorBoundaryOptions) {
  var _this4 = this;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const componentDisplayName = WrappedComponent.displayName || WrappedComponent.name || UNKNOWN_COMPONENT;
  const Wrapped = function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](ErrorBoundary, _objectSpread(_objectSpread({}, errorBoundaryOptions), {}, {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"](WrappedComponent, _objectSpread(_objectSpread({}, props), {}, {
      __self: _this4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      }
    })));
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Wrapped.displayName = `errorBoundary(${componentDisplayName})`;

  // Copy over static methods from Wrapped component to Profiler HOC
  // See: https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_9___default()(Wrapped, WrappedComponent);
  return Wrapped;
}


/***/ }),

/***/ "./node_modules/@sentry/react/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/react/esm/index.js ***!
  \*************************************************/
/*! exports provided: FunctionToString, Hub, InboundFilters, SDK_VERSION, Scope, addBreadcrumb, addGlobalEventProcessor, captureEvent, captureException, captureMessage, configureScope, createTransport, getCurrentHub, getHubFromCarrier, makeMain, setContext, setExtra, setExtras, setTag, setTags, setUser, startTransaction, withScope, BrowserClient, makeFetchTransport, makeXHRTransport, chromeStackLineParser, defaultStackLineParsers, defaultStackParser, geckoStackLineParser, opera10StackLineParser, opera11StackLineParser, winjsStackLineParser, close, defaultIntegrations, flush, forceLoad, lastEventId, onLoad, showReportDialog, wrap, GlobalHandlers, TryCatch, Breadcrumbs, LinkedErrors, HttpContext, Dedupe, Integrations, init, Profiler, useProfiler, withProfiler, ErrorBoundary, withErrorBoundary, createReduxEnhancer, reactRouterV3Instrumentation, reactRouterV4Instrumentation, reactRouterV5Instrumentation, withSentryRouting, reactRouterV6Instrumentation, withSentryReactRouterV6Routing, wrapUseRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["FunctionToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["InboundFilters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["createTransport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["withScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeFetchTransport", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["makeFetchTransport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeXHRTransport", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["makeXHRTransport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chromeStackLineParser", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["chromeStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultStackLineParsers", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["defaultStackLineParsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultStackParser", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["defaultStackParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geckoStackLineParser", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["geckoStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opera10StackLineParser", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["opera10StackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opera11StackLineParser", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["opera11StackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "winjsStackLineParser", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["winjsStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["GlobalHandlers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["TryCatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Breadcrumbs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["LinkedErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpContext", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["HttpContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dedupe", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Dedupe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Integrations"]; });

/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.js */ "./node_modules/@sentry/react/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_1__["init"]; });

/* harmony import */ var _profiler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profiler.js */ "./node_modules/@sentry/react/esm/profiler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return _profiler_js__WEBPACK_IMPORTED_MODULE_2__["Profiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useProfiler", function() { return _profiler_js__WEBPACK_IMPORTED_MODULE_2__["useProfiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withProfiler", function() { return _profiler_js__WEBPACK_IMPORTED_MODULE_2__["withProfiler"]; });

/* harmony import */ var _errorboundary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorboundary.js */ "./node_modules/@sentry/react/esm/errorboundary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _errorboundary_js__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withErrorBoundary", function() { return _errorboundary_js__WEBPACK_IMPORTED_MODULE_3__["withErrorBoundary"]; });

/* harmony import */ var _redux_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux.js */ "./node_modules/@sentry/react/esm/redux.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReduxEnhancer", function() { return _redux_js__WEBPACK_IMPORTED_MODULE_4__["createReduxEnhancer"]; });

/* harmony import */ var _reactrouterv3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactrouterv3.js */ "./node_modules/@sentry/react/esm/reactrouterv3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterV3Instrumentation", function() { return _reactrouterv3_js__WEBPACK_IMPORTED_MODULE_5__["reactRouterV3Instrumentation"]; });

/* harmony import */ var _reactrouter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactrouter.js */ "./node_modules/@sentry/react/esm/reactrouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterV4Instrumentation", function() { return _reactrouter_js__WEBPACK_IMPORTED_MODULE_6__["reactRouterV4Instrumentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterV5Instrumentation", function() { return _reactrouter_js__WEBPACK_IMPORTED_MODULE_6__["reactRouterV5Instrumentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSentryRouting", function() { return _reactrouter_js__WEBPACK_IMPORTED_MODULE_6__["withSentryRouting"]; });

/* harmony import */ var _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reactrouterv6.js */ "./node_modules/@sentry/react/esm/reactrouterv6.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterV6Instrumentation", function() { return _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_7__["reactRouterV6Instrumentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSentryReactRouterV6Routing", function() { return _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_7__["withSentryReactRouterV6Routing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapUseRoutes", function() { return _reactrouterv6_js__WEBPACK_IMPORTED_MODULE_7__["wrapUseRoutes"]; });









;

/***/ }),

/***/ "./node_modules/@sentry/react/esm/profiler.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/react/esm/profiler.js ***!
  \****************************************************/
/*! exports provided: Profiler, UNKNOWN_COMPONENT, getActiveTransaction, useProfiler, withProfiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return Profiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_COMPONENT", function() { return UNKNOWN_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTransaction", function() { return getActiveTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProfiler", function() { return useProfiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProfiler", function() { return withProfiler; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants.js */ "./node_modules/@sentry/react/esm/constants.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





const _jsxFileName = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/profiler.tsx"; /* eslint-disable @typescript-eslint/no-unsafe-member-access */

const UNKNOWN_COMPONENT = 'unknown';

/**
 * The Profiler component leverages Sentry's Tracing integration to generate
 * spans based on component lifecycles.
 */
let Profiler = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Profiler, _React$Component);
  var _super = _createSuper(Profiler);
  function Profiler(props) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Profiler);
    _this = _super.call(this, props);
    Profiler.prototype.__init.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    Profiler.prototype.__init2.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    ;
    const _this$props = _this.props,
      name = _this$props.name,
      _this$props$disabled = _this$props.disabled,
      disabled = _this$props$disabled === void 0 ? false : _this$props$disabled;
    if (disabled) {
      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(_this);
    }
    const activeTransaction = getActiveTransaction();
    if (activeTransaction) {
      _this._mountSpan = activeTransaction.startChild({
        description: `<${name}>`,
        op: _constants_js__WEBPACK_IMPORTED_MODULE_12__["REACT_MOUNT_OP"]
      });
    }
    return _this;
  }

  // If a component mounted, we can finish the mount activity.
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Profiler, [{
    key: "__init",
    value:
    /**
     * The span of the mount activity
     * Made protected for the React Native SDK to access
     */
    function __init() {
      this._mountSpan = undefined;
    }
    /**
     * The span that represents the duration of time between shouldComponentUpdate and componentDidUpdate
     */
  }, {
    key: "__init2",
    value: function __init2() {
      this._updateSpan = undefined;
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._mountSpan) {
        this._mountSpan.finish();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref) {
      var _this2 = this;
      let updateProps = _ref.updateProps,
        _ref$includeUpdates = _ref.includeUpdates,
        includeUpdates = _ref$includeUpdates === void 0 ? true : _ref$includeUpdates;
      // Only generate an update span if includeUpdates is true, if there is a valid mountSpan,
      // and if the updateProps have changed. It is ok to not do a deep equality check here as it is expensive.
      // We are just trying to give baseline clues for further investigation.
      if (includeUpdates && this._mountSpan && updateProps !== this.props.updateProps) {
        // See what props haved changed between the previous props, and the current props. This is
        // set as data on the span. We just store the prop keys as the values could be potenially very large.
        const changedProps = Object.keys(updateProps).filter(function (k) {
          return updateProps[k] !== _this2.props.updateProps[k];
        });
        if (changedProps.length > 0) {
          const now = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_9__["timestampWithMs"])();
          this._updateSpan = this._mountSpan.startChild({
            data: {
              changedProps
            },
            description: `<${this.props.name}>`,
            op: _constants_js__WEBPACK_IMPORTED_MODULE_12__["REACT_UPDATE_OP"],
            startTimestamp: now
          });
        }
      }
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this._updateSpan) {
        this._updateSpan.finish();
        this._updateSpan = undefined;
      }
    }

    // If a component is unmounted, we can say it is no longer on the screen.
    // This means we can finish the span representing the component render.
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const _this$props2 = this.props,
        name = _this$props2.name,
        _this$props2$includeR = _this$props2.includeRender,
        includeRender = _this$props2$includeR === void 0 ? true : _this$props2$includeR;
      if (this._mountSpan && includeRender) {
        // If we were able to obtain the spanId of the mount activity, we should set the
        // next activity as a child to the component mount activity.
        this._mountSpan.startChild({
          description: `<${name}>`,
          endTimestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_9__["timestampWithMs"])(),
          op: _constants_js__WEBPACK_IMPORTED_MODULE_12__["REACT_RENDER_OP"],
          startTimestamp: this._mountSpan.endTimestamp
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }], [{
    key: "__initStatic",
    value: function __initStatic() {
      this.defaultProps = {
        disabled: false,
        includeRender: true,
        includeUpdates: true
      };
    }
  }]);
  return Profiler;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);
Profiler.__initStatic();

/**
 * withProfiler is a higher order component that wraps a
 * component in a {@link Profiler} component. It is recommended that
 * the higher order component be used over the regular {@link Profiler} component.
 *
 * @param WrappedComponent component that is wrapped by Profiler
 * @param options the {@link ProfilerProps} you can pass into the Profiler
 */
function withProfiler(WrappedComponent,
// We do not want to have `updateProps` given in options, it is instead filled through the HOC.
options) {
  var _this3 = this;
  const componentDisplayName = options && options.name || WrappedComponent.displayName || WrappedComponent.name || UNKNOWN_COMPONENT;
  const Wrapped = function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["createElement"](Profiler, _objectSpread(_objectSpread({}, options), {}, {
      name: componentDisplayName,
      updateProps: props,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["createElement"](WrappedComponent, _objectSpread(_objectSpread({}, props), {}, {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      }
    })));
  };
  Wrapped.displayName = `profiler(${componentDisplayName})`;

  // Copy over static methods from Wrapped component to Profiler HOC
  // See: https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_10___default()(Wrapped, WrappedComponent);
  return Wrapped;
}

/**
 *
 * `useProfiler` is a React hook that profiles a React component.
 *
 * Requires React 16.8 or above.
 * @param name displayName of component being profiled
 */
function useProfiler(name) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    disabled: false,
    hasRenderSpan: true
  };
  const _React$useState = react__WEBPACK_IMPORTED_MODULE_11__["useState"](function () {
      if (options && options.disabled) {
        return undefined;
      }
      const activeTransaction = getActiveTransaction();
      if (activeTransaction) {
        return activeTransaction.startChild({
          description: `<${name}>`,
          op: _constants_js__WEBPACK_IMPORTED_MODULE_12__["REACT_MOUNT_OP"]
        });
      }
      return undefined;
    }),
    _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 1),
    mountSpan = _React$useState2[0];
  react__WEBPACK_IMPORTED_MODULE_11__["useEffect"](function () {
    if (mountSpan) {
      mountSpan.finish();
    }
    return function () {
      if (mountSpan && options.hasRenderSpan) {
        mountSpan.startChild({
          description: `<${name}>`,
          endTimestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_9__["timestampWithMs"])(),
          op: _constants_js__WEBPACK_IMPORTED_MODULE_12__["REACT_RENDER_OP"],
          startTimestamp: mountSpan.endTimestamp
        });
      }
    };
    // We only want this to run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/** Grabs active transaction off scope */
function getActiveTransaction() {
  let hub = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_8__["getCurrentHub"])();
  if (hub) {
    const scope = hub.getScope();
    if (scope) {
      return scope.getTransaction();
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/@sentry/react/esm/reactrouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/react/esm/reactrouter.js ***!
  \*******************************************************/
/*! exports provided: reactRouterV4Instrumentation, reactRouterV5Instrumentation, withSentryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterV4Instrumentation", function() { return reactRouterV4Instrumentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterV5Instrumentation", function() { return reactRouterV5Instrumentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSentryRouting", function() { return withSentryRouting; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const _jsxFileName = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouter.tsx";

// We need to disable eslint no-explict-any because any is required for the
// react-router typings.
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-enable @typescript-eslint/no-explicit-any */

let activeTransaction;
function reactRouterV4Instrumentation(history, routes, matchPath) {
  return createReactRouterInstrumentation(history, 'react-router-v4', routes, matchPath);
}
function reactRouterV5Instrumentation(history, routes, matchPath) {
  return createReactRouterInstrumentation(history, 'react-router-v5', routes, matchPath);
}
function createReactRouterInstrumentation(history, name) {
  let allRoutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let matchPath = arguments.length > 3 ? arguments[3] : undefined;
  function getInitPathName() {
    if (history && history.location) {
      return history.location.pathname;
    }
    if (_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].location) {
      return _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["WINDOW"].location.pathname;
    }
    return undefined;
  }

  /**
   * Normalizes a transaction name. Returns the new name as well as the
   * source of the transaction.
   *
   * @param pathname The initial pathname we normalize
   */
  function normalizeTransactionName(pathname) {
    if (allRoutes.length === 0 || !matchPath) {
      return [pathname, 'url'];
    }
    const branches = matchRoutes(allRoutes, pathname, matchPath);
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let x = 0; x < branches.length; x++) {
      if (branches[x].match.isExact) {
        return [branches[x].match.path, 'route'];
      }
    }
    return [pathname, 'url'];
  }
  const tags = {
    'routing.instrumentation': name
  };
  return function (customStartTransaction) {
    let startTransactionOnPageLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let startTransactionOnLocationChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const initPathName = getInitPathName();
    if (startTransactionOnPageLoad && initPathName) {
      const _normalizeTransaction = normalizeTransactionName(initPathName),
        _normalizeTransaction2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_normalizeTransaction, 2),
        name = _normalizeTransaction2[0],
        source = _normalizeTransaction2[1];
      activeTransaction = customStartTransaction({
        name,
        op: 'pageload',
        tags,
        metadata: {
          source
        }
      });
    }
    if (startTransactionOnLocationChange && history.listen) {
      history.listen(function (location, action) {
        if (action && (action === 'PUSH' || action === 'POP')) {
          if (activeTransaction) {
            activeTransaction.finish();
          }
          const _normalizeTransaction3 = normalizeTransactionName(location.pathname),
            _normalizeTransaction4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_normalizeTransaction3, 2),
            name = _normalizeTransaction4[0],
            source = _normalizeTransaction4[1];
          activeTransaction = customStartTransaction({
            name,
            op: 'navigation',
            tags,
            metadata: {
              source
            }
          });
        }
      });
    }
  };
}

/**
 * Matches a set of routes to a pathname
 * Based on implementation from
 */
function matchRoutes(routes, pathname, matchPath) {
  let branch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  routes.some(function (route) {
    const match = route.path ? matchPath(pathname, route) : branch.length ? branch[branch.length - 1].match // use parent match
    : computeRootMatch(pathname); // use default "root" match

    if (match) {
      branch.push({
        route,
        match
      });
      if (route.routes) {
        matchRoutes(route.routes, pathname, matchPath, branch);
      }
    }
    return !!match;
  });
  return branch;
}
function computeRootMatch(pathname) {
  return {
    path: '/',
    url: '/',
    params: {},
    isExact: pathname === '/'
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
function withSentryRouting(Route) {
  var _this = this;
  const componentDisplayName = Route.displayName || Route.name;
  const WrappedRoute = function (props) {
    if (activeTransaction && props && props.computedMatch && props.computedMatch.isExact) {
      activeTransaction.setName(props.computedMatch.path, 'route');
    }

    // @ts-ignore Setting more specific React Component typing for `R` generic above
    // will break advanced type inference done by react router params:
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/13dc4235c069e25fe7ee16e11f529d909f9f3ff8/types/react-router/index.d.ts#L154-L164
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Route, _objectSpread(_objectSpread({}, props), {}, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      }
    }));
  };
  WrappedRoute.displayName = `sentryRoute(${componentDisplayName})`;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(WrappedRoute, Route);
  // @ts-ignore Setting more specific React Component typing for `R` generic above
  // will break advanced type inference done by react router params:
  // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/13dc4235c069e25fe7ee16e11f529d909f9f3ff8/types/react-router/index.d.ts#L154-L164
  return WrappedRoute;
}
/* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */



/***/ }),

/***/ "./node_modules/@sentry/react/esm/reactrouterv3.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/react/esm/reactrouterv3.js ***!
  \*********************************************************/
/*! exports provided: reactRouterV3Instrumentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterV3Instrumentation", function() { return reactRouterV3Instrumentation; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


// Many of the types below had to be mocked out to prevent typescript issues
// these types are required for correct functionality.

/**
 * Creates routing instrumentation for React Router v3
 * Works for React Router >= 3.2.0 and < 4.0.0
 *
 * @param history object from the `history` library
 * @param routes a list of all routes, should be
 * @param match `Router.match` utility
 */
function reactRouterV3Instrumentation(history, routes, match) {
  return function (startTransaction) {
    let startTransactionOnPageLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let startTransactionOnLocationChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    let activeTransaction;
    let prevName;

    // Have to use window.location because history.location might not be defined.
    if (startTransactionOnPageLoad && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].location) {
      normalizeTransactionName(routes, _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["WINDOW"].location, match, function (localName) {
        let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'url';
        prevName = localName;
        activeTransaction = startTransaction({
          name: prevName,
          op: 'pageload',
          tags: {
            'routing.instrumentation': 'react-router-v3'
          },
          metadata: {
            source
          }
        });
      });
    }
    if (startTransactionOnLocationChange && history.listen) {
      history.listen(function (location) {
        if (location.action === 'PUSH' || location.action === 'POP') {
          if (activeTransaction) {
            activeTransaction.finish();
          }
          const tags = {
            'routing.instrumentation': 'react-router-v3'
          };
          if (prevName) {
            tags.from = prevName;
          }
          normalizeTransactionName(routes, location, match, function (localName) {
            let source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'url';
            prevName = localName;
            activeTransaction = startTransaction({
              name: prevName,
              op: 'navigation',
              tags,
              metadata: {
                source
              }
            });
          });
        }
      });
    }
  };
}

/**
 * Normalize transaction names using `Router.match`
 */
function normalizeTransactionName(appRoutes, location, match, callback) {
  let name = location.pathname;
  match({
    location,
    routes: appRoutes
  }, function (error, _redirectLocation, renderProps) {
    if (error || !renderProps) {
      return callback(name);
    }
    const routePath = getRouteStringFromRoutes(renderProps.routes || []);
    if (routePath.length === 0 || routePath === '/*') {
      return callback(name);
    }
    name = routePath;
    return callback(name, 'route');
  });
}

/**
 * Generate route name from array of routes
 */
function getRouteStringFromRoutes(routes) {
  if (!Array.isArray(routes) || routes.length === 0) {
    return '';
  }
  const routesWithPaths = routes.filter(function (route) {
    return !!route.path;
  });
  let index = -1;
  for (let x = routesWithPaths.length - 1; x >= 0; x--) {
    const route = routesWithPaths[x];
    if (route.path && route.path.startsWith('/')) {
      index = x;
      break;
    }
  }
  return routesWithPaths.slice(index).filter(function (_ref) {
    let path = _ref.path;
    return !!path;
  }).map(function (_ref2) {
    let path = _ref2.path;
    return path;
  }).join('');
}


/***/ }),

/***/ "./node_modules/@sentry/react/esm/reactrouterv6.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/react/esm/reactrouterv6.js ***!
  \*********************************************************/
/*! exports provided: reactRouterV6Instrumentation, withSentryReactRouterV6Routing, wrapUseRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterV6Instrumentation", function() { return reactRouterV6Instrumentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSentryReactRouterV6Routing", function() { return withSentryReactRouterV6Routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapUseRoutes", function() { return wrapUseRoutes; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const _jsxFileName = "/home/runner/work/sentry-javascript/sentry-javascript/packages/react/src/reactrouterv6.tsx";
let activeTransaction;
let _useEffect;
let _useLocation;
let _useNavigationType;
let _createRoutesFromChildren;
let _matchRoutes;
let _customStartTransaction;
let _startTransactionOnLocationChange;
const SENTRY_TAGS = {
  'routing.instrumentation': 'react-router-v6'
};
function reactRouterV6Instrumentation(useEffect, useLocation, useNavigationType, createRoutesFromChildren, matchRoutes) {
  return function (customStartTransaction) {
    let startTransactionOnPageLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let startTransactionOnLocationChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const initPathName = _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"].location && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["WINDOW"].location.pathname;
    if (startTransactionOnPageLoad && initPathName) {
      activeTransaction = customStartTransaction({
        name: initPathName,
        op: 'pageload',
        tags: SENTRY_TAGS,
        metadata: {
          source: 'url'
        }
      });
    }
    _useEffect = useEffect;
    _useLocation = useLocation;
    _useNavigationType = useNavigationType;
    _matchRoutes = matchRoutes;
    _createRoutesFromChildren = createRoutesFromChildren;
    _customStartTransaction = customStartTransaction;
    _startTransactionOnLocationChange = startTransactionOnLocationChange;
  };
}
function getNormalizedName(routes, location, matchRoutes) {
  if (!routes || routes.length === 0 || !matchRoutes) {
    return [location.pathname, 'url'];
  }
  const branches = matchRoutes(routes, location);
  let pathBuilder = '';
  if (branches) {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let x = 0; x < branches.length; x++) {
      const branch = branches[x];
      const route = branch.route;
      if (route) {
        // Early return if index route
        if (route.index) {
          return [branch.pathname, 'route'];
        }
        const path = route.path;
        if (path) {
          const newPath = path[0] === '/' || pathBuilder[pathBuilder.length - 1] === '/' ? path : `/${path}`;
          pathBuilder += newPath;
          if (branch.pathname === location.pathname) {
            if (
            // If the route defined on the element is something like
            // <Route path="/stores/:storeId/products/:productId" element={<div>Product</div>} />
            // We should check against the branch.pathname for the number of / seperators
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getNumberOfUrlSegments"])(pathBuilder) !== Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getNumberOfUrlSegments"])(branch.pathname) &&
            // We should not count wildcard operators in the url segments calculation
            pathBuilder.slice(-2) !== '/*') {
              return [newPath, 'route'];
            }
            return [pathBuilder, 'route'];
          }
        }
      }
    }
  }
  return [location.pathname, 'url'];
}
function updatePageloadTransaction(location, routes) {
  if (activeTransaction) {
    var _activeTransaction;
    (_activeTransaction = activeTransaction).setName.apply(_activeTransaction, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(getNormalizedName(routes, location, _matchRoutes)));
  }
}
function handleNavigation(location, routes, navigationType, isBaseLocation) {
  if (isBaseLocation) {
    if (activeTransaction) {
      activeTransaction.finish();
    }
    return;
  }
  if (_startTransactionOnLocationChange && (navigationType === 'PUSH' || navigationType === 'POP')) {
    if (activeTransaction) {
      activeTransaction.finish();
    }
    const _getNormalizedName = getNormalizedName(routes, location, _matchRoutes),
      _getNormalizedName2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_getNormalizedName, 2),
      name = _getNormalizedName2[0],
      source = _getNormalizedName2[1];
    activeTransaction = _customStartTransaction({
      name,
      op: 'navigation',
      tags: SENTRY_TAGS,
      metadata: {
        source
      }
    });
  }
}
function withSentryReactRouterV6Routing(Routes) {
  var _this = this;
  if (!_useEffect || !_useLocation || !_useNavigationType || !_createRoutesFromChildren || !_matchRoutes || !_customStartTransaction) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`reactRouterV6Instrumentation was unable to wrap Routes because of one or more missing parameters.
      useEffect: ${_useEffect}. useLocation: ${_useLocation}. useNavigationType: ${_useNavigationType}.
      createRoutesFromChildren: ${_createRoutesFromChildren}. matchRoutes: ${_matchRoutes}. customStartTransaction: ${_customStartTransaction}.`);
    return Routes;
  }
  let isBaseLocation = false;
  let routes;
  const SentryRoutes = function (props) {
    const location = _useLocation();
    const navigationType = _useNavigationType();
    _useEffect(function () {
      // Performance concern:
      // This is repeated when <Routes /> is rendered.
      routes = _createRoutesFromChildren(props.children);
      isBaseLocation = true;
      updatePageloadTransaction(location, routes);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.children]);
    _useEffect(function () {
      handleNavigation(location, routes, navigationType, isBaseLocation);
    }, [props.children, location, navigationType, isBaseLocation]);
    isBaseLocation = false;

    // @ts-ignore Setting more specific React Component typing for `R` generic above
    // will break advanced type inference done by react router params
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Routes, _objectSpread(_objectSpread({}, props), {}, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      }
    }));
  };
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(SentryRoutes, Routes);

  // @ts-ignore Setting more specific React Component typing for `R` generic above
  // will break advanced type inference done by react router params
  return SentryRoutes;
}
function wrapUseRoutes(origUseRoutes) {
  var _this2 = this;
  if (!_useEffect || !_useLocation || !_useNavigationType || !_matchRoutes || !_customStartTransaction) {
    (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].warn('reactRouterV6Instrumentation was unable to wrap `useRoutes` because of one or more missing parameters.');
    return origUseRoutes;
  }
  let isBaseLocation = false;
  return function (routes, location) {
    const SentryRoutes = function (props) {
      const Routes = origUseRoutes(routes, location);
      const locationArgObject = typeof location === 'string' ? {
        pathname: location
      } : location;
      const locationObject = locationArgObject || _useLocation();
      const navigationType = _useNavigationType();
      _useEffect(function () {
        isBaseLocation = true;
        updatePageloadTransaction(locationObject, routes);
      }, [props]);
      _useEffect(function () {
        handleNavigation(locationObject, routes, navigationType, isBaseLocation);
      }, [props, locationObject, navigationType, isBaseLocation]);
      isBaseLocation = false;
      return Routes;
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SentryRoutes, {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      }
    });
  };
}


/***/ }),

/***/ "./node_modules/@sentry/react/esm/redux.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/react/esm/redux.js ***!
  \*************************************************/
/*! exports provided: createReduxEnhancer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReduxEnhancer", function() { return createReduxEnhancer; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


/* eslint-disable @typescript-eslint/no-explicit-any */

const ACTION_BREADCRUMB_CATEGORY = 'redux.action';
const ACTION_BREADCRUMB_TYPE = 'info';
const defaultOptions = {
  actionTransformer: function (action) {
    return action;
  },
  stateTransformer: function (state) {
    return state || null;
  }
};

/**
 * Creates an enhancer that would be passed to Redux's createStore to log actions and the latest state to Sentry.
 *
 * @param enhancerOptions Options to pass to the enhancer
 */
function createReduxEnhancer(enhancerOptions) {
  // Note: We return an any type as to not have type conflicts.
  const options = _objectSpread(_objectSpread({}, defaultOptions), enhancerOptions);
  return function (next) {
    return function (reducer, initialState) {
      const sentryReducer = function (state, action) {
        const newState = reducer(state, action);
        Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["configureScope"])(function (scope) {
          /* Action breadcrumbs */
          const transformedAction = options.actionTransformer(action);
          if (typeof transformedAction !== 'undefined' && transformedAction !== null) {
            scope.addBreadcrumb({
              category: ACTION_BREADCRUMB_CATEGORY,
              data: transformedAction,
              type: ACTION_BREADCRUMB_TYPE
            });
          }

          /* Set latest state to scope */
          const transformedState = options.stateTransformer(newState);
          if (typeof transformedState !== 'undefined' && transformedState !== null) {
            scope.setContext('state', {
              state: {
                type: 'redux',
                value: transformedState
              }
            });
          } else {
            scope.setContext('state', null);
          }

          /* Allow user to configure scope with latest state */
          // eslint-disable-next-line @typescript-eslint/unbound-method
          const configureScopeWithState = options.configureScopeWithState;
          if (typeof configureScopeWithState === 'function') {
            configureScopeWithState(scope, newState);
          }
        });
        return newState;
      };
      return next(sentryReducer, initialState);
    };
  };
}


/***/ }),

/***/ "./node_modules/@sentry/react/esm/sdk.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/react/esm/sdk.js ***!
  \***********************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");


/**
 * Inits the React SDK
 */
function init(options) {
  options._metadata = options._metadata || {};
  options._metadata.sdk = options._metadata.sdk || {
    name: 'sentry.javascript.react',
    packages: [{
      name: 'npm:@sentry/react',
      version: _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"]
    }],
    version: _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"]
  };
  Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["init"])(options);
}


/***/ })

}]);