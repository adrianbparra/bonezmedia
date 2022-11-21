import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Icon, Item } from 'semantic-ui-react';

import "./Item.css";


function ItemDefault(props) {
    return (
        // <Grid.Column>
            <Item>
                <Item.Image as={Link} to="/shop/id" src='https://react.semantic-ui.com/images/wireframe/image.png' />

                <Item.Content>
                    <Item.Header as={Link} to="/shop/id">Header</Item.Header>
                    <Item.Meta>$14.99</Item.Meta>
                    <Item.Description>Description</Item.Description>
                    <Item.Extra>
                    <Button className='add-to-cart-button' color='red' floated='right'>
                        Add to Cart
                        <Icon name='cart plus'/>
                    </Button>
                    </Item.Extra>
                </Item.Content>

            </Item>
        // </Grid.Column>
    );
}

export default ItemDefault;