(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
myApp.service('homeSearch', function ($http, $q) {
    'use strict';
    
    
//    this.getLoadNumberTab = function () {
//        var deferred = $q.defer();
//        $http.get('http://localhost:8080/spring/home/method1').success(function (response) {
//            var obj = {};
//            var data = response;
//            console.log('RESPONSE: ', response);
//            deferred.resolve(obj);
//        }, function (error) {
//            deferred.reject(error);
//        });
//        return deferred.promise;
//    };
    
    
    
//    var loadNumberTab = 0; 
//    
//    return {
//    	loadNumberTab : loadNumberTab,
//    	load: function () {
//    		if(loadNumberTab == 0){
//	            return  $http.get('http://localhost:8080/spring/home/method1')
//	            .success(function (response) {
//	            	debugger;
//	            	loadNumberTab = response.numberTab;
//	//            	return loadNumberTab;
//	            });
//    		}
//        }
//    };
    
    
        
//    this.loadNumberTab = function () {
//        var defer = $q.defer();
//        $http.post('http://localhost:8080/spring/home/method2')
//            .then(function (response) {
//            	var obj = {};
//                obj =  response.data.payload.data[0];
//                defer.resolve(obj);
//            }, function (error) {
//                defer.reject(error);
//            	
//            });
//        return defer.promise;
//    };
});

},{}]},{},[1])