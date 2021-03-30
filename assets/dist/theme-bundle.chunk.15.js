(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./f/card-add-to-cart */ "./assets/js/theme/f/card-add-to-cart.js");
/* harmony import */ var _f_side_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./f/side-cart */ "./assets/js/theme/f/side-cart.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Category.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }

    Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context);
    this.highlightPageCount();
  };

  _proto.highlightPageCount = function highlightPageCount() {
    var url = url__WEBPACK_IMPORTED_MODULE_7___default.a.parse(window.location.href, true);

    if (url.query.limit) {
      $(".productCount [data-count=" + url.query.limit + "]").addClass('productCount__item--active');
    } else if (this.context.categoryProductsPerPage) {
      $(".productCount [data-count=" + this.context.categoryProductsPerPage + "]").addClass('productCount__item--active');
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;

    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $headerTitleContainer = $('#headerTitleContainer');
    var $itemsPerPageCounter = $('.js-product-count');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'f/category/product-listing',
        sidebar: 'category/sidebar',
        headerTitle: 'f/category/header-title',
        itemsPerPage: 'f/category/show-amount'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $headerTitleContainer.html(content.headerTitle);
      $itemsPerPageCounter.html(content.itemsPerPage);
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      if (_this.context.enableSideCart) {
        Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
      }

      Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
      Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__["default"])(_this.context);

      _this.highlightPageCount();
    });
  };

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiZW5hYmxlU2lkZUNhcnQiLCJzaWRlQ2FydCIsImNhcmRBZGRUb0NhcnQiLCJncmlkU3dpdGNoZXIiLCJoaWdobGlnaHRQYWdlQ291bnQiLCJ1cmwiLCJVcmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInF1ZXJ5IiwibGltaXQiLCJhZGRDbGFzcyIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkaGVhZGVyVGl0bGVDb250YWluZXIiLCIkaXRlbXNQZXJQYWdlQ291bnRlciIsInByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImhlYWRlclRpdGxlIiwiaXRlbXNQZXJQYWdlIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxROzs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtBQUNOQyw0RUFBZSxDQUFDLEtBQUtDLE9BQUwsQ0FBYUMsSUFBZCxDQUFmOztBQUVBLFFB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ZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IGNhcmRBZGRUb0NhcnQgZnJvbSAnLi9mL2NhcmQtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IHNpZGVDYXJ0IGZyb20gJy4vZi9zaWRlLWNhcnQnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGdyaWRTd2l0Y2hlciBmcm9tICcuL2YvZ3JpZC1saXN0LXN3aXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuZW5hYmxlU2lkZUNhcnQpIHtcbiAgICAgICAgICAgIHNpZGVDYXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjYXJkQWRkVG9DYXJ0KCk7XG5cbiAgICAgICAgZ3JpZFN3aXRjaGVyKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5oaWdobGlnaHRQYWdlQ291bnQoKTtcbiAgICB9XG5cbiAgICBoaWdobGlnaHRQYWdlQ291bnQoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGlmICh1cmwucXVlcnkubGltaXQpIHtcbiAgICAgICAgICAgICQoYC5wcm9kdWN0Q291bnQgW2RhdGEtY291bnQ9JHt1cmwucXVlcnkubGltaXR9XWApLmFkZENsYXNzKCdwcm9kdWN0Q291bnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSkge1xuICAgICAgICAgICAgJChgLnByb2R1Y3RDb3VudCBbZGF0YS1jb3VudD0ke3RoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZX1dYCkuYWRkQ2xhc3MoJ3Byb2R1Y3RDb3VudF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRoZWFkZXJUaXRsZUNvbnRhaW5lciA9ICQoJyNoZWFkZXJUaXRsZUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkaXRlbXNQZXJQYWdlQ291bnRlciA9ICQoJy5qcy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdmL2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgICAgIGhlYWRlclRpdGxlOiAnZi9jYXRlZ29yeS9oZWFkZXItdGl0bGUnLFxuICAgICAgICAgICAgICAgIGl0ZW1zUGVyUGFnZTogJ2YvY2F0ZWdvcnkvc2hvdy1hbW91bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgJGhlYWRlclRpdGxlQ29udGFpbmVyLmh0bWwoY29udGVudC5oZWFkZXJUaXRsZSk7XG4gICAgICAgICAgICAkaXRlbXNQZXJQYWdlQ291bnRlci5odG1sKGNvbnRlbnQuaXRlbXNQZXJQYWdlKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuZW5hYmxlU2lkZUNhcnQpIHtcbiAgICAgICAgICAgICAgICBzaWRlQ2FydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXJkQWRkVG9DYXJ0KCk7XG5cbiAgICAgICAgICAgIGdyaWRTd2l0Y2hlcih0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFBhZ2VDb3VudCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9