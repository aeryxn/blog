import React, {useContext, useEffect, useState } from "react";
import "../css/App.css";
import { Ctx } from "../App";

function MainStory () {
    const pgState = useContext(Ctx);
    return (
        <div className="mainStory" onClick={()=>{
            pgState.setPageState(1);
        }}>
            <h1 className="mainText">Unveiling the Untold Side of Steve Jobs: The Man with No Drip</h1>
            <h3 className="author">Tiggle Bottomsnuggler</h3>
            <img className="elon" src="/resize.png"/>
        </div>
    );
}

export default MainStory;