import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item } from 'semantic-ui-react';

import "./Item.css";


function ItemDefault(props) {

    const {id,name,description,meta,price,dateAdded} = props.item;
    return (
            <Item>
                <Item.Image as={Link} to={`/shop/${id}`} src='https://react.semantic-ui.com/images/wireframe/image.png' />

                <Item.Content>
                    <Item.Header as={Link} to={`/shop/${id}`}>{name}</Item.Header>
                    <Item.Meta>${price.toFixed(2)}</Item.Meta>
                    <Item.Description>{description}</Item.Description>
                    <Item.Extra>

                        <Button className='add-to-cart-button' color='red' floated='right'>
                            Add to Cart
                            <Icon name='cart plus'/>
                        </Button>

                    </Item.Extra>
                </Item.Content>
            </Item>
    );
}

export default ItemDefault;