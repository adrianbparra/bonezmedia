const express = require("express");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.get("/all", async (req, res) => {

    let products;
    try {
        products = await stripe.products.list({
            limit: 20,
        });
        console.log(products)
    } catch (error) {
        return res.status(400).send(`Products Error:${error}`);
    }

    res.send(JSON.stringify([ ...products.data ]));
});

module.exports = router;
