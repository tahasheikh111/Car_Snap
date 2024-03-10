import React, { Component } from "react";
import Home from "./Home.jsx";


import { render } from "react-dom";
import RatingPage from "./RatingPage.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // if we insert javascript code in tags we use {} this bracket to write
        return (
            <div>
            <RatingPage/>
            </div>
        );
    }
}
console.log("BEFORE GET ELEMENT");
const appDiv = document.getElementById("app");
render(<App />, appDiv);