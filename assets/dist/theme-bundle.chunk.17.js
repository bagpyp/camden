(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./assets/js/theme/f/multiadd.js":
/*!***************************************!*\
  !*** ./assets/js/theme/f/multiadd.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_5__);




function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Page = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Page, _PageManager);

  function Page() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Page.prototype;

  _proto.onReady = function onReady() {
    // Classes
    this.classRow = '.multi-add__row';
    this.classResultMessage = '.multi-add__result';
    this.classAddButton = '.multi-add__add-button';
    this.classRemoveButton = '.multi-add__remove-button'; // Class names

    this.classNameRowError = 'multi-add__row--error'; // Functional assignments

    this.$form = $('.multi-add');
    this.$file = $('.csv-file');
    this.snippet = $(this.classRow)[0].outerHTML;
    this.lines = 1;
    this.searchTerms = [];
    this.resetState();
    this.bindEvents();
  };

  _proto.resetState = function resetState() {
    this.items = [];
    this.errors = [];
    this.currentLoop = 0;
  } // Loop errors, add class and change text
  ;

  _proto.handleErrors = function handleErrors() {
    var _this2 = this;

    $(this.errors).each(function (i, element) {
      element.addClass(_this2.classNameRowError); // To add lang string

      element.children(_this2.classResultMessage).text('Please complete the SKU and Quantity fields');
    });
  } // Run AJAX calls one by one
  ;

  _proto.handleAjax = function handleAjax() {
    var _this3 = this;

    if (this.currentLoop < this.items.length) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(this.items[this.currentLoop].url, {
        template: 'f/b2b/quick-add-response'
      }, function (err, response) {
        var scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        var cleanResponse = response.replace(scriptRegex, '').trim();

        if (err) {
          throw new Error(err);
        }

        if (cleanResponse.length) {
          _this3.items[_this3.currentLoop].target.children(_this3.classResultMessage).text(cleanResponse);

          $(_this3.items[_this3.currentLoop].target).addClass('multi-add__row--advisory');
        } else {
          _this3.items[_this3.currentLoop].target.children(_this3.classResultMessage).text($('.multi-add__submit-button').data('message'));

          $(_this3.items[_this3.currentLoop].target).attr('data-status', 'success').addClass('multi-add__row--success');
        } // Increment 'current' and run AJAX call again


        _this3.currentLoop++;

        _this3.handleErrors();

        _this3.handleAjax();
      });
    } // Last attempt, redirect only


    if (this.currentLoop === this.items.length) {
      // document.location.href = '/cart.php';
      this.fetchCounter();
      $('.multi_add__cart-button').css('display', 'inline-block');
    }
  };

  _proto.fetchCounter = function fetchCounter() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent({
      template: 'f/cart/item-count'
    }, function (err, response) {
      if (response > 0) {
        $('body').trigger('cart-quantity-update', response);
      }
    });
  };

  _proto.handleButtonDisplay = function handleButtonDisplay() {
    var rows = this.$form.children(this.classRow);
    var removeButtons = rows.find(this.classRemoveButton);
    var addButtons = rows.find(this.classAddButton);
    var lastAddButton = $(rows[this.lines - 1]).find(this.classAddButton);

    if (this.lines > 1) {
      removeButtons.removeClass('multi-add__remove-button--last').removeAttr('disabled');
      addButtons.removeClass('multi-add__add-button--disabled').removeAttr('disabled', 'disabled');
      addButtons.not(lastAddButton).addClass('multi-add__add-button--disabled').attr('disabled', 'disabled');
    } else {
      removeButtons.addClass('multi-add__remove-button--last').attr('disabled', 'disabled');
      addButtons.removeClass('multi-add__add-button--disabled').removeAttr('disabled');
    }
  };

  _proto.handleAddLine = function handleAddLine(sku, qty) {
    var newLine = $(this.snippet).clone();

    if (sku && qty) {
      $(newLine[0].children[0]).val(sku);
      $(newLine[0].children[1]).val(qty);
    }

    $('.multi-add__submit-button').before(newLine);
    this.lines++;
    this.handleButtonDisplay();
  };

  _proto.handleRemoveLine = function handleRemoveLine(line) {
    if (line.is(':only-of-type')) {
      return;
    }

    line.remove();
    this.lines--;
    this.handleButtonDisplay();
  };

  _proto.handleItemSelect = function handleItemSelect(event, override) {
    var self = event ? $(event.target) : override;
    var relativeRow = self.parents('.multi-add__row');
    var rowIndex = relativeRow.index() - 1;
    var selectedSku = $.trim(self.text());
    var relativeInput = relativeRow.find('[data-multi-sku]');
    relativeInput[0].value = selectedSku;
    this.searchTerms[rowIndex] = selectedSku;
  };

  _proto.processForm = function processForm(event, form) {
    var _this4 = this;

    event.preventDefault();
    var allRows = $(form).children(this.classRow);
    var allMessages = allRows.find(this.classResultMessage);
    this.resetState(); // For each row, add the URL and target to the items array

    allRows.each(function (index, row) {
      var target = $(row);
      var sku = target.find('[data-multi-sku]').val();
      var qty = target.find('[data-multi-qty]').val();

      if (!sku || !qty) {
        _this4.errors.push(target);

        return;
      }

      var url = "/cart.php?action=add&sku=" + sku + "&qty=" + qty;

      _this4.items.push({
        url: url,
        target: target
      });
    }); // To add lang string

    allMessages.text('Adding to basket');
    this.handleAjax();
  };

  _proto.parseCSV = function parseCSV(event, _this) {
    $('.alertBox-message span').text('');
    $('.alertBox').hide();
    var file = event.target.files[0];
    var noSku;
    var noQty;
    Object(papaparse__WEBPACK_IMPORTED_MODULE_5__["parse"])(file, {
      preview: 1,
      complete: function complete(results) {
        if (results.data[0].indexOf('sku') === -1) {
          noSku = true;
        }

        if (results.data[0].indexOf('qty') === -1) {
          noQty = true;
        }

        if (noQty || noSku) {
          if (noSku) {
            $('.alertBox-message span').append(' Please ensure you have a heading labeled "sku" in row 1.');
          }

          if (noQty) {
            $('.alertBox-message span').append(' Please ensure you have a heading labeled "qty" in row 1.');
          }

          $('.alertBox').show();
        } else {
          Object(papaparse__WEBPACK_IMPORTED_MODULE_5__["parse"])(file, {
            header: true,
            dynamicTyping: false,
            skipEmptyLines: true,
            step: function step(row) {
              var sku = row.data[0].sku;
              var qty = row.data[0].qty;

              _this.handleAddLine(sku, qty);
            }
          });
        }
      }
    });
  } // Bind event handlers
  ;

  _proto.bindEvents = function bindEvents() {
    var _this5 = this;

    this.$form.on('click', this.classAddButton, function () {
      _this5.handleAddLine();
    });
    this.$form.on('click', this.classRemoveButton, function (event) {
      _this5.handleRemoveLine($(event.target).parent());
    });
    this.$form.on('change', '[data-multi-sku]', function (event) {
      var self = $(event.target);

      if (self.val()) {
        self.siblings(_this5.classResultMessage).text('');
        self.parent().removeClass(_this5.classNameRowError);
      }
    });
    this.$form.on('submit', function (event) {
      _this5.processForm(event, _this5.$form[0]);
    });
    this.$file.on('change', function (event) {
      _this5.parseCSV(event, _this5);
    });
  };

  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9tdWx0aWFkZC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwib25SZWFkeSIsImNsYXNzUm93IiwiY2xhc3NSZXN1bHRNZXNzYWdlIiwiY2xhc3NBZGRCdXR0b24iLCJjbGFzc1JlbW92ZUJ1dHRvbiIsImNsYXNzTmFtZVJvd0Vycm9yIiwiJGZvcm0iLCIkIiwiJGZpbGUiLCJzbmlwcGV0Iiwib3V0ZXJIVE1MIiwibGluZXMiLCJzZWFyY2hUZXJtcyIsInJlc2V0U3RhdGUiLCJiaW5kRXZlbnRzIiwiaXRlbXMiLCJlcnJvcnMiLCJjdXJyZW50TG9vcCIsImhhbmRsZUVycm9ycyIsImVhY2giLCJpIiwiZWxlbWVudCIsImFkZENsYXNzIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiaGFuZGxlQWpheCIsImxlbmd0aCIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsInVybCIsInRlbXBsYXRlIiwiZXJyIiwicmVzcG9uc2UiLCJzY3JpcHRSZWdleCIsImNsZWFuUmVzcG9uc2UiLCJyZXBsYWNlIiwidHJpbSIsIkVycm9yIiwidGFyZ2V0IiwiZGF0YSIsImF0dHIiLCJmZXRjaENvdW50ZXIiLCJjc3MiLCJjYXJ0IiwiZ2V0Q29udGVudCIsInRyaWdnZXIiLCJoYW5kbGVCdXR0b25EaXNwbGF5Iiwicm93cyIsInJlbW92ZUJ1dHRvbnMiLCJmaW5kIiwiYWRkQnV0dG9ucyIsImxhc3RBZGRCdXR0b24iLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJub3QiLCJoYW5kbGVBZGRMaW5lIiwic2t1IiwicXR5IiwibmV3TGluZSIsImNsb25lIiwidmFsIiwiYmVmb3JlIiwiaGFuZGxlUmVtb3ZlTGluZSIsImxpbmUiLCJpcyIsInJlbW92ZSIsImhhbmRsZUl0ZW1TZWxlY3QiLCJldmVudCIsIm92ZXJyaWRlIiwic2VsZiIsInJlbGF0aXZlUm93IiwicGFyZW50cyIsInJvd0luZGV4IiwiaW5kZXgiLCJzZWxlY3RlZFNrdSIsInJlbGF0aXZlSW5wdXQiLCJ2YWx1ZSIsInByb2Nlc3NGb3JtIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiYWxsUm93cyIsImFsbE1lc3NhZ2VzIiwicm93IiwicHVzaCIsInBhcnNlQ1NWIiwiX3RoaXMiLCJoaWRlIiwiZmlsZSIsImZpbGVzIiwibm9Ta3UiLCJub1F0eSIsInBhcnNlIiwicHJldmlldyIsImNvbXBsZXRlIiwicmVzdWx0cyIsImluZGV4T2YiLCJhcHBlbmQiLCJzaG93IiwiaGVhZGVyIiwiZHluYW1pY1R5cGluZyIsInNraXBFbXB0eUxpbmVzIiwic3RlcCIsIm9uIiwicGFyZW50Iiwic2libGluZ3MiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsSTs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVU7QUFDTjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsaUJBQWhCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsb0JBQTFCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQix3QkFBdEI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QiwyQkFBekIsQ0FMTSxDQU9OOztBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLHVCQUF6QixDQVJNLENBVU47O0FBQ0EsU0FBS0MsS0FBTCxHQUFhQyxDQUFDLENBQUMsWUFBRCxDQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRCxDQUFDLENBQUMsV0FBRCxDQUFkO0FBQ0EsU0FBS0UsT0FBTCxHQUFlRixDQUFDLENBQUMsS0FBS04sUUFBTixDQUFELENBQWlCLENBQWpCLEVBQW9CUyxTQUFuQztBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUVBLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxVQUFMO0FBQ0gsRzs7U0FFREQsVSxHQUFBLHNCQUFhO0FBQ1QsU0FBS0UsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtB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QSxTQUFLQyxLQUFMLENBQVdpRyxFQUFYLENBQWMsUUFBZCxFQUF3QixVQUFBbkMsS0FBSyxFQUFJO0FBQzdCLFlBQUksQ0FBQ1UsV0FBTCxDQUFpQlYsS0FBakIsRUFBd0IsTUFBSSxDQUFDOUQsS0FBTCxDQUFXLENBQVgsQ0FBeEI7QUFDSCxLQUZEO0FBSUEsU0FBS0UsS0FBTCxDQUFXK0YsRUFBWCxDQUFjLFFBQWQsRUFBd0IsVUFBQW5DLEtBQUssRUFBSTtBQUM3QixZQUFJLENBQUNpQixRQUFMLENBQWNqQixLQUFkLEVBQXFCLE1BQXJCO0FBQ0gsS0FGRDtBQUdILEc7OztFQTFPNkJzQyxxRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3BhcGFwYXJzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgICB0aGlzLmNsYXNzUm93ID0gJy5tdWx0aS1hZGRfX3Jvdyc7XG4gICAgICAgIHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlID0gJy5tdWx0aS1hZGRfX3Jlc3VsdCc7XG4gICAgICAgIHRoaXMuY2xhc3NBZGRCdXR0b24gPSAnLm11bHRpLWFkZF9fYWRkLWJ1dHRvbic7XG4gICAgICAgIHRoaXMuY2xhc3NSZW1vdmVCdXR0b24gPSAnLm11bHRpLWFkZF9fcmVtb3ZlLWJ1dHRvbic7XG5cbiAgICAgICAgLy8gQ2xhc3MgbmFtZXNcbiAgICAgICAgdGhpcy5jbGFzc05hbWVSb3dFcnJvciA9ICdtdWx0aS1hZGRfX3Jvdy0tZXJyb3InO1xuXG4gICAgICAgIC8vIEZ1bmN0aW9uYWwgYXNzaWdubWVudHNcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoJy5tdWx0aS1hZGQnKTtcbiAgICAgICAgdGhpcy4kZmlsZSA9ICQoJy5jc3YtZmlsZScpO1xuICAgICAgICB0aGlzLnNuaXBwZXQgPSAkKHRoaXMuY2xhc3NSb3cpWzBdLm91dGVySFRNTDtcbiAgICAgICAgdGhpcy5saW5lcyA9IDE7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybXMgPSBbXTtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVzZXRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMb29wID0gMDtcbiAgICB9XG5cbiAgICAvLyBMb29wIGVycm9ycywgYWRkIGNsYXNzIGFuZCBjaGFuZ2UgdGV4dFxuICAgIGhhbmRsZUVycm9ycygpIHtcbiAgICAgICAgJCh0aGlzLmVycm9ycykuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyh0aGlzLmNsYXNzTmFtZVJvd0Vycm9yKTtcbiAgICAgICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbih0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkudGV4dCgnUGxlYXNlIGNvbXBsZXRlIHRoZSBTS1UgYW5kIFF1YW50aXR5IGZpZWxkcycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSdW4gQUpBWCBjYWxscyBvbmUgYnkgb25lXG4gICAgaGFuZGxlQWpheCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRMb29wXS51cmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2YvYjJiL3F1aWNrLWFkZC1yZXNwb25zZScsXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmlwdFJlZ2V4ID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5SZXNwb25zZSA9IHJlc3BvbnNlLnJlcGxhY2Uoc2NyaXB0UmVnZXgsICcnKS50cmltKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjbGVhblJlc3BvbnNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuY3VycmVudExvb3BdLnRhcmdldC5jaGlsZHJlbih0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkudGV4dChjbGVhblJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLml0ZW1zW3RoaXMuY3VycmVudExvb3BdLnRhcmdldCkuYWRkQ2xhc3MoJ211bHRpLWFkZF9fcm93LS1hZHZpc29yeScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udGFyZ2V0LmNoaWxkcmVuKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKS50ZXh0KCQoJy5tdWx0aS1hZGRfX3N1Ym1pdC1idXR0b24nKS5kYXRhKCdtZXNzYWdlJykpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udGFyZ2V0KS5hdHRyKCdkYXRhLXN0YXR1cycsICdzdWNjZXNzJykuYWRkQ2xhc3MoJ211bHRpLWFkZF9fcm93LS1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50ICdjdXJyZW50JyBhbmQgcnVuIEFKQVggY2FsbCBhZ2FpblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExvb3ArKztcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWpheCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXN0IGF0dGVtcHQsIHJlZGlyZWN0IG9ubHlcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJy9jYXJ0LnBocCc7XG4gICAgICAgICAgICB0aGlzLmZldGNoQ291bnRlcigpO1xuICAgICAgICAgICAgJCgnLm11bHRpX2FkZF9fY2FydC1idXR0b24nKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaENvdW50ZXIoKSB7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQoeyB0ZW1wbGF0ZTogJ2YvY2FydC9pdGVtLWNvdW50JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlID4gMCkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQnV0dG9uRGlzcGxheSgpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMuJGZvcm0uY2hpbGRyZW4odGhpcy5jbGFzc1Jvdyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSByb3dzLmZpbmQodGhpcy5jbGFzc1JlbW92ZUJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSByb3dzLmZpbmQodGhpcy5jbGFzc0FkZEJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGxhc3RBZGRCdXR0b24gPSAkKHJvd3NbdGhpcy5saW5lcyAtIDFdKS5maW5kKHRoaXMuY2xhc3NBZGRCdXR0b24pO1xuXG4gICAgICAgIGlmICh0aGlzLmxpbmVzID4gMSkge1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9ucy5yZW1vdmVDbGFzcygnbXVsdGktYWRkX19yZW1vdmUtYnV0dG9uLS1sYXN0JykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbnMucmVtb3ZlQ2xhc3MoJ211bHRpLWFkZF9fYWRkLWJ1dHRvbi0tZGlzYWJsZWQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgYWRkQnV0dG9ucy5ub3QobGFzdEFkZEJ1dHRvbikuYWRkQ2xhc3MoJ211bHRpLWFkZF9fYWRkLWJ1dHRvbi0tZGlzYWJsZWQnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9ucy5hZGRDbGFzcygnbXVsdGktYWRkX19yZW1vdmUtYnV0dG9uLS1sYXN0JykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbnMucmVtb3ZlQ2xhc3MoJ211bHRpLWFkZF9fYWRkLWJ1dHRvbi0tZGlzYWJsZWQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQWRkTGluZShza3UsIHF0eSkge1xuICAgICAgICBjb25zdCBuZXdMaW5lID0gJCh0aGlzLnNuaXBwZXQpLmNsb25lKCk7XG5cbiAgICAgICAgaWYgKHNrdSAmJiBxdHkpIHtcbiAgICAgICAgICAgICQobmV3TGluZVswXS5jaGlsZHJlblswXSkudmFsKHNrdSk7XG4gICAgICAgICAgICAkKG5ld0xpbmVbMF0uY2hpbGRyZW5bMV0pLnZhbChxdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLm11bHRpLWFkZF9fc3VibWl0LWJ1dHRvbicpLmJlZm9yZShuZXdMaW5lKTtcbiAgICAgICAgdGhpcy5saW5lcysrO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQnV0dG9uRGlzcGxheSgpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW92ZUxpbmUobGluZSkge1xuICAgICAgICBpZiAobGluZS5pcygnOm9ubHktb2YtdHlwZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsaW5lLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmxpbmVzLS07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVCdXR0b25EaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbVNlbGVjdChldmVudCwgb3ZlcnJpZGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IChldmVudCkgPyAkKGV2ZW50LnRhcmdldCkgOiBvdmVycmlkZTtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVSb3cgPSBzZWxmLnBhcmVudHMoJy5tdWx0aS1hZGRfX3JvdycpO1xuICAgICAgICBjb25zdCByb3dJbmRleCA9IHJlbGF0aXZlUm93LmluZGV4KCkgLSAxO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU2t1ID0gJC50cmltKHNlbGYudGV4dCgpKTtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVJbnB1dCA9IHJlbGF0aXZlUm93LmZpbmQoJ1tkYXRhLW11bHRpLXNrdV0nKTtcblxuICAgICAgICByZWxhdGl2ZUlucHV0WzBdLnZhbHVlID0gc2VsZWN0ZWRTa3U7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybXNbcm93SW5kZXhdID0gc2VsZWN0ZWRTa3U7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0Zvcm0oZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBhbGxSb3dzID0gJChmb3JtKS5jaGlsZHJlbih0aGlzLmNsYXNzUm93KTtcbiAgICAgICAgY29uc3QgYWxsTWVzc2FnZXMgPSBhbGxSb3dzLmZpbmQodGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIC8vIEZvciBlYWNoIHJvdywgYWRkIHRoZSBVUkwgYW5kIHRhcmdldCB0byB0aGUgaXRlbXMgYXJyYXlcbiAgICAgICAgYWxsUm93cy5lYWNoKChpbmRleCwgcm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHJvdyk7XG4gICAgICAgICAgICBjb25zdCBza3UgPSB0YXJnZXQuZmluZCgnW2RhdGEtbXVsdGktc2t1XScpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gdGFyZ2V0LmZpbmQoJ1tkYXRhLW11bHRpLXF0eV0nKS52YWwoKTtcblxuICAgICAgICAgICAgaWYgKCFza3UgfHwgIXF0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAvY2FydC5waHA/YWN0aW9uPWFkZCZza3U9JHtza3V9JnF0eT0ke3F0eX1gO1xuXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVG8gYWRkIGxhbmcgc3RyaW5nXG4gICAgICAgIGFsbE1lc3NhZ2VzLnRleHQoJ0FkZGluZyB0byBiYXNrZXQnKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBamF4KCk7XG4gICAgfVxuXG4gICAgcGFyc2VDU1YoZXZlbnQsIF90aGlzKSB7XG4gICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlIHNwYW4nKS50ZXh0KCcnKTtcbiAgICAgICAgJCgnLmFsZXJ0Qm94JykuaGlkZSgpO1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBsZXQgbm9Ta3U7XG4gICAgICAgIGxldCBub1F0eTtcblxuICAgICAgICBwYXJzZShmaWxlLCB7XG4gICAgICAgICAgICBwcmV2aWV3OiAxLFxuICAgICAgICAgICAgY29tcGxldGUocmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmRhdGFbMF0uaW5kZXhPZignc2t1JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vU2t1ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhWzBdLmluZGV4T2YoJ3F0eScpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBub1F0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5vUXR5IHx8IG5vU2t1KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub1NrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2Ugc3BhbicpLmFwcGVuZCgnIFBsZWFzZSBlbnN1cmUgeW91IGhhdmUgYSBoZWFkaW5nIGxhYmVsZWQgXCJza3VcIiBpbiByb3cgMS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9RdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlIHNwYW4nKS5hcHBlbmQoJyBQbGVhc2UgZW5zdXJlIHlvdSBoYXZlIGEgaGVhZGluZyBsYWJlbGVkIFwicXR5XCIgaW4gcm93IDEuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnLmFsZXJ0Qm94Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlKGZpbGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUeXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwKHJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNrdSA9IHJvdy5kYXRhWzBdLnNrdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSByb3cuZGF0YVswXS5xdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQWRkTGluZShza3UsIHF0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBCaW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2xpY2snLCB0aGlzLmNsYXNzQWRkQnV0dG9uLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFkZExpbmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2xpY2snLCB0aGlzLmNsYXNzUmVtb3ZlQnV0dG9uLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZUxpbmUoJChldmVudC50YXJnZXQpLnBhcmVudCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2hhbmdlJywgJ1tkYXRhLW11bHRpLXNrdV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi52YWwoKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2libGluZ3ModGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpLnRleHQoJycpO1xuICAgICAgICAgICAgICAgIHNlbGYucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5jbGFzc05hbWVSb3dFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Zvcm0oZXZlbnQsIHRoaXMuJGZvcm1bMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRmaWxlLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhcnNlQ1NWKGV2ZW50LCB0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==