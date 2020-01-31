'use strict';

angular.module('myApp.view1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: '/login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', [function($scope) {
	$scope.user = {
		name: '', password: ''  
	};
}]);