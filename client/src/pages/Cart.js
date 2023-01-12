import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header, Icon, Item } from 'semantic-ui-react';

import ItemDefault from '../components/Item.js';

import "./Cart.css";

import { cart } from '../data/items.js';

function Cart() {

    return (
        <Container as={"main"} className='main'>

            {cart.length < 1 &&

                <Grid centered>
                    <Grid.Row>
                        <Header as={"h2"} size='huge'>Your cart is empty!</Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Button as={Link} replace={true} to="../shop" size='big' color='red'>
                            Shop Now!
                        </Button>
                    </Grid.Row>
                </Grid>
            }
            {cart.length > 0 &&

                <Grid stackable columns={2}>
                    <Grid.Column width={10}>

                        <Item.Group divided>
                            {cart.map(item => <ItemDefault key={item.id} item={item}/>)}
                        </Item.Group>

                    </Grid.Column>

                    <Grid.Column width={6} textAlign="center">
                        
                        <Header as={"h2"} textAlign='center'>Your Total</Header>
                        <Divider/>

                        <Container className='cart-total-container' textAlign='left'>
                            <div className='cart-subtotal-container'>
                                <span className='cart-subtotal'>Subtotal:</span>
                                <span className='cart-price'>{"$24.00"}</span>
                            </div>
                            <span className='cart-shipping'>Shipping is calculated at checkout</span>
                        </Container>

                        <Button size='big' color='green'>
                            <Icon name='lock'/>
                            Secured Checkout
                        </Button>
                    </Grid.Column>


                </Grid>
            }
        </Container>
            
    );
}

export default Cart;