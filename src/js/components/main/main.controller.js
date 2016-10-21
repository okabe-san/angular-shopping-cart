(function() {

  'use strict';

  angular
    .module('ShoppingCartApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['productsService', '$scope'];

  function mainController(productsService, $scope) {
    /*jshint validthis: true */
    this.products = productsService.productsList;
  }
})();
