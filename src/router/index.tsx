import { Login } from "../views/login"
import { Login2 } from "../views/login2"
import { Home } from "../views/home"
import { Plan } from "../views/plan/plan"
import {Screencap} from "../views/screencap/screencap"
import{Chat} from "../views/chat/chat"
import {Selectmom} from "../views/selectmom/index"
import {DrawTag} from "../views/draw_tag/tag"
interface router {
    path: string,
    component: any,
    children?: Array<router>
}
const routers: Array<router> = [
    {
        path: "/",
        component: Home
    },
    {
        path: '/login',
        component: Login,
    },
     {

        path: '/login2',
        component: Login2

    },
     {
        path: "/plan",
        component: Plan
    },
    {
        path:"/screencap",
        component:Screencap
    },
    {
        path:"/chat",
        component:Chat
    },
    {
        path:"/selectmom",
        component:Selectmom
    }, {
        path:"/draw_tag",
        component:DrawTag
    }
]
export { routers }