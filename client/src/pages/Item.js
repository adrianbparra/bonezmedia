import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Icon,
    Dropdown,
    Loader,
} from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";

import { useCart } from "../context/cartContext";
import { data } from "../data/items";

import "./Item.css";

function Item() {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const { isLoading, data, error, isError, isSuccess } = useQuery({
        queryKey: ["products", id],
        queryFn: async () => {
            const response = await fetch(
                `http://localhost:4000/products/${id}`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }
            const data = await response.json();
            return data;
        },
    });

    const { incrAmountCartQuantity } = useCart();

    function handleChange(e, data) {
        setQuantity(data.value);
    }

    return (
        <Container as={"main"} className="main">
            {isError && (
                <>
                    <Header as="h1" textAlign="center">
                        Huh!
                        <Header.Subheader>{error.message}</Header.Subheader>
                    </Header>
                </>
            )}
            {isLoading && <Loader active size="massive" inline="centered" />}
            {isSuccess && (
                <>
                    <Header as="h1">{data.name}</Header>

                    <Grid stackable container>
                        <Grid.Column width={10}>
                            <Grid>
                                <Grid.Row>
                                    <Image
                                        src={data.images[0]}
                                        alt={data.name}
                                    />
                                </Grid.Row>

                                {/* <Image.Group as={Grid.Row} centered size="tiny">
                            {data.images.map((img, i) => {
                                return (
                                    <Image
                                        key={i}
                                        src={img}
                                        alt={`${data.name}-${i}`}
                                        onClick={() => {
                                            setImageI(i);
                                        }}
                                    />
                                );
                            })}
                        </Image.Group> */}
                            </Grid>
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <div className="item-price">
                                ${(data.unit_amount / 100).toFixed(2)}
                            </div>
                            <Dropdown
                                defaultValue={quantity}
                                compact
                                selection
                                onChange={handleChange}
                                options={[
                                    { key: 1, text: "1", value: 1 },
                                    { key: 2, text: "2", value: 2 },
                                    { key: 3, text: "3", value: 3 },
                                    { key: 4, text: "4", value: 4 },
                                    { key: 5, text: "5", value: 5 },
                                    { key: 6, text: "6", value: 6 },
                                    { key: 7, text: "7", value: 7 },
                                    { key: 8, text: "8", value: 8 },
                                    { key: 9, text: "9", value: 9 },
                                    { key: 10, text: "10", value: 10 },
                                ]}
                            />
                            <Button
                                color="red"
                                size="big"
                                animated
                                floated="right"
                                onClick={() =>
                                    incrAmountCartQuantity(data, quantity)
                                }
                            >
                                <Button.Content visible>
                                    Add To Cart
                                </Button.Content>
                                <Button.Content hidden>
                                    <Icon name="shop" />
                                </Button.Content>
                            </Button>
                            <Container className="item-description">
                                {data.description}
                            </Container>
                        </Grid.Column>
                    </Grid>
                </>
            )}
        </Container>
    );
}

export default Item;
