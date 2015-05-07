"use strict";

var React = require('react/addons');

var NavContainer = require('./components/nav.jsx')

var links = {
	"/home.html": "Home"
	,	"/blog.html": "Blog"
	, "/about.html": "About"
	, "/foo.js": "Foo"
	, "/bar.js": "Bar"
	, "/bar1.js": "Bar1fdfg"
	, "/bar2.js": "Bar2"
};

var componentStyle = {
	capture: {
		position: 'fixed'
		, top: 0
		, height: '100%'
		, width: '100%'
		, background: 'none'
	}
	, nav: {
		top: 0
		, width: '100%'
		, textAlign: 'center'
	}
	, navFixed: {
		position: 'fixed'
		, top: 100
		, margin: '0 auto auto'
		, width: '100%'
		, textAlign: 'center'
	}
	, list: {
		zIndex: 200
		, display: 'inline'
		, margin: 50 / (Object.keys(links).length * 2) + "%"
		, listStyleType: 'none'
	}
}


React.render(
	<NavContainer style={componentStyle} links={links} position={100} />
	, document.getElementById('anchor')
);