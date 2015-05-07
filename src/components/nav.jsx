"use strict";

var React = require('react/addons');

class NavContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {position: this.props.position}
	}
	handleWheel(e) {
		if (e.deltaY >= 0) {
			this.setState({position: this.state.position + 1})
		} else if (this.state.position < this.props.position + 1) {
			this.setState({position: this.state.position})
		} else {
			this.setState({position: this.state.position - 1})
		}
		console.log(this.state.position)
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
				<div style={this.state.position <= this.props.position + 10 ? componentStyle.nav : componentStyle.navFixed}>
					{labels}
				</div>
				{this.state.position}
			</div>
		)
	}
}

module.exports = NavContainer;