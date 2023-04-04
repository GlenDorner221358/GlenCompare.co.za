import React from 'react';
import "../css/timeline.css";

//The big one
import PokemonGraph from "../components/PokemonGraph.js";

function Timeline (){
  return (
    <div>
        <div class="bgcolorLOL2"> 
            <div class="headerimage2">
                <div class="headertext2">
                    <h1> Timeline page </h1>
                </div>
            </div>

            <div id="backgroundColor">
                <h1> How this works... </h1>
                <p> This is the timeline page. On this page you can see the amount of things introduced in each generation!
                    just use the handy drop-down list to choose what you want displayed on the chart! </p>
                <PokemonGraph /> 
            </div>
            
        </div>
    </div>
  );
};

export default Timeline;
