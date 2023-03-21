"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./css/style.css");
require("./css/nice.css");
require("./less/app.less");
require("antd/dist/antd.css");
require("./less/btn.less");
require("./css/css3-ink-button/css/style.css");
require("./css/css3-3d-svg-button/css/style.less");
require("./css/16-css3-animated-buttons/style.less");
var print_1 = __importDefault(require("./utils/print"));
var App_1 = require("./views/App");
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
function component(id) {
    var element = document.createElement('div');
    element.id = id;
    var button = document.createElement('button');
    var br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    element.appendChild(br);
    element.appendChild(button);
    button.onclick = print_1.default.bind(null, 'Hello webpack!');
    return element;
}
var element = component('root');
document.body.appendChild(element);
react_dom_1.default.render(react_1.default.createElement(App_1.App, null), document.getElementById('root'));
//# sourceMappingURL=main.js.map