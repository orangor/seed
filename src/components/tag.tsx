import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
const Tag = function Tag(props: any) {
    return (<div className={`${props.css} tag`}>
        <Link to={props.data.link}>
            <div className={`title`}>{props.data.name}</div>
        </Link>
        <div className={`cell-list`}>{
            props.data.list.map((item: any, i: any) => {
                return <div key={i} className={`cell`} onClick={() => {
                    if (item.url) {
                        const w: any = window.open('about:blank');
                        w.location.href = item.url
                    }
                }}>{item.name}</div>
            })
        }
        </div>
    </div >)
}
export { Tag }