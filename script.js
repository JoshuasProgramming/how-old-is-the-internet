//January 1, 1983 => Calculate todays date to the start of the internet
const internetOld = document.getElementById('internetOld');
let internet = new Date("January 1, 1983");
let internetNow = (((new Date()) - internet) / (1000 * 3600 * 24)).toFixed(0);
internetOld.innerHTML = internetNow;

//Grabbing the other elements
const year = document.getElementById('year');
const months = document.getElementById('months');
const days = document.getElementById('days');
const output = document.getElementById('output');

//Once the user presses the button an event happens...
const btn = document.getElementById('btn').addEventListener("click", (e)=>{
    //getting the date of birth and taking it away from the date of the internet
    let dob = (year.value + "/" + months.value + "/" + days.value);
    let result = (((new Date(dob)) - internet) / (1000 * 3600 * 24) + 1).toFixed(0);
    //outputing the result into the 'output' area within the HTML
    output.innerText = "The internet was " + (result) + " days old when you were born";
    document.body.append(output);
})