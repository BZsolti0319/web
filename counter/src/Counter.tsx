import React from "react";
import "./style.css"

const Counter = () =>{

    return<>
        <div className="header">
            <header>My Counter</header>
        </div>
        <body>
            <div className="value">
                <p>Counter value:</p>
                <p className="szam">100</p>
            </div>
            <div className="container1">
            <button id="button">+</button>
            <button id="button">-</button>
            </div>
            <div className="container2">
            <button id="button">+</button>
            <button id="button">-</button>
            </div>
        </body>
    </>
}
export default Counter;