"use strict";

var React = require('react')
		, componentStyle = require('./component-style')
		, links;

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
		var links = this.props.links
			, keys = Object.keys(this.props.links)
			, labels = keys.map(function(label) {
				return (
					<li style={componentStyle.list}
							key={label}
							className="nav-link">
						<a href={label}
							 className={"nav-link-" + links[label].toLowerCase()}
							 dangerouslySetInnerHTML={{__html: links[label]}}>
						</a>
					</li>
				);
			});
		return (
			<div>
				<div id="capture-wheel"
						 ref="capt"
						 onWheelCapture={this.handleWheel.bind(this)}
						 style={componentStyle.capture}>
				</div>
				<nav id="react-nav-labels-container"
						 style={document.body.scrollTop > this.props.position ? componentStyle.navFixed : componentStyle.nav}>
					{labels}
				</nav>
			</div>
		)
	}
}

module.exports = {
	component: NavContainer
	, links: links
};
