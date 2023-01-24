const express = require("express");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);
const FE_URL = process.env.FE_URL;

const calculateOrderAmount = (items) => {
    //Calculate orders amount on server
    // to prevent people from directly manipulating the amount
    // on the client
    return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;

    // Create PaymentIntent with the order amoiunt and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Checkout Post
router.post("/checkout", async (req, res) => {
    const lineItems = req.body.items;
    let session;

    try {
        session = await stripe.checkout.sessions.create({
            shipping_address_collection: { allowed_countries: ["US", "CA"] },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: { amount: 420, currency: "usd" },
                        display_name: "Shipping Cost",
                        delivery_estimate: {
                            minimum: { unit: "business_day", value: 5 },
                            maximum: { unit: "business_day", value: 7 },
                        },
                        tax_behavior: "exclusive",
                    },
                },
            ],
            line_items: lineItems,
            automatic_tax: {
                enabled: true,
            },
            mode: "payment",
            success_url: `${FE_URL}/success`,
            cancel_url: `${FE_URL}/cart`,
        });
        console.log(session);
    } catch (error) {
        console.log(error);
        return res.status(400).send(`Checkout Error: ${error.message}`);
    }

    return res.send(JSON.stringify({ url: session.url }));
});

module.exports = router;
