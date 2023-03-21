import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CARD_NODE, CARD_CELL } from "../../const/const"
import { Add_Card, Card } from "../../components/card/card"
import { GetCard, GetCardCell, AddCard } from "../../axios/client"
import Item from "antd/lib/list/Item";
const Plan = function () {
    let cn: CARD_NODE[] = []
    JSON.parse(JSON.stringify(cn))
    let [cards, setCards] = useState(cn)
    let [RT, setRT] = useState(false);
    let [WebKey, setWebKey] = useState(true);
    if (WebKey) {
        GetCard({}).then((res: any) => {
            let x_list: CARD_NODE[] = []
           
            res.data.data.map((item: any, index: any) => {

                GetCardCell({ id: item.id }).then((rex: any) => {
                    let x: CARD_NODE = { name: item.name, id: item.id, nth: item.nth, list: rex.data.data }
                    x_list.push(x)
                    if (index === res.data.data.length - 1) {
                        setCards(x_list)
                    }
                })
            })
        })
        setWebKey(false)
    }
    function addCardNode(val: string) {
        let node = { name: val, nth: cards.length + 1 }

        AddCard(node).then((res: any) => {
            console.log(res)
        })
        setCards([
            ...cards, { name: val, list: [], nth: cards.length + 1, id: cards.length + 1  }])
    }

    return (<div className={`plane`}>
        {cards.map((item: any, index: number) => {
            return <Card node={item} key={index + "cn"} callbackRT={setRT} RT={RT} />
        })}
        <div className={"add_card_200"}>
            <Add_Card addNode={addCardNode}></Add_Card>
        </div>
    </div>)
}
export { Plan }