require("dotenv").config();

const express = require("express");
const cors = require("cors");
const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.static("public"));
server.use(express.json());

// Routes
const paymentRoute = require("./routes/payments.js");
const productsRoute = require("./routes/products.js");

server.use("/payments/", paymentRoute);
server.use("/products/", productsRoute);

server.get("/", (req, res) => {
    res.send("Welcome to Bonez Media API");
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
