import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { Button, Icon, Item, Dropdown } from 'semantic-ui-react';

import "./Item.css";


function ItemDefault(props) {
    const {pathname} = useLocation();
    // console.log(location.pathname)
    

    const {id,name,description,price,amount} = props.item;
    return (
            <Item>
                <Item.Image as={Link} to={`/shop/${id}`} src='https://react.semantic-ui.com/images/wireframe/image.png' />

                <Item.Content>
                    <Item.Header as={Link} to={`/shop/${id}`}>{name}</Item.Header>
                    <Item.Meta>${price.toFixed(2)}</Item.Meta>
                    {pathname=== "/shop" && <Item.Description>{description}</Item.Description>}
                    {pathname=== "/cart" && <Dropdown
                        defaultValue={amount}
                        compact
                        selection
                        options={[
                            { key: 1, text: '1', value: 1 },
                            { key: 2, text: '2', value: 2 },
                            { key: 3, text: '3', value: 3 },
                          ]}
                    />}
                    <Item.Extra>

                        {pathname=== "/shop" &&
                            <Button className='add-to-cart-button' color='red' floated='right'>
                                Add to Cart
                                <Icon name='cart plus'/>
                            </Button>
                        }
                        {
                            pathname === "/cart" &&
                            <Button color='red' floated='right'>
                                <Icon name='x'/>
                                Remove
                            </Button>
                        }

                    </Item.Extra>
                </Item.Content>
            </Item>
    );
}

export default ItemDefault;