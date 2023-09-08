import React, { useContext, useEffect, useState } from "react";
import "../css/App.css";
import { Ctx } from "../App";

function SideBar () {
	const pgState = useContext(Ctx);

	const headingCreator = (headingText, stateNum) => {
		
		let heading = (
			<h1 id="heading" onClick={()=>{
				pgState.setPageState(stateNum);
			}}>{headingText}</h1>
		)
		return heading;
	}
	
    return (
        <div>
			<div id="sideBar">
				<div className="logo" onClick={()=>{
					pgState.setPageState(0);
				}}>
					<h1>AG Club</h1>
				</div>
				<div className="headings">
					{headingCreator("my summer", 2)}
                    {headingCreator("my drip", 3)}
					{headingCreator("me fr", 4)}
				</div>
			</div>
		</div>
    );
}

export default SideBar;