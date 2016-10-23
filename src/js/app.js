// sample angular code

(function() {

  'use strict';

  angular
    .module('shoppingCartApp', [
      'ngRoute',
      'shoppingCartApp.config',
      'shoppingCartApp.components.main',
      'shoppingCartApp.components.cart'
    ]);

})();
