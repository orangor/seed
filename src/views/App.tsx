import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Tag } from "../components/tag"
import { HEADE, GET_COLOR } from "../const/const"
import { routers } from "../router/index";
const Head = function () {
    const [color, setColor] = useState(GET_COLOR());
    const [bg, setBg] = useState(GET_COLOR())
    return (<div className={`heade `}>
        {
            HEADE.map((item: any, index: any) => {
                return < Tag data={item} css={`${"color_" + GET_COLOR().name} ${"background_" + GET_COLOR().name}`} key={index} ></ Tag>
            })
        }
    </div >)
}

const App = function App(): any {
    return (
        <div>
            <Router>
                <Head></Head>
                <div>
                    {
                        routers.map((router, i) => {
                            return (

                                <Route
                                    key={i}
                                    exact
                                    path={router.path}
                                    component={router.component}
                                ></Route>
                            )
                        })
                    }

                </div>
            </Router>
        </div>
    );

}
export { App }