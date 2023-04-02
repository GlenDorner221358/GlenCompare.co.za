import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

//chat always forgets this import
import Chart from 'chart.js/auto';


//tweaked code courtesy of Chatgpt
const PokemonGraph = () => {

  //variables for getting API data and the selected value from the select
  const [data, setData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('pokemon');

  useEffect(() => {
    const fetchData = async () => {
      try {
        //API call using axios
        const response = await axios.get('https://pokeapi.co/api/v2/generation');
        const generationData = response.data.results;
        //mapping the gen name to the chart labels
        const labels = generationData.map((generation) => generation.name);

        const dataPoints = await Promise.all(
          generationData.map(async (generation) => {
            const response = await axios.get(generation.url);
            let count;
            //telling the API what to get and the chart what to display based on the selected value
            switch (selectedOption) {
              case 'pokemon':
                count = response.data.pokemon_species.length;
                break;
              case 'moves':
                count = response.data.moves.length;
                break;
              case 'types':
                count = response.data.types.length;
                break;
              case 'abilities':
                count = response.data.abilities.length;
                break;
              default:
                count = 0;
            }
            return count;
          })
        );


        //setting up the line graph
        setData({
          labels,
          datasets: [
            {
              label: getLabel(selectedOption),
              data: dataPoints,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              //styling
              tension: 0.2,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(109, 255, 85)',
                'rgb(210, 90, 190)'
              ]
            },
          ],
        });
      } catch (error) {
        console.log(error);
        //tells me if there's an error
      }
    };

    fetchData();
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //setting up the labels for the select
  const getLabel = (option) => {
    switch (option) {
      case 'pokemon':
        return 'Number of new Pokemon introduced in each gen';
      case 'moves':
        return 'Number of new moves introduced';
      case 'types':
        return 'Number of new types introduced';
      case 'abilities':
        return 'Number of new abilities introduced';
      default:
        return '';
    }
  };

  //returns everything to be displayed
  return (
    <div class="Charteese">
      <h1 id="Chartlabel">{getLabel(selectedOption)}</h1>
      <select id="ChartSelector" value={selectedOption} onChange={handleOptionChange}>
        <option value="pokemon"> New Pokemon </option>
        <option value="moves"> New Moves </option>
        <option value="types"> New Types </option>
        <option value="abilities"> New Abilities </option>
      </select>
      {data && <Line data={data} />}
    </div>
  );
};

export default PokemonGraph;