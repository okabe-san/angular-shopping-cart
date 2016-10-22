(function() {

  'use strict';

  angular
    .module('ShoppingCartApp.components.main')
    .filter('currencyFn', currencyFn)
    .filter('sortFn', sortFn);

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

  function sortFn() {
    /*jshint validthis: true */
    return function (input) {
      console.log('test');
    };
  }
})();
