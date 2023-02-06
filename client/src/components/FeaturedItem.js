import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

function FeaturedItem(props) {
    const { id, name, unit_amount, description, images } = props.product;
    return (
        <Grid.Column>
            <Card color="red" fluid as={Link} to={`/shop/${id}`}>
                {images.length > 0 && <Image src={images[0]} />}
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>$ {(unit_amount / 100).toFixed(2)}</Card.Meta>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}

export default FeaturedItem;
