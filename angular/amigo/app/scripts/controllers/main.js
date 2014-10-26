'use strict';

/**
 * @ngdoc function
 * @name amigoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the amigoApp
 */
angular.module('amigoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
