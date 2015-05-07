"use strict";

var React = require('react/addons');

function endOfPage() {
	return window.innerHeight + document.body.scrollTop >= document.body.offsetHeight;
}

class NavContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {position: document.body.scrollTop}
	}
	handleWheel(e) {
		this.setState({position: document.body.scrollTop})
	}
	render() {
		console.log("scrollTop is " + document.body.scrollTop)
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
				<div id="capture-wheel" onWheelCapture={this.handleWheel.bind(this)} style={componentStyle.capture}>
				</div>
				<div style={document.body.scrollTop > this.props.position + 40 ? componentStyle.navFixed : componentStyle.nav}>
					{labels}
				</div>
				{this.state.position}
			</div>
		)
	}
}

module.exports = NavContainer;
