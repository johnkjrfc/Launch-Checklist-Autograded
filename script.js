// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {


    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        let listedPlanets = result;
        console.log(listedPlanets);

        // Pick a random planet from list, add that information to destination
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log("The selected planet", selectedPlanet);
    }).catch(function (error){
        console.error("Fetch failed: ", error);
    })
    //Do I need to finish my code here to make all the above run???
})


//add event listener for submit button and use formSubmission
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

