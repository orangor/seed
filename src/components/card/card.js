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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.Add_Card = void 0;
var react_1 = __importStar(require("react"));
var const_1 = require("../../const/const");
var client_1 = require("../../axios/client");
var modal_1 = require("../modal");
function Add_Card(props) {
    var _a = react_1.useState(false), isClick = _a[0], setClick = _a[1];
    var _b = react_1.useState(""), value = _b[0], setValue = _b[1];
    var inp;
    var inputRef = react_1.useRef(inp);
    function cardOnClick() {
        setClick(true);
        setTimeout(function () { inputRef.current.focus(); });
    }
    function cardOutClick(type) {
        if (type === const_1.DANCE_KEY.YES) {
            if (value) {
                setClick(false);
                props.addNode(String(value));
            }
        }
        else {
            setClick(false);
        }
        setValue("");
    }
    function handKeyDown(e) {
        if (e.keyCode === 13 && value) {
            setClick(false);
            props.addNode(String(value));
        }
    }
    function change(event) {
        setValue(event.target.value);
    }
    if (isClick) {
        return (react_1.default.createElement("div", { className: "add-card-process" },
            react_1.default.createElement("form", null,
                react_1.default.createElement("input", { className: "dance-input", placeholder: "\u8BF7\u8F93\u5165\u5217\u8868\u6807\u9898....", ref: inputRef, onKeyDown: function (e) { return handKeyDown(e); }, type: "text", onChange: change }),
                react_1.default.createElement("div", { className: "dance-button-box" },
                    react_1.default.createElement("div", { className: "dance-button-yes", onClick: function () { cardOutClick(const_1.DANCE_KEY.YES); } }, "\u6DFB\u52A0\u5217\u8868"),
                    react_1.default.createElement("div", { className: "dance-button-no", onClick: function () { cardOutClick(const_1.DANCE_KEY.NO); } }, "X")))));
    }
    else {
        return (react_1.default.createElement("div", { className: "add_card", onClick: cardOnClick },
            react_1.default.createElement("div", { className: "title" }, "+  添加卡片")));
    }
}
exports.Add_Card = Add_Card;
function Card(parps) {
    var cl = [];
    var _a = react_1.useState(cl), list = _a[0], setList = _a[1];
    var _b = react_1.useState(false), self = _b[0], setSelf = _b[1];
    function addNode(val) {
        var idx = Math.ceil(Math.random() * 100000) + 1;
        console.log(parps.node);
        client_1.AddCardCell({ card_id: parseInt(parps.node.id), name: val });
        setList(__spreadArrays(list, [{ name: val, id: idx, nth: list.length, card_id: parps.node.id, context: "" }]));
    }
    function allowDrop(ev) {
        ev.preventDefault();
    }
    function drag(ev) {
        ev.dataTransfer.setData("item_name", ev.target.innerHTML);
        ev.dataTransfer.setData("item_id", ev.target.id);
    }
    function drag_end(ev) {
        if (self) {
            setSelf(false);
        }
        else {
            var newList_1 = [];
            list.forEach(function (item) {
                if (item.id !== ev.target.id) {
                    newList_1.push(item);
                }
            });
            if (parps.RT) {
                setList(newList_1);
            }
        }
        parps.callbackRT(false);
    }
    function drop(ev) {
        ev.preventDefault();
        var cell = { name: "", id: 1, nth: 0, card_id: parps.node.id, context: "" };
        cell.name = ev.dataTransfer.getData("item_name");
        cell.id = ev.dataTransfer.getData("item_id");
        var new_list = [];
        var ids = list.map(function (item) {
            return item.id;
        });
        var haveId = ids.indexOf(cell.id);
        var nth = ids.indexOf(ev.target.id);
        console.log(haveId, nth);
        if (nth === -1) {
            if (haveId === -1) {
                setSelf(false);
                new_list = list;
                new_list.push(cell);
                parps.callbackRT(true);
            }
            return;
        }
        if (haveId === -1) {
            setSelf(false);
            console.log(1, self);
            new_list = list;
            new_list.splice(nth, 0, cell);
        }
        else {
            setSelf(true);
            list.map(function (item, i) {
                if (haveId >= nth) {
                    if (i === nth) {
                        new_list.push(cell, item);
                    }
                    else {
                        new_list.push(item);
                    }
                }
                else {
                    if (i === nth) {
                        new_list.push(item, cell);
                    }
                    else {
                        new_list.push(item);
                    }
                }
            });
            if (haveId >= nth) {
                new_list.splice(haveId + 1, 1);
            }
            else {
                new_list.splice(haveId, 1);
            }
        }
        setList(new_list);
        parps.callbackRT(true);
    }
    var editCallback = function (item) { };
    var deleteCallback = function (item) { };
    var cancelCallback = function (item) { };
    var getRightMenuBtns = function () {
        var btns = [
            {
                text: "编辑",
                key: "left",
                handleClick: editCallback,
            },
            {
                text: "删除",
                key: "right",
                handleClick: deleteCallback,
            },
            {
                text: "取消",
                key: "orther",
                handleClick: cancelCallback,
            },
        ];
        var res = btns.map(function (item) {
            return (react_1.default.createElement("li", { onClick: function () { return item.handleClick(item.key); }, key: item.key }, item.text));
        });
        return __spreadArrays(res);
    };
    var cc = parps.node.list;
    var _c = react_1.useState(true), WebKey = _c[0], setWebKey = _c[1];
    if (WebKey) {
        setTimeout(function () { setList(cc); });
        setWebKey(false);
    }
    return (react_1.default.createElement("div", { className: "card", onDragStart: drag, onDrop: drop, onDragOver: allowDrop },
        react_1.default.createElement("div", { className: "title" }, parps.node.name),
        react_1.default.createElement("div", { className: "card-contact-box" },
            react_1.default.createElement("div", { className: "content", id: "div1" }, list.map(function (item, index) {
                return react_1.default.createElement("div", { key: index },
                    react_1.default.createElement(modal_1.Modal2, { item: item, index: index }));
            })),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Add_Card, { addNode: addNode })))));
}
exports.Card = Card;
//# sourceMappingURL=card.js.map