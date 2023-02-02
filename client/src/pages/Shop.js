import React from "react";
import {
    Grid,
    Divider,
    Header,
    Container,
    Item,
    Loader,
} from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";

import FeaturedItem from "../components/FeaturedItem";
import ItemDefault from "../components/Item.js";

import "./Shop.css";

// import { data } from "../data/items";

function Shop() {
    // const isLoading = false;
    // const error = false;
    const { isLoading, error, data } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch("http://localhost:4000/products/all", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                throw new Error("Unable to get Products");
            }
            console.log(response);
            return response.json();
        },
    });

    return (
        <Container as={"main"} className="main">
            <Container className="new-releases">
                <Header
                    textAlign="center"
                    className="new-releases-header"
                    as="h1"
                >
                    New Releases
                </Header>

                <Grid stackable columns='equal'>
                    <Grid.Row >
                        {isLoading && <Loader active inline="centered" />}
                        {error && <Grid.Column><Header textAlign="center" as="h2">No Items for Sale</Header></Grid.Column>}
                        {data &&
                            data?.data.slice(0, 3).map((product) => {
                                return (
                                    <FeaturedItem
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            })}
                    </Grid.Row>
                </Grid>
            </Container>
            <Divider />
            <Container>
                <Header
                    textAlign="center"
                    className="new-releases-header"
                    as="h1"
                >
                    All
                </Header>
                <Grid>
                    <Grid.Row as={Item.Group}>
                        {isLoading && <Loader active inline="centered" />}
                        {error && <Grid.Column><Header textAlign="center" as="h2">No Items for Sale</Header></Grid.Column>}
                        {data &&
                            data.data.map((product) => (
                                <ItemDefault
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                    </Grid.Row>
                </Grid>
            </Container>
        </Container>
    );
}

export default Shop;
