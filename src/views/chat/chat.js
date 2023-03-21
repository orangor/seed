"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
var react_1 = __importDefault(require("react"));
require("../chat/chat.less");
var antd_1 = require("antd");
var react_2 = require("swiper/react");
require("swiper/swiper.scss");
var Search = antd_1.Input.Search;
var Chat = function () {
    return (react_1.default.createElement("div", { className: "chat" },
        react_1.default.createElement("div", { className: "left-box" },
            react_1.default.createElement(react_2.Swiper, { spaceBetween: 50, slidesPerView: 3, navigation: true, autoplay: { delay: 5000 }, pagination: { clickable: true }, scrollbar: { draggable: true }, onSwiper: function (swiper) { return console.log(swiper); }, onSlideChange: function () { return console.log('slide change'); } },
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 1"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 2"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 3"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 4"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 1"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 2"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 3"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 4"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 1"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 2"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 3"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 4"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 1"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 2"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 3"),
                react_1.default.createElement(react_2.SwiperSlide, null, "Slide 4"))),
        react_1.default.createElement("div", { className: "center_box" }),
        react_1.default.createElement("div", { className: "right-box" })));
};
exports.Chat = Chat;
//# sourceMappingURL=chat.js.map