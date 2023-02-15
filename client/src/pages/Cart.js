import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Item,
    Message,
} from "semantic-ui-react";

import { useCart } from "../context/cartContext";
import ItemDefault from "../components/Item.js";
import FeaturedContainer from "../components/FeaturedContainer";
import "./Cart.css";

function Cart() {
    const { getTotalItems, cartItems, getTotalPrice } = useCart();
    const cartTotalItems = getTotalItems();
    const totalPrice = getTotalPrice();

    const checkout = () => {
        mutate(cartItems);
    };

    const { isLoading, error, isError, mutate } = useMutation({
        mutationFn: async (items) => {
            const response = await fetch(
                "http://localhost:4000/payments/checkout",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(items),
                }
            );

            if (!response.ok) {
                throw new Error("Unable to Checkout, Try again another time!");
            }
            const data = await response.json();
            return data.url;
        },
        onSuccess: (data) => {
            window.location.assign(data);
        },
    });

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

                            <Button
                                size="big"
                                color="green"
                                loading={isLoading}
                                onClick={checkout}
                            >
                                <Icon name="lock" />
                                Secured Checkout
                            </Button>
                            <Message
                                error={isError}
                                content={error?.message}
                                hidden={!isError}
                            />
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
