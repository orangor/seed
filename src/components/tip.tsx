import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Tap = function (props: any) {
    return (<div className={`${props.css} tap`}>
        <Link to={props.data.link}>
            <div className={`title`}>{props.data.name}</div>
        </Link>

    </div >)
}
export { Tap }