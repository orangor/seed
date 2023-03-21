"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollBox = void 0;
var react_1 = __importDefault(require("react"));
function RollBox(parps) {
    var rb = { w: 10, h: 10 };
    var li = [];
    function addNode(val) {
    }
    return (react_1.default.createElement("div", { className: "roll-box" },
        react_1.default.createElement("div", { className: "title" }, parps.name)));
}
exports.RollBox = RollBox;
//# sourceMappingURL=roll.js.map