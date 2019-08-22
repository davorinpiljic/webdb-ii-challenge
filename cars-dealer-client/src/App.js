import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import homeScreen from "./Components/homeScreen";
import CarsView from "./Components/CarsView";
import SalesView from "./Components/SalesView";

import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Cars Dealer Client </p>
        </Link>
        <Link to="/cars" style={{ textDecoration: "none" }}>
          <p>| Cars </p>
        </Link>
        <Link to="/sales/cars" style={{ textDecoration: "none" }}>
          <p>| Sales </p>
        </Link>
      </div>
      <Route exact path="/" component={homeScreen} />
      <Route exact path="/cars" component={CarsView} />
      <Route exact path="/sales/cars" component={SalesView} />
    </div>
  );
}
