## Getting started
```jsx
"use strict";

var React = require('react')
	, NavContainer = require('react-nav').component;

var links = {
	"/foo.html": "Foo"
	,	"/bar.html": "Bar"
	, "/fizz.html": "Fizz"
	, "/buzz.js": "Buzz"
};

React.render(
	<NavContainer links={links} position={190} />
	, document.getElementById('anchor')
);
```
Pass to ```position``` the value of pixels the component is rendered from the top of the page.