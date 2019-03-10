import React, { Component } from 'react';
import { Header, Main, Footer } from '../';

import './App.scss';

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
			<section className="Resume">
				<Header className="App-header" profile={this.state.profile} changeProfile={this.changeProfile} />

				<Main />

				<Footer>footer/samenvatting</Footer>
			</section>
		);
	}
}

export { App };
