import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import Weather from './containers/Weather';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

ReactDOM.render(<Weather />, document.getElementById('root'));

serviceWorker.register();
