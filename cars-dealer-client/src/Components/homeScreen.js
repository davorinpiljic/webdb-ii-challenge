import React, { useState, useEffect } from "react";
import logo from "../logo.png";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import axios from "axios";

export default function homeScreen() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <img src={logo} />
    </div>
  );
}
