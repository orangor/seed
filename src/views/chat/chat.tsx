import React, { useState, useEffect, useRef } from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { SONG_PICK } from "../../const/const"
import {RollBox}from "../../components/roll/roll"
import { GetGoodSentences,GetGoodSentencesLike } from "../../axios/client"
import "../chat/chat.less"
import { Pagination ,Input  } from 'antd';


// Import Swiper styles


const { Search } = Input;
const Chat = function () {





    return (<div className={`chat`}>
      <div className={`left-box`}> 
   




      </div>
      <div className={`center_box`} >
     </div>
   
     <div className={`right-box`}>
      
     </div>
    </div>)
}


export { Chat }