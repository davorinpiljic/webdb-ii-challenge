import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import axios from "axios";

export default function SalesView() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2323/sales/cars").then(res => {
      setSales(res.data);
    });
  });
  return (
    <div className="App">
      <br />
      <div className="cardholder">
        {sales.map(sale => {
          return (
            <div>
              <br />
              <div className="carcard">
                Sale amount: {sale.sale_amount}
                <br />
                Stock Id: {sale.stock}
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
