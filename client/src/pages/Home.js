import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Grid, Button } from "semantic-ui-react";

import FeaturedContainer from "../components/FeaturedContainer";
import InstallItem from "../components/InstallItem.js";
import "./Home.css";

import { data } from "../data/items";

function Home() {
    return (
        <Container as={"main"} className="main">
            <Container textAlign="center" text>
                <Header as="h1">Auto Audio & Media</Header>
                <Header.Subheader>
                    Everthing audio and media in automotive
                </Header.Subheader>
            </Container>

            <Container className="home-shop" textAlign="center">
                <FeaturedContainer />

                <Button color="red" size="massive" as={Link} to="/shop">
                    Shop Now!
                </Button>
            </Container>
            <Container className="home-installs">
                <Header textAlign="center" as="h1">
                    Installs
                </Header>

                <Grid stackable columns={2}>
                    <InstallItem>
                        This was an install on a Chevrolet Colorado 2007.
                    </InstallItem>
                </Grid>

                <Container textAlign="center">
                    <Button color="red" size="massive" as={Link} to="/installs">
                        More Installs!
                    </Button>
                </Container>
            </Container>
        </Container>
    );
}

export default Home;
