(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
myApp.directive('bubbleTextChart', function() {
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

      scope.drawChart = function(rootData) {
    	  d3.select("#foamTree").select("svg").remove();
        var diameter = 160,
          format = d3.format(",d"),
          color = d3.scale.category20c();

        var bubble = d3.layout.pack()
          .sort(null)
          .size([diameter, diameter])
          .value(function(d) {
            console.log(d.size);
            return d.size;
          })
          .padding(1.5);

        var svg = d3.select("#foamTree").append("svg")
          .attr("width", diameter)
          .attr("height", diameter)
          .attr("class", "bubble");



        var node = svg.selectAll(".node")
          .data(bubble.nodes(classes(rootData))
            .filter(function(d) {
              return !d.children;
            }))
          .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
          });

        node.append("title")
          .text(function(d) {
            return d.className + ": " + format(d.value);
          });

        node.append("circle")
          .attr("r", function(d) {
            return d.r;
          })
          .style("fill", function(d) {
            return color(d.size);
          });

        node.append("text")
        .attr("font-size", "10px")
          .attr("dy", ".3em")
          .style("text-anchor", "middle")
          .text(function(d) {
            return d.className.substring(0, d.r / 3);
          });
        // Returns a flattened hierarchy containing all leaf nodes under the root.
        function classes(root) {
          var classes = [];

          function recurse(name, node) {
            if (node) 
            	node.forEach(function(child) {
	            classes.push({
	              packageName: name,
	              className: child.label,
	              value: child.documents.length,
	              size: child.documents.length
	            });
            });
          }
          recurse(null, root);
          return {
            children: classes
          };
        }
        d3.select(self.frameElement).style("height", diameter + "px");
      }

      if (typeof scope.chartData != "undefined") {
        scope.drawChart(scope.chartData);
      }

    }
  };
});
},{}]},{},[1])