import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './component/main/main'
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/store';
import {composeWithDevTools} from 'redux-devtools-extension'

const root = ReactDOM.createRoot(document.getElementById('root'));
localStorage.removeItem('user-token');
const store = createStore(reducer, composeWithDevTools());
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <Main /> 
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);