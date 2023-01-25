import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header,Grid, Button } from 'semantic-ui-react';
import FeaturedItem from '../components/FeaturedItem.js';
import InstallItem from '../components/InstallItem.js';

import './Home.css';

import { data } from "../data/items";

function Home(props) {
    return (
        <Container as={"main"} className='main'>

            <Container textAlign='center' text>
                <Header as="h1">Auto Audio & Media</Header>
                <Header.Subheader>
                    Everthing audio and media in automotive
                </Header.Subheader>
            </Container>

            <Container className='home-shop' textAlign='center'>
                <Header className='home-shop-header' as='h1'>Shop Bonez Media</Header>
                
                <Grid stackable className='home-shop-grid' >
                    <Grid.Row columns={3} centered>
                        {data && data.slice(0,3).map(product=>{
                                return <FeaturedItem key={product.id} product={product}/>
                            })}
                    </Grid.Row>
                </Grid>

                <Button color='red' size='massive' as={Link} to="/shop">Shop Now!</Button>
            </Container>
            <Container className='home-installs'>

                <Header textAlign="center" as='h1'>Installs</Header>

                <Grid stackable columns={2}>

                    <InstallItem>
                        This was an install on a Chevrolet Colorado 2007.
                    </InstallItem>

                </Grid>

                <Container textAlign='center'>
                    <Button color='red' size='massive' as={Link} to="/installs">More Installs!</Button>
                </Container>
            </Container>
            
        </Container>
    );
}

export default Home;