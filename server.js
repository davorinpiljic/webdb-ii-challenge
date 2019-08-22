//import
const express = require("express");
const carsRouter = require("./cars/carsRouter.js");
const salesRouter = require("./sales/salesRouter.js");
const cors = require("cors");
//server
const server = express();
//general use
server.use(express.json());
server.use(cors());
//middleware
//routers
server.use("/cars", carsRouter);
server.use("/sales", salesRouter);

//endpoints
//port and listen
const port = process.env.PORT || 2323;
server.listen(port, () => console.log(`on port ${port}`));
