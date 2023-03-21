"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Tag = function Tag(props) {
    return (react_1.default.createElement("div", { className: props.css + " tag" },
        react_1.default.createElement(react_router_dom_1.Link, { to: props.data.link },
            react_1.default.createElement("button", { className: "custom-btn btn-17  " + (props.isTouch === props.data.name ? "isTouchBar" : ""), onClick: function () { props.onTouch(props.data.name); } },
                react_1.default.createElement("span", null, props.data.name))),
        react_1.default.createElement("div", { className: "cell-list " }, props.data.list.map(function (item, i) {
            return react_1.default.createElement("div", { key: i, className: "cell", onClick: function () {
                    if (item.url) {
                        var w = window.open('about:blank');
                        w.location.href = item.url;
                    }
                } }, item.name);
        }))));
};
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map