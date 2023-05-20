import React from "react";
import data from "../data.js";

export default function Meme() {
    function handlerClickButton() {
        const randomIndex = Math.floor(Math.random() * data.data.memes.length);
        const url = data.data.memes[randomIndex].url;
        console.log(url);
    }

      return (
        <main>
            <div className={"form"}>
                <input className="form--input"
                       type="text"
                       placeholder="Shut up"/>
                <input className="form--input"
                       type="text"
                       placeholder="and take my money"/>
                <button onClick={handlerClickButton} className="form--button">
                    Get a new meme image  🖼
                </button>
            </div>
        </main>
    );
}
