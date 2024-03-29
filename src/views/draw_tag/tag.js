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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawTag = void 0;
var react_1 = __importStar(require("react"));
var client_1 = require("../../axios/client");
require("./tag.less");
var antd_1 = require("antd");
var Search = antd_1.Input.Search;
var DrawTag = function () {
    var cn = [];
    var os = [];
    var _a = react_1.useState(cn), songs = _a[0], setSongs = _a[1];
    var _b = react_1.useState(true), CooKey = _b[0], setCooKey = _b[1];
    var _c = react_1.useState(10), song_count = _c[0], setSongCount = _c[1];
    var _d = react_1.useState(1), page = _d[0], setPage = _d[1];
    var _e = react_1.useState(10), pageSize = _e[0], setPageSize = _e[1];
    var _f = react_1.useState(os), options = _f[0], setoptions = _f[1];
    var _g = react_1.useState(""), searchValue = _g[0], setSearchValue = _g[1];
    var columns = [
        {
            title: 'value',
            dataIndex: 'value',
            key: 'id',
            render: function (value) { return react_1.default.createElement("div", { title: value },
                " ",
                value); }
        },
        {
            title: '名字',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            width: 400,
            render: function (_, _a) {
                var field = _a.field, type = _a.type, label = _a.label;
                return (react_1.default.createElement(react_1.default.Fragment, null, [field, type, label].map(function (tag) {
                    if (tag) {
                        var color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (react_1.default.createElement(antd_1.Tag, { color: color, key: tag }, tag.toUpperCase()));
                    }
                })));
            },
        }
    ];
    function startSongList() {
        return __awaiter(this, void 0, void 0, function () {
            var tag, tagData, datas, _i, tagData_1, t;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!CooKey) return [3, 2];
                        return [4, client_1.GetTag("")];
                    case 1:
                        tag = _a.sent();
                        tagData = tag.data.data;
                        datas = [];
                        for (_i = 0, tagData_1 = tagData; _i < tagData_1.length; _i++) {
                            t = tagData_1[_i];
                            datas = datas.concat(t.sheet_data);
                        }
                        setSongs(datas);
                        setSongCount(datas.length);
                        setoptions(tagData);
                        setCooKey(false);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
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
    function handleChange(value) {
        console.log("selected " + value);
    }
    ;
    return (react_1.default.createElement("div", { className: "selectmom" },
        options.map(function (op) {
            return (react_1.default.createElement(antd_1.Select, { mode: "multiple", allowClear: true, style: { width: '150px' }, placeholder: [op.name], defaultValue: [], onChange: handleChange, options: op.sheet_data }));
        }),
        react_1.default.createElement("div", { className: "left-box" },
            " ",
            react_1.default.createElement(Search, { placeholder: "input search text", onSearch: onSearch, style: {}, onChange: function (e) {
                    serchChange(e);
                } }),
            react_1.default.createElement(antd_1.Table, { dataSource: songs, columns: columns, rowKey: "id" }))));
};
exports.DrawTag = DrawTag;
//# sourceMappingURL=tag.js.map