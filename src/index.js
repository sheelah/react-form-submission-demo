import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { env } from './config';

ReactDOM.render(<App env={env} />, document.getElementById('root'));

registerServiceWorker();
