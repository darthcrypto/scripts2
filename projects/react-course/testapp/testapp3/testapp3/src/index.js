import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

import AboutUs from "./components/AboutUs";

// import CSS Files
import "./css/bootstrap.min.css";
import "./css/styles.css";

// import Custom Modules
import App from "./components/App";


const rootNode = document.getElementById("root");

/*pre-router
ReactDOM.render(<App />, rootNode);
*/

//post-router
ReactDOM.render(<BrowserRouter>
     <App />
        </BrowserRouter>, rootNode);

