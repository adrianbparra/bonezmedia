import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function FeaturedItem(props) {
    const {id,header,price,description} = props;
    return (
        <Grid.Column>
            <Card color='red' fluid as={Link} to="/shop/1k334j4563kl">
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                <Card.Content>
                    <Card.Header>
                        Header
                    </Card.Header>
                    <Card.Meta>
                        $14.99
                    </Card.Meta>
                    <Card.Description>
                        Description
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}

export default FeaturedItem;