import React, { useContext, useEffect, useState } from "react";
import "../css/App.css";

function MySummer () {
    return (
        <div className="summer">
            <h1 className="summerTitle">My Summer</h1>
            <h1 className="summerAuthor">Aeryan Glover</h1>
            <h1 className="summerHeader">September 8, 2023</h1>
            <img className="summerImg" src="/public/chicagopic.jpg"/>
            <h1 className="summerText">Summer is a season of transformation, and this past summer was a remarkable chapter in my journey. I had the incredible opportunity to intern at my university's Career Center while simultaneously exploring the vibrant city of Chicago. In this blog article, I'll share my experiences and lessons learned during my internship and the highlights of my Chicago adventure. My internship at the Career Center was an eye-opening experience. I was eager to gain practical knowledge in my field and help fellow students navigate their career paths. The Career Center proved to be a valuable resource hub, offering guidance and support for students as they prepared for their professional lives. Working alongside career advisors and professionals was enlightening. Their expertise in tailoring guidance to individual students' needs expanded my understanding of career development and improved my communication skills. When I wasn't at the Career Center, I was immersed in the vibrant city of Chicago. Its renowned culture, stunning architecture, and diverse neighborhoods were a delight to explore. Chicago's skyline, adorned with architectural marvels like the Willis Tower and Millennium Park, left me in awe. The juxtaposition of modern skyscrapers and historic buildings tells the story of a city with a rich history and a vision for the future. My summer was a remarkable blend of professional growth and personal exploration. I learned invaluable skills, made lasting connections, and immersed myself in the rich culture of an extraordinary city. This chapter in my journey toward personal and professional development will remain a cherished memory. Whether you're contemplating an internship or a visit to a new city, I hope my experiences inspire you to embrace opportunities for growth and adventure.</h1>
            <input className="summerComment" placeholder="add a comment"/>
        </div>
    )
}

export default MySummer;