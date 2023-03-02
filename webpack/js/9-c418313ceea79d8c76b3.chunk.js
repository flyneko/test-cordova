(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@sentry/replay/dist/index.es.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/replay/dist/index.es.js ***!
  \******************************************************/
/*! exports provided: Replay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replay", function() { return Replay; });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rrweb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rrweb */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js");





/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function createBreadcrumb(breadcrumb) {
  return __assign({
    timestamp: new Date().getTime() / 1000,
    type: 'default'
  }, breadcrumb);
}
function handleDom(handlerData) {
  // Taken from https://github.com/getsentry/sentry-javascript/blob/master/packages/browser/src/integrations/breadcrumbs.ts#L112
  var target;
  var targetNode;
  // Accessing event.target can throw (see getsentry/raven-js#838, #768)
  try {
    targetNode = handlerData.event.target || handlerData.event;
    target = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"])(targetNode);
  } catch (e) {
    target = '<unknown>';
  }
  if (target.length === 0) {
    return null;
  }
  return createBreadcrumb({
    category: "ui.".concat(handlerData.name),
    message: target,
    data: __assign({}, targetNode ? {
      nodeId: rrweb__WEBPACK_IMPORTED_MODULE_3__["record"].mirror.getId(targetNode)
    } : {})
  });
}
var _LAST_BREADCRUMB = null;
function handleScope(scope) {
  var _a;
  //@ts-expect-error using private val
  var newBreadcrumb = scope._breadcrumbs[scope._breadcrumbs.length - 1];
  // Listener can be called when breadcrumbs have not changed, so we store the
  // reference to the last crumb and only return a crumb if it has changed
  if (_LAST_BREADCRUMB === newBreadcrumb || !newBreadcrumb) {
    return null;
  }
  _LAST_BREADCRUMB = newBreadcrumb;
  if (['fetch', 'xhr', 'sentry.event', 'sentry.transaction'].includes(newBreadcrumb.category) || ((_a = newBreadcrumb.category) === null || _a === void 0 ? void 0 : _a.startsWith('ui.'))) {
    return null;
  }
  return createBreadcrumb(newBreadcrumb);
}
function getBreadcrumbHandler(type) {
  if (type === 'scope') {
    return handleScope;
  }
  return handleDom;
}
var isBrowser$1 = typeof window !== 'undefined';
/**
 * Returns true if we are currently recording an internal to Sentry replay
 * (e.g. on https://sentry.io )
 */
function isInternal() {
  return isBrowser$1 && ['sentry.io', 'dev.getsentry.net'].includes(window.location.host);
}

/**
 * Checks is `targetHost` is a Sentry ingestion host
 */
function isIngestHost(targetHost) {
  var _a;
  var _b = ((_a = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient()) === null || _a === void 0 ? void 0 : _a.getDsn()) || {},
    protocol = _b.protocol,
    host = _b.host;
  // XXX: Special case when this integration is used by Sentry on `sentry.io`
  // We would like to capture network requests made to our ingest endpoints for debugging
  if (isInternal()) {
    return false;
  }
  return targetHost.startsWith("".concat(protocol, "://").concat(host));
}
function handleFetch(handlerData) {
  if (!handlerData.endTimestamp) {
    return null;
  }
  var startTimestamp = handlerData.startTimestamp,
    endTimestamp = handlerData.endTimestamp,
    fetchData = handlerData.fetchData,
    response = handlerData.response;
  // Do not capture fetches to Sentry ingestion endpoint
  if (isIngestHost(fetchData.url)) {
    return null;
  }
  return {
    type: 'resource.fetch',
    start: startTimestamp / 1000,
    end: endTimestamp / 1000,
    name: fetchData.url,
    data: {
      method: fetchData.method,
      statusCode: response.status
    }
  };
}
function handleHistory(handlerData) {
  var from = handlerData.from,
    to = handlerData.to;
  var now = new Date().getTime() / 1000;
  return {
    type: 'navigation.push',
    start: now,
    end: now,
    name: to,
    data: {
      previous: from
    }
  };
}
function handleXhr(handlerData) {
  var _a;
  if (handlerData.xhr.__sentry_own_request__) {
    // Taken from sentry-javascript
    // Only capture non-sentry requests
    return null;
  }
  if (handlerData.startTimestamp) {
    // TODO: See if this is still needed
    handlerData.xhr.__sentry_xhr__ = handlerData.xhr.__sentry_xhr__ || {};
    handlerData.xhr.__sentry_xhr__.startTimestamp = handlerData.startTimestamp;
  }
  if (!handlerData.endTimestamp) {
    return null;
  }
  var _b = handlerData.xhr.__sentry_xhr__ || {},
    method = _b.method,
    url = _b.url,
    statusCode = _b.status_code;
  // Do not capture fetches to Sentry ingestion endpoint
  if (url === undefined || isIngestHost(url)) {
    return null;
  }
  return {
    type: 'resource.xhr',
    name: url,
    start: (((_a = handlerData.xhr.__sentry_xhr__) === null || _a === void 0 ? void 0 : _a.startTimestamp) || 0) / 1000 || handlerData.endTimestamp / 1000.0,
    end: handlerData.endTimestamp / 1000.0,
    data: {
      method: method,
      statusCode: statusCode
    }
  };
}
function getSpanHandler(type) {
  if (type === 'fetch') {
    return handleFetch;
  }
  if (type === 'xhr') {
    return handleXhr;
  }
  return handleHistory;
}
var REPLAY_SESSION_KEY = 'sentryReplaySession';
var REPLAY_EVENT_NAME = 'replay_event';
// The idle limit for a session
var SESSION_IDLE_DURATION = 300000; // 5 minutes in ms
// Grace period to keep a session when a user changes tabs or hides window
var VISIBILITY_CHANGE_TIMEOUT = SESSION_IDLE_DURATION;
// The maximum length of a session
var MAX_SESSION_LIFE = 1800000; // 30 minutes
/**
 * Defaults for sampling rates
 */
var DEFAULT_SESSION_SAMPLE_RATE = 0.1;
var DEFAULT_ERROR_SAMPLE_RATE = 1.0;

/**
 * Deletes a session from storage
 */
function deleteSession() {
  var hasSessionStorage = ('sessionStorage' in window);
  if (!hasSessionStorage) {
    return;
  }
  try {
    window.sessionStorage.removeItem(REPLAY_SESSION_KEY);
  } catch (_a) {
    // Ignore potential SecurityError exceptions
  }
}

/**
 * Given an initial timestamp and an expiry duration, checks to see if current
 * time should be considered as expired.
 */
function isExpired(initialTime, expiry, targetTime) {
  if (targetTime === void 0) {
    targetTime = +new Date();
  }
  // Always expired if < 0
  if (initialTime === null || expiry === undefined || expiry < 0) {
    return true;
  }
  // Never expires if == 0
  if (expiry === 0) {
    return false;
  }
  return initialTime + expiry <= targetTime;
}

/**
 * Checks to see if session is expired
 */
function isSessionExpired(session, idleTimeout, targetTime) {
  if (targetTime === void 0) {
    targetTime = +new Date();
  }
  return (
    // First, check that maximum session length has not been exceeded
    isExpired(session.started, MAX_SESSION_LIFE, targetTime) ||
    // check that the idle timeout has not been exceeded (i.e. user has
    // performed an action within the last `idleTimeout` ms)
    isExpired(session === null || session === void 0 ? void 0 : session.lastActivity, idleTimeout, targetTime)
  );
}
function wrapLogger(logFn) {
  return function wrappedLog() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return logFn.call.apply(logFn, __spreadArray([_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"], '[Replay]'], args, false));
  };
}
var logger = __assign(__assign({}, _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"]), {
  error: wrapLogger(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error),
  warn: wrapLogger(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn),
  log: wrapLogger(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].log)
});
function saveSession(session) {
  var hasSessionStorage = ('sessionStorage' in window);
  if (!hasSessionStorage) {
    return;
  }
  try {
    window.sessionStorage.setItem(REPLAY_SESSION_KEY, JSON.stringify(session));
  } catch (_a) {
    // this shouldn't happen
  }
}

/**
 * Given a sample rate, returns true if replay should be sampled.
 *
 * 1.0 = 100% sampling
 * 0.0 = 0% sampling
 */
function isSampled(sampleRate) {
  if (sampleRate === undefined) {
    return false;
  }
  // Math.random() returns a number in range of 0 to 1 (inclusive of 0, but not 1)
  return Math.random() < sampleRate;
}
var Session = /** @class */function () {
  function Session(session, _a) {
    if (session === void 0) {
      session = {};
    }
    var stickySession = _a.stickySession,
      sessionSampleRate = _a.sessionSampleRate,
      errorSampleRate = _a.errorSampleRate;
    var _b, _c, _d, _e;
    var now = new Date().getTime();
    this._id = session.id || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])();
    this._started = (_b = session.started) !== null && _b !== void 0 ? _b : now;
    this._lastActivity = (_c = session.lastActivity) !== null && _c !== void 0 ? _c : now;
    this._segmentId = (_d = session.segmentId) !== null && _d !== void 0 ? _d : 0;
    this._sampled = (_e = session.sampled) !== null && _e !== void 0 ? _e : isSampled(sessionSampleRate) ? 'session' : isSampled(errorSampleRate) ? 'error' : false;
    this.options = {
      stickySession: stickySession
    };
  }
  Object.defineProperty(Session.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Session.prototype, "started", {
    get: function () {
      return this._started;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Session.prototype, "lastActivity", {
    get: function () {
      return this._lastActivity;
    },
    set: function (newDate) {
      this._lastActivity = newDate;
      if (this.options.stickySession) {
        saveSession(this);
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Session.prototype, "segmentId", {
    get: function () {
      return this._segmentId;
    },
    set: function (id) {
      this._segmentId = id;
      if (this.options.stickySession) {
        saveSession(this);
      }
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Session.prototype, "previousSessionId", {
    get: function () {
      return this._previousSessionId;
    },
    set: function (id) {
      this._previousSessionId = id;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Session.prototype, "sampled", {
    get: function () {
      return this._sampled;
    },
    set: function (_isSampled) {
      throw new Error('Unable to change sampled value');
    },
    enumerable: false,
    configurable: true
  });
  Session.prototype.toJSON = function () {
    return {
      id: this.id,
      started: this.started,
      lastActivity: this.lastActivity,
      segmentId: this._segmentId,
      sampled: this._sampled
    };
  };
  return Session;
}();

/**
 * Create a new session, which in its current implementation is a Sentry event
 * that all replays will be saved to as attachments. Currently, we only expect
 * one of these Sentry events per "replay session".
 */
function createSession(_a) {
  var sessionSampleRate = _a.sessionSampleRate,
    errorSampleRate = _a.errorSampleRate,
    _b = _a.stickySession,
    stickySession = _b === void 0 ? false : _b;
  var session = new Session(undefined, {
    stickySession: stickySession,
    errorSampleRate: errorSampleRate,
    sessionSampleRate: sessionSampleRate
  });
  logger.log("Creating new session: ".concat(session.id));
  if (stickySession) {
    saveSession(session);
  }
  return session;
}

/**
 * Fetches a session from storage
 */
function fetchSession(_a) {
  var sessionSampleRate = _a.sessionSampleRate,
    errorSampleRate = _a.errorSampleRate;
  var hasSessionStorage = ('sessionStorage' in window);
  if (!hasSessionStorage) {
    return null;
  }
  var sessionStringFromStorage = window.sessionStorage.getItem(REPLAY_SESSION_KEY);
  if (!sessionStringFromStorage) {
    return null;
  }
  try {
    var sessionObj = JSON.parse(sessionStringFromStorage);
    return new Session(sessionObj,
    // We are assuming that if there is a saved item, then the session is sticky,
    // however this could break down if we used a different storage mechanism (e.g. localstorage)
    {
      stickySession: true,
      sessionSampleRate: sessionSampleRate,
      errorSampleRate: errorSampleRate
    });
  } catch (_b) {
    return null;
  }
}

/**
 * Get or create a session
 */
function getSession(_a) {
  var expiry = _a.expiry,
    currentSession = _a.currentSession,
    stickySession = _a.stickySession,
    sessionSampleRate = _a.sessionSampleRate,
    errorSampleRate = _a.errorSampleRate;
  // If session exists and is passed, use it instead of always hitting session storage
  var session = currentSession || stickySession && fetchSession({
    sessionSampleRate: sessionSampleRate,
    errorSampleRate: errorSampleRate
  });
  if (session) {
    // If there is a session, check if it is valid (e.g. "last activity" time
    // should be within the "session idle time", and "session started" time is
    // within "max session time").
    var isExpired = isSessionExpired(session, expiry);
    if (!isExpired) {
      return {
        type: 'saved',
        session: session
      };
    } else {
      logger.log("Session has expired");
    }
    // Otherwise continue to create a new session
  }

  var newSession = createSession({
    stickySession: stickySession,
    sessionSampleRate: sessionSampleRate,
    errorSampleRate: errorSampleRate
  });
  return {
    type: 'new',
    session: newSession
  };
}

/**
 * Wrapper for core SDK's `addBreadcrumb` only when used on `sentry.io`
 */
function addInternalBreadcrumb(arg) {
  if (!isInternal()) {
    return;
  }
  var category = arg.category,
    level = arg.level,
    message = arg.message,
    rest = __rest(arg, ["category", "level", "message"]);
  Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["addBreadcrumb"])(__assign({
    category: category || 'console',
    level: level || 'debug',
    message: "[debug]: ".concat(message)
  }, rest));
}

/**
 * Captures exceptions to Sentry only when it occurs on sentry.io
 */
function captureInternalException(err) {
  if (!isInternal()) {
    return;
  }
  Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["captureException"])(err);
}
function createPayload(_a) {
  var events = _a.events,
    headers = _a.headers;
  var payloadWithSequence;
  // XXX: newline is needed to separate sequence id from events
  var replayHeaders = "".concat(JSON.stringify(headers), "\n");
  if (typeof events === 'string') {
    payloadWithSequence = "".concat(replayHeaders).concat(events);
  } else {
    var enc = new TextEncoder();
    // XXX: newline is needed to separate sequence id from events
    var sequence = enc.encode(replayHeaders);
    // Merge the two Uint8Arrays
    payloadWithSequence = new Uint8Array(sequence.length + events.length);
    payloadWithSequence.set(sequence);
    payloadWithSequence.set(events, sequence.length);
  }
  return payloadWithSequence;
}
var NAVIGATION_ENTRY_KEYS = ['name', 'type', 'startTime', 'transferSize', 'duration'];
function isNavigationEntryEqual(a) {
  return function (b) {
    return NAVIGATION_ENTRY_KEYS.every(function (key) {
      return a[key] === b[key];
    });
  };
}
/**
 * There are some difficulties diagnosing why there are duplicate navigation
 * entries. We've witnessed several intermittent results:
 * - duplicate entries have duration = 0
 * - duplicate entries are the same object reference
 * - none of the above
 *
 * Compare the values of several keys to determine if the entries are duplicates or not.
 */
function dedupePerformanceEntries(currentList, newList) {
  // Partition `currentList` into 3 different lists based on entryType
  var _a = currentList.reduce(function (acc, entry) {
      if (entry.entryType === 'navigation') {
        acc[0].push(entry);
      } else if (entry.entryType === 'largest-contentful-paint') {
        acc[1].push(entry);
      } else {
        acc[2].push(entry);
      }
      return acc;
    }, [[], [], []]),
    existingNavigationEntries = _a[0],
    existingLcpEntries = _a[1],
    existingEntries = _a[2];
  var newEntries = [];
  var newNavigationEntries = [];
  var newLcpEntry = existingLcpEntries.length ? existingLcpEntries[existingLcpEntries.length - 1] // Take the last element as list is sorted
  : undefined;
  newList.forEach(function (entry) {
    if (entry.entryType === 'largest-contentful-paint') {
      // We want the latest LCP event only
      if (!newLcpEntry || newLcpEntry.startTime < entry.startTime) {
        newLcpEntry = entry;
      }
      return;
    }
    if (entry.entryType === 'navigation') {
      var navigationEntry = entry;
      // Check if the navigation entry is contained in currentList or newList
      if (
      // Ignore any navigation entries with duration 0, as they are likely duplicates
      entry.duration > 0 &&
      // Ensure new entry does not already exist in existing entries
      !existingNavigationEntries.find(isNavigationEntryEqual(navigationEntry)) &&
      // Ensure new entry does not already exist in new list of navigation entries
      !newNavigationEntries.find(isNavigationEntryEqual(navigationEntry))) {
        newNavigationEntries.push(navigationEntry);
      }
      // Otherwise this navigation entry is considered a duplicate and is thrown away
      return;
    }
    newEntries.push(entry);
  });
  // Re-combine and sort by startTime
  return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], newLcpEntry ? [newLcpEntry] : [], true), existingNavigationEntries, true), existingEntries, true), newEntries, true), newNavigationEntries, true).sort(function (a, b) {
    return a.startTime - b.startTime;
  });
}
var _a;
// Map entryType -> function to normalize data for event
var ENTRY_TYPES = (_a = {
  resource: createResourceEntry,
  paint: createPaintEntry,
  navigation: createNavigationEntry
}, _a['largest-contentful-paint'] = createLargestContentfulPaint, _a);
function createPerformanceEntries(entries) {
  return entries.map(createPerformanceEntry).filter(Boolean);
}
function createPerformanceEntry(entry) {
  if (ENTRY_TYPES[entry.entryType] === undefined) {
    return null;
  }
  return ENTRY_TYPES[entry.entryType](entry);
}
function getAbsoluteTime(time) {
  // browserPerformanceTimeOrigin can be undefined if `performance` or
  // `performance.now` doesn't exist, but this is already checked by this integration
  return ((_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["browserPerformanceTimeOrigin"] || window.performance.timeOrigin) + time) / 1000;
}
function createPaintEntry(entry) {
  var duration = entry.duration,
    entryType = entry.entryType,
    name = entry.name,
    startTime = entry.startTime;
  var start = getAbsoluteTime(startTime);
  return {
    type: entryType,
    name: name,
    start: start,
    end: start + duration
  };
}
function createNavigationEntry(entry) {
  // TODO: There looks to be some more interesting bits in here (domComplete, domContentLoaded)
  var entryType = entry.entryType,
    name = entry.name,
    duration = entry.duration,
    domComplete = entry.domComplete,
    startTime = entry.startTime,
    transferSize = entry.transferSize,
    type = entry.type;
  // Ignore entries with no duration, they do not seem to be useful and cause dupes
  if (duration === 0) {
    return null;
  }
  return {
    type: "".concat(entryType, ".").concat(type),
    start: getAbsoluteTime(startTime),
    end: getAbsoluteTime(domComplete),
    name: name,
    data: {
      size: transferSize,
      duration: duration
    }
  };
}
function createResourceEntry(entry) {
  var entryType = entry.entryType,
    initiatorType = entry.initiatorType,
    name = entry.name,
    responseEnd = entry.responseEnd,
    startTime = entry.startTime,
    encodedBodySize = entry.encodedBodySize,
    transferSize = entry.transferSize;
  // Do not capture fetches to Sentry ingestion endpoint
  if (isIngestHost(name)) {
    return null;
  }
  // Core SDK handles these
  if (['fetch', 'xmlhttprequest'].includes(initiatorType)) {
    return null;
  }
  return {
    type: "".concat(entryType, ".").concat(initiatorType),
    start: getAbsoluteTime(startTime),
    end: getAbsoluteTime(responseEnd),
    name: name,
    data: {
      size: transferSize,
      encodedBodySize: encodedBodySize
    }
  };
}
function createLargestContentfulPaint(entry) {
  var duration = entry.duration,
    entryType = entry.entryType,
    startTime = entry.startTime,
    size = entry.size;
  var start = getAbsoluteTime(startTime);
  return {
    type: entryType,
    name: entryType,
    start: start,
    end: start + duration,
    data: {
      duration: duration,
      size: size,
      // Not sure why this errors, Node should be correct (Argument of type 'Node' is not assignable to parameter of type 'INode')
      nodeId: rrweb__WEBPACK_IMPORTED_MODULE_3__["record"].mirror.getId(entry.element)
    }
  };
}
function createMemoryEntry(memoryEntry) {
  var jsHeapSizeLimit = memoryEntry.jsHeapSizeLimit,
    totalJSHeapSize = memoryEntry.totalJSHeapSize,
    usedJSHeapSize = memoryEntry.usedJSHeapSize;
  // we don't want to use `getAbsoluteTime` because it adds the event time to the
  // time origin, so we get the current timestamp instead
  var time = new Date().getTime() / 1000;
  return {
    type: 'memory',
    name: 'memory',
    start: time,
    end: time,
    data: {
      memory: {
        jsHeapSizeLimit: jsHeapSizeLimit,
        totalJSHeapSize: totalJSHeapSize,
        usedJSHeapSize: usedJSHeapSize
      }
    }
  };
}
var workerString = `/*! pako 2.0.4 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const b=t=>t<256?o[t]:o[256+(t>>>7)],g=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},p=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,g(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},m=(t,e,a)=>{p(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)i[n]=r=r+a[n-1]<<1;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},x=t=>{t.bi_valid>8?g(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.last_lit)do{s=t.pending_buf[t.d_buf+2*f]<<8|t.pending_buf[t.d_buf+2*f+1],r=t.pending_buf[t.l_buf+f],f++,0===s?m(t,r,i):(o=l[r],m(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],p(t,r,_)),s--,o=b(s),m(t,o,n),_=a[o],0!==_&&(s-=d[o],p(t,s,_)))}while(f<t.last_lit);m(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},S=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{m(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(m(t,n,t.bl_tree),o--),m(t,16,t.bl_tree),p(t,o-3,2)):o<=10?(m(t,17,t.bl_tree),p(t,o-3,3)):(m(t,18,t.bl_tree),p(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let U=!1;const D=(t,e,a,i)=>{p(t,0+(i?1:0),3),((t,e,a,i)=>{x(t),i&&(g(t,a),g(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a})(t,e,a,!0)};var O=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(p(t,2+(i?1:0),3),E(t,s,r)):(p(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(p(t,e-257,5),p(t,a-1,5),p(t,i-4,4),s=0;s<i;s++)p(t,t.bl_tree[2*n[s]+1],3);S(t,t.dyn_ltree,e-1),S(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},T={_tr_init:t=>{U||((()=>{let t,n,w,b,g;const p=new Array(16);for(w=0,b=0;b<28;b++)for(h[b]=w,t=0;t<1<<e[b];t++)l[w++]=b;for(l[w-1]=b,g=0,b=0;b<16;b++)for(d[b]=g,t=0;t<1<<a[b];t++)o[g++]=b;for(g>>=7;b<30;b++)for(d[b]=g<<7,t=0;t<1<<a[b]-7;t++)o[256+g++]=b;for(n=0;n<=15;n++)p[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,p[8]++;for(;t<=255;)s[2*t+1]=9,t++,p[9]++;for(;t<=279;)s[2*t+1]=7,t++,p[7]++;for(;t<=287;)s[2*t+1]=8,t++,p[8]++;for(v(s,287,p),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),U=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:O,_tr_tally:(t,e,a)=>(t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*b(e)]++),t.last_lit===t.lit_bufsize-1),_tr_align:t=>{p(t,2,3),m(t,256,s),(t=>{16===t.bi_valid?(g(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var N=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const F=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var L=(t,e,a,i)=>{const n=F,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=T,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:J,Z_OK:W,Z_STREAM_END:q,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>(t<<1)-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0};let _t=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ft=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ct=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ft(t.strm)},ut=(t,e)=>{t.pending_buf[t.pending++]=e},wt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=N(t.adler,e,n,a):2===t.state.wrap&&(t.adler=L(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n,s,r;do{if(s=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)){t.window.set(t.window.subarray(e,e+e),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,i=t.hash_size,a=i;do{n=t.head[--a],t.head[a]=n>=e?n-e:0}while(--i);i=e,a=i;do{n=t.prev[--a],t.prev[a]=n>=e?n-e:0}while(--i);s+=e}if(0===t.strm.avail_in)break;if(i=bt(t.strm,t.window,t.strstart+t.lookahead,s),t.lookahead+=i,t.lookahead+t.insert>=3)for(r=t.strstart-t.insert,t.ins_h=t.window[r],t.ins_h=_t(t,t.ins_h,t.window[r+1]);t.insert&&(t.ins_h=_t(t,t.ins_h,t.window[r+3-1]),t.prev[r&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=r,r++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},mt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=_t(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=_t(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=_t(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(ct(t,!1),0===t.strm.avail_out)?1:2},kt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=_t(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=_t(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ct(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ct(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(ct(t,!1),0===t.strm.avail_out)?1:2};function vt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const yt=[new vt(0,0,0,0,((t,e)=>{let a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(pt(t),0===t.lookahead&&e===P)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;const i=t.block_start+a;if((0===t.strstart||t.strstart>=i)&&(t.lookahead=t.strstart-i,t.strstart=i,ct(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-262&&(ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ct(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(ct(t,!1),t.strm.avail_out),1)})),new vt(4,4,8,4,mt),new vt(4,5,16,8,mt),new vt(4,6,32,32,mt),new vt(4,4,16,16,kt),new vt(8,16,32,32,kt),new vt(8,16,128,128,kt),new vt(8,32,128,256,kt),new vt(32,128,258,1024,kt),new vt(32,258,258,4096,kt)];function xt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const zt=t=>{if(!t||!t.state)return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=P,C(e),W},At=t=>{const e=zt(t);var a;return e===W&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=yt[a.level].max_lazy,a.good_match=yt[a.level].good_length,a.nice_match=yt[a.level].nice_length,a.max_chain_length=yt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Et=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt)return lt(t,Q);8===i&&(i=9);const o=new xt;return t.state=o,o.strm=t,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=e,o.strategy=s,o.method=a,At(t)};var Rt={deflateInit:(t,e)=>Et(t,e,ot,15,8,st),deflateInit2:Et,deflateReset:At,deflateResetKeep:zt,deflateSetHeader:(t,e)=>t&&t.state?2!==t.state.wrap?Q:(t.state.gzhead=e,W):Q,deflate:(t,e)=>{let a,i;if(!t||!t.state||e>J||e<0)return t?lt(t,Q):Q;const n=t.state;if(!t.output||!t.input&&0!==t.avail_in||666===n.status&&e!==X)return lt(t,0===t.avail_out?$:Q);n.strm=t;const s=n.last_flush;if(n.last_flush=e,42===n.status)if(2===n.wrap)t.adler=0,ut(n,31),ut(n,139),ut(n,8),n.gzhead?(ut(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),ut(n,255&n.gzhead.time),ut(n,n.gzhead.time>>8&255),ut(n,n.gzhead.time>>16&255),ut(n,n.gzhead.time>>24&255),ut(n,9===n.level?2:n.strategy>=at||n.level<2?4:0),ut(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(ut(n,255&n.gzhead.extra.length),ut(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=L(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(ut(n,0),ut(n,0),ut(n,0),ut(n,0),ut(n,0),ut(n,9===n.level?2:n.strategy>=at||n.level<2?4:0),ut(n,3),n.status=113);else{let e=ot+(n.w_bits-8<<4)<<8,a=-1;a=n.strategy>=at||n.level<2?0:n.level<6?1:6===n.level?2:3,e|=a<<6,0!==n.strstart&&(e|=32),e+=31-e%31,n.status=113,wt(n,e),0!==n.strstart&&(wt(n,t.adler>>>16),wt(n,65535&t.adler)),t.adler=1}if(69===n.status)if(n.gzhead.extra){for(a=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>a&&(t.adler=L(t.adler,n.pending_buf,n.pending-a,a)),ft(t),a=n.pending,n.pending!==n.pending_buf_size));)ut(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>a&&(t.adler=L(t.adler,n.pending_buf,n.pending-a,a)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=L(t.adler,n.pending_buf,n.pending-a,a)),ft(t),a=n.pending,n.pending===n.pending_buf_size)){i=1;break}i=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,ut(n,i)}while(0!==i);n.gzhead.hcrc&&n.pending>a&&(t.adler=L(t.adler,n.pending_buf,n.pending-a,a)),0===i&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){a=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=L(t.adler,n.pending_buf,n.pending-a,a)),ft(t),a=n.pending,n.pending===n.pending_buf_size)){i=1;break}i=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,ut(n,i)}while(0!==i);n.gzhead.hcrc&&n.pending>a&&(t.adler=L(t.adler,n.pending_buf,n.pending-a,a)),0===i&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&ft(t),n.pending+2<=n.pending_buf_size&&(ut(n,255&t.adler),ut(n,t.adler>>8&255),t.adler=0,n.status=113)):n.status=113),0!==n.pending){if(ft(t),0===t.avail_out)return n.last_flush=-1,W}else if(0===t.avail_in&&ht(e)<=ht(s)&&e!==X)return lt(t,$);if(666===n.status&&0!==t.avail_in)return lt(t,$);if(0!==t.avail_in||0!==n.lookahead||e!==P&&666!==n.status){let a=n.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(ct(t,!1),0===t.strm.avail_out)?1:2})(n,e):n.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(ct(t,!1),0===t.strm.avail_out)?1:2})(n,e):yt[n.level].func(n,e);if(3!==a&&4!==a||(n.status=666),1===a||3===a)return 0===t.avail_out&&(n.last_flush=-1),W;if(2===a&&(e===Y?K(n):e!==J&&(H(n,0,0,!1),e===G&&(dt(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),ft(t),0===t.avail_out))return n.last_flush=-1,W}return e!==X?W:n.wrap<=0?q:(2===n.wrap?(ut(n,255&t.adler),ut(n,t.adler>>8&255),ut(n,t.adler>>16&255),ut(n,t.adler>>24&255),ut(n,255&t.total_in),ut(n,t.total_in>>8&255),ut(n,t.total_in>>16&255),ut(n,t.total_in>>24&255)):(wt(n,t.adler>>>16),wt(n,65535&t.adler)),ft(t),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?W:q)},deflateEnd:t=>{if(!t||!t.state)return Q;const e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&103!==e&&113!==e&&666!==e?lt(t,Q):(t.state=null,113===e?lt(t,V):W)},deflateSetDictionary:(t,e)=>{let a=e.length;if(!t||!t.state)return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=N(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=_t(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,W},deflateInfo:"pako deflate (from Nodeca project)"};const Zt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var St=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Zt(a,e)&&(t[e]=a[e])}}return t},Ut=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Dt=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Dt=!1}const Ot=new Uint8Array(256);for(let t=0;t<256;t++)Ot[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Ot[254]=Ot[254]=1;var Tt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},Nt=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Ot[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Dt)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Ft=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Ot[t[a]]>e?a:e};var Lt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const It=Object.prototype.toString,{Z_NO_FLUSH:Bt,Z_SYNC_FLUSH:Ct,Z_FULL_FLUSH:Ht,Z_FINISH:Mt,Z_OK:jt,Z_STREAM_END:Kt,Z_DEFAULT_COMPRESSION:Pt,Z_DEFAULT_STRATEGY:Yt,Z_DEFLATED:Gt}=B;function Xt(t){this.options=St({level:Pt,method:Gt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Yt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Lt,this.strm.avail_out=0;let a=Rt.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==jt)throw new Error(I[a]);if(e.header&&Rt.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Tt(e.dictionary):"[object ArrayBuffer]"===It.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=Rt.deflateSetDictionary(this.strm,t),a!==jt)throw new Error(I[a]);this._dict_set=!0}}function Jt(t,e){const a=new Xt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Xt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Mt:Bt,"string"==typeof t?a.input=Tt(t):"[object ArrayBuffer]"===It.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===Ct||s===Ht)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=Rt.deflate(a,s),n===Kt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=Rt.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===jt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Xt.prototype.onData=function(t){this.chunks.push(t)},Xt.prototype.onEnd=function(t){t===jt&&(this.result=Ut(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Wt={Deflate:Xt,deflate:Jt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Jt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Jt(t,e)},constants:B};var qt=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,b,g,p,m,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,b=(1<<E.lenbits)-1,g=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),p=u[f&b];e:for(;;){if(m=p>>>24,f>>>=m,c-=m,m=p>>>16&255,0===m)A[n++]=65535&p;else{if(!(16&m)){if(0==(64&m)){p=u[(65535&p)+(f&(1<<m)-1)];continue e}if(32&m){E.mode=12;break t}t.msg="invalid literal/length code",E.mode=30;break t}k=65535&p,m&=15,m&&(c<m&&(f+=z[a++]<<c,c+=8),k+=f&(1<<m)-1,f>>>=m,c-=m),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),p=w[f&g];a:for(;;){if(m=p>>>24,f>>>=m,c-=m,m=p>>>16&255,!(16&m)){if(0==(64&m)){p=w[(65535&p)+(f&(1<<m)-1)];continue a}t.msg="invalid distance code",E.mode=30;break t}if(v=65535&p,m&=15,c<m&&(f+=z[a++]<<c,c+=8,c<m&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<m)-1,v>o){t.msg="invalid distance too far back",E.mode=30;break t}if(f>>>=m,c-=m,m=n-s,v>m){if(m=v-m,m>h&&E.sane){t.msg="invalid distance too far back",E.mode=30;break t}if(y=0,x=_,0===d){if(y+=l-m,m<k){k-=m;do{A[n++]=_[y++]}while(--m);y=n-v,x=A}}else if(d<m){if(y+=l+d-m,m-=d,m<k){k-=m;do{A[n++]=_[y++]}while(--m);if(y=0,d<k){m=d,k-=m;do{A[n++]=_[y++]}while(--m);y=n-v,x=A}}}else if(y+=d-m,m<k){k-=m;do{A[n++]=_[y++]}while(--m);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const Qt=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Vt=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),$t=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),te=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ee=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,b=0,g=0,p=0,m=0,k=0,v=0,y=0,x=0,z=0,A=null,E=0;const R=new Uint16Array(16),Z=new Uint16Array(16);let S,U,D,O=null,T=0;for(w=0;w<=15;w++)R[w]=0;for(b=0;b<i;b++)R[e[a+b]]++;for(m=l,p=15;p>=1&&0===R[p];p--);if(m>p&&(m=p),0===p)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(g=1;g<p&&0===R[g];g++);for(m<g&&(m=g),y=1,w=1;w<=15;w++)if(y<<=1,y-=R[w],y<0)return-1;if(y>0&&(0===t||1!==p))return-1;for(Z[1]=0,w=1;w<15;w++)Z[w+1]=Z[w]+R[w];for(b=0;b<i;b++)0!==e[a+b]&&(r[Z[e[a+b]]++]=b);if(0===t?(A=O=r,u=19):1===t?(A=Qt,E-=257,O=Vt,T-=257,u=256):(A=$t,O=te,u=-1),z=0,b=0,w=g,c=s,k=m,v=0,_=-1,x=1<<m,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){S=w-v,r[b]<u?(U=0,D=r[b]):r[b]>u?(U=O[T+r[b]],D=A[E+r[b]]):(U=96,D=0),h=1<<w-v,d=1<<k,g=d;do{d-=h,n[c+(z>>v)+d]=S<<24|U<<16|D|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,b++,0==--R[w]){if(w===p)break;w=e[a+r[b]]}if(w>m&&(z&f)!==_){for(0===v&&(v=m),c+=g,k=w-v,y=1<<k;k+v<p&&(y-=R[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=m<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=m,0};const{Z_FINISH:ae,Z_BLOCK:ie,Z_TREES:ne,Z_OK:se,Z_STREAM_END:re,Z_NEED_DICT:oe,Z_STREAM_ERROR:le,Z_DATA_ERROR:he,Z_MEM_ERROR:de,Z_BUF_ERROR:_e,Z_DEFLATED:fe}=B,ce=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ue(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const we=t=>{if(!t||!t.state)return le;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=1,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,se},be=t=>{if(!t||!t.state)return le;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,we(t)},ge=(t,e)=>{let a;if(!t||!t.state)return le;const i=t.state;return e<0?(a=0,e=-e):(a=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?le:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,be(t))},pe=(t,e)=>{if(!t)return le;const a=new ue;t.state=a,a.window=null;const i=ge(t,e);return i!==se&&(t.state=null),i};let me,ke,ve=!0;const ye=t=>{if(ve){me=new Int32Array(512),ke=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ee(1,t.lens,0,288,me,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ee(2,t.lens,0,32,ke,0,t.work,{bits:5}),ve=!1}t.lencode=me,t.lenbits=9,t.distcode=ke,t.distbits=5},xe=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var ze={inflateReset:be,inflateReset2:ge,inflateResetKeep:we,inflateInit:t=>pe(t,15),inflateInit2:pe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,b,g,p,m,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return le;a=t.state,12===a.mode&&(a.mode=13),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=se;t:for(;;)switch(a.mode){case 1:if(0===a.wrap){a.mode=13;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=L(a.check,A,2,0),h=0,d=0,a.mode=2;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=30;break}if((15&h)!==fe){t.msg="unknown compression method",a.mode=30;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits)a.wbits=y;else if(y>a.wbits){t.msg="invalid window size",a.mode=30;break}a.dmax=1<<a.wbits,t.adler=a.check=1,a.mode=512&h?10:12,h=0,d=0;break;case 2:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==fe){t.msg="unknown compression method",a.mode=30;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=30;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&(A[0]=255&h,A[1]=h>>>8&255,a.check=L(a.check,A,2,0)),h=0,d=0,a.mode=3;case 3:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=L(a.check,A,4,0)),h=0,d=0,a.mode=4;case 4:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&(A[0]=255&h,A[1]=h>>>8&255,a.check=L(a.check,A,2,0)),h=0,d=0,a.mode=5;case 5:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&(A[0]=255&h,A[1]=h>>>8&255,a.check=L(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=6;case 6:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&(a.check=L(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=7;case 7:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&(a.check=L(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=8;case 8:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&(a.check=L(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=9;case 9:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=30;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=12;break;case 10:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=ce(h),h=0,d=0,a.mode=11;case 11:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,oe;t.adler=a.check=1,a.mode=12;case 12:if(e===ie||e===ne)break t;case 13:if(a.last){h>>>=7&d,d-=7&d,a.mode=27;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=14;break;case 1:if(ye(a),a.mode=20,e===ne){h>>>=2,d-=2;break t}break;case 2:a.mode=17;break;case 3:t.msg="invalid block type",a.mode=30}h>>>=2,d-=2;break;case 14:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=30;break}if(a.length=65535&h,h=0,d=0,a.mode=15,e===ne)break t;case 15:a.mode=16;case 16:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=12;break;case 17:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=30;break}a.have=0,a.mode=18;case 18:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ee(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=30;break}a.have=0,a.mode=19;case 19:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],b=z>>>24,g=z>>>16&255,p=65535&z,!(b<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(p<16)h>>>=b,d-=b,a.lens[a.have++]=p;else{if(16===p){for(R=b+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=b,d-=b,0===a.have){t.msg="invalid bit length repeat",a.mode=30;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===p){for(R=b+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=b,d-=b,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=b+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=b,d-=b,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=30;break}for(;c--;)a.lens[a.have++]=y}}if(30===a.mode)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=30;break}if(a.lenbits=9,E={bits:a.lenbits},x=ee(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=30;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ee(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=30;break}if(a.mode=20,e===ne)break t;case 20:a.mode=21;case 21:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,qt(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,12===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],b=z>>>24,g=z>>>16&255,p=65535&z,!(b<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g&&0==(240&g)){for(m=b,k=g,v=p;z=a.lencode[v+((h&(1<<m+k)-1)>>m)],b=z>>>24,g=z>>>16&255,p=65535&z,!(m+b<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,a.back+=m}if(h>>>=b,d-=b,a.back+=b,a.length=p,0===g){a.mode=26;break}if(32&g){a.back=-1,a.mode=12;break}if(64&g){t.msg="invalid literal/length code",a.mode=30;break}a.extra=15&g,a.mode=22;case 22:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=23;case 23:for(;z=a.distcode[h&(1<<a.distbits)-1],b=z>>>24,g=z>>>16&255,p=65535&z,!(b<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&g)){for(m=b,k=g,v=p;z=a.distcode[v+((h&(1<<m+k)-1)>>m)],b=z>>>24,g=z>>>16&255,p=65535&z,!(m+b<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,a.back+=m}if(h>>>=b,d-=b,a.back+=b,64&g){t.msg="invalid distance code",a.mode=30;break}a.offset=p,a.extra=15&g,a.mode=24;case 24:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=30;break}a.mode=25;case 25:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=30;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=21);break;case 26:if(0===l)break t;n[r++]=a.length,l--,a.mode=21;break;case 27:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,f&&(t.adler=a.check=a.flags?L(a.check,n,f,r-f):N(a.check,n,f,r-f)),f=l,(a.flags?h:ce(h))!==a.check){t.msg="incorrect data check",a.mode=30;break}h=0,d=0}a.mode=28;case 28:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=30;break}h=0,d=0}a.mode=29;case 29:x=re;break t;case 30:x=he;break t;case 31:return de;default:return le}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<30&&(a.mode<27||e!==ae))&&xe(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,a.wrap&&f&&(t.adler=a.check=a.flags?L(a.check,n,f,t.next_out-f):N(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(12===a.mode?128:0)+(20===a.mode||15===a.mode?256:0),(0===_&&0===f||e===ae)&&x===se&&(x=_e),x},inflateEnd:t=>{if(!t||!t.state)return le;let e=t.state;return e.window&&(e.window=null),t.state=null,se},inflateGetHeader:(t,e)=>{if(!t||!t.state)return le;const a=t.state;return 0==(2&a.wrap)?le:(a.head=e,e.done=!1,se)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return t&&t.state?(i=t.state,0!==i.wrap&&11!==i.mode?le:11===i.mode&&(n=1,n=N(n,e,a,0),n!==i.check)?he:(s=xe(t,e,a,a),s?(i.mode=31,de):(i.havedict=1,se))):le},inflateInfo:"pako inflate (from Nodeca project)"};var Ae=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const Ee=Object.prototype.toString,{Z_NO_FLUSH:Re,Z_FINISH:Ze,Z_OK:Se,Z_STREAM_END:Ue,Z_NEED_DICT:De,Z_STREAM_ERROR:Oe,Z_DATA_ERROR:Te,Z_MEM_ERROR:Ne}=B;function Fe(t){this.options=St({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Lt,this.strm.avail_out=0;let a=ze.inflateInit2(this.strm,e.windowBits);if(a!==Se)throw new Error(I[a]);if(this.header=new Ae,ze.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Tt(e.dictionary):"[object ArrayBuffer]"===Ee.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=ze.inflateSetDictionary(this.strm,e.dictionary),a!==Se)))throw new Error(I[a])}Fe.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Ze:Re,"[object ArrayBuffer]"===Ee.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=ze.inflate(a,r),s===De&&n&&(s=ze.inflateSetDictionary(a,n),s===Se?s=ze.inflate(a,r):s===Te&&(s=De));a.avail_in>0&&s===Ue&&a.state.wrap>0&&0!==t[a.next_in];)ze.inflateReset(a),s=ze.inflate(a,r);switch(s){case Oe:case Te:case De:case Ne:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Ue))if("string"===this.options.to){let t=Ft(a.output,a.next_out),e=a.next_out-t,n=Nt(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Se||0!==o){if(s===Ue)return s=ze.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},Fe.prototype.onData=function(t){this.chunks.push(t)},Fe.prototype.onEnd=function(t){t===Se&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ut(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Le,deflate:Ie,deflateRaw:Be,gzip:Ce}=Wt;var He=Le,Me=B,je=new(function(){function t(){this.init()}return t.prototype.init=function(){this.added=0,this.deflate=new He,this.deflate.push("[",Me.Z_NO_FLUSH)},t.prototype.addEvent=function(t){if(t){var e=this.added>0?",":"";this.deflate.push(e+JSON.stringify(t),Me.Z_NO_FLUSH),this.added++}},t.prototype.finish=function(){if(this.deflate.push("]",Me.Z_FINISH),this.deflate.err)throw this.deflate.err;var t=this.deflate.result;return this.init(),t},t}()),Ke={init:function(){return je.init(),""},addEvent:function(t){return je.addEvent(t),""},finish:function(){return je.finish()}};addEventListener("message",(function(t){var e=t.data.method,a=t.data.id,i=(t.data.args?JSON.parse(t.data.args):[])[0];if(e in Ke&&"function"==typeof Ke[e])try{var n=Ke[e](i);postMessage({id:a,method:e,success:!0,response:n})}catch(t){postMessage({id:a,method:e,success:!1,response:t}),console.error(t)}}));`;
function createEventBuffer(_a) {
  var useCompression = _a.useCompression;
  if (useCompression && window.Worker) {
    var workerBlob = new Blob([workerString]);
    var workerUrl = URL.createObjectURL(workerBlob);
    try {
      logger.log('Using compression worker');
      var worker = new Worker(workerUrl);
      if (worker) {
        return new EventBufferCompressionWorker(worker);
      } else {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["captureException"])(new Error('Unable to create compression worker'));
      }
    } catch (_b) {
      // catch and ignore, fallback to simple event buffer
    }
    logger.log('Falling back to simple event buffer');
  }
  logger.log('Using simple buffer');
  return new EventBufferArray();
}
var EventBufferArray = /** @class */function () {
  function EventBufferArray() {
    this.events = [];
  }
  EventBufferArray.prototype.destroy = function () {
    this.events = [];
  };
  Object.defineProperty(EventBufferArray.prototype, "length", {
    get: function () {
      return this.events.length;
    },
    enumerable: false,
    configurable: true
  });
  EventBufferArray.prototype.addEvent = function (event, isCheckout) {
    if (isCheckout) {
      this.events = [event];
      return;
    }
    this.events.push(event);
  };
  EventBufferArray.prototype.finish = function () {
    var _this = this;
    return new Promise(function (resolve) {
      // Make a copy of the events array reference and immediately clear the
      // events member so that we do not lose new events while uploading
      // attachment.
      var eventsRet = _this.events;
      _this.events = [];
      resolve(JSON.stringify(eventsRet));
    });
  };
  return EventBufferArray;
}();
// exporting for testing
var EventBufferCompressionWorker = /** @class */function () {
  function EventBufferCompressionWorker(worker) {
    var _this = this;
    this.eventBufferItemLength = 0;
    this._id = 0;
    this.sendEventToWorker = function (event) {
      var promise = _this.postMessage({
        id: _this.id,
        method: 'addEvent',
        args: [event]
      });
      // XXX: See note in `get length()`
      _this.eventBufferItemLength++;
      return promise;
    };
    this.finishRequest = function (id) {
      return __awaiter(_this, void 0, void 0, function () {
        var promise;
        return __generator(this, function (_a) {
          promise = this.postMessage({
            id: id,
            method: 'finish',
            args: []
          });
          // XXX: See note in `get length()`
          this.eventBufferItemLength = 0;
          return [2 /*return*/, promise];
        });
      });
    };
    this.worker = worker;
  }
  Object.defineProperty(EventBufferCompressionWorker.prototype, "id", {
    /**
     * Read-only incrementing counter
     */
    get: function () {
      return this._id++;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Post message to worker and wait for response before resolving promise.
   */
  EventBufferCompressionWorker.prototype.postMessage = function (_a) {
    var _this = this;
    var id = _a.id,
      method = _a.method,
      args = _a.args;
    return new Promise(function (resolve, reject) {
      var _a, _b;
      var listener = function (_a) {
        var _b;
        var data = _a.data;
        if (data.method !== method) {
          return;
        }
        // There can be multiple listeners for a single method, the id ensures
        // that the response matches the caller.
        if (data.id !== id) {
          return;
        }
        // At this point, we'll always want to remove listener regardless of result status
        (_b = _this.worker) === null || _b === void 0 ? void 0 : _b.removeEventListener('message', listener);
        if (!data.success) {
          // TODO: Do some error handling, not sure what
          logger.error(data.response);
          reject(new Error('Error in compression worker'));
          return;
        }
        resolve(data.response);
      };
      var stringifiedArgs;
      try {
        stringifiedArgs = JSON.stringify(args);
      } catch (err) {
        console.error(err);
        stringifiedArgs = '[]';
      }
      // Note: we can't use `once` option because it's possible it needs to
      // listen to multiple messages
      (_a = _this.worker) === null || _a === void 0 ? void 0 : _a.addEventListener('message', listener);
      (_b = _this.worker) === null || _b === void 0 ? void 0 : _b.postMessage({
        id: id,
        method: method,
        args: stringifiedArgs
      });
    });
  };
  EventBufferCompressionWorker.prototype.init = function () {
    this.postMessage({
      id: this.id,
      method: 'init',
      args: []
    });
    logger.log('Initialized compression worker');
  };
  EventBufferCompressionWorker.prototype.destroy = function () {
    var _a;
    logger.log('Destroying compression worker');
    (_a = this.worker) === null || _a === void 0 ? void 0 : _a.terminate();
    this.worker = null;
  };
  Object.defineProperty(EventBufferCompressionWorker.prototype, "length", {
    /**
     * Note that this may not reflect what is actually in the event buffer. This
     * is only a local count of the buffer size since `addEvent` is async.
     */
    get: function () {
      return this.eventBufferItemLength;
    },
    enumerable: false,
    configurable: true
  });
  EventBufferCompressionWorker.prototype.addEvent = function (event, isCheckout) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!isCheckout) return [3 /*break*/, 2];
            // This event is a checkout, make sure worker buffer is cleared before
            // proceeding.
            return [4 /*yield*/, this.postMessage({
              id: this.id,
              method: 'init',
              args: []
            })];
          case 1:
            // This event is a checkout, make sure worker buffer is cleared before
            // proceeding.
            _a.sent();
            _a.label = 2;
          case 2:
            return [2 /*return*/, this.sendEventToWorker(event)];
        }
      });
    });
  };
  EventBufferCompressionWorker.prototype.finish = function () {
    return this.finishRequest(this.id);
  };
  return EventBufferCompressionWorker;
}();
var BASE_RETRY_INTERVAL = 5000;
var MAX_RETRY_COUNT = 3;
var UNABLE_TO_SEND_REPLAY = 'Unable to send Replay';
var MEDIA_SELECTORS = 'img,image,svg,path,rect,area,video,object,picture,embed,map,audio';
var _initialized = false;
var isBrowser = typeof window !== 'undefined';
var Replay = /** @class */function () {
  function Replay(_a) {
    if (_a === void 0) {
      _a = {};
    }
    var _this = this;
    var _b = _a.flushMinDelay,
      flushMinDelay = _b === void 0 ? 5000 : _b,
      _c = _a.flushMaxDelay,
      flushMaxDelay = _c === void 0 ? 15000 : _c,
      _d = _a.initialFlushDelay,
      initialFlushDelay = _d === void 0 ? 5000 : _d,
      _e = _a.stickySession,
      stickySession = _e === void 0 ? true : _e,
      _f = _a.useCompression,
      useCompression = _f === void 0 ? true : _f,
      _g = _a.sessionSampleRate,
      sessionSampleRate = _g === void 0 ? DEFAULT_SESSION_SAMPLE_RATE : _g,
      _h = _a.errorSampleRate,
      errorSampleRate = _h === void 0 ? DEFAULT_ERROR_SAMPLE_RATE : _h,
      _j = _a.maskAllText,
      maskAllText = _j === void 0 ? true : _j,
      _k = _a.maskAllInputs,
      maskAllInputs = _k === void 0 ? true : _k,
      _l = _a.blockAllMedia,
      blockAllMedia = _l === void 0 ? true : _l,
      _m = _a.blockClass,
      blockClass = _m === void 0 ? 'sentry-block' : _m,
      _o = _a.ignoreClass,
      ignoreClass = _o === void 0 ? 'sentry-ignore' : _o,
      _p = _a.maskTextClass,
      maskTextClass = _p === void 0 ? 'sentry-mask' : _p,
      _q = _a.blockSelector,
      blockSelector = _q === void 0 ? '[data-sentry-block]' : _q,
      replaysSamplingRate = _a.replaysSamplingRate,
      captureOnlyOnError = _a.captureOnlyOnError,
      recordingOptions = __rest(_a, ["flushMinDelay", "flushMaxDelay", "initialFlushDelay", "stickySession", "useCompression", "sessionSampleRate", "errorSampleRate", "maskAllText", "maskAllInputs", "blockAllMedia", "blockClass", "ignoreClass", "maskTextClass", "blockSelector", "replaysSamplingRate", "captureOnlyOnError"]);
    /**
     * @inheritDoc
     */
    this.name = Replay.id;
    /**
     * List of PerformanceEntry from PerformanceObserver
     */
    this.performanceEvents = [];
    this.performanceObserver = null;
    this.retryCount = 0;
    this.retryInterval = BASE_RETRY_INTERVAL;
    this.flushLock = null;
    /**
     * Timestamp of the last user activity. This lives across sessions.
     */
    this.lastActivity = new Date().getTime();
    /**
     * Is the integration currently active?
     */
    this.isEnabled = false;
    /**
     * Paused is a state where:
     * - DOM Recording is not listening at all
     * - Nothing will be added to event buffer (e.g. core SDK events)
     */
    this.isPaused = false;
    /**
     * Integration will wait until an error occurs before creating and sending a
     * replay.
     */
    this.waitForError = false;
    /**
     * Have we attached listeners to the core SDK?
     * Note we have to track this as there is no way to remove instrumentation handlers.
     */
    this.hasInitializedCoreListeners = false;
    /**
     * Function to stop recording
     */
    this.stopRecording = null;
    this.context = {
      errorIds: new Set(),
      traceIds: new Set(),
      urls: [],
      earliestEvent: null
    };
    /**
     * Core Sentry SDK global event handler. Attaches `replayId` to all [non-replay]
     * events as a tag. Also handles the case where we only want to capture a reply
     * when an error occurs.
     **/
    this.handleGlobalEvent = function (event) {
      var _a, _b, _c, _d;
      // Do not apply replayId to the root event
      if (
      // @ts-expect-error new event type
      event.type === REPLAY_EVENT_NAME) {
        // Replays have separate set of breadcrumbs, do not include breadcrumbs
        // from core SDK
        delete event.breadcrumbs;
        return event;
      }
      event.tags = __assign(__assign({}, event.tags), {
        replayId: (_a = _this.session) === null || _a === void 0 ? void 0 : _a.id
      });
      if (event.type === 'transaction') {
        _this.context.traceIds.add(String(((_b = event.contexts) === null || _b === void 0 ? void 0 : _b.trace.trace_id) || ''));
        return event;
      }
      // XXX: Is it safe to assume that all other events are error events?
      // @ts-expect-error: Type 'undefined' is not assignable to type 'string'.ts(2345)
      _this.context.errorIds.add(event.event_id);
      var exc = (_d = (_c = event.exception) === null || _c === void 0 ? void 0 : _c.values) === null || _d === void 0 ? void 0 : _d[0];
      addInternalBreadcrumb({
        message: "Tagging event (".concat(event.event_id, ") - ").concat(event.message, " - ").concat((exc === null || exc === void 0 ? void 0 : exc.type) || 'Unknown', ": ").concat((exc === null || exc === void 0 ? void 0 : exc.value) || 'n/a')
      });
      // Need to be very careful that this does not cause an infinite loop
      if (_this.waitForError && event.exception && event.message !== UNABLE_TO_SEND_REPLAY // ignore this error because otherwise we could loop indefinitely with trying to capture replay and failing
      ) {
        setTimeout(function () {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4 /*yield*/, this.flushImmediate()];
                case 1:
                  _a.sent();
                  if (this.stopRecording) {
                    this.stopRecording();
                    // Reset all "capture on error" configuration before
                    // starting a new recording
                    delete this.recordingOptions.checkoutEveryNms;
                    this.waitForError = false;
                    this.startRecording();
                  }
                  return [2 /*return*/];
              }
            });
          });
        });
      }

      return event;
    };
    /**
     * Handler for recording events.
     *
     * Adds to event buffer, and has varying flushing behaviors if the event was a checkout.
     */
    this.handleRecordingEmit = function (event, isCheckout) {
      // If this is false, it means session is expired, create and a new session and wait for checkout
      if (!_this.checkAndHandleExpiredSession()) {
        logger.error(new Error('Received replay event after session expired.'));
        return;
      }
      _this.addUpdate(function () {
        var _a, _b;
        // We need to clear existing events on a checkout, otherwise they are
        // incremental event updates and should be appended
        _this.addEvent(event, isCheckout);
        // Different behavior for full snapshots (type=2), ignore other event types
        // See https://github.com/rrweb-io/rrweb/blob/d8f9290ca496712aa1e7d472549480c4e7876594/packages/rrweb/src/types.ts#L16
        if (event.type !== 2) {
          return false;
        }
        // If there is a previousSessionId after a full snapshot occurs, then
        // the replay session was started due to session expiration. The new session
        // is started before triggering a new checkout and contains the id
        // of the previous session. Do not immediately flush in this case
        // to avoid capturing only the checkout and instead the replay will
        // be captured if they perform any follow-up actions.
        if ((_a = _this.session) === null || _a === void 0 ? void 0 : _a.previousSessionId) {
          return true;
        }
        // If the full snapshot is due to an initial load, we will not have
        // a previous session ID. In this case, we want to buffer events
        // for a set amount of time before flushing. This can help avoid
        // capturing replays of users that immediately close the window.
        setTimeout(function () {
          return _this.conditionalFlush();
        }, _this.options.initialFlushDelay);
        // Cancel any previously debounced flushes to ensure there are no [near]
        // simultaneous flushes happening. The latter request should be
        // insignificant in this case, so wait for additional user interaction to
        // trigger a new flush.
        //
        // This can happen because there's no guarantee that a recording event
        // happens first. e.g. a mouse click can happen and trigger a debounced
        // flush before the checkout.
        (_b = _this.debouncedFlush) === null || _b === void 0 ? void 0 : _b.cancel();
        return true;
      });
    };
    /**
     * Handle when visibility of the page content changes. Opening a new tab will
     * cause the state to change to hidden because of content of current page will
     * be hidden. Likewise, moving a different window to cover the contents of the
     * page will also trigger a change to a hidden state.
     */
    this.handleVisibilityChange = function () {
      if (document.visibilityState === 'visible') {
        _this.doChangeToForegroundTasks();
      } else {
        _this.doChangeToBackgroundTasks();
      }
    };
    /**
     * Handle when page is blurred
     */
    this.handleWindowBlur = function () {
      var breadcrumb = createBreadcrumb({
        category: 'ui.blur'
      });
      // Do not count blur as a user action -- it's part of the process of them
      // leaving the page
      _this.doChangeToBackgroundTasks(breadcrumb);
    };
    /**
     * Handle when page is focused
     */
    this.handleWindowFocus = function () {
      var breadcrumb = createBreadcrumb({
        category: 'ui.focus'
      });
      // Do not count focus as a user action -- instead wait until they focus and
      // interactive with page
      _this.doChangeToForegroundTasks(breadcrumb);
    };
    /**
     * Handler for Sentry Core SDK events.
     *
     * These specific events will create span-like objects in the recording.
     *
     */
    this.handleCoreSpanListener = function (type) {
      return function (handlerData) {
        if (!_this.isEnabled) {
          return;
        }
        var handler = getSpanHandler(type);
        var result = handler(handlerData);
        if (result === null) {
          return;
        }
        if (type === 'history') {
          // Need to collect visited URLs
          _this.context.urls.push(result.name);
          _this.updateUserActivity();
          _this.triggerUserActivity();
        }
        _this.addUpdate(function () {
          _this.createPerformanceSpans([result]);
          // Returning true will cause `addUpdate` to not flush
          // We do not want network requests to cause a flush. This will prevent
          // recurring/polling requests from keeping the replay session alive.
          return ['xhr', 'fetch'].includes(type);
        });
      };
    };
    /**
     * Handler for Sentry Core SDK events.
     *
     * These events will create breadcrumb-like objects in the recording.
     */
    this.handleCoreBreadcrumbListener = function (type) {
      return function (handlerData) {
        if (!_this.isEnabled) {
          return;
        }
        var handler = getBreadcrumbHandler(type);
        var result = handler(handlerData);
        if (result === null) {
          return;
        }
        if (result.category === 'sentry.transaction') {
          return;
        }
        if (result.category === 'ui.click') {
          _this.triggerUserActivity();
        } else {
          _this.checkAndHandleExpiredSession();
        }
        _this.addUpdate(function () {
          _this.addEvent({
            type: rrweb__WEBPACK_IMPORTED_MODULE_3__["EventType"].Custom,
            // TODO: We were converting from ms to seconds for breadcrumbs, spans,
            // but maybe we should just keep them as milliseconds
            timestamp: (result.timestamp || 0) * 1000,
            data: {
              tag: 'breadcrumb',
              payload: result
            }
          });
          // Do not flush after console log messages
          return result.category === 'console';
        });
      };
    };
    /**
     * Keep a list of performance entries that will be sent with a replay
     */
    this.handlePerformanceObserver = function (list) {
      // For whatever reason the observer was returning duplicate navigation
      // entries (the other entry types were not duplicated).
      var newPerformanceEntries = dedupePerformanceEntries(_this.performanceEvents, list.getEntries());
      _this.performanceEvents = newPerformanceEntries;
    };
    /**
     * Flush recording data to Sentry. Creates a lock so that only a single flush
     * can be active at a time. Do not call this directly.
     */
    this.flush = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        var _a, _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              if (!this.isEnabled) {
                // This is just a precaution, there should be no listeners that would
                // cause a flush.
                return [2 /*return*/];
              }

              if (!this.checkAndHandleExpiredSession()) {
                logger.error(new Error('Attempting to finish replay event after session expired.'));
                return [2 /*return*/];
              }

              if (!((_a = this.session) === null || _a === void 0 ? void 0 : _a.id)) {
                console.error(new Error('[Sentry]: No transaction, no replay'));
                return [2 /*return*/];
              }
              // A flush is about to happen, cancel any queued flushes
              (_b = this.debouncedFlush) === null || _b === void 0 ? void 0 : _b.cancel();
              if (!!this.flushLock) return [3 /*break*/, 2];
              this.flushLock = this.runFlush();
              return [4 /*yield*/, this.flushLock];
            case 1:
              _c.sent();
              this.flushLock = null;
              return [2 /*return*/];
            case 2:
              _c.trys.push([2, 4, 5, 6]);
              return [4 /*yield*/, this.flushLock];
            case 3:
              _c.sent();
              return [3 /*break*/, 6];
            case 4:
              err_1 = _c.sent();
              console.error(err_1);
              return [3 /*break*/, 6];
            case 5:
              this.debouncedFlush();
              return [7 /*endfinally*/];
            case 6:
              return [2 /*return*/];
          }
        });
      });
    };

    this.recordingOptions = __assign({
      maskAllInputs: maskAllInputs,
      blockClass: blockClass,
      ignoreClass: ignoreClass,
      maskTextClass: maskTextClass,
      blockSelector: blockSelector
    }, recordingOptions);
    var usingDeprecatedReplaysSamplingRate = replaysSamplingRate !== undefined;
    var usingDeprecatedCaptureOnlyOnError = captureOnlyOnError !== undefined;
    this.options = {
      flushMinDelay: flushMinDelay,
      flushMaxDelay: flushMaxDelay,
      stickySession: stickySession,
      initialFlushDelay: initialFlushDelay,
      sessionSampleRate: usingDeprecatedReplaysSamplingRate ? replaysSamplingRate : sessionSampleRate,
      errorSampleRate: usingDeprecatedCaptureOnlyOnError ? 1.0 : errorSampleRate,
      useCompression: useCompression,
      maskAllText: maskAllText,
      blockAllMedia: blockAllMedia
    };
    // TODO(deprecated): Maintain backwards compatibility for alpha users
    if (usingDeprecatedCaptureOnlyOnError) {
      console.warn('[@sentry/replay]: The `captureOnlyOnError` option is deprecated! Please configure `errorSampleRate` instead.');
    }
    if (usingDeprecatedReplaysSamplingRate) {
      console.warn('[@sentry/replay]: The `replaysSamplingRate` option is deprecated! Please configure `sessionSampleRate` instead.');
    }
    if (this.options.maskAllText) {
      // `maskAllText` is a more user friendly option to configure
      // `maskTextSelector`. This means that all nodes will have their text
      // content masked.
      this.recordingOptions.maskTextSelector = '*';
    }
    if (this.options.blockAllMedia) {
      // `blockAllMedia` is a more user friendly option to configure blocking
      // embedded media elements
      this.recordingOptions.blockSelector = !this.recordingOptions.blockSelector ? MEDIA_SELECTORS : "".concat(this.recordingOptions.blockSelector, ",").concat(MEDIA_SELECTORS);
    }
    this.debouncedFlush = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
      return _this.flush();
    }, this.options.flushMinDelay, {
      maxWait: this.options.flushMaxDelay
    });
    if (isBrowser && _initialized) {
      var error = new Error('Multiple Sentry Session Replay instances are not supported');
      captureInternalException(error);
      throw error;
    }
    _initialized = true;
  }
  /**
   * Because we create a transaction in `setupOnce`, we can potentially create a
   * transaction before some native SDK integrations have run and applied their
   * own global event processor. An example is:
   * https://github.com/getsentry/sentry-javascript/blob/b47ceafbdac7f8b99093ce6023726ad4687edc48/packages/browser/src/integrations/useragent.ts
   *
   * So we call `this.setup` in next event loop as a workaround to wait for
   * other global event processors to finish
   */
  Replay.prototype.setupOnce = function () {
    var _this = this;
    if (!isBrowser) {
      return;
    }
    // XXX: See method comments above
    window.setTimeout(function () {
      return _this.start();
    });
  };
  /**
   * Initializes the plugin.
   *
   * Creates or loads a session, attaches listeners to varying events (DOM, PerformanceObserver, Recording, Sentry SDK, etc)
   */
  Replay.prototype.start = function () {
    if (!isBrowser) {
      return;
    }
    this.setInitialState();
    this.loadSession({
      expiry: SESSION_IDLE_DURATION
    });
    // If there is no session, then something bad has happened - can't continue
    if (!this.session) {
      captureInternalException(new Error('Invalid session'));
      return;
    }
    if (!this.session.sampled) {
      // If session was not sampled, then we do not initialize the integration at all.
      return;
    }
    // Modify recording options to checkoutEveryNthSecond if
    // sampling for error replay. This is because we don't know
    // when an error will occur, so we need to keep a buffer of
    // replay events.
    if (this.session.sampled === 'error') {
      // Checkout every minute, meaning we only get up-to one minute of events before the error happens
      this.recordingOptions.checkoutEveryNms = 60000;
      this.waitForError = true;
    }
    // setup() is generally called on page load or manually - in both cases we
    // should treat it as an activity
    this.updateSessionActivity();
    this.eventBuffer = createEventBuffer({
      useCompression: Boolean(this.options.useCompression)
    });
    this.addListeners();
    this.startRecording();
    this.isEnabled = true;
  };
  /**
   * Start recording.
   *
   * Note that this will cause a new DOM checkout
   */
  Replay.prototype.startRecording = function () {
    this.stopRecording = Object(rrweb__WEBPACK_IMPORTED_MODULE_3__["record"])(__assign(__assign({}, this.recordingOptions), {
      emit: this.handleRecordingEmit
    }));
  };
  /**
   * Currently, this needs to be manually called (e.g. for tests). Sentry SDK does not support a teardown
   */
  Replay.prototype.stop = function () {
    var _a, _b;
    if (!isBrowser) {
      return;
    }
    logger.log('Stopping Replays');
    this.isEnabled = false;
    this.removeListeners();
    (_a = this.stopRecording) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this.eventBuffer) === null || _b === void 0 ? void 0 : _b.destroy();
    this.eventBuffer = null;
  };
  /**
   * Pause some replay functionality. See comments for `isPaused`.
   * This differs from stop as this only stops DOM recording, it is
   * not as thorough of a shutdown as `stop()`. */
  Replay.prototype.pause = function () {
    this.isPaused = true;
    if (this.stopRecording) {
      this.stopRecording();
      this.stopRecording = undefined;
    }
  };
  /**
   * Resumes recording, see notes for `pause().
   *
   * Note that calling `startRecording()` here will cause a
   * new DOM checkout.`
   */
  Replay.prototype.resume = function () {
    this.isPaused = false;
    this.startRecording();
  };
  Replay.prototype.clearSession = function () {
    deleteSession();
    this.session = undefined;
  };
  /**
   * Loads a session from storage, or creates a new one if it does not exist or
   * is expired.
   */
  Replay.prototype.loadSession = function (_a) {
    var _b, _c;
    var expiry = _a.expiry;
    var _d = getSession({
        expiry: expiry,
        stickySession: Boolean(this.options.stickySession),
        currentSession: this.session,
        sessionSampleRate: this.options.sessionSampleRate,
        errorSampleRate: this.options.errorSampleRate
      }),
      type = _d.type,
      session = _d.session;
    // If session was newly created (i.e. was not loaded from storage), then
    // enable flag to create the root replay
    if (type === 'new') {
      this.setInitialState();
    }
    if (session.id !== ((_b = this.session) === null || _b === void 0 ? void 0 : _b.id)) {
      session.previousSessionId = (_c = this.session) === null || _c === void 0 ? void 0 : _c.id;
    }
    this.session = session;
  };
  /**
   * Capture some initial state that can change throughout the lifespan of the
   * replay. This is required because otherwise they would be captured at the
   * first flush.
   */
  Replay.prototype.setInitialState = function () {
    var urlPath = "".concat(window.location.pathname).concat(window.location.hash).concat(window.location.search);
    var url = "".concat(window.location.origin).concat(urlPath);
    this.performanceEvents = [];
    // Reset context as well
    this.clearContext();
    this.initialState = {
      timestamp: new Date().getTime(),
      url: url
    };
    this.context.urls.push(url);
  };
  /**
   * Adds listeners to record events for the replay
   */
  Replay.prototype.addListeners = function () {
    var _this = this;
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    window.addEventListener('blur', this.handleWindowBlur);
    window.addEventListener('focus', this.handleWindowFocus);
    // There is no way to remove these listeners, so ensure they are only added once
    if (!this.hasInitializedCoreListeners) {
      // Listeners from core SDK //
      var scope = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getScope();
      scope === null || scope === void 0 ? void 0 : scope.addScopeListener(this.handleCoreBreadcrumbListener('scope'));
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addInstrumentationHandler"])('dom', this.handleCoreBreadcrumbListener('dom'));
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addInstrumentationHandler"])('fetch', this.handleCoreSpanListener('fetch'));
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addInstrumentationHandler"])('xhr', this.handleCoreSpanListener('xhr'));
      Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["addInstrumentationHandler"])('history', this.handleCoreSpanListener('history'));
      // Tag all (non replay) events that get sent to Sentry with the current
      // replay ID so that we can reference them later in the UI
      Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["addGlobalEventProcessor"])(this.handleGlobalEvent);
      this.hasInitializedCoreListeners = true;
    }
    // PerformanceObserver //
    if (!('PerformanceObserver' in window)) {
      return;
    }
    this.performanceObserver = new PerformanceObserver(this.handlePerformanceObserver);
    // Observe almost everything for now (no mark/measure)
    ['element', 'event', 'first-input', 'largest-contentful-paint', 'layout-shift', 'longtask', 'navigation', 'paint', 'resource'].forEach(function (type) {
      var _a;
      try {
        (_a = _this.performanceObserver) === null || _a === void 0 ? void 0 : _a.observe({
          type: type,
          buffered: true
        });
      } catch (_b) {
        // This can throw if an entry type is not supported in the browser.
        // Ignore these errors.
      }
    });
  };
  /**
   * Cleans up listeners that were created in `addListeners`
   */
  Replay.prototype.removeListeners = function () {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    window.removeEventListener('blur', this.handleWindowBlur);
    window.removeEventListener('focus', this.handleWindowFocus);
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
      this.performanceObserver = null;
    }
  };
  /**
   * We want to batch uploads of replay events. Save events only if
   * `<flushMinDelay>` milliseconds have elapsed since the last event
   * *OR* if `<flushMaxDelay>` milliseconds have elapsed.
   *
   * Accepts a callback to perform side-effects and returns true to stop batch
   * processing and hand back control to caller.
   */
  Replay.prototype.addUpdate = function (cb) {
    // We need to always run `cb` (e.g. in the case of `this.waitForError == true`)
    var cbResult = cb === null || cb === void 0 ? void 0 : cb();
    // If this option is turned on then we will only want to call `flush`
    // explicitly
    if (this.waitForError) {
      return;
    }
    // If callback is true, we do not want to continue with flushing -- the
    // caller will need to handle it.
    if (cbResult === true) {
      return;
    }
    // addUpdate is called quite frequently - use debouncedFlush so that it
    // respects the flush delays and does not flush immediately
    this.debouncedFlush();
  };
  /**
   * Tasks to run when we consider a page to be hidden (via blurring and/or visibility)
   */
  Replay.prototype.doChangeToBackgroundTasks = function (breadcrumb) {
    if (!this.session) {
      return;
    }
    var expired = isSessionExpired(this.session, VISIBILITY_CHANGE_TIMEOUT);
    if (breadcrumb && !expired) {
      this.createCustomBreadcrumb(breadcrumb);
    }
    // Send replay when the page/tab becomes hidden. There is no reason to send
    // replay if it becomes visible, since no actions we care about were done
    // while it was hidden
    this.conditionalFlush();
  };
  /**
   * Tasks to run when we consider a page to be visible (via focus and/or visibility)
   */
  Replay.prototype.doChangeToForegroundTasks = function (breadcrumb) {
    if (!this.session) {
      return;
    }
    var isSessionActive = this.checkAndHandleExpiredSession({
      expiry: VISIBILITY_CHANGE_TIMEOUT
    });
    if (!isSessionActive) {
      // If the user has come back to the page within VISIBILITY_CHANGE_TIMEOUT
      // ms, we will re-use the existing session, otherwise create a new
      // session
      logger.log('Document has become active, but session has expired');
      return;
    }
    if (breadcrumb) {
      this.createCustomBreadcrumb(breadcrumb);
    }
  };
  /**
   * Trigger rrweb to take a full snapshot which will cause this plugin to
   * create a new Replay event.
   */
  Replay.prototype.triggerFullSnapshot = function () {
    logger.log('Taking full rrweb snapshot');
    rrweb__WEBPACK_IMPORTED_MODULE_3__["record"].takeFullSnapshot(true);
  };
  /**
   * Add an event to the event buffer
   */
  Replay.prototype.addEvent = function (event, isCheckout) {
    var _a;
    if (!this.eventBuffer) {
      // This implies that `isEnabled` is false
      return;
    }
    if (this.isPaused) {
      // Do not add to event buffer when recording is paused
      return;
    }
    // TODO: sadness -- we will want to normalize timestamps to be in ms -
    // requires coordination with frontend
    var isMs = event.timestamp > 9999999999;
    var timestampInMs = isMs ? event.timestamp : event.timestamp * 1000;
    // Throw out events that happen more than 5 minutes ago. This can happen if
    // page has been left open and idle for a long period of time and user
    // comes back to trigger a new session. The performance entries rely on
    // `performance.timeOrigin`, which is when the page first opened.
    if (timestampInMs + SESSION_IDLE_DURATION < new Date().getTime()) {
      return;
    }
    // Only record earliest event if a new session was created, otherwise it
    // shouldn't be relevant
    if (((_a = this.session) === null || _a === void 0 ? void 0 : _a.segmentId) === 0 && (!this.context.earliestEvent || timestampInMs < this.context.earliestEvent)) {
      this.context.earliestEvent = timestampInMs;
    }
    this.eventBuffer.addEvent(event, isCheckout);
  };
  /**
   * Update user activity (across session lifespans)
   */
  Replay.prototype.updateUserActivity = function (lastActivity) {
    if (lastActivity === void 0) {
      lastActivity = new Date().getTime();
    }
    this.lastActivity = lastActivity;
  };
  /**
   * Updates the session's last activity timestamp
   */
  Replay.prototype.updateSessionActivity = function (lastActivity) {
    if (lastActivity === void 0) {
      lastActivity = new Date().getTime();
    }
    if (this.session) {
      this.session.lastActivity = lastActivity;
    }
  };
  /**
   * Updates the user activity timestamp and resumes recording. This should be called in an event handler for a user action that we consider as the user being "active" (e.g. a mouse click).
   *
   */
  Replay.prototype.triggerUserActivity = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.updateUserActivity();
        // This case means that recording was once stopped due to inactivity.
        // Ensure that recording is resumed.
        if (!this.stopRecording) {
          // Create a new session, otherwise when the user action is flushed, it will get rejected due to an expired session.
          this.loadSession({
            expiry: SESSION_IDLE_DURATION
          });
          // Note: This will cause a new DOM checkout
          this.resume();
          return [2 /*return*/];
        }
        // Otherwise... recording was never suspended, continue as normalish
        this.checkAndHandleExpiredSession();
        this.updateSessionActivity();
        return [2 /*return*/];
      });
    });
  };
  /**
   * Helper to create (and buffer) a replay breadcrumb from a core SDK breadcrumb
   */
  Replay.prototype.createCustomBreadcrumb = function (breadcrumb) {
    var _this = this;
    this.addUpdate(function () {
      _this.addEvent({
        type: rrweb__WEBPACK_IMPORTED_MODULE_3__["EventType"].Custom,
        timestamp: breadcrumb.timestamp || 0,
        data: {
          tag: 'breadcrumb',
          payload: breadcrumb
        }
      });
    });
  };
  /**
   * Create a "span" for each performance entry. The parent transaction is `this.replayEvent`.
   */
  Replay.prototype.createPerformanceSpans = function (entries) {
    var _this = this;
    return Promise.all(entries.map(function (_a) {
      var type = _a.type,
        start = _a.start,
        end = _a.end,
        name = _a.name,
        data = _a.data;
      return _this.addEvent({
        type: rrweb__WEBPACK_IMPORTED_MODULE_3__["EventType"].Custom,
        timestamp: start,
        data: {
          tag: 'performanceSpan',
          payload: {
            op: type,
            description: name,
            startTimestamp: start,
            endTimestamp: end,
            data: data
          }
        }
      });
    }));
  };
  /**
   * Observed performance events are added to `this.performanceEvents`. These
   * are included in the replay event before it is finished and sent to Sentry.
   */
  Replay.prototype.addPerformanceEntries = function () {
    // Copy and reset entries before processing
    var entries = __spreadArray([], this.performanceEvents, true);
    this.performanceEvents = [];
    return this.createPerformanceSpans(createPerformanceEntries(entries));
  };
  /**
   * Create a "span" for the total amount of memory being used by JS objects
   * (including v8 internal objects).
   */
  Replay.prototype.addMemoryEntry = function () {
    // window.performance.memory is a non-standard API and doesn't work on all browsers
    // so we check before creating the event.
    if (!('memory' in window.performance)) {
      return;
    }
    return this.createPerformanceSpans([
    // @ts-expect-error memory doesn't exist on type Performance as the API is non-standard (we check that it exists above)
    createMemoryEntry(window.performance.memory)]);
  };
  /**
   * Checks if recording should be stopped due to user inactivity. Otherwise
   * check if session is expired and create a new session if so. Triggers a new
   * full snapshot on new session.
   *
   * Returns true if session is not expired, false otherwise.
   */
  Replay.prototype.checkAndHandleExpiredSession = function (_a) {
    var _b, _c;
    var _d = _a === void 0 ? {} : _a,
      _e = _d.expiry,
      expiry = _e === void 0 ? SESSION_IDLE_DURATION : _e;
    var oldSessionId = (_b = this.session) === null || _b === void 0 ? void 0 : _b.id;
    // Prevent starting a new session if the last user activity is older than
    // MAX_SESSION_LIFE. Otherwise non-user activity can trigger a new
    // session+recording. This creates noisy replays that do not have much
    // content in them.
    if (this.lastActivity && isExpired(this.lastActivity, MAX_SESSION_LIFE)) {
      // Pause recording
      this.pause();
      return;
    }
    // --- There is recent user activity --- //
    // This will create a new session if expired, based on expiry length
    this.loadSession({
      expiry: expiry
    });
    // Session was expired if session ids do not match
    var expired = oldSessionId !== ((_c = this.session) === null || _c === void 0 ? void 0 : _c.id);
    if (!expired) {
      return true;
    }
    // TODO: We could potentially figure out a way to save the last session,
    // and produce a checkout based on a previous checkout + updates, and then
    // replay the event on top. Or maybe replay the event on top of a refresh
    // snapshot.
    // For now create a new snapshot
    this.triggerFullSnapshot();
    return false;
  };
  /**
   * Only flush if `this.waitForError` is false.
   */
  Replay.prototype.conditionalFlush = function () {
    if (this.waitForError) {
      return;
    }
    this.flushImmediate();
  };
  /**
   * Clear context
   */
  Replay.prototype.clearContext = function () {
    this.context.errorIds.clear();
    this.context.traceIds.clear();
    this.context.urls = [];
    this.context.earliestEvent = null;
  };
  /**
   * Return and clear context
   */
  Replay.prototype.popEventContext = function () {
    var initialState = this.initialState;
    if (this.initialState && this.context.earliestEvent && this.context.earliestEvent < this.initialState.timestamp) {
      initialState.timestamp = this.context.earliestEvent;
    }
    var context = {
      initialState: initialState,
      errorIds: Array.from(this.context.errorIds).filter(Boolean),
      traceIds: Array.from(this.context.traceIds).filter(Boolean),
      urls: this.context.urls
    };
    this.clearContext();
    return context;
  };
  /**
   * Flushes replay event buffer to Sentry.
   *
   * Performance events are only added right before flushing - this is
   * due to the buffered performance observer events.
   *
   * Should never be called directly, only by `flush`
   */
  Replay.prototype.runFlush = function () {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
      var replayId, segmentId, recordingData, err_2;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!this.session) {
              console.error(new Error('[Sentry]: No transaction, no replay'));
              return [2 /*return*/];
            }

            return [4 /*yield*/, this.addPerformanceEntries()];
          case 1:
            _b.sent();
            if (!((_a = this.eventBuffer) === null || _a === void 0 ? void 0 : _a.length)) {
              return [2 /*return*/];
            }
            // Only attach memory event if eventBuffer is not empty
            return [4 /*yield*/, this.addMemoryEntry()];
          case 2:
            // Only attach memory event if eventBuffer is not empty
            _b.sent();
            replayId = this.session.id;
            segmentId = this.session.segmentId++;
            _b.label = 3;
          case 3:
            _b.trys.push([3, 6,, 7]);
            return [4 /*yield*/, this.eventBuffer.finish()];
          case 4:
            recordingData = _b.sent();
            return [4 /*yield*/, this.sendReplay({
              replayId: replayId,
              events: recordingData,
              segmentId: segmentId,
              includeReplayStartTimestamp: segmentId === 0
            })];
          case 5:
            _b.sent();
            return [3 /*break*/, 7];
          case 6:
            err_2 = _b.sent();
            captureInternalException(err_2);
            console.error(err_2);
            return [3 /*break*/, 7];
          case 7:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   *
   * Always flush via `debouncedFlush` so that we do not have flushes triggered
   * from calling both `flush` and `debouncedFlush`. Otherwise, there could be
   * cases of mulitple flushes happening closely together.
   */
  Replay.prototype.flushImmediate = function () {
    this.debouncedFlush();
    // `.flush` is provided by lodash.debounce
    return this.debouncedFlush.flush();
  };
  /**
   * Send replay attachment using `fetch()`
   */
  Replay.prototype.sendReplayRequest = function (_a) {
    var endpoint = _a.endpoint,
      events = _a.events,
      event_id = _a.replayId,
      segment_id = _a.segmentId,
      includeReplayStartTimestamp = _a.includeReplayStartTimestamp;
    return __awaiter(this, void 0, void 0, function () {
      var payloadWithSequence, _b, urls, errorIds, traceIds, initialState, timestamp, sdkInfo, replayEvent, envelope, response, _c, _d;
      var _e;
      var _this = this;
      return __generator(this, function (_f) {
        switch (_f.label) {
          case 0:
            payloadWithSequence = createPayload({
              events: events,
              headers: {
                segment_id: segment_id
              }
            });
            _b = this.popEventContext(), urls = _b.urls, errorIds = _b.errorIds, traceIds = _b.traceIds, initialState = _b.initialState;
            timestamp = new Date().getTime();
            sdkInfo = {
              name: 'sentry.javascript.integration.replay',
              version: "0.6.13"
            };
            return [4 /*yield*/, new Promise(function (resolve) {
              var _a;
              (_a = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])()) === null || _a === void 0 ? void 0 : _a._withClient(function (client, scope) {
                return __awaiter(_this, void 0, void 0, function () {
                  var preparedEvent, session;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4 /*yield*/, client._prepareEvent(__assign(__assign({
                          type: REPLAY_EVENT_NAME
                        }, includeReplayStartTimestamp ? {
                          replay_start_timestamp: initialState.timestamp / 1000
                        } : {}), {
                          timestamp: timestamp / 1000,
                          error_ids: errorIds,
                          trace_ids: traceIds,
                          urls: urls,
                          replay_id: event_id,
                          segment_id: segment_id
                        }), {
                          event_id: event_id
                        }, scope)];
                      case 1:
                        preparedEvent = _a.sent();
                        session = scope && scope.getSession();
                        if (session) {
                          client._updateSessionFromEvent(session, preparedEvent);
                        }
                        preparedEvent.sdk = __assign(__assign({}, preparedEvent.sdk), sdkInfo);
                        resolve(preparedEvent);
                        return [2 /*return*/];
                    }
                  });
                });
              });
            })];

          case 1:
            replayEvent = _f.sent();
            envelope = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["createEnvelope"])({
              event_id: event_id,
              sent_at: new Date().toISOString(),
              sdk: sdkInfo
            }, [
            // @ts-expect-error New types
            [{
              type: 'replay_event'
            }, replayEvent], [{
              // @ts-expect-error setting envelope
              type: 'replay_recording',
              length: payloadWithSequence.length
            },
            // @ts-expect-error: Type 'string' is not assignable to type 'ClientReport'.ts(2322)
            payloadWithSequence]]);
            // Otherwise use `fetch`, which *WILL* get cancelled on page reloads/unloads
            logger.log("uploading attachment via fetch()");
            return [4 /*yield*/, fetch(endpoint, {
              method: 'POST',
              body: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["serializeEnvelope"])(envelope)
            })];
          case 2:
            response = _f.sent();
            if (!(response.status !== 200)) return [3 /*break*/, 4];
            _c = _sentry_core__WEBPACK_IMPORTED_MODULE_0__["setContext"];
            _d = ['Send Replay Response'];
            _e = {
              status: response.status
            };
            return [4 /*yield*/, response.text()];
          case 3:
            _c.apply(void 0, _d.concat([(_e.body = _f.sent(), _e)]));
            throw new Error(UNABLE_TO_SEND_REPLAY);
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };

  Replay.prototype.resetRetries = function () {
    this.retryCount = 0;
    this.retryInterval = BASE_RETRY_INTERVAL;
  };
  /**
   * Finalize and send the current replay event to Sentry
   */
  Replay.prototype.sendReplay = function (_a) {
    var replayId = _a.replayId,
      events = _a.events,
      segmentId = _a.segmentId,
      includeReplayStartTimestamp = _a.includeReplayStartTimestamp;
    return __awaiter(this, void 0, void 0, function () {
      var client, endpoint, ex_1;
      var _this = this;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            // short circuit if there's no events to upload
            if (!events.length) {
              return [2 /*return*/];
            }

            client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])().getClient();
            endpoint = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["getEnvelopeEndpointWithUrlEncodedAuth"])(client.getDsn());
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3,, 5]);
            return [4 /*yield*/, this.sendReplayRequest({
              endpoint: endpoint,
              events: events,
              replayId: replayId,
              segmentId: segmentId,
              includeReplayStartTimestamp: includeReplayStartTimestamp
            })];
          case 2:
            _b.sent();
            this.resetRetries();
            return [2 /*return*/, true];
          case 3:
            ex_1 = _b.sent();
            console.error(ex_1);
            // Capture error for every failed replay
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["setContext"])('Replays', {
              retryCount: this.retryCount
            });
            captureInternalException(ex_1);
            // If an error happened here, it's likely that uploading the attachment
            // failed, we'll can retry with the same events payload
            if (this.retryCount >= MAX_RETRY_COUNT) {
              throw new Error("".concat(UNABLE_TO_SEND_REPLAY, " - max retries exceeded"));
            }
            this.retryCount = this.retryCount + 1;
            // will retry in intervals of 5, 10, 30
            this.retryInterval = this.retryCount * this.retryInterval;
            return [4 /*yield*/, new Promise(function (resolve, reject) {
              setTimeout(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var err_3;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        _a.trys.push([0, 2,, 3]);
                        return [4 /*yield*/, this.sendReplay({
                          replayId: replayId,
                          events: events,
                          segmentId: segmentId,
                          includeReplayStartTimestamp: includeReplayStartTimestamp
                        })];
                      case 1:
                        _a.sent();
                        resolve(true);
                        return [3 /*break*/, 3];
                      case 2:
                        err_3 = _a.sent();
                        reject(err_3);
                        return [3 /*break*/, 3];
                      case 3:
                        return [2 /*return*/];
                    }
                  });
                });
              }, _this.retryInterval);
            })];
          case 4:
            return [2 /*return*/, _b.sent()];
          case 5:
            return [2 /*return*/];
        }
      });
    });
  };
  /**
   * @inheritDoc
   */
  Replay.id = 'Replay';
  return Replay;
}();


/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/api.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/api.js ***!
  \**************************************************************************/
/*! exports provided: getEnvelopeEndpointWithUrlEncodedAuth, getReportDialogEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeEndpointWithUrlEncodedAuth", function() { return getEnvelopeEndpointWithUrlEncodedAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReportDialogEndpoint", function() { return getReportDialogEndpoint; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");

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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/baseclient.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/baseclient.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/api.js");
/* harmony import */ var _envelope_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./envelope.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/envelope.js");
/* harmony import */ var _integration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./integration.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integration.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/scope.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/session.js");





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
      const options = this.getOptions();
      const sampleRate = options.sampleRate;
      if (!this._isEnabled()) {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["rejectedSyncPromise"])(new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"]('SDK not enabled, will not capture event.', 'log'));
      }
      const isTransaction = event.type === 'transaction';
      const beforeSendProcessorName = isTransaction ? 'beforeSendTransaction' : 'beforeSend';
      const beforeSendProcessor = options[beforeSendProcessorName];

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
          throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"]('An event processor returned `null`, will not send event.', 'log');
        }
        const isInternalException = hint.data && hint.data.__sentry__ === true;
        if (isInternalException || !beforeSendProcessor) {
          return prepared;
        }
        const beforeSendResult = beforeSendProcessor(prepared, hint);
        return _validateBeforeSendResult(beforeSendResult, beforeSendProcessorName);
      }).then(function (processedEvent) {
        if (processedEvent === null) {
          _this6.recordDroppedEvent('before_send', event.type || 'error');
          throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](`\`${beforeSendProcessorName}\` returned \`null\`, will not send event.`, 'log');
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
 * Verifies that return value of configured `beforeSend` or `beforeSendTransaction` is of expected type, and returns the value if so.
 */
function _validateBeforeSendResult(beforeSendResult, beforeSendProcessorName) {
  const invalidValueError = `\`${beforeSendProcessorName}\` must return \`null\` or a valid event.`;
  if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isThenable"])(beforeSendResult)) {
    return beforeSendResult.then(function (event) {
      if (!Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(event) && event !== null) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](invalidValueError);
      }
      return event;
    }, function (e) {
      throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](`\`${beforeSendProcessorName}\` rejected with ${e}`);
    });
  } else if (!Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"])(beforeSendResult) && beforeSendResult !== null) {
    throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_5__["SentryError"](invalidValueError);
  }
  return beforeSendResult;
}


/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/envelope.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/envelope.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/exports.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/exports.js ***!
  \******************************************************************************/
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
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/hub.js");

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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/hub.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/hub.js ***!
  \**************************************************************************/
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
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/scope.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/session.js");



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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/index.js ***!
  \****************************************************************************/
/*! exports provided: addBreadcrumb, captureEvent, captureException, captureMessage, configureScope, setContext, setExtra, setExtras, setTag, setTags, setUser, startTransaction, withScope, Hub, getCurrentHub, getHubFromCarrier, getMainCarrier, makeMain, setHubOnCarrier, closeSession, makeSession, updateSession, SessionFlusher, Scope, addGlobalEventProcessor, getEnvelopeEndpointWithUrlEncodedAuth, getReportDialogEndpoint, BaseClient, initAndBind, createTransport, SDK_VERSION, getIntegrationsToSetup, Integrations, FunctionToString, InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/exports.js");
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

/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/hub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["getMainCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return _hub_js__WEBPACK_IMPORTED_MODULE_1__["setHubOnCarrier"]; });

/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/session.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSession", function() { return _session_js__WEBPACK_IMPORTED_MODULE_2__["closeSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeSession", function() { return _session_js__WEBPACK_IMPORTED_MODULE_2__["makeSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSession", function() { return _session_js__WEBPACK_IMPORTED_MODULE_2__["updateSession"]; });

/* harmony import */ var _sessionflusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessionflusher.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/sessionflusher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionFlusher", function() { return _sessionflusher_js__WEBPACK_IMPORTED_MODULE_3__["SessionFlusher"]; });

/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/scope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope_js__WEBPACK_IMPORTED_MODULE_4__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _scope_js__WEBPACK_IMPORTED_MODULE_4__["addGlobalEventProcessor"]; });

/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeEndpointWithUrlEncodedAuth", function() { return _api_js__WEBPACK_IMPORTED_MODULE_5__["getEnvelopeEndpointWithUrlEncodedAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportDialogEndpoint", function() { return _api_js__WEBPACK_IMPORTED_MODULE_5__["getReportDialogEndpoint"]; });

/* harmony import */ var _baseclient_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./baseclient.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/baseclient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return _baseclient_js__WEBPACK_IMPORTED_MODULE_6__["BaseClient"]; });

/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sdk.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return _sdk_js__WEBPACK_IMPORTED_MODULE_7__["initAndBind"]; });

/* harmony import */ var _transports_base_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transports/base.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/transports/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return _transports_base_js__WEBPACK_IMPORTED_MODULE_8__["createTransport"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./version.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _version_js__WEBPACK_IMPORTED_MODULE_9__["SDK_VERSION"]; });

/* harmony import */ var _integration_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./integration.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntegrationsToSetup", function() { return _integration_js__WEBPACK_IMPORTED_MODULE_10__["getIntegrationsToSetup"]; });

/* harmony import */ var _integrations_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./integrations/index.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return _integrations_index_js__WEBPACK_IMPORTED_MODULE_11__; });
/* harmony import */ var _integrations_functiontostring_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./integrations/functiontostring.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/functiontostring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _integrations_functiontostring_js__WEBPACK_IMPORTED_MODULE_12__["FunctionToString"]; });

/* harmony import */ var _integrations_inboundfilters_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./integrations/inboundfilters.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/inboundfilters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _integrations_inboundfilters_js__WEBPACK_IMPORTED_MODULE_13__["InboundFilters"]; });
















;
;

/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integration.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integration.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/hub.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/scope.js");





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

  // The `Debug` integration prints copies of the `event` and `hint` which will be passed to `beforeSend` or
  // `beforeSendTransaction`. It therefore has to run after all other integrations, so that the changes of all event
  // processors will be reflected in the printed values. For lack of a more elegant way to guarantee that, we therefore
  // locate it and, assuming it exists, pop it out of its current spot and shove it onto the end of the array.
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/functiontostring.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/functiontostring.js ***!
  \****************************************************************************************************/
/*! exports provided: FunctionToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return FunctionToString; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");



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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/inboundfilters.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/inboundfilters.js ***!
  \**************************************************************************************************/
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
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");





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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/index.js ***!
  \*****************************************************************************************/
/*! exports provided: FunctionToString, InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functiontostring_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functiontostring.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/functiontostring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _functiontostring_js__WEBPACK_IMPORTED_MODULE_0__["FunctionToString"]; });

/* harmony import */ var _inboundfilters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboundfilters.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/integrations/inboundfilters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _inboundfilters_js__WEBPACK_IMPORTED_MODULE_1__["InboundFilters"]; });




/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/scope.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/scope.js ***!
  \****************************************************************************/
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
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/session.js");




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
        this._contexts[key] = context;
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/sdk.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/sdk.js ***!
  \**************************************************************************/
/*! exports provided: initAndBind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return initAndBind; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/hub.js");



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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/session.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/session.js ***!
  \******************************************************************************/
/*! exports provided: closeSession, makeSession, updateSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSession", function() { return closeSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSession", function() { return makeSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSession", function() { return updateSession; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/sessionflusher.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/sessionflusher.js ***!
  \*************************************************************************************/
/*! exports provided: SessionFlusher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionFlusher", function() { return SessionFlusher; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _hub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hub.js */ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/hub.js");





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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/transports/base.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/transports/base.js ***!
  \**************************************************************************************/
/*! exports provided: DEFAULT_TRANSPORT_BUFFER_SIZE, createTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRANSPORT_BUFFER_SIZE", function() { return DEFAULT_TRANSPORT_BUFFER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return createTransport; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js");

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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/core/esm/version.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/core/esm/version.js ***!
  \******************************************************************************/
/*! exports provided: SDK_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return SDK_VERSION; });
const SDK_VERSION = '7.19.0';


/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/baggage.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/baggage.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/logger.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/browser.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/browser.js ***!
  \*******************************************************************************/
/*! exports provided: getDomElement, getLocationHref, htmlTreeAsString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomElement", function() { return getDomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return getLocationHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return htmlTreeAsString; });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js");



// eslint-disable-next-line deprecation/deprecation
const WINDOW = Object(_worldwide_js__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();

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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncNullishCoalesce.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncNullishCoalesce.js ***!
  \************************************************************************************************************/
/*! exports provided: _asyncNullishCoalesce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_asyncNullishCoalesce", function() { return _asyncNullishCoalesce; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nullishCoalesce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nullishCoalesce.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js");



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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChain.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChain.js ***!
  \**********************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChainDelete.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChainDelete.js ***!
  \****************************************************************************************************************/
/*! exports provided: _asyncOptionalChainDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_asyncOptionalChainDelete", function() { return _asyncOptionalChainDelete; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _asyncOptionalChain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_asyncOptionalChain.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChain.js");



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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_createNamedExportFrom.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_createNamedExportFrom.js ***!
  \*************************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_createStarExport.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_createStarExport.js ***!
  \********************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopDefault.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopDefault.js ***!
  \******************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespace.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespace.js ***!
  \********************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespaceDefaultOnly.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespaceDefaultOnly.js ***!
  \*******************************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireDefault.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireDefault.js ***!
  \*************************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireWildcard.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireWildcard.js ***!
  \**************************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js ***!
  \*******************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js ***!
  \*****************************************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_optionalChainDelete.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_optionalChainDelete.js ***!
  \***********************************************************************************************************/
/*! exports provided: _optionalChainDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_optionalChainDelete", function() { return _optionalChainDelete; });
/* harmony import */ var _optionalChain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_optionalChain.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/index.js ***!
  \********************************************************************************************/
/*! exports provided: _asyncNullishCoalesce, _asyncOptionalChain, _asyncOptionalChainDelete, _createNamedExportFrom, _createStarExport, _interopDefault, _interopNamespace, _interopNamespaceDefaultOnly, _interopRequireDefault, _interopRequireWildcard, _nullishCoalesce, _optionalChain, _optionalChainDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asyncNullishCoalesce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_asyncNullishCoalesce.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncNullishCoalesce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_asyncNullishCoalesce", function() { return _asyncNullishCoalesce_js__WEBPACK_IMPORTED_MODULE_0__["_asyncNullishCoalesce"]; });

/* harmony import */ var _asyncOptionalChain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_asyncOptionalChain.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_asyncOptionalChain", function() { return _asyncOptionalChain_js__WEBPACK_IMPORTED_MODULE_1__["_asyncOptionalChain"]; });

/* harmony import */ var _asyncOptionalChainDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_asyncOptionalChainDelete.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_asyncOptionalChainDelete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_asyncOptionalChainDelete", function() { return _asyncOptionalChainDelete_js__WEBPACK_IMPORTED_MODULE_2__["_asyncOptionalChainDelete"]; });

/* harmony import */ var _createNamedExportFrom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_createNamedExportFrom.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_createNamedExportFrom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_createNamedExportFrom", function() { return _createNamedExportFrom_js__WEBPACK_IMPORTED_MODULE_3__["_createNamedExportFrom"]; });

/* harmony import */ var _createStarExport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_createStarExport.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_createStarExport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_createStarExport", function() { return _createStarExport_js__WEBPACK_IMPORTED_MODULE_4__["_createStarExport"]; });

/* harmony import */ var _interopDefault_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_interopDefault.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopDefault", function() { return _interopDefault_js__WEBPACK_IMPORTED_MODULE_5__["_interopDefault"]; });

/* harmony import */ var _interopNamespace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_interopNamespace.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopNamespace", function() { return _interopNamespace_js__WEBPACK_IMPORTED_MODULE_6__["_interopNamespace"]; });

/* harmony import */ var _interopNamespaceDefaultOnly_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_interopNamespaceDefaultOnly.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopNamespaceDefaultOnly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopNamespaceDefaultOnly", function() { return _interopNamespaceDefaultOnly_js__WEBPACK_IMPORTED_MODULE_7__["_interopNamespaceDefaultOnly"]; });

/* harmony import */ var _interopRequireDefault_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_interopRequireDefault.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopRequireDefault", function() { return _interopRequireDefault_js__WEBPACK_IMPORTED_MODULE_8__["_interopRequireDefault"]; });

/* harmony import */ var _interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_interopRequireWildcard.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_interopRequireWildcard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_interopRequireWildcard", function() { return _interopRequireWildcard_js__WEBPACK_IMPORTED_MODULE_9__["_interopRequireWildcard"]; });

/* harmony import */ var _nullishCoalesce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_nullishCoalesce.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_nullishCoalesce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_nullishCoalesce", function() { return _nullishCoalesce_js__WEBPACK_IMPORTED_MODULE_10__["_nullishCoalesce"]; });

/* harmony import */ var _optionalChain_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_optionalChain.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_optionalChain.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_optionalChain", function() { return _optionalChain_js__WEBPACK_IMPORTED_MODULE_11__["_optionalChain"]; });

/* harmony import */ var _optionalChainDelete_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_optionalChainDelete.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/_optionalChainDelete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_optionalChainDelete", function() { return _optionalChainDelete_js__WEBPACK_IMPORTED_MODULE_12__["_optionalChainDelete"]; });















/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/clientreport.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/clientreport.js ***!
  \************************************************************************************/
/*! exports provided: createClientReportEnvelope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClientReportEnvelope", function() { return createClientReportEnvelope; });
/* harmony import */ var _envelope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envelope.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/envelope.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/time.js");



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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/dsn.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/dsn.js ***!
  \***************************************************************************/
/*! exports provided: dsnFromString, dsnToString, makeDsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsnFromString", function() { return dsnFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsnToString", function() { return dsnToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDsn", function() { return makeDsn; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/error.js");



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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/env.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/env.js ***!
  \***************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/envelope.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/envelope.js ***!
  \********************************************************************************/
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
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/normalize.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/object.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/error.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/error.js ***!
  \*****************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/index.js ***!
  \*****************************************************************************/
/*! exports provided: getDomElement, getLocationHref, htmlTreeAsString, dsnFromString, dsnToString, makeDsn, SentryError, GLOBAL_OBJ, getGlobalObject, getGlobalSingleton, addInstrumentationHandler, isDOMError, isDOMException, isElement, isError, isErrorEvent, isEvent, isInstanceOf, isNaN, isPlainObject, isPrimitive, isRegExp, isString, isSyntheticEvent, isThenable, CONSOLE_LEVELS, consoleSandbox, logger, memoBuilder, addContextToFrame, addExceptionMechanism, addExceptionTypeValue, arrayify, checkOrSetAlreadyCaught, getEventDescription, parseSemver, uuid4, dynamicRequire, isNodeEnv, loadModule, normalize, normalizeToSize, walk, addNonEnumerableProperty, convertToPlainObject, dropUndefinedKeys, extractExceptionKeysForMessage, fill, getOriginalFunction, markFunctionWrapped, objectify, urlEncode, basename, dirname, isAbsolute, join, normalizePath, relative, resolve, makePromiseBuffer, addRequestDataToEvent, addRequestDataToTransaction, extractPathForTransaction, extractRequestData, severityFromString, severityLevelFromString, validSeverityLevels, createStackParser, getFunctionName, nodeStackLineParser, stackParserFromStackParserOptions, stripSentryFramesAndReverse, escapeStringForRegex, isMatchingPattern, safeJoin, snipLine, truncate, isNativeFetch, supportsDOMError, supportsDOMException, supportsErrorEvent, supportsFetch, supportsHistory, supportsNativeFetch, supportsReferrerPolicy, supportsReportingObserver, SyncPromise, rejectedSyncPromise, resolvedSyncPromise, _browserPerformanceTimeOriginMode, browserPerformanceTimeOrigin, dateTimestampInSeconds, timestampInSeconds, timestampWithMs, usingPerformanceAPI, TRACEPARENT_REGEXP, extractTraceparentData, isBrowserBundle, addItemToEnvelope, createAttachmentEnvelopeItem, createEnvelope, envelopeItemTypeToDataCategory, forEachEnvelopeItem, serializeEnvelope, createClientReportEnvelope, DEFAULT_RETRY_AFTER, disabledUntil, isRateLimited, parseRetryAfterHeader, updateRateLimits, BAGGAGE_HEADER_NAME, MAX_BAGGAGE_STRING_LENGTH, SENTRY_BAGGAGE_KEY_PREFIX, SENTRY_BAGGAGE_KEY_PREFIX_REGEX, baggageHeaderToDynamicSamplingContext, dynamicSamplingContextToSentryBaggageHeader, getNumberOfUrlSegments, parseUrl, stripUrlQueryAndFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDomElement", function() { return _browser_js__WEBPACK_IMPORTED_MODULE_0__["getDomElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return _browser_js__WEBPACK_IMPORTED_MODULE_0__["getLocationHref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return _browser_js__WEBPACK_IMPORTED_MODULE_0__["htmlTreeAsString"]; });

/* harmony import */ var _dsn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dsn.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/dsn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsnFromString", function() { return _dsn_js__WEBPACK_IMPORTED_MODULE_1__["dsnFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsnToString", function() { return _dsn_js__WEBPACK_IMPORTED_MODULE_1__["dsnToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeDsn", function() { return _dsn_js__WEBPACK_IMPORTED_MODULE_1__["makeDsn"]; });

/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return _error_js__WEBPACK_IMPORTED_MODULE_2__["SentryError"]; });

/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_OBJ", function() { return _worldwide_js__WEBPACK_IMPORTED_MODULE_3__["GLOBAL_OBJ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return _worldwide_js__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalSingleton", function() { return _worldwide_js__WEBPACK_IMPORTED_MODULE_3__["getGlobalSingleton"]; });

/* harmony import */ var _instrument_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instrument.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return _instrument_js__WEBPACK_IMPORTED_MODULE_4__["addInstrumentationHandler"]; });

/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");
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

/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_LEVELS", function() { return _logger_js__WEBPACK_IMPORTED_MODULE_6__["CONSOLE_LEVELS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return _logger_js__WEBPACK_IMPORTED_MODULE_6__["consoleSandbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger_js__WEBPACK_IMPORTED_MODULE_6__["logger"]; });

/* harmony import */ var _memo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./memo.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/memo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoBuilder", function() { return _memo_js__WEBPACK_IMPORTED_MODULE_7__["memoBuilder"]; });

/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./misc.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["addContextToFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["addExceptionMechanism"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["addExceptionTypeValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayify", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["arrayify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkOrSetAlreadyCaught", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["checkOrSetAlreadyCaught"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["getEventDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["parseSemver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return _misc_js__WEBPACK_IMPORTED_MODULE_8__["uuid4"]; });

/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return _node_js__WEBPACK_IMPORTED_MODULE_9__["dynamicRequire"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return _node_js__WEBPACK_IMPORTED_MODULE_9__["isNodeEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return _node_js__WEBPACK_IMPORTED_MODULE_9__["loadModule"]; });

/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/normalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _normalize_js__WEBPACK_IMPORTED_MODULE_10__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return _normalize_js__WEBPACK_IMPORTED_MODULE_10__["normalizeToSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return _normalize_js__WEBPACK_IMPORTED_MODULE_10__["walk"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addNonEnumerableProperty", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["addNonEnumerableProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertToPlainObject", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["convertToPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["dropUndefinedKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["extractExceptionKeysForMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["fill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOriginalFunction", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["getOriginalFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markFunctionWrapped", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["markFunctionWrapped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectify", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["objectify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return _object_js__WEBPACK_IMPORTED_MODULE_11__["urlEncode"]; });

/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./path.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["basename"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["dirname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["isAbsolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["normalizePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return _path_js__WEBPACK_IMPORTED_MODULE_12__["resolve"]; });

/* harmony import */ var _promisebuffer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./promisebuffer.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/promisebuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePromiseBuffer", function() { return _promisebuffer_js__WEBPACK_IMPORTED_MODULE_13__["makePromiseBuffer"]; });

/* harmony import */ var _requestdata_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./requestdata.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/requestdata.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRequestDataToEvent", function() { return _requestdata_js__WEBPACK_IMPORTED_MODULE_14__["addRequestDataToEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRequestDataToTransaction", function() { return _requestdata_js__WEBPACK_IMPORTED_MODULE_14__["addRequestDataToTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractPathForTransaction", function() { return _requestdata_js__WEBPACK_IMPORTED_MODULE_14__["extractPathForTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractRequestData", function() { return _requestdata_js__WEBPACK_IMPORTED_MODULE_14__["extractRequestData"]; });

/* harmony import */ var _severity_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./severity.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/severity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "severityFromString", function() { return _severity_js__WEBPACK_IMPORTED_MODULE_15__["severityFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "severityLevelFromString", function() { return _severity_js__WEBPACK_IMPORTED_MODULE_15__["severityLevelFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validSeverityLevels", function() { return _severity_js__WEBPACK_IMPORTED_MODULE_15__["validSeverityLevels"]; });

/* harmony import */ var _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stacktrace.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStackParser", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["createStackParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["getFunctionName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeStackLineParser", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["nodeStackLineParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackParserFromStackParserOptions", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["stackParserFromStackParserOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripSentryFramesAndReverse", function() { return _stacktrace_js__WEBPACK_IMPORTED_MODULE_16__["stripSentryFramesAndReverse"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./string.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeStringForRegex", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["escapeStringForRegex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["isMatchingPattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["safeJoin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["snipLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return _string_js__WEBPACK_IMPORTED_MODULE_17__["truncate"]; });

/* harmony import */ var _supports_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./supports.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/supports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNativeFetch", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["isNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsReferrerPolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return _supports_js__WEBPACK_IMPORTED_MODULE_18__["supportsReportingObserver"]; });

/* harmony import */ var _syncpromise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./syncpromise.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return _syncpromise_js__WEBPACK_IMPORTED_MODULE_19__["SyncPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rejectedSyncPromise", function() { return _syncpromise_js__WEBPACK_IMPORTED_MODULE_19__["rejectedSyncPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvedSyncPromise", function() { return _syncpromise_js__WEBPACK_IMPORTED_MODULE_19__["resolvedSyncPromise"]; });

/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./time.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_browserPerformanceTimeOriginMode", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["_browserPerformanceTimeOriginMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserPerformanceTimeOrigin", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["browserPerformanceTimeOrigin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateTimestampInSeconds", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["dateTimestampInSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampInSeconds", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["timestampInSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["timestampWithMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usingPerformanceAPI", function() { return _time_js__WEBPACK_IMPORTED_MODULE_20__["usingPerformanceAPI"]; });

/* harmony import */ var _tracing_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tracing.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/tracing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return _tracing_js__WEBPACK_IMPORTED_MODULE_21__["TRACEPARENT_REGEXP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractTraceparentData", function() { return _tracing_js__WEBPACK_IMPORTED_MODULE_21__["extractTraceparentData"]; });

/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./env.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/env.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowserBundle", function() { return _env_js__WEBPACK_IMPORTED_MODULE_22__["isBrowserBundle"]; });

/* harmony import */ var _envelope_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./envelope.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/envelope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addItemToEnvelope", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["addItemToEnvelope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttachmentEnvelopeItem", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["createAttachmentEnvelopeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEnvelope", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["createEnvelope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "envelopeItemTypeToDataCategory", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["envelopeItemTypeToDataCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEachEnvelopeItem", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["forEachEnvelopeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeEnvelope", function() { return _envelope_js__WEBPACK_IMPORTED_MODULE_23__["serializeEnvelope"]; });

/* harmony import */ var _clientreport_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./clientreport.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/clientreport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createClientReportEnvelope", function() { return _clientreport_js__WEBPACK_IMPORTED_MODULE_24__["createClientReportEnvelope"]; });

/* harmony import */ var _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ratelimit.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/ratelimit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RETRY_AFTER", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["DEFAULT_RETRY_AFTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disabledUntil", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["disabledUntil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRateLimited", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["isRateLimited"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["parseRetryAfterHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateRateLimits", function() { return _ratelimit_js__WEBPACK_IMPORTED_MODULE_25__["updateRateLimits"]; });

/* harmony import */ var _baggage_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./baggage.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/baggage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BAGGAGE_HEADER_NAME", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["BAGGAGE_HEADER_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_BAGGAGE_STRING_LENGTH", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["MAX_BAGGAGE_STRING_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SENTRY_BAGGAGE_KEY_PREFIX", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["SENTRY_BAGGAGE_KEY_PREFIX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SENTRY_BAGGAGE_KEY_PREFIX_REGEX", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["SENTRY_BAGGAGE_KEY_PREFIX_REGEX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baggageHeaderToDynamicSamplingContext", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["baggageHeaderToDynamicSamplingContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicSamplingContextToSentryBaggageHeader", function() { return _baggage_js__WEBPACK_IMPORTED_MODULE_26__["dynamicSamplingContextToSentryBaggageHeader"]; });

/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./url.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNumberOfUrlSegments", function() { return _url_js__WEBPACK_IMPORTED_MODULE_27__["getNumberOfUrlSegments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _url_js__WEBPACK_IMPORTED_MODULE_27__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return _url_js__WEBPACK_IMPORTED_MODULE_27__["stripUrlQueryAndFragment"]; });






























/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/instrument.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/instrument.js ***!
  \**********************************************************************************/
/*! exports provided: addInstrumentationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return addInstrumentationHandler; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _stacktrace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stacktrace.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony import */ var _supports_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supports.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/supports.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }







// eslint-disable-next-line deprecation/deprecation
const WINDOW = Object(_worldwide_js__WEBPACK_IMPORTED_MODULE_6__["getGlobalObject"])();

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
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('unknown instrumentation type:', type);
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
        (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].error(`Error while triggering instrumentation handler.\nType: ${type}\nName: ${Object(_stacktrace_js__WEBPACK_IMPORTED_MODULE_4__["getFunctionName"])(handler)}\nError:`, e);
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
  if (!('console' in WINDOW)) {
    return;
  }
  _logger_js__WEBPACK_IMPORTED_MODULE_2__["CONSOLE_LEVELS"].forEach(function (level) {
    if (!(level in WINDOW.console)) {
      return;
    }
    Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(WINDOW.console, level, function (originalConsoleMethod) {
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
          originalConsoleMethod.apply(WINDOW.console, args);
        }
      };
    });
  });
}

/** JSDoc */
function instrumentFetch() {
  if (!Object(_supports_js__WEBPACK_IMPORTED_MODULE_5__["supportsNativeFetch"])()) {
    return;
  }
  Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(WINDOW, 'fetch', function (originalFetch) {
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
      return originalFetch.apply(WINDOW, args).then(function (response) {
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
  if ('Request' in WINDOW && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(fetchArgs[0], Request) && fetchArgs[0].method) {
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
  if ('Request' in WINDOW && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__["isInstanceOf"])(fetchArgs[0], Request)) {
    return fetchArgs[0].url;
  }
  return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

/** JSDoc */
function instrumentXHR() {
  if (!('XMLHttpRequest' in WINDOW)) {
    return;
  }
  const xhrproto = XMLHttpRequest.prototype;
  Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(xhrproto, 'open', function (originalOpen) {
    return function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const xhr = this;
      const url = args[1];
      const xhrInfo = xhr.__sentry_xhr__ = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        method: Object(_is_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(args[0]) ? args[0].toUpperCase() : args[0],
        url: args[1]
      };

      // if Sentry key appears in URL, don't capture it as a request
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__["isString"])(url) && xhrInfo.method === 'POST' && url.match(/sentry_key/)) {
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
        Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(xhr, 'onreadystatechange', function (original) {
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
  Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(xhrproto, 'send', function (originalSend) {
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
  if (!Object(_supports_js__WEBPACK_IMPORTED_MODULE_5__["supportsHistory"])()) {
    return;
  }
  const oldOnPopState = WINDOW.onpopstate;
  WINDOW.onpopstate = function () {
    const to = WINDOW.location.href;
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
  Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(WINDOW.history, 'pushState', historyReplacementFunction);
  Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(WINDOW.history, 'replaceState', historyReplacementFunction);
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
    debounceTimerID = WINDOW.setTimeout(function () {
      debounceTimerID = undefined;
    }, debounceDuration);
  };
}

/** JSDoc */
function instrumentDOM() {
  if (!('document' in WINDOW)) {
    return;
  }

  // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
  // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
  // we instrument `addEventListener` so that we don't end up attaching this handler twice.
  const triggerDOMHandler = triggerHandlers.bind(null, 'dom');
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  WINDOW.document.addEventListener('click', globalDOMEventHandler, false);
  WINDOW.document.addEventListener('keypress', globalDOMEventHandler, false);

  // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
  // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
  // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
  // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
  // guaranteed to fire at least once.)
  ['EventTarget', 'Node'].forEach(function (target) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const proto = WINDOW[target] && WINDOW[target].prototype;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
      return;
    }
    Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(proto, 'addEventListener', function (originalAddEventListener) {
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
    Object(_object_js__WEBPACK_IMPORTED_MODULE_3__["fill"])(proto, 'removeEventListener', function (originalRemoveEventListener) {
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
  _oldOnErrorHandler = WINDOW.onerror;
  WINDOW.onerror = function (msg, url, line, column, error) {
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
  _oldOnUnhandledRejectionHandler = WINDOW.onunhandledrejection;
  WINDOW.onunhandledrejection = function (e) {
    triggerHandlers('unhandledrejection', e);
    if (_oldOnUnhandledRejectionHandler) {
      // eslint-disable-next-line prefer-rest-params
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }
    return true;
  };
}


/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js ***!
  \**************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/logger.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/logger.js ***!
  \******************************************************************************/
/*! exports provided: CONSOLE_LEVELS, consoleSandbox, logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_LEVELS", function() { return CONSOLE_LEVELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return consoleSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/memo.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/memo.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/misc.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/misc.js ***!
  \****************************************************************************/
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
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/string.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js");

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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/node.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/node.js ***!
  \****************************************************************************/
/*! exports provided: dynamicRequire, isNodeEnv, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return dynamicRequire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return isNodeEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/env.js");


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/normalize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/normalize.js ***!
  \*********************************************************************************/
/*! exports provided: normalize, normalizeToSize, walk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return normalizeToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return visit; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _memo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memo.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/memo.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _stacktrace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stacktrace.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/stacktrace.js");






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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/object.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/object.js ***!
  \******************************************************************************/
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
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/string.js");

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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/path.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/promisebuffer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/promisebuffer.js ***!
  \*************************************************************************************/
/*! exports provided: makePromiseBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromiseBuffer", function() { return makePromiseBuffer; });
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _syncpromise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncpromise.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/syncpromise.js");



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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/ratelimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/ratelimit.js ***!
  \*********************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/requestdata.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/requestdata.js ***!
  \***********************************************************************************/
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
/* harmony import */ var _buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildPolyfills */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/index.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/normalize.js");
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./url.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/url.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/severity.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/severity.js ***!
  \********************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/stacktrace.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/stacktrace.js ***!
  \**********************************************************************************/
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
/* harmony import */ var _buildPolyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildPolyfills */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/buildPolyfills/index.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/string.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/string.js ***!
  \******************************************************************************/
/*! exports provided: escapeStringForRegex, isMatchingPattern, safeJoin, snipLine, truncate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeStringForRegex", function() { return escapeStringForRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return isMatchingPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return safeJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return snipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");


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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/supports.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/supports.js ***!
  \********************************************************************************/
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
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js");



// eslint-disable-next-line deprecation/deprecation
const WINDOW = Object(_worldwide_js__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();

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
  if (!('fetch' in WINDOW)) {
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
  if (isNativeFetch(WINDOW.fetch)) {
    return true;
  }

  // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
  // so create a "pure" iframe to see if that has native fetch
  let result = false;
  const doc = WINDOW.document;
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
      (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__) && _logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
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
  return 'ReportingObserver' in WINDOW;
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
  const chrome = WINDOW.chrome;
  const isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
  /* eslint-enable @typescript-eslint/no-unsafe-member-access */
  const hasHistoryApi = 'history' in WINDOW && !!WINDOW.history.pushState && !!WINDOW.history.replaceState;
  return !isChromePackagedApp && hasHistoryApi;
}


/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/syncpromise.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/syncpromise.js ***!
  \***********************************************************************************/
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
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/is.js");




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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/time.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/time.js ***!
  \****************************************************************************/
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
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/node.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js");



// eslint-disable-next-line deprecation/deprecation
const WINDOW = Object(_worldwide_js__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();

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
  const performance = WINDOW.performance;
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
    const perfHooks = Object(_node_js__WEBPACK_IMPORTED_MODULE_0__["dynamicRequire"])(module, 'perf_hooks');
    return perfHooks.performance;
  } catch (_) {
    return undefined;
  }
}

/**
 * The Performance API implementation for the current platform, if available.
 */
const platformPerformance = Object(_node_js__WEBPACK_IMPORTED_MODULE_0__["isNodeEnv"])() ? getNodePerformance() : getBrowserPerformance();
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

  const performance = WINDOW.performance;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/tracing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/tracing.js ***!
  \*******************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/url.js ***!
  \***************************************************************************/
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

/***/ "./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@sentry/replay/node_modules/@sentry/utils/esm/worldwide.js ***!
  \*********************************************************************************/
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
 * @deprecated Use GLOBAL_OBJ instead or WINDOW from @sentry/browser. This will be removed in v8
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js ***!
  \*****************************************************************/
/*! exports provided: InterpreterStatus, assign, createMachine, interpret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpreterStatus", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return v; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t, n) {
  var e = "function" == typeof Symbol && t[Symbol.iterator];
  if (!e) return t;
  var r,
    o,
    i = e.call(t),
    a = [];
  try {
    for (; (void 0 === n || n-- > 0) && !(r = i.next()).done;) a.push(r.value);
  } catch (t) {
    o = {
      error: t
    };
  } finally {
    try {
      r && !r.done && (e = i.return) && e.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
var n;
!function (t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
}(n || (n = {}));
var e = {
  type: "xstate.init"
};
function r(t) {
  return void 0 === t ? [] : [].concat(t);
}
function o(t) {
  return {
    type: "xstate.assign",
    assignment: t
  };
}
function i(t, n) {
  return "string" == typeof (t = "string" == typeof t && n && n[t] ? n[t] : t) ? {
    type: t
  } : "function" == typeof t ? {
    type: t.name,
    exec: t
  } : t;
}
function a(t) {
  return function (n) {
    return t === n;
  };
}
function u(t) {
  return "string" == typeof t ? {
    type: t
  } : t;
}
function c(t, n) {
  return {
    value: t,
    context: n,
    actions: [],
    changed: !1,
    matches: a(t)
  };
}
function f(t, n, e) {
  var r = n,
    o = !1;
  return [t.filter(function (t) {
    if ("xstate.assign" === t.type) {
      o = !0;
      var n = Object.assign({}, r);
      return "function" == typeof t.assignment ? n = t.assignment(r, e) : Object.keys(t.assignment).forEach(function (o) {
        n[o] = "function" == typeof t.assignment[o] ? t.assignment[o](r, e) : t.assignment[o];
      }), r = n, !1;
    }
    return !0;
  }), r, o];
}
function s(n, o) {
  void 0 === o && (o = {});
  var s = t(f(r(n.states[n.initial].entry).map(function (t) {
      return i(t, o.actions);
    }), n.context, e), 2),
    l = s[0],
    v = s[1],
    y = {
      config: n,
      _options: o,
      initialState: {
        value: n.initial,
        actions: l,
        context: v,
        matches: a(n.initial)
      },
      transition: function (e, o) {
        var s,
          l,
          v = "string" == typeof e ? {
            value: e,
            context: n.context
          } : e,
          p = v.value,
          g = v.context,
          d = u(o),
          x = n.states[p];
        if (x.on) {
          var m = r(x.on[d.type]);
          try {
            for (var h = function (t) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                  e = n && t[n],
                  r = 0;
                if (e) return e.call(t);
                if (t && "number" == typeof t.length) return {
                  next: function () {
                    return t && r >= t.length && (t = void 0), {
                      value: t && t[r++],
                      done: !t
                    };
                  }
                };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
              }(m), b = h.next(); !b.done; b = h.next()) {
              var S = b.value;
              if (void 0 === S) return c(p, g);
              var w = "string" == typeof S ? {
                  target: S
                } : S,
                j = w.target,
                E = w.actions,
                R = void 0 === E ? [] : E,
                N = w.cond,
                O = void 0 === N ? function () {
                  return !0;
                } : N,
                _ = void 0 === j,
                k = null != j ? j : p,
                T = n.states[k];
              if (O(g, d)) {
                var q = t(f((_ ? r(R) : [].concat(x.exit, R, T.entry).filter(function (t) {
                    return t;
                  })).map(function (t) {
                    return i(t, y._options.actions);
                  }), g, d), 3),
                  z = q[0],
                  A = q[1],
                  B = q[2],
                  C = null != j ? j : p;
                return {
                  value: C,
                  context: A,
                  actions: z,
                  changed: j !== p || z.length > 0 || B,
                  matches: a(C)
                };
              }
            }
          } catch (t) {
            s = {
              error: t
            };
          } finally {
            try {
              b && !b.done && (l = h.return) && l.call(h);
            } finally {
              if (s) throw s.error;
            }
          }
        }
        return c(p, g);
      }
    };
  return y;
}
var l = function (t, n) {
  return t.actions.forEach(function (e) {
    var r = e.exec;
    return r && r(t.context, n);
  });
};
function v(t) {
  var r = t.initialState,
    o = n.NotStarted,
    i = new Set(),
    c = {
      _machine: t,
      send: function (e) {
        o === n.Running && (r = t.transition(r, e), l(r, u(e)), i.forEach(function (t) {
          return t(r);
        }));
      },
      subscribe: function (t) {
        return i.add(t), t(r), {
          unsubscribe: function () {
            return i.delete(t);
          }
        };
      },
      start: function (i) {
        if (i) {
          var u = "object" == typeof i ? i : {
            context: t.config.context,
            value: i
          };
          r = {
            value: u.value,
            actions: [],
            context: u.context,
            matches: a(u.value)
          };
        }
        return o = n.Running, l(r, e), c;
      },
      stop: function () {
        return o = n.Stopped, i.clear(), c;
      },
      get state() {
        return r;
      },
      get status() {
        return o;
      }
    };
  return c;
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js ***!
  \*******************************************************************************************/
/*! exports provided: decode, encode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = function (arraybuffer) {
  var bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = '';
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }
  return base64;
};
var decode = function (base64) {
  var bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === '=') {
    bufferLength--;
    if (base64[base64.length - 2] === '=') {
      bufferLength--;
    }
  }
  var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js":
/*!***************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js ***!
  \***************************************************************/
/*! exports provided: strFromU8, strToU8, unzlibSync, zlibSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strFromU8", function() { return strFromU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strToU8", function() { return strToU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzlibSync", function() { return unzlibSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zlibSync", function() { return zlibSync; });
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:

// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array,
  u16 = Uint16Array,
  u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */0, 0, /* impossible */0]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */0, 0]);
// code length index map
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
// get base, reverse index map from extra bits
var freb = function (eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  // numbers here are at max 18 bits
  var r = new u32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return [b, r];
};
var _a = freb(fleb, 2),
  fl = _a[0],
  revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0),
  fd = _b[0],
  revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
  // reverse table algorithm from SO
  var x = (i & 0xAAAA) >>> 1 | (i & 0x5555) << 1;
  x = (x & 0xCCCC) >>> 2 | (x & 0x3333) << 2;
  x = (x & 0xF0F0) >>> 4 | (x & 0x0F0F) << 4;
  rev[i] = ((x & 0xFF00) >>> 8 | (x & 0x00FF) << 8) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = function (cd, mb, r) {
  var s = cd.length;
  // index
  var i = 0;
  // u16 "map": index -> # of codes with bit length = index
  var l = new u16(mb);
  // length of cd must be 288 (total # of codes)
  for (; i < s; ++i) ++l[cd[i] - 1];
  // u16 "map": index -> minimum code for bit length = index
  var le = new u16(mb);
  for (i = 0; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    // u16 "map": index -> number of actual bits, symbol for code
    co = new u16(1 << mb);
    // bits to remove for reverser
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      // ignore 0 lengths
      if (cd[i]) {
        // num encoding both symbol and bits read
        var sv = i << 4 | cd[i];
        // free bits
        var r_1 = mb - cd[i];
        // start value
        var v = le[cd[i] - 1]++ << r_1;
        // m is end value
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          // every 16 bit value starting with the code yields the same result
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
  }
  return co;
};
// fixed length tree
var flt = new u8(288);
for (var i = 0; i < 144; ++i) flt[i] = 8;
for (var i = 144; i < 256; ++i) flt[i] = 9;
for (var i = 256; i < 280; ++i) flt[i] = 7;
for (var i = 280; i < 288; ++i) flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for (var i = 0; i < 32; ++i) fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/hMap(flt, 9, 0),
  flrm = /*#__PURE__*/hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/hMap(fdt, 5, 0),
  fdrm = /*#__PURE__*/hMap(fdt, 5, 1);
// find max of array
var max = function (a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m) m = a[i];
  }
  return m;
};
// read d, starting at bit p and mask with m
var bits = function (d, p, m) {
  var o = p / 8 >> 0;
  return (d[o] | d[o + 1] << 8) >>> (p & 7) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function (d, p) {
  var o = p / 8 >> 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >>> (p & 7);
};
// get end of byte
var shft = function (p) {
  return (p / 8 >> 0) + (p & 7 && 1);
};
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function (v, s, e) {
  if (s == null || s < 0) s = 0;
  if (e == null || e > v.length) e = v.length;
  // can't use .constructor in case user-supplied
  var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
  n.set(v.subarray(s, e));
  return n;
};
// expands raw DEFLATE data
var inflt = function (dat, buf, st) {
  // source length
  var sl = dat.length;
  // have to estimate size
  var noBuf = !buf || st;
  // no state
  var noSt = !st || st.i;
  if (!st) st = {};
  // Assumes roughly 33% compression ratio average
  if (!buf) buf = new u8(sl * 3);
  // ensure buffer can fit at least l elements
  var cbuf = function (l) {
    var bl = buf.length;
    // need to increase size to fit
    if (l > bl) {
      // Double or set to necessary, whichever is greater
      var nbuf = new u8(Math.max(bl * 2, l));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  //  last chunk         bitpos           bytes
  var final = st.f || 0,
    pos = st.p || 0,
    bt = st.b || 0,
    lm = st.l,
    dm = st.d,
    lbt = st.m,
    dbt = st.n;
  // total bits
  var tbts = sl * 8;
  do {
    if (!lm) {
      // BFINAL - this is only 1 when last chunk is next
      st.f = final = bits(dat, pos, 1);
      // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        // go to end of byte boundary
        var s = shft(pos) + 4,
          l = dat[s - 4] | dat[s - 3] << 8,
          t = s + l;
        if (t > sl) {
          if (noSt) throw 'unexpected EOF';
          break;
        }
        // ensure size
        if (noBuf) cbuf(bt + l);
        // Copy over uncompressed data
        buf.set(dat.subarray(s, t), bt);
        // Get new bitpos, update byte count
        st.b = bt += l, st.p = pos = t * 8;
        continue;
      } else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;else if (type == 2) {
        //  literal                            lengths
        var hLit = bits(dat, pos, 31) + 257,
          hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        // length+distance tree
        var ldt = new u8(tl);
        // code length tree
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          // use index map to get real code
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        // code lengths bits
        var clb = max(clt),
          clbmsk = (1 << clb) - 1;
        if (!noSt && pos + tl * (clb + 7) > tbts) break;
        // code lengths map
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl;) {
          var r = clm[bits(dat, pos, clbmsk)];
          // bits read
          pos += r & 15;
          // symbol
          var s = r >>> 4;
          // code length to copy
          if (s < 16) {
            ldt[i++] = s;
          } else {
            //  copy   count
            var c = 0,
              n = 0;
            if (s == 16) n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];else if (s == 17) n = 3 + bits(dat, pos, 7), pos += 3;else if (s == 18) n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--) ldt[i++] = c;
          }
        }
        //    length tree                 distance tree
        var lt = ldt.subarray(0, hLit),
          dt = ldt.subarray(hLit);
        // max length bits
        lbt = max(lt);
        // max dist bits
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else throw 'invalid block type';
      if (pos > tbts) throw 'unexpected EOF';
    }
    // Make sure the buffer can hold this + the largest possible addition
    // Maximum chunk size (practically, theoretically infinite) is 2^17;
    if (noBuf) cbuf(bt + 131072);
    var lms = (1 << lbt) - 1,
      dms = (1 << dbt) - 1;
    var mxa = lbt + dbt + 18;
    while (noSt || pos + mxa < tbts) {
      // bits read, code
      var c = lm[bits16(dat, pos) & lms],
        sym = c >>> 4;
      pos += c & 15;
      if (pos > tbts) throw 'unexpected EOF';
      if (!c) throw 'invalid length/literal';
      if (sym < 256) buf[bt++] = sym;else if (sym == 256) {
        lm = null;
        break;
      } else {
        var add = sym - 254;
        // no extra bits needed if less
        if (sym > 264) {
          // index
          var i = sym - 257,
            b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        // dist
        var d = dm[bits16(dat, pos) & dms],
          dsym = d >>> 4;
        if (!d) throw 'invalid distance';
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) throw 'unexpected EOF';
        if (noBuf) cbuf(bt + 131072);
        var end = bt + add;
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = pos, st.b = bt;
    if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function (d, p, v) {
  v <<= p & 7;
  var o = p / 8 >> 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function (d, p, v) {
  v <<= p & 7;
  var o = p / 8 >> 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
  d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function (d, mb) {
  // Need extra info to make a tree
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i]) t.push({
      s: i,
      f: d[i]
    });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s) return [new u8(0), 0];
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return [v, 1];
  }
  t.sort(function (a, b) {
    return a.f - b.f;
  });
  // after i2 reaches last ind, will be stopped
  // freq must be greater than largest possible number of symbols
  t.push({
    s: -1,
    f: 25001
  });
  var l = t[0],
    r = t[1],
    i0 = 0,
    i1 = 1,
    i2 = 2;
  t[0] = {
    s: -1,
    f: l.f + r.f,
    l: l,
    r: r
  };
  // efficient algorithm from UZIP.js
  // i0 is lookbehind, i2 is lookahead - after processing two low-freq
  // symbols that combined have high freq, will start processing i2 (high-freq,
  // non-composite) symbols instead
  // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = {
      s: -1,
      f: l.f + r.f,
      l: l,
      r: r
    };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym) maxSym = t2[i].s;
  }
  // code lengths
  var tr = new u16(maxSym + 1);
  // max bits in tree
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    // more algorithms from UZIP.js
    // TODO: find out how this code works (debt)
    //  ind    debt
    var i = 0,
      dt = 0;
    //    left            cost
    var lft = mbt - mb,
      cst = 1 << lft;
    t2.sort(function (a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else break;
    }
    dt >>>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;else ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return [new u8(tr), mbt];
};
// get the max length and assign length codes
var ln = function (n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
// length codes generation
var lc = function (c) {
  var s = c.length;
  // Note that the semicolon was intentional
  while (s && !c[--s]);
  var cl = new u16(++s);
  //  ind      num         streak
  var cli = 0,
    cln = c[0],
    cls = 1;
  var w = function (v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s) ++cls;else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138) w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6) w(8304);
        if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--) w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return [cl.subarray(0, cli), s];
};
// calculate the length of output from tree, code lengths
var clen = function (cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i) l += cf[i] * cl[i];
  return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function (out, pos, dat) {
  // no need to write 00 as type: TypedArray defaults to 0
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >>> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i) out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
// writes a block
var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a = hTree(lf, 15),
    dlt = _a[0],
    mlb = _a[1];
  var _b = hTree(df, 15),
    ddt = _b[0],
    mdb = _b[1];
  var _c = lc(dlt),
    lclt = _c[0],
    nlc = _c[1];
  var _d = lc(ddt),
    lcdt = _d[0],
    ndc = _d[1];
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i) lcfreq[lclt[i] & 31]++;
  for (var i = 0; i < lcdt.length; ++i) lcfreq[lcdt[i] & 31]++;
  var _e = hTree(lcfreq, 7),
    lct = _e[0],
    mlcb = _e[1];
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc);
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
  if (flen <= ftlen && flen <= dtlen) return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i) wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15) wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    if (syms[i] > 255) {
      var len = syms[i] >>> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7) wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
      var dst = syms[i] & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3) wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
// empty
var et = /*#__PURE__*/new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function (dat, lvl, plvl, pre, post, lst) {
  var s = dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
  // writing to this writes to the output buffer
  var w = o.subarray(pre, o.length - post);
  var pos = 0;
  if (!lvl || s < 8) {
    for (var i = 0; i <= s; i += 65535) {
      // end
      var e = i + 65535;
      if (e < s) {
        // write full block
        pos = wfblk(w, pos, dat.subarray(i, e));
      } else {
        // write final block
        w[i] = lst;
        pos = wfblk(w, pos, dat.subarray(i, s));
      }
    }
  } else {
    var opt = deo[lvl - 1];
    var n = opt >>> 13,
      c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    //    prev 2-byte val map    curr 2-byte val map
    var prev = new u16(32768),
      head = new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3),
      bs2_1 = 2 * bs1_1;
    var hsh = function (i) {
      return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
    };
    // 24576 is an arbitrary number of maximum symbols per block
    // 424 buffer for last block
    var syms = new u32(25000);
    // length/literal freq   distance freq
    var lf = new u16(288),
      df = new u16(32);
    //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
    var lc_1 = 0,
      eb = 0,
      i = 0,
      li = 0,
      wi = 0,
      bs = 0;
    for (; i < s; ++i) {
      // hash value
      var hv = hsh(i);
      // index mod 32768
      var imod = i & 32767;
      // previous index with this value
      var pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      // We always should modify head and prev, but only add symbols if
      // this data is not yet processed ("wait" for wait index)
      if (wi <= i) {
        // bytes remaining
        var rem = s - i;
        if ((lc_1 > 7000 || li > 24576) && rem > 423) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j) lf[j] = 0;
          for (var j = 0; j < 30; ++j) df[j] = 0;
        }
        //  len    dist   chain
        var l = 2,
          d = 0,
          ch_1 = c,
          dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          // max possible length
          // not capped at dif because decompressors implement "rolling" index population
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
              if (nl > l) {
                l = nl, d = dif;
                // break out early when we reach "nice" (we are satisfied enough)
                if (nl > maxn) break;
                // now, find the rarest 2-byte sequence within this
                // length of literals and search for that instead.
                // Much faster than just using the start
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j + 32768 & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti + 32768 & 32767;
                  if (cd > md) md = cd, pimod = ti;
                }
              }
            }
            // check the previous match
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod + 32768 & 32767;
          }
        }
        // d will be nonzero only when a match was found
        if (d) {
          // store both dist and len data in one Uint32
          // Make sure this is recognized as a len/dist with 28th bit (2^28)
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31,
            din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    // this is the easiest way to avoid needing to maintain state
    if (!lst) pos = wfblk(w, pos, et);
  }
  return slc(o, 0, pre + shft(pos) + post);
};
// Alder32
var adler = function () {
  var a = 1,
    b = 0;
  return {
    p: function (d) {
      // closures have awful performance
      var n = a,
        m = b;
      var l = d.length;
      for (var i = 0; i != l;) {
        var e = Math.min(i + 5552, l);
        for (; i < e; ++i) n += d[i], m += n;
        n %= 65521, m %= 65521;
      }
      a = n, b = m;
    },
    d: function () {
      return (a >>> 8 << 16 | (b & 255) << 8 | b >>> 8) + ((a & 255) << 23) * 2;
    }
  };
};
// deflate with opts
var dopt = function (dat, opt, pre, post, st) {
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
};
// write bytes
var wbytes = function (d, b, v) {
  for (; v; ++b) d[b] = v, v >>>= 8;
};
// zlib header
var zlh = function (c, o) {
  var lv = o.level,
    fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c[0] = 120, c[1] = fl << 6 | (fl ? 32 - 2 * fl : 1);
};
// zlib valid
var zlv = function (d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw 'invalid zlib data';
  if (d[1] & 32) throw 'invalid zlib data: preset dictionaries not supported';
};
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */
function zlibSync(data, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var a = adler();
  a.p(data);
  var d = dopt(data, opts, 2, 4);
  return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
function strToU8(str, latin1) {
  var l = str.length;
  if (!latin1 && typeof TextEncoder != 'undefined') return new TextEncoder().encode(str);
  var ar = new u8(str.length + (str.length >>> 1));
  var ai = 0;
  var w = function (v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1) w(c);else if (c < 2048) w(192 | c >>> 6), w(128 | c & 63);else if (c > 55295 && c < 57344) c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >>> 18), w(128 | c >>> 12 & 63), w(128 | c >>> 6 & 63), w(128 | c & 63);else w(224 | c >>> 12), w(128 | c >>> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */
function strFromU8(dat, latin1) {
  var r = '';
  if (!latin1 && typeof TextDecoder != 'undefined') return new TextDecoder().decode(dat);
  for (var i = 0; i < dat.length;) {
    var c = dat[i++];
    if (c < 128 || latin1) r += String.fromCharCode(c);else if (c < 224) r += String.fromCharCode((c & 31) << 6 | dat[i++] & 63);else if (c < 240) r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63);else c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
  }
  return r;
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value

// An array of all currently registered event handlers for a type

// A map of event types and their corresponding event handlers.

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all) {
  all = all || Object.create(null);
  return {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function emit(type, evt) {
      (all[type] || []).slice().map(function (handler) {
        handler(evt);
      });
      (all['*'] || []).slice().map(function (handler) {
        handler(type, evt);
      });
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (mitt);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \**********************************************************************************/
/*! exports provided: IGNORED_NODE, NodeType, addHoverClass, buildNodeWithSN, createCache, is2DCanvasBlank, isElement, isShadowRoot, maskInputValue, needMaskingText, rebuild, serializeNodeWithId, snapshot, transformAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORED_NODE", function() { return IGNORED_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHoverClass", function() { return addHoverClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNodeWithSN", function() { return buildNodeWithSN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCache", function() { return createCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is2DCanvasBlank", function() { return is2DCanvasBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskInputValue", function() { return maskInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needMaskingText", function() { return needMaskingText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebuild", function() { return rebuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeNodeWithId", function() { return serializeNodeWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshot", function() { return snapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAttribute", function() { return transformAttribute; });
var NodeType;
(function (NodeType) {
  NodeType[NodeType["Document"] = 0] = "Document";
  NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
  NodeType[NodeType["Element"] = 2] = "Element";
  NodeType[NodeType["Text"] = 3] = "Text";
  NodeType[NodeType["CDATA"] = 4] = "CDATA";
  NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));
function isElement(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
  var _a;
  var host = (_a = n) === null || _a === void 0 ? void 0 : _a.host;
  return Boolean(host && host.shadowRoot && host.shadowRoot === n);
}
function maskInputValue(_a) {
  var maskInputOptions = _a.maskInputOptions,
    tagName = _a.tagName,
    type = _a.type,
    value = _a.value,
    maskInputFn = _a.maskInputFn;
  var text = value || '';
  if (maskInputOptions[tagName.toLowerCase()] || maskInputOptions[type]) {
    if (maskInputFn) {
      text = maskInputFn(text);
    } else {
      text = '*'.repeat(text.length);
    }
  }
  return text;
}
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
  var ctx = canvas.getContext('2d');
  if (!ctx) return true;
  var chunkSize = 50;
  for (var x = 0; x < canvas.width; x += chunkSize) {
    for (var y = 0; y < canvas.height; y += chunkSize) {
      var getImageData = ctx.getImageData;
      var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
      var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
      if (pixelBuffer.some(function (pixel) {
        return pixel !== 0;
      })) return false;
    }
  }
  return true;
}
var _id = 1;
var tagNameRegex = new RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = -2;
function genId() {
  return _id++;
}
function getValidTagName(element) {
  if (element instanceof HTMLFormElement) {
    return 'form';
  }
  var processedTagName = element.tagName.toLowerCase().trim();
  if (tagNameRegex.test(processedTagName)) {
    return 'div';
  }
  return processedTagName;
}
function getCssRulesString(s) {
  try {
    var rules = s.rules || s.cssRules;
    return rules ? Array.from(rules).map(getCssRuleString).join('') : null;
  } catch (error) {
    return null;
  }
}
function getCssRuleString(rule) {
  var cssStringified = rule.cssText;
  if (isCSSImportRule(rule)) {
    try {
      cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
    } catch (_a) {}
  }
  return cssStringified;
}
function isCSSImportRule(rule) {
  return 'styleSheet' in rule;
}
function stringifyStyleSheet(sheet) {
  return sheet.cssRules ? Array.from(sheet.cssRules).map(function (rule) {
    return rule.cssText || '';
  }).join('') : '';
}
function extractOrigin(url) {
  var origin = '';
  if (url.indexOf('//') > -1) {
    origin = url.split('/').slice(0, 3).join('/');
  } else {
    origin = url.split('/')[0];
  }
  origin = origin.split('?')[0];
  return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
  return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
    var filePath = path1 || path2 || path3;
    var maybeQuote = quote1 || quote2 || '';
    if (!filePath) {
      return origin;
    }
    if (!RELATIVE_PATH.test(filePath)) {
      return "url(" + maybeQuote + filePath + maybeQuote + ")";
    }
    if (DATA_URI.test(filePath)) {
      return "url(" + maybeQuote + filePath + maybeQuote + ")";
    }
    if (filePath[0] === '/') {
      return "url(" + maybeQuote + (extractOrigin(href) + filePath) + maybeQuote + ")";
    }
    var stack = href.split('/');
    var parts = filePath.split('/');
    stack.pop();
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      if (part === '.') {
        continue;
      } else if (part === '..') {
        stack.pop();
      } else {
        stack.push(part);
      }
    }
    return "url(" + maybeQuote + stack.join('/') + maybeQuote + ")";
  });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
  if (attributeValue.trim() === '') {
    return attributeValue;
  }
  var pos = 0;
  function collectCharacters(regEx) {
    var chars;
    var match = regEx.exec(attributeValue.substring(pos));
    if (match) {
      chars = match[0];
      pos += chars.length;
      return chars;
    }
    return '';
  }
  var output = [];
  while (true) {
    collectCharacters(SRCSET_COMMAS_OR_SPACES);
    if (pos >= attributeValue.length) {
      break;
    }
    var url = collectCharacters(SRCSET_NOT_SPACES);
    if (url.slice(-1) === ',') {
      url = absoluteToDoc(doc, url.substring(0, url.length - 1));
      output.push(url);
    } else {
      var descriptorsStr = '';
      url = absoluteToDoc(doc, url);
      var inParens = false;
      while (true) {
        var c = attributeValue.charAt(pos);
        if (c === '') {
          output.push((url + descriptorsStr).trim());
          break;
        } else if (!inParens) {
          if (c === ',') {
            pos += 1;
            output.push((url + descriptorsStr).trim());
            break;
          } else if (c === '(') {
            inParens = true;
          }
        } else {
          if (c === ')') {
            inParens = false;
          }
        }
        descriptorsStr += c;
        pos += 1;
      }
    }
  }
  return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
  if (!attributeValue || attributeValue.trim() === '') {
    return attributeValue;
  }
  var a = doc.createElement('a');
  a.href = attributeValue;
  return a.href;
}
function isSVGElement(el) {
  return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
  var a = document.createElement('a');
  a.href = '';
  return a.href;
}
function transformAttribute(doc, tagName, name, value) {
  if (name === 'src' || name === 'href' && value) {
    return absoluteToDoc(doc, value);
  } else if (name === 'xlink:href' && value && value[0] !== '#') {
    return absoluteToDoc(doc, value);
  } else if (name === 'background' && value && (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
    return absoluteToDoc(doc, value);
  } else if (name === 'srcset' && value) {
    return getAbsoluteSrcsetString(doc, value);
  } else if (name === 'style' && value) {
    return absoluteToStylesheet(value, getHref());
  } else if (tagName === 'object' && name === 'data' && value) {
    return absoluteToDoc(doc, value);
  } else {
    return value;
  }
}
function _isBlockedElement(element, blockClass, blockSelector) {
  if (typeof blockClass === 'string') {
    if (element.classList.contains(blockClass)) {
      return true;
    }
  } else {
    for (var eIndex = 0; eIndex < element.classList.length; eIndex++) {
      var className = element.classList[eIndex];
      if (blockClass.test(className)) {
        return true;
      }
    }
  }
  if (blockSelector) {
    return element.matches(blockSelector);
  }
  return false;
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
  if (!node) {
    return false;
  }
  if (node.nodeType === node.ELEMENT_NODE) {
    if (typeof maskTextClass === 'string') {
      if (node.classList.contains(maskTextClass)) {
        return true;
      }
    } else {
      for (var eIndex = 0; eIndex < node.classList.length; eIndex++) {
        var className = node.classList[eIndex];
        if (maskTextClass.test(className)) {
          return true;
        }
      }
    }
    if (maskTextSelector) {
      if (node.matches(maskTextSelector)) {
        return true;
      }
    }
    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
  }
  if (node.nodeType === node.TEXT_NODE) {
    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
  }
  return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
  var win = iframeEl.contentWindow;
  if (!win) {
    return;
  }
  var fired = false;
  var readyState;
  try {
    readyState = win.document.readyState;
  } catch (error) {
    return;
  }
  if (readyState !== 'complete') {
    var timer_1 = setTimeout(function () {
      if (!fired) {
        listener();
        fired = true;
      }
    }, iframeLoadTimeout);
    iframeEl.addEventListener('load', function () {
      clearTimeout(timer_1);
      fired = true;
      listener();
    });
    return;
  }
  var blankUrl = 'about:blank';
  if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === '') {
    setTimeout(listener, 0);
    return;
  }
  iframeEl.addEventListener('load', listener);
}
function serializeNode(n, options) {
  var _a;
  var doc = options.doc,
    blockClass = options.blockClass,
    blockSelector = options.blockSelector,
    maskTextClass = options.maskTextClass,
    maskTextSelector = options.maskTextSelector,
    inlineStylesheet = options.inlineStylesheet,
    _b = options.maskInputOptions,
    maskInputOptions = _b === void 0 ? {} : _b,
    maskTextFn = options.maskTextFn,
    maskInputFn = options.maskInputFn,
    _c = options.dataURLOptions,
    dataURLOptions = _c === void 0 ? {} : _c,
    inlineImages = options.inlineImages,
    recordCanvas = options.recordCanvas,
    keepIframeSrcFn = options.keepIframeSrcFn;
  var rootId;
  if (doc.__sn) {
    var docId = doc.__sn.id;
    rootId = docId === 1 ? undefined : docId;
  }
  switch (n.nodeType) {
    case n.DOCUMENT_NODE:
      if (n.compatMode !== 'CSS1Compat') {
        return {
          type: NodeType.Document,
          childNodes: [],
          compatMode: n.compatMode,
          rootId: rootId
        };
      } else {
        return {
          type: NodeType.Document,
          childNodes: [],
          rootId: rootId
        };
      }
    case n.DOCUMENT_TYPE_NODE:
      return {
        type: NodeType.DocumentType,
        name: n.name,
        publicId: n.publicId,
        systemId: n.systemId,
        rootId: rootId
      };
    case n.ELEMENT_NODE:
      var needBlock = _isBlockedElement(n, blockClass, blockSelector);
      var tagName = getValidTagName(n);
      var attributes_1 = {};
      for (var _i = 0, _d = Array.from(n.attributes); _i < _d.length; _i++) {
        var _e = _d[_i],
          name_1 = _e.name,
          value = _e.value;
        attributes_1[name_1] = transformAttribute(doc, tagName, name_1, value);
      }
      if (tagName === 'link' && inlineStylesheet) {
        var stylesheet = Array.from(doc.styleSheets).find(function (s) {
          return s.href === n.href;
        });
        var cssText = null;
        if (stylesheet) {
          cssText = getCssRulesString(stylesheet);
        }
        if (cssText) {
          delete attributes_1.rel;
          delete attributes_1.href;
          attributes_1._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
      }
      if (tagName === 'style' && n.sheet && !(n.innerText || n.textContent || '').trim().length) {
        var cssText = getCssRulesString(n.sheet);
        if (cssText) {
          attributes_1._cssText = absoluteToStylesheet(cssText, getHref());
        }
      }
      if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        var value = n.value;
        if (attributes_1.type !== 'radio' && attributes_1.type !== 'checkbox' && attributes_1.type !== 'submit' && attributes_1.type !== 'button' && value) {
          attributes_1.value = maskInputValue({
            type: attributes_1.type,
            tagName: tagName,
            value: value,
            maskInputOptions: maskInputOptions,
            maskInputFn: maskInputFn
          });
        } else if (n.checked) {
          attributes_1.checked = n.checked;
        }
      }
      if (tagName === 'option') {
        if (n.selected && !maskInputOptions['select']) {
          attributes_1.selected = true;
        } else {
          delete attributes_1.selected;
        }
      }
      if (tagName === 'canvas' && recordCanvas) {
        if (n.__context === '2d') {
          if (!is2DCanvasBlank(n)) {
            attributes_1.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
          }
        } else if (!('__context' in n)) {
          var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
          var blankCanvas = document.createElement('canvas');
          blankCanvas.width = n.width;
          blankCanvas.height = n.height;
          var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
          if (canvasDataURL !== blankCanvasDataURL) {
            attributes_1.rr_dataURL = canvasDataURL;
          }
        }
      }
      if (tagName === 'img' && inlineImages) {
        if (!canvasService) {
          canvasService = doc.createElement('canvas');
          canvasCtx = canvasService.getContext('2d');
        }
        var image_1 = n;
        var oldValue_1 = image_1.crossOrigin;
        image_1.crossOrigin = 'anonymous';
        var recordInlineImage = function () {
          try {
            canvasService.width = image_1.naturalWidth;
            canvasService.height = image_1.naturalHeight;
            canvasCtx.drawImage(image_1, 0, 0);
            attributes_1.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
          } catch (err) {
            console.warn("Cannot inline img src=" + image_1.currentSrc + "! Error: " + err);
          }
          oldValue_1 ? attributes_1.crossOrigin = oldValue_1 : delete attributes_1.crossOrigin;
        };
        if (image_1.complete && image_1.naturalWidth !== 0) recordInlineImage();else image_1.onload = recordInlineImage;
      }
      if (tagName === 'audio' || tagName === 'video') {
        attributes_1.rr_mediaState = n.paused ? 'paused' : 'played';
        attributes_1.rr_mediaCurrentTime = n.currentTime;
      }
      if (n.scrollLeft) {
        attributes_1.rr_scrollLeft = n.scrollLeft;
      }
      if (n.scrollTop) {
        attributes_1.rr_scrollTop = n.scrollTop;
      }
      if (needBlock) {
        var _f = n.getBoundingClientRect(),
          width = _f.width,
          height = _f.height;
        attributes_1 = {
          "class": attributes_1["class"],
          rr_width: width + "px",
          rr_height: height + "px"
        };
      }
      if (tagName === 'iframe' && !keepIframeSrcFn(attributes_1.src)) {
        if (!n.contentDocument) {
          attributes_1.rr_src = attributes_1.src;
        }
        delete attributes_1.src;
      }
      return {
        type: NodeType.Element,
        tagName: tagName,
        attributes: attributes_1,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock: needBlock,
        rootId: rootId
      };
    case n.TEXT_NODE:
      var parentTagName = n.parentNode && n.parentNode.tagName;
      var textContent = n.textContent;
      var isStyle = parentTagName === 'STYLE' ? true : undefined;
      var isScript = parentTagName === 'SCRIPT' ? true : undefined;
      if (isStyle && textContent) {
        try {
          if (n.nextSibling || n.previousSibling) {} else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
            textContent = stringifyStyleSheet(n.parentNode.sheet);
          }
        } catch (err) {
          console.warn("Cannot get CSS styles from text's parentNode. Error: " + err, n);
        }
        textContent = absoluteToStylesheet(textContent, getHref());
      }
      if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
      }
      if (!isStyle && !isScript && needMaskingText(n, maskTextClass, maskTextSelector) && textContent) {
        textContent = maskTextFn ? maskTextFn(textContent) : textContent.replace(/[\S]/g, '*');
      }
      return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle: isStyle,
        rootId: rootId
      };
    case n.CDATA_SECTION_NODE:
      return {
        type: NodeType.CDATA,
        textContent: '',
        rootId: rootId
      };
    case n.COMMENT_NODE:
      return {
        type: NodeType.Comment,
        textContent: n.textContent || '',
        rootId: rootId
      };
    default:
      return false;
  }
}
function lowerIfExists(maybeAttr) {
  if (maybeAttr === undefined) {
    return '';
  } else {
    return maybeAttr.toLowerCase();
  }
}
function slimDOMExcluded(sn, slimDOMOptions) {
  if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
    return true;
  } else if (sn.type === NodeType.Element) {
    if (slimDOMOptions.script && (sn.tagName === 'script' || sn.tagName === 'link' && sn.attributes.rel === 'preload' && sn.attributes.as === 'script' || sn.tagName === 'link' && sn.attributes.rel === 'prefetch' && typeof sn.attributes.href === 'string' && sn.attributes.href.endsWith('.js'))) {
      return true;
    } else if (slimDOMOptions.headFavicon && (sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon' || sn.tagName === 'meta' && (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) || lowerIfExists(sn.attributes.name) === 'application-name' || lowerIfExists(sn.attributes.rel) === 'icon' || lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' || lowerIfExists(sn.attributes.rel) === 'shortcut icon'))) {
      return true;
    } else if (sn.tagName === 'meta') {
      if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
        return true;
      } else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === 'pinterest')) {
        return true;
      } else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === 'robots' || lowerIfExists(sn.attributes.name) === 'googlebot' || lowerIfExists(sn.attributes.name) === 'bingbot')) {
        return true;
      } else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes['http-equiv'] !== undefined) {
        return true;
      } else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === 'author' || lowerIfExists(sn.attributes.name) === 'generator' || lowerIfExists(sn.attributes.name) === 'framework' || lowerIfExists(sn.attributes.name) === 'publisher' || lowerIfExists(sn.attributes.name) === 'progid' || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) {
        return true;
      } else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === 'google-site-verification' || lowerIfExists(sn.attributes.name) === 'yandex-verification' || lowerIfExists(sn.attributes.name) === 'csrf-token' || lowerIfExists(sn.attributes.name) === 'p:domain_verify' || lowerIfExists(sn.attributes.name) === 'verify-v1' || lowerIfExists(sn.attributes.name) === 'verification' || lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
        return true;
      }
    }
  }
  return false;
}
function serializeNodeWithId(n, options) {
  var doc = options.doc,
    map = options.map,
    blockClass = options.blockClass,
    blockSelector = options.blockSelector,
    maskTextClass = options.maskTextClass,
    maskTextSelector = options.maskTextSelector,
    _a = options.skipChild,
    skipChild = _a === void 0 ? false : _a,
    _b = options.inlineStylesheet,
    inlineStylesheet = _b === void 0 ? true : _b,
    _c = options.maskInputOptions,
    maskInputOptions = _c === void 0 ? {} : _c,
    maskTextFn = options.maskTextFn,
    maskInputFn = options.maskInputFn,
    slimDOMOptions = options.slimDOMOptions,
    _d = options.dataURLOptions,
    dataURLOptions = _d === void 0 ? {} : _d,
    _e = options.inlineImages,
    inlineImages = _e === void 0 ? false : _e,
    _f = options.recordCanvas,
    recordCanvas = _f === void 0 ? false : _f,
    onSerialize = options.onSerialize,
    onIframeLoad = options.onIframeLoad,
    _g = options.iframeLoadTimeout,
    iframeLoadTimeout = _g === void 0 ? 5000 : _g,
    _h = options.keepIframeSrcFn,
    keepIframeSrcFn = _h === void 0 ? function () {
      return false;
    } : _h;
  var _j = options.preserveWhiteSpace,
    preserveWhiteSpace = _j === void 0 ? true : _j;
  var _serializedNode = serializeNode(n, {
    doc: doc,
    blockClass: blockClass,
    blockSelector: blockSelector,
    maskTextClass: maskTextClass,
    maskTextSelector: maskTextSelector,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    maskTextFn: maskTextFn,
    maskInputFn: maskInputFn,
    dataURLOptions: dataURLOptions,
    inlineImages: inlineImages,
    recordCanvas: recordCanvas,
    keepIframeSrcFn: keepIframeSrcFn
  });
  if (!_serializedNode) {
    console.warn(n, 'not serialized');
    return null;
  }
  var id;
  if ('__sn' in n) {
    id = n.__sn.id;
  } else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType.Text && !_serializedNode.isStyle && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length) {
    id = IGNORED_NODE;
  } else {
    id = genId();
  }
  var serializedNode = Object.assign(_serializedNode, {
    id: id
  });
  n.__sn = serializedNode;
  if (id === IGNORED_NODE) {
    return null;
  }
  map[id] = n;
  if (onSerialize) {
    onSerialize(n);
  }
  var recordChild = !skipChild;
  if (serializedNode.type === NodeType.Element) {
    recordChild = recordChild && !serializedNode.needBlock;
    delete serializedNode.needBlock;
    if (n.shadowRoot) serializedNode.isShadowHost = true;
  }
  if ((serializedNode.type === NodeType.Document || serializedNode.type === NodeType.Element) && recordChild) {
    if (slimDOMOptions.headWhitespace && _serializedNode.type === NodeType.Element && _serializedNode.tagName === 'head') {
      preserveWhiteSpace = false;
    }
    var bypassOptions = {
      doc: doc,
      map: map,
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      skipChild: skipChild,
      inlineStylesheet: inlineStylesheet,
      maskInputOptions: maskInputOptions,
      maskTextFn: maskTextFn,
      maskInputFn: maskInputFn,
      slimDOMOptions: slimDOMOptions,
      dataURLOptions: dataURLOptions,
      inlineImages: inlineImages,
      recordCanvas: recordCanvas,
      preserveWhiteSpace: preserveWhiteSpace,
      onSerialize: onSerialize,
      onIframeLoad: onIframeLoad,
      iframeLoadTimeout: iframeLoadTimeout,
      keepIframeSrcFn: keepIframeSrcFn
    };
    for (var _i = 0, _k = Array.from(n.childNodes); _i < _k.length; _i++) {
      var childN = _k[_i];
      var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
      if (serializedChildNode) {
        serializedNode.childNodes.push(serializedChildNode);
      }
    }
    if (isElement(n) && n.shadowRoot) {
      for (var _l = 0, _m = Array.from(n.shadowRoot.childNodes); _l < _m.length; _l++) {
        var childN = _m[_l];
        var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
        if (serializedChildNode) {
          serializedChildNode.isShadow = true;
          serializedNode.childNodes.push(serializedChildNode);
        }
      }
    }
  }
  if (n.parentNode && isShadowRoot(n.parentNode)) {
    serializedNode.isShadow = true;
  }
  if (serializedNode.type === NodeType.Element && serializedNode.tagName === 'iframe') {
    onceIframeLoaded(n, function () {
      var iframeDoc = n.contentDocument;
      if (iframeDoc && onIframeLoad) {
        var serializedIframeNode = serializeNodeWithId(iframeDoc, {
          doc: iframeDoc,
          map: map,
          blockClass: blockClass,
          blockSelector: blockSelector,
          maskTextClass: maskTextClass,
          maskTextSelector: maskTextSelector,
          skipChild: false,
          inlineStylesheet: inlineStylesheet,
          maskInputOptions: maskInputOptions,
          maskTextFn: maskTextFn,
          maskInputFn: maskInputFn,
          slimDOMOptions: slimDOMOptions,
          dataURLOptions: dataURLOptions,
          inlineImages: inlineImages,
          recordCanvas: recordCanvas,
          preserveWhiteSpace: preserveWhiteSpace,
          onSerialize: onSerialize,
          onIframeLoad: onIframeLoad,
          iframeLoadTimeout: iframeLoadTimeout,
          keepIframeSrcFn: keepIframeSrcFn
        });
        if (serializedIframeNode) {
          onIframeLoad(n, serializedIframeNode);
        }
      }
    }, iframeLoadTimeout);
  }
  return serializedNode;
}
function snapshot(n, options) {
  var _a = options || {},
    _b = _a.blockClass,
    blockClass = _b === void 0 ? 'rr-block' : _b,
    _c = _a.blockSelector,
    blockSelector = _c === void 0 ? null : _c,
    _d = _a.maskTextClass,
    maskTextClass = _d === void 0 ? 'rr-mask' : _d,
    _e = _a.maskTextSelector,
    maskTextSelector = _e === void 0 ? null : _e,
    _f = _a.inlineStylesheet,
    inlineStylesheet = _f === void 0 ? true : _f,
    _g = _a.inlineImages,
    inlineImages = _g === void 0 ? false : _g,
    _h = _a.recordCanvas,
    recordCanvas = _h === void 0 ? false : _h,
    _j = _a.maskAllInputs,
    maskAllInputs = _j === void 0 ? false : _j,
    maskTextFn = _a.maskTextFn,
    maskInputFn = _a.maskInputFn,
    _k = _a.slimDOM,
    slimDOM = _k === void 0 ? false : _k,
    dataURLOptions = _a.dataURLOptions,
    preserveWhiteSpace = _a.preserveWhiteSpace,
    onSerialize = _a.onSerialize,
    onIframeLoad = _a.onIframeLoad,
    iframeLoadTimeout = _a.iframeLoadTimeout,
    _l = _a.keepIframeSrcFn,
    keepIframeSrcFn = _l === void 0 ? function () {
      return false;
    } : _l;
  var idNodeMap = {};
  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : maskAllInputs === false ? {
    password: true
  } : maskAllInputs;
  var slimDOMOptions = slimDOM === true || slimDOM === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaDescKeywords: slimDOM === 'all',
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaAuthorship: true,
    headMetaVerification: true
  } : slimDOM === false ? {} : slimDOM;
  return [serializeNodeWithId(n, {
    doc: n,
    map: idNodeMap,
    blockClass: blockClass,
    blockSelector: blockSelector,
    maskTextClass: maskTextClass,
    maskTextSelector: maskTextSelector,
    skipChild: false,
    inlineStylesheet: inlineStylesheet,
    maskInputOptions: maskInputOptions,
    maskTextFn: maskTextFn,
    maskInputFn: maskInputFn,
    slimDOMOptions: slimDOMOptions,
    dataURLOptions: dataURLOptions,
    inlineImages: inlineImages,
    recordCanvas: recordCanvas,
    preserveWhiteSpace: preserveWhiteSpace,
    onSerialize: onSerialize,
    onIframeLoad: onIframeLoad,
    iframeLoadTimeout: iframeLoadTimeout,
    keepIframeSrcFn: keepIframeSrcFn
  }), idNodeMap];
}
var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options) {
  if (options === void 0) {
    options = {};
  }
  var lineno = 1;
  var column = 1;
  function updatePosition(str) {
    var lines = str.match(/\n/g);
    if (lines) {
      lineno += lines.length;
    }
    var i = str.lastIndexOf('\n');
    column = i === -1 ? column + str.length : str.length - i;
  }
  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  var Position = function () {
    function Position(start) {
      this.start = start;
      this.end = {
        line: lineno,
        column: column
      };
      this.source = options.source;
    }
    return Position;
  }();
  Position.prototype.content = css;
  var errorsList = [];
  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;
    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }
  function stylesheet() {
    var rulesList = rules();
    return {
      type: 'stylesheet',
      stylesheet: {
        source: options.source,
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
  }
  function open() {
    return match(/^{\s*/);
  }
  function close() {
    return match(/^}/);
  }
  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);
    while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }
    return rules;
  }
  function match(re) {
    var m = re.exec(css);
    if (!m) {
      return;
    }
    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }
  function whitespace() {
    match(/^\s*/);
  }
  function comments(rules) {
    if (rules === void 0) {
      rules = [];
    }
    var c;
    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
      c = comment();
    }
    return rules;
  }
  function comment() {
    var pos = position();
    if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
      return;
    }
    var i = 2;
    while ('' !== css.charAt(i) && ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if ('' === css.charAt(i - 1)) {
      return error('End of comment missing');
    }
    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;
    return pos({
      type: 'comment',
      comment: str
    });
  }
  function selector() {
    var m = match(/^([^{]+)/);
    if (!m) {
      return;
    }
    return trim(m[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '').replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
      return m.replace(/,/g, '\u200C');
    }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
      return s.replace(/\u200C/g, ',');
    });
  }
  function declaration() {
    var pos = position();
    var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!propMatch) {
      return;
    }
    var prop = trim(propMatch[0]);
    if (!match(/^:\s*/)) {
      return error("property missing ':'");
    }
    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
    var ret = pos({
      type: 'declaration',
      property: prop.replace(commentre, ''),
      value: val ? trim(val[0]).replace(commentre, '') : ''
    });
    match(/^[;\s]*/);
    return ret;
  }
  function declarations() {
    var decls = [];
    if (!open()) {
      return error("missing '{'");
    }
    comments(decls);
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
      decl = declaration();
    }
    if (!close()) {
      return error("missing '}'");
    }
    return decls;
  }
  function keyframe() {
    var m;
    var vals = [];
    var pos = position();
    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }
    if (!vals.length) {
      return;
    }
    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations()
    });
  }
  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);
    if (!m) {
      return;
    }
    var vendor = m[1];
    m = match(/^([-\w]+)\s*/);
    if (!m) {
      return error('@keyframes missing name');
    }
    var name = m[1];
    if (!open()) {
      return error("@keyframes missing '{'");
    }
    var frame;
    var frames = comments();
    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }
    if (!close()) {
      return error("@keyframes missing '}'");
    }
    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames
    });
  }
  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);
    if (!m) {
      return;
    }
    var supports = trim(m[1]);
    if (!open()) {
      return error("@supports missing '{'");
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error("@supports missing '}'");
    }
    return pos({
      type: 'supports',
      supports: supports,
      rules: style
    });
  }
  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);
    if (!m) {
      return;
    }
    if (!open()) {
      return error("@host missing '{'");
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error("@host missing '}'");
    }
    return pos({
      type: 'host',
      rules: style
    });
  }
  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);
    if (!m) {
      return;
    }
    var media = trim(m[1]);
    if (!open()) {
      return error("@media missing '{'");
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error("@media missing '}'");
    }
    return pos({
      type: 'media',
      media: media,
      rules: style
    });
  }
  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) {
      return;
    }
    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2])
    });
  }
  function atpage() {
    var pos = position();
    var m = match(/^@page */);
    if (!m) {
      return;
    }
    var sel = selector() || [];
    if (!open()) {
      return error("@page missing '{'");
    }
    var decls = comments();
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) {
      return error("@page missing '}'");
    }
    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls
    });
  }
  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) {
      return;
    }
    var vendor = trim(m[1]);
    var doc = trim(m[2]);
    if (!open()) {
      return error("@document missing '{'");
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error("@document missing '}'");
    }
    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style
    });
  }
  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);
    if (!m) {
      return;
    }
    if (!open()) {
      return error("@font-face missing '{'");
    }
    var decls = comments();
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) {
      return error("@font-face missing '}'");
    }
    return pos({
      type: 'font-face',
      declarations: decls
    });
  }
  var atimport = _compileAtrule('import');
  var atcharset = _compileAtrule('charset');
  var atnamespace = _compileAtrule('namespace');
  function _compileAtrule(name) {
    var re = new RegExp('^@' + name + '\\s*([^;]+);');
    return function () {
      var pos = position();
      var m = match(re);
      if (!m) {
        return;
      }
      var ret = {
        type: name
      };
      ret[name] = m[1].trim();
      return pos(ret);
    };
  }
  function atrule() {
    if (css[0] !== '@') {
      return;
    }
    return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface();
  }
  function rule() {
    var pos = position();
    var sel = selector();
    if (!sel) {
      return error('selector missing');
    }
    comments();
    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    });
  }
  return addParent(stylesheet());
}
function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;
  for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
    var k = _a[_i];
    var value = obj[k];
    if (Array.isArray(value)) {
      value.forEach(function (v) {
        addParent(v, childParent);
      });
    } else if (value && typeof value === 'object') {
      addParent(value, childParent);
    }
  }
  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }
  return obj;
}
var tagMap = {
  script: 'noscript',
  altglyph: 'altGlyph',
  altglyphdef: 'altGlyphDef',
  altglyphitem: 'altGlyphItem',
  animatecolor: 'animateColor',
  animatemotion: 'animateMotion',
  animatetransform: 'animateTransform',
  clippath: 'clipPath',
  feblend: 'feBlend',
  fecolormatrix: 'feColorMatrix',
  fecomponenttransfer: 'feComponentTransfer',
  fecomposite: 'feComposite',
  feconvolvematrix: 'feConvolveMatrix',
  fediffuselighting: 'feDiffuseLighting',
  fedisplacementmap: 'feDisplacementMap',
  fedistantlight: 'feDistantLight',
  fedropshadow: 'feDropShadow',
  feflood: 'feFlood',
  fefunca: 'feFuncA',
  fefuncb: 'feFuncB',
  fefuncg: 'feFuncG',
  fefuncr: 'feFuncR',
  fegaussianblur: 'feGaussianBlur',
  feimage: 'feImage',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  femorphology: 'feMorphology',
  feoffset: 'feOffset',
  fepointlight: 'fePointLight',
  fespecularlighting: 'feSpecularLighting',
  fespotlight: 'feSpotLight',
  fetile: 'feTile',
  feturbulence: 'feTurbulence',
  foreignobject: 'foreignObject',
  glyphref: 'glyphRef',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient'
};
function getTagName(n) {
  var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
  if (tagName === 'link' && n.attributes._cssText) {
    tagName = 'style';
  }
  return tagName;
}
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var HOVER_SELECTOR = /([^\\]):hover/;
var HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function addHoverClass(cssText, cache) {
  var cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
  if (cachedStyle) return cachedStyle;
  var ast = parse(cssText, {
    silent: true
  });
  if (!ast.stylesheet) {
    return cssText;
  }
  var selectors = [];
  ast.stylesheet.rules.forEach(function (rule) {
    if ('selectors' in rule) {
      (rule.selectors || []).forEach(function (selector) {
        if (HOVER_SELECTOR.test(selector)) {
          selectors.push(selector);
        }
      });
    }
  });
  if (selectors.length === 0) {
    return cssText;
  }
  var selectorMatcher = new RegExp(selectors.filter(function (selector, index) {
    return selectors.indexOf(selector) === index;
  }).sort(function (a, b) {
    return b.length - a.length;
  }).map(function (selector) {
    return escapeRegExp(selector);
  }).join('|'), 'g');
  var result = cssText.replace(selectorMatcher, function (selector) {
    var newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
    return selector + ", " + newSelector;
  });
  cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
  return result;
}
function createCache() {
  var stylesWithHoverClass = new Map();
  return {
    stylesWithHoverClass: stylesWithHoverClass
  };
}
function buildNode(n, options) {
  var doc = options.doc,
    hackCss = options.hackCss,
    cache = options.cache;
  switch (n.type) {
    case NodeType.Document:
      return doc.implementation.createDocument(null, '', null);
    case NodeType.DocumentType:
      return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
    case NodeType.Element:
      var tagName = getTagName(n);
      var node_1;
      if (n.isSVG) {
        node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
      } else {
        node_1 = doc.createElement(tagName);
      }
      var _loop_1 = function (name_1) {
        if (!n.attributes.hasOwnProperty(name_1)) {
          return "continue";
        }
        var value = n.attributes[name_1];
        if (tagName === 'option' && name_1 === 'selected' && value === false) {
          return "continue";
        }
        value = typeof value === 'boolean' || typeof value === 'number' ? '' : value;
        if (!name_1.startsWith('rr_')) {
          var isTextarea = tagName === 'textarea' && name_1 === 'value';
          var isRemoteOrDynamicCss = tagName === 'style' && name_1 === '_cssText';
          if (isRemoteOrDynamicCss && hackCss) {
            value = addHoverClass(value, cache);
          }
          if (isTextarea || isRemoteOrDynamicCss) {
            var child = doc.createTextNode(value);
            for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
              var c = _a[_i];
              if (c.nodeType === node_1.TEXT_NODE) {
                node_1.removeChild(c);
              }
            }
            node_1.appendChild(child);
            return "continue";
          }
          try {
            if (n.isSVG && name_1 === 'xlink:href') {
              node_1.setAttributeNS('http://www.w3.org/1999/xlink', name_1, value);
            } else if (name_1 === 'onload' || name_1 === 'onclick' || name_1.substring(0, 7) === 'onmouse') {
              node_1.setAttribute('_' + name_1, value);
            } else if (tagName === 'meta' && n.attributes['http-equiv'] === 'Content-Security-Policy' && name_1 === 'content') {
              node_1.setAttribute('csp-content', value);
              return "continue";
            } else if (tagName === 'link' && n.attributes.rel === 'preload' && n.attributes.as === 'script') {} else if (tagName === 'link' && n.attributes.rel === 'prefetch' && typeof n.attributes.href === 'string' && n.attributes.href.endsWith('.js')) {} else if (tagName === 'img' && n.attributes.srcset && n.attributes.rr_dataURL) {
              node_1.setAttribute('rrweb-original-srcset', n.attributes.srcset);
            } else {
              node_1.setAttribute(name_1, value);
            }
          } catch (error) {}
        } else {
          if (tagName === 'canvas' && name_1 === 'rr_dataURL') {
            var image_1 = document.createElement('img');
            image_1.src = value;
            image_1.onload = function () {
              var ctx = node_1.getContext('2d');
              if (ctx) {
                ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
              }
            };
          } else if (tagName === 'img' && name_1 === 'rr_dataURL') {
            var image = node_1;
            if (!image.currentSrc.startsWith('data:')) {
              image.setAttribute('rrweb-original-src', n.attributes.src);
              image.src = value;
            }
          }
          if (name_1 === 'rr_width') {
            node_1.style.width = value;
          } else if (name_1 === 'rr_height') {
            node_1.style.height = value;
          } else if (name_1 === 'rr_mediaCurrentTime') {
            node_1.currentTime = n.attributes.rr_mediaCurrentTime;
          } else if (name_1 === 'rr_mediaState') {
            switch (value) {
              case 'played':
                node_1.play()["catch"](function (e) {
                  return console.warn('media playback error', e);
                });
                break;
              case 'paused':
                node_1.pause();
                break;
            }
          }
        }
      };
      for (var name_1 in n.attributes) {
        _loop_1(name_1);
      }
      if (n.isShadowHost) {
        if (!node_1.shadowRoot) {
          node_1.attachShadow({
            mode: 'open'
          });
        } else {
          while (node_1.shadowRoot.firstChild) {
            node_1.shadowRoot.removeChild(node_1.shadowRoot.firstChild);
          }
        }
      }
      return node_1;
    case NodeType.Text:
      return doc.createTextNode(n.isStyle && hackCss ? addHoverClass(n.textContent, cache) : n.textContent);
    case NodeType.CDATA:
      return doc.createCDATASection(n.textContent);
    case NodeType.Comment:
      return doc.createComment(n.textContent);
    default:
      return null;
  }
}
function buildNodeWithSN(n, options) {
  var doc = options.doc,
    map = options.map,
    _a = options.skipChild,
    skipChild = _a === void 0 ? false : _a,
    _b = options.hackCss,
    hackCss = _b === void 0 ? true : _b,
    afterAppend = options.afterAppend,
    cache = options.cache;
  var node = buildNode(n, {
    doc: doc,
    hackCss: hackCss,
    cache: cache
  });
  if (!node) {
    return null;
  }
  if (n.rootId) {
    console.assert(map[n.rootId] === doc, 'Target document should has the same root id.');
  }
  if (n.type === NodeType.Document) {
    doc.close();
    doc.open();
    if (n.compatMode === 'BackCompat' && n.childNodes && n.childNodes[0].type !== NodeType.DocumentType) {
      if (n.childNodes[0].type === NodeType.Element && 'xmlns' in n.childNodes[0].attributes && n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
        doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
      } else {
        doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
      }
    }
    node = doc;
  }
  node.__sn = n;
  map[n.id] = node;
  if ((n.type === NodeType.Document || n.type === NodeType.Element) && !skipChild) {
    for (var _i = 0, _c = n.childNodes; _i < _c.length; _i++) {
      var childN = _c[_i];
      var childNode = buildNodeWithSN(childN, {
        doc: doc,
        map: map,
        skipChild: false,
        hackCss: hackCss,
        afterAppend: afterAppend,
        cache: cache
      });
      if (!childNode) {
        console.warn('Failed to rebuild', childN);
        continue;
      }
      if (childN.isShadow && isElement(node) && node.shadowRoot) {
        node.shadowRoot.appendChild(childNode);
      } else {
        node.appendChild(childNode);
      }
      if (afterAppend) {
        afterAppend(childNode);
      }
    }
  }
  return node;
}
function visit(idNodeMap, onVisit) {
  function walk(node) {
    onVisit(node);
  }
  for (var key in idNodeMap) {
    if (idNodeMap[key]) {
      walk(idNodeMap[key]);
    }
  }
}
function handleScroll(node) {
  var n = node.__sn;
  if (n.type !== NodeType.Element) {
    return;
  }
  var el = node;
  for (var name_2 in n.attributes) {
    if (!(n.attributes.hasOwnProperty(name_2) && name_2.startsWith('rr_'))) {
      continue;
    }
    var value = n.attributes[name_2];
    if (name_2 === 'rr_scrollLeft') {
      el.scrollLeft = value;
    }
    if (name_2 === 'rr_scrollTop') {
      el.scrollTop = value;
    }
  }
}
function rebuild(n, options) {
  var doc = options.doc,
    onVisit = options.onVisit,
    _a = options.hackCss,
    hackCss = _a === void 0 ? true : _a,
    afterAppend = options.afterAppend,
    cache = options.cache;
  var idNodeMap = {};
  var node = buildNodeWithSN(n, {
    doc: doc,
    map: idNodeMap,
    skipChild: false,
    hackCss: hackCss,
    afterAppend: afterAppend,
    cache: cache
  });
  visit(idNodeMap, function (visitedNode) {
    if (onVisit) {
      onVisit(visitedNode);
    }
    handleScroll(visitedNode);
  });
  return [node, idNodeMap];
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js ***!
  \***************************************************************************/
/*! exports provided: __assign, __read, __rest, __spreadArray, __values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js ***!
  \***********************************************************************/
/*! exports provided: addCustomEvent, freezePage, pack, unpack, PLUGIN_NAME, getRecordConsolePlugin, getReplayConsolePlugin, record, EventType, IncrementalSource, MouseInteractions, ReplayerEvents, Replayer, utils, mirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addCustomEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freezePage", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["freezePage"]; });

/* harmony import */ var _packer_pack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packer/pack.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return _packer_pack_js__WEBPACK_IMPORTED_MODULE_1__["pack"]; });

/* harmony import */ var _packer_unpack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packer/unpack.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return _packer_unpack_js__WEBPACK_IMPORTED_MODULE_2__["unpack"]; });

/* harmony import */ var _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/console/record/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__["PLUGIN_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecordConsolePlugin", function() { return _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__["getRecordConsolePlugin"]; });

/* harmony import */ var _plugins_console_replay_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/console/replay/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReplayConsolePlugin", function() { return _plugins_console_replay_index_js__WEBPACK_IMPORTED_MODULE_4__["getReplayConsolePlugin"]; });

/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../record/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _record_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"]; });

/* harmony import */ var _replay_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../replay/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return _replay_index_js__WEBPACK_IMPORTED_MODULE_7__["Replayer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_8__["_mirror"]; });













/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js ***!
  \*****************************************************************/
/*! exports provided: record, Replayer, utils, mirror, EventType, IncrementalSource, MouseInteractions, ReplayerEvents, addCustomEvent, freezePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return addCustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freezePage", function() { return freezePage; });
/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _replay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replay/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return _replay_index_js__WEBPACK_IMPORTED_MODULE_1__["Replayer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["_mirror"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["MouseInteractions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["ReplayerEvents"]; });








var addCustomEvent = _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].addCustomEvent;
var freezePage = _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezePage;


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js ***!
  \***********************************************************************/
/*! exports provided: MARK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK", function() { return MARK; });
var MARK = 'v1';


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js ***!
  \***********************************************************************/
/*! exports provided: pack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return pack; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ext/fflate/esm/browser.js */ "./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js");



var pack = function (event) {
  var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), {
    v: _base_js__WEBPACK_IMPORTED_MODULE_2__["MARK"]
  });
  return Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["strFromU8"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["zlibSync"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["strToU8"])(JSON.stringify(_e))), true);
};


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js ***!
  \*************************************************************************/
/*! exports provided: unpack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return unpack; });
/* harmony import */ var _ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/fflate/esm/browser.js */ "./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js");


var unpack = function (raw) {
  if (typeof raw !== 'string') {
    return raw;
  }
  try {
    var e = JSON.parse(raw);
    if (e.timestamp) {
      return e;
    }
  } catch (error) {}
  try {
    var e = JSON.parse(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strFromU8"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["unzlibSync"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strToU8"])(raw, true))));
    if (e.v === _base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"]) {
      return e;
    }
    throw new Error("These events were packed with packer ".concat(e.v, " which is incompatible with current packer ").concat(_base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"], "."));
  } catch (error) {
    console.error(error);
    throw new Error('Unknown data format.');
  }
};


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js ***!
  \*****************************************************************************************************/
/*! exports provided: ErrorStackParser, StackFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStackParser", function() { return ErrorStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackFrame", function() { return StackFrame; });
var StackFrame = function () {
  function StackFrame(obj) {
    this.fileName = obj.fileName || '';
    this.functionName = obj.functionName || '';
    this.lineNumber = obj.lineNumber;
    this.columnNumber = obj.columnNumber;
  }
  StackFrame.prototype.toString = function () {
    var lineNumber = this.lineNumber || '';
    var columnNumber = this.columnNumber || '';
    if (this.functionName) {
      return this.functionName + ' (' + this.fileName + ':' + lineNumber + ':' + columnNumber + ')';
    }
    return this.fileName + ':' + lineNumber + ':' + columnNumber;
  };
  return StackFrame;
}();
var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
var ErrorStackParser = {
  parse: function (error) {
    if (!error) {
      return [];
    }
    if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
      return this.parseOpera(error);
    } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
      return this.parseV8OrIE(error);
    } else if (error.stack) {
      return this.parseFFOrSafari(error);
    } else {
      throw new Error('Cannot parse given Error object');
    }
  },
  extractLocation: function (urlLike) {
    if (urlLike.indexOf(':') === -1) {
      return [urlLike];
    }
    var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
    var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
    if (!parts) throw new Error("Cannot parse given url: ".concat(urlLike));
    return [parts[1], parts[2] || undefined, parts[3] || undefined];
  },
  parseV8OrIE: function (error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !!line.match(CHROME_IE_STACK_REGEXP);
    }, this);
    return filtered.map(function (line) {
      if (line.indexOf('(eval ') > -1) {
        line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
      }
      var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(');
      var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
      sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;
      var tokens = sanitizedLine.split(/\s+/).slice(1);
      var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
      var functionName = tokens.join(' ') || undefined;
      var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
      return new StackFrame({
        functionName: functionName,
        fileName: fileName,
        lineNumber: locationParts[1],
        columnNumber: locationParts[2]
      });
    }, this);
  },
  parseFFOrSafari: function (error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !line.match(SAFARI_NATIVE_CODE_REGEXP);
    }, this);
    return filtered.map(function (line) {
      if (line.indexOf(' > eval') > -1) {
        line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
      }
      if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
        return new StackFrame({
          functionName: line
        });
      } else {
        var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
        var matches = line.match(functionNameRegex);
        var functionName = matches && matches[1] ? matches[1] : undefined;
        var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
        return new StackFrame({
          functionName: functionName,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2]
        });
      }
    }, this);
  },
  parseOpera: function (e) {
    if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
      return this.parseOpera9(e);
    } else if (!e.stack) {
      return this.parseOpera10(e);
    } else {
      return this.parseOpera11(e);
    }
  },
  parseOpera9: function (e) {
    var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
    var lines = e.message.split('\n');
    var result = [];
    for (var i = 2, len = lines.length; i < len; i += 2) {
      var match = lineRE.exec(lines[i]);
      if (match) {
        result.push(new StackFrame({
          fileName: match[2],
          lineNumber: parseFloat(match[1])
        }));
      }
    }
    return result;
  },
  parseOpera10: function (e) {
    var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
    var lines = e.stacktrace.split('\n');
    var result = [];
    for (var i = 0, len = lines.length; i < len; i += 2) {
      var match = lineRE.exec(lines[i]);
      if (match) {
        result.push(new StackFrame({
          functionName: match[3] || undefined,
          fileName: match[2],
          lineNumber: parseFloat(match[1])
        }));
      }
    }
    return result;
  },
  parseOpera11: function (error) {
    var filtered = error.stack.split('\n').filter(function (line) {
      return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
    }, this);
    return filtered.map(function (line) {
      var tokens = line.split('@');
      var locationParts = this.extractLocation(tokens.pop());
      var functionCall = tokens.shift() || '';
      var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^)]*\)/g, '') || undefined;
      return new StackFrame({
        functionName: functionName,
        fileName: locationParts[0],
        lineNumber: locationParts[1],
        columnNumber: locationParts[2]
      });
    }, this);
  }
};


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js ***!
  \****************************************************************************************/
/*! exports provided: PLUGIN_NAME, getRecordConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return PLUGIN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordConsolePlugin", function() { return getRecordConsolePlugin; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-stack-parser.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js");




var defaultLogOptions = {
  level: ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'trace', 'warn'],
  lengthThreshold: 1000,
  logger: 'console'
};
function initLogObserver(cb, win, logOptions) {
  var e_1, _a;
  var loggerType = logOptions.logger;
  if (!loggerType) {
    return function () {};
  }
  var logger;
  if (typeof loggerType === 'string') {
    logger = win[loggerType];
  } else {
    logger = loggerType;
  }
  var logCount = 0;
  var cancelHandlers = [];
  if (logOptions.level.includes('error')) {
    if (window) {
      var errorHandler_1 = function (event) {
        var message = event.message,
          error = event.error;
        var trace = _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_2__["ErrorStackParser"].parse(error).map(function (stackFrame) {
          return stackFrame.toString();
        });
        var payload = [Object(_stringify_js__WEBPACK_IMPORTED_MODULE_3__["stringify"])(message, logOptions.stringifyOptions)];
        cb({
          level: 'error',
          trace: trace,
          payload: payload
        });
      };
      window.addEventListener('error', errorHandler_1);
      cancelHandlers.push(function () {
        if (window) window.removeEventListener('error', errorHandler_1);
      });
    }
  }
  try {
    for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(logOptions.level), _c = _b.next(); !_c.done; _c = _b.next()) {
      var levelType = _c.value;
      cancelHandlers.push(replace(logger, levelType));
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return function () {
    cancelHandlers.forEach(function (h) {
      return h();
    });
  };
  function replace(_logger, level) {
    var _this = this;
    if (!_logger[level]) {
      return function () {};
    }
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(_logger, level, function (original) {
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        original.apply(_this, args);
        try {
          var trace = _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_2__["ErrorStackParser"].parse(new Error()).map(function (stackFrame) {
            return stackFrame.toString();
          }).splice(1);
          var payload = args.map(function (s) {
            return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_3__["stringify"])(s, logOptions.stringifyOptions);
          });
          logCount++;
          if (logCount < logOptions.lengthThreshold) {
            cb({
              level: level,
              trace: trace,
              payload: payload
            });
          } else if (logCount === logOptions.lengthThreshold) {
            cb({
              level: 'warn',
              trace: [],
              payload: [Object(_stringify_js__WEBPACK_IMPORTED_MODULE_3__["stringify"])('The number of log records reached the threshold.')]
            });
          }
        } catch (error) {
          original.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(['rrweb logger error:', error], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
        }
      };
    });
  }
}
var PLUGIN_NAME = 'rrweb/console@1';
var getRecordConsolePlugin = function (options) {
  return {
    name: PLUGIN_NAME,
    observer: initLogObserver,
    options: options ? Object.assign({}, defaultLogOptions, options) : defaultLogOptions
  };
};


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js ***!
  \********************************************************************************************/
/*! exports provided: stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");

function pathToSelector(node) {
  if (!node || !node.outerHTML) {
    return '';
  }
  var path = '';
  while (node.parentElement) {
    var name_1 = node.localName;
    if (!name_1) {
      break;
    }
    name_1 = name_1.toLowerCase();
    var parent_1 = node.parentElement;
    var domSiblings = [];
    if (parent_1.children && parent_1.children.length > 0) {
      for (var i = 0; i < parent_1.children.length; i++) {
        var sibling = parent_1.children[i];
        if (sibling.localName && sibling.localName.toLowerCase) {
          if (sibling.localName.toLowerCase() === name_1) {
            domSiblings.push(sibling);
          }
        }
      }
    }
    if (domSiblings.length > 1) {
      name_1 += ':eq(' + domSiblings.indexOf(node) + ')';
    }
    path = name_1 + (path ? '>' + path : '');
    node = parent_1;
  }
  return path;
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isObjTooDeep(obj, limit) {
  var e_1, _a;
  if (limit === 0) {
    return true;
  }
  var keys = Object.keys(obj);
  try {
    for (var keys_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
      var key = keys_1_1.value;
      if (isObject(obj[key]) && isObjTooDeep(obj[key], limit - 1)) {
        return true;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return false;
}
function stringify(obj, stringifyOptions) {
  var options = {
    numOfKeysLimit: 50,
    depthOfLimit: 4
  };
  Object.assign(options, stringifyOptions);
  var stack = [];
  var keys = [];
  return JSON.stringify(obj, function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) {
        if (stack[0] === value) {
          value = '[Circular ~]';
        } else {
          value = '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
        }
      }
    } else {
      stack.push(value);
    }
    if (value === null || value === undefined) {
      return value;
    }
    if (shouldIgnore(value)) {
      return toString(value);
    }
    if (value instanceof Event) {
      var eventResult = {};
      for (var eventKey in value) {
        var eventValue = value[eventKey];
        if (Array.isArray(eventValue)) {
          eventResult[eventKey] = pathToSelector(eventValue.length ? eventValue[0] : null);
        } else {
          eventResult[eventKey] = eventValue;
        }
      }
      return eventResult;
    } else if (value instanceof Node) {
      if (value instanceof HTMLElement) {
        return value ? value.outerHTML : '';
      }
      return value.nodeName;
    } else if (value instanceof Error) {
      return value.stack ? value.stack + '\nEnd of stack for Error object' : value.name + ': ' + value.message;
    }
    return value;
  });
  function shouldIgnore(_obj) {
    if (isObject(_obj) && Object.keys(_obj).length > options.numOfKeysLimit) {
      return true;
    }
    if (typeof _obj === 'function') {
      return true;
    }
    if (isObject(_obj) && isObjTooDeep(_obj, options.depthOfLimit)) {
      return true;
    }
    return false;
  }
  function toString(_obj) {
    var str = _obj.toString();
    if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
      str = "".concat(str.slice(0, options.stringLengthLimit), "...");
    }
    return str;
  }
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js ***!
  \****************************************************************************************/
/*! exports provided: getReplayConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReplayConsolePlugin", function() { return getReplayConsolePlugin; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../record/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");



var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
var defaultLogConfig = {
  level: ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'trace', 'warn'],
  replayLogger: undefined
};
var LogReplayPlugin = function () {
  function LogReplayPlugin(config) {
    this.config = Object.assign(defaultLogConfig, config);
  }
  LogReplayPlugin.prototype.getConsoleLogger = function () {
    var e_1, _a;
    var _this = this;
    var replayLogger = {};
    var _loop_1 = function (level) {
      if (level === 'trace') {
        replayLogger[level] = function (data) {
          var logger = console.log[ORIGINAL_ATTRIBUTE_NAME] ? console.log[ORIGINAL_ATTRIBUTE_NAME] : console.log;
          logger.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(data.payload.map(function (s) {
            return JSON.parse(s);
          })), false), [_this.formatMessage(data)], false));
        };
      } else {
        replayLogger[level] = function (data) {
          var logger = console[level][ORIGINAL_ATTRIBUTE_NAME] ? console[level][ORIGINAL_ATTRIBUTE_NAME] : console[level];
          logger.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(data.payload.map(function (s) {
            return JSON.parse(s);
          })), false), [_this.formatMessage(data)], false));
        };
      }
    };
    try {
      for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.config.level), _c = _b.next(); !_c.done; _c = _b.next()) {
        var level = _c.value;
        _loop_1(level);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return replayLogger;
  };
  LogReplayPlugin.prototype.formatMessage = function (data) {
    if (data.trace.length === 0) {
      return '';
    }
    var stackPrefix = '\n\tat ';
    var result = stackPrefix;
    result += data.trace.join(stackPrefix);
    return result;
  };
  return LogReplayPlugin;
}();
var getReplayConsolePlugin = function (options) {
  var replayLogger = (options === null || options === void 0 ? void 0 : options.replayLogger) || new LogReplayPlugin(options).getConsoleLogger();
  return {
    handler: function (event, _isSync, context) {
      var logData = null;
      if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot && event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Log) {
        logData = event.data;
      } else if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Plugin && event.data.plugin === _record_index_js__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_NAME"]) {
        logData = event.data.payload;
      }
      if (logData) {
        try {
          if (typeof replayLogger[logData.level] === 'function') {
            replayLogger[logData.level](logData);
          }
        } catch (error) {
          if (context.replayer.config.showWarning) {
            console.warn(error);
          }
        }
      }
    }
  };
};


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js ***!
  \*********************************************************************************/
/*! exports provided: IframeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeManager", function() { return IframeManager; });
var IframeManager = function () {
  function IframeManager(options) {
    this.iframes = new WeakMap();
    this.mutationCb = options.mutationCb;
  }
  IframeManager.prototype.addIframe = function (iframeEl) {
    this.iframes.set(iframeEl, true);
  };
  IframeManager.prototype.addLoadListener = function (cb) {
    this.loadListener = cb;
  };
  IframeManager.prototype.attachIframe = function (iframeEl, childSn) {
    var _a;
    this.mutationCb({
      adds: [{
        parentId: iframeEl.__sn.id,
        nextId: null,
        node: childSn
      }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: true
    });
    (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
  };
  return IframeManager;
}();


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _iframe_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iframe-manager.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js");
/* harmony import */ var _shadow_dom_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shadow-dom-manager.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js");
/* harmony import */ var _observers_canvas_canvas_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers/canvas/canvas-manager.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js");








function wrapEvent(e) {
  return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, e), {
    timestamp: Date.now()
  });
}
var wrappedEmit;
var takeFullSnapshot;
var mirror = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["createMirror"])();
function record(options) {
  if (options === void 0) {
    options = {};
  }
  var emit = options.emit,
    checkoutEveryNms = options.checkoutEveryNms,
    checkoutEveryNth = options.checkoutEveryNth,
    _a = options.blockClass,
    blockClass = _a === void 0 ? 'rr-block' : _a,
    _b = options.blockSelector,
    blockSelector = _b === void 0 ? null : _b,
    _c = options.ignoreClass,
    ignoreClass = _c === void 0 ? 'rr-ignore' : _c,
    _d = options.maskTextClass,
    maskTextClass = _d === void 0 ? 'rr-mask' : _d,
    _e = options.maskTextSelector,
    maskTextSelector = _e === void 0 ? null : _e,
    _f = options.inlineStylesheet,
    inlineStylesheet = _f === void 0 ? true : _f,
    maskAllInputs = options.maskAllInputs,
    _maskInputOptions = options.maskInputOptions,
    _slimDOMOptions = options.slimDOMOptions,
    maskInputFn = options.maskInputFn,
    maskTextFn = options.maskTextFn,
    hooks = options.hooks,
    packFn = options.packFn,
    _g = options.sampling,
    sampling = _g === void 0 ? {} : _g,
    mousemoveWait = options.mousemoveWait,
    _h = options.recordCanvas,
    recordCanvas = _h === void 0 ? false : _h,
    _j = options.userTriggeredOnInput,
    userTriggeredOnInput = _j === void 0 ? false : _j,
    _k = options.collectFonts,
    collectFonts = _k === void 0 ? false : _k,
    _l = options.inlineImages,
    inlineImages = _l === void 0 ? false : _l,
    plugins = options.plugins,
    _m = options.keepIframeSrcFn,
    keepIframeSrcFn = _m === void 0 ? function () {
      return false;
    } : _m;
  if (!emit) {
    throw new Error('emit function is required');
  }
  if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
    sampling.mousemove = mousemoveWait;
  }
  var maskInputOptions = maskAllInputs === true ? {
    color: true,
    date: true,
    'datetime-local': true,
    email: true,
    month: true,
    number: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true,
    textarea: true,
    select: true,
    password: true
  } : _maskInputOptions !== undefined ? _maskInputOptions : {
    password: true
  };
  var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all' ? {
    script: true,
    comment: true,
    headFavicon: true,
    headWhitespace: true,
    headMetaSocial: true,
    headMetaRobots: true,
    headMetaHttpEquiv: true,
    headMetaVerification: true,
    headMetaAuthorship: _slimDOMOptions === 'all',
    headMetaDescKeywords: _slimDOMOptions === 'all'
  } : _slimDOMOptions ? _slimDOMOptions : {};
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["polyfill"])();
  var lastFullSnapshotEvent;
  var incrementalSnapshotCount = 0;
  var eventProcessor = function (e) {
    var e_1, _a;
    try {
      for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(plugins || []), _c = _b.next(); !_c.done; _c = _b.next()) {
        var plugin = _c.value;
        if (plugin.eventProcessor) {
          e = plugin.eventProcessor(e);
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    if (packFn) {
      e = packFn(e);
    }
    return e;
  };
  wrappedEmit = function (e, isCheckout) {
    var _a;
    if (((_a = _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"][0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) && e.type !== _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].FullSnapshot && !(e.type === _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot && e.data.source === _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Mutation)) {
      _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"].forEach(function (buf) {
        return buf.unfreeze();
      });
    }
    emit(eventProcessor(e), isCheckout);
    if (e.type === _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].FullSnapshot) {
      lastFullSnapshotEvent = e;
      incrementalSnapshotCount = 0;
    } else if (e.type === _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot) {
      if (e.data.source === _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Mutation && e.data.isAttachIframe) {
        return;
      }
      incrementalSnapshotCount++;
      var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
      var exceedTime = checkoutEveryNms && e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
      if (exceedCount || exceedTime) {
        takeFullSnapshot(true);
      }
    }
  };
  var wrappedMutationEmit = function (m) {
    wrappedEmit(wrapEvent({
      type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
      data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Mutation
      }, m)
    }));
  };
  var wrappedScrollEmit = function (p) {
    return wrappedEmit(wrapEvent({
      type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
      data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Scroll
      }, p)
    }));
  };
  var wrappedCanvasMutationEmit = function (p) {
    return wrappedEmit(wrapEvent({
      type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
      data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].CanvasMutation
      }, p)
    }));
  };
  var iframeManager = new _iframe_manager_js__WEBPACK_IMPORTED_MODULE_5__["IframeManager"]({
    mutationCb: wrappedMutationEmit
  });
  var canvasManager = new _observers_canvas_canvas_manager_js__WEBPACK_IMPORTED_MODULE_7__["CanvasManager"]({
    recordCanvas: recordCanvas,
    mutationCb: wrappedCanvasMutationEmit,
    win: window,
    blockClass: blockClass,
    mirror: mirror
  });
  var shadowDomManager = new _shadow_dom_manager_js__WEBPACK_IMPORTED_MODULE_6__["ShadowDomManager"]({
    mutationCb: wrappedMutationEmit,
    scrollCb: wrappedScrollEmit,
    bypassOptions: {
      blockClass: blockClass,
      blockSelector: blockSelector,
      maskTextClass: maskTextClass,
      maskTextSelector: maskTextSelector,
      inlineStylesheet: inlineStylesheet,
      maskInputOptions: maskInputOptions,
      maskTextFn: maskTextFn,
      maskInputFn: maskInputFn,
      recordCanvas: recordCanvas,
      inlineImages: inlineImages,
      sampling: sampling,
      slimDOMOptions: slimDOMOptions,
      iframeManager: iframeManager,
      canvasManager: canvasManager
    },
    mirror: mirror
  });
  takeFullSnapshot = function (isCheckout) {
    var _a, _b, _c, _d;
    if (isCheckout === void 0) {
      isCheckout = false;
    }
    wrappedEmit(wrapEvent({
      type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].Meta,
      data: {
        href: window.location.href,
        width: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowWidth"])(),
        height: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowHeight"])()
      }
    }), isCheckout);
    _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"].forEach(function (buf) {
      return buf.lock();
    });
    var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["snapshot"])(document, {
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        inlineStylesheet: inlineStylesheet,
        maskAllInputs: maskInputOptions,
        maskTextFn: maskTextFn,
        slimDOM: slimDOMOptions,
        recordCanvas: recordCanvas,
        inlineImages: inlineImages,
        onSerialize: function (n) {
          if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isIframeINode"])(n)) {
            iframeManager.addIframe(n);
          }
          if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hasShadowRoot"])(n)) {
            shadowDomManager.addShadowRoot(n.shadowRoot, document);
          }
        },
        onIframeLoad: function (iframe, childSn) {
          iframeManager.attachIframe(iframe, childSn);
          shadowDomManager.observeAttachShadow(iframe);
        },
        keepIframeSrcFn: keepIframeSrcFn
      }), 2),
      node = _e[0],
      idNodeMap = _e[1];
    if (!node) {
      return console.warn('Failed to snapshot the document');
    }
    mirror.map = idNodeMap;
    wrappedEmit(wrapEvent({
      type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].FullSnapshot,
      data: {
        node: node,
        initialOffset: {
          left: window.pageXOffset !== undefined ? window.pageXOffset : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) || ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) || (document === null || document === void 0 ? void 0 : document.body.scrollLeft) || 0,
          top: window.pageYOffset !== undefined ? window.pageYOffset : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) || ((_d = (_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.scrollTop) || (document === null || document === void 0 ? void 0 : document.body.scrollTop) || 0
        }
      }
    }));
    _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"].forEach(function (buf) {
      return buf.unlock();
    });
  };
  try {
    var handlers_1 = [];
    handlers_1.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('DOMContentLoaded', function () {
      wrappedEmit(wrapEvent({
        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].DomContentLoaded,
        data: {}
      }));
    }));
    var observe_1 = function (doc) {
      var _a;
      return Object(_observer_js__WEBPACK_IMPORTED_MODULE_2__["initObservers"])({
        mutationCb: wrappedMutationEmit,
        mousemoveCb: function (positions, source) {
          return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: {
              source: source,
              positions: positions
            }
          }));
        },
        mouseInteractionCb: function (d) {
          return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
              source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].MouseInteraction
            }, d)
          }));
        },
        scrollCb: wrappedScrollEmit,
        viewportResizeCb: function (d) {
          return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
              source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].ViewportResize
            }, d)
          }));
        },
        inputCb: function (v) {
          return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
              source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Input
            }, v)
          }));
        },
        mediaInteractionCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
              source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].MediaInteraction
            }, p)
          }));
        },
        styleSheetRuleCb: function (r) {
          return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
              source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].StyleSheetRule
            }, r)
          }));
        },
        styleDeclarationCb: function (r) {
          return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
              source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].StyleDeclaration
            }, r)
          }));
        },
        canvasMutationCb: wrappedCanvasMutationEmit,
        fontCb: function (p) {
          return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
              source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Font
            }, p)
          }));
        },
        blockClass: blockClass,
        ignoreClass: ignoreClass,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        maskInputOptions: maskInputOptions,
        inlineStylesheet: inlineStylesheet,
        sampling: sampling,
        recordCanvas: recordCanvas,
        inlineImages: inlineImages,
        userTriggeredOnInput: userTriggeredOnInput,
        collectFonts: collectFonts,
        doc: doc,
        maskInputFn: maskInputFn,
        maskTextFn: maskTextFn,
        blockSelector: blockSelector,
        slimDOMOptions: slimDOMOptions,
        mirror: mirror,
        iframeManager: iframeManager,
        shadowDomManager: shadowDomManager,
        canvasManager: canvasManager,
        plugins: ((_a = plugins === null || plugins === void 0 ? void 0 : plugins.filter(function (p) {
          return p.observer;
        })) === null || _a === void 0 ? void 0 : _a.map(function (p) {
          return {
            observer: p.observer,
            options: p.options,
            callback: function (payload) {
              return wrappedEmit(wrapEvent({
                type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].Plugin,
                data: {
                  plugin: p.name,
                  payload: payload
                }
              }));
            }
          };
        })) || []
      }, hooks);
    };
    iframeManager.addLoadListener(function (iframeEl) {
      handlers_1.push(observe_1(iframeEl.contentDocument));
    });
    var init_1 = function () {
      takeFullSnapshot();
      handlers_1.push(observe_1(document));
    };
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      init_1();
    } else {
      handlers_1.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('load', function () {
        wrappedEmit(wrapEvent({
          type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].Load,
          data: {}
        }));
        init_1();
      }, window));
    }
    return function () {
      handlers_1.forEach(function (h) {
        return h();
      });
    };
  } catch (error) {
    console.warn(error);
  }
}
record.addCustomEvent = function (tag, payload) {
  if (!wrappedEmit) {
    throw new Error('please add custom event after start recording');
  }
  wrappedEmit(wrapEvent({
    type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].Custom,
    data: {
      tag: tag,
      payload: payload
    }
  }));
};
record.freezePage = function () {
  _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"].forEach(function (buf) {
    return buf.freeze();
  });
};
record.takeFullSnapshot = function (isCheckout) {
  if (!takeFullSnapshot) {
    throw new Error('please take full snapshot after start recording');
  }
  takeFullSnapshot(isCheckout);
};
record.mirror = mirror;
/* harmony default export */ __webpack_exports__["default"] = (record);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");



function isNodeInLinkedList(n) {
  return '__ln' in n;
}
var DoubleLinkedList = function () {
  function DoubleLinkedList() {
    this.length = 0;
    this.head = null;
  }
  DoubleLinkedList.prototype.get = function (position) {
    if (position >= this.length) {
      throw new Error('Position outside of list range');
    }
    var current = this.head;
    for (var index = 0; index < position; index++) {
      current = (current === null || current === void 0 ? void 0 : current.next) || null;
    }
    return current;
  };
  DoubleLinkedList.prototype.addNode = function (n) {
    var node = {
      value: n,
      previous: null,
      next: null
    };
    n.__ln = node;
    if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
      var current = n.previousSibling.__ln.next;
      node.next = current;
      node.previous = n.previousSibling.__ln;
      n.previousSibling.__ln.next = node;
      if (current) {
        current.previous = node;
      }
    } else if (n.nextSibling && isNodeInLinkedList(n.nextSibling) && n.nextSibling.__ln.previous) {
      var current = n.nextSibling.__ln.previous;
      node.previous = current;
      node.next = n.nextSibling.__ln;
      n.nextSibling.__ln.previous = node;
      if (current) {
        current.next = node;
      }
    } else {
      if (this.head) {
        this.head.previous = node;
      }
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  };
  DoubleLinkedList.prototype.removeNode = function (n) {
    var current = n.__ln;
    if (!this.head) {
      return;
    }
    if (!current.previous) {
      this.head = current.next;
      if (this.head) {
        this.head.previous = null;
      }
    } else {
      current.previous.next = current.next;
      if (current.next) {
        current.next.previous = current.previous;
      }
    }
    if (n.__ln) {
      delete n.__ln;
    }
    this.length--;
  };
  return DoubleLinkedList;
}();
var moveKey = function (id, parentId) {
  return "".concat(id, "@").concat(parentId);
};
function isINode(n) {
  return '__sn' in n;
}
var MutationBuffer = function () {
  function MutationBuffer() {
    var _this = this;
    this.frozen = false;
    this.locked = false;
    this.texts = [];
    this.attributes = [];
    this.removes = [];
    this.mapRemoves = [];
    this.movedMap = {};
    this.addedSet = new Set();
    this.movedSet = new Set();
    this.droppedSet = new Set();
    this.processMutations = function (mutations) {
      mutations.forEach(_this.processMutation);
      _this.emit();
    };
    this.emit = function () {
      var e_1, _a, e_2, _b;
      if (_this.frozen || _this.locked) {
        return;
      }
      var adds = [];
      var addList = new DoubleLinkedList();
      var getNextId = function (n) {
        var ns = n;
        var nextId = _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["IGNORED_NODE"];
        while (nextId === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["IGNORED_NODE"]) {
          ns = ns && ns.nextSibling;
          nextId = ns && _this.mirror.getId(ns);
        }
        return nextId;
      };
      var pushAdd = function (n) {
        var _a, _b, _c, _d, _e;
        var shadowHost = n.getRootNode ? (_a = n.getRootNode()) === null || _a === void 0 ? void 0 : _a.host : null;
        var rootShadowHost = shadowHost;
        while ((_c = (_b = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _b === void 0 ? void 0 : _b.call(rootShadowHost)) === null || _c === void 0 ? void 0 : _c.host) rootShadowHost = ((_e = (_d = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _d === void 0 ? void 0 : _d.call(rootShadowHost)) === null || _e === void 0 ? void 0 : _e.host) || null;
        var notInDoc = !_this.doc.contains(n) && (rootShadowHost === null || !_this.doc.contains(rootShadowHost));
        if (!n.parentNode || notInDoc) {
          return;
        }
        var parentId = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(n.parentNode) ? _this.mirror.getId(shadowHost) : _this.mirror.getId(n.parentNode);
        var nextId = getNextId(n);
        if (parentId === -1 || nextId === -1) {
          return addList.addNode(n);
        }
        var sn = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["serializeNodeWithId"])(n, {
          doc: _this.doc,
          map: _this.mirror.map,
          blockClass: _this.blockClass,
          blockSelector: _this.blockSelector,
          maskTextClass: _this.maskTextClass,
          maskTextSelector: _this.maskTextSelector,
          skipChild: true,
          inlineStylesheet: _this.inlineStylesheet,
          maskInputOptions: _this.maskInputOptions,
          maskTextFn: _this.maskTextFn,
          maskInputFn: _this.maskInputFn,
          slimDOMOptions: _this.slimDOMOptions,
          recordCanvas: _this.recordCanvas,
          inlineImages: _this.inlineImages,
          onSerialize: function (currentN) {
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIframeINode"])(currentN)) {
              _this.iframeManager.addIframe(currentN);
            }
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hasShadowRoot"])(n)) {
              _this.shadowDomManager.addShadowRoot(n.shadowRoot, document);
            }
          },
          onIframeLoad: function (iframe, childSn) {
            _this.iframeManager.attachIframe(iframe, childSn);
            _this.shadowDomManager.observeAttachShadow(iframe);
          }
        });
        if (sn) {
          adds.push({
            parentId: parentId,
            nextId: nextId,
            node: sn
          });
        }
      };
      while (_this.mapRemoves.length) {
        _this.mirror.removeNodeFromMap(_this.mapRemoves.shift());
      }
      try {
        for (var _c = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.movedSet), _d = _c.next(); !_d.done; _d = _c.next()) {
          var n = _d.value;
          if (isParentRemoved(_this.removes, n, _this.mirror) && !_this.movedSet.has(n.parentNode)) {
            continue;
          }
          pushAdd(n);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      try {
        for (var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.addedSet), _f = _e.next(); !_f.done; _f = _e.next()) {
          var n = _f.value;
          if (!isAncestorInSet(_this.droppedSet, n) && !isParentRemoved(_this.removes, n, _this.mirror)) {
            pushAdd(n);
          } else if (isAncestorInSet(_this.movedSet, n)) {
            pushAdd(n);
          } else {
            _this.droppedSet.add(n);
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      var candidate = null;
      while (addList.length) {
        var node = null;
        if (candidate) {
          var parentId = _this.mirror.getId(candidate.value.parentNode);
          var nextId = getNextId(candidate.value);
          if (parentId !== -1 && nextId !== -1) {
            node = candidate;
          }
        }
        if (!node) {
          for (var index = addList.length - 1; index >= 0; index--) {
            var _node = addList.get(index);
            if (_node) {
              var parentId = _this.mirror.getId(_node.value.parentNode);
              var nextId = getNextId(_node.value);
              if (parentId !== -1 && nextId !== -1) {
                node = _node;
                break;
              }
            }
          }
        }
        if (!node) {
          while (addList.head) {
            addList.removeNode(addList.head.value);
          }
          break;
        }
        candidate = node.previous;
        addList.removeNode(node.value);
        pushAdd(node.value);
      }
      var payload = {
        texts: _this.texts.map(function (text) {
          return {
            id: _this.mirror.getId(text.node),
            value: text.value
          };
        }).filter(function (text) {
          return _this.mirror.has(text.id);
        }),
        attributes: _this.attributes.map(function (attribute) {
          return {
            id: _this.mirror.getId(attribute.node),
            attributes: attribute.attributes
          };
        }).filter(function (attribute) {
          return _this.mirror.has(attribute.id);
        }),
        removes: _this.removes,
        adds: adds
      };
      if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) {
        return;
      }
      _this.texts = [];
      _this.attributes = [];
      _this.removes = [];
      _this.addedSet = new Set();
      _this.movedSet = new Set();
      _this.droppedSet = new Set();
      _this.movedMap = {};
      _this.mutationCb(payload);
    };
    this.processMutation = function (m) {
      var e_3, _a, e_4, _b;
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(m.target)) {
        return;
      }
      switch (m.type) {
        case 'characterData':
          {
            var value = m.target.textContent;
            if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) && value !== m.oldValue) {
              _this.texts.push({
                value: Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["needMaskingText"])(m.target, _this.maskTextClass, _this.maskTextSelector) && value ? _this.maskTextFn ? _this.maskTextFn(value) : value.replace(/[\S]/g, '*') : value,
                node: m.target
              });
            }
            break;
          }
        case 'attributes':
          {
            var target = m.target;
            var value = m.target.getAttribute(m.attributeName);
            if (m.attributeName === 'value') {
              value = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["maskInputValue"])({
                maskInputOptions: _this.maskInputOptions,
                tagName: m.target.tagName,
                type: m.target.getAttribute('type'),
                value: value,
                maskInputFn: _this.maskInputFn
              });
            }
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) || value === m.oldValue) {
              return;
            }
            var item = _this.attributes.find(function (a) {
              return a.node === m.target;
            });
            if (!item) {
              item = {
                node: m.target,
                attributes: {}
              };
              _this.attributes.push(item);
            }
            if (m.attributeName === 'style') {
              var old = _this.doc.createElement('span');
              if (m.oldValue) {
                old.setAttribute('style', m.oldValue);
              }
              if (item.attributes.style === undefined || item.attributes.style === null) {
                item.attributes.style = {};
              }
              var styleObj = item.attributes.style;
              try {
                for (var _c = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(target.style)), _d = _c.next(); !_d.done; _d = _c.next()) {
                  var pname = _d.value;
                  var newValue = target.style.getPropertyValue(pname);
                  var newPriority = target.style.getPropertyPriority(pname);
                  if (newValue !== old.style.getPropertyValue(pname) || newPriority !== old.style.getPropertyPriority(pname)) {
                    if (newPriority === '') {
                      styleObj[pname] = newValue;
                    } else {
                      styleObj[pname] = [newValue, newPriority];
                    }
                  }
                }
              } catch (e_3_1) {
                e_3 = {
                  error: e_3_1
                };
              } finally {
                try {
                  if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                } finally {
                  if (e_3) throw e_3.error;
                }
              }
              try {
                for (var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(old.style)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var pname = _f.value;
                  if (target.style.getPropertyValue(pname) === '') {
                    styleObj[pname] = false;
                  }
                }
              } catch (e_4_1) {
                e_4 = {
                  error: e_4_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_4) throw e_4.error;
                }
              }
            } else {
              item.attributes[m.attributeName] = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["transformAttribute"])(_this.doc, m.target.tagName, m.attributeName, value);
            }
            break;
          }
        case 'childList':
          {
            m.addedNodes.forEach(function (n) {
              return _this.genAdds(n, m.target);
            });
            m.removedNodes.forEach(function (n) {
              var nodeId = _this.mirror.getId(n);
              var parentId = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(m.target) ? _this.mirror.getId(m.target.host) : _this.mirror.getId(m.target);
              if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(n)) {
                return;
              }
              if (_this.addedSet.has(n)) {
                deepDelete(_this.addedSet, n);
                _this.droppedSet.add(n);
              } else if (_this.addedSet.has(m.target) && nodeId === -1) ;else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isAncestorRemoved"])(m.target, _this.mirror)) ;else if (_this.movedSet.has(n) && _this.movedMap[moveKey(nodeId, parentId)]) {
                deepDelete(_this.movedSet, n);
              } else {
                _this.removes.push({
                  parentId: parentId,
                  id: nodeId,
                  isShadow: Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(m.target) ? true : undefined
                });
              }
              _this.mapRemoves.push(n);
            });
            break;
          }
      }
    };
    this.genAdds = function (n, target) {
      if (target && Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, _this.blockClass)) {
        return;
      }
      if (isINode(n)) {
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(n)) {
          return;
        }
        _this.movedSet.add(n);
        var targetId = null;
        if (target && isINode(target)) {
          targetId = target.__sn.id;
        }
        if (targetId) {
          _this.movedMap[moveKey(n.__sn.id, targetId)] = true;
        }
      } else {
        _this.addedSet.add(n);
        _this.droppedSet.delete(n);
      }
      if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(n, _this.blockClass)) n.childNodes.forEach(function (childN) {
        return _this.genAdds(childN);
      });
    };
  }
  MutationBuffer.prototype.init = function (options) {
    var _this = this;
    ['mutationCb', 'blockClass', 'blockSelector', 'maskTextClass', 'maskTextSelector', 'inlineStylesheet', 'maskInputOptions', 'maskTextFn', 'maskInputFn', 'recordCanvas', 'inlineImages', 'slimDOMOptions', 'doc', 'mirror', 'iframeManager', 'shadowDomManager', 'canvasManager'].forEach(function (key) {
      _this[key] = options[key];
    });
  };
  MutationBuffer.prototype.freeze = function () {
    this.frozen = true;
    this.canvasManager.freeze();
  };
  MutationBuffer.prototype.unfreeze = function () {
    this.frozen = false;
    this.canvasManager.unfreeze();
    this.emit();
  };
  MutationBuffer.prototype.isFrozen = function () {
    return this.frozen;
  };
  MutationBuffer.prototype.lock = function () {
    this.locked = true;
    this.canvasManager.lock();
  };
  MutationBuffer.prototype.unlock = function () {
    this.locked = false;
    this.canvasManager.unlock();
    this.emit();
  };
  MutationBuffer.prototype.reset = function () {
    this.shadowDomManager.reset();
    this.canvasManager.reset();
  };
  return MutationBuffer;
}();
function deepDelete(addsSet, n) {
  addsSet.delete(n);
  n.childNodes.forEach(function (childN) {
    return deepDelete(addsSet, childN);
  });
}
function isParentRemoved(removes, n, mirror) {
  var parentNode = n.parentNode;
  if (!parentNode) {
    return false;
  }
  var parentId = mirror.getId(parentNode);
  if (removes.some(function (r) {
    return r.id === parentId;
  })) {
    return true;
  }
  return isParentRemoved(removes, parentNode, mirror);
}
function isAncestorInSet(set, n) {
  var parentNode = n.parentNode;
  if (!parentNode) {
    return false;
  }
  if (set.has(parentNode)) {
    return true;
  }
  return isAncestorInSet(set, parentNode);
}
/* harmony default export */ __webpack_exports__["default"] = (MutationBuffer);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js ***!
  \***************************************************************************/
/*! exports provided: INPUT_TAGS, initMutationObserver, initObservers, initScrollObserver, mutationBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_TAGS", function() { return INPUT_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMutationObserver", function() { return initMutationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initObservers", function() { return initObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initScrollObserver", function() { return initScrollObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutationBuffers", function() { return mutationBuffers; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _mutation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutation.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js");





var mutationBuffers = [];
var isCSSGroupingRuleSupported = typeof CSSGroupingRule !== 'undefined';
var isCSSMediaRuleSupported = typeof CSSMediaRule !== 'undefined';
var isCSSSupportsRuleSupported = typeof CSSSupportsRule !== 'undefined';
var isCSSConditionRuleSupported = typeof CSSConditionRule !== 'undefined';
function getEventTarget(event) {
  try {
    if ('composedPath' in event) {
      var path = event.composedPath();
      if (path.length) {
        return path[0];
      }
    } else if ('path' in event && event.path.length) {
      return event.path[0];
    }
    return event.target;
  } catch (_a) {
    return event.target;
  }
}
function initMutationObserver(options, rootEl) {
  var _a, _b;
  var mutationBuffer = new _mutation_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
  mutationBuffers.push(mutationBuffer);
  mutationBuffer.init(options);
  var mutationObserverCtor = window.MutationObserver || window.__rrMutationObserver;
  var angularZoneSymbol = (_b = (_a = window === null || window === void 0 ? void 0 : window.Zone) === null || _a === void 0 ? void 0 : _a.__symbol__) === null || _b === void 0 ? void 0 : _b.call(_a, 'MutationObserver');
  if (angularZoneSymbol && window[angularZoneSymbol]) {
    mutationObserverCtor = window[angularZoneSymbol];
  }
  var observer = new mutationObserverCtor(mutationBuffer.processMutations.bind(mutationBuffer));
  observer.observe(rootEl, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return observer;
}
function initMoveObserver(_a) {
  var mousemoveCb = _a.mousemoveCb,
    sampling = _a.sampling,
    doc = _a.doc,
    mirror = _a.mirror;
  if (sampling.mousemove === false) {
    return function () {};
  }
  var threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
  var callbackThreshold = typeof sampling.mousemoveCallback === 'number' ? sampling.mousemoveCallback : 500;
  var positions = [];
  var timeBaseline;
  var wrappedCb = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (source) {
    var totalOffset = Date.now() - timeBaseline;
    mousemoveCb(positions.map(function (p) {
      p.timeOffset -= totalOffset;
      return p;
    }), source);
    positions = [];
    timeBaseline = null;
  }, callbackThreshold);
  var updatePosition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (evt) {
    var target = getEventTarget(evt);
    var _a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isTouchEvent"])(evt) ? evt.changedTouches[0] : evt,
      clientX = _a.clientX,
      clientY = _a.clientY;
    if (!timeBaseline) {
      timeBaseline = Date.now();
    }
    positions.push({
      x: clientX,
      y: clientY,
      id: mirror.getId(target),
      timeOffset: Date.now() - timeBaseline
    });
    wrappedCb(typeof DragEvent !== 'undefined' && evt instanceof DragEvent ? _types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Drag : evt instanceof MouseEvent ? _types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].MouseMove : _types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].TouchMove);
  }, threshold, {
    trailing: false
  });
  var handlers = [Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('mousemove', updatePosition, doc), Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('touchmove', updatePosition, doc), Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('drag', updatePosition, doc)];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initMouseInteractionObserver(_a) {
  var mouseInteractionCb = _a.mouseInteractionCb,
    doc = _a.doc,
    mirror = _a.mirror,
    blockClass = _a.blockClass,
    sampling = _a.sampling;
  if (sampling.mouseInteraction === false) {
    return function () {};
  }
  var disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === undefined ? {} : sampling.mouseInteraction;
  var handlers = [];
  var getHandler = function (eventKey) {
    return function (event) {
      var target = getEventTarget(event);
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, blockClass)) {
        return;
      }
      var e = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isTouchEvent"])(event) ? event.changedTouches[0] : event;
      if (!e) {
        return;
      }
      var id = mirror.getId(target);
      var clientX = e.clientX,
        clientY = e.clientY;
      mouseInteractionCb({
        type: _types_js__WEBPACK_IMPORTED_MODULE_3__["MouseInteractions"][eventKey],
        id: id,
        x: clientX,
        y: clientY
      });
    };
  };
  Object.keys(_types_js__WEBPACK_IMPORTED_MODULE_3__["MouseInteractions"]).filter(function (key) {
    return Number.isNaN(Number(key)) && !key.endsWith('_Departed') && disableMap[key] !== false;
  }).forEach(function (eventKey) {
    var eventName = eventKey.toLowerCase();
    var handler = getHandler(eventKey);
    handlers.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])(eventName, handler, doc));
  });
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initScrollObserver(_a) {
  var scrollCb = _a.scrollCb,
    doc = _a.doc,
    mirror = _a.mirror,
    blockClass = _a.blockClass,
    sampling = _a.sampling;
  var updatePosition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (evt) {
    var target = getEventTarget(evt);
    if (!target || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, blockClass)) {
      return;
    }
    var id = mirror.getId(target);
    if (target === doc) {
      var scrollEl = doc.scrollingElement || doc.documentElement;
      scrollCb({
        id: id,
        x: scrollEl.scrollLeft,
        y: scrollEl.scrollTop
      });
    } else {
      scrollCb({
        id: id,
        x: target.scrollLeft,
        y: target.scrollTop
      });
    }
  }, sampling.scroll || 100);
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('scroll', updatePosition, doc);
}
function initViewportResizeObserver(_a) {
  var viewportResizeCb = _a.viewportResizeCb;
  var lastH = -1;
  var lastW = -1;
  var updateDimension = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function () {
    var height = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])();
    var width = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])();
    if (lastH !== height || lastW !== width) {
      viewportResizeCb({
        width: Number(width),
        height: Number(height)
      });
      lastH = height;
      lastW = width;
    }
  }, 200);
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('resize', updateDimension, window);
}
function wrapEventWithUserTriggeredFlag(v, enable) {
  var value = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v);
  if (!enable) delete value.userTriggered;
  return value;
}
var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
var lastInputValueMap = new WeakMap();
function initInputObserver(_a) {
  var inputCb = _a.inputCb,
    doc = _a.doc,
    mirror = _a.mirror,
    blockClass = _a.blockClass,
    ignoreClass = _a.ignoreClass,
    maskInputOptions = _a.maskInputOptions,
    maskInputFn = _a.maskInputFn,
    sampling = _a.sampling,
    userTriggeredOnInput = _a.userTriggeredOnInput;
  function eventHandler(event) {
    var target = getEventTarget(event);
    var userTriggered = event.isTrusted;
    if (target && target.tagName === 'OPTION') target = target.parentElement;
    if (!target || !target.tagName || INPUT_TAGS.indexOf(target.tagName) < 0 || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, blockClass)) {
      return;
    }
    var type = target.type;
    if (target.classList.contains(ignoreClass)) {
      return;
    }
    var text = target.value;
    var isChecked = false;
    if (type === 'radio' || type === 'checkbox') {
      isChecked = target.checked;
    } else if (maskInputOptions[target.tagName.toLowerCase()] || maskInputOptions[type]) {
      text = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["maskInputValue"])({
        maskInputOptions: maskInputOptions,
        tagName: target.tagName,
        type: type,
        value: text,
        maskInputFn: maskInputFn
      });
    }
    cbWithDedup(target, wrapEventWithUserTriggeredFlag({
      text: text,
      isChecked: isChecked,
      userTriggered: userTriggered
    }, userTriggeredOnInput));
    var name = target.name;
    if (type === 'radio' && name && isChecked) {
      doc.querySelectorAll("input[type=\"radio\"][name=\"".concat(name, "\"]")).forEach(function (el) {
        if (el !== target) {
          cbWithDedup(el, wrapEventWithUserTriggeredFlag({
            text: el.value,
            isChecked: !isChecked,
            userTriggered: false
          }, userTriggeredOnInput));
        }
      });
    }
  }
  function cbWithDedup(target, v) {
    var lastInputValue = lastInputValueMap.get(target);
    if (!lastInputValue || lastInputValue.text !== v.text || lastInputValue.isChecked !== v.isChecked) {
      lastInputValueMap.set(target, v);
      var id = mirror.getId(target);
      inputCb(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v), {
        id: id
      }));
    }
  }
  var events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
  var handlers = events.map(function (eventName) {
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])(eventName, eventHandler, doc);
  });
  var propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
  var hookProperties = [[HTMLInputElement.prototype, 'value'], [HTMLInputElement.prototype, 'checked'], [HTMLSelectElement.prototype, 'value'], [HTMLTextAreaElement.prototype, 'value'], [HTMLSelectElement.prototype, 'selectedIndex'], [HTMLOptionElement.prototype, 'selected']];
  if (propertyDescriptor && propertyDescriptor.set) {
    handlers.push.apply(handlers, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(hookProperties.map(function (p) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hookSetter"])(p[0], p[1], {
        set: function () {
          eventHandler({
            target: this
          });
        }
      });
    })), false));
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function getNestedCSSRulePositions(rule) {
  var positions = [];
  function recurse(childRule, pos) {
    if (isCSSGroupingRuleSupported && childRule.parentRule instanceof CSSGroupingRule || isCSSMediaRuleSupported && childRule.parentRule instanceof CSSMediaRule || isCSSSupportsRuleSupported && childRule.parentRule instanceof CSSSupportsRule || isCSSConditionRuleSupported && childRule.parentRule instanceof CSSConditionRule) {
      var rules = Array.from(childRule.parentRule.cssRules);
      var index = rules.indexOf(childRule);
      pos.unshift(index);
    } else {
      var rules = Array.from(childRule.parentStyleSheet.cssRules);
      var index = rules.indexOf(childRule);
      pos.unshift(index);
    }
    return pos;
  }
  return recurse(rule, positions);
}
function initStyleSheetObserver(_a, _b) {
  var styleSheetRuleCb = _a.styleSheetRuleCb,
    mirror = _a.mirror;
  var win = _b.win;
  var insertRule = win.CSSStyleSheet.prototype.insertRule;
  win.CSSStyleSheet.prototype.insertRule = function (rule, index) {
    var id = mirror.getId(this.ownerNode);
    if (id !== -1) {
      styleSheetRuleCb({
        id: id,
        adds: [{
          rule: rule,
          index: index
        }]
      });
    }
    return insertRule.apply(this, arguments);
  };
  var deleteRule = win.CSSStyleSheet.prototype.deleteRule;
  win.CSSStyleSheet.prototype.deleteRule = function (index) {
    var id = mirror.getId(this.ownerNode);
    if (id !== -1) {
      styleSheetRuleCb({
        id: id,
        removes: [{
          index: index
        }]
      });
    }
    return deleteRule.apply(this, arguments);
  };
  var supportedNestedCSSRuleTypes = {};
  if (isCSSGroupingRuleSupported) {
    supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
  } else {
    if (isCSSMediaRuleSupported) {
      supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
    }
    if (isCSSConditionRuleSupported) {
      supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
    }
    if (isCSSSupportsRuleSupported) {
      supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
    }
  }
  var unmodifiedFunctions = {};
  Object.entries(supportedNestedCSSRuleTypes).forEach(function (_a) {
    var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2),
      typeKey = _b[0],
      type = _b[1];
    unmodifiedFunctions[typeKey] = {
      insertRule: type.prototype.insertRule,
      deleteRule: type.prototype.deleteRule
    };
    type.prototype.insertRule = function (rule, index) {
      var id = mirror.getId(this.parentStyleSheet.ownerNode);
      if (id !== -1) {
        styleSheetRuleCb({
          id: id,
          adds: [{
            rule: rule,
            index: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(getNestedCSSRulePositions(this)), false), [index || 0], false)
          }]
        });
      }
      return unmodifiedFunctions[typeKey].insertRule.apply(this, arguments);
    };
    type.prototype.deleteRule = function (index) {
      var id = mirror.getId(this.parentStyleSheet.ownerNode);
      if (id !== -1) {
        styleSheetRuleCb({
          id: id,
          removes: [{
            index: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(getNestedCSSRulePositions(this)), false), [index], false)
          }]
        });
      }
      return unmodifiedFunctions[typeKey].deleteRule.apply(this, arguments);
    };
  });
  return function () {
    win.CSSStyleSheet.prototype.insertRule = insertRule;
    win.CSSStyleSheet.prototype.deleteRule = deleteRule;
    Object.entries(supportedNestedCSSRuleTypes).forEach(function (_a) {
      var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2),
        typeKey = _b[0],
        type = _b[1];
      type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
      type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
    });
  };
}
function initStyleDeclarationObserver(_a, _b) {
  var styleDeclarationCb = _a.styleDeclarationCb,
    mirror = _a.mirror;
  var win = _b.win;
  var setProperty = win.CSSStyleDeclaration.prototype.setProperty;
  win.CSSStyleDeclaration.prototype.setProperty = function (property, value, priority) {
    var _a, _b;
    var id = mirror.getId((_b = (_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
    if (id !== -1) {
      styleDeclarationCb({
        id: id,
        set: {
          property: property,
          value: value,
          priority: priority
        },
        index: getNestedCSSRulePositions(this.parentRule)
      });
    }
    return setProperty.apply(this, arguments);
  };
  var removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
  win.CSSStyleDeclaration.prototype.removeProperty = function (property) {
    var _a, _b;
    var id = mirror.getId((_b = (_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
    if (id !== -1) {
      styleDeclarationCb({
        id: id,
        remove: {
          property: property
        },
        index: getNestedCSSRulePositions(this.parentRule)
      });
    }
    return removeProperty.apply(this, arguments);
  };
  return function () {
    win.CSSStyleDeclaration.prototype.setProperty = setProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
  };
}
function initMediaInteractionObserver(_a) {
  var mediaInteractionCb = _a.mediaInteractionCb,
    blockClass = _a.blockClass,
    mirror = _a.mirror,
    sampling = _a.sampling;
  var handler = function (type) {
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (event) {
      var target = getEventTarget(event);
      if (!target || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, blockClass)) {
        return;
      }
      var _a = target,
        currentTime = _a.currentTime,
        volume = _a.volume,
        muted = _a.muted;
      mediaInteractionCb({
        type: type,
        id: mirror.getId(target),
        currentTime: currentTime,
        volume: volume,
        muted: muted
      });
    }, sampling.media || 500);
  };
  var handlers = [Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('play', handler(0)), Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('pause', handler(1)), Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('seeked', handler(2)), Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('volumechange', handler(3))];
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function initFontObserver(_a) {
  var fontCb = _a.fontCb,
    doc = _a.doc;
  var win = doc.defaultView;
  if (!win) {
    return function () {};
  }
  var handlers = [];
  var fontMap = new WeakMap();
  var originalFontFace = win.FontFace;
  win.FontFace = function FontFace(family, source, descriptors) {
    var fontFace = new originalFontFace(family, source, descriptors);
    fontMap.set(fontFace, {
      family: family,
      buffer: typeof source !== 'string',
      descriptors: descriptors,
      fontSource: typeof source === 'string' ? source : JSON.stringify(Array.from(new Uint8Array(source)))
    });
    return fontFace;
  };
  var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(doc.fonts, 'add', function (original) {
    return function (fontFace) {
      setTimeout(function () {
        var p = fontMap.get(fontFace);
        if (p) {
          fontCb(p);
          fontMap.delete(fontFace);
        }
      }, 0);
      return original.apply(this, [fontFace]);
    };
  });
  handlers.push(function () {
    win.FontFace = originalFontFace;
  });
  handlers.push(restoreHandler);
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
function mergeHooks(o, hooks) {
  var mutationCb = o.mutationCb,
    mousemoveCb = o.mousemoveCb,
    mouseInteractionCb = o.mouseInteractionCb,
    scrollCb = o.scrollCb,
    viewportResizeCb = o.viewportResizeCb,
    inputCb = o.inputCb,
    mediaInteractionCb = o.mediaInteractionCb,
    styleSheetRuleCb = o.styleSheetRuleCb,
    styleDeclarationCb = o.styleDeclarationCb,
    canvasMutationCb = o.canvasMutationCb,
    fontCb = o.fontCb;
  o.mutationCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.mutation) {
      hooks.mutation.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    mutationCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.mousemoveCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.mousemove) {
      hooks.mousemove.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    mousemoveCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.mouseInteractionCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.mouseInteraction) {
      hooks.mouseInteraction.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    mouseInteractionCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.scrollCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.scroll) {
      hooks.scroll.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    scrollCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.viewportResizeCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.viewportResize) {
      hooks.viewportResize.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    viewportResizeCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.inputCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.input) {
      hooks.input.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    inputCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.mediaInteractionCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.mediaInteaction) {
      hooks.mediaInteaction.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    mediaInteractionCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.styleSheetRuleCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.styleSheetRule) {
      hooks.styleSheetRule.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    styleSheetRuleCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.styleDeclarationCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.styleDeclaration) {
      hooks.styleDeclaration.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    styleDeclarationCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.canvasMutationCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.canvasMutation) {
      hooks.canvasMutation.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    canvasMutationCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
  o.fontCb = function () {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      p[_i] = arguments[_i];
    }
    if (hooks.font) {
      hooks.font.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    }
    fontCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
  };
}
function initObservers(o, hooks) {
  var e_1, _a;
  if (hooks === void 0) {
    hooks = {};
  }
  var currentWindow = o.doc.defaultView;
  if (!currentWindow) {
    return function () {};
  }
  mergeHooks(o, hooks);
  var mutationObserver = initMutationObserver(o, o.doc);
  var mousemoveHandler = initMoveObserver(o);
  var mouseInteractionHandler = initMouseInteractionObserver(o);
  var scrollHandler = initScrollObserver(o);
  var viewportResizeHandler = initViewportResizeObserver(o);
  var inputHandler = initInputObserver(o);
  var mediaInteractionHandler = initMediaInteractionObserver(o);
  var styleSheetObserver = initStyleSheetObserver(o, {
    win: currentWindow
  });
  var styleDeclarationObserver = initStyleDeclarationObserver(o, {
    win: currentWindow
  });
  var fontObserver = o.collectFonts ? initFontObserver(o) : function () {};
  var pluginHandlers = [];
  try {
    for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(o.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
      var plugin = _c.value;
      pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return function () {
    mutationBuffers.forEach(function (b) {
      return b.reset();
    });
    mutationObserver.disconnect();
    mousemoveHandler();
    mouseInteractionHandler();
    scrollHandler();
    viewportResizeHandler();
    inputHandler();
    mediaInteractionHandler();
    styleSheetObserver();
    styleDeclarationObserver();
    fontObserver();
    pluginHandlers.forEach(function (h) {
      return h();
    });
  };
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");



function initCanvas2DMutationObserver(cb, win, blockClass, mirror) {
  var e_1, _a;
  var handlers = [];
  var props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
  var _loop_1 = function (prop) {
    try {
      if (typeof win.CanvasRenderingContext2D.prototype[prop] !== 'function') {
        return "continue";
      }
      var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(win.CanvasRenderingContext2D.prototype, prop, function (original) {
        return function () {
          var _this = this;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(this.canvas, blockClass)) {
            setTimeout(function () {
              var recordArgs = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false);
              if (prop === 'drawImage') {
                if (recordArgs[0] && recordArgs[0] instanceof HTMLCanvasElement) {
                  var canvas = recordArgs[0];
                  var ctx = canvas.getContext('2d');
                  var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, canvas.width, canvas.height);
                  var pix = imgd === null || imgd === void 0 ? void 0 : imgd.data;
                  recordArgs[0] = JSON.stringify(pix);
                }
              }
              cb(_this.canvas, {
                type: _types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"]['2D'],
                property: prop,
                args: recordArgs
              });
            }, 0);
          }
          return original.apply(this, args);
        };
      });
      handlers.push(restoreHandler);
    } catch (_b) {
      var hookHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hookSetter"])(win.CanvasRenderingContext2D.prototype, prop, {
        set: function (v) {
          cb(this.canvas, {
            type: _types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"]['2D'],
            property: prop,
            args: [v],
            setter: true
          });
        }
      });
      handlers.push(hookHandler);
    }
  };
  try {
    for (var props2D_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props2D), props2D_1_1 = props2D_1.next(); !props2D_1_1.done; props2D_1_1 = props2D_1.next()) {
      var prop = props2D_1_1.value;
      _loop_1(prop);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (props2D_1_1 && !props2D_1_1.done && (_a = props2D_1.return)) _a.call(props2D_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
/* harmony default export */ __webpack_exports__["default"] = (initCanvas2DMutationObserver);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js ***!
  \**************************************************************************************************/
/*! exports provided: CanvasManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasManager", function() { return CanvasManager; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2d.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js");
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js");




var CanvasManager = function () {
  function CanvasManager(options) {
    this.pendingCanvasMutations = new Map();
    this.rafStamps = {
      latestId: 0,
      invokeId: null
    };
    this.frozen = false;
    this.locked = false;
    this.processMutation = function (target, mutation) {
      var newFrame = this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId;
      if (newFrame || !this.rafStamps.invokeId) this.rafStamps.invokeId = this.rafStamps.latestId;
      if (!this.pendingCanvasMutations.has(target)) {
        this.pendingCanvasMutations.set(target, []);
      }
      this.pendingCanvasMutations.get(target).push(mutation);
    };
    this.mutationCb = options.mutationCb;
    this.mirror = options.mirror;
    if (options.recordCanvas === true) this.initCanvasMutationObserver(options.win, options.blockClass);
  }
  CanvasManager.prototype.reset = function () {
    this.pendingCanvasMutations.clear();
    this.resetObservers && this.resetObservers();
  };
  CanvasManager.prototype.freeze = function () {
    this.frozen = true;
  };
  CanvasManager.prototype.unfreeze = function () {
    this.frozen = false;
  };
  CanvasManager.prototype.lock = function () {
    this.locked = true;
  };
  CanvasManager.prototype.unlock = function () {
    this.locked = false;
  };
  CanvasManager.prototype.initCanvasMutationObserver = function (win, blockClass) {
    this.startRAFTimestamping();
    this.startPendingCanvasMutationFlusher();
    var canvasContextReset = Object(_canvas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(win, blockClass);
    var canvas2DReset = Object(_2d_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.processMutation.bind(this), win, blockClass, this.mirror);
    var canvasWebGL1and2Reset = Object(_webgl_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.processMutation.bind(this), win, blockClass, this.mirror);
    this.resetObservers = function () {
      canvasContextReset();
      canvas2DReset();
      canvasWebGL1and2Reset();
    };
  };
  CanvasManager.prototype.startPendingCanvasMutationFlusher = function () {
    var _this = this;
    requestAnimationFrame(function () {
      return _this.flushPendingCanvasMutations();
    });
  };
  CanvasManager.prototype.startRAFTimestamping = function () {
    var _this = this;
    var setLatestRAFTimestamp = function (timestamp) {
      _this.rafStamps.latestId = timestamp;
      requestAnimationFrame(setLatestRAFTimestamp);
    };
    requestAnimationFrame(setLatestRAFTimestamp);
  };
  CanvasManager.prototype.flushPendingCanvasMutations = function () {
    var _this = this;
    this.pendingCanvasMutations.forEach(function (values, canvas) {
      var id = _this.mirror.getId(canvas);
      _this.flushPendingCanvasMutationFor(canvas, id);
    });
    requestAnimationFrame(function () {
      return _this.flushPendingCanvasMutations();
    });
  };
  CanvasManager.prototype.flushPendingCanvasMutationFor = function (canvas, id) {
    if (this.frozen || this.locked) {
      return;
    }
    var valuesWithType = this.pendingCanvasMutations.get(canvas);
    if (!valuesWithType || id === -1) return;
    var values = valuesWithType.map(function (value) {
      value.type;
      var rest = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(value, ["type"]);
      return rest;
    });
    var type = valuesWithType[0].type;
    this.mutationCb({
      id: id,
      type: type,
      commands: values
    });
    this.pendingCanvasMutations.delete(canvas);
  };
  return CanvasManager;
}();


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");


function initCanvasContextObserver(win, blockClass) {
  var handlers = [];
  try {
    var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(win.HTMLCanvasElement.prototype, 'getContext', function (original) {
      return function (contextType) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(this, blockClass)) {
          if (!('__context' in this)) this.__context = contextType;
        }
        return original.apply(this, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([contextType], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
      };
    });
    handlers.push(restoreHandler);
  } catch (_a) {
    console.error('failed to patch HTMLCanvasElement.prototype.getContext');
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
/* harmony default export */ __webpack_exports__["default"] = (initCanvasContextObserver);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js ***!
  \**************************************************************************************************/
/*! exports provided: isInstanceOfWebGLObject, saveWebGLVar, serializeArg, serializeArgs, variableListFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceOfWebGLObject", function() { return isInstanceOfWebGLObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWebGLVar", function() { return saveWebGLVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeArg", function() { return serializeArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeArgs", function() { return serializeArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableListFor", function() { return variableListFor; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js */ "./node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");


var webGLVarMap = new Map();
function variableListFor(ctx, ctor) {
  var contextMap = webGLVarMap.get(ctx);
  if (!contextMap) {
    contextMap = new Map();
    webGLVarMap.set(ctx, contextMap);
  }
  if (!contextMap.has(ctor)) {
    contextMap.set(ctor, []);
  }
  return contextMap.get(ctor);
}
var saveWebGLVar = function (value, win, ctx) {
  if (!value || !(isInstanceOfWebGLObject(value, win) || typeof value === 'object')) return;
  var name = value.constructor.name;
  var list = variableListFor(ctx, name);
  var index = list.indexOf(value);
  if (index === -1) {
    index = list.length;
    list.push(value);
  }
  return index;
};
function serializeArg(value, win, ctx) {
  if (value instanceof Array) {
    return value.map(function (arg) {
      return serializeArg(arg, win, ctx);
    });
  } else if (value === null) {
    return value;
  } else if (value instanceof Float32Array || value instanceof Float64Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Uint8Array || value instanceof Uint16Array || value instanceof Int16Array || value instanceof Int8Array || value instanceof Uint8ClampedArray) {
    var name_1 = value.constructor.name;
    return {
      rr_type: name_1,
      args: [Object.values(value)]
    };
  } else if (value instanceof ArrayBuffer) {
    var name_2 = value.constructor.name;
    var base64 = Object(_ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__["encode"])(value);
    return {
      rr_type: name_2,
      base64: base64
    };
  } else if (value instanceof DataView) {
    var name_3 = value.constructor.name;
    return {
      rr_type: name_3,
      args: [serializeArg(value.buffer, win, ctx), value.byteOffset, value.byteLength]
    };
  } else if (value instanceof HTMLImageElement) {
    var name_4 = value.constructor.name;
    var src = value.src;
    return {
      rr_type: name_4,
      src: src
    };
  } else if (value instanceof ImageData) {
    var name_5 = value.constructor.name;
    return {
      rr_type: name_5,
      args: [serializeArg(value.data, win, ctx), value.width, value.height]
    };
  } else if (isInstanceOfWebGLObject(value, win) || typeof value === 'object') {
    var name_6 = value.constructor.name;
    var index = saveWebGLVar(value, win, ctx);
    return {
      rr_type: name_6,
      index: index
    };
  }
  return value;
}
var serializeArgs = function (args, win, ctx) {
  return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false).map(function (arg) {
    return serializeArg(arg, win, ctx);
  });
};
var isInstanceOfWebGLObject = function (value, win) {
  var webGLConstructorNames = ['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject', 'WebGLVertexArrayObjectOES'];
  var supportedWebGLConstructorNames = webGLConstructorNames.filter(function (name) {
    return typeof win[name] === 'function';
  });
  return Boolean(supportedWebGLConstructorNames.find(function (name) {
    return value instanceof win[name];
  }));
};


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _serialize_args_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serialize-args.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js");




function patchGLPrototype(prototype, type, cb, blockClass, mirror, win) {
  var e_1, _a;
  var handlers = [];
  var props = Object.getOwnPropertyNames(prototype);
  var _loop_1 = function (prop) {
    try {
      if (typeof prototype[prop] !== 'function') {
        return "continue";
      }
      var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(prototype, prop, function (original) {
        return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var result = original.apply(this, args);
          Object(_serialize_args_js__WEBPACK_IMPORTED_MODULE_3__["saveWebGLVar"])(result, win, prototype);
          if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(this.canvas, blockClass)) {
            var id = mirror.getId(this.canvas);
            var recordArgs = Object(_serialize_args_js__WEBPACK_IMPORTED_MODULE_3__["serializeArgs"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false), win, prototype);
            var mutation = {
              type: type,
              property: prop,
              args: recordArgs
            };
            cb(this.canvas, mutation);
          }
          return result;
        };
      });
      handlers.push(restoreHandler);
    } catch (_b) {
      var hookHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hookSetter"])(prototype, prop, {
        set: function (v) {
          cb(this.canvas, {
            type: type,
            property: prop,
            args: [v],
            setter: true
          });
        }
      });
      handlers.push(hookHandler);
    }
  };
  try {
    for (var props_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
      var prop = props_1_1.value;
      _loop_1(prop);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return handlers;
}
function initCanvasWebGLMutationObserver(cb, win, blockClass, mirror) {
  var handlers = [];
  handlers.push.apply(handlers, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(patchGLPrototype(win.WebGLRenderingContext.prototype, _types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"].WebGL, cb, blockClass, mirror, win)), false));
  if (typeof win.WebGL2RenderingContext !== 'undefined') {
    handlers.push.apply(handlers, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(patchGLPrototype(win.WebGL2RenderingContext.prototype, _types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"].WebGL2, cb, blockClass, mirror, win)), false));
  }
  return function () {
    handlers.forEach(function (h) {
      return h();
    });
  };
}
/* harmony default export */ __webpack_exports__["default"] = (initCanvasWebGLMutationObserver);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js ***!
  \*************************************************************************************/
/*! exports provided: ShadowDomManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowDomManager", function() { return ShadowDomManager; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");



var ShadowDomManager = function () {
  function ShadowDomManager(options) {
    this.restorePatches = [];
    this.mutationCb = options.mutationCb;
    this.scrollCb = options.scrollCb;
    this.bypassOptions = options.bypassOptions;
    this.mirror = options.mirror;
    var manager = this;
    this.restorePatches.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(HTMLElement.prototype, 'attachShadow', function (original) {
      return function () {
        var shadowRoot = original.apply(this, arguments);
        if (this.shadowRoot) manager.addShadowRoot(this.shadowRoot, this.ownerDocument);
        return shadowRoot;
      };
    }));
  }
  ShadowDomManager.prototype.addShadowRoot = function (shadowRoot, doc) {
    Object(_observer_js__WEBPACK_IMPORTED_MODULE_1__["initMutationObserver"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.bypassOptions), {
      doc: doc,
      mutationCb: this.mutationCb,
      mirror: this.mirror,
      shadowDomManager: this
    }), shadowRoot);
    Object(_observer_js__WEBPACK_IMPORTED_MODULE_1__["initScrollObserver"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.bypassOptions), {
      scrollCb: this.scrollCb,
      doc: shadowRoot,
      mirror: this.mirror
    }));
  };
  ShadowDomManager.prototype.observeAttachShadow = function (iframeElement) {
    if (iframeElement.contentWindow) {
      var manager_1 = this;
      this.restorePatches.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(iframeElement.contentWindow.HTMLElement.prototype, 'attachShadow', function (original) {
        return function () {
          var shadowRoot = original.apply(this, arguments);
          if (this.shadowRoot) manager_1.addShadowRoot(this.shadowRoot, iframeElement.contentDocument);
          return shadowRoot;
        };
      }));
    }
  };
  ShadowDomManager.prototype.reset = function () {
    this.restorePatches.forEach(function (restorePatch) {
      return restorePatch();
    });
  };
  return ShadowDomManager;
}();


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function canvasMutation(_a) {
  var event = _a.event,
    mutation = _a.mutation,
    target = _a.target,
    imageMap = _a.imageMap,
    errorHandler = _a.errorHandler;
  try {
    var ctx = target.getContext('2d');
    if (mutation.setter) {
      ctx[mutation.property] = mutation.args[0];
      return;
    }
    var original = ctx[mutation.property];
    if (mutation.property === 'drawImage' && typeof mutation.args[0] === 'string') {
      var image = imageMap.get(event);
      mutation.args[0] = image;
      original.apply(ctx, mutation.args);
    } else {
      original.apply(ctx, mutation.args);
    }
  } catch (error) {
    errorHandler(mutation, error);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (canvasMutation);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js");
/* harmony import */ var _2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2d.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js");



function canvasMutation(_a) {
  var event = _a.event,
    mutation = _a.mutation,
    target = _a.target,
    imageMap = _a.imageMap,
    errorHandler = _a.errorHandler;
  try {
    var mutations = 'commands' in mutation ? mutation.commands : [mutation];
    if ([_types_js__WEBPACK_IMPORTED_MODULE_0__["CanvasContext"].WebGL, _types_js__WEBPACK_IMPORTED_MODULE_0__["CanvasContext"].WebGL2].includes(mutation.type)) {
      return mutations.forEach(function (command) {
        Object(_webgl_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
          mutation: command,
          type: mutation.type,
          target: target,
          imageMap: imageMap,
          errorHandler: errorHandler
        });
      });
    }
    return mutations.forEach(function (command) {
      Object(_2d_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
        event: event,
        mutation: command,
        target: target,
        imageMap: imageMap,
        errorHandler: errorHandler
      });
    });
  } catch (error) {
    errorHandler(mutation, error);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (canvasMutation);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js ***!
  \*******************************************************************************/
/*! exports provided: default, deserializeArg, variableListFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeArg", function() { return deserializeArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableListFor", function() { return variableListFor; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js */ "./node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");



var webGLVarMap = new Map();
function variableListFor(ctx, ctor) {
  var contextMap = webGLVarMap.get(ctx);
  if (!contextMap) {
    contextMap = new Map();
    webGLVarMap.set(ctx, contextMap);
  }
  if (!contextMap.has(ctor)) {
    contextMap.set(ctor, []);
  }
  return contextMap.get(ctor);
}
function getContext(target, type) {
  try {
    if (type === _types_js__WEBPACK_IMPORTED_MODULE_2__["CanvasContext"].WebGL) {
      return target.getContext('webgl') || target.getContext('experimental-webgl');
    }
    return target.getContext('webgl2');
  } catch (e) {
    return null;
  }
}
var WebGLVariableConstructorsNames = ['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject'];
function saveToWebGLVarMap(ctx, result) {
  if (!(result === null || result === void 0 ? void 0 : result.constructor)) return;
  var name = result.constructor.name;
  if (!WebGLVariableConstructorsNames.includes(name)) return;
  var variables = variableListFor(ctx, name);
  if (!variables.includes(result)) variables.push(result);
}
function deserializeArg(imageMap, ctx) {
  return function (arg) {
    if (arg && typeof arg === 'object' && 'rr_type' in arg) {
      if ('index' in arg) {
        var name_1 = arg.rr_type,
          index = arg.index;
        return variableListFor(ctx, name_1)[index];
      } else if ('args' in arg) {
        var name_2 = arg.rr_type,
          args = arg.args;
        var ctor = window[name_2];
        return new (ctor.bind.apply(ctor, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args.map(deserializeArg(imageMap, ctx))), false)))();
      } else if ('base64' in arg) {
        return Object(_ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__["decode"])(arg.base64);
      } else if ('src' in arg) {
        var image = imageMap.get(arg.src);
        if (image) {
          return image;
        } else {
          var image_1 = new Image();
          image_1.src = arg.src;
          imageMap.set(arg.src, image_1);
          return image_1;
        }
      }
    } else if (Array.isArray(arg)) {
      return arg.map(deserializeArg(imageMap, ctx));
    }
    return arg;
  };
}
function webglMutation(_a) {
  var mutation = _a.mutation,
    target = _a.target,
    type = _a.type,
    imageMap = _a.imageMap,
    errorHandler = _a.errorHandler;
  try {
    var ctx = getContext(target, type);
    if (!ctx) return;
    if (mutation.setter) {
      ctx[mutation.property] = mutation.args[0];
      return;
    }
    var original = ctx[mutation.property];
    var args = mutation.args.map(deserializeArg(imageMap, ctx));
    var result = original.apply(ctx, args);
    saveToWebGLVarMap(ctx, result);
    var debugMode = false;
    if (debugMode) {
      if (mutation.property === 'compileShader') {
        if (!ctx.getShaderParameter(args[0], ctx.COMPILE_STATUS)) console.warn('something went wrong in replay', ctx.getShaderInfoLog(args[0]));
      } else if (mutation.property === 'linkProgram') {
        ctx.validateProgram(args[0]);
        if (!ctx.getProgramParameter(args[0], ctx.LINK_STATUS)) console.warn('something went wrong in replay', ctx.getProgramInfoLog(args[0]));
      }
      var webglError = ctx.getError();
      if (webglError !== ctx.NO_ERROR) {
        console.warn.apply(console, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(['WEBGL ERROR', webglError, 'on command:', mutation.property], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
      }
    }
  } catch (error) {
    errorHandler(mutation, error);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (webglMutation);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js ***!
  \************************************************************************/
/*! exports provided: Replayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return Replayer; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ext/mitt/dist/mitt.es.js */ "./node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js");
/* harmony import */ var _smoothscroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smoothscroll.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js");
/* harmony import */ var _machine_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./machine.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _styles_inject_style_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/inject-style.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js");
/* harmony import */ var _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./virtual-styles.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/virtual-styles.js");
/* harmony import */ var _canvas_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvas/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js");












var SKIP_TIME_THRESHOLD = 10 * 1000;
var SKIP_TIME_INTERVAL = 5 * 1000;
var mitt = _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_2__["default"] || _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_2__;
var REPLAY_CONSOLE_PREFIX = '[replayer]';
var defaultMouseTailConfig = {
  duration: 500,
  lineCap: 'round',
  lineWidth: 3,
  strokeStyle: 'red'
};
function indicatesTouchDevice(e) {
  return e.type == _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot && (e.data.source == _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].TouchMove || e.data.source == _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MouseInteraction && e.data.type == _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart);
}
var Replayer = function () {
  function Replayer(events, config) {
    var _this = this;
    this.mouseTail = null;
    this.tailPositions = [];
    this.emitter = mitt();
    this.legacy_missingNodeRetryMap = {};
    this.cache = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["createCache"])();
    this.imageMap = new Map();
    this.mirror = Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["createMirror"])();
    this.firstFullSnapshot = null;
    this.newDocumentQueue = [];
    this.mousePos = null;
    this.touchActive = null;
    if (!(config === null || config === void 0 ? void 0 : config.liveMode) && events.length < 2) {
      throw new Error('Replayer need at least 2 events.');
    }
    var defaultConfig = {
      speed: 1,
      maxSpeed: 360,
      root: document.body,
      loadTimeout: 0,
      skipInactive: false,
      showWarning: true,
      showDebug: false,
      blockClass: 'rr-block',
      liveMode: false,
      insertStyleRules: [],
      triggerFocus: true,
      UNSAFE_replayCanvas: false,
      pauseAnimation: true,
      mouseTail: defaultMouseTailConfig
    };
    this.config = Object.assign({}, defaultConfig, config);
    this.handleResize = this.handleResize.bind(this);
    this.getCastFn = this.getCastFn.bind(this);
    this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this);
    this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resize, this.handleResize);
    this.setupDom();
    this.treeIndex = new _utils_js__WEBPACK_IMPORTED_MODULE_7__["TreeIndex"]();
    this.fragmentParentMap = new Map();
    this.elementStateMap = new Map();
    this.virtualStyleRulesMap = new Map();
    this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Flush, function () {
      var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
      var _e = _this.treeIndex.flush(),
        scrollMap = _e.scrollMap,
        inputMap = _e.inputMap,
        mutationData = _e.mutationData;
      _this.fragmentParentMap.forEach(function (parent, frag) {
        return _this.restoreRealParent(frag, parent);
      });
      try {
        for (var _f = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(mutationData.texts), _g = _f.next(); !_g.done; _g = _f.next()) {
          var d = _g.value;
          _this.applyText(d, mutationData);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      try {
        for (var _h = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.virtualStyleRulesMap.keys()), _j = _h.next(); !_j.done; _j = _h.next()) {
          var node = _j.value;
          _this.restoreNodeSheet(node);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      _this.fragmentParentMap.clear();
      _this.elementStateMap.clear();
      _this.virtualStyleRulesMap.clear();
      try {
        for (var _k = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(scrollMap.values()), _l = _k.next(); !_l.done; _l = _k.next()) {
          var d = _l.value;
          _this.applyScroll(d, true);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      try {
        for (var _m = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(inputMap.values()), _o = _m.next(); !_o.done; _o = _m.next()) {
          var d = _o.value;
          _this.applyInput(d);
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
    });
    this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].PlayBack, function () {
      _this.firstFullSnapshot = null;
      _this.mirror.reset();
    });
    var timer = new _timer_js__WEBPACK_IMPORTED_MODULE_4__["Timer"]([], (config === null || config === void 0 ? void 0 : config.speed) || defaultConfig.speed);
    this.service = Object(_machine_js__WEBPACK_IMPORTED_MODULE_5__["createPlayerService"])({
      events: events.map(function (e) {
        if (config && config.unpackFn) {
          return config.unpackFn(e);
        }
        return e;
      }).sort(function (a1, a2) {
        return a1.timestamp - a2.timestamp;
      }),
      timer: timer,
      timeOffset: 0,
      baselineTime: 0,
      lastPlayedEvent: null
    }, {
      getCastFn: this.getCastFn,
      applyEventsSynchronously: this.applyEventsSynchronously,
      emitter: this.emitter
    });
    this.service.start();
    this.service.subscribe(function (state) {
      _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].StateChange, {
        player: state
      });
    });
    this.speedService = Object(_machine_js__WEBPACK_IMPORTED_MODULE_5__["createSpeedService"])({
      normalSpeed: -1,
      timer: timer
    });
    this.speedService.start();
    this.speedService.subscribe(function (state) {
      _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].StateChange, {
        speed: state
      });
    });
    var firstMeta = this.service.state.context.events.find(function (e) {
      return e.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Meta;
    });
    var firstFullsnapshot = this.service.state.context.events.find(function (e) {
      return e.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].FullSnapshot;
    });
    if (firstMeta) {
      var _a = firstMeta.data,
        width_1 = _a.width,
        height_1 = _a.height;
      setTimeout(function () {
        _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resize, {
          width: width_1,
          height: height_1
        });
      }, 0);
    }
    if (firstFullsnapshot) {
      setTimeout(function () {
        if (_this.firstFullSnapshot) {
          return;
        }
        _this.firstFullSnapshot = firstFullsnapshot;
        _this.rebuildFullSnapshot(firstFullsnapshot);
        _this.iframe.contentWindow.scrollTo(firstFullsnapshot.data.initialOffset);
      }, 1);
    }
    if (this.service.state.context.events.find(indicatesTouchDevice)) {
      this.mouse.classList.add('touch-device');
    }
  }
  Object.defineProperty(Replayer.prototype, "timer", {
    get: function () {
      return this.service.state.context.timer;
    },
    enumerable: false,
    configurable: true
  });
  Replayer.prototype.on = function (event, handler) {
    this.emitter.on(event, handler);
    return this;
  };
  Replayer.prototype.off = function (event, handler) {
    this.emitter.off(event, handler);
    return this;
  };
  Replayer.prototype.setConfig = function (config) {
    var _this = this;
    Object.keys(config).forEach(function (key) {
      _this.config[key] = config[key];
    });
    if (!this.config.skipInactive) {
      this.backToNormal();
    }
    if (typeof config.speed !== 'undefined') {
      this.speedService.send({
        type: 'SET_SPEED',
        payload: {
          speed: config.speed
        }
      });
    }
    if (typeof config.mouseTail !== 'undefined') {
      if (config.mouseTail === false) {
        if (this.mouseTail) {
          this.mouseTail.style.display = 'none';
        }
      } else {
        if (!this.mouseTail) {
          this.mouseTail = document.createElement('canvas');
          this.mouseTail.width = Number.parseFloat(this.iframe.width);
          this.mouseTail.height = Number.parseFloat(this.iframe.height);
          this.mouseTail.classList.add('replayer-mouse-tail');
          this.wrapper.insertBefore(this.mouseTail, this.iframe);
        }
        this.mouseTail.style.display = 'inherit';
      }
    }
  };
  Replayer.prototype.getMetaData = function () {
    var firstEvent = this.service.state.context.events[0];
    var lastEvent = this.service.state.context.events[this.service.state.context.events.length - 1];
    return {
      startTime: firstEvent.timestamp,
      endTime: lastEvent.timestamp,
      totalTime: lastEvent.timestamp - firstEvent.timestamp
    };
  };
  Replayer.prototype.getCurrentTime = function () {
    return this.timer.timeOffset + this.getTimeOffset();
  };
  Replayer.prototype.getTimeOffset = function () {
    var _a = this.service.state.context,
      baselineTime = _a.baselineTime,
      events = _a.events;
    return baselineTime - events[0].timestamp;
  };
  Replayer.prototype.getMirror = function () {
    return this.mirror;
  };
  Replayer.prototype.play = function (timeOffset) {
    var _a;
    if (timeOffset === void 0) {
      timeOffset = 0;
    }
    if (this.service.state.matches('paused')) {
      this.service.send({
        type: 'PLAY',
        payload: {
          timeOffset: timeOffset
        }
      });
    } else {
      this.service.send({
        type: 'PAUSE'
      });
      this.service.send({
        type: 'PLAY',
        payload: {
          timeOffset: timeOffset
        }
      });
    }
    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.remove('rrweb-paused');
    this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Start);
  };
  Replayer.prototype.pause = function (timeOffset) {
    var _a;
    if (timeOffset === undefined && this.service.state.matches('playing')) {
      this.service.send({
        type: 'PAUSE'
      });
    }
    if (typeof timeOffset === 'number') {
      this.play(timeOffset);
      this.service.send({
        type: 'PAUSE'
      });
    }
    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.add('rrweb-paused');
    this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Pause);
  };
  Replayer.prototype.resume = function (timeOffset) {
    if (timeOffset === void 0) {
      timeOffset = 0;
    }
    console.warn("The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface.");
    this.play(timeOffset);
    this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resume);
  };
  Replayer.prototype.startLive = function (baselineTime) {
    this.service.send({
      type: 'TO_LIVE',
      payload: {
        baselineTime: baselineTime
      }
    });
  };
  Replayer.prototype.addEvent = function (rawEvent) {
    var _this = this;
    var event = this.config.unpackFn ? this.config.unpackFn(rawEvent) : rawEvent;
    if (indicatesTouchDevice(event)) {
      this.mouse.classList.add('touch-device');
    }
    Promise.resolve().then(function () {
      return _this.service.send({
        type: 'ADD_EVENT',
        payload: {
          event: event
        }
      });
    });
  };
  Replayer.prototype.enableInteract = function () {
    this.iframe.setAttribute('scrolling', 'auto');
    this.iframe.style.pointerEvents = 'auto';
  };
  Replayer.prototype.disableInteract = function () {
    this.iframe.setAttribute('scrolling', 'no');
    this.iframe.style.pointerEvents = 'none';
  };
  Replayer.prototype.resetCache = function () {
    this.cache = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["createCache"])();
  };
  Replayer.prototype.setupDom = function () {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('replayer-wrapper');
    this.config.root.appendChild(this.wrapper);
    this.mouse = document.createElement('div');
    this.mouse.classList.add('replayer-mouse');
    this.wrapper.appendChild(this.mouse);
    if (this.config.mouseTail !== false) {
      this.mouseTail = document.createElement('canvas');
      this.mouseTail.classList.add('replayer-mouse-tail');
      this.mouseTail.style.display = 'inherit';
      this.wrapper.appendChild(this.mouseTail);
    }
    this.iframe = document.createElement('iframe');
    var attributes = ['allow-same-origin'];
    if (this.config.UNSAFE_replayCanvas) {
      attributes.push('allow-scripts');
    }
    this.iframe.style.display = 'none';
    this.iframe.setAttribute('sandbox', attributes.join(' '));
    this.disableInteract();
    this.wrapper.appendChild(this.iframe);
    if (this.iframe.contentWindow && this.iframe.contentDocument) {
      Object(_smoothscroll_js__WEBPACK_IMPORTED_MODULE_3__["polyfill"])(this.iframe.contentWindow, this.iframe.contentDocument);
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["polyfill"])(this.iframe.contentWindow);
    }
  };
  Replayer.prototype.handleResize = function (dimension) {
    var e_5, _a;
    this.iframe.style.display = 'inherit';
    try {
      for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])([this.mouseTail, this.iframe]), _c = _b.next(); !_c.done; _c = _b.next()) {
        var el = _c.value;
        if (!el) {
          continue;
        }
        el.setAttribute('width', String(dimension.width));
        el.setAttribute('height', String(dimension.height));
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }
  };
  Replayer.prototype.applyEventsSynchronously = function (events) {
    var e_6, _a;
    try {
      for (var events_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
        var event_1 = events_1_1.value;
        switch (event_1.type) {
          case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].DomContentLoaded:
          case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Load:
          case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Custom:
            continue;
          case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].FullSnapshot:
          case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Meta:
          case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Plugin:
            break;
          case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot:
            switch (event_1.data.source) {
              case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MediaInteraction:
                continue;
              default:
                break;
            }
            break;
          default:
            break;
        }
        var castFn = this.getCastFn(event_1, true);
        castFn();
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }
    if (this.mousePos) {
      this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, true, this.mousePos.debugData);
    }
    this.mousePos = null;
    if (this.touchActive === true) {
      this.mouse.classList.add('touch-active');
    } else if (this.touchActive === false) {
      this.mouse.classList.remove('touch-active');
    }
    this.touchActive = null;
  };
  Replayer.prototype.getCastFn = function (event, isSync) {
    var _this = this;
    if (isSync === void 0) {
      isSync = false;
    }
    var castFn;
    switch (event.type) {
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].DomContentLoaded:
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Load:
        break;
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Custom:
        castFn = function () {
          _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].CustomEvent, event);
        };
        break;
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Meta:
        castFn = function () {
          return _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resize, {
            width: event.data.width,
            height: event.data.height
          });
        };
        break;
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].FullSnapshot:
        castFn = function () {
          if (_this.firstFullSnapshot) {
            if (_this.firstFullSnapshot === event) {
              _this.firstFullSnapshot = true;
              return;
            }
          } else {
            _this.firstFullSnapshot = true;
          }
          _this.rebuildFullSnapshot(event, isSync);
          _this.iframe.contentWindow.scrollTo(event.data.initialOffset);
        };
        break;
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot:
        castFn = function () {
          var e_7, _a;
          _this.applyIncremental(event, isSync);
          if (isSync) {
            return;
          }
          if (event === _this.nextUserInteractionEvent) {
            _this.nextUserInteractionEvent = null;
            _this.backToNormal();
          }
          if (_this.config.skipInactive && !_this.nextUserInteractionEvent) {
            try {
              for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _event = _c.value;
                if (_event.timestamp <= event.timestamp) {
                  continue;
                }
                if (_this.isUserInteraction(_event)) {
                  if (_event.delay - event.delay > SKIP_TIME_THRESHOLD * _this.speedService.state.context.timer.speed) {
                    _this.nextUserInteractionEvent = _event;
                  }
                  break;
                }
              }
            } catch (e_7_1) {
              e_7 = {
                error: e_7_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              } finally {
                if (e_7) throw e_7.error;
              }
            }
            if (_this.nextUserInteractionEvent) {
              var skipTime = _this.nextUserInteractionEvent.delay - event.delay;
              var payload = {
                speed: Math.min(Math.round(skipTime / SKIP_TIME_INTERVAL), _this.config.maxSpeed)
              };
              _this.speedService.send({
                type: 'FAST_FORWARD',
                payload: payload
              });
              _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].SkipStart, payload);
            }
          }
        };
        break;
    }
    var wrappedCastFn = function () {
      var e_8, _a;
      if (castFn) {
        castFn();
      }
      try {
        for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.config.plugins || []), _c = _b.next(); !_c.done; _c = _b.next()) {
          var plugin = _c.value;
          plugin.handler(event, isSync, {
            replayer: _this
          });
        }
      } catch (e_8_1) {
        e_8 = {
          error: e_8_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_8) throw e_8.error;
        }
      }
      _this.service.send({
        type: 'CAST_EVENT',
        payload: {
          event: event
        }
      });
      var last_index = _this.service.state.context.events.length - 1;
      if (event === _this.service.state.context.events[last_index]) {
        var finish_1 = function () {
          if (last_index < _this.service.state.context.events.length - 1) {
            return;
          }
          _this.backToNormal();
          _this.service.send('END');
          _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Finish);
        };
        if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot && event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MouseMove && event.data.positions.length) {
          setTimeout(function () {
            finish_1();
          }, Math.max(0, -event.data.positions[0].timeOffset + 50));
        } else {
          finish_1();
        }
      }
      _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].EventCast, event);
    };
    return wrappedCastFn;
  };
  Replayer.prototype.rebuildFullSnapshot = function (event, isSync) {
    var e_9, _a;
    var _this = this;
    if (isSync === void 0) {
      isSync = false;
    }
    if (!this.iframe.contentDocument) {
      return console.warn('Looks like your replayer has been destroyed.');
    }
    if (Object.keys(this.legacy_missingNodeRetryMap).length) {
      console.warn('Found unresolved missing node map', this.legacy_missingNodeRetryMap);
    }
    this.legacy_missingNodeRetryMap = {};
    var collected = [];
    this.mirror.map = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["rebuild"])(event.data.node, {
      doc: this.iframe.contentDocument,
      afterAppend: function (builtNode) {
        _this.collectIframeAndAttachDocument(collected, builtNode);
      },
      cache: this.cache
    })[1];
    var _loop_1 = function (mutationInQueue, builtNode) {
      this_1.attachDocumentToIframe(mutationInQueue, builtNode);
      this_1.newDocumentQueue = this_1.newDocumentQueue.filter(function (m) {
        return m !== mutationInQueue;
      });
    };
    var this_1 = this;
    try {
      for (var collected_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(collected), collected_1_1 = collected_1.next(); !collected_1_1.done; collected_1_1 = collected_1.next()) {
        var _b = collected_1_1.value,
          mutationInQueue = _b.mutationInQueue,
          builtNode = _b.builtNode;
        _loop_1(mutationInQueue, builtNode);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (collected_1_1 && !collected_1_1.done && (_a = collected_1.return)) _a.call(collected_1);
      } finally {
        if (e_9) throw e_9.error;
      }
    }
    var _c = this.iframe.contentDocument,
      documentElement = _c.documentElement,
      head = _c.head;
    this.insertStyleRules(documentElement, head);
    if (!this.service.state.matches('playing')) {
      this.iframe.contentDocument.getElementsByTagName('html')[0].classList.add('rrweb-paused');
    }
    this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].FullsnapshotRebuilded, event);
    if (!isSync) {
      this.waitForStylesheetLoad();
    }
    if (this.config.UNSAFE_replayCanvas) {
      this.preloadAllImages();
    }
  };
  Replayer.prototype.insertStyleRules = function (documentElement, head) {
    var styleEl = document.createElement('style');
    documentElement.insertBefore(styleEl, head);
    var injectStylesRules = Object(_styles_inject_style_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this.config.blockClass).concat(this.config.insertStyleRules);
    if (this.config.pauseAnimation) {
      injectStylesRules.push('html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }');
    }
    for (var idx = 0; idx < injectStylesRules.length; idx++) {
      styleEl.sheet.insertRule(injectStylesRules[idx], idx);
    }
  };
  Replayer.prototype.attachDocumentToIframe = function (mutation, iframeEl) {
    var e_10, _a;
    var _this = this;
    var collected = [];
    if (!iframeEl.contentDocument) {
      var parent_1 = iframeEl.parentNode;
      while (parent_1) {
        if (this.fragmentParentMap.has(parent_1)) {
          var frag = parent_1;
          var realParent = this.fragmentParentMap.get(frag);
          this.restoreRealParent(frag, realParent);
          break;
        }
        parent_1 = parent_1.parentNode;
      }
    }
    Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(mutation.node, {
      doc: iframeEl.contentDocument,
      map: this.mirror.map,
      hackCss: true,
      skipChild: false,
      afterAppend: function (builtNode) {
        _this.collectIframeAndAttachDocument(collected, builtNode);
        if (builtNode.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element && builtNode.__sn.tagName.toUpperCase() === 'HTML') {
          var _a = iframeEl.contentDocument,
            documentElement = _a.documentElement,
            head = _a.head;
          _this.insertStyleRules(documentElement, head);
        }
      },
      cache: this.cache
    });
    var _loop_2 = function (mutationInQueue, builtNode) {
      this_2.attachDocumentToIframe(mutationInQueue, builtNode);
      this_2.newDocumentQueue = this_2.newDocumentQueue.filter(function (m) {
        return m !== mutationInQueue;
      });
    };
    var this_2 = this;
    try {
      for (var collected_2 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(collected), collected_2_1 = collected_2.next(); !collected_2_1.done; collected_2_1 = collected_2.next()) {
        var _b = collected_2_1.value,
          mutationInQueue = _b.mutationInQueue,
          builtNode = _b.builtNode;
        _loop_2(mutationInQueue, builtNode);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (collected_2_1 && !collected_2_1.done && (_a = collected_2.return)) _a.call(collected_2);
      } finally {
        if (e_10) throw e_10.error;
      }
    }
  };
  Replayer.prototype.collectIframeAndAttachDocument = function (collected, builtNode) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["isIframeINode"])(builtNode)) {
      var mutationInQueue = this.newDocumentQueue.find(function (m) {
        return m.parentId === builtNode.__sn.id;
      });
      if (mutationInQueue) {
        collected.push({
          mutationInQueue: mutationInQueue,
          builtNode: builtNode
        });
      }
    }
  };
  Replayer.prototype.waitForStylesheetLoad = function () {
    var _this = this;
    var _a;
    var head = (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.head;
    if (head) {
      var unloadSheets_1 = new Set();
      var timer_1;
      var beforeLoadState_1 = this.service.state;
      var stateHandler_1 = function () {
        beforeLoadState_1 = _this.service.state;
      };
      this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Start, stateHandler_1);
      this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Pause, stateHandler_1);
      var unsubscribe_1 = function () {
        _this.emitter.off(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Start, stateHandler_1);
        _this.emitter.off(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Pause, stateHandler_1);
      };
      head.querySelectorAll('link[rel="stylesheet"]').forEach(function (css) {
        if (!css.sheet) {
          unloadSheets_1.add(css);
          css.addEventListener('load', function () {
            unloadSheets_1.delete(css);
            if (unloadSheets_1.size === 0 && timer_1 !== -1) {
              if (beforeLoadState_1.matches('playing')) {
                _this.play(_this.getCurrentTime());
              }
              _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].LoadStylesheetEnd);
              if (timer_1) {
                clearTimeout(timer_1);
              }
              unsubscribe_1();
            }
          });
        }
      });
      if (unloadSheets_1.size > 0) {
        this.service.send({
          type: 'PAUSE'
        });
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].LoadStylesheetStart);
        timer_1 = setTimeout(function () {
          if (beforeLoadState_1.matches('playing')) {
            _this.play(_this.getCurrentTime());
          }
          timer_1 = -1;
          unsubscribe_1();
        }, this.config.loadTimeout);
      }
    }
  };
  Replayer.prototype.hasImageArg = function (args) {
    var e_11, _a;
    try {
      for (var args_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
        var arg = args_1_1.value;
        if (!arg || typeof arg !== 'object') {} else if ('rr_type' in arg && 'args' in arg) {
          if (this.hasImageArg(arg.args)) return true;
        } else if ('rr_type' in arg && arg.rr_type === 'HTMLImageElement') {
          return true;
        } else if (arg instanceof Array) {
          if (this.hasImageArg(arg)) return true;
        }
      }
    } catch (e_11_1) {
      e_11 = {
        error: e_11_1
      };
    } finally {
      try {
        if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
      } finally {
        if (e_11) throw e_11.error;
      }
    }
    return false;
  };
  Replayer.prototype.getImageArgs = function (args) {
    var e_12, _a;
    var images = [];
    try {
      for (var args_2 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(args), args_2_1 = args_2.next(); !args_2_1.done; args_2_1 = args_2.next()) {
        var arg = args_2_1.value;
        if (!arg || typeof arg !== 'object') {} else if ('rr_type' in arg && 'args' in arg) {
          images.push.apply(images, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getImageArgs(arg.args)), false));
        } else if ('rr_type' in arg && arg.rr_type === 'HTMLImageElement') {
          images.push(arg.src);
        } else if (arg instanceof Array) {
          images.push.apply(images, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getImageArgs(arg)), false));
        }
      }
    } catch (e_12_1) {
      e_12 = {
        error: e_12_1
      };
    } finally {
      try {
        if (args_2_1 && !args_2_1.done && (_a = args_2.return)) _a.call(args_2);
      } finally {
        if (e_12) throw e_12.error;
      }
    }
    return images;
  };
  Replayer.prototype.preloadAllImages = function () {
    var e_13, _a;
    var _this = this;
    this.service.state;
    var stateHandler = function () {
      _this.service.state;
    };
    this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Start, stateHandler);
    this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Pause, stateHandler);
    var _loop_3 = function (event_2) {
      if (event_2.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot && event_2.data.source === _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].CanvasMutation) if ('commands' in event_2.data) {
        event_2.data.commands.forEach(function (c) {
          return _this.preloadImages(c, event_2);
        });
      } else {
        this_3.preloadImages(event_2.data, event_2);
      }
    };
    var this_3 = this;
    try {
      for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
        var event_2 = _c.value;
        _loop_3(event_2);
      }
    } catch (e_13_1) {
      e_13 = {
        error: e_13_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_13) throw e_13.error;
      }
    }
  };
  Replayer.prototype.preloadImages = function (data, event) {
    var _this = this;
    if (data.property === 'drawImage' && typeof data.args[0] === 'string' && !this.imageMap.has(event)) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.createImageData(canvas.width, canvas.height);
      imgd === null || imgd === void 0 ? void 0 : imgd.data;
      JSON.parse(data.args[0]);
      ctx === null || ctx === void 0 ? void 0 : ctx.putImageData(imgd, 0, 0);
    } else if (this.hasImageArg(data.args)) {
      this.getImageArgs(data.args).forEach(function (url) {
        var image = new Image();
        image.src = url;
        _this.imageMap.set(url, image);
      });
    }
  };
  Replayer.prototype.applyIncremental = function (e, isSync) {
    var _this = this;
    var _a, _b;
    var d = e.data;
    switch (d.source) {
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Mutation:
        {
          if (isSync) {
            d.adds.forEach(function (m) {
              return _this.treeIndex.add(m);
            });
            d.texts.forEach(function (m) {
              var target = _this.mirror.getNode(m.id);
              var parent = target === null || target === void 0 ? void 0 : target.parentNode;
              if (parent && _this.virtualStyleRulesMap.has(parent)) _this.virtualStyleRulesMap.delete(parent);
              _this.treeIndex.text(m);
            });
            d.attributes.forEach(function (m) {
              return _this.treeIndex.attribute(m);
            });
            d.removes.forEach(function (m) {
              return _this.treeIndex.remove(m, _this.mirror);
            });
          }
          try {
            this.applyMutation(d, isSync);
          } catch (error) {
            this.warn("Exception in mutation ".concat(error.message || error), d);
          }
          break;
        }
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Drag:
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].TouchMove:
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MouseMove:
        if (isSync) {
          var lastPosition = d.positions[d.positions.length - 1];
          this.mousePos = {
            x: lastPosition.x,
            y: lastPosition.y,
            id: lastPosition.id,
            debugData: d
          };
        } else {
          d.positions.forEach(function (p) {
            var action = {
              doAction: function () {
                _this.moveAndHover(p.x, p.y, p.id, isSync, d);
              },
              delay: p.timeOffset + e.timestamp - _this.service.state.context.baselineTime
            };
            _this.timer.addAction(action);
          });
          this.timer.addAction({
            doAction: function () {},
            delay: e.delay - ((_a = d.positions[0]) === null || _a === void 0 ? void 0 : _a.timeOffset)
          });
        }
        break;
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MouseInteraction:
        {
          if (d.id === -1) {
            break;
          }
          var event_3 = new Event(_types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"][d.type].toLowerCase());
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].MouseInteraction, {
            type: d.type,
            target: target
          });
          var triggerFocus = this.config.triggerFocus;
          switch (d.type) {
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].Blur:
              if ('blur' in target) {
                target.blur();
              }
              break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].Focus:
              if (triggerFocus && target.focus) {
                target.focus({
                  preventScroll: true
                });
              }
              break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].Click:
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart:
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchEnd:
              if (isSync) {
                if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart) {
                  this.touchActive = true;
                } else if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchEnd) {
                  this.touchActive = false;
                }
                this.mousePos = {
                  x: d.x,
                  y: d.y,
                  id: d.id,
                  debugData: d
                };
              } else {
                if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart) {
                  this.tailPositions.length = 0;
                }
                this.moveAndHover(d.x, d.y, d.id, isSync, d);
                if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].Click) {
                  this.mouse.classList.remove('active');
                  void this.mouse.offsetWidth;
                  this.mouse.classList.add('active');
                } else if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart) {
                  void this.mouse.offsetWidth;
                  this.mouse.classList.add('touch-active');
                } else if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchEnd) {
                  this.mouse.classList.remove('touch-active');
                }
              }
              break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchCancel:
              if (isSync) {
                this.touchActive = false;
              } else {
                this.mouse.classList.remove('touch-active');
              }
              break;
            default:
              target.dispatchEvent(event_3);
          }
          break;
        }
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Scroll:
        {
          if (d.id === -1) {
            break;
          }
          if (isSync) {
            this.treeIndex.scroll(d);
            break;
          }
          this.applyScroll(d, false);
          break;
        }
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].ViewportResize:
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resize, {
          width: d.width,
          height: d.height
        });
        break;
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Input:
        {
          if (d.id === -1) {
            break;
          }
          if (isSync) {
            this.treeIndex.input(d);
            break;
          }
          this.applyInput(d);
          break;
        }
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MediaInteraction:
        {
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          var mediaEl = target;
          try {
            if (d.currentTime) {
              mediaEl.currentTime = d.currentTime;
            }
            if (d.volume) {
              mediaEl.volume = d.volume;
            }
            if (d.muted) {
              mediaEl.muted = d.muted;
            }
            if (d.type === 1) {
              mediaEl.pause();
            }
            if (d.type === 0) {
              mediaEl.play();
            }
          } catch (error) {
            if (this.config.showWarning) {
              console.warn("Failed to replay media interactions: ".concat(error.message || error));
            }
          }
          break;
        }
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].StyleSheetRule:
        {
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          var styleEl = target;
          var parent_2 = target.parentNode;
          var usingVirtualParent_1 = this.fragmentParentMap.has(parent_2);
          var styleSheet_1 = usingVirtualParent_1 ? null : styleEl.sheet;
          var rules_1;
          if (!styleSheet_1) {
            if (this.virtualStyleRulesMap.has(target)) {
              rules_1 = this.virtualStyleRulesMap.get(target);
            } else {
              rules_1 = [];
              this.virtualStyleRulesMap.set(target, rules_1);
            }
          }
          if (d.adds) {
            d.adds.forEach(function (_a) {
              var rule = _a.rule,
                nestedIndex = _a.index;
              if (styleSheet_1) {
                try {
                  if (Array.isArray(nestedIndex)) {
                    var _b = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getPositionsAndIndex"])(nestedIndex),
                      positions = _b.positions,
                      index = _b.index;
                    var nestedRule = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getNestedRule"])(styleSheet_1.cssRules, positions);
                    nestedRule.insertRule(rule, index);
                  } else {
                    var index = nestedIndex === undefined ? undefined : Math.min(nestedIndex, styleSheet_1.cssRules.length);
                    styleSheet_1.insertRule(rule, index);
                  }
                } catch (e) {}
              } else {
                rules_1 === null || rules_1 === void 0 ? void 0 : rules_1.push({
                  cssText: rule,
                  index: nestedIndex,
                  type: _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["StyleRuleType"].Insert
                });
              }
            });
          }
          if (d.removes) {
            d.removes.forEach(function (_a) {
              var nestedIndex = _a.index;
              if (usingVirtualParent_1) {
                rules_1 === null || rules_1 === void 0 ? void 0 : rules_1.push({
                  index: nestedIndex,
                  type: _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["StyleRuleType"].Remove
                });
              } else {
                try {
                  if (Array.isArray(nestedIndex)) {
                    var _b = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getPositionsAndIndex"])(nestedIndex),
                      positions = _b.positions,
                      index = _b.index;
                    var nestedRule = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getNestedRule"])(styleSheet_1.cssRules, positions);
                    nestedRule.deleteRule(index || 0);
                  } else {
                    styleSheet_1 === null || styleSheet_1 === void 0 ? void 0 : styleSheet_1.deleteRule(nestedIndex);
                  }
                } catch (e) {}
              }
            });
          }
          break;
        }
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].StyleDeclaration:
        {
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          var styleEl = target;
          var parent_3 = target.parentNode;
          var usingVirtualParent = this.fragmentParentMap.has(parent_3);
          var styleSheet = usingVirtualParent ? null : styleEl.sheet;
          var rules = [];
          if (!styleSheet) {
            if (this.virtualStyleRulesMap.has(target)) {
              rules = this.virtualStyleRulesMap.get(target);
            } else {
              rules = [];
              this.virtualStyleRulesMap.set(target, rules);
            }
          }
          if (d.set) {
            if (styleSheet) {
              var rule = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getNestedRule"])(styleSheet.rules, d.index);
              rule.style.setProperty(d.set.property, d.set.value, d.set.priority);
            } else {
              rules.push(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
                type: _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["StyleRuleType"].SetProperty,
                index: d.index
              }, d.set));
            }
          }
          if (d.remove) {
            if (styleSheet) {
              var rule = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getNestedRule"])(styleSheet.rules, d.index);
              rule.style.removeProperty(d.remove.property);
            } else {
              rules.push(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
                type: _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["StyleRuleType"].RemoveProperty,
                index: d.index
              }, d.remove));
            }
          }
          break;
        }
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].CanvasMutation:
        {
          if (!this.config.UNSAFE_replayCanvas) {
            return;
          }
          var target = this.mirror.getNode(d.id);
          if (!target) {
            return this.debugNodeNotFound(d, d.id);
          }
          Object(_canvas_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
            event: e,
            mutation: d,
            target: target,
            imageMap: this.imageMap,
            errorHandler: this.warnCanvasMutationFailed.bind(this)
          });
          break;
        }
      case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Font:
        {
          try {
            var fontFace = new FontFace(d.family, d.buffer ? new Uint8Array(JSON.parse(d.fontSource)) : d.fontSource, d.descriptors);
            (_b = this.iframe.contentDocument) === null || _b === void 0 ? void 0 : _b.fonts.add(fontFace);
          } catch (error) {
            if (this.config.showWarning) {
              console.warn(error);
            }
          }
          break;
        }
    }
  };
  Replayer.prototype.applyMutation = function (d, useVirtualParent) {
    var e_14, _a;
    var _this = this;
    d.removes.forEach(function (mutation) {
      var target = _this.mirror.getNode(mutation.id);
      if (!target) {
        if (d.removes.find(function (r) {
          return r.id === mutation.parentId;
        })) {
          return;
        }
        return _this.warnNodeNotFound(d, mutation.id);
      }
      if (_this.virtualStyleRulesMap.has(target)) {
        _this.virtualStyleRulesMap.delete(target);
      }
      var parent = _this.mirror.getNode(mutation.parentId);
      if (!parent) {
        return _this.warnNodeNotFound(d, mutation.parentId);
      }
      if (mutation.isShadow && Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["hasShadowRoot"])(parent)) {
        parent = parent.shadowRoot;
      }
      _this.mirror.removeNodeFromMap(target);
      if (parent) {
        var realTarget = null;
        var realParent = '__sn' in parent ? _this.fragmentParentMap.get(parent) : undefined;
        if (realParent && realParent.contains(target)) {
          parent = realParent;
        } else if (_this.fragmentParentMap.has(target)) {
          realTarget = _this.fragmentParentMap.get(target);
          _this.fragmentParentMap.delete(target);
          target = realTarget;
        }
        try {
          parent.removeChild(target);
        } catch (error) {
          if (error instanceof DOMException) {
            _this.warn('parent could not remove child in mutation', parent, realParent, target, realTarget, d);
          } else {
            throw error;
          }
        }
      }
    });
    var legacy_missingNodeMap = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.legacy_missingNodeRetryMap);
    var queue = [];
    var nextNotInDOM = function (mutation) {
      var next = null;
      if (mutation.nextId) {
        next = _this.mirror.getNode(mutation.nextId);
      }
      if (mutation.nextId !== null && mutation.nextId !== undefined && mutation.nextId !== -1 && !next) {
        return true;
      }
      return false;
    };
    var appendNode = function (mutation) {
      var e_15, _a;
      var _b, _c;
      if (!_this.iframe.contentDocument) {
        return console.warn('Looks like your replayer has been destroyed.');
      }
      var parent = _this.mirror.getNode(mutation.parentId);
      if (!parent) {
        if (mutation.node.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Document) {
          return _this.newDocumentQueue.push(mutation);
        }
        return queue.push(mutation);
      }
      var parentInDocument = null;
      if (_this.iframe.contentDocument.contains) {
        parentInDocument = _this.iframe.contentDocument.contains(parent);
      } else if (_this.iframe.contentDocument.body.contains) {
        parentInDocument = _this.iframe.contentDocument.body.contains(parent);
      }
      var hasIframeChild = ((_c = (_b = parent).getElementsByTagName) === null || _c === void 0 ? void 0 : _c.call(_b, 'iframe').length) > 0;
      if (useVirtualParent && parentInDocument && !Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["isIframeINode"])(parent) && !hasIframeChild) {
        var virtualParent = document.createDocumentFragment();
        _this.mirror.map[mutation.parentId] = virtualParent;
        _this.fragmentParentMap.set(virtualParent, parent);
        _this.storeState(parent);
        while (parent.firstChild) {
          virtualParent.appendChild(parent.firstChild);
        }
        parent = virtualParent;
      }
      if (mutation.node.isShadow) {
        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["hasShadowRoot"])(parent)) {
          parent.attachShadow({
            mode: 'open'
          });
          parent = parent.shadowRoot;
        } else parent = parent.shadowRoot;
      }
      var previous = null;
      var next = null;
      if (mutation.previousId) {
        previous = _this.mirror.getNode(mutation.previousId);
      }
      if (mutation.nextId) {
        next = _this.mirror.getNode(mutation.nextId);
      }
      if (nextNotInDOM(mutation)) {
        return queue.push(mutation);
      }
      if (mutation.node.rootId && !_this.mirror.getNode(mutation.node.rootId)) {
        return;
      }
      var targetDoc = mutation.node.rootId ? _this.mirror.getNode(mutation.node.rootId) : _this.iframe.contentDocument;
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["isIframeINode"])(parent)) {
        _this.attachDocumentToIframe(mutation, parent);
        return;
      }
      var target = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(mutation.node, {
        doc: targetDoc,
        map: _this.mirror.map,
        skipChild: true,
        hackCss: true,
        cache: _this.cache
      });
      if (mutation.previousId === -1 || mutation.nextId === -1) {
        legacy_missingNodeMap[mutation.node.id] = {
          node: target,
          mutation: mutation
        };
        return;
      }
      if ('__sn' in parent && parent.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element && parent.__sn.tagName === 'textarea' && mutation.node.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Text) {
        try {
          for (var _d = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(parent.childNodes)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var c = _e.value;
            if (c.nodeType === parent.TEXT_NODE) {
              parent.removeChild(c);
            }
          }
        } catch (e_15_1) {
          e_15 = {
            error: e_15_1
          };
        } finally {
          try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
          } finally {
            if (e_15) throw e_15.error;
          }
        }
      }
      if (previous && previous.nextSibling && previous.nextSibling.parentNode) {
        parent.insertBefore(target, previous.nextSibling);
      } else if (next && next.parentNode) {
        parent.contains(next) ? parent.insertBefore(target, next) : parent.insertBefore(target, null);
      } else {
        if (parent === targetDoc) {
          while (targetDoc.firstChild) {
            targetDoc.removeChild(targetDoc.firstChild);
          }
        }
        parent.appendChild(target);
      }
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["isIframeINode"])(target)) {
        var mutationInQueue_1 = _this.newDocumentQueue.find(function (m) {
          return m.parentId === target.__sn.id;
        });
        if (mutationInQueue_1) {
          _this.attachDocumentToIframe(mutationInQueue_1, target);
          _this.newDocumentQueue = _this.newDocumentQueue.filter(function (m) {
            return m !== mutationInQueue_1;
          });
        }
      }
      if (mutation.previousId || mutation.nextId) {
        _this.legacy_resolveMissingNode(legacy_missingNodeMap, parent, target, mutation);
      }
    };
    d.adds.forEach(function (mutation) {
      appendNode(mutation);
    });
    var startTime = Date.now();
    while (queue.length) {
      var resolveTrees = Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["queueToResolveTrees"])(queue);
      queue.length = 0;
      if (Date.now() - startTime > 500) {
        this.warn('Timeout in the loop, please check the resolve tree data:', resolveTrees);
        break;
      }
      try {
        for (var resolveTrees_1 = (e_14 = void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(resolveTrees)), resolveTrees_1_1 = resolveTrees_1.next(); !resolveTrees_1_1.done; resolveTrees_1_1 = resolveTrees_1.next()) {
          var tree = resolveTrees_1_1.value;
          var parent_4 = this.mirror.getNode(tree.value.parentId);
          if (!parent_4) {
            this.debug('Drop resolve tree since there is no parent for the root node.', tree);
          } else {
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["iterateResolveTree"])(tree, function (mutation) {
              appendNode(mutation);
            });
          }
        }
      } catch (e_14_1) {
        e_14 = {
          error: e_14_1
        };
      } finally {
        try {
          if (resolveTrees_1_1 && !resolveTrees_1_1.done && (_a = resolveTrees_1.return)) _a.call(resolveTrees_1);
        } finally {
          if (e_14) throw e_14.error;
        }
      }
    }
    if (Object.keys(legacy_missingNodeMap).length) {
      Object.assign(this.legacy_missingNodeRetryMap, legacy_missingNodeMap);
    }
    d.texts.forEach(function (mutation) {
      var target = _this.mirror.getNode(mutation.id);
      if (!target) {
        if (d.removes.find(function (r) {
          return r.id === mutation.id;
        })) {
          return;
        }
        return _this.warnNodeNotFound(d, mutation.id);
      }
      if (_this.fragmentParentMap.has(target)) {
        target = _this.fragmentParentMap.get(target);
      }
      target.textContent = mutation.value;
    });
    d.attributes.forEach(function (mutation) {
      var target = _this.mirror.getNode(mutation.id);
      if (!target) {
        if (d.removes.find(function (r) {
          return r.id === mutation.id;
        })) {
          return;
        }
        return _this.warnNodeNotFound(d, mutation.id);
      }
      if (_this.fragmentParentMap.has(target)) {
        target = _this.fragmentParentMap.get(target);
      }
      for (var attributeName in mutation.attributes) {
        if (typeof attributeName === 'string') {
          var value = mutation.attributes[attributeName];
          if (value === null) {
            target.removeAttribute(attributeName);
          } else if (typeof value === 'string') {
            try {
              target.setAttribute(attributeName, value);
            } catch (error) {
              if (_this.config.showWarning) {
                console.warn('An error occurred may due to the checkout feature.', error);
              }
            }
          } else if (attributeName === 'style') {
            var styleValues = value;
            var targetEl = target;
            for (var s in styleValues) {
              if (styleValues[s] === false) {
                targetEl.style.removeProperty(s);
              } else if (styleValues[s] instanceof Array) {
                var svp = styleValues[s];
                targetEl.style.setProperty(s, svp[0], svp[1]);
              } else {
                var svs = styleValues[s];
                targetEl.style.setProperty(s, svs);
              }
            }
          }
        }
      }
    });
  };
  Replayer.prototype.applyScroll = function (d, isSync) {
    var target = this.mirror.getNode(d.id);
    if (!target) {
      return this.debugNodeNotFound(d, d.id);
    }
    if (target === this.iframe.contentDocument) {
      this.iframe.contentWindow.scrollTo({
        top: d.y,
        left: d.x,
        behavior: isSync ? 'auto' : 'smooth'
      });
    } else if (target.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Document) {
      target.defaultView.scrollTo({
        top: d.y,
        left: d.x,
        behavior: isSync ? 'auto' : 'smooth'
      });
    } else {
      try {
        target.scrollTop = d.y;
        target.scrollLeft = d.x;
      } catch (error) {}
    }
  };
  Replayer.prototype.applyInput = function (d) {
    var target = this.mirror.getNode(d.id);
    if (!target) {
      return this.debugNodeNotFound(d, d.id);
    }
    try {
      target.checked = d.isChecked;
      target.value = d.text;
    } catch (error) {}
  };
  Replayer.prototype.applyText = function (d, mutation) {
    var target = this.mirror.getNode(d.id);
    if (!target) {
      return this.debugNodeNotFound(mutation, d.id);
    }
    try {
      target.textContent = d.value;
    } catch (error) {}
  };
  Replayer.prototype.legacy_resolveMissingNode = function (map, parent, target, targetMutation) {
    var previousId = targetMutation.previousId,
      nextId = targetMutation.nextId;
    var previousInMap = previousId && map[previousId];
    var nextInMap = nextId && map[nextId];
    if (previousInMap) {
      var _a = previousInMap,
        node = _a.node,
        mutation = _a.mutation;
      parent.insertBefore(node, target);
      delete map[mutation.node.id];
      delete this.legacy_missingNodeRetryMap[mutation.node.id];
      if (mutation.previousId || mutation.nextId) {
        this.legacy_resolveMissingNode(map, parent, node, mutation);
      }
    }
    if (nextInMap) {
      var _b = nextInMap,
        node = _b.node,
        mutation = _b.mutation;
      parent.insertBefore(node, target.nextSibling);
      delete map[mutation.node.id];
      delete this.legacy_missingNodeRetryMap[mutation.node.id];
      if (mutation.previousId || mutation.nextId) {
        this.legacy_resolveMissingNode(map, parent, node, mutation);
      }
    }
  };
  Replayer.prototype.moveAndHover = function (x, y, id, isSync, debugData) {
    var target = this.mirror.getNode(id);
    if (!target) {
      return this.debugNodeNotFound(debugData, id);
    }
    var base = Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["getBaseDimension"])(target, this.iframe);
    var _x = x * base.absoluteScale + base.x;
    var _y = y * base.absoluteScale + base.y;
    this.mouse.style.left = "".concat(_x, "px");
    this.mouse.style.top = "".concat(_y, "px");
    if (!isSync) {
      this.drawMouseTail({
        x: _x,
        y: _y
      });
    }
    this.hoverElements(target);
  };
  Replayer.prototype.drawMouseTail = function (position) {
    var _this = this;
    if (!this.mouseTail) {
      return;
    }
    var _a = this.config.mouseTail === true ? defaultMouseTailConfig : Object.assign({}, defaultMouseTailConfig, this.config.mouseTail),
      lineCap = _a.lineCap,
      lineWidth = _a.lineWidth,
      strokeStyle = _a.strokeStyle,
      duration = _a.duration;
    var draw = function () {
      if (!_this.mouseTail) {
        return;
      }
      var ctx = _this.mouseTail.getContext('2d');
      if (!ctx || !_this.tailPositions.length) {
        return;
      }
      ctx.clearRect(0, 0, _this.mouseTail.width, _this.mouseTail.height);
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.lineCap = lineCap;
      ctx.strokeStyle = strokeStyle;
      ctx.moveTo(_this.tailPositions[0].x, _this.tailPositions[0].y);
      _this.tailPositions.forEach(function (p) {
        return ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();
    };
    this.tailPositions.push(position);
    draw();
    setTimeout(function () {
      _this.tailPositions = _this.tailPositions.filter(function (p) {
        return p !== position;
      });
      draw();
    }, duration / this.speedService.state.context.timer.speed);
  };
  Replayer.prototype.hoverElements = function (el) {
    var _a;
    (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.\\:hover').forEach(function (hoveredEl) {
      hoveredEl.classList.remove(':hover');
    });
    var currentEl = el;
    while (currentEl) {
      if (currentEl.classList) {
        currentEl.classList.add(':hover');
      }
      currentEl = currentEl.parentElement;
    }
  };
  Replayer.prototype.isUserInteraction = function (event) {
    if (event.type !== _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot) {
      return false;
    }
    return event.data.source > _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Mutation && event.data.source <= _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Input;
  };
  Replayer.prototype.backToNormal = function () {
    this.nextUserInteractionEvent = null;
    if (this.speedService.state.matches('normal')) {
      return;
    }
    this.speedService.send({
      type: 'BACK_TO_NORMAL'
    });
    this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].SkipEnd, {
      speed: this.speedService.state.context.normalSpeed
    });
  };
  Replayer.prototype.restoreRealParent = function (frag, parent) {
    this.mirror.map[parent.__sn.id] = parent;
    if (parent.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element && parent.__sn.tagName === 'textarea' && frag.textContent) {
      parent.value = frag.textContent;
    }
    parent.appendChild(frag);
    this.restoreState(parent);
  };
  Replayer.prototype.storeState = function (parent) {
    var e_16, _a;
    if (parent) {
      if (parent.nodeType === parent.ELEMENT_NODE) {
        var parentElement = parent;
        if (parentElement.scrollLeft || parentElement.scrollTop) {
          this.elementStateMap.set(parent, {
            scroll: [parentElement.scrollLeft, parentElement.scrollTop]
          });
        }
        if (parentElement.tagName === 'STYLE') Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["storeCSSRules"])(parentElement, this.virtualStyleRulesMap);
        var children = parentElement.children;
        try {
          for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            this.storeState(child);
          }
        } catch (e_16_1) {
          e_16 = {
            error: e_16_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_16) throw e_16.error;
          }
        }
      }
    }
  };
  Replayer.prototype.restoreState = function (parent) {
    var e_17, _a;
    if (parent.nodeType === parent.ELEMENT_NODE) {
      var parentElement = parent;
      if (this.elementStateMap.has(parent)) {
        var storedState = this.elementStateMap.get(parent);
        if (storedState.scroll) {
          parentElement.scrollLeft = storedState.scroll[0];
          parentElement.scrollTop = storedState.scroll[1];
        }
        this.elementStateMap.delete(parent);
      }
      var children = parentElement.children;
      try {
        for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          this.restoreState(child);
        }
      } catch (e_17_1) {
        e_17 = {
          error: e_17_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_17) throw e_17.error;
        }
      }
    }
  };
  Replayer.prototype.restoreNodeSheet = function (node) {
    var storedRules = this.virtualStyleRulesMap.get(node);
    if (node.nodeName !== 'STYLE') {
      return;
    }
    if (!storedRules) {
      return;
    }
    var styleNode = node;
    Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["applyVirtualStyleRulesToNode"])(storedRules, styleNode);
  };
  Replayer.prototype.warnNodeNotFound = function (d, id) {
    if (this.treeIndex.idRemoved(id)) {
      this.warn("Node with id '".concat(id, "' was previously removed. "), d);
    } else {
      this.warn("Node with id '".concat(id, "' not found. "), d);
    }
  };
  Replayer.prototype.warnCanvasMutationFailed = function (d, error) {
    this.warn("Has error on canvas update", error, 'canvas mutation:', d);
  };
  Replayer.prototype.debugNodeNotFound = function (d, id) {
    if (this.treeIndex.idRemoved(id)) {
      this.debug(REPLAY_CONSOLE_PREFIX, "Node with id '".concat(id, "' was previously removed. "), d);
    } else {
      this.debug(REPLAY_CONSOLE_PREFIX, "Node with id '".concat(id, "' not found. "), d);
    }
  };
  Replayer.prototype.warn = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!this.config.showWarning) {
      return;
    }
    console.warn.apply(console, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([REPLAY_CONSOLE_PREFIX], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
  };
  Replayer.prototype.debug = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!this.config.showDebug) {
      return;
    }
    console.log.apply(console, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([REPLAY_CONSOLE_PREFIX], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
  };
  return Replayer;
}();


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js ***!
  \**************************************************************************/
/*! exports provided: createPlayerService, createSpeedService, discardPriorSnapshots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayerService", function() { return createPlayerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpeedService", function() { return createSpeedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discardPriorSnapshots", function() { return discardPriorSnapshots; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ext/@xstate/fsm/es/index.js */ "./node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js");




function discardPriorSnapshots(events, baselineTime) {
  for (var idx = events.length - 1; idx >= 0; idx--) {
    var event_1 = events[idx];
    if (event_1.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Meta) {
      if (event_1.timestamp <= baselineTime) {
        return events.slice(idx);
      }
    }
  }
  return events;
}
function createPlayerService(context, _a) {
  var getCastFn = _a.getCastFn,
    applyEventsSynchronously = _a.applyEventsSynchronously,
    emitter = _a.emitter;
  var playerMachine = Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["createMachine"])({
    id: 'player',
    context: context,
    initial: 'paused',
    states: {
      playing: {
        on: {
          PAUSE: {
            target: 'paused',
            actions: ['pause']
          },
          CAST_EVENT: {
            target: 'playing',
            actions: 'castEvent'
          },
          END: {
            target: 'paused',
            actions: ['resetLastPlayedEvent', 'pause']
          },
          ADD_EVENT: {
            target: 'playing',
            actions: ['addEvent']
          }
        }
      },
      paused: {
        on: {
          PLAY: {
            target: 'playing',
            actions: ['recordTimeOffset', 'play']
          },
          CAST_EVENT: {
            target: 'paused',
            actions: 'castEvent'
          },
          TO_LIVE: {
            target: 'live',
            actions: ['startLive']
          },
          ADD_EVENT: {
            target: 'paused',
            actions: ['addEvent']
          }
        }
      },
      live: {
        on: {
          ADD_EVENT: {
            target: 'live',
            actions: ['addEvent']
          },
          CAST_EVENT: {
            target: 'live',
            actions: ['castEvent']
          }
        }
      }
    }
  }, {
    actions: {
      castEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        lastPlayedEvent: function (ctx, event) {
          if (event.type === 'CAST_EVENT') {
            return event.payload.event;
          }
          return ctx.lastPlayedEvent;
        }
      }),
      recordTimeOffset: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(function (ctx, event) {
        var timeOffset = ctx.timeOffset;
        if ('payload' in event && 'timeOffset' in event.payload) {
          timeOffset = event.payload.timeOffset;
        }
        return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), {
          timeOffset: timeOffset,
          baselineTime: ctx.events[0].timestamp + timeOffset
        });
      }),
      play: function (ctx) {
        var e_1, _a, e_2, _b;
        var _c;
        var timer = ctx.timer,
          events = ctx.events,
          baselineTime = ctx.baselineTime,
          lastPlayedEvent = ctx.lastPlayedEvent;
        timer.clear();
        try {
          for (var events_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var event_2 = events_1_1.value;
            Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["addDelay"])(event_2, baselineTime);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        var neededEvents = discardPriorSnapshots(events, baselineTime);
        var lastPlayedTimestamp = lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.timestamp;
        if ((lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.type) === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot && lastPlayedEvent.data.source === _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseMove) {
          lastPlayedTimestamp = lastPlayedEvent.timestamp + ((_c = lastPlayedEvent.data.positions[0]) === null || _c === void 0 ? void 0 : _c.timeOffset);
        }
        if (baselineTime < (lastPlayedTimestamp || 0)) {
          emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].PlayBack);
        }
        var syncEvents = new Array();
        var actions = new Array();
        var _loop_1 = function (event_3) {
          if (lastPlayedTimestamp && lastPlayedTimestamp < baselineTime && (event_3.timestamp <= lastPlayedTimestamp || event_3 === lastPlayedEvent)) {
            return "continue";
          }
          if (event_3.timestamp < baselineTime) {
            syncEvents.push(event_3);
          } else {
            var castFn_1 = getCastFn(event_3, false);
            actions.push({
              doAction: function () {
                castFn_1();
              },
              delay: event_3.delay
            });
          }
        };
        try {
          for (var neededEvents_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(neededEvents), neededEvents_1_1 = neededEvents_1.next(); !neededEvents_1_1.done; neededEvents_1_1 = neededEvents_1.next()) {
            var event_3 = neededEvents_1_1.value;
            _loop_1(event_3);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (neededEvents_1_1 && !neededEvents_1_1.done && (_b = neededEvents_1.return)) _b.call(neededEvents_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        applyEventsSynchronously(syncEvents);
        emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Flush);
        timer.addActions(actions);
        timer.start();
      },
      pause: function (ctx) {
        ctx.timer.clear();
      },
      resetLastPlayedEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(function (ctx) {
        return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), {
          lastPlayedEvent: null
        });
      }),
      startLive: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        baselineTime: function (ctx, event) {
          ctx.timer.toggleLiveMode(true);
          ctx.timer.start();
          if (event.type === 'TO_LIVE' && event.payload.baselineTime) {
            return event.payload.baselineTime;
          }
          return Date.now();
        }
      }),
      addEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(function (ctx, machineEvent) {
        var baselineTime = ctx.baselineTime,
          timer = ctx.timer,
          events = ctx.events;
        if (machineEvent.type === 'ADD_EVENT') {
          var event_4 = machineEvent.payload.event;
          Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["addDelay"])(event_4, baselineTime);
          var end = events.length - 1;
          if (!events[end] || events[end].timestamp <= event_4.timestamp) {
            events.push(event_4);
          } else {
            var insertionIndex = -1;
            var start = 0;
            while (start <= end) {
              var mid = Math.floor((start + end) / 2);
              if (events[mid].timestamp <= event_4.timestamp) {
                start = mid + 1;
              } else {
                end = mid - 1;
              }
            }
            if (insertionIndex === -1) {
              insertionIndex = start;
            }
            events.splice(insertionIndex, 0, event_4);
          }
          var isSync = event_4.timestamp < baselineTime;
          var castFn_2 = getCastFn(event_4, isSync);
          if (isSync) {
            castFn_2();
          } else if (timer.isActive()) {
            timer.addAction({
              doAction: function () {
                castFn_2();
              },
              delay: event_4.delay
            });
          }
        }
        return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), {
          events: events
        });
      })
    }
  });
  return Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["interpret"])(playerMachine);
}
function createSpeedService(context) {
  var speedMachine = Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["createMachine"])({
    id: 'speed',
    context: context,
    initial: 'normal',
    states: {
      normal: {
        on: {
          FAST_FORWARD: {
            target: 'skipping',
            actions: ['recordSpeed', 'setSpeed']
          },
          SET_SPEED: {
            target: 'normal',
            actions: ['setSpeed']
          }
        }
      },
      skipping: {
        on: {
          BACK_TO_NORMAL: {
            target: 'normal',
            actions: ['restoreSpeed']
          },
          SET_SPEED: {
            target: 'normal',
            actions: ['setSpeed']
          }
        }
      }
    }
  }, {
    actions: {
      setSpeed: function (ctx, event) {
        if ('payload' in event) {
          ctx.timer.setSpeed(event.payload.speed);
        }
      },
      recordSpeed: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])({
        normalSpeed: function (ctx) {
          return ctx.timer.speed;
        }
      }),
      restoreSpeed: function (ctx) {
        ctx.timer.setSpeed(ctx.normalSpeed);
      }
    }
  });
  return Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["interpret"])(speedMachine);
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js ***!
  \*******************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
function polyfill(w, d) {
  if (w === void 0) {
    w = window;
  }
  if (d === void 0) {
    d = document;
  }
  if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
    return;
  }
  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468;
  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  };
  var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }
  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }
  function shouldBailOut(firstArg) {
    if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
      return true;
    }
    if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
      return false;
    }
    throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
  }
  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }
    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }
  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
    return overflowValue === 'auto' || overflowValue === 'scroll';
  }
  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
    return isScrollableY || isScrollableX;
  }
  function findScrollableParent(el) {
    while (el !== d.body && isScrollable(el) === false) {
      el = el.parentNode || el.host;
    }
    return el;
  }
  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;
    elapsed = elapsed > 1 ? 1 : elapsed;
    value = ease(elapsed);
    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;
    context.method.call(context.scrollable, currentX, currentY);
    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }
  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now();
    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    }
    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  }
  w.scroll = w.scrollTo = function () {
    if (arguments[0] === undefined) {
      return;
    }
    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
      return;
    }
    smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
  };
  w.scrollBy = function () {
    if (arguments[0] === undefined) {
      return;
    }
    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
      return;
    }
    smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
  };
  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    if (arguments[0] === undefined) {
      return;
    }
    if (shouldBailOut(arguments[0]) === true) {
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }
      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
      return;
    }
    var left = arguments[0].left;
    var top = arguments[0].top;
    smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
  };
  Element.prototype.scrollBy = function () {
    if (arguments[0] === undefined) {
      return;
    }
    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
      return;
    }
    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  };
  Element.prototype.scrollIntoView = function () {
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
      return;
    }
    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();
    if (scrollableParent !== d.body) {
      smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rules = function (blockClass) {
  return [".".concat(blockClass, " { background: currentColor }"), 'noscript { display: none !important; }'];
};
/* harmony default export */ __webpack_exports__["default"] = (rules);

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js":
/*!************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js ***!
  \************************************************************************/
/*! exports provided: Timer, addDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDelay", function() { return addDelay; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");

var Timer = function () {
  function Timer(actions, speed) {
    if (actions === void 0) {
      actions = [];
    }
    this.timeOffset = 0;
    this.raf = null;
    this.actions = actions;
    this.speed = speed;
  }
  Timer.prototype.addAction = function (action) {
    var index = this.findActionIndex(action);
    this.actions.splice(index, 0, action);
  };
  Timer.prototype.addActions = function (actions) {
    this.actions = this.actions.concat(actions);
  };
  Timer.prototype.start = function () {
    this.timeOffset = 0;
    var lastTimestamp = performance.now();
    var actions = this.actions;
    var self = this;
    function check() {
      var time = performance.now();
      self.timeOffset += (time - lastTimestamp) * self.speed;
      lastTimestamp = time;
      while (actions.length) {
        var action = actions[0];
        if (self.timeOffset >= action.delay) {
          actions.shift();
          action.doAction();
        } else {
          break;
        }
      }
      if (actions.length > 0 || self.liveMode) {
        self.raf = requestAnimationFrame(check);
      }
    }
    this.raf = requestAnimationFrame(check);
  };
  Timer.prototype.clear = function () {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }
    this.actions.length = 0;
  };
  Timer.prototype.setSpeed = function (speed) {
    this.speed = speed;
  };
  Timer.prototype.toggleLiveMode = function (mode) {
    this.liveMode = mode;
  };
  Timer.prototype.isActive = function () {
    return this.raf !== null;
  };
  Timer.prototype.findActionIndex = function (action) {
    var start = 0;
    var end = this.actions.length - 1;
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (this.actions[mid].delay < action.delay) {
        start = mid + 1;
      } else if (this.actions[mid].delay > action.delay) {
        end = mid - 1;
      } else {
        return mid + 1;
      }
    }
    return start;
  };
  return Timer;
}();
function addDelay(event, baselineTime) {
  if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_0__["EventType"].IncrementalSnapshot && event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_0__["IncrementalSource"].MouseMove) {
    var firstOffset = event.data.positions[0].timeOffset;
    var firstTimestamp = event.timestamp + firstOffset;
    event.delay = firstTimestamp - baselineTime;
    return firstTimestamp - baselineTime;
  }
  event.delay = event.timestamp - baselineTime;
  return event.delay;
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/virtual-styles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/virtual-styles.js ***!
  \*********************************************************************************/
/*! exports provided: StyleRuleType, applyVirtualStyleRulesToNode, getNestedRule, getPositionsAndIndex, storeCSSRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRuleType", function() { return StyleRuleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyVirtualStyleRulesToNode", function() { return applyVirtualStyleRulesToNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNestedRule", function() { return getNestedRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsAndIndex", function() { return getPositionsAndIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCSSRules", function() { return storeCSSRules; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");

var StyleRuleType;
(function (StyleRuleType) {
  StyleRuleType[StyleRuleType["Insert"] = 0] = "Insert";
  StyleRuleType[StyleRuleType["Remove"] = 1] = "Remove";
  StyleRuleType[StyleRuleType["Snapshot"] = 2] = "Snapshot";
  StyleRuleType[StyleRuleType["SetProperty"] = 3] = "SetProperty";
  StyleRuleType[StyleRuleType["RemoveProperty"] = 4] = "RemoveProperty";
})(StyleRuleType || (StyleRuleType = {}));
function getNestedRule(rules, position) {
  var rule = rules[position[0]];
  if (position.length === 1) {
    return rule;
  } else {
    return getNestedRule(rule.cssRules[position[1]].cssRules, position.slice(2));
  }
}
function getPositionsAndIndex(nestedIndex) {
  var positions = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(nestedIndex), false);
  var index = positions.pop();
  return {
    positions: positions,
    index: index
  };
}
function applyVirtualStyleRulesToNode(storedRules, styleNode) {
  var sheet = styleNode.sheet;
  if (!sheet) {
    return;
  }
  storedRules.forEach(function (rule) {
    if (rule.type === StyleRuleType.Insert) {
      try {
        if (Array.isArray(rule.index)) {
          var _a = getPositionsAndIndex(rule.index),
            positions = _a.positions,
            index = _a.index;
          var nestedRule = getNestedRule(sheet.cssRules, positions);
          nestedRule.insertRule(rule.cssText, index);
        } else {
          sheet.insertRule(rule.cssText, rule.index);
        }
      } catch (e) {}
    } else if (rule.type === StyleRuleType.Remove) {
      try {
        if (Array.isArray(rule.index)) {
          var _b = getPositionsAndIndex(rule.index),
            positions = _b.positions,
            index = _b.index;
          var nestedRule = getNestedRule(sheet.cssRules, positions);
          nestedRule.deleteRule(index || 0);
        } else {
          sheet.deleteRule(rule.index);
        }
      } catch (e) {}
    } else if (rule.type === StyleRuleType.Snapshot) {
      restoreSnapshotOfStyleRulesToNode(rule.cssTexts, styleNode);
    } else if (rule.type === StyleRuleType.SetProperty) {
      var nativeRule = getNestedRule(sheet.cssRules, rule.index);
      nativeRule.style.setProperty(rule.property, rule.value, rule.priority);
    } else if (rule.type === StyleRuleType.RemoveProperty) {
      var nativeRule = getNestedRule(sheet.cssRules, rule.index);
      nativeRule.style.removeProperty(rule.property);
    }
  });
}
function restoreSnapshotOfStyleRulesToNode(cssTexts, styleNode) {
  var _a;
  try {
    var existingRules = Array.from(((_a = styleNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) || []).map(function (rule) {
      return rule.cssText;
    });
    var existingRulesReversed = Object.entries(existingRules).reverse();
    var lastMatch_1 = existingRules.length;
    existingRulesReversed.forEach(function (_a) {
      var _b;
      var _c = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2),
        index = _c[0],
        rule = _c[1];
      var indexOf = cssTexts.indexOf(rule);
      if (indexOf === -1 || indexOf > lastMatch_1) {
        try {
          (_b = styleNode.sheet) === null || _b === void 0 ? void 0 : _b.deleteRule(Number(index));
        } catch (e) {}
      }
      lastMatch_1 = indexOf;
    });
    cssTexts.forEach(function (cssText, index) {
      var _a, _b, _c;
      try {
        if (((_b = (_a = styleNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules[index]) === null || _b === void 0 ? void 0 : _b.cssText) !== cssText) {
          (_c = styleNode.sheet) === null || _c === void 0 ? void 0 : _c.insertRule(cssText, index);
        }
      } catch (e) {}
    });
  } catch (e) {}
}
function storeCSSRules(parentElement, virtualStyleRulesMap) {
  var _a;
  try {
    var cssTexts = Array.from(((_a = parentElement.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) || []).map(function (rule) {
      return rule.cssText;
    });
    virtualStyleRulesMap.set(parentElement, [{
      type: StyleRuleType.Snapshot,
      cssTexts: cssTexts
    }]);
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js ***!
  \*****************************************************************/
/*! exports provided: CanvasContext, EventType, IncrementalSource, MediaInteractions, MouseInteractions, ReplayerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasContext", function() { return CanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return IncrementalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaInteractions", function() { return MediaInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return MouseInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return ReplayerEvents; });
var EventType;
(function (EventType) {
  EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
  EventType[EventType["Load"] = 1] = "Load";
  EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
  EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
  EventType[EventType["Meta"] = 4] = "Meta";
  EventType[EventType["Custom"] = 5] = "Custom";
  EventType[EventType["Plugin"] = 6] = "Plugin";
})(EventType || (EventType = {}));
var IncrementalSource;
(function (IncrementalSource) {
  IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
  IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
  IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
  IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
  IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
  IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
  IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
  IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
  IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
  IncrementalSource[IncrementalSource["CanvasMutation"] = 9] = "CanvasMutation";
  IncrementalSource[IncrementalSource["Font"] = 10] = "Font";
  IncrementalSource[IncrementalSource["Log"] = 11] = "Log";
  IncrementalSource[IncrementalSource["Drag"] = 12] = "Drag";
  IncrementalSource[IncrementalSource["StyleDeclaration"] = 13] = "StyleDeclaration";
})(IncrementalSource || (IncrementalSource = {}));
var MouseInteractions;
(function (MouseInteractions) {
  MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
  MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
  MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
  MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
  MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
  MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
  MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
  MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
  MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
  MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
  MouseInteractions[MouseInteractions["TouchCancel"] = 10] = "TouchCancel";
})(MouseInteractions || (MouseInteractions = {}));
var CanvasContext;
(function (CanvasContext) {
  CanvasContext[CanvasContext["2D"] = 0] = "2D";
  CanvasContext[CanvasContext["WebGL"] = 1] = "WebGL";
  CanvasContext[CanvasContext["WebGL2"] = 2] = "WebGL2";
})(CanvasContext || (CanvasContext = {}));
var MediaInteractions;
(function (MediaInteractions) {
  MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
  MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
  MediaInteractions[MediaInteractions["Seeked"] = 2] = "Seeked";
  MediaInteractions[MediaInteractions["VolumeChange"] = 3] = "VolumeChange";
})(MediaInteractions || (MediaInteractions = {}));
var ReplayerEvents;
(function (ReplayerEvents) {
  ReplayerEvents["Start"] = "start";
  ReplayerEvents["Pause"] = "pause";
  ReplayerEvents["Resume"] = "resume";
  ReplayerEvents["Resize"] = "resize";
  ReplayerEvents["Finish"] = "finish";
  ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
  ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
  ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
  ReplayerEvents["SkipStart"] = "skip-start";
  ReplayerEvents["SkipEnd"] = "skip-end";
  ReplayerEvents["MouseInteraction"] = "mouse-interaction";
  ReplayerEvents["EventCast"] = "event-cast";
  ReplayerEvents["CustomEvent"] = "custom-event";
  ReplayerEvents["Flush"] = "flush";
  ReplayerEvents["StateChange"] = "state-change";
  ReplayerEvents["PlayBack"] = "play-back";
})(ReplayerEvents || (ReplayerEvents = {}));


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js ***!
  \*****************************************************************/
/*! exports provided: TreeIndex, _mirror, createMirror, getBaseDimension, getWindowHeight, getWindowWidth, hasShadowRoot, hookSetter, isAncestorRemoved, isBlocked, isIframeINode, isIgnored, isTouchEvent, iterateResolveTree, on, patch, polyfill, queueToResolveTrees, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeIndex", function() { return TreeIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mirror", function() { return _mirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirror", function() { return createMirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseDimension", function() { return getBaseDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowHeight", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowWidth", function() { return getWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShadowRoot", function() { return hasShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hookSetter", function() { return hookSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAncestorRemoved", function() { return isAncestorRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlocked", function() { return isBlocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIframeINode", function() { return isIframeINode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIgnored", function() { return isIgnored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchEvent", function() { return isTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateResolveTree", function() { return iterateResolveTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueToResolveTrees", function() { return queueToResolveTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");



function on(type, fn, target) {
  if (target === void 0) {
    target = document;
  }
  var options = {
    capture: true,
    passive: true
  };
  target.addEventListener(type, fn, options);
  return function () {
    return target.removeEventListener(type, fn, options);
  };
}
function createMirror() {
  return {
    map: {},
    getId: function (n) {
      if (!n || !n.__sn) {
        return -1;
      }
      return n.__sn.id;
    },
    getNode: function (id) {
      return this.map[id] || null;
    },
    removeNodeFromMap: function (n) {
      var _this = this;
      var id = n.__sn && n.__sn.id;
      delete this.map[id];
      if (n.childNodes) {
        n.childNodes.forEach(function (child) {
          return _this.removeNodeFromMap(child);
        });
      }
    },
    has: function (id) {
      return this.map.hasOwnProperty(id);
    },
    reset: function () {
      this.map = {};
    }
  };
}
var DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' + '\r\n' + 'now you can use replayer.getMirror() to access the mirror instance of a replayer,' + '\r\n' + 'or you can use record.mirror to access the mirror instance during recording.';
var _mirror = {
  map: {},
  getId: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return -1;
  },
  getNode: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return null;
  },
  removeNodeFromMap: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  },
  has: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    return false;
  },
  reset: function () {
    console.error(DEPARTED_MIRROR_ACCESS_WARNING);
  }
};
if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
  _mirror = new Proxy(_mirror, {
    get: function (target, prop, receiver) {
      if (prop === 'map') {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}
function throttle(func, wait, options) {
  if (options === void 0) {
    options = {};
  }
  var timeout = null;
  var previous = 0;
  return function (arg) {
    var now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    var context = this;
    var args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        func.apply(context, args);
      }, remaining);
    }
  };
}
function hookSetter(target, key, d, isRevoked, win) {
  if (win === void 0) {
    win = window;
  }
  var original = win.Object.getOwnPropertyDescriptor(target, key);
  win.Object.defineProperty(target, key, isRevoked ? d : {
    set: function (value) {
      var _this = this;
      setTimeout(function () {
        d.set.call(_this, value);
      }, 0);
      if (original && original.set) {
        original.set.call(this, value);
      }
    }
  });
  return function () {
    return hookSetter(target, key, original || {}, true);
  };
}
function patch(source, name, replacement) {
  try {
    if (!(name in source)) {
      return function () {};
    }
    var original_1 = source[name];
    var wrapped = replacement(original_1);
    if (typeof wrapped === 'function') {
      wrapped.prototype = wrapped.prototype || {};
      Object.defineProperties(wrapped, {
        __rrweb_original__: {
          enumerable: false,
          value: original_1
        }
      });
    }
    source[name] = wrapped;
    return function () {
      source[name] = original_1;
    };
  } catch (_a) {
    return function () {};
  }
}
function getWindowHeight() {
  return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function getWindowWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function isBlocked(node, blockClass) {
  if (!node) {
    return false;
  }
  if (node.nodeType === node.ELEMENT_NODE) {
    var needBlock_1 = false;
    if (typeof blockClass === 'string') {
      if (node.closest !== undefined) {
        return node.closest('.' + blockClass) !== null;
      } else {
        needBlock_1 = node.classList.contains(blockClass);
      }
    } else {
      node.classList.forEach(function (className) {
        if (blockClass.test(className)) {
          needBlock_1 = true;
        }
      });
    }
    return needBlock_1 || isBlocked(node.parentNode, blockClass);
  }
  if (node.nodeType === node.TEXT_NODE) {
    return isBlocked(node.parentNode, blockClass);
  }
  return isBlocked(node.parentNode, blockClass);
}
function isIgnored(n) {
  if ('__sn' in n) {
    return n.__sn.id === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__["IGNORED_NODE"];
  }
  return false;
}
function isAncestorRemoved(target, mirror) {
  if (Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(target)) {
    return false;
  }
  var id = mirror.getId(target);
  if (!mirror.has(id)) {
    return true;
  }
  if (target.parentNode && target.parentNode.nodeType === target.DOCUMENT_NODE) {
    return false;
  }
  if (!target.parentNode) {
    return true;
  }
  return isAncestorRemoved(target.parentNode, mirror);
}
function isTouchEvent(event) {
  return Boolean(event.changedTouches);
}
function polyfill(win) {
  if (win === void 0) {
    win = window;
  }
  if ('NodeList' in win && !win.NodeList.prototype.forEach) {
    win.NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
    win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
  }
  if (!Node.prototype.contains) {
    Node.prototype.contains = function contains(node) {
      if (!(0 in arguments)) {
        throw new TypeError('1 argument is required');
      }
      do {
        if (this === node) {
          return true;
        }
      } while (node = node && node.parentNode);
      return false;
    };
  }
}
var TreeIndex = function () {
  function TreeIndex() {
    this.reset();
  }
  TreeIndex.prototype.add = function (mutation) {
    var parentTreeNode = this.indexes.get(mutation.parentId);
    var treeNode = {
      id: mutation.node.id,
      mutation: mutation,
      children: [],
      texts: [],
      attributes: []
    };
    if (!parentTreeNode) {
      this.tree[treeNode.id] = treeNode;
    } else {
      treeNode.parent = parentTreeNode;
      parentTreeNode.children[treeNode.id] = treeNode;
    }
    this.indexes.set(treeNode.id, treeNode);
  };
  TreeIndex.prototype.remove = function (mutation, mirror) {
    var _this = this;
    var parentTreeNode = this.indexes.get(mutation.parentId);
    var treeNode = this.indexes.get(mutation.id);
    var deepRemoveFromMirror = function (id) {
      _this.removeIdSet.add(id);
      var node = mirror.getNode(id);
      node === null || node === void 0 ? void 0 : node.childNodes.forEach(function (childNode) {
        if ('__sn' in childNode) {
          deepRemoveFromMirror(childNode.__sn.id);
        }
      });
    };
    var deepRemoveFromTreeIndex = function (node) {
      _this.removeIdSet.add(node.id);
      Object.values(node.children).forEach(function (n) {
        return deepRemoveFromTreeIndex(n);
      });
      var _treeNode = _this.indexes.get(node.id);
      if (_treeNode) {
        var _parentTreeNode = _treeNode.parent;
        if (_parentTreeNode) {
          delete _treeNode.parent;
          delete _parentTreeNode.children[_treeNode.id];
          _this.indexes.delete(mutation.id);
        }
      }
    };
    if (!treeNode) {
      this.removeNodeMutations.push(mutation);
      deepRemoveFromMirror(mutation.id);
    } else if (!parentTreeNode) {
      delete this.tree[treeNode.id];
      this.indexes.delete(treeNode.id);
      deepRemoveFromTreeIndex(treeNode);
    } else {
      delete treeNode.parent;
      delete parentTreeNode.children[treeNode.id];
      this.indexes.delete(mutation.id);
      deepRemoveFromTreeIndex(treeNode);
    }
  };
  TreeIndex.prototype.text = function (mutation) {
    var treeNode = this.indexes.get(mutation.id);
    if (treeNode) {
      treeNode.texts.push(mutation);
    } else {
      this.textMutations.push(mutation);
    }
  };
  TreeIndex.prototype.attribute = function (mutation) {
    var treeNode = this.indexes.get(mutation.id);
    if (treeNode) {
      treeNode.attributes.push(mutation);
    } else {
      this.attributeMutations.push(mutation);
    }
  };
  TreeIndex.prototype.scroll = function (d) {
    this.scrollMap.set(d.id, d);
  };
  TreeIndex.prototype.input = function (d) {
    this.inputMap.set(d.id, d);
  };
  TreeIndex.prototype.flush = function () {
    var e_1, _a, e_2, _b;
    var _this = this;
    var _c = this,
      tree = _c.tree,
      removeNodeMutations = _c.removeNodeMutations,
      textMutations = _c.textMutations,
      attributeMutations = _c.attributeMutations;
    var batchMutationData = {
      source: _types_js__WEBPACK_IMPORTED_MODULE_1__["IncrementalSource"].Mutation,
      removes: removeNodeMutations,
      texts: textMutations,
      attributes: attributeMutations,
      adds: []
    };
    var walk = function (treeNode, removed) {
      if (removed) {
        _this.removeIdSet.add(treeNode.id);
      }
      batchMutationData.texts = batchMutationData.texts.concat(removed ? [] : treeNode.texts).filter(function (m) {
        return !_this.removeIdSet.has(m.id);
      });
      batchMutationData.attributes = batchMutationData.attributes.concat(removed ? [] : treeNode.attributes).filter(function (m) {
        return !_this.removeIdSet.has(m.id);
      });
      if (!_this.removeIdSet.has(treeNode.id) && !_this.removeIdSet.has(treeNode.mutation.parentId) && !removed) {
        batchMutationData.adds.push(treeNode.mutation);
        if (treeNode.children) {
          Object.values(treeNode.children).forEach(function (n) {
            return walk(n, false);
          });
        }
      } else {
        Object.values(treeNode.children).forEach(function (n) {
          return walk(n, true);
        });
      }
    };
    Object.values(tree).forEach(function (n) {
      return walk(n, false);
    });
    try {
      for (var _d = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.scrollMap.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
        var id = _e.value;
        if (this.removeIdSet.has(id)) {
          this.scrollMap.delete(id);
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    try {
      for (var _f = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.inputMap.keys()), _g = _f.next(); !_g.done; _g = _f.next()) {
        var id = _g.value;
        if (this.removeIdSet.has(id)) {
          this.inputMap.delete(id);
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    var scrollMap = new Map(this.scrollMap);
    var inputMap = new Map(this.inputMap);
    this.reset();
    return {
      mutationData: batchMutationData,
      scrollMap: scrollMap,
      inputMap: inputMap
    };
  };
  TreeIndex.prototype.reset = function () {
    this.tree = [];
    this.indexes = new Map();
    this.removeNodeMutations = [];
    this.textMutations = [];
    this.attributeMutations = [];
    this.removeIdSet = new Set();
    this.scrollMap = new Map();
    this.inputMap = new Map();
  };
  TreeIndex.prototype.idRemoved = function (id) {
    return this.removeIdSet.has(id);
  };
  return TreeIndex;
}();
function queueToResolveTrees(queue) {
  var e_3, _a;
  var queueNodeMap = {};
  var putIntoMap = function (m, parent) {
    var nodeInTree = {
      value: m,
      parent: parent,
      children: []
    };
    queueNodeMap[m.node.id] = nodeInTree;
    return nodeInTree;
  };
  var queueNodeTrees = [];
  try {
    for (var queue_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(queue), queue_1_1 = queue_1.next(); !queue_1_1.done; queue_1_1 = queue_1.next()) {
      var mutation = queue_1_1.value;
      var nextId = mutation.nextId,
        parentId = mutation.parentId;
      if (nextId && nextId in queueNodeMap) {
        var nextInTree = queueNodeMap[nextId];
        if (nextInTree.parent) {
          var idx = nextInTree.parent.children.indexOf(nextInTree);
          nextInTree.parent.children.splice(idx, 0, putIntoMap(mutation, nextInTree.parent));
        } else {
          var idx = queueNodeTrees.indexOf(nextInTree);
          queueNodeTrees.splice(idx, 0, putIntoMap(mutation, null));
        }
        continue;
      }
      if (parentId in queueNodeMap) {
        var parentInTree = queueNodeMap[parentId];
        parentInTree.children.push(putIntoMap(mutation, parentInTree));
        continue;
      }
      queueNodeTrees.push(putIntoMap(mutation, null));
    }
  } catch (e_3_1) {
    e_3 = {
      error: e_3_1
    };
  } finally {
    try {
      if (queue_1_1 && !queue_1_1.done && (_a = queue_1.return)) _a.call(queue_1);
    } finally {
      if (e_3) throw e_3.error;
    }
  }
  return queueNodeTrees;
}
function iterateResolveTree(tree, cb) {
  cb(tree.value);
  for (var i = tree.children.length - 1; i >= 0; i--) {
    iterateResolveTree(tree.children[i], cb);
  }
}
function isIframeINode(node) {
  if ('__sn' in node) {
    return node.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__["NodeType"].Element && node.__sn.tagName === 'iframe';
  }
  return false;
}
function getBaseDimension(node, rootIframe) {
  var _a, _b;
  var frameElement = (_b = (_a = node.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.frameElement;
  if (!frameElement || frameElement === rootIframe) {
    return {
      x: 0,
      y: 0,
      relativeScale: 1,
      absoluteScale: 1
    };
  }
  var frameDimension = frameElement.getBoundingClientRect();
  var frameBaseDimension = getBaseDimension(frameElement, rootIframe);
  var relativeScale = frameDimension.height / frameElement.clientHeight;
  return {
    x: frameDimension.x * frameBaseDimension.relativeScale + frameBaseDimension.x,
    y: frameDimension.y * frameBaseDimension.relativeScale + frameBaseDimension.y,
    relativeScale: relativeScale,
    absoluteScale: frameBaseDimension.absoluteScale * relativeScale
  };
}
function hasShadowRoot(n) {
  return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
}


/***/ })

}]);