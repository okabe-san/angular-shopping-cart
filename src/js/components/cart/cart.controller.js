(function() {

  'use strict';

  angular
    .module('shoppingCartApp.components.cart', [])
    .controller('cartController', cartController);

  cartController.$inject = ['cartService'];

  function cartController(cartService) {
    /*jshint validthis: true */
    this.cart = cartService.cartList;
    this.receipt = cartService.receiptList;
  }
})();
