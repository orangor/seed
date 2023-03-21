"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
var react_1 = __importDefault(require("react"));
var tip_1 = require("../components/tip");
var antd_1 = require("antd");
var tips = [{ name: "JZ", link: "/" }, { name: "SF", link: "/login" }];
var Page1 = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(antd_1.Button, null, "Button"),
        tips.map(function (item, i) {
            return (react_1.default.createElement(tip_1.Tip, { data: item, key: i }));
        })));
};
var Home = function () {
    return (react_1.default.createElement("div", { className: "home" },
        react_1.default.createElement(Page1, null)));
};
exports.Home = Home;
//# sourceMappingURL=home.js.map