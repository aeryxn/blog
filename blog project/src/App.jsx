import React, { createContext, useContext, useEffect, useState } from "react";
import "./css/App.css";
import SideBar from "./components/sideBar";
import MainStory from "./components/mainStory";
import MySummer from "./components/mySummer";
import MyDrip from "./components/myDrip";
import Steve from "./components/steve";


const body = document.querySelector("body");
export const Ctx = createContext(null)

function App() {
	const [pageState,setPageState] = useState(0)
	
	return (
		<>
		<Ctx.Provider value={{pageState,setPageState}}>
			<SideBar/>
			{pageState == 0 && (
				<MainStory/>
			)}
			{pageState == 1 && (
				<Steve/>
			)}
			{pageState == 2 && (
				<MySummer/>
			)}
			{pageState == 3 && (
				<MyDrip/>
			)}
		</Ctx.Provider>
		</>
	);
}

export default App;