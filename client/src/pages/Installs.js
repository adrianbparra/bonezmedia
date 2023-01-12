import React from 'react';
import { Container, Divider, Grid, Header, Image, Reveal, Segment } from 'semantic-ui-react';
import InstallItem from '../components/InstallItem.js';
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

            <Grid stackable columns={2}>
                
                <InstallItem reversed>
                            This was an install on a 2007 Chevrolet Colorado.
                            A Kenwood double din headunit was installed with a 
                            amp and a 8' subwoofer.
                </InstallItem>

                <Divider/>

                <InstallItem>
                    This was an install on a 2007 Chevrolet Colorado.
                    A Kenwood double din headunit was installed with aN amp and a 8' subwoofer. 
                </InstallItem>

                <Divider/>

                <InstallItem reversed>
                    This was an install on a 2006 Chevrolet Silverado 1500. It included a Pioneer headunit, Boss Amplifier, and Rockford Fosgate Subwoofers.
                </InstallItem>

            </Grid>
            
        </Container>
    );
}

export default Installs;