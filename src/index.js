import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import thunk from "redux-thunk";
// import {createStore, applyMiddleware} from "redux";
// import {reducer} from "./reducers/flightreducer";
// import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
