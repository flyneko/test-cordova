(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ }),

/***/ "./node_modules/selectivity/templates.js":
/*!***********************************************!*\
  !*** ./node_modules/selectivity/templates.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var escape = __webpack_require__(/*! lodash/escape */ "./node_modules/lodash/escape.js");
var Selectivity = __webpack_require__(/*! ./selectivity */ "./node_modules/selectivity/selectivity.js");
var Locale = __webpack_require__(/*! ./locale */ "./node_modules/selectivity/locale.js");

/**
 * Default set of templates to use with Selectivity.js.
 *
 * Template can be defined as either a string, a function returning a string (like Handlebars
 * templates, for instance), an object containing a render function (like Hogan.js templates, fo
 * instance) or as a function returning a DOM element.
 *
 * Every template must return a single root element.
 */
Selectivity.Templates = {
  /**
   * Renders the dropdown.
   *
   * The template is expected to have at least one element with the class
   * 'selectivity-results-container', which is where all results will be added to.
   *
   * @param options Options object containing the following properties:
   *                dropdownCssClass - Optional CSS class to add to the top-level element.
   *                searchInputPlaceholder - Optional placeholder text to display in the search
   *                                         input in the dropdown.
   *                showSearchInput - Boolean whether a search input should be shown. If true,
   *                                  an input element with the 'selectivity-search-input' is
   *                                  expected.
   */
  dropdown: function (options) {
    var extraClass = options.dropdownCssClass ? ' ' + options.dropdownCssClass : '',
      searchInput = '';
    if (options.showSearchInput) {
      extraClass += ' has-search-input';
      var placeholder = options.searchInputPlaceholder;
      searchInput = '<div class="selectivity-search-input-container">' + '<input type="text" class="selectivity-search-input"' + (placeholder ? ' placeholder="' + escape(placeholder) + '"' : '') + '>' + '</div>';
    }
    return '<div class="selectivity-dropdown' + extraClass + '">' + searchInput + '<div class="selectivity-results-container"></div>' + '</div>';
  },
  /**
   * Renders an error message in the dropdown.
   *
   * @param options Options object containing the following properties:
   *                escape - Boolean whether the message should be HTML-escaped.
   *                message - The message to display.
   */
  error: function (options) {
    return '<div class="selectivity-error">' + (options.escape ? escape(options.message) : options.message) + '</div>';
  },
  /**
   * Renders a loading indicator in the dropdown.
   *
   * This template is expected to have an element with a 'selectivity-loading' class which may be
   * replaced with actual results.
   */
  loading: function () {
    return '<div class="selectivity-loading">' + Locale.loading + '</div>';
  },
  /**
   * Load more indicator.
   *
   * This template is expected to have an element with a 'selectivity-load-more' class which, when
   * clicked, will load more results.
   */
  loadMore: function () {
    return '<div class="selectivity-load-more">' + Locale.loadMore + '</div>';
  },
  /**
   * Renders multi-selection input boxes.
   *
   * The template is expected to have at least have elements with the following classes:
   * 'selectivity-multiple-input-container' - The element containing all the selected items and
   *                                          the input for selecting additional items.
   * 'selectivity-multiple-input' - The actual input element that allows the user to type to
   *                                search for more items. When selected items are added, they are
   *                                inserted right before this element.
   *
   * @param options Options object containing the following property:
   *                enabled - Boolean whether the input is enabled.
   */
  multipleSelectInput: function (options) {
    return '<div class="selectivity-multiple-input-container">' + (options.enabled ? '<input type="text" autocomplete="off" autocorrect="off" ' + 'autocapitalize="off" class="selectivity-multiple-input">' : '<div class="selectivity-multiple-input ' + 'selectivity-placeholder"></div>') + '<div class="selectivity-clearfix"></div>' + '</div>';
  },
  /**
   * Renders a selected item in multi-selection input boxes.
   *
   * The template is expected to have a top-level element with the class
   * 'selectivity-multiple-selected-item'. This element is also required to have a 'data-item-id'
   * attribute with the ID set to that passed through the options object.
   *
   * An element with the class 'selectivity-multiple-selected-item-remove' should be present
   * which, when clicked, will cause the element to be removed.
   *
   * @param options Options object containing the following properties:
   *                highlighted - Boolean whether this item is currently highlighted.
   *                id - Identifier for the item.
   *                removable - Boolean whether a remove icon should be displayed.
   *                text - Text label which the user sees.
   */
  multipleSelectedItem: function (options) {
    var extraClass = options.highlighted ? ' highlighted' : '';
    return '<span class="selectivity-multiple-selected-item' + extraClass + '" ' + 'data-item-id="' + escape(options.id) + '">' + (options.removable ? '<a class="selectivity-multiple-selected-item-remove">' + '<i class="fa fa-remove"></i>' + '</a>' : '') + escape(options.text) + '</span>';
  },
  /**
   * Renders a message there are no results for the given query.
   *
   * @param options Options object containing the following property:
   *                term - Search term the user is searching for.
   */
  noResults: function (options) {
    return '<div class="selectivity-error">' + (options.term ? Locale.noResultsForTerm(options.term) : Locale.noResults) + '</div>';
  },
  /**
   * Renders a container for item children.
   *
   * The template is expected to have an element with the class 'selectivity-result-children'.
   *
   * @param options Options object containing the following property:
   *                childrenHtml - Rendered HTML for the children.
   */
  resultChildren: function (options) {
    return '<div class="selectivity-result-children">' + options.childrenHtml + '</div>';
  },
  /**
   * Render a result item in the dropdown.
   *
   * The template is expected to have a top-level element with the class
   * 'selectivity-result-item'. This element is also required to have a 'data-item-id' attribute
   * with the ID set to that passed through the options object.
   *
   * @param options Options object containing the following properties:
   *                id - Identifier for the item.
   *                text - Text label which the user sees.
   *                disabled - Truthy if the item should be disabled.
   *                submenu - Truthy if the result item has a menu with subresults.
   */
  resultItem: function (options) {
    return '<div class="selectivity-result-item' + (options.disabled ? ' disabled' : '') + '"' + ' data-item-id="' + escape(options.id) + '">' + escape(options.text) + (options.submenu ? '<i class="selectivity-submenu-icon fa fa-chevron-right"></i>' : '') + '</div>';
  },
  /**
   * Render a result label in the dropdown.
   *
   * The template is expected to have a top-level element with the class
   * 'selectivity-result-label'.
   *
   * @param options Options object containing the following properties:
   *                text - Text label.
   */
  resultLabel: function (options) {
    return '<div class="selectivity-result-label">' + escape(options.text) + '</div>';
  },
  /**
   * Renders single-select input boxes.
   *
   * The template is expected to have at least one element with the class
   * 'selectivity-single-result-container' which is the element containing the selected item or
   * the placeholder.
   */
  singleSelectInput: function (options) {
    return '<div class="selectivity-single-select">' + '<input type="text" class="selectivity-single-select-input"' + (options.required ? ' required' : '') + '>' + '<div class="selectivity-single-result-container"></div>' + '<i class="fa fa-sort-desc selectivity-caret"></i>' + '</div>';
  },
  /**
   * Renders the placeholder for single-select input boxes.
   *
   * The template is expected to have a top-level element with the class
   * 'selectivity-placeholder'.
   *
   * @param options Options object containing the following property:
   *                placeholder - The placeholder text.
   */
  singleSelectPlaceholder: function (options) {
    return '<div class="selectivity-placeholder">' + escape(options.placeholder) + '</div>';
  },
  /**
   * Renders the selected item in single-select input boxes.
   *
   * The template is expected to have a top-level element with the class
   * 'selectivity-single-selected-item'. This element is also required to have a 'data-item-id'
   * attribute with the ID set to that passed through the options object.
   *
   * @param options Options object containing the following properties:
   *                id - Identifier for the item.
   *                removable - Boolean whether a remove icon should be displayed.
   *                text - Text label which the user sees.
   */
  singleSelectedItem: function (options) {
    return '<span class="selectivity-single-selected-item" ' + 'data-item-id="' + escape(options.id) + '">' + (options.removable ? '<a class="selectivity-single-selected-item-remove">' + '<i class="fa fa-remove"></i>' + '</a>' : '') + escape(options.text) + '</span>';
  },
  /**
   * Renders select-box inside single-select input that was initialized on
   * traditional <select> element.
   *
   * @param options Options object containing the following properties:
   *                name - Name of the <select> element.
   *                mode - Mode in which select exists, single or multiple.
   */
  selectCompliance: function (options) {
    var mode = options.mode;
    var name = options.name;
    if (mode === 'multiple' && name.slice(-2) !== '[]') {
      name += '[]';
    }
    return '<select name="' + name + '"' + (mode === 'multiple' ? ' multiple' : '') + '></select>';
  },
  /**
   * Renders the selected item in compliance <select> element as <option>.
   *
   * @param options Options object containing the following properties
   *                id - Identifier for the item.
   *                text - Text label which the user sees.
   */
  selectOptionCompliance: function (options) {
    return '<option value="' + escape(options.id) + '" selected>' + escape(options.text) + '</option>';
  }
};

/***/ })

}]);