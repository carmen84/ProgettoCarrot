(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var myApp = angular.module("myApp", []).controller('SearchController',  function($scope, $http) {
	
	var baseUrl = "http://localhost:8080/spring/home/";
	var headers = {
		'Access-Control-Allow-Origin' : 'http://localhost:4001',
		'Access-Control-Allow-Method' : 'POST, GET, PUT, OPTIONS',
		'Content-Type' : 'application/json',
		'Accept' : 'application/json'
	};
	
	$scope.algorithms = [
	                {name:'lingo'},
	                {name:'STC'},
	                {name:'K-means'},
	                {name:'By URL'},
	                {name:'Source'}
	                ];
	$scope.selected = $scope.algorithms[0];
	
	
		
	$scope.search = function search(){
		$scope.documents =[];
		$scope.items = [];
		var numDoc = $scope.numberDoc !== undefined ? $scope.numberDoc : 10;
		var cluster = $scope.selected !== undefined ? $scope.selected.name : 'lingo';
		var parameter = $scope.paramSearch !== undefined ? $scope.paramSearch : null;
		$http({
			method: "GET",
			headers: headers,
			url : baseUrl + "searchDocuments/" + numDoc + "/" + cluster +"/" + parameter
		}).success(function(response){
			$scope.documents = response.documents;
			$scope.items = response.clusters;
		}).error(function(e){
			console.log(e);
		});
	};
	
	$scope.modalShown = false;
	  $scope.toggleModal = function(doc) {
	    $scope.modalShown = !$scope.modalShown;
	    $scope.actualDocument = doc;
	  };
	
	  $scope.formatDate = function(date){
          var dateOut = new Date(date);
          return dateOut;
    };
	  
	  $scope.hideModal = function() {
	        $scope.modalShown = false;
	      };
         
         $scope.initTab = function(){
     		$http({
     			method: "GET",
     			headers: headers,
     			url : baseUrl + "numberTab" 	
     		}).success(function(response){
     			$scope.nameTab = response.nameTab;
     			$scope.pathTab = response.path;
     		}).error(function(e){
     			console.log(e);
     		});
     	};
     	
     	 $scope.$watch($scope.documents, $scope.search());
    	 
 });

},{}]},{},[1])