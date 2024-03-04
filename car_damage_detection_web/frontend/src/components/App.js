import React, { Component } from "react";
import Home from "./Home";


import { render } from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // if we insert javascript code in tags we use {} this bracket to write
        return (
            <div>
            <Home/>
            </div>
        )
    }
}
console.log("BEFORE GET ELEMENT");
const appDiv = document.getElementById("app");
render(<App />, appDiv);

