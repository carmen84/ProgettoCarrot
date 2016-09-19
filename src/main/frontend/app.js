//here we need to inject ui.router as we using it for routing

var app = angular.module('myApp', ['ui.router', 'ngRoute', 'd3']);

//$stateprovider is the service procided by ui.router
app.config(['$stateProvider', function ($stateProvider) {

//create route object

    var home= {
        url: '/home',
        templateUrl: 'index.html',
    },
    search= {
        url: '/search',
        templateUrl: 'units/search/html/search-page.html' 
    };

//Now add these route state privider

    $stateProvider
       .state('home', home)
       .config(['$routeProvider', function($routeProvider) {
		  $routeProvider.when('/home', {
		    templateUrl: 'units/home/html/home.html',
		    controller: 'SearchController'
		  });
		}])
       .state('search', search)
       .config(['$routeProvider', function($routeProvider) {
		  $routeProvider.when('/search', {
		    templateUrl: 'units/search/html/search-page.html',
		    controller: 'SearchController'
		  });
		}]);
}])

.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function providerHandlersConfig($controllerProvider, $compileProvider, $filterProvider, $provide) {
        'use strict';
        // registering components after bootstrap
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;
        
        

    }
]);
