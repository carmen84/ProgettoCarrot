(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
myApp.directive('bubbleChart', function() {
	return {
		restrict: 'E',
		transclude: true,
		 
		controller: function($scope) {
				debugger;
		        var vis = d3.select("#svgVisualize");
		        var xRange = d3.scale.linear().range([40, 400]).domain([d3.min($scope.items, function (d) {
		                            return (d.x);
		                        }),
		                        d3.max($scope.items, function (d) {
		                            return d.x;
		                        })]);
		        var yRange = d3.scale.linear().range([400, 40]).domain([d3.min($scope.items, function (d) {
		                            return d.y;
		                        }),
		                        d3.max($scope.items, function (d) {
		                            return d.y;
		                        })]);
		        var xAxis = d3.svg.axis().scale(xRange);
		        var yAxis = d3.svg.axis().scale(yRange).orient("left");
		        vis.append("svg:g").call(xAxis).attr("transform", "translate(0,400)");
		        vis.append("svg:g").call(yAxis).attr("transform", "translate(40,0)");
		        var circles = vis.selectAll("circle").data($scope.items);
		        circles.enter()
		        .insert("circle");
				
			}
		};
	});
},{}]},{},[1])