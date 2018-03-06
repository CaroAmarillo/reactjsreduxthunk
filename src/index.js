import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/peopleReducer';
import thunk from "redux-thunk";


//let store = createStore(reducer);
const createStoreWithMidddleware = applyMiddleware(thunk)(createStore);


const store = createStoreWithMidddleware(reducer);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}>
    <App />

  </Provider>, document.getElementById('root'));

registerServiceWorker();
