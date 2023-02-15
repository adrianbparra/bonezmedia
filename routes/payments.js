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

router.post("/payment", async (req, res) => {
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
    let items = req.body;
    let session;
    try {
        console.log("req", req.body);

        if (!items) {
            return res.status(400).json({ message: "No Items to Checkout" });
        }
        // items = JSON.parse(items);

        items = items.map((item) => {
            return { price: item.default_price, quantity: item.quantity };
        });
        console.log("items", items);
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
            line_items: items,
            automatic_tax: {
                enabled: true,
            },
            mode: "payment",
            success_url: `${FE_URL}/order/{CHECKOUT_SESSION_ID}`,
            cancel_url: `${FE_URL}/cart`,
        });
        console.log("session", session);
    } catch (error) {
        console.log("error", error);
        return res.status(400).json({ message: error.message });
    }

    return res.status(200).json({ url: session.url });
});

module.exports = router;
