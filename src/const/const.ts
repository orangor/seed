
const HEADE: any = [{
    name: "CG",
    link: "/",
    list: [{
        name: "React",
        url: ""
    }, {
        name: "Vue",
        url: ""
    }, {
        name: "TS",
        url: ""
    }, { name: "Node", url: "" }]
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
        { name: "Golange", url: "http://docscn.studygolang.com/doc/" }]
},
{
    name: "计划",
    link: "/plan",
    list: []
},
{
    name: "HT",
    link: "",
    list: []
}]
import COLOR from "../json/color.json"
const GET_COLOR = function () {
    return COLOR.colors[Math.floor(Math.random() * COLOR.colors.length)]
}
const DANCE_KEY = {
    YES: 1,
    NO: 2
}





export { HEADE, GET_COLOR, DANCE_KEY }