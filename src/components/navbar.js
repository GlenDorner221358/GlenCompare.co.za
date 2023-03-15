import React from "react";
import './../css/navbar.css';
import { Nav } from "react-bootstrap";


function Sidebar (){
    return(
        <div id="Navcont">
            <div class="menubox"> </div>
            <div class="navbarbox logo"> <h2 id="logo"> GlenCompare </h2> </div>
            
            <Nav classname="me-auto">
                <div class="navbarbox"> <Nav.Link href="/"> Homepage </Nav.Link> </div>
                <div class="navbarbox"> <Nav.Link href="/compare"> Compare </Nav.Link> </div>
                <div class="navbarbox"> <Nav.Link href="/timeline"> Timeline </Nav.Link> </div>
            </Nav>
        </div>
    )
}

export default Sidebar