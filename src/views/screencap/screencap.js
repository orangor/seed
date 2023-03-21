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
exports.Screencap = void 0;
var react_1 = __importStar(require("react"));
var client_1 = require("../../axios/client");
require("../screencap/screencap.less");
var antd_1 = require("antd");
var Search = antd_1.Input.Search;
var Screencap = function () {
    var cn = [];
    var c = { id: 0,
        text: "",
        type: "",
        label: ""
    };
    var _a = react_1.useState(cn), songs = _a[0], setSongs = _a[1];
    var _b = react_1.useState(true), CooKey = _b[0], setCooKey = _b[1];
    var _c = react_1.useState(10), song_count = _c[0], setSongCount = _c[1];
    var _d = react_1.useState(1), page = _d[0], setPage = _d[1];
    var _e = react_1.useState(20), pageSize = _e[0], setPageSize = _e[1];
    var _f = react_1.useState(c), songCell = _f[0], setSongCell = _f[1];
    var columns = [
        {
            title: 'text',
            dataIndex: 'text',
            key: 'text'
        }
    ];
    function startSongList() {
        if (CooKey) {
            client_1.GetGoodSentences({ like_total: "", start: (page - 1) * pageSize, size: pageSize }).then(function (rex) {
                console.log(rex.data.data);
                setSongs(rex.data.data.list);
                setSongCount(rex.data.data.count);
            });
            setCooKey(false);
        }
    }
    startSongList();
    function onChange(index, size) {
        setPage(index);
        setPageSize(size);
        setCooKey(true);
    }
    function cellClick(cell) {
        setSongCell(cell);
    }
    function onSearch(value) {
        if (value !== "") {
            client_1.GetGoodSentencesLike({ like_total: value }).then(function (rex) {
                console.log(rex.data.data);
                setSongs(rex.data.data.list);
                setSongCount(rex.data.data.list.length);
            });
        }
        else {
            setCooKey(true);
            startSongList();
        }
    }
    return (react_1.default.createElement("div", { className: "screencap" },
        react_1.default.createElement("div", { className: "left-box" },
            " ",
            react_1.default.createElement(Search, { placeholder: "input search text", onSearch: onSearch, style: { width: 200 } }),
            react_1.default.createElement(antd_1.Table, { dataSource: songs, columns: columns, rowKey: "id" })),
        react_1.default.createElement("div", { className: "grid" },
            react_1.default.createElement("div", { className: "song_box" }, songs.map(function (s, index) {
                return react_1.default.createElement("div", { key: index + "s" },
                    react_1.default.createElement("button", { onClick: function () {
                            cellClick(s);
                        } },
                        react_1.default.createElement("span", null, s.label)));
            })),
            react_1.default.createElement("div", { className: "pagination_box" },
                react_1.default.createElement(antd_1.Pagination, { defaultCurrent: 1, total: song_count, onChange: onChange, pageSizeOptions: ["20", "50"], pageSize: pageSize }))),
        react_1.default.createElement("div", { className: "right-box" },
            react_1.default.createElement("div", { className: "labelText" }, songCell.text),
            react_1.default.createElement("div", { className: "labelLabel" }, (songCell.label ? "---------" : "") + songCell.label + (songCell.label ? "---------" : "")))));
};
exports.Screencap = Screencap;
//# sourceMappingURL=screencap.js.map