import React, { Component } from 'react';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import { Holder } from '../';

import './App.scss';
import '../../Themes/paper.scss';
//import fill from '../../Themes/fill.module.scss';

class App extends Component {
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
		return (
			<section id="app">
				<ReactCursorPosition
					activationInteractionMouse={INTERACTIONS.HOVER} //default
					hoverDelayInMs={250} //default: 0
					hoverOffDelayInMs={150} //default: 0
				>
					<Holder theme="sketch" />
					{/* <Holder theme="fill" /> */}
				</ReactCursorPosition>
			</section>
		);
	}
}

export { App };
