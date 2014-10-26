'use strict';

/**
 * @ngdoc function
 * @name amigoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the amigoApp
 */
angular.module('amigoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
