(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/selectivity/dropdown.js":
/*!**********************************************!*\
  !*** ./node_modules/selectivity/dropdown.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js");
var EventListener = __webpack_require__(/*! ./event-listener */ "./node_modules/selectivity/event-listener.js");
var getItemSelector = __webpack_require__(/*! ./util/get-item-selector */ "./node_modules/selectivity/util/get-item-selector.js");
var matchesSelector = __webpack_require__(/*! ./util/matches-selector */ "./node_modules/selectivity/util/matches-selector.js");
var parseElement = __webpack_require__(/*! ./util/parse-element */ "./node_modules/selectivity/util/parse-element.js");
var removeElement = __webpack_require__(/*! ./util/remove-element */ "./node_modules/selectivity/util/remove-element.js");
var stopPropagation = __webpack_require__(/*! ./util/stop-propagation */ "./node_modules/selectivity/util/stop-propagation.js");
var toggleClass = __webpack_require__(/*! ./util/toggle-class */ "./node_modules/selectivity/util/toggle-class.js");
var Selectivity = __webpack_require__(/*! ./selectivity */ "./node_modules/selectivity/selectivity.js");
var HIGHLIGHT_CLASS = 'highlight';
var HIGHLIGHT_SELECTOR = '.' + HIGHLIGHT_CLASS;
var LOAD_MORE_SELECTOR = '.selectivity-load-more';
var RESULT_ITEM_SELECTOR = '.selectivity-result-item';
var SCROLL_EVENTS = ['scroll', 'touchend', 'touchmove'];
function findClosestElementMatchingSelector(el, selector) {
  while (el && !matchesSelector(el, selector)) {
    el = el.parentElement;
  }
  return el || null;
}

/**
 * Selectivity Dropdown Constructor.
 *
 * @param selectivity Selectivity instance to which the dropdown belongs.
 * @param options Options object. Should have the following properties:
 *                highlightFirstItem - Set to false if you don't want the first item to be
 *                                     automatically highlighted (optional).
 *                items - Array of items to display.
 *                position - Callback for positioning the dropdown.
 *                query - Callback to fetch the items to display.
 *                showSearchInput - Boolean whether a search input should be shown.
 */
function SelectivityDropdown(selectivity, options) {
  this.el = parseElement(selectivity.template('dropdown', {
    dropdownCssClass: selectivity.options.dropdownCssClass,
    searchInputPlaceholder: selectivity.options.searchInputPlaceholder,
    showSearchInput: options.showSearchInput
  }));

  /**
   * DOM element to add the results to.
   */
  this.resultsContainer = this.$('.selectivity-results-container');

  /**
   * Boolean indicating whether more results are available than currently displayed in the
   * dropdown.
   */
  this.hasMore = false;

  /**
   * The currently highlighted result item.
   */
  this.highlightedResult = null;

  /**
   * Boolean whether the load more link is currently highlighted.
   */
  this.loadMoreHighlighted = false;

  /**
   * Options passed to the dropdown constructor.
   */
  this.options = options;

  /**
   * The results displayed in the dropdown.
   */
  this.results = [];

  /**
   * Selectivity instance.
   */
  this.selectivity = selectivity;
  this._closed = false;
  this._lastMousePosition = {};
  this.close = this.close.bind(this);
  this.position = this.position.bind(this);
  if (selectivity.options.closeOnSelect !== false) {
    selectivity.events.on('selectivity-selecting', this.close);
  }
  this.addToDom();
  this.showLoading();
  if (options.showSearchInput) {
    selectivity.initInput(this.$('.selectivity-search-input'));
    selectivity.focus();
  }
  var events = {};
  events['click ' + LOAD_MORE_SELECTOR] = this._loadMoreClicked;
  events['click ' + RESULT_ITEM_SELECTOR] = this._resultClicked;
  events['mouseenter ' + LOAD_MORE_SELECTOR] = this._loadMoreHovered;
  events['mouseenter ' + RESULT_ITEM_SELECTOR] = this._resultHovered;
  this.events = new EventListener(this.el, this);
  this.events.on(events);
  this._attachScrollListeners();
  this._suppressWheel();
  setTimeout(this.triggerOpen.bind(this), 1);
}

/**
 * Methods.
 */
assign(SelectivityDropdown.prototype, {
  /**
   * Convenience shortcut for this.el.querySelector(selector).
   */
  $: function (selector) {
    return this.el.querySelector(selector);
  },
  /**
   * Adds the dropdown to the DOM.
   */
  addToDom: function () {
    this.selectivity.el.appendChild(this.el);
  },
  /**
   * Closes the dropdown.
   */
  close: function () {
    if (!this._closed) {
      this._closed = true;
      removeElement(this.el);
      this.selectivity.events.off('selectivity-selecting', this.close);
      this.triggerClose();
      this._removeScrollListeners();
    }
  },
  /**
   * Highlights a result item.
   *
   * @param item The item to highlight.
   * @param options Optional options object that may contain the following property:
   *                reason - The reason why the result item is being highlighted. Possible
   *                         values: 'current_value', 'first_result', 'hovered'.
   */
  highlight: function (item, options) {
    toggleClass(this.$(HIGHLIGHT_SELECTOR), HIGHLIGHT_CLASS, false);
    toggleClass(this.$(getItemSelector(RESULT_ITEM_SELECTOR, item.id)), HIGHLIGHT_CLASS, true);
    this.highlightedResult = item;
    this.loadMoreHighlighted = false;
    this.selectivity.triggerEvent('selectivity-highlight', {
      item: item,
      id: item.id,
      reason: options && options.reason || 'unspecified'
    });
  },
  /**
   * Highlights the load more link.
   *
   * @param item The item to highlight.
   */
  highlightLoadMore: function () {
    toggleClass(this.$(HIGHLIGHT_SELECTOR), HIGHLIGHT_CLASS, false);
    toggleClass(this.$(LOAD_MORE_SELECTOR), HIGHLIGHT_CLASS, true);
    this.highlightedResult = null;
    this.loadMoreHighlighted = true;
  },
  /**
   * Loads a follow-up page with results after a search.
   *
   * This method should only be called after a call to search() when the callback has indicated
   * more results are available.
   */
  loadMore: function () {
    removeElement(this.$(LOAD_MORE_SELECTOR));
    this.resultsContainer.innerHTML += this.selectivity.template('loading');
    this.options.query({
      callback: function (response) {
        if (response && response.results) {
          this._showResults(Selectivity.processItems(response.results), {
            add: true,
            hasMore: !!response.more
          });
        } else {
          throw new Error('callback must be passed a response object');
        }
      }.bind(this),
      error: this._showResults.bind(this, [], {
        add: true
      }),
      offset: this.results.length,
      selectivity: this.selectivity,
      term: this.term
    });
  },
  /**
   * Positions the dropdown inside the DOM.
   */
  position: function () {
    var position = this.options.position;
    if (position) {
      position(this.el, this.selectivity.el);
    }
    this._scrolled();
  },
  /**
   * Renders an array of result items.
   *
   * @param items Array of result items.
   *
   * @return HTML-formatted string to display the result items.
   */
  renderItems: function (items) {
    var selectivity = this.selectivity;
    return items.map(function (item) {
      var result = selectivity.template(item.id ? 'resultItem' : 'resultLabel', item);
      if (item.children) {
        result += selectivity.template('resultChildren', {
          childrenHtml: this.renderItems(item.children)
        });
      }
      return result;
    }, this).join('');
  },
  /**
   * Searches for results based on the term given.
   *
   * If an items array has been passed with the options to the Selectivity instance, a local
   * search will be performed among those items. Otherwise, the query function specified in the
   * options will be used to perform the search. If neither is defined, nothing happens.
   *
   * @param term Term to search for.
   */
  search: function (term) {
    this.term = term;
    if (this.options.items) {
      term = Selectivity.transformText(term);
      var matcher = this.selectivity.options.matcher || Selectivity.matcher;
      this._showResults(this.options.items.map(function (item) {
        return matcher(item, term);
      }).filter(function (item) {
        return !!item;
      }), {
        term: term
      });
    } else if (this.options.query) {
      this.options.query({
        callback: function (response) {
          if (response && response.results) {
            this._showResults(Selectivity.processItems(response.results), {
              hasMore: !!response.more,
              term: term
            });
          } else {
            throw new Error('callback must be passed a response object');
          }
        }.bind(this),
        error: this.showError.bind(this),
        offset: 0,
        selectivity: this.selectivity,
        term: term
      });
    }
  },
  /**
   * Selects the highlighted item.
   */
  selectHighlight: function () {
    if (this.highlightedResult) {
      this.selectItem(this.highlightedResult.id);
    } else if (this.loadMoreHighlighted) {
      this.loadMore();
    }
  },
  /**
   * Selects the item with the given ID.
   *
   * @param id ID of the item to select.
   */
  selectItem: function (id) {
    var item = Selectivity.findNestedById(this.results, id);
    if (item && !item.disabled && item.selectable !== false) {
      var options = {
        id: id,
        item: item
      };
      if (this.selectivity.triggerEvent('selectivity-selecting', options)) {
        this.selectivity.triggerEvent('selectivity-selected', options);
      }
    }
  },
  /**
   * Shows an error message.
   *
   * @param message Error message to display.
   * @param options Options object. May contain the following property:
   *                escape - Set to false to disable HTML-escaping of the message. Useful if you
   *                         want to set raw HTML as the message, but may open you up to XSS
   *                         attacks if you're not careful with escaping user input.
   */
  showError: function (message, options) {
    this.resultsContainer.innerHTML = this.selectivity.template('error', {
      escape: !options || options.escape !== false,
      message: message
    });
    this.hasMore = false;
    this.results = [];
    this.highlightedResult = null;
    this.loadMoreHighlighted = false;
    this.position();
  },
  /**
   * Shows a loading indicator in the dropdown.
   */
  showLoading: function () {
    this.resultsContainer.innerHTML = this.selectivity.template('loading');
    this.hasMore = false;
    this.results = [];
    this.highlightedResult = null;
    this.loadMoreHighlighted = false;
    this.position();
  },
  /**
   * Shows the results from a search query.
   *
   * @param results Array of result items.
   * @param options Options object. May contain the following properties:
   *                add - True if the results should be added to any already shown results.
   *                dropdown - The dropdown instance for which the results are meant.
   *                hasMore - Boolean whether more results can be fetched using the query()
   *                          function.
   *                term - The search term for which the results are displayed.
   */
  showResults: function (results, options) {
    if (options.add) {
      removeElement(this.$('.selectivity-loading'));
    } else {
      this.resultsContainer.innerHTML = '';
    }
    var filteredResults = this.selectivity.filterResults(results);
    var resultsHtml = this.renderItems(filteredResults);
    if (options.hasMore) {
      resultsHtml += this.selectivity.template('loadMore');
    } else if (!resultsHtml && !options.add) {
      resultsHtml = this.selectivity.template('noResults', {
        term: options.term
      });
    }
    this.resultsContainer.innerHTML += resultsHtml;
    this.results = options.add ? this.results.concat(results) : results;
    this.hasMore = options.hasMore;
    var value = this.selectivity.getValue();
    if (value && !Array.isArray(value)) {
      var item = Selectivity.findNestedById(results, value);
      if (item) {
        this.highlight(item, {
          reason: 'current_value'
        });
      }
    } else if (this.options.highlightFirstItem !== false && (!options.add || this.loadMoreHighlighted)) {
      this._highlightFirstItem(filteredResults);
    }
    this.position();
  },
  /**
   * Triggers the 'selectivity-close' event.
   */
  triggerClose: function () {
    this.selectivity.triggerEvent('selectivity-close');
  },
  /**
   * Triggers the 'selectivity-open' event.
   */
  triggerOpen: function () {
    this.selectivity.triggerEvent('selectivity-open');
  },
  /**
   * @private
   */
  _attachScrollListeners: function () {
    for (var i = 0; i < SCROLL_EVENTS.length; i++) {
      window.addEventListener(SCROLL_EVENTS[i], this.position, true);
    }
    window.addEventListener('resize', this.position);
  },
  /**
   * @private
   */
  _highlightFirstItem: function (results) {
    function findFirstItem(results) {
      for (var i = 0, length = results.length; i < length; i++) {
        var result = results[i];
        if (result.id) {
          return result;
        } else if (result.children) {
          var item = findFirstItem(result.children);
          if (item) {
            return item;
          }
        }
      }
    }
    var firstItem = findFirstItem(results);
    if (firstItem) {
      this.highlight(firstItem, {
        reason: 'first_result'
      });
    } else {
      this.highlightedResult = null;
      this.loadMoreHighlighted = false;
    }
  },
  /**
   * @private
   */
  _loadMoreClicked: function (event) {
    this.loadMore();
    stopPropagation(event);
  },
  /**
   * @private
   */
  _loadMoreHovered: function (event) {
    if (event.screenX === undefined || event.screenX !== this._lastMousePosition.x || event.screenY === undefined || event.screenY !== this._lastMousePosition.y) {
      this.highlightLoadMore();
      this._recordMousePosition(event);
    }
  },
  /**
   * @private
   */
  _recordMousePosition: function (event) {
    this._lastMousePosition = {
      x: event.screenX,
      y: event.screenY
    };
  },
  /**
   * @private
   */
  _removeScrollListeners: function () {
    for (var i = 0; i < SCROLL_EVENTS.length; i++) {
      window.removeEventListener(SCROLL_EVENTS[i], this.position, true);
    }
    window.removeEventListener('resize', this.position);
  },
  /**
   * @private
   */
  _resultClicked: function (event) {
    this.selectItem(this.selectivity.getRelatedItemId(event));
    stopPropagation(event);
  },
  /**
   * @private
   */
  _resultHovered: function (event) {
    if (!event.screenX || event.screenX !== this._lastMousePosition.x || !event.screenY || event.screenY !== this._lastMousePosition.y) {
      var id = this.selectivity.getRelatedItemId(event);
      var item = Selectivity.findNestedById(this.results, id);
      if (item && !item.disabled) {
        this.highlight(item, {
          reason: 'hovered'
        });
      }
      this._recordMousePosition(event);
    }
  },
  /**
   * @private
   */
  _scrolled: function () {
    var el = this.$(LOAD_MORE_SELECTOR);
    if (el && el.offsetTop - this.resultsContainer.scrollTop < this.el.clientHeight) {
      this.loadMore();
    }
  },
  /**
   * @private
   */
  _showResults: function (results, options) {
    this.showResults(results, assign({
      dropdown: this
    }, options));
  },
  /**
   * @private
   */
  _suppressWheel: function () {
    var suppressWheelSelector = this.selectivity.options.suppressWheelSelector;
    if (suppressWheelSelector === null) {
      return;
    }
    var selector = suppressWheelSelector || '.selectivity-results-container';
    this.events.on('wheel', selector, function (event) {
      // Thanks to Troy Alford:
      // http://stackoverflow.com/questions/5802467/prevent-scrolling-of-parent-element

      var delta = event.deltaMode === 0 ? event.deltaY : event.deltaY * 40;
      var el = findClosestElementMatchingSelector(event.target, selector);
      var height = el.clientHeight;
      var scrollHeight = el.scrollHeight;
      var scrollTop = el.scrollTop;
      function prevent() {
        stopPropagation(event);
        event.preventDefault();
      }
      if (scrollHeight > height) {
        if (delta < -scrollTop) {
          // Scrolling up, but this will take us past the top.
          el.scrollTop = 0;
          prevent();
        } else if (delta > scrollHeight - height - scrollTop) {
          // Scrolling down, but this will take us past the bottom.
          el.scrollTop = scrollHeight;
          prevent();
        }
      }
    });
  }
});
module.exports = Selectivity.Dropdown = SelectivityDropdown;

/***/ }),

/***/ "./node_modules/selectivity/util/get-item-selector.js":
/*!************************************************************!*\
  !*** ./node_modules/selectivity/util/get-item-selector.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Returns the CSS selector for selecting a specific item by ID.
 *
 * @param selector Generic CSS selector to identify items.
 * @param id ID of the item to select.
 */
module.exports = function (selector, id) {
  var quotedId = '"' + ('' + id).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  return selector + '[data-item-id=' + quotedId + ']';
};

/***/ }),

/***/ "./node_modules/selectivity/util/parse-element.js":
/*!********************************************************!*\
  !*** ./node_modules/selectivity/util/parse-element.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Parses an HTML string and returns the resulting DOM element.
 *
 * @param html HTML representation of the element to parse.
 */
module.exports = function (html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
};

/***/ }),

/***/ "./node_modules/selectivity/util/remove-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/selectivity/util/remove-element.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes a DOM element.
 *
 * @param el The element to remove.
 */
module.exports = function (el) {
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

/***/ }),

/***/ "./node_modules/selectivity/util/stop-propagation.js":
/*!***********************************************************!*\
  !*** ./node_modules/selectivity/util/stop-propagation.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Stops event propagation.
 *
 * @param event The event to stop from propagating.
 */
module.exports = function (event) {
  event.stopPropagation();
};

/***/ })

}]);