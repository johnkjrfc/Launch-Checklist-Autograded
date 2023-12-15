// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate, and Add an alert at form submission to notify the user that all fields are required. 
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    }
    return "Is a Number";
}

//this will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.
//use validateInput to verify inputs 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log('form submitted');
    //array of the input values
    const inputFields = [pilot, copilot, fuelLevel, cargoLevel];


    for (let i = 0; i < inputFields.length; i++) {
        const inputValue = inputFields[i];
        const validationStatus = validateInput(inputValue);

        if (validationStatus === "Empty") {
            alert("All fields are required!");
            break;
        } else if (validationStatus === "Not a Number" && (i === 2 || i === 3)) {
            alert("Fuel Level and/or Cargo Mass must be valid numbers");
            break;
        } else if (validationStatus === "Is a Number" && (i === 0 || i === 1)) {
            alert("Pilot Name and/or Copilot names are invalid");
            break;
        }

        console.log("Form passes validation")
    }
    const updatePilot = document.getElementById("pilotStatus");
    updatePilot.innerHTML = `Pilot ${pilot} is ready for launch`;
    const updateCopilot = document.getElementById("copilotStatus");
    updateCopilot.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    const updateLaunchStatus = document.getElementById("launchStatus");
    const faultyItems = document.getElementById("faultyItems");
    const updateFuel = document.getElementById("fuelStatus");
    const updateCargo = document.getElementById("cargoStatus");

    function cancelLaunch() {

        faultyItems.style = "visibility: visible";
        updateLaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
        updateLaunchStatus.style.color = "red";

    }
    if (fuelLevel < 10000) {
        updateFuel.innerHTML = "Fuel level too low for launch";
        cancelLaunch();
    } else {
        updateFuel.innerHTML = "Fuel level high enough for launch";
    }
    if (cargoLevel > 10000) {
        updateCargo.innerHTML = "Cargo mass too heavy for launch";
        cancelLaunch();
    } else {
        updateCargo.innerHTML = "Cargo mass low enough for launch";
    }
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        updateLaunchStatus.innerHTML = "Shuttle is Ready for Launch";
        updateLaunchStatus.style.color = "green";
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
        .then(function (response) {
            //if response is not between 200-299
            if (!response.ok) {
                //throw error with error code of response
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
