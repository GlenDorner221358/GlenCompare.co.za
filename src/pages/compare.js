//get the imports out of the way
import React from "react";
import "../css/compare.css";
import CompareGraph from "../components/CompareGraph.js";

// main function
function Compare (){
    return(
        // main container div followed immediately by hero image and text
        <div class="bgcolorLOL3d">
            <div class="headerimage3">
                <div class="headertext3">   
                    <h1> Compare page </h1>
                </div>
            </div>

            <div class="bgcolorLOL4top">
                <h1> How this works... </h1>
                <p>
                    Welcome to the compare page! On this page you can type the names of the 2 pokemon you want to compare into the boxes.
                    No capital letters. Once you have typed the name of the pokemon you want, the base stats are then displayed.
                </p>
            </div>

            {/* calling 2 of the comparegraph functions so we can compare */}
            <div id="comparebox">
                <div class="bgcolorLOL4d left">
                    <CompareGraph />
                </div>
                <div class="bgcolorLOL4r right">
                    <CompareGraph />
                </div>
            </div>

        </div>
    )
}

export default Compare;