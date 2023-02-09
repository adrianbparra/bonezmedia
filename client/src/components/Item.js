import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Icon, Item, Dropdown } from "semantic-ui-react";
import { useCart } from "../context/cartContext";

import "./Item.css";

function ItemDefault(props) {
    const { pathname } = useLocation();
    const {
        increaseCartQuantity,
        removeFromCart,
        updateCartQuantity,
        getItemQuantity,
    } = useCart();
    const { id, name, unit_amount, default_price, description, images } = props.product;

    let quantity = getItemQuantity(default_price);

    function handleChange(e, { value }) {
        updateCartQuantity(default_price, value);
    }

    return (
        <Item>
            <Item.Image as={Link} to={`/shop/${id}`} src={images[0]} />

            <Item.Content>
                <Item.Header as={Link} to={`/shop/${id}`}>
                    {name}
                </Item.Header>
                <Item.Meta>${(unit_amount / 100).toFixed(2)}</Item.Meta>
                {pathname === "/shop" && (
                    <Item.Description>{description}</Item.Description>
                )}
                {pathname === "/cart" && (
                    <Dropdown
                        onChange={handleChange}
                        compact
                        selection
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
                        value={quantity}
                    />
                )}
                <Item.Extra>
                    {pathname === "/shop" && (
                        <Button
                            className="add-to-cart-button"
                            color="red"
                            floated="right"
                            onClick={() => increaseCartQuantity(props.product)}
                        >
                            Add to Cart
                            <Icon name="cart plus" />
                        </Button>
                    )}
                    {pathname === "/cart" && (
                        <Button
                            color="red"
                            floated="right"
                            onClick={() => removeFromCart(default_price)}
                        >
                            <Icon name="x" />
                            Remove
                        </Button>
                    )}
                </Item.Extra>
            </Item.Content>
        </Item>
    );
}

export default ItemDefault;
