### Mockups

Here are some mockups for the different page of the webpage. 



## CONCLUSION

This project was a lot of fun compared to last year. Chatgpt really sped up the process, and the coding we were doing this term seemed to be more basic and understandable.


<br />

![GitHub repo size](https://img.shields.io/github/repo-size/GlenDorner221358/GlenCompare.co.za?color=lightblue)
![GitHub watchers](https://img.shields.io/github/watchers/GlenDorner221358/GlenCompare.co.za?color=lightblue)
![GitHub language count](https://img.shields.io/github/languages/count/GlenDorner221358/GlenCompare.co.za?color=lightblue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/GlenDorner221358/GlenCompare.co.za?color=lightblue)

<h5 align="center" style="padding:0;margin:0;"> | Glen Dorner | </h5>
<h5 align="center" style="padding:0;margin:0;"> | 221358 | </h5>
<h6 align="center">DV200 | Term 1</h6>
</br>

<h3 align="center">GlenCompare</h3>
<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
    - [Project Description](#project-description)
    - [Built With](#built-with)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [How to install](#how-to-install)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
    - [Ideation](#ideation)
    - [Wireframes](#wireframes)
- [Development Process](#development-process)
    - [Implementation Process](#implementation-process)
        - [Highlights](#highlights)
        - [Challenges](#challenges)
    - [Future Implementation](#peer-reviews)
- [Final Outcome](#final-outcome)
    - [Mockups](#mockups)
    - [Video Demonstration](#video-demonstration)
- [Conclusion](#conclusion)
- [License](#license)
<!-- - [Contact](#contact) -->
- [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->

## About the Project

### Project Description

Welcome to glencompare! This project compares the stats of 2 different pokemon using the open API called pokeAPI and displays them on on easy to understand charts using chartjs!

This project was built using React, Chartjs, bootstrap, axios and react-routing! And of course, the pokeAPI...

### Built With
[<img src="https://www.svgrepo.com/show/374032/reactjs.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] [<img src="https://www.svgrepo.com/show/349419/javascript.svg" width="5%" height="5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] [<img src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" width="6%" height="6%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

These files do not have the 'node_modules' file included, you have to run 'npm i' in your terminal.

Install these dependencies: React-routing, Bootstrap, Chartjs, chartjs2 and axios.

### Installation

Here are a couple of ways to clone this repo:

1.  GitHub Desktop </br>
    Enter `https://github.com/GlenDorner221358/GlenCompare.co.za.git` into the URL field and press the `Clone` button.

2.  Clone Repository </br>
    Run the following in the command-line to clone the project:

    ```sh
    git clone https://github.com/GlenDorner221358/GlenCompare.co.za.git
    ```

3.  Install Dependencies </br>
    Run the following in the command-line to install all the required dependencies:

    ```sh
    npm i
    ```

## Features and Functionality

Using this website you can:
1. Compare the stats of 2 different pokemon (any pokemon)
2. See how many things were introduced in each gen on the timeline page.

## Concept Process

I chose the pokeAPI as my api of choice as I am very familiar with the pokemon games and the data you can pull from them. From the stat I wanted this website to be about comparing 2 pokemon.

### Wireframes

#### Landing
![image1](https://github.com/GlenDorner221358/GlenCompare.co.za/blob/main/DV200%20Landing%20dashboard%20low%20fidelity.png)
#### Compare
![image2](https://github.com/GlenDorner221358/GlenCompare.co.za/blob/main/DV200%20Timeline%20page%20low%20fidelity.png)
#### Timeline
![image3](https://github.com/GlenDorner221358/GlenCompare.co.za/blob/main/DV200%20Comparison%20page%20low%20fidelity.png)

## Development Process

First, I started with ideation. Creating a color scheme, choosing a name, choosing an API and thinking about what to compare. Next I created some basic wireframes. After that I made a basic frontend, then I implemented the basic API calls, then the charts. I also learned to use AI tools to speed up the development process.

### Custom UI

The brief for this part was not very specific, so for my custom UI elements I added some bootstrap cards at the bottom of my Landing page describing some functions of the website.

### Implementation Process

- I used `npx create-react app` to create this React project. I implemented component-based development instead of classes. By doing this, I will be able to easily inject and eject components into my project, making it refactorable and reusable instead of writing up classes I have to do everytime.

- `axios` was implemented so that I can make HTTP requests to the PokeAPI so that I can dynamically display these datasets on charts.js.

#### Highlights

* The biggest thing I want to highlight is how much chatgpt sped up the coding process.
* The compare page updates as you type, not all at once.
* A really cool feature I added was displaying the sprites of the pokemon you are comparing. I feel this adds a nice visual aspect to help you when comparing.


#### Challenges

* When importing some code from chatgpt, it forgets the main chartjs auto import that makes the charts actually display. Took me a while to figure that out.
* React also does not have error messages for dependencies or some syntax errors, so sometimes when I messed up code I just wouldn't know what was wrong.
* Some of the css was also a challenge because of the component based nature of react.
* For the charts on the compare page, because of the nature of pokemon you cant really display a chart that will apply to EVERY pokemon *except for the base stats*. Every pokemon has base stats.

### Future Implementation

- Some functionality I would like to add to this website is displaying more varied data for the compare page, like moves you can learn in each gen, and type advantages.

<!-- FINAL OUTCOME -->

## Final Outcome
### Mockups

<!-- TODO Change this -->
#### Landing
![image5](https://github.com/GlenDorner221358/GlenCompare.co.za/blob/main/Mockups/Landing%20mockup.png)
#### Compare
![image6](https://github.com/GlenDorner221358/GlenCompare.co.za/blob/main/Mockups/Compare%20mockup.png)
#### Timeline
![image7](https://github.com/GlenDorner221358/GlenCompare.co.za/blob/main/Mockups/Timeline%20mockup.png)
<br>

<!-- VIDEO DEMONSTRATION -->

### Video Demonstration
[View Demonstration]()

See the [open issues](https://github.com/GlenDorner221358/GlenCompare.co.za/issues) for a list of known issues.

<!-- AUTHORS -->

## Author
- **Glen Dorner** - [Github](https://github.com/GlenDorner221358)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

- **Project Link** - https://github.com/GlenDorner221358/GlenCompare.co.za

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->

- [Figma](https://www.figma.com/)
- [ChatGPT](https://chat.openai.com/)


[image1]: src/Assets/Images/Dashboard.png
[image2]: src/Assets/Images/Compare.png
[image3]: src/Assets/Images/Timeline.png
