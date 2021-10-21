//import react into the bundle
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import "bootstrap";
import "../styles/index.scss";
import List from "./component/List.jsx";

//render your react application
ReactDOM.render(<List />, document.querySelector("#app"));
