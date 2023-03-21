"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var tag_1 = require("../components/tag");
var const_1 = require("../const/const");
var index_1 = require("../router/index");
var Head = function () {
    var _a = react_1.useState(const_1.HEADE[0].name), isTouch = _a[0], setTouch = _a[1];
    function onTouch(value) {
        setTouch(value);
    }
    return (react_1.default.createElement("div", { className: "heade " }, const_1.HEADE.map(function (item, index) {
        return react_1.default.createElement(tag_1.Tag, { data: item, onTouch: onTouch, isTouch: isTouch, css: "" + ("color_" + const_1.GET_COLOR().name), key: index });
    })));
};
var App = function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.HashRouter, null,
            react_1.default.createElement(Head, null),
            react_1.default.createElement("div", { className: "seed-content" }, index_1.routers.map(function (router, i) {
                return (react_1.default.createElement(react_router_dom_1.Route, { key: i, exact: true, path: router.path, component: router.component }));
            })))));
};
exports.App = App;
//# sourceMappingURL=App.js.map