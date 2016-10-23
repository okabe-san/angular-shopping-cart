(function() {

  'use strict';

  angular
    .module('shoppingCartApp.components.main')
    .filter('currencyFn', currencyFn);

  currencyFn.$inject = [];

  function currencyFn() {
    /*jshint validthis: true */
    return function (input) {
      let num = input.toString();
      let position = num.length - 2;
      let output = [num.slice(0, position), '.', num.slice(position)].join('');
      return output;
    };
  }

})();
