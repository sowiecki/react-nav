var links = require('./react-nav.jsx')

module.exports = {
	capture: {
		position: 'fixed'
		, top: 0
		, height: '100%'
		, width: '100%'
		, background: 'none'
	}
	, nav: {
		position: 'relative'
		, top: 0
		, width: '100%'
		, textAlign: 'center'
    , transition: 'opacity .5s ease-in'
    , transition: 'all .5s ease .2s'
	}
	, navFixed: {
		position: 'fixed'
		, top: 0
		, margin: '0 auto auto'
		, width: '100%'
		, textAlign: 'center'
	}
	, list: {
		display: 'inline'
		, margin: 50 / (Object.keys(links).length * 2) + "%"
		, listStyleType: 'none'
	}
}