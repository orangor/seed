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
exports.Selectmom = void 0;
var react_1 = __importStar(require("react"));
var client_1 = require("../../axios/client");
require("../selectmom/index.less");
var antd_1 = require("antd");
var Search = antd_1.Input.Search;
var Selectmom = function () {
    var cn = [];
    var c = { id: 0,
        text: "",
        type: "",
        label: "" };
    var _a = react_1.useState(cn), songs = _a[0], setSongs = _a[1];
    var _b = react_1.useState(true), CooKey = _b[0], setCooKey = _b[1];
    var _c = react_1.useState(10), song_count = _c[0], setSongCount = _c[1];
    var _d = react_1.useState(1), page = _d[0], setPage = _d[1];
    var _e = react_1.useState(10), pageSize = _e[0], setPageSize = _e[1];
    var _f = react_1.useState(""), searchValue = _f[0], setSearchValue = _f[1];
    var columns = [
        {
            title: '名字',
            dataIndex: 'label',
            key: 'label',
            width: 200,
        },
        {
            title: '内容',
            dataIndex: 'text',
            key: 'text',
            render: function (text) { return react_1.default.createElement("div", { title: text },
                " ",
                text); }
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            width: 200,
            render: function (_, _a) {
                var type = _a.type;
                return (react_1.default.createElement(react_1.default.Fragment, null, [type].map(function (tag) {
                    var color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (react_1.default.createElement(antd_1.Tag, { color: color, key: tag }, tag.toUpperCase()));
                })));
            },
        }
    ];
    function startSongList() {
        if (CooKey) {
            client_1.GetGoodSentences({ like_total: searchValue, start: (page - 1) * pageSize, size: pageSize }).then(function (rex) {
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
    function onSearch(value) {
        setCooKey(true);
        setPage(1);
        startSongList();
    }
    function serchChange(e) {
        e.persist();
        setTimeout(function () {
            console.log(e.target.value);
            setSearchValue(e.target.value);
        }, 100);
    }
    return (react_1.default.createElement("div", { className: "selectmom" },
        react_1.default.createElement("div", { className: "left-box" },
            " ",
            react_1.default.createElement(Search, { placeholder: "input search text", onSearch: onSearch, style: {}, onChange: function (e) {
                    serchChange(e);
                } }),
            react_1.default.createElement(antd_1.Table, { dataSource: songs, columns: columns, rowKey: "id", pagination: false }),
            react_1.default.createElement(antd_1.Pagination, { current: page, total: song_count, onChange: onChange, pageSizeOptions: [String(10), String(20)], pageSize: pageSize }))));
};
exports.Selectmom = Selectmom;
//# sourceMappingURL=index.js.map