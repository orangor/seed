"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
var login_1 = require("../views/login");
var login2_1 = require("../views/login2");
var home_1 = require("../views/home");
var plan_1 = require("../views/plan/plan");
var screencap_1 = require("../views/screencap/screencap");
var chat_1 = require("../views/chat/chat");
var index_1 = require("../views/selectmom/index");
var tag_1 = require("../views/draw_tag/tag");
var routers = [
    {
        path: "/",
        component: home_1.Home
    },
    {
        path: '/login',
        component: login_1.Login,
    },
    {
        path: '/login2',
        component: login2_1.Login2
    },
    {
        path: "/plan",
        component: plan_1.Plan
    },
    {
        path: "/screencap",
        component: screencap_1.Screencap
    },
    {
        path: "/chat",
        component: chat_1.Chat
    },
    {
        path: "/selectmom",
        component: index_1.Selectmom
    }, {
        path: "/draw_tag",
        component: tag_1.DrawTag
    }
];
exports.routers = routers;
//# sourceMappingURL=index.js.map