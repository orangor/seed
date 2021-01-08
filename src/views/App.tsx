import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Tag } from "../components/tag"
import { HEADE, GET_COLOR } from "../const/const"
import { routers } from "../router/index";

const Head = function () {

    const [isTouch, setTouch] = useState(HEADE[0].name)
    function onTouch(value: string) {
        setTouch(value)
    }
    return (<div className={`heade `}>
        {
            HEADE.map((item: any, index: number) => {
                return < Tag data={item} onTouch={onTouch} isTouch={isTouch} css={`${"color_" + GET_COLOR().name}`} key={index} ></ Tag>
            })
        }
    </div >)
}

const App = function App(): any {
    return (
        <div>
            <Router>
                <Head></Head>
                <div className={`seed-content`}>
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