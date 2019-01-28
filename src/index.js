import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const weather = document.getElementById('root');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Weather} />
	</Router>
	, weather);

serviceWorker.unregister();
