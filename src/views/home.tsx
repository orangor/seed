import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Tip } from "../components/tip"
import { Button } from 'antd';
let tips = [{ name: "JZ", link: "/" }, { name: "SF", link: "/login" }]
const Page1 = function () {
    return (<div>
        <Button>Button</Button>
        {
            tips.map((item, i) => {
                return (<Tip data={item} key={i}></Tip>)
            })
        }
    </div >)
}
const Home = function () {
    return (<div className={"home"}>
        <Page1></Page1>
    </div>)
}
export { Home }