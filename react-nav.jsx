"use strict";

var React = require('react')
		, componentStyle = require('./style');

class NavContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			position: document.body.scrollTop
		}
	}
	componentDidMount() {
		this.setState({height: this.refs.capt.getDOMNode().offsetWidth})
	}
	handleWheel(e) {
		this.setState({position: document.body.scrollTop})
	}
	render() {
		return (
			<div>
				<div id="capture-wheel"
						 ref="capt"
						 onWheelCapture={this.handleWheel.bind(this)}
						 style={componentStyle.capture}>
				</div>
				<nav id="react-nav-labels-container"
						 style={document.body.scrollTop > this.props.position ? componentStyle.navFixed : componentStyle.nav}>
					{this.props.children}
				</nav>
			</div>
		)
	}
}

module.exports = NavContainer;