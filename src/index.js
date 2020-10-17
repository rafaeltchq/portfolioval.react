import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const [ loading, setLoading ] = useState(true);
// function isLoading() {
//   setLoading(false);
  // useEffect(() => {
    // isLoading();
    // console.log('in');
  // },[])
// }
ReactDOM.render(
  <React.StrictMode>
    <App
    // isActive={loading}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
