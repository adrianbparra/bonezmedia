import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header, Icon, Item } from 'semantic-ui-react';

import ItemDefault from '../components/Item.js';

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

                        <Container textAlign='left'>
                        <span>Subtotal</span>
                        <span>{"$24.00"}</span>
                        <span>Shipping is calculated as checkout</span>
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