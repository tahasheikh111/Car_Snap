import React, { Component } from "react";
import Home from "./Home.jsx";


import { render } from "react-dom";
import RatingPage from "./RatingPage.jsx";
import ReviewPage from "./ReviewPage.jsx";
import '../styles/home.css'
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // if we insert javascript code in tags we use {} this bracket to write
        return (
            <div className="appContainer">
            <Home/>
            </div>
        );
    }
}
console.log("BEFORE GET ELEMENT");
const appDiv = document.getElementById("app");
render(<App />,appDiv);