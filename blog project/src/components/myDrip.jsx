import React, {useContext, useEffect, useState } from "react";
import "../css/App.css";

function MyDrip () {
    return (
        <div className="summer">
            <h1 className="summerTitle">My Drip</h1>
            <h1 className="summerAuthor">Aeryan Glover</h1>
            <h1 className="summerHeader">September 8, 2023</h1>
            <img src="/drip.jpg" className="summerImg"/>
            <h1 className="summerText">As the years have unfolded, so too has my personal sense of style. My journey in fashion has been a delightful evolution, a process of self-discovery that mirrors the changing seasons. I began with a humble collection of clothes, unsure of what truly resonated with me. Over time, I experimented with different looks, drawing inspiration from various sources, from fashion magazines to street style influencers. With each experiment, I refined my taste, gradually honing in on what felt like an authentic expression of myself. It was a process of trial and error, but it was also an adventure of self-expression. Today, my drip is a testament to the fusion of my personality, interests, and the confidence that comes with truly owning one's style. It's not just about what I wear; it's a statement of who I am, a visual representation of my identity that continues to evolve with every passing season.</h1>
            <input className="summerComment" placeholder="add a comment"/>
        </div>
    )
}

export default MyDrip;