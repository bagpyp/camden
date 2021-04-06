(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");







function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);

  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Cart.prototype;

  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    // Classes

    this.classRow = '.cart-item-title';
    this.classResultMessage = '.list-feedback'; // Class names

    this.classNameRowError = 'list-add__row--error'; // Functional assignments

    this.$form = $('.cart-list-form');
    this.$newList = $('.add-new-list');
    this.$addingOverlay = $('.loading-overlay');
    this.$document = $(document);
    this.resetState();
    this.bindEvents();
  };

  _proto.resetState = function resetState() {
    this.items = [];
    this.errors = [];
    this.currentLoop = 0;
  } // Run AJAX calls one by one
  ;

  _proto.handleAjax = function handleAjax() {
    var _this = this;

    if (this.currentLoop < this.items.length) {
      $(this.classResultMessage).html("Saving<br> " + this.items[this.currentLoop].pname + "<br> to your list");
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.getPage(this.items[this.currentLoop].url, {
        template: 'f/b2b/add-to-list-response'
      }, function (err) {
        if (err) {
          throw new Error(err);
        } // Increment 'current' and run AJAX call again


        _this.currentLoop++;

        _this.handleAjax();
      });
    } // Last attempt, redirect only


    if (this.currentLoop === this.items.length) {
      this.$addingOverlay.hide();

      if (this.listTarget !== '' && this.listTarget !== undefined) {
        document.location.href = "/wishlist.php?action=viewwishlistitems" + this.listTarget;
      } else {
        document.location.href = '/wishlist.php';
      } // $('.multi_add__cart-button').css('display', 'inline-block');
      // $('.multi-add__row[data-status=success]').remove();

    }
  };

  _proto.processForm = function processForm(event, form) {
    var _this2 = this;

    event.preventDefault();
    this.$addingOverlay.show();
    var allRows = $(form).find(this.classRow);
    var allMessages = allRows.find(this.classResultMessage);
    this.resetState(); // For each row, add the URL and target to the items array

    allRows.each(function (index, row) {
      var target = $(row);
      var pid = target.find('[data-pid]').val();
      var pname = target.find('.cart-item-name').attr('data-pname');
      _this2.listTarget = $('#list-id').val();

      if (_this2.listTarget !== '' && _this2.listTarget !== undefined) {
        _this2.listTarget = "&wishlistid=" + _this2.listTarget;
      } else {
        _this2.listTarget = '';
      }

      var url = "/wishlist.php?action=add&product_id=" + pid + _this2.listTarget;

      _this2.items.push({
        url: url,
        target: target,
        pname: pname
      });
    }); // To add lang string

    allMessages.text('Saving to list...').show();
    this.handleAjax();
  };

  _proto.openAddList = function openAddList(event) {
    event.preventDefault();
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.getPage('/cart.php', {
      template: 'f/cart/add-list-form'
    }, function (err, response) {
      if (err) {
        throw new Error(err);
      }

      if (response.length) {
        modal.updateContent(response);
        $('#wishlistname').select();
      }
    });
    modal.open();
  };

  _proto.addNewList = function addNewList(event) {
    event.preventDefault();
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
    var listName = $('#wishlistname').val();
    var sharedList = $('#publicwishlist').val();
    var targetUrl = '/wishlist.php?action=addwishlist&product_id=';
    $.ajax({
      method: 'POST',
      url: targetUrl,
      data: {
        wishlistname: listName,
        publicwishlist: sharedList,
        submit: null
      }
    }).done(function () {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.getPage('/wishlist.php', {
        template: 'f/b2b/list-added-response'
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        if (response.length) {
          // replace contents of '.list-selector' with response
          $('.list-selector').html(response);
        }

        modal.close();
      });
    });
  };

  _proto.cartUpdate = function cartUpdate($target) {
    var _this3 = this;

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantity-max'), 10);
    var minQty = parseInt($el.data('quantity-min'), 10);
    var minError = $el.data('quantity-min-error');
    var maxError = $el.data('quantity-max-error');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1; // Does not qualify for min/max quantity

    if (newQty < minQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: maxError,
        type: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this3.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this3.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };

  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this4 = this;

    if (preVal === void 0) {
      preVal = null;
    }

    var itemId = $target.data('cart-itemid');
    var $el = $("#qty-" + itemId);
    var minQty = parseInt($el.data('quantity-min'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry; // Does not quality for min/max quantity

    if (newQty < 0 || Number.isNaN(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else {
      this.$overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        _this4.$overlay.hide();

        if (response.data.status === 'succeed') {
          // if the quantity is changed "1" from "0", we have to remove the row.
          var remove = newQty === 0;

          _this4.refreshContent(remove);
        } else {
          $el.val(oldQty);
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    }
  };

  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this5 = this;

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this5.refreshContent(true);
      } else {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        }).then(function () {
          _this5.refreshContent(true);
        });
      }
    });
  };

  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this6 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);

      _this6.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = $(option);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};

        if (err) {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
            text: err,
            type: 'error'
          });
          return false;
        }

        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }

        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };

  _proto.refreshContent = function refreshContent(remove) {
    var _this7 = this;

    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show(); // Remove last item from cart? Reload

    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getContent(options, function (err, response) {
      _this7.$cartContent.html(response.content);

      _this7.$cartTotals.html(response.totals);

      _this7.$cartMessages.html(response.statusMessages);

      $cartPageTitle.replaceWith(response.pageTitle);

      _this7.bindEvents();

      _this7.$overlay.hide();

      var quantity = $('[data-cart-quantity]', _this7.$cartContent).data('cart-quantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this8 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);

    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);

    var preVal; // cart update

    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    }); // cart qty manually updates

    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();
      event.stopImmediatePropagation(); // update cart quantity

      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      event.stopImmediatePropagation();
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault(); // edit item in cart

      _this8.cartEditOptions(itemId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this9 = this;

    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault(); // Empty code

      if (!code) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this9.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this10 = this;

    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();

      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_8__["default"])(code)) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
          text: $certInput.data('error'),
          type: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this10.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this11 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);

        _this11.bindGiftWrappingForm();
      });
    });
  };

  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    var _this12 = this;

    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();
    this.$form.on('click', '[data-save-cart]', function (event) {
      _this12.processForm(event, _this12.$form[0]);
    });
    this.$newList.on('click', function (event) {
      _this12.openAddList(event);
    });
    this.$document.on('click', '.add-new-list-form .button', function (event) {
      _this12.addNewList(event);
    }); // initiate shipping estimator module

    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_9__["default"]($('[data-shipping-estimator]'));
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_7__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");









var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }

  var _proto = ShippingEstimator.prototype;

  _proto.initFormValidation = function initFormValidation() {
    var _this = this;

    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }

      if (_this.shippingValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };

  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };

  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;

    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");

        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }

        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }
  /**
   * Toggle between default shipping and ups shipping rates
   */
  ;

  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };

  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;

    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }

      var $field = $(field);

      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }

      if ($last) {
        _this3.shippingValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;

        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
      } // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us


      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };

  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content); // bind the select button

        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      $('.shipping-estimate-hide').show();
    });
    $('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      $('.shipping-estimate-show').show();
      $('.shipping-estimate-hide').hide();
    });
  };

  return ShippingEstimator;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyJdLCJuYW1lcyI6WyJDYXJ0Iiwib25SZWFkeSIsIiRjYXJ0Q29udGVudCIsIiQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkb3ZlcmxheSIsImhpZGUiLCJjbGFzc1JvdyIsImNsYXNzUmVzdWx0TWVzc2FnZSIsImNsYXNzTmFtZVJvd0Vycm9yIiwiJGZvcm0iLCIkbmV3TGlzdCIsIiRhZGRpbmdPdmVybGF5IiwiJGRvY3VtZW50IiwiZG9jdW1lbnQiLCJyZXNldFN0YXRlIiwiYmluZEV2ZW50cyIsIml0ZW1zIiwiZXJyb3JzIiwiY3VycmVudExvb3AiLCJoYW5kbGVBamF4IiwibGVuZ3RoIiwiaHRtbCIsInBuYW1lIiwidXRpbHMiLCJhcGkiLCJnZXRQYWdlIiwidXJsIiwidGVtcGxhdGUiLCJlcnIiLCJFcnJvciIsImxpc3RUYXJnZXQiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJwcm9jZXNzRm9ybSIsImV2ZW50IiwiZm9ybSIsInByZXZlbnREZWZhdWx0Iiwic2hvdyIsImFsbFJvd3MiLCJmaW5kIiwiYWxsTWVzc2FnZXMiLCJlYWNoIiwiaW5kZXgiLCJyb3ciLCJ0YXJnZXQiLCJwaWQiLCJ2YWwiLCJhdHRyIiwicHVzaCIsInRleHQiLCJvcGVuQWRkTGlzdCIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwicmVzcG9uc2UiLCJ1cGRhdGVDb250ZW50Iiwic2VsZWN0Iiwib3BlbiIsImFkZE5ld0xpc3QiLCJsaXN0TmFtZSIsInNoYXJlZExpc3QiLCJ0YXJnZXRVcmwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsIndpc2hsaXN0bmFtZSIsInB1YmxpY3dpc2hsaXN0Iiwic3VibWl0IiwiZG9uZSIsImNsb3NlIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJpdGVtSWQiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzd2FsIiwidHlwZSIsImNhcnQiLCJpdGVtVXBkYXRlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJOdW1iZXIiLCJpbnZhbGlkRW50cnkiLCJpc05hTiIsImNhcnRSZW1vdmVJdGVtIiwiaXRlbVJlbW92ZSIsInRoZW4iLCJjYXJ0RWRpdE9wdGlvbnMiLCJvcHRpb25zIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJjb250ZW50IiwiYmluZEdpZnRXcmFwcGluZ0Zvcm0iLCJob29rcyIsIm9uIiwib3B0aW9uIiwiJGNoYW5nZWRPcHRpb24iLCJwYXJlbnRzIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94IiwiaXRlbSIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJ3aW5kb3ciLCJyZWxvYWQiLCJnZXRDb250ZW50IiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJiaW5kQ2FydEV2ZW50cyIsImRlYm91bmNlVGltZW91dCIsImN1cnJlbnRUYXJnZXQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdHJpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwiYmluZFByb21vQ29kZUV2ZW50cyIsIiRjb3Vwb25Db250YWluZXIiLCIkY291cG9uRm9ybSIsIiRjb2RlSW5wdXQiLCJjb2RlIiwiYXBwbHlDb2RlIiwiYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cyIsIiRjZXJ0Q29udGFpbmVyIiwiJGNlcnRGb3JtIiwiJGNlcnRJbnB1dCIsInRvZ2dsZSIsImdpZnRDZXJ0Q2hlY2siLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaWQiLCJhbGxvd01lc3NhZ2UiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJQYWdlTWFuYWdlciIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ1ZhbGlkYXRvciIsIm5vZCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsImNvdW50cnlJZCIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiY29udGV4dCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsIlZhbGlkYXRvcnMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicmVtb3ZlQ2xhc3MiLCIkZXN0aW1hdG9yQ29udGFpbmVyIiwiJGVzdGltYXRvckZvcm0iLCJwYXJhbXMiLCJjb3VudHJ5X2lkIiwic3RhdGVfaWQiLCJjaXR5IiwiemlwX2NvZGUiLCJnZXRTaGlwcGluZ1F1b3RlcyIsImNsaWNrRXZlbnQiLCJxdW90ZUlkIiwic3VibWl0U2hpcHBpbmdRdW90ZSIsImFkZENsYXNzIiwiY2VydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7Ozs7Ozs7U0FDakJDLE8sR0FBQSxtQkFBVTtBQUNOLFNBQUtDLFlBQUwsR0FBb0JDLENBQUMsQ0FBQyxxQkFBRCxDQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJELENBQUMsQ0FBQyxvQkFBRCxDQUF0QjtBQUNBLFNBQUtFLFdBQUwsR0FBbUJGLENBQUMsQ0FBQyxvQkFBRCxDQUFwQjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0JILENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQ1hJLElBRFcsRUFBaEIsQ0FKTSxDQUtPO0FBRWI7O0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixrQkFBaEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixnQkFBMUIsQ0FUTSxDQVdOOztBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLHNCQUF6QixDQVpNLENBY047O0FBQ0EsU0FBS0MsS0FBTCxHQUFhUixDQUFDLENBQUMsaUJBQUQsQ0FBZDtBQUNBLFNBQUtTLFFBQUwsR0FBZ0JULENBQUMsQ0FBQyxlQUFELENBQWpCO0FBQ0EsU0FBS1UsY0FBTCxHQUFzQlYsQ0FBQyxDQUFDLGtCQUFELENBQXZCO0FBQ0EsU0FBS1csU0FBTCxHQUFpQlgsQ0FBQyxDQUFDWSxRQUFELENBQWxCO0FBRUEsU0FBS0MsVUFBTDtBQUVBLFNBQUtDLFVBQUw7QUFDSCxHOztTQUVERCxVLEdBQUEsc0JBQWE7QUFDVCxTQUFLRSxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUNILEcsQ0FFRDs7O1NBQ0FDLFUsR0FBQSxz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QixFQUFoQjtBQUVBK0osb0JBQVUsQ0FBQ3pLLGNBQVg7QUFFQWQsNEVBQUssQ0FBQ0MsR0FBTixDQUFVMkQsSUFBVixDQUFlNkgsbUJBQWYsQ0FBbUNELE9BQW5DLEVBQTRDLFlBQU07QUFDOUNwRixrQkFBTSxDQUFDM0YsUUFBUCxDQUFnQjRGLE1BQWhCO0FBQ0gsV0FGRDtBQUdILFNBUkQ7QUFTSCxPQWJEO0FBY0gsS0F4QkQ7QUEwQkEzSCxLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnVHLEVBQTdCLENBQWdDLE9BQWhDLEVBQXlDLFVBQUFyRSxLQUFLLEVBQUk7QUFDOUNBLFdBQUssQ0FBQ0UsY0FBTjtBQUVBcEMsT0FBQyxDQUFDa0MsS0FBSyxDQUFDZ0csYUFBUCxDQUFELENBQXVCOUgsSUFBdkI7QUFDQWlNLHlCQUFtQixDQUFDRCxXQUFwQixDQUFnQyxrQkFBaEM7QUFDQXBNLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCcUMsSUFBN0I7QUFDSCxLQU5EO0FBU0FyQyxLQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QnVHLEVBQTdCLENBQWdDLE9BQWhDLEVBQXlDLFVBQUFyRSxLQUFLLEVBQUk7QUFDOUNBLFdBQUssQ0FBQ0UsY0FBTjtBQUVBaUsseUJBQW1CLENBQUNXLFFBQXBCLENBQTZCLGtCQUE3QjtBQUNBaE4sT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJxQyxJQUE3QjtBQUNBckMsT0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJJLElBQTdCO0FBQ0gsS0FORDtBQU9ILEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMTDtBQUFlLHlFQUFVNk0sSUFBVixFQUFnQjtBQUMzQixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsV0FBTyxLQUFQO0FBQ0gsR0FIMEIsQ0FLM0I7OztBQUNBLFNBQU8sSUFBUDtBQUNILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGdpZnRDZXJ0Q2hlY2sgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXG5cbiAgICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgICB0aGlzLmNsYXNzUm93ID0gJy5jYXJ0LWl0ZW0tdGl0bGUnO1xuICAgICAgICB0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSA9ICcubGlzdC1mZWVkYmFjayc7XG5cbiAgICAgICAgLy8gQ2xhc3MgbmFtZXNcbiAgICAgICAgdGhpcy5jbGFzc05hbWVSb3dFcnJvciA9ICdsaXN0LWFkZF9fcm93LS1lcnJvcic7XG5cbiAgICAgICAgLy8gRnVuY3Rpb25hbCBhc3NpZ25tZW50c1xuICAgICAgICB0aGlzLiRmb3JtID0gJCgnLmNhcnQtbGlzdC1mb3JtJyk7XG4gICAgICAgIHRoaXMuJG5ld0xpc3QgPSAkKCcuYWRkLW5ldy1saXN0Jyk7XG4gICAgICAgIHRoaXMuJGFkZGluZ092ZXJsYXkgPSAkKCcubG9hZGluZy1vdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVzZXRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMb29wID0gMDtcbiAgICB9XG5cbiAgICAvLyBSdW4gQUpBWCBjYWxscyBvbmUgYnkgb25lXG4gICAgaGFuZGxlQWpheCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkuaHRtbChgU2F2aW5nPGJyPiAke3RoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0ucG5hbWV9PGJyPiB0byB5b3VyIGxpc3RgKTtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2IyYi9hZGQtdG8tbGlzdC1yZXNwb25zZScsXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgJ2N1cnJlbnQnIGFuZCBydW4gQUpBWCBjYWxsIGFnYWluXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9vcCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWpheCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXN0IGF0dGVtcHQsIHJlZGlyZWN0IG9ubHlcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLiRhZGRpbmdPdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFRhcmdldCAhPT0gJycgJiYgdGhpcy5saXN0VGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC93aXNobGlzdC5waHA/YWN0aW9uPXZpZXd3aXNobGlzdGl0ZW1zJHt0aGlzLmxpc3RUYXJnZXR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICcvd2lzaGxpc3QucGhwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICQoJy5tdWx0aV9hZGRfX2NhcnQtYnV0dG9uJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuICAgICAgICAgICAgLy8gJCgnLm11bHRpLWFkZF9fcm93W2RhdGEtc3RhdHVzPXN1Y2Nlc3NdJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzRm9ybShldmVudCwgZm9ybSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuJGFkZGluZ092ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIGNvbnN0IGFsbFJvd3MgPSAkKGZvcm0pLmZpbmQodGhpcy5jbGFzc1Jvdyk7XG4gICAgICAgIGNvbnN0IGFsbE1lc3NhZ2VzID0gYWxsUm93cy5maW5kKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKTtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgICAgICAvLyBGb3IgZWFjaCByb3csIGFkZCB0aGUgVVJMIGFuZCB0YXJnZXQgdG8gdGhlIGl0ZW1zIGFycmF5XG4gICAgICAgIGFsbFJvd3MuZWFjaCgoaW5kZXgsIHJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gJChyb3cpO1xuICAgICAgICAgICAgY29uc3QgcGlkID0gdGFyZ2V0LmZpbmQoJ1tkYXRhLXBpZF0nKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHBuYW1lID0gdGFyZ2V0LmZpbmQoJy5jYXJ0LWl0ZW0tbmFtZScpLmF0dHIoJ2RhdGEtcG5hbWUnKTtcbiAgICAgICAgICAgIHRoaXMubGlzdFRhcmdldCA9ICQoJyNsaXN0LWlkJykudmFsKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RUYXJnZXQgIT09ICcnICYmIHRoaXMubGlzdFRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VGFyZ2V0ID0gYCZ3aXNobGlzdGlkPSR7dGhpcy5saXN0VGFyZ2V0fWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFRhcmdldCA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgL3dpc2hsaXN0LnBocD9hY3Rpb249YWRkJnByb2R1Y3RfaWQ9JHtwaWR9JHt0aGlzLmxpc3RUYXJnZXR9YDtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgICBwbmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUbyBhZGQgbGFuZyBzdHJpbmdcbiAgICAgICAgYWxsTWVzc2FnZXMudGV4dCgnU2F2aW5nIHRvIGxpc3QuLi4nKS5zaG93KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQWpheCgpO1xuICAgIH1cblxuICAgIG9wZW5BZGRMaXN0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSgnL2NhcnQucGhwJywge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2NhcnQvYWRkLWxpc3QtZm9ybScsXG4gICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAkKCcjd2lzaGxpc3RuYW1lJykuc2VsZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9XG5cbiAgICBhZGROZXdMaXN0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSAkKCcjd2lzaGxpc3RuYW1lJykudmFsKCk7XG4gICAgICAgIGNvbnN0IHNoYXJlZExpc3QgPSAkKCcjcHVibGljd2lzaGxpc3QnKS52YWwoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0VXJsID0gJy93aXNobGlzdC5waHA/YWN0aW9uPWFkZHdpc2hsaXN0JnByb2R1Y3RfaWQ9JztcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6IHRhcmdldFVybCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB3aXNobGlzdG5hbWU6IGxpc3ROYW1lLFxuICAgICAgICAgICAgICAgIHB1YmxpY3dpc2hsaXN0OiBzaGFyZWRMaXN0LFxuICAgICAgICAgICAgICAgIHN1Ym1pdDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoJy93aXNobGlzdC5waHAnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2IyYi9saXN0LWFkZGVkLXJlc3BvbnNlJyxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgY29udGVudHMgb2YgJy5saXN0LXNlbGVjdG9yJyB3aXRoIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgICQoJy5saXN0LXNlbGVjdG9yJykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHktbWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5LW1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5LW1pbi1lcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eS1tYXgtZXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGlmeSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0LWl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHktbWluJyksIDEwKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcHJlVmFsICE9PSBudWxsID8gcHJlVmFsIDogbWluUXR5O1xuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLnZhbCgpKSwgMTApO1xuXG4gICAgICAgIGxldCBpbnZhbGlkRW50cnk7XG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKG5ld1F0eSA8IDAgfHwgTnVtYmVyLmlzTmFOKG5ld1F0eSkpIHtcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC52YWwoKTtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGAke2ludmFsaWRFbnRyeX0gaXMgbm90IGEgdmFsaWQgZW50cnlgLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChvcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJCgnW25hbWU9XCJpdGVtX2lkXCJdJywgJGZvcm0pLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoaXRlbSwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdwLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKSB7XG4gICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgdGhpcy4kY2FydENvbnRlbnQpO1xuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICAgICAgdG90YWxzOiAnY2FydC90b3RhbHMnLFxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogJ2NhcnQvcGFnZS10aXRsZScsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy4kY2FydFRvdGFscy5odG1sKHJlc3BvbnNlLnRvdGFscyk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG5cbiAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG4gICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgdGhpcy4kY2FydENvbnRlbnQpLmRhdGEoJ2NhcnQtcXVhbnRpdHknKSB8fCAwO1xuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kQ2FydEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgbGV0IHByZVZhbDtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdmb2N1cycsIGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY2FydC1yZW1vdmUnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2xpY2snLCAnW2RhdGEtc2F2ZS1jYXJ0XScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Zvcm0oZXZlbnQsIHRoaXMuJGZvcm1bMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRuZXdMaXN0Lm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbkFkZExpc3QoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRkb2N1bWVudC5vbignY2xpY2snLCAnLmFkZC1uZXctbGlzdC1mb3JtIC5idXR0b24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZE5ld0xpc3QoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSBuZXcgU2hpcHBpbmdFc3RpbWF0b3IoJCgnW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXScpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4uL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4uL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJy4uL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9ICdmb3JtW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXSc7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcbiAgICAgICAgICAgIC8vIE9ubHkgcGVyZm9ybSBhIGNoZWNrIGZvciBhbGwgZmllbGRzIHdoZW4gY291bnRyeSBoYXMgYSB2YWx1ZVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kVVBTUmF0ZXMoKTtcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnRyeUlkICE9PSAwICYmICFOdW1iZXIuaXNOYU4oY291bnRyeUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ0NvdW50cnlcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxlID0gJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVWYWwgPSAkZWxlLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBlbGVWYWwgJiYgZWxlVmFsLmxlbmd0aCAmJiBlbGVWYWwgIT09ICdTdGF0ZS9wcm92aW5jZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGJldHdlZW4gZGVmYXVsdCBzaGlwcGluZyBhbmQgdXBzIHNoaXBwaW5nIHJhdGVzXG4gICAgICovXG4gICAgYmluZFVQU1JhdGVzKCkge1xuICAgICAgICBjb25zdCBVUFNSYXRlVG9nZ2xlID0gJy5lc3RpbWF0b3ItZm9ybS10b2dnbGVVUFNSYXRlJztcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybVVwcyA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tdXBzJyk7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybURlZmF1bHQgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLWRlZmF1bHQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtRGVmYXVsdC50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCkge1xuICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmdldFN0YXR1cyh0aGlzLiRzdGF0ZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGZpZWxkLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1N0YXRlL3Byb3ZpbmNlJyk7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2hlbiB5b3UgY2hhbmdlIGEgY291bnRyeSwgeW91IHN3YXAgdGhlIHN0YXRlL3Byb3ZpbmNlIGJldHdlZW4gYW4gaW5wdXQgYW5kIGEgc2VsZWN0IGRyb3Bkb3duXG4gICAgICAgICAgICAvLyBOb3QgYWxsIGNvdW50cmllcyByZXF1aXJlIHRoZSBwcm92aW5jZSB0byBiZSBmaWxsZWRcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVtb3ZlIHRoaXMgY2xhc3Mgd2hlbiB3ZSBzd2FwIHNpbmNlIG5vZCB2YWxpZGF0aW9uIGRvZXNuJ3QgY2xlYW51cCBmb3IgdXNcbiAgICAgICAgICAgICQodGhpcy5zaGlwcGluZ0VzdGltYXRvcikuZmluZCgnLmZvcm0tZmllbGQtLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnZm9ybS1maWVsZC0tc3VjY2VzcycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXN0aW1hdG9yRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkZXN0aW1hdG9yQ29udGFpbmVyID0gJCgnLnNoaXBwaW5nLWVzdGltYXRvcicpO1xuICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybSA9ICQoJy5lc3RpbWF0b3ItZm9ybScpO1xuXG4gICAgICAgICRlc3RpbWF0b3JGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgY291bnRyeV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHN0YXRlX2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIGNpdHk6ICQoJ1tuYW1lPVwic2hpcHBpbmctY2l0eVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICB6aXBfY29kZTogJCgnW25hbWU9XCJzaGlwcGluZy16aXBcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRTaGlwcGluZ1F1b3RlcyhwYXJhbXMsICdjYXJ0L3NoaXBwaW5nLXF1b3RlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnNoaXBwaW5nLXF1b3RlcycpLmh0bWwocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBzZWxlY3QgYnV0dG9uXG4gICAgICAgICAgICAgICAgJCgnLnNlbGVjdC1zaGlwcGluZy1xdW90ZScpLm9uKCdjbGljaycsIGNsaWNrRXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZUlkID0gJCgnLnNoaXBwaW5nLXF1b3RlOmNoZWNrZWQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLnNob3coKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykuc2hvdygpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=