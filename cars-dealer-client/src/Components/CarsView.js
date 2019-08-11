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

export default function CarsView() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:2323/cars").then(res => {
      setCars(res.data.filter(car => !car.sold));
    });
  });

  return (
    <div className="App">
      <br />
      <div className="cardholder">
        {cars.map(car => {
          return (
            <div>
              <br />
              <div className="carcard">
                <h1>{car.make}</h1>
                Model: {car.model}
                <br />
                VIN: {car.VIN}
                <br />
                Mileage: {car.mileage}
                <br />
                Stock Id: {car.stock}
                <br />
                <div class="btn-group">
                  <button>Car sold</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
