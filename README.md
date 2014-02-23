groupBy.js
==========

Group an array of objects according to a common key

##About
Groups objects in an array according to a specific key,
merging identical fields, or creating an array.
It ignores non-object elements.

##Example
Let's say you have an array of objects:

	var array = [
		{ name : 'steve', email : 'steve@example.com' },
		{ name : 'joan', email : 'joan@example.com' },
		{ name : 'mary', email : 'mary@example.com' },
		{ name : 'steve', email : 'steve2@example.com' },
		{ name : 'steve', email : 'steve3@example.com' },
		{ otherkey : 'super' }
	];

array.groupBy(key) would return a new array:

	[
		{
			name  : 'steve', 
			email : [
				'steve@example.com', 
				'steve2@example.com', 
				'steve3@example.com'
			]
		},
		{ name : 'joan', email : 'joan@example.com' },
		{ name : 'mary', email : 'mary@example.com' }
	];
