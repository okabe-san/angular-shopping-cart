(function() {

  'use strict';

  angular
    .module('shoppingCartApp.components.main', [])
    .controller('mainController', mainController)
    .controller('categoryController', categoryController)
    .controller('addController', addController);

  mainController.$inject = ['productsService', 'cartService'];

  function mainController(productsService) {
    /*jshint validthis: true */
    this.products = productsService.productsList;
  }

  function categoryController(productsService) {
    /*jshint validthis: true */
    this.products = productsService.productsList;
    let arr = [];
    this.products.forEach((product) => {
      product.categories.forEach((category) => {
        if (arr.indexOf(category) === -1) {
          arr.push(category);
        }
      });
    });
    this.categories = arr;
  }

  function addController(cartService) {
    /*jshint validthis: true */
    this.cart = cartService.cartList;
    this.receipt = cartService.receiptList;
    this.add = (item) => {
      this.receipt.sub += item.price;
      this.receipt.tax = this.receipt.sub * 0.08;
      this.receipt.total = this.receipt.sub + this.receipt.tax;
      if (this.cart.indexOf(item) === -1) {
        item.count = this.count;
        this.cart.push(item);
      } else {
        item.count = item.count + this.count;
      }
      // console.log(this.count);
    };
  }
})();
