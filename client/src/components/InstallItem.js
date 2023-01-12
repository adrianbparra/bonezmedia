import React from 'react';
import { Grid , Reveal, Image } from 'semantic-ui-react';

import './InstallItem.css';


function InstallItem({children,reversed,imgOne,imageTwo}) {

    return (
        <Grid.Row className='install-content' reversed={reversed && 'tablet computer'}>
            <Grid.Column  width={10}>
                <p>
                    {children}
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
    );
}

export default InstallItem;