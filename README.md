groupBy.js
==========

Group an array of objects according to a common key

##About
Easily group an array of objects according to a common key. No duplication of identical fields, and automatic array creation when fields with the same key clash. It ignores non-object elements and concatenates arrays in fields on merge.

##Example
Let's say you have an array of objects:

```javascript
	var array = [
		{ name : 'steve', email : 'steve@example.com' },
		{ name : 'joan', email : 'joan@example.com' },
		{ name : 'mary', email : 'mary@example.com' },
		{ name : 'steve', email : ['steve2@example.com', 'steve3@example.com'] },
		{ otherkey : 'super' }
	];
```

```array.groupBy('name')``` would return a new array:

```javascript
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
```

##Warning
- Any object in the array not containing the key **will not be included** in the output array.
- By design, groupBy will merge two objects with the same key but different values into an array.
- If either (or both) field is an array, it will concat the two. This means it **will always produce a flat array**.

###Examples of output
Two fields are strings
```javascript
	var a = { key : 'admin', word : 'hello' }
	var b = { key : 'admin', word : 'world' }
	var c = { key : 'user', word : 'sweet' }
	
	[a,b,c].groupBy('key') => 
	[
		{ key : 'admin', word : ['hello','world'] },
		{ key : 'user', word : 'sweet' }
	]
```

One field is an array
```javascript
	var a = { key : 'admin', word : [1,2,3] }
	var b = { key : 'admin', word : ['string', 4] }
	[a,b].groupBy('key') => [{key : admin, word : [1,2,3,'string',4]}]	
```	

