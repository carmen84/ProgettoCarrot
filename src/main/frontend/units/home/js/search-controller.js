var myApp = angular.module("myApp", []).controller('SearchController',  function($scope, $http) {
	
	var baseUrl = "http://localhost:8080/spring/home/";
	var headers = {
		'Access-Control-Allow-Origin' : 'http://localhost:4001',
		'Access-Control-Allow-Method' : 'POST, GET',
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
	
	$scope.showDocuments = function showDocuments(doc){
		
		$scope.documents = doc;
		
	};
	
	
		
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
     	
//     	 $scope.$watch($scope.documents, $scope.search());
    	 
 });
