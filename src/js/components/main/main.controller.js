(function() {

  'use strict';

  angular
    .module('ShoppingCartApp.components.main', [])
    .controller('mainController', mainController)
    .controller('categoryController', categoryController);

  mainController.$inject = ['productsService', '$scope'];

  function mainController(productsService, $scope) {
    /*jshint validthis: true */
    this.products = productsService.productsList;
  }

  function categoryController(productsService, $scope) {
    /*jshint validthis: true */
    this.products = productsService.productsList;
    let arr = [];
    this.products.forEach(function (product) {
      product.categories.forEach(function (category) {
        if (arr.indexOf(category) === -1) {
          arr.push(category);
        }
      });
    });
    this.categories = arr;
  }
})();
