var React = require('react')
		, componentStyle = require('./style');

var NavContainer = React.createClass({
	getInitialState: function() {
		return {
			position: window.pageYOffset
		};
	},
	componentDidMount: function() {
		this.setState({height: this.refs.capt.getDOMNode().offsetWidth});
	},
	handleWheel: function(e) {
		this.setState({position: window.pageYOffset});
	},
	render: function() {
		return (
			<div>
				<div id="capture-wheel"
						 ref="capt"
						 onWheelCapture={this.handleWheel}
						 style={componentStyle.capture}>
				</div>
				<nav id="navigation"
						 style={window.pageYOffset > this.props.position ? componentStyle.navFixed : componentStyle.nav}>
					{this.props.children}
				</nav>
			</div>
		)
	}
})

module.exports = NavContainer;