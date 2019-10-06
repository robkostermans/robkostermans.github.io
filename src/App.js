import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Preview from './Preview';
import Home from './container/home';
import Help from './Help';
import NotFound from './NotFound';

const App = props => (
	<Router>
		<Switch>
			{/* <Redirect exact from="/" to="/home" /> */}
			<Route exact path="/" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />
			<Route exact path="/help" component={Help} />
			<Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

export default App;
