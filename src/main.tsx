
//import * as math from './math/math.js';

import React from "react";
import ReactDOM from "react-dom";
import './css/style.css';
import './css/nice.css';
import "./less/app.less"
import Print from './utils/print';
import { App } from "./views/App"
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
function component(id: any) {
    var element = document.createElement('div');
    element.id = id;
    var button = document.createElement('button');
    var br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);
    button.onclick = Print.bind(null, 'Hello webpack!');
    return element;
}

var element = component('root');
document.body.appendChild(element);
ReactDOM.render(
    <App />,
    document.getElementById('root')
)


