import React, { Component } from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import styles from './Header.module.scss';
/*
sticky scroll: hello, my name is Rob sticky header wanneer naar boven ander volle zin

*/

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<header className={styles.header}>
				<section className="Container">
					<h1>
						<span className={styles.logo}>Hallo</span>
						<div className={styles.headline}>ik ben xx en ik ben een {this.props.profile}</div>
					</h1>
					<button onClick={() => this.props.changeProfile('designer')}>Designer</button>
					<button onClick={() => this.props.changeProfile('developer')}>Developer</button>
					<ul>
						<li>Naam</li>
						<li>Leeftijd</li>
						<li>E-mail</li>
						<li>Wonplaats</li>
					</ul>
				</section>
			</header>
		);
	}
}

export { Header };
