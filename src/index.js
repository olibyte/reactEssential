import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

ReactDOM.render(
    <div style={style}>
        <h1 id="heading-element">Hello World!</h1>
        <p>We're glad you're here!</p>
    </div>,
    document.getElementById('root')
);