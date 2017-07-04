'use strict';

angular.module('app', [])
.controller('IndexController', ['$scope', '$http', function($scope, $http) {
	var data = {
		name: 'Jean',
		age: 25
	};
	var arr = [1,2,3,4,5];
	$http.post('http://localhost:3000/users')
	.then(function(response){
		//success
		console.log(response);
		$scope.users = response.data;
	}, function(err){
		// error
		console.log(err);
	})
	$scope.arr = arr;
	$scope.data = data;
}])
.controller('HelloController', ['$scope', function($scope) {
	$scope.data = 'World';
}]);