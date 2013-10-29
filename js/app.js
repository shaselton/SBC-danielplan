;(function(){
	'use strict';
	angular.module( 'sbc', [ 'ngRoute', 'googlechart' ] ).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/create', {templateUrl: 'partials/create.html',   controller: 'CreateCtrl'}).
			when('/progress', {templateUrl: 'partials/progress.html', controller: 'ProgressCtrl'}).
			otherwise({redirectTo: '/create'});
	}]);
})();