import React from 'react';
import { Grid,Divider,Header, Container} from 'semantic-ui-react';
import FeaturedItem from '../components/FeaturedItem';

import "./Shop.css"

function Shop() {
    return (
        <div>
            <Container textAlign='center' className='new-releases'>
                <Header as='h1'>New Releases</Header>
                
                <Grid stackable >
                    <Grid.Row columns={3} centered>
                            <FeaturedItem/>
                       
                            <FeaturedItem/>
                        
                            <FeaturedItem/>
                    </Grid.Row>
                </Grid>
            
            </Container>
            <Divider/>

            <Grid>

            </Grid>
        </div>
    );
}

export default Shop;