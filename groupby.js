//Choose flavor:
//function groupBy(array, key) {
Array.prototype.groupBy = function(key) {

	var self = this;
	var map = {};

	// make map of common, groupable objects
	for (var i = 0; i < self.length; i++) {

		var obj = self[i];

		if( obj instanceof Object && obj.hasOwnProperty(key) ) {
			if( !map[ obj[key] ] ) map[ obj[key] ] = [];
			map[ obj[key] ].push(i); 
		}
	};

	// group & merge those objects into a new array
	var array = [];
	for( var attr in map ) {

		var merged = {};

		for (var i = 0; i < map[attr].length; i++) {
			var obj = self[ map[attr][i] ];
			merge(obj, merged);
		};

		array.push(merged);
	}

	return array;

	function merge(source, destination) {
		for (var p in source) {

			// Property in destination object set; update its value.
			if ( source[p].constructor == Object ) {
				if(!destination[p]) destination[p] = {};
				destination[p] = merge(source[p], destination[p]);
			} else if( destination[p] && destination[p] !== source[p] ) {
				
				// if destination is an array
				if(destination[p] instanceof Array ) {
					destination[p] = destination[p].concat(source[p]);
				} else {
					var temp = destination[p];
					destination[p] = [];
					destination[p].push(temp);
					destination[p] = destination[p].concat(source[p]);
				}
				
			} else if( !destination[p]) {
				destination[p] = source[p];
			}
		}

		return destination;
	}
}
