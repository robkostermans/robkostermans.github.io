import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Header, Main, Footer } from '../';

class Holder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: 'developer'
		};

		this.changeProfile = this.changeProfile.bind(this);
	}

	changeProfile = profile => {
		this.setState({ profile: profile });
	};

	render() {
		const { theme, position } = this.props;
		return (
			<article className={' ' + theme} style={theme === 'fill' ? { clipPath: `circle(200px at ${position.x}px ${position.y}px)` } : {}}>
				<div class="col">
					<h1>Een front-end developer met passie voor user-centered design...</h1>
					{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo dui, mollis eget sem at, maximus pretium diam. Maecenas commodo iaculis aliquam. Fusce posuere accumsan gravida. Phasellus varius at elit non maximus. Sed pellentesque, tortor at dignissim venenatis, enim orci feugiat tellus, sed euismod nisl dolor sit amet ex. Nunc maximus leo nulla, dignissim porttitor mauris consectetur et. Integer quis tempor erat. Nulla bibendum accumsan aliquam. Pellentesque a commodo est. Vivamus mi urna, porttitor pretium odio quis, elementum condimentum magna. Aenean eget semper sapien, vel egestas purus. Nam laoreet turpis purus, tristique blandit quam elementum ut. Donec et metus in felis laoreet elementum nec at arcu. Pellentesque sed sapien sit amet lorem rutrum vehicula. In eleifend lorem et turpis condimentum lacinia vitae eu risus.</p> */}
					<h2>Ervaring</h2>
					{/* <p>18 jaar werkerving</p> */}
					{/* <p>Fusce nec pellentesque mi. Fusce scelerisque ante eu purus fringilla venenatis. Praesent varius odio risus, in tincidunt justo egestas ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit enim, volutpat quis velit ac, ultrices rhoncus turpis. Aenean eget pellentesque urna. Vivamus cursus nulla eget libero aliquam, vitae condimentum quam facilisis.</p> */}
					<h2>Opleiding</h2>
					{/* <p>Phasellus ullamcorper congue auctor. Cras lobortis sollicitudin est in scelerisque. Ut fringilla tempor enim sed vehicula. Duis venenatis dui sed elementum posuere. Curabitur vulputate purus in eros placerat viverra. Nam id augue vel lorem tincidunt bibendum a a felis. Praesent id ligula ac est elementum tincidunt eu faucibus metus. In lacus elit, congue vel fermentum aliquet, tincidunt ut leo. Nulla eleifend ligula convallis magna commodo ullamcorper. Praesent ac fermentum dui, vitae imperdiet neque. Praesent condimentum dui sed purus accumsan, in mollis nulla ullamcorper. Donec mattis pretium urna, ac molestie mi lacinia ac. Suspendisse ut leo metus. Mauris non fringilla tortor. Duis luctus egestas est convallis vehicula. Fusce mollis vel diam at maximus.</p> */}
					<h2>Skills</h2>
					{/* <p>Front-end developer met achtergrond in interaction design en consultcancy</p> */}
				</div>
				<div className="row">
					<div className="col col-4">
						<h2>Front-end</h2>
					</div>
					<div className="col col-4">
						<h2>Chatbots</h2>
					</div>
					<div className="col col-4">
						<h2>design</h2>
					</div>
				</div>
			</article>
		);
	}
}

export { Holder };
