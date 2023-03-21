"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DANCE_KEY = exports.GET_COLOR = exports.HEADE = void 0;
var HEADE = [{
        name: "CG",
        link: "/",
        list: []
    },
    {
        name: "AE",
        link: "/login",
        list: [
            {
                name: "React",
                url: "https://react.docschina.org/docs/hello-world.html"
            },
            {
                name: "Vue",
                url: "https://cn.vuejs.org/v2/guide/"
            },
            {
                name: "TS",
                url: "https://www.tslang.cn/docs/home.html"
            },
            { name: "Node", url: "http://nodejs.cn/api/" },
            { name: "Golange", url: "http://docscn.studygolang.com/doc/" },
            {
                name: 'JS', url: "https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API"
            },
            {
                name: "AntDesing", url: "https://ant.design/components/overview-cn/"
            },
            {
                name: "翻译", url: "https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#auto/zh/"
            }
        ]
    }, {
        name: "HT",
        link: "",
        list: []
    },
    {
        name: "计划",
        link: "/plan",
        list: []
    },
    {
        name: "音乐",
        link: "/screencap",
        list: []
    },
    {
        name: "聊天",
        link: "/chat",
        list: []
    }, {
        name: "搜索",
        link: "/selectmom",
        list: []
    }, {
        name: "AI绘图",
        link: "/draw_tag",
        list: []
    }
];
exports.HEADE = HEADE;
var color_json_1 = __importDefault(require("../json/color.json"));
var GET_COLOR = function () {
    return color_json_1.default.colors[Math.floor(Math.random() * color_json_1.default.colors.length)];
};
exports.GET_COLOR = GET_COLOR;
var DANCE_KEY = {
    YES: 1,
    NO: 2
};
exports.DANCE_KEY = DANCE_KEY;
//# sourceMappingURL=const.js.map