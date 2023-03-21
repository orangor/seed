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
exports.Plan = void 0;
var react_1 = __importStar(require("react"));
var card_1 = require("../../components/card/card");
var client_1 = require("../../axios/client");
var Plan = function () {
    var cn = [];
    JSON.parse(JSON.stringify(cn));
    var _a = react_1.useState(cn), cards = _a[0], setCards = _a[1];
    var _b = react_1.useState(false), RT = _b[0], setRT = _b[1];
    var _c = react_1.useState(true), WebKey = _c[0], setWebKey = _c[1];
    if (WebKey) {
        client_1.GetCard({}).then(function (res) {
            var x_list = [];
            res.data.data.map(function (item, index) {
                client_1.GetCardCell({ id: item.id }).then(function (rex) {
                    var x = { name: item.name, id: item.id, nth: item.nth, list: rex.data.data };
                    x_list.push(x);
                    if (index === res.data.data.length - 1) {
                        setCards(x_list);
                    }
                });
            });
        });
        setWebKey(false);
    }
    function addCardNode(val) {
        var node = { name: val, nth: cards.length + 1 };
        client_1.AddCard(node).then(function (res) {
            console.log(res);
        });
        setCards(__spreadArrays(cards, [
            { name: val, list: [], nth: cards.length + 1, id: cards.length + 1 }
        ]));
    }
    return (react_1.default.createElement("div", { className: "plane" },
        cards.map(function (item, index) {
            return react_1.default.createElement(card_1.Card, { node: item, key: index + "cn", callbackRT: setRT, RT: RT });
        }),
        react_1.default.createElement("div", { className: "add_card_200" },
            react_1.default.createElement(card_1.Add_Card, { addNode: addCardNode }))));
};
exports.Plan = Plan;
//# sourceMappingURL=plan.js.map