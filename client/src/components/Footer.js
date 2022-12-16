import React from 'react';
import { Segment, Grid, Header,List } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <Segment padded>
            <Grid relaxed columns={3} stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Header>About</Header>
                        <List>
                            <List.Item as={NavLink} to="/contactus">Contact Us</List.Item>
                            <List.Item as={NavLink} to="/privacypolicy">Privacy Policy</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header>Links</Header>
                        <List>
                            <List.Item as={NavLink} to="/">Home</List.Item>
                            <List.Item as={NavLink} to="/Shop">Shop</List.Item>
                            <List.Item as={NavLink} to="Installs">Installs</List.Item>
                        </List>

                    </Grid.Column>
                    <Grid.Column width={8}>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default Footer;