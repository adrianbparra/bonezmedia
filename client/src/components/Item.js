import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Icon, Item, Dropdown, Grid } from "semantic-ui-react";
import { useCart } from "../context/cartContext";

import "./Item.css";

function ItemDefault(props) {
    const { pathname } = useLocation();
    const { increaseCartQuantity } = useCart();

    const { id, name, unit_amount,price, description, amount } = props.product;
    return (
        <Item>
            <Item.Image
                as={Link}
                to={`/shop/${id}`}
                src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
                <Item.Header as={Link} to={`/shop/${id}`}>
                    {name}
                </Item.Header>
                <Item.Meta>${unit_amount.toFixed(2)}</Item.Meta>
                {pathname === "/shop" && (
                    <Item.Description>{description}</Item.Description>
                )}
                {pathname === "/cart" && (
                    <Dropdown
                        defaultValue={amount}
                        compact
                        selection
                        options={[
                            { key: 1, text: "1", value: 1 },
                            { key: 2, text: "2", value: 2 },
                            { key: 3, text: "3", value: 3 },
                        ]}
                    />
                )}
                <Item.Extra>
                    {pathname === "/shop" && (
                        <Button
                            className="add-to-cart-button"
                            color="red"
                            floated="right"
                            onClick={()=>increaseCartQuantity(price)}
                        >
                            Add to Cart
                            <Icon name="cart plus" />
                        </Button>
                    )}
                    {pathname === "/cart" && (
                        <Button color="red" floated="right">
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
