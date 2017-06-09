'use strict';

var App = angular.module('App', ['ngRoute']);

App.config(function($routeProvider, $locationProvider) {
	
  $routeProvider.when('/', {
    controller : 'MainCtrl',
    templateUrl: '/partials/main.html'
  });
  $routeProvider.when('/about', {
    controller : 'AboutCtrl',
    templateUrl: '/partials/about.html',
  });
  $routeProvider.when('/contact', {
	    controller : 'ContactCtrl',
	    templateUrl: '/partials/contact.html',
	  });
  $routeProvider.otherwise({
    redirectTo : '/'
  });
  
  $locationProvider.html5Mode({
		enabled: true
//		requireBase: false
	});
});

App.controller('MainCtrl', function($scope, $rootScope, $log, $http, $routeParams, $location, $route)  {
	
	console.log('Main Controller');
	
});

App.controller('AboutCtrl', function($scope, $rootScope, $log, $http, $routeParams, $location, $route)  {
	console.log('About Controller');
});

App.controller('ContactCtrl', function($scope, $rootScope, $log, $http, $routeParams, $location, $route)  {
	console.log('Contact Controller');
	$scope.hello = "Hello from Contact Controller";
});