import React from 'react';
import { Container, Divider, Grid, Header, Image, Reveal, Segment } from 'semantic-ui-react';

import './Installs.css';

function Installs() {
    return (
        <Container as={"main"} className='main'>
            <Header textAlign='center' as="h1">Installations</Header>

            <Container className='installs-subtitle'>
                <p>
                    We will be offering installations for all our products that require installation in your vehicle.
                    We will install everything from lighting, stereos, speakers, amps and subwoofers. 
                    We can install at your location for an extra cost in the Phoenix area or at our location.
                </p>
            </Container>

            <Divider/>

            <Grid className='installs-content' stackable columns={2}>
                
                <Grid.Row reversed='tablet computer'>
                    <Grid.Column  width={10}>
                        <p>
                            This was an install on a 2007 Chevrolet Colorado.
                            A Kenwood double din headunit was installed with a 
                            amp and a 8' subwoofer. 
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Reveal animated='fade'>
                            <Reveal.Content visible>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image-text.png'/>
                            </Reveal.Content>
                        </Reveal>
                    </Grid.Column>
                </Grid.Row>

                <Divider/>
                
                <Grid.Row>
                    <Grid.Column width={10}>
                        <p>
                            This was an install on a 2007 Chevrolet Colorado.
                            A Kenwood double din headunit was installed with a 
                            amp and a 8' subwoofer. 
                        </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Image  src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
            
        </Container>
    );
}

export default Installs;