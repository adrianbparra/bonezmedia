import React from 'react';
import { Grid,Divider,Header, Container, Item} from 'semantic-ui-react';
import FeaturedItem from '../components/FeaturedItem';
import ItemDefault from '../components/Item.js';
import "./Shop.css"

import { data } from "../data/items";

function Shop() {
    return (
        <Container as={"main"} className='main'>
            <Container className='new-releases'>
                <Header textAlign='center' className='new-releases-header' as='h1'>New Releases</Header>
                
                <Grid stackable >
                    <Grid.Row columns={3} centered>
                            <FeaturedItem/>
                       
                            <FeaturedItem/>
                        
                            <FeaturedItem/>
                    </Grid.Row>
                </Grid>
            
            </Container>
            <Divider/>
            <Container>
            <Header textAlign='center' className='new-releases-header' as='h1'>All</Header>
                <Grid>
                    <Grid.Row columns={2} as={Item.Group} divided>
                        {data.map(item => <ItemDefault key={item.id} item={item}/>)}

                    </Grid.Row>
                </Grid>

            </Container>
        </Container>
    );
}

export default Shop;