import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { CARD_NODE, CARD_CELL } from "../../const/const"
import { Add_Card, Card } from "../../components/card/card"

const Plan = function () {
    let cn: CARD_NODE[] = []
    let [cards, setCards] = useState(JSON.parse(JSON.stringify(cn)))
    let [RT, setRT] = useState(false);
    function addCardNode(val: string) {
        setCards([
            ...cards, { name: val, list: [] }])
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