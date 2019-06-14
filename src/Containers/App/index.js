import React, { Component } from 'react';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import { Holder } from '../';
import { MainMap } from '../../Components';

//import './App.scss';
//import '../../Themes/paper.scss';
import styles from './app.module.scss';
//import global from '../../Themes/build.module.scss';

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
		const styles = {
			width: '100%',
			height: '536px'
		};

		return (
			<section id="app" className={styles.app}>
				<h1>
					<span className={global.raiseText}>Nice</span>
					<span>title</span>
				</h1>
				<div style={styles}>
					<MainMap />
				</div>
			</section>
		);
	}
}

export { App };
