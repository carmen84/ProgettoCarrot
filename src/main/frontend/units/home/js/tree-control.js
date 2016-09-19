
myApp.directive('ngTree', function() {
	return {
		restrict: 'E',
		transclude: true,
		 
		controller: function($scope) {
		 
		$scope.showStates = function(item){
			item.active = !item.active;
		};
		 
		$scope.items = [];
				},
				templateUrl: 'units/search/html/treeview.html'
				};
	});