const express = require("express");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const fetchProducts = () => {
    return stripe.products.list({
        limit: 100,
        active: true,
    });
};

const fetchPrices = () => {
    return stripe.prices.list({
        limit: 100,
        active: true,
    });
};

router.get("/all", async (req, res) => {
    const response = await Promise.all([fetchProducts(), fetchPrices()]);

    let products = response[0];
    let prices = response[1];

    let pricesObject = {};
    let productsArray = [];

    for (let price of prices.data) {
        pricesObject[price.id] = price;
    }

    productsArray = products.data.map((product) => {
        let price;
        if (product.default_price in pricesObject) {
            price = pricesObject[product.default_price];
        } else {
            price = {
                unit_amount: 0,
                currency: "usd",
                tax_behavior: "unspecified",
                type: "one_time",
            };
        }

        return {
            ...product,
            unit_amount: price.unit_amount,
            currency: price.currency,
            tax_behavior: price.tax_behavior,
            type: price.type,
        };
    });

    return res
        .status(200)
        .send(
            JSON.stringify({ has_more: products.has_more, data: productsArray })
        );
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    let product;
    let price;

    try {
        product = await stripe.products.retrieve(id);

        let priceId = product.default_price;
        price = await stripe.prices.retrieve(priceId);

        product = {
            ...product,
            unit_amount: price.unit_amount,
            currency: price.currency,
            tax_behavior: price.tax_behavior,
            type: price.type,
        };
    } catch (error) {
        res.status(404).send(
            JSON.stringify({ message: "Product does not exist!" })
        );
    }

    res.status(200).send(JSON.stringify(product));
});

module.exports = router;
