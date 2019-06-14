import * as React from 'react';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import { Pin } from '..';
import styles from './map.module.scss';
const ApiKey = 'AjiVISxa4zRjYSKM3aG4dmRv7jIpR4fKZyrkH0u9p0-s2rn-Urh9Z7r769kyuE4D';
const Map = ReactMapboxGl({
	accessToken: 'pk.eyJ1Ijoicm9ia29zZXJtYW5zIiwiYSI6ImNqd3RyZTl3MjAzNng0NHBmMWpsZzY5cjIifQ.RX6saZAU3jNIjy_fRBZX2Q'
});
class MainMap extends React.Component {
	constructor(props) {
		super(props);

		const LIGHT_STYLE = 'mapbox://styles/mapbox/light-v9';
		const DARK_STYLE = 'mapbox://styles/mapbox/dark-v9';
		this.MY_STYLE = 'mapbox://styles/robkosermans/cjwv5af9f07nb1cp4h3qjiolc?optimize=true';

		const Map = ReactMapboxGl({
			accessToken: 'pk.eyJ1Ijoicm9ia29zZXJtYW5zIiwiYSI6ImNqd3RyZTl3MjAzNng0NHBmMWpsZzY5cjIifQ.RX6saZAU3jNIjy_fRBZX2Q'
		});

		//this.changeProfile = this.changeProfile.bind(this);
	}

	render() {
		return (
			<section className={styles.mapPane}>
				<Map
					style={this.MY_STYLE}
					containerStyle={{
						height: '100vh',
						width: '100vw'
					}}
					zoom={[16]}
					center={[4.659592, 52.156629]}
				>
					<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
						<Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
					</Layer>
				</Map>
			</section>
		);
	}
}

export { MainMap };
