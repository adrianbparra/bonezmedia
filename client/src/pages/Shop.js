import React from 'react';
import { Grid,Divider,Header, Container, Item} from 'semantic-ui-react';
import FeaturedItem from '../components/FeaturedItem';
import ItemDefault from '../components/Item.js';

import "./Shop.css"

function Shop() {
    return (
        <div>
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
                        <ItemDefault/>
                        <ItemDefault/>
                        <ItemDefault/>
                        <ItemDefault/>
                        <ItemDefault/>
                        <ItemDefault/>

                    </Grid.Row>
                </Grid>

            </Container>
        </div>
    );
}

export default Shop;