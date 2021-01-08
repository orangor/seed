import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Add_Card, Card } from "../../components/card/card"
const Plan = function () {
    return (<div className={`plane`}><Add_Card></Add_Card></div>)
}
export { Plan }