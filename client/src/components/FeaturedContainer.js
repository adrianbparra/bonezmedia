import React from "react";
import { Grid, Header, Container, Loader } from "semantic-ui-react";
import { useLocation } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import FeaturedItem from "../components/FeaturedItem";
import "./FeaturedContainer.css";

function FeaturedContainer() {
    const { pathname } = useLocation();
    const { isLoading, error, data, isSuccess, isError } = useQuery({
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
        <Container className="new-releases">
            <Header textAlign="center" className="new-releases-header" as="h1">
                {pathname === "/" ? "Shop Bonez Media" : "New Releases"}
            </Header>

            <Grid stackable columns="equal">
                <Grid.Row>
                    {isLoading && <Loader active inline="centered" />}
                    {isError && (
                        <Grid.Column>
                            <Header textAlign="center" as="h2">
                                New Items Coming Soon!
                            </Header>
                        </Grid.Column>
                    )}
                    {isSuccess &&
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
    );
}

export default FeaturedContainer;
