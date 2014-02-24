// Choose flavor (standard function or array prototype):

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

			// if Object, call merge recursively
			if ( source[p].constructor == Object ) {
				if(!destination[p]) destination[p] = {};
				destination[p] = merge(source[p], destination[p]);
				
			// if destination exists and source differs
			} else if( destination[p] && destination[p] !== source[p] ) {
				
				// if destination is already an array
				if(destination[p] instanceof Array ) {
					destination[p] = destination[p].concat(source[p]);
				} else {
					var temp = destination[p];
					destination[p] = [];
					destination[p].push(temp);
					destination[p] = destination[p].concat(source[p]);
				}
			// if destination doesn't exist, simply write
			} else if( !destination[p]) {
				destination[p] = source[p];
			}
		}

		return destination;
	}
}
