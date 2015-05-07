"use strict";

var React = require('react/addons')
	, NavContainer = require('./components/react-nav.jsx').component;

var links = {
	"/home.html": "<i>icon</i> Home"
	,	"/blog.html": "<i>icon</i> Blog"
	, "/about.html": "<i>icon</i> About"
	, "/foo.js": "<i>icon</i> Foo"
	, "/bar.js": "<i>icon</i> Bar"
	, "/bar1.js": "<i>icon</i> Bar1fdfg"
	, "/bar2.js": "<i>icon</i> Bar2"
};

React.render(
	<NavContainer links={links} position={190} />
	, document.getElementById('anchor')
);