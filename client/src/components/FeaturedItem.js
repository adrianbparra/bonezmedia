import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function FeaturedItem() {
    return (
        <Grid.Column>
            <Card color='red' fluid as={Link} to="/shop/1k334j4563kl">
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                <Card.Content>
                    <Card.Header>
                        Colorado
                    </Card.Header>
                    <Card.Meta>
                        $14.99
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}

export default FeaturedItem;