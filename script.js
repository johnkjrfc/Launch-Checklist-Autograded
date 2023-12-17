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
            addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);
        }
    }).catch(function (error){
        console.error("Fetch failed: ", error);
    })
    let form = document.querySelector
    console.log("Fully loaded")
})

//load DOM prior to adding listeners

//add event listener for submit button and use formSubmission
document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    let pilot = document.querySelector('input[name="pilotName"]');
    let copilot = document.querySelector('input[name="copilotName"]');
    let fuelLevel = document.querySelector('input[name="fuelLevel"]');
    let cargoLevel = document.querySelector('input[name="cargoMass"]');
    let list = document.getElementById("faultyItems");
    
    console.log(pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    console.log("form received");

});

