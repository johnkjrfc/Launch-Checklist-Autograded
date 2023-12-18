// Write your JavaScript code here!

//  const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        let listedPlanets = result;
        console.log(listedPlanets);

        // Pick a random planet from list, add that information to destination
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log("The selected planet", selectedPlanet);
        if (selectedPlanet) {
            addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
        }
    })
    .catch(function (error){
        console.error("Fetch failed: ", error);
    })
    document.getElementById("formSubmit").addEventListener("click", function (event) {
        
        let pilot = document.querySelector('input[name="pilotName"]');
        let copilot = document.querySelector('input[name="copilotName"]');
        let fuelLevel = document.querySelector('input[name="fuelLevel"]');
        let cargoLevel = document.querySelector('input[name="cargoMass"]');
        let list = document.getElementById("faultyItems");
        event.preventDefault();
        console.log(pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        console.log("form received");

    });
    console.log("Fully loaded")
})


//add event listener for submit button and use formSubmission



//load DOM prior to adding form listener

// document.addEventListener("DOMContentLoaded", function() {
//     let form = document.querySelector("form");
//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         let pilot = document.querySelector('input[name="pilotName"]');
//         let copilot = document.querySelector('input[name="copilotName"]');
//         let fuelLevel = document.querySelector('input[name="fuelLevel"]');
//         let cargoLevel = document.querySelector('input[name="cargoMass"]');
//         let list = document.getElementById("faultyItems");
        
//         console.log(pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
//         formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
//         console.log("form received");
//     })
    
// })
