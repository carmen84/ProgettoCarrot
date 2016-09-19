(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//here we need to inject ui.router as we using it for routing

var myDemoApp = angular.module('myApp', ['ui.router', 'ngRoute']);

//$stateprovider is the service procided by ui.router
myDemoApp.config(['$stateProvider', function ($stateProvider) {

//create route object

    var home= {
        url: '/home',
        templateUrl: 'index.html',
    },
    search= {
        url: '/search',
        templateUrl: 'units/search/html/search-page.html',
        controller: 'SearchController'
    };

//Now add these route state privider

    $stateProvider
       .state('home', home)
       .config(['$routeProvider', function($routeProvider) {
		  $routeProvider.when('/home', {
		    templateUrl: 'units/home/html/home.html',
		    //controller: 'View1Ctrl'
		  });
		}])
       .state('search', search);
}]);

},{}]},{},[1])