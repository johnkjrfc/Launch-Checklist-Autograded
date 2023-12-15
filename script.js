// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;
    //   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    //     let listedPlanetsResponse;
    //     listedPlanetsResponse.then(function (result) {
    //         listedPlanets = result;
    //         console.log(listedPlanets);
    //     }).then(function () {
    //         console.log(listedPlanets);
    //         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    //     })  
    //uncomment at part 3
    //add event listener for submit button and use formSubmission
    // const submitForm = document.getElementById("formSubmit");// delete?
    document.getElementById("formSubmit").addEventListener("click", function (event) {
        let pilot = document.querySelector('input[name="pilotName"]');
        let copilot = document.querySelector('input[name="copilotName"]');
        let fuelLevel = document.querySelector('input[name="fuelLevel"]');
        let cargoLevel = document.querySelector('input[name="cargoMass"]');
        let list = document.getElementById("faultyItems");
        event.preventDefault();
        console.log(pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        console.log("form received");


    });
});
