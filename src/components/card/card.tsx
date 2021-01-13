import React, { useState, useEffect } from "react";
import { DANCE_KEY } from "../../const/const"

function Add_Card(props: any) {
    let [isClick, setClick] = useState(false)
    let [value, setValue] = useState("")
    function cardOnClick() {
        setClick(true)
    }
    function cardOutClick(type: number) {
        if (type === DANCE_KEY.YES) {
            if (value) {
                setClick(false)
                props.addNode(String(value))
            }
        } else {
            setClick(false)
        }
        setValue("")
    }
    function change(event: any) {
        setValue(event.target.value)
    }
    if (isClick) {
        return (<div className={`add-card-process`}>
            <form>
                <input className="dance-input" placeholder="请输入列表标题...." type="text" onChange={change} />
                <div className={`dance-button-box`}>
                    <div className={`dance-button-yes`} onClick={() => { cardOutClick(DANCE_KEY.YES) }}>添加列表</div>
                    <div className={`dance-button-no`} onClick={() => { cardOutClick(DANCE_KEY.NO) }}>X</div></div>
            </form>
        </div>)
    } else {
        return (<div className={`add_card`} onClick={cardOnClick}>
            <div className={`title`}>{"+  添加卡片"}</div>
        </div>)
    }
}
function Card(parps: any) {
    return (<div className={`card`}>
        <div className={`title`}>{parps.node.name}</div>
        <div className={`content`}>
            {
                parps.node.list.map((item: any, index: number) => {
                    return <div key={index} onClick={parps.callback}>{item.name}</div>
                })
            }
        </div>
    </div>)
}
export { Add_Card, Card }