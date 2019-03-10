import React, { Component } from 'react';

import './Footer.scss';

class Footer extends Component {
	render() {
		return (
			<footer>
				<span>{this.props.children}</span>
			</footer>
		);
	}
}

export { Footer };
