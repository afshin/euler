euler.js (mostly using node.js)
===============================

These are my answers to [Project Euler](http://projecteuler.net/) problems as I do them. They're probably not the 
best or most elegant solutions. Nonetheless, please don't cheat if you've been assigned these problems as homework.

Most of my answers are in JavaScript using [node.js](http://nodejs.org/). Some of the problems are solved in other
languages. Some problems have answers in multiple languages because that's just how I ended up working on them. But 
most are JavaScript and use the euler.js framework. To use euler.js, import it:

	require('./common/euler').run(function (input) {/* your code here */});

Whatever your function returns will be displayed along with the time (in ms) that it took to execute.

If there is a .txt file whose name matches the .js file running (e.g. 067.js and 067.txt) then the contents of that
file will be passed into your function (the "input" parameter in the example above).

Also, if you want to pipe input into your .js file via stdin, use the -in flag. For example, the output of 020.py is
piped into 020.js like so:

	python 020.py | node 020.js -in

There are a bunch of utility functions in euler.js that are passed into your code function as the scoped "this" object.
So for example:

	require('./common/euler').run(function () {return [1, 2, 3, 4, 5, 6, 7].filter(this.is_prime);});
	// output:
	// 2,3,5,7
	// It took 0ms

The functions are not yet documented ;-)