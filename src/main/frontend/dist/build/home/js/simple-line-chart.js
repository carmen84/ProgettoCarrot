(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
myApp.directive('simpleLineChart', function(){
  return {
	  restrict: 'EA',
	    transclude: true,
	    scope: {
	      chartData: '='
	    },
	    link: function(scope, elem, attrs) {
	      scope.$watch('chartData', function(newValue, oldValue) {
	        if (newValue) {
	          scope.drawChart(newValue);
	        }
	      });


 scope.drawChart = function(summaryData) {
	 d3.select("#circles").select("svg").remove();
    var width = 160,
    height = 200,
    radius = Math.min(width, height) / 2;
    
    var color = d3.scale.category20b();

    var arc = d3.svg.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 100);

    var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) { 
    	  return d.score; 
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
      .attr("d", arc)
      .style("fill", function(d) {
          return color(d.data.size);
      })
      .on('click', function(d){
        scope.documents = d.data.documents;
        scope.items = d.data;
      });
    g.append("text")
      .attr("transform", function(d) { 
        return "translate(" + ( (radius - 12) * Math.sin( ((d.endAngle - d.startAngle) / 2) + d.startAngle ) ) + "," + ( -1 * (radius - 12) * Math.cos( ((d.endAngle - d.startAngle) / 2) + d.startAngle ) ) + ")"; })
      .attr("dy", ".35em")
      .style("text-anchor", function(d) {
        var rads = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
        if ( (rads > 7 * Math.PI / 4 && rads < Math.PI / 4) || (rads > 3 * Math.PI / 4 && rads < 5 * Math.PI / 4) ) {
          return "middle";
        } else if (rads >= Math.PI / 4 && rads <= 3 * Math.PI / 4) {
          return "start";
        } else if (rads >= 5 * Math.PI / 4 && rads <= 7 * Math.PI / 4) {
          return "end";
        } else {
          return "middle";
        }
      })
      .text(function(d) { 
            return d.data.label + ': ' + d.data.documents.length + ' documenti';   
        });
      };
	    }
  };
});

},{}]},{},[1])