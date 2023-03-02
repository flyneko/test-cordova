(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/lodash/_escapeHtmlChar.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_escapeHtmlChar.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);
module.exports = escapeHtmlChar;

/***/ }),

/***/ "./node_modules/lodash/escape.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/escape.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escapeHtmlChar = __webpack_require__(/*! ./_escapeHtmlChar */ "./node_modules/lodash/_escapeHtmlChar.js"),
  toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
  reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
}
module.exports = escape;

/***/ }),

/***/ "./node_modules/selectivity/locale.js":
/*!********************************************!*\
  !*** ./node_modules/selectivity/locale.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var escape = __webpack_require__(/*! lodash/escape */ "./node_modules/lodash/escape.js");
var Selectivity = __webpack_require__(/*! ./selectivity */ "./node_modules/selectivity/selectivity.js");

/**
 * Localizable elements of the Selectivity Templates.
 *
 * Be aware that these strings are added straight to the HTML output of the templates, so any
 * non-safe strings should be escaped.
 */
module.exports = Selectivity.Locale = {
  loading: 'Loading...',
  loadMore: 'Load more...',
  noResults: 'No results found',
  ajaxError: function (term) {
    if (term) {
      return 'Failed to fetch results for <b>' + escape(term) + '</b>';
    } else {
      return 'Failed to fetch results';
    }
  },
  needMoreCharacters: function (numCharacters) {
    return 'Enter ' + numCharacters + ' more characters to search';
  },
  noResultsForTerm: function (term) {
    return 'No results for <b>' + escape(term) + '</b>';
  }
};

/***/ })

}]);