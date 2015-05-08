var React = require('react')
    , NavContainer = require('./react-nav.js');

React.render(
    <NavContainer position={100}>
    	<a href="/"><i className="fa fa-home"></i>Home</a>
    	<a href="/"><i className="fa fa-home"></i>Services</a>
    </NavContainer>
    , document.getElementById('anchor')
);