import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/counterReducer';


let store = createStore(reducer);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}>
    <App />

  </Provider>, document.getElementById('root'));

registerServiceWorker();
