console.clear();
import 'css/base.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './js/components/App.jsx';

console.log("Initialized.");

ReactDOM.render(<App/>, document.getElementById('page'));