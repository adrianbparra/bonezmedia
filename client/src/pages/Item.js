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
} from "semantic-ui-react";
import { useCart } from "../context/cartContext";
import { data } from "../data/items";

import "./Item.css";

function Item() {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const item = data.find((item) => item.id === id);
    const { incrAmountCartQuantity } = useCart();

    function handleChange(e, data) {
        setQuantity(data.value);
    }

    if (item === undefined) {
        return <Header>Not Found</Header>;
    }
    return (
        <Container as={"main"} className="main">
            <Header as="h1">{item.name}</Header>

            <Grid stackable container>
                <Grid.Column width={10}>
                    <Grid>
                        <Grid.Row>
                            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </Grid.Row>

                        <Image.Group as={Grid.Row} centered size="tiny">
                            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </Image.Group>
                    </Grid>
                </Grid.Column>

                <Grid.Column width={6}>
                    <div className="item-price">
                        ${(item.unit_amount / 100).toFixed(2)}
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
                        onClick={() => incrAmountCartQuantity(item, quantity)}
                    >
                        <Button.Content visible>Add To Cart</Button.Content>
                        <Button.Content hidden>
                            <Icon name="shop" />
                        </Button.Content>
                    </Button>
                    <Container className="item-description">
                        {item.description}
                    </Container>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Item;
