import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Divider, Header, Loader } from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";

import { useCart } from "../context/cartContext";
import FeaturedContainer from "../components/FeaturedContainer";

import "./Order.css";

function Order() {
    const { session_id } = useParams();
    const navigate = useNavigate();
    const { clearCart } = useCart();

    const { isLoading, isSuccess, data } = useQuery({
        queryKey: ["order", session_id],
        queryFn: async () => {
            const response = await fetch(
                `http://localhost:4000/orders/${session_id}`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );
            if (!response.ok) {
                if (response.status === 404) {
                    navigate("/", { replace: true });
                }
                return;
            }
            const data = await response.json();
            clearCart();
            return data;
        },
        retry: 1,
    });

    return (
        <Container as={"main"} className="main">
            <Container className="order-content">
                {isLoading && <Loader active inline="centered" size="medium" />}
                {isSuccess && (
                    <Header textAlign="center" as="h1">
                        Thank you for your order, {data.name}!
                    </Header>
                )}
            </Container>
            <Divider section />
            <FeaturedContainer />
        </Container>
    );
}

export default Order;
