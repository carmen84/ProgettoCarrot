(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
myApp.directive('simplePieChart', function(){
  return {
	  restrict: 'EA',
	    transclude: true,
	    scope: {
	    	chartPieData: '='
	    },
	    link: function(scope, elem, attrs) {
	      scope.$watch('chartPieData', function(newValue, oldValue) {
	        if (newValue) {
	          scope.drawChart(newValue);
	        }
	      });


 scope.drawChart = function(summaryData) {

	 
	 d3.select("#circles").select("svg").remove();
    var width = 220,
    height = 220,
    radius = Math.min(width-10, height-10) / 2;
    var color = d3.scale.category20b();

    var arc = d3.svg.arc()
      .outerRadius(radius);

    var pie = d3.layout.pie()
      .value(function(d) { 
    	  return d.documents.length; 
    	});
   
    var svg = d3.select("#circles").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    var g = svg.selectAll(".arc")
      .data(pie(summaryData))
      .enter().append("g")
      .attr("class", "arc");

    g.append("path")
      .attr("fill", function(d, i) { return color(i); })
      .attr("d", arc);
    
    
    g.append("title")
    .text(function(d) {
      return d.data.label;
    });
    
    g.append("text")
    .attr("font-size", "10px")
      .attr("transform", function(d) { 
        return "translate(" + ( (radius - 12) * Math.sin( ((d.endAngle - d.startAngle) / 2) + d.startAngle ) ) + "," + ( -1 * (radius - 12) * Math.cos( ((d.endAngle - d.startAngle) / 2) + d.startAngle ) ) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(function(d) { 
            return d.data.label;   
        });
    
 
      };
      
     
      
	    }
  };
});

},{}]},{},[1])