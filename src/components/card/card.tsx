import React, { useState, useEffect, useRef } from "react";
import { DANCE_KEY } from "../../const/const"
import { CARD_CELL } from "../../const/const"
function Add_Card(props: any) {
    let [isClick, setClick] = useState(false)
    let [value, setValue] = useState("")
    let inp: any;
    let inputRef = useRef(inp)
    function cardOnClick() {
        setClick(true)
        setTimeout(() => { inputRef.current.focus(); })

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
    function handKeyDown(e: any) {
        if (e.keyCode === 13 && value) {
            setClick(false)
            props.addNode(String(value))
        }
    }
    function change(event: any) {
        setValue(event.target.value)
    }
    if (isClick) {

        return (<div className={`add-card-process`}>
            <form>
                <input className="dance-input" placeholder="请输入列表标题...." ref={inputRef} onKeyDown={(e) => handKeyDown(e)} type="text" onChange={change} />
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
    let cl: CARD_CELL[] = []
    let [list, setList] = useState(cl)
    function addNode(val: string) {
        setList([...list, { name: val }])
    }

    return (<div className={`card`} draggable="true">
        <div className={`title`}>{parps.node.name}</div>
        <div className={`card-contact-box`}>
            <div className={`content`}>
                {
                    list.map((item: any, index: number) => {
                        return <div key={index} onClick={parps.callback} className={`card-cell`}>{item.name}</div>
                    })
                }
                <div ><Add_Card addNode={addNode}></Add_Card></div>
            </div>
        </div>

    </div >)
}
export { Add_Card, Card }