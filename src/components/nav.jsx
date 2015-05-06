"use strict";

var React = require('react/addons');

class NavContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {position: this.props.position}
	}
	handleWheel(e) {
		if (e < 0) {
			this.setState({position: this.state.position - e.deltaY})
		} else {
			this.setState({position: this.state.position + e.deltaY})
		}
	}
	render() {
		var scrolled = window.screenTop;

		var componentStyle = this.props.style
			,	links = this.props.links
			, keys = Object.keys(this.props.links)
			, labels = keys.map(function(label) {
				return (
					<li style={componentStyle.list}
							key={label}
							className="nav-link">
						<a href={label}
							 className={"nav-link-" + links[label].toLowerCase()}>
							{links[label]}
						</a>
					</li>
				);
			});
		return (
			<div>
				<div key={this.state.position} onWheelCapture={this.handleWheel.bind(this)} style={componentStyle.capture}>
				</div>
				<div style={this.state.position < 0 ? componentStyle.nav : componentStyle.navFixed}>
					{labels}
				</div>
				{this.state.position}
			</div>
		)
	}
}

module.exports = NavContainer;