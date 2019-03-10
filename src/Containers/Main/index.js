import React, { Component } from 'react';
import { List, ListItem } from '../../Components';
import './Main.scss';

class Main extends Component {
	render() {
		return (
			<main>
				<section className="Container">
					<List number="01." title="Opleiding" />
					<List number="02." title="Ervaring" />
					js,css,html, reactjs, angular, vuejs, gulp,webpack,npm, php,mvc (per skill, proficiency, opmekringen(scss,less, xhhtml))
					<List number="03." title="Projecten" />
					<List number="04." title="Skills">
						<ListItem abbr="JS" color="red" title="Javascript" description="toelichting..." />
						<ListItem abbr="CSS" color="blue" title="Cascading Stylesheets" description="toelichting..." />
					</List>
				</section>
			</main>
		);
	}
}

export { Main };
