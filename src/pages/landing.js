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
            <div class="bgcolorLOL"> 
            <div class="headerimage">
                <div class="headertext">
                    <h1> Welcome to GlenCompare! </h1>
                </div>
            </div>
            
            <h1 class="landheader"> Frequently asked questions: </h1>

            {/* The info accordions */}
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

            {/* the info cards */}
            <CardGroup id="cardsu">
                <Card>
                    <Card.Img variant="top" src={fight} alt="fight.jpeg" />
                    <Card.Body>
                    <Card.Title> Compare types of stats! </Card.Title>
                    <Card.Text>
                        You can compare the stats of two different pokemon to determine who better suits your needs when training!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"> Type matchups are everything! </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={stats} alt="stats.png" />
                    <Card.Body>
                    <Card.Title> Compare stats! </Card.Title>
                    <Card.Text>
                        You can pull the different base stats of both pokemon to determine which needs
                        training in which area!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"> Base stats only speak for unleveled pokemon! </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={moves} alt="moves.jpeg" />
                    <Card.Body>
                    <Card.Title> Compare moves of stats! </Card.Title>
                    <Card.Text>
                        Some stats cause movespeed! Be sure to pay attention as they are named very obviously!
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"> Some stats are earned without evolving! </small>
                    </Card.Footer>
                </Card>
            </CardGroup>    
            </div>     

        </div>
    )
}

export default Landing