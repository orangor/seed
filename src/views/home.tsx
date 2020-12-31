import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Page1 = function () {
    return (<div>tip</div>)
}
const Home = function () {
    return (<div className={"home"}>
        <Page1></Page1>
    </div>)
}
export { Home }