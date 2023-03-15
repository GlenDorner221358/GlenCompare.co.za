import React from "react";
import ".././css/landing.css";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import fight from '.././images/fight.jpeg';
import stats from '.././images/stats.png';
import moves from '.././images/moves.jpeg';

function Landing (){
    return(
        <div>
            <div class="headerimage">
                <div class="headertext">
                    <h1> Welcome to GlenCompare! </h1>
                </div>
            </div>
            
            <h1 class="landheader"> Frequently asked questions: </h1>

            <Accordion id="acc1" defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>GlenCompare Summary</Accordion.Header>
                <Accordion.Body>
                    Welcome! This is a website where you can check different pokemon against eachother and compare their stats!
                    We use pokeAPI to get the latest and greatest data about all of the recent gameplay changes and provide
                    an easy to use comparitive interface!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> What API do we use? </Accordion.Header>
                <Accordion.Body>
                    We use pokeAPI! <a id="specialcase" href="https://pokeapi.co/"> Here is a link </a> to their website. Using this API
                    we can get stats about a specific pokemon like their type, base stats, moves they can learn, weight, their friendlyness
                    and even where they live! Cant hide from me!
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>


            <h1 class="landheader2"> Uses for our site: </h1>

            <CardGroup id="cardsu">
                <Card>
                    <Card.Img variant="top" src={fight} alt="fight.jpeg" />
                    <Card.Body>
                    <Card.Title> Compare types </Card.Title>
                    <Card.Text>
                        You can compare the types of two different pokemon to determine which would be more
                        effective in a 1v1 matchup.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"> Type matchups are everything! </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={stats} alt="stats.png" />
                    <Card.Body>
                    <Card.Title> Compare stats </Card.Title>
                    <Card.Text>
                        You can pull the different base stats of both pokemon to determine which needs
                        training in which area.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"> Base stats only speak for unleveled pokemon! </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={moves} alt="moves.jpeg" />
                    <Card.Body>
                    <Card.Title> Compare moves </Card.Title>
                    <Card.Text>
                        Moves are the deciding factor in a battle. Using our website, you can check what powerful moves
                        your pokemon is able to learn!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"> Some moves are learned without evolving! </small>
                    </Card.Footer>
                </Card>
            </CardGroup>         

        </div>
    )
}

export default Landing