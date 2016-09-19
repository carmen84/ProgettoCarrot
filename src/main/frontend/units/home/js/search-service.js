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
