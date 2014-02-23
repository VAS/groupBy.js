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

array.groupBy('name') would return a new array:

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

##Warning
- Any object in the array not containing the key **will not be included** in the output array.
- By design, groupBy will merge two objects with the same key but different values into an array.
- If either (or both) field is an array, it will concat the two. This means it **will always produce a flat array**.

###Examples of output
Two fields are strings

	var a = { key : 'admin', word : 'hello' }
	var b = { key : 'admin', word : 'world' }
	[a,b].groupBy('key') => [{key : 'admin', word : ['hello','world']}]
	
One field is an array

	var a = { key : 'admin', word : [1,2,3] }
	var b = { key : 'admin', word : ['string', 4] }
	[a,b].groupBy('key') => [{key : admin, word : [1,2,3,'string',4]}]	
	

