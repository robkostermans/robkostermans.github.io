import React from 'react';

import styles from './listitem.module.scss';

class ListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<li>
				<span className={styles.icon}>{this.props.abbr}</span>
				<span>{this.props.title}</span>
			</li>
		);
	}
}

export { ListItem };
