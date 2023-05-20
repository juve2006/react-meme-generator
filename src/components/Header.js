import React from 'react';

export default function Header() {
    return (
        <header className={"header"}>
                <img className="header--img" src={process.env.PUBLIC_URL + 'images/troll-face.png'} alt={"logo"}/>
                <h2 className={"header--title"}>Meme Generator</h2>
                <h4 className={"header--content"}>React Course - Project 3</h4>
        </header>
    );
}