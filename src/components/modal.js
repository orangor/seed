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
exports.Modal2 = exports.Modal1 = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var TextArea = antd_1.Input.TextArea;
var Modal1 = function (data) {
    var _a = react_1.useState(false), isModalVisible = _a[0], setIsModalVisible = _a[1];
    var showModal = function () {
        setIsModalVisible(true);
    };
    var handleOk = function () {
        setIsModalVisible(false);
    };
    var handleCancel = function () {
        setIsModalVisible(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Button, { type: "primary", onClick: showModal }, "Open Modal"),
        react_1.default.createElement(antd_1.Modal, { title: "Basic Modal", visible: isModalVisible, onOk: handleOk, onCancel: handleCancel },
            react_1.default.createElement("p", null, data.name),
            react_1.default.createElement("p", null, "Some contents..."),
            react_1.default.createElement("p", null, "Some contents..."))));
};
exports.Modal1 = Modal1;
var Modal2 = function (parps) {
    var _a = react_1.useState(false), isModalVisible = _a[0], setIsModalVisible = _a[1];
    var handleOk = function () {
        setIsModalVisible(false);
    };
    function handleCancel() {
        setIsModalVisible(false);
    }
    ;
    var _b = react_1.useState(false), isModalVisible2 = _b[0], setIsModalVisible2 = _b[1];
    var showModal = function (e) {
        console.log(e.button);
        var elef = e.clientX;
        var etop = e.clientY;
        document.oncontextmenu = function (e) {
            return false;
        };
        if (e.button == 2) {
            setIsModalVisible2(true);
        }
        else if (e.button == 0) {
            setIsModalVisible(true);
        }
    };
    var handleOk2 = function () {
        setIsModalVisible2(false);
    };
    var handleCancel2 = function () {
        setIsModalVisible2(false);
    };
    function change(event) {
        console.log("vv", event.target.value);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: parps.item.cell_id, onClick: showModal, onMouseUp: showModal, draggable: "true", className: "card-cell" }, parps.item.name),
        react_1.default.createElement(antd_1.Modal, { title: "\u4EFB\u52A1\u8BE6\u60C5", visible: isModalVisible, onOk: handleOk, onCancel: handleCancel, okText: "\u786E\u8BA4", cancelText: "\u53D6\u6D88" },
            react_1.default.createElement("p", null,
                "\u4E3B\u9898\uFF1A",
                parps.item.name),
            react_1.default.createElement("p", null,
                "\u63CF\u8FF0\uFF1A",
                parps.item.context),
            react_1.default.createElement("p", null,
                "\u5F00\u59CB\u65F6\u95F4:",
                parps.item.create_time,
                " ")),
        react_1.default.createElement(antd_1.Modal, { title: "\u4EFB\u52A1\u8BE6\u60C5", visible: isModalVisible2, onOk: handleOk2, onCancel: handleCancel2, okText: "\u4FDD\u5B58", cancelText: "\u53D6\u6D88" },
            react_1.default.createElement(antd_1.Input, { defaultValue: parps.item.name }),
            react_1.default.createElement(TextArea, { rows: 4, defaultValue: parps.item.context, onChange: change }))));
};
exports.Modal2 = Modal2;
//# sourceMappingURL=modal.js.map