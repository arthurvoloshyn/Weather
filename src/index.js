import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';

const weather = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter>
		<Route exact path="/" component={Weather} />
	</BrowserRouter>
	, weather);

serviceWorker.unregister();
