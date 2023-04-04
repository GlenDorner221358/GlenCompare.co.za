// get all the imports out the way
import React, { useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Radar, Bar, Line } from 'react-chartjs-2';

//main function
function CompareGraph() {
  //declare all my variables
  const [pokemonName, setPokemonName] = useState('');
  const [baseStats, setBaseStats] = useState([]);
  const [pokeId, setpokeId] = useState('');

  //Do the API call and set variables
  const fetchPokemonData = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const stats = response.data.stats.map((stat) => stat.base_stat);
      const pokeId = response.data.id;
      setBaseStats(stats);
      setpokeId(pokeId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //update the variables everytime the value in the text input changes
  const handleInputChange = (event) => {
    const { value } = event.target;
    setPokemonName(value);
    fetchPokemonData(value);
  };


  //setting up the look and data of the radar chart
  const radarChartConfig = {
    data: {
      labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
      datasets: [
        {
          label: 'Base stats',
          data: baseStats,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scale: {
        ticks: { beginAtZero: true },
      },
    },
  };


  //same thing but for the bar chart
  const barChartConfig = {
    type: 'bar',
    data: {
      labels: ['HP', 'Attk', 'Def', 'Sp.Attack', 'Sp.Defense', 'Speed'],
      datasets: [
        {
          label: 'Base stats but on a bar',
          data: baseStats,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };


  //same thing again but for the line chart
  const lineChartConfig = {
    data: {
      labels: ['HP', 'Attk', 'Def', 'Sp.Attack', 'Sp.Defense', 'Speed'],
      datasets: [
        {
          label: 'Base stats but on a line',
          data: baseStats,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Stat',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
    },
  };

  //returns and displays everything
  return (
    <div class="charteese">
      <label htmlFor="pokemonName"> Enter Pokemon Name : </label>
      <input type="text" id="pokemonName" value={pokemonName} onChange={handleInputChange} />

      {pokemonName && (
        <div>
          <h2 id="namez"> {pokemonName} </h2>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`} alt={pokemonName} width={200}/>
          <Radar data={radarChartConfig.data} options={radarChartConfig.options} />
          <Bar class="beppo" data={barChartConfig.data} options={barChartConfig.options} />
          <Line class="beppo" data={lineChartConfig.data} options={lineChartConfig.options} />
        </div>
      )}
    </div>
  );
}

export default CompareGraph;
