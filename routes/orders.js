const express = require("express");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.get("/:session_id", async (req, res) => {
    const session_id = req.params.session_id;
    let session;
    let order = {};

    console.log("session_id", session_id);

    try {
        session = await stripe.checkout.sessions.retrieve(session_id);
        console.log("session", session);
        const { customer_details } = session;
        order["name"] = customer_details.name;
        order["amount_total"] = session.amount_total;
    } catch (error) {
        console.log("error", error);
        res.status(404).send(
            JSON.stringify({ message: "Error retrieving order." })
        );
    }
    res.status(200).send(JSON.stringify(order));
});

module.exports = router;
