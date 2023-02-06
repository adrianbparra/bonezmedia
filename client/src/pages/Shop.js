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

import FeaturedContainer from "../components/FeaturedContainer";
import ItemDefault from "../components/Item.js";

function Shop() {
    const { isLoading, error, data } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch("http://localhost:4000/products/all", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                const error = await response.json();

                throw new Error(error.statusText);
            }
            const data = await response.json();
            return data;
        },
    });

    return (
        <Container as={"main"} className="main">
            <FeaturedContainer/>
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
                        {error && (
                            <Grid.Column>
                                <Header textAlign="center" as="h2">
                                    No Items for Sale
                                </Header>
                            </Grid.Column>
                        )}
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
