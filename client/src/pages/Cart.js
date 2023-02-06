import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Item,
} from "semantic-ui-react";

import { useCart } from "../context/cartContext";
import ItemDefault from "../components/Item.js";
import FeaturedContainer from "../components/FeaturedContainer";
import "./Cart.css";

function Cart() {
    let [searchParams, setSearchParams] = useSearchParams();
    const { getTotalItems, cartItems, getTotalPrice } = useCart();
    const cartTotalItems = getTotalItems();
    const totalPrice = getTotalPrice();

    const checkout = async () => {
        await fetch("http://localhost:4000/payments/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: [
                    {
                        price: "price_1MSAmLFFFIEXyroZnLUThJdQ",
                        quantity: 1,
                    },
                ],
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.url) {
                    window.location.assign(res.url);
                }
            });
    };
    // const { isLoading, error, data } = useMutation({
    //     queryKey: ["clientSecret"],
    //     queryFn: () =>
    //         fetch("http://localhost:4000/payments/checkout", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 items: [
    //                     {
    //                         price: "price_1MSAmLFFFIEXyroZnLUThJdQ",
    //                         quantity: 2,
    //                     },
    //                 ],
    //             }),
    //         })
    //             .then((res) => res.json())
    //             .then((res) => {
    //                 if (res.url) {
    //                     window.location.assign(res.url);
    //                 }
    //             }),
    // });

    return (
        <Container as={"main"} className="main">
            {cartTotalItems < 1 && (
                <Grid centered>
                    <Grid.Row>
                        <Header as="h1" size="huge">
                            Your cart is empty!
                        </Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Button
                            as={Link}
                            replace={true}
                            to="../shop"
                            size="big"
                            color="red"
                        >
                            Shop Now!
                        </Button>
                    </Grid.Row>
                </Grid>
            )}
            {cartTotalItems > 0 && (
                <Grid stackable columns={2}>
                    <Grid.Row centered>
                        <Header as="h1">Your Cart</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Item.Group divided>
                                {cartItems.length > 0 &&
                                    cartItems.map((product) => (
                                        <ItemDefault
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                            </Item.Group>
                        </Grid.Column>

                        <Grid.Column width={6} textAlign="center">
                            <Header as={"h2"} textAlign="center">
                                Your Total
                            </Header>
                            <Divider />

                            <Container
                                className="cart-total-container"
                                textAlign="left"
                            >
                                <div className="cart-subtotal-container">
                                    <span className="cart-subtotal">
                                        Subtotal:
                                    </span>
                                    <span className="cart-price">
                                        $ {(totalPrice / 100).toFixed(2)}
                                    </span>
                                </div>
                                <span className="cart-shipping">
                                    Shipping is calculated at checkout
                                </span>
                            </Container>

                            <Button size="big" color="green" onClick={checkout}>
                                <Icon name="lock" />
                                Secured Checkout
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )}
            <Divider />
            <FeaturedContainer />
        </Container>
    );
}

export default Cart;
