(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./f/card-add-to-cart */ "./assets/js/theme/f/card-add-to-cart.js");
/* harmony import */ var _f_side_cart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./f/side-cart */ "./assets/js/theme/f/side-cart.js");
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }












function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);

  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;

    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };

    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }

    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }

    return nodeData;
  };

  _proto.showProducts = function showProducts() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_14__["default"].replaceParams(window.location.href, {
      section: 'product'
    });
    this.$contentResultsContainer.addClass('category--hide');
    this.$productListingContainer.removeClass('category--hide');
    this.$facetedSearchContainer.removeClass('category--hide');
    this.$productSideCart.removeClass('category--hide');
    this.$productOptions.removeClass('category--hide');
    this.$productPagination.removeClass('category--hide');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_14__["default"].searchGoToUrl(url);

    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_20__["default"])();
    }
  };

  _proto.showContent = function showContent() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_14__["default"].replaceParams(window.location.href, {
      section: 'content'
    });
    this.$contentResultsContainer.removeClass('category--hide');
    this.$productListingContainer.addClass('category--hide');
    this.$facetedSearchContainer.addClass('category--hide');
    this.$productSideCart.addClass('category--hide');
    this.$productOptions.addClass('category--hide');
    this.$productPagination.addClass('category--hide');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_14__["default"].searchGoToUrl(url);

    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_20__["default"])();
    }
  };

  _proto.onReady = function onReady() {
    var _this2 = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_13__["default"])(this.context.urls);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_15___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$contentResultsContainer = $('#search-results-content');
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$productSideCart = $('.product-sidecart');
    this.$productOptions = $('#product-options');
    this.$productPagination = $('#product-pagination'); // Init faceted search

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_20__["default"])();
    }

    Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_19__["default"])();
    Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_21__["default"])(this.context); // Init collapsibles

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_16__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showContent();
    });

    if (this.$productListingContainer.find('li.productCard').length === 0 || url.query.section === 'content') {
      this.showContent();
    } else {
      this.showProducts();
    }

    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

      if (!validator.check()) {
        return event.preventDefault();
      }

      $searchForm.find('input[name="category\[\]"]').remove();

      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;

    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };

  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;

    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;

    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'f/search/product-listing',
        sidebar: 'search/sidebar',
        heading: 'f/search/heading',
        productCount: 'search/product-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_12__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $searchHeading.html(content.heading);
      $searchCount.html(content.productCount);
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_19__["default"])();
      Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_21__["default"])(_this5.context);

      if (_this5.context.enableSideCart) {
        Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_20__["default"])();
      }
    });
  };

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_18__["default"])({
      submit: $form
    });
    return this;
  };

  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }

    return this;
  };

  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }

    return false;
  };

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_11__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsIiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciIsImFkZENsYXNzIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRwcm9kdWN0U2lkZUNhcnQiLCIkcHJvZHVjdE9wdGlvbnMiLCIkcHJvZHVjdFBhZ2luYXRpb24iLCIkIiwic2VhcmNoR29Ub1VybCIsImNvbnRleHQiLCJlbmFibGVTaWRlQ2FydCIsInNpZGVDYXJ0Iiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwidXJscyIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsImZpbmQiLCJVcmwiLCJwYXJzZSIsInRyZWVEYXRhIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY2FyZEFkZFRvQ2FydCIsImdyaWRTd2l0Y2hlciIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWVyeSIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiY2F0ZWdvcnlJZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsImxvYWRUcmVlTm9kZXMiLCJjYiIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImRvbmUiLCJmb3JtYXR0ZWRSZXN1bHRzIiwiZGF0YU5vZGUiLCIkY29udGFpbmVyIiwidHJlZU9wdGlvbnMiLCJjb3JlIiwidGhlbWVzIiwiaWNvbnMiLCJjaGVja2JveCIsInRocmVlX3N0YXRlIiwicGx1Z2lucyIsIiRzZWFyY2hIZWFkaW5nIiwiJHNlYXJjaENvdW50IiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImhlYWRpbmciLCJwcm9kdWN0Q291bnQiLCJjb25maWciLCJwcm9kdWN0X3Jlc3VsdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCIkZm9ybSIsIm5vZCIsInN1Ym1pdCIsIiRlbGVtZW50IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7Ozs7O1NBQ2pCQywyQixHQUFBLHFDQUE0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LEtBQUQsQ0FBcEI7QUFJQSxXQUFPLElBQVA7QUFDSCxHOztTQUVEdEQsYyxHQUFBLHdCQUFleUQsUUFBZixFQUF5QjtBQUNyQixRQUFJLEtBQUszRCxTQUFULEVBQW9CO0FBQ2hCLFdBQUtBLFNBQUwsQ0FBZTRELEdBQWYsQ0FBbUI7QUFDZkMsZ0JBQVEsRUFBRUYsUUFESztBQUVmRyxnQkFBUSxFQUFFLFVBRks7QUFHZkMsb0JBQVksRUFBRUosUUFBUSxDQUFDaEgsSUFBVCxDQUFjLGNBQWQ7QUFIQyxPQUFuQjtBQUtIOztBQUVELFdBQU8sSUFBUDtBQUNILEc7O1NBRUQ4RCxLLEdBQUEsaUJBQVE7QUFDSixRQUFJLEtBQUtULFNBQVQsRUFBb0I7QUFDaEIsV0FBS0EsU0FBTCxDQUFlZ0UsWUFBZjtBQUNBLGFBQU8sS0FBS2hFLFNBQUwsQ0FBZWlFLE1BQWYsQ0FBc0IsT0FBdEIsQ0FBUDtBQUNIOztBQUVELFdBQU8sS0FBUDtBQUNILEc7OztFQW5SK0JDLGlEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCAnanN0cmVlJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBjYXJkQWRkVG9DYXJ0IGZyb20gJy4vZi9jYXJkLWFkZC10by1jYXJ0JztcbmltcG9ydCBzaWRlQ2FydCBmcm9tICcuL2Yvc2lkZS1jYXJ0JztcbmltcG9ydCBncmlkU3dpdGNoZXIgZnJvbSAnLi9mL2dyaWQtbGlzdC1zd2l0Y2hlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB7XG4gICAgICAgICAgICBzZWN0aW9uOiAncHJvZHVjdCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCdjYXRlZ29yeS0taGlkZScpO1xuXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS0taGlkZScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS0taGlkZScpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0U2lkZUNhcnQucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LS1oaWRlJyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RPcHRpb25zLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS0taGlkZScpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0UGFnaW5hdGlvbi5yZW1vdmVDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdXJsVXRpbHMuc2VhcmNoR29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZW5hYmxlU2lkZUNhcnQpIHtcbiAgICAgICAgICAgIHNpZGVDYXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgc2VjdGlvbjogJ2NvbnRlbnQnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hZGRDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdFNpZGVDYXJ0LmFkZENsYXNzKCdjYXRlZ29yeS0taGlkZScpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0T3B0aW9ucy5hZGRDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdFBhZ2luYXRpb24uYWRkQ2xhc3MoJ2NhdGVnb3J5LS1oaWRlJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHVybFV0aWxzLnNlYXJjaEdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVuYWJsZVNpZGVDYXJ0KSB7XG4gICAgICAgICAgICBzaWRlQ2FydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBjb25zdCAkc2VhcmNoRm9ybSA9ICQoJ1tkYXRhLWFkdmFuY2VkLXNlYXJjaC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyID0gJHNlYXJjaEZvcm0uZmluZCgnW2RhdGEtc2VhcmNoLWNhdGVnb3J5LXRyZWVdJyk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHRyZWVEYXRhID0gW107XG5cbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xuXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdFNpZGVDYXJ0ID0gJCgnLnByb2R1Y3Qtc2lkZWNhcnQnKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdE9wdGlvbnMgPSAkKCcjcHJvZHVjdC1vcHRpb25zJyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RQYWdpbmF0aW9uID0gJCgnI3Byb2R1Y3QtcGFnaW5hdGlvbicpO1xuXG4gICAgICAgIC8vIEluaXQgZmFjZXRlZCBzZWFyY2hcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVuYWJsZVNpZGVDYXJ0KSB7XG4gICAgICAgICAgICBzaWRlQ2FydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FyZEFkZFRvQ2FydCgpO1xuXG4gICAgICAgIGdyaWRTd2l0Y2hlcih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3RDYXJkJykubGVuZ3RoID09PSAwIHx8IHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5VHJlZSgkY2F0ZWdvcnlUcmVlQ29udGFpbmVyKTtcblxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9ICRjYXRlZ29yeVRyZWVDb250YWluZXIuanN0cmVlKCkuZ2V0X3NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlYXJjaEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5XFxbXFxdXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRzZWFyY2hGb3JtLmFwcGVuZChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaEhlYWRpbmcgPSAkKCcjc2VhcmNoLXJlc3VsdHMtaGVhZGluZycpO1xuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdmL3NlYXJjaC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ2Yvc2VhcmNoL2hlYWRpbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3Jlc3VsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnc2VhcmNoL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcbiAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIGNhcmRBZGRUb0NhcnQoKTtcbiAgICAgICAgICAgIGdyaWRTd2l0Y2hlcih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVuYWJsZVNpZGVDYXJ0KSB7XG4gICAgICAgICAgICAgICAgc2lkZUNhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFZhbGlkYXRpb24oJGZvcm0pIHtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICRmb3JtO1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigkZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICRlbGVtZW50LFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJGVsZW1lbnQuZGF0YSgnZXJyb3JNZXNzYWdlJyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9