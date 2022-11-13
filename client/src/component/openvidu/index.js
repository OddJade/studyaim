import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import OpenViduPage from  './openvidupage'

ReactDOM.render(<OpenViduPage />, document.getElementById('root'));
registerServiceWorker();
