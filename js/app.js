// js/main.js

// Ensure `irregularVerbs` is available before use
// This code should be in your main JavaScript file

function loadLocalHTML(fileName, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `data/irregulares/${fileName}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            } else {
                callback(null);
            }
        }
    };
    xhr.send();
}

// Function to conjugate verbs
async function conjugateVerb() {
    const verb = document.getElementById('verbInput').value.trim().toLowerCase().replace(/[´.,/#!$%^&*;:{}=\-_+`~()'?¿¡!|]/g,"");
    const conjugationOutput = document.getElementById('conjugationOutput');

    if (verb === "") {
        conjugationOutput.innerHTML = "Eskrive un verbo, por favor!";
        return;
    }

    let baseVerb = verb;

    // Remove 'se' if it is a reflexive verb
    if (verb.endsWith('se')) {
        baseVerb = verb.slice(0, -2); // Remove 'se'
    }

    // // Check if the base verb is irregular
    // if (irregularVerbs.includes(baseVerb)) {
    //     conjugationOutput.innerHTML = `El verbo ${verb.toUpperCase()} es irregular.`;
    //     return;
    // }

    // Check if the base verb is irregular
    if (irregularVerbs.includes(baseVerb)) {
        loadLocalHTML(`${baseVerb}.html`, function(conjugationHTML) {
            if (conjugationHTML) {
                conjugationOutput.innerHTML = conjugationHTML;
            } else {
                conjugationOutput.innerHTML = `El verbo ${verb.toUpperCase()} es irregolar. En kurto van estar este modo de verbos.`;
            }
        });
        return;
    }

    // Define the verbs to exclude
    const excludedVerbs = ['ir', 'ser', 'estar', 'ver', 'dar'];

    // Iterate over each irregular verb to see if the base verb ends with it
    for (let i = 0; i < irregularVerbs.length; i++) {
        let irregular = irregularVerbs[i];

        // Check if the verb ends with the irregular verb
        if (verb.endsWith(irregular)) {

            // Exclude verbs that end in -ir, -ser, -estar, -ver, -dar
            if (excludedVerbs.includes(irregular)) {
                continue;
            }

            conjugationOutput.innerHTML = `El verbo ${verb.toUpperCase()} eskapa en '${irregular.toUpperCase()}', ke es iregolar.`;
            return;
        }
    }

    // Check if the verb has a valid ending
    const verbEnding = getVerbEnding(verb);
    if (verbEnding === null) {
        conjugationOutput.innerHTML = "Eskrive un verbo ke eskape kon -ar, -er, o -ir, por favor!";
        return; // Exit function early if the verb is invalid
    }

    let message = "";
    if (!regularVerbs.includes(baseVerb)) {
        message = `${verb.toUpperCase()}: No se topa en mi baza de datos; si es regolar, se konjuga ansina: `;
    }

    let conjugation = "";

    switch (verbEnding) {
        case "ar":
            conjugation = conjugateAr(verb);
            break;
        case "er":
            conjugation = conjugateEr(verb);
            break;
        case "ir":
            conjugation = conjugateIr(verb);
            break;
        case "arse":
            conjugation = conjugateArSe(verb);
            break;
        case "erse":
            conjugation = conjugateErSe(verb);
            break;
        case "irse":
            conjugation = conjugateIrSe(verb);
            break;
        default:
            conjugation = "This is not a regular verb. Please enter a valid -ar, -er, or -ir verb.";
    }
    
    conjugationOutput.innerHTML = message + conjugation;
}

// Function to determine the verb ending
function getVerbEnding(verb) {    
    if (verb.endsWith("ar")) {
        return "ar";
    } else if (verb.endsWith("er")) {
        return "er";
    } else if (verb.endsWith("ir")) {
        return "ir";
    } else if  (verb.endsWith("arse")) {
        return "arse"
    } else if  (verb.endsWith("erse")) {
        return "erse"
    } else if  (verb.endsWith("irse")) {
        return "irse"
    } else {
        return null;
    }
}

// Function to handle the Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        conjugateVerb();
    }
}

// Attach event listener to the input field
document.getElementById('verbInput').addEventListener('keydown', handleKeyPress);

// Attach event listener to the button
document.querySelector('button').addEventListener('click', conjugateVerb);