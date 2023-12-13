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
    if (testInput.trim() === "") {
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
    event.preventDefault();

    const pilotName = document.getElementByID("pilotName").value;
    const copilotName = document.querySelector('input[name="copilotName"]');
    const fuelLevel = document.querySelector('input[name="fuelLevel"]');
    const cargoMass = document.querySelector('input=[name="cargoMass"]');
    //array of the input values
    const inputFields = [pilotName, copilotName, fuelLevel, cargoMass];
    

    for (let i = 0; i < inputFields.length; i++) {
        const inputValue = inputFields[i];
        const validationStatus = validateInput(inputValue);

        if (validationStatus === "Empty") {
            alert("All fields are required!");
            break;
        } else if (validationStatus === "Not a Number" && (i === 2 || i ===3)) {
            alert("Fuel Level and/or Cargo Mass must be valid numbers");
            break;
        } else if (validationStatus === "Is a Number" && (i === 0 || i === 1)) {
            alert("Pilot Name and/or Copilot names are invalid")
            break;
        }
        
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
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