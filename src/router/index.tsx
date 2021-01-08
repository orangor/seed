import { Login } from "../views/login"
import { Login2 } from "../views/login2"
import { Home } from "../views/home"
import { Plan } from "../views/plan/plan"
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
    }, {

        path: '/login2',
        component: Login2

    }, {
        path: "/plan",
        component: Plan
    }
]
export { routers }