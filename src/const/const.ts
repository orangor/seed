
const HEADE: any = [{
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
        }
        ,{
            name:"AntDesing",url:"https://ant.design/components/overview-cn/"
        },
        {
            name:"翻译",url:"https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#auto/zh/"
        }


    ]
},{
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
    list: [ ]
},
{
    name: "聊天",
    link: "/chat",
    list: [ ]
},{
    name: "搜索",
    link: "/selectmom",
    list: [ ]
},{
  
    name: "AI绘图",
    link: "/draw_tag",
    list: [ ]
}
]
import COLOR from "../json/color.json"
const GET_COLOR = function () {
    return COLOR.colors[Math.floor(Math.random() * COLOR.colors.length)]
}
const DANCE_KEY = {
    YES: 1,
    NO: 2
}


interface CARD_CELL {
    name: string;
    nth: number;
    id: number;
    card_id: string;
    context:string
}
interface CARD_NODE {
    id: number
    name: string;
    nth: number;
    list: CARD_CELL[]
}

interface ROLL_BOX{
    w:number
    h:number
}
interface SONG_PICK{
    id:number;
    text:string;
    type:string;
    label:string
}
interface TAG_NODE{
    id:number;
    field: string;
    type2: string;
    label:string;
    value: string;
    type: string;
} 

interface PEOPRE_NOOE{
    head:{
        skin:string;/*皮肤*/
        hair:string;/*头发*/
        eyes:string;/*眼睛*/
        lips:string;/*唇*/
        nose:string;/*鼻子*/
        ears:string;/*耳朵*/
        hairstyle:string;/*发型*/
    };
    trunk:{
        leg:string;/*腿*/
        hand:string;/*手*/
        chest:string/*胸*/
        clothes:string;/*衣服*/
        pants:string;/*裤子*/
        shoe:string;/*鞋子*/
    }
   
}
interface CHECK_TAG{
    field:string;
    data:TAG_NODE[];
}

export { HEADE, GET_COLOR, DANCE_KEY, CARD_CELL, CARD_NODE,ROLL_BOX,SONG_PICK,TAG_NODE ,CHECK_TAG}