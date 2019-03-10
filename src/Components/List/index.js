import React from 'react';

import styles from './list.module.scss';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section className={styles.list}>
				<h2>
					<span className={styles.number}>{this.props.number}</span> {this.props.title}
				</h2>
				<ul>{this.props.children}</ul>
			</section>
		);
	}
}

export { List };
