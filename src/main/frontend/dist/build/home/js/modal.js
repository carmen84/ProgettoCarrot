(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

myApp.directive('modalDialog', function() {
	  return {
		    restrict: 'E',
		    scope: {
		      show: '='
		    },
		    replace: true, // Replace with the template below
		    transclude: true, // we want to insert custom content inside the directive
		    link: function(scope, element, attrs) {
		      scope.dialogStyle = {};
		      if (attrs.width)
		        scope.dialogStyle.width = attrs.width;
		      if (attrs.height)
		        scope.dialogStyle.height = attrs.height;
		      scope.hideModal = function() {
		        scope.show = false;
		      };
		    },
		    template: '/units/search/html/popup-detail-documents.html'
		  };
		});
},{}]},{},[1])