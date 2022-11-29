import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Grid, Header, Image, Icon, Dropdown } from 'semantic-ui-react';
import { data } from '../data/items';

import "./Item.css";


function Item() {
    const {id} = useParams();

    const item = data.find(item => item.id===id)

    console.log(id,item)
    if( item === undefined){
        return <Header>Not Found</Header>
    }
    return (
        <Container className='main'>
            <Header as="h1">
                {item.name}
            </Header>

            <Grid stackable container>

                <Grid.Column width={10}>
                    
                    <Grid>
                        <Grid.Row>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                        </Grid.Row>
                        
                        <Image.Group as={Grid.Row} textAlign="justified" size='tiny'>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                        </Image.Group>
                    </Grid>
                
                </Grid.Column>

                <Grid.Column width={6}>
                    <div className='item-price'>${item.price.toFixed(2)}</div>            
                    <Dropdown
                        defaultValue={1}
                        compact
                        selection
                        options={[
                            { key: 1, text: '1', value: 1 },
                            { key: 2, text: '2', value: 2 },
                            { key: 3, text: '3', value: 3 },
                          ]}
                    />
                    <Button color='red' size='big' animated floated='right'>
                        <Button.Content visible>Add To Cart</Button.Content>
                        <Button.Content hidden><Icon name="shop"/></Button.Content>
                    </Button>
                    <Container className='item-description'>
                        {item.description}
                    </Container>
                </Grid.Column>

            </Grid>

            
        </Container>
    );
}

export default Item;