import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OpenViduPage from './openvidupage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OpenViduPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
