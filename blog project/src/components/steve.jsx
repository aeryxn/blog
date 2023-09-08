import React, {useContext, useEffect, useState } from "react";
import "../css/App.css";

function Steve () {
    return (
        <div className="summer">
            <h1 className="summerTitle">Unveiling the Untold Side of Steve Jobs: The Man with No Drip</h1>
            <h1 className="summerAuthor">Aeryan Glover</h1>
            <h1 className="summerHeader">September 8, 2023</h1>
            <img src="/stevie.jpg" className="summerImg"/>
            <h1 className="summerText">Steve Jobs, the co-founder of Apple Inc. and a visionary in the world of technology, was undoubtedly a genius when it came to innovation and design. However, when it comes to the realm of personal style, it's safe to say that he didn't quite have the "drip." Steve Jobs was known for his signature look, which consisted of a black turtleneck, blue jeans, and sneakers. This minimalist wardrobe choice may have been practical for him, as it eliminated the daily decision of what to wear, allowing him to focus on his work. But in the world of fashion, it's safe to say that Steve Jobs' style was far from being considered trendy or fashion-forward. While he may not have been a fashion icon, Steve Jobs' legacy in the tech world is undeniable. He proved that true innovation goes beyond appearances and that it's the substance of our work that truly matters. So, while he may not have had the "drip" in the conventional sense, he certainly had a lasting impact on the world through his groundbreaking contributions to technology and design.</h1>
            <input className="summerComment" placeholder="add a comment"/>
        </div>
    )
}

export default Steve;