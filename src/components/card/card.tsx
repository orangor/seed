import Item from "antd/lib/list/Item";
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
    let dd: any;
    let [list, setList] = useState(cl)
    let [dropId, setDropId] = useState(dd)
    function addNode(val: string) {
        let idx = Math.ceil(Math.random() * 100000) + 1 + "";
        setList([...list, { name: val, id: idx }])
    }

    function allowDrop(ev: any) {
        ev.preventDefault();
    }

    function drag(ev: any) {
        ev.dataTransfer.setData("item_name", ev.target.innerHTML);
        ev.dataTransfer.setData("item_id", ev.target.id);
    }
    function drag_end(ev: any) {
        let newList: CARD_CELL[] = []
        let k = false
        list.forEach(item => {
            if (item.id !== ev.target.id || k) {
                newList.push(item)
            } else {
                k = true
            }
        })
        if (parps.RT) {
            setList(newList)
            parps.callbackRT(false)
        }
    }
    function drop(ev: any) {

        ev.preventDefault();
        let item: CARD_CELL = { name: "", id: "" }
        item.name = ev.dataTransfer.getData("item_name");
        item.id = ev.dataTransfer.getData("item_id");
        console.log(ev.target.parentNode)
        setList([...list, item])
        parps.callbackRT(true)

        // ev.target.parentNode.appendChild(document.getElementById(dropId));
    }
    return (<div className={`card`} >
        <div className={`title`}>{parps.node.name}</div>
        <div className={`card-contact-box`}>
            <div className={`content`} id={"div1"} onDrop={drop} onDragOver={allowDrop}>
                {
                    list.map((item: any, index: number) => {
                        return <div key={index} id={item.id} onClick={parps.callback} draggable="true" onDragStart={drag} onDragEnd={drag_end

                        } className={`card-cell`}>{item.name}</div>
                    })
                }
            </div>
            <div ><Add_Card addNode={addNode}></Add_Card></div>
        </div>

    </div >)
}
export { Add_Card, Card }