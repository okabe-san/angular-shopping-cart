(function() {

  'use strict';

  angular
    .module('shoppingCartApp.components.cart', [])
    .controller('cartController', cartController)
    .controller('editQtyController', editQtyController);

  cartController.$inject = ['productsService', 'cartService'];

  function cartController(productsService, cartService) {
    /*jshint validthis: true */
    this.products = productsService.productsList;
    this.cart = cartService.cartList;
    this.receipt = cartService.receiptList;
  }

  function editQtyController() {
    /*jshint validthis: true */
    this.edit = (item) => {
      console.log(item);
    };
  }
})();
