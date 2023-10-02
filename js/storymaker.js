// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector("#noun1");
const verbButton = document.querySelector("#verb");
const adjectiveButton = document.querySelector("#adjective");
const noun2Button = document.querySelector("#noun2");
const settingButton = document.querySelector("#setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.querySelector("#chosenNoun1");
const chosenVerb = document.querySelector("#chosenVerb");
const chosenAdjective = document.querySelector("#chosenAdjective");
const chosenNoun2 = document.querySelector("#chosenNoun2");
const chosenSetting = document.querySelector("#chosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays
var noun1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjective = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var setting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
var noun1Count = 0;
var verbCount = 0;
var adjectiveCount = 0;
var noun2Count = 0;
var settingCount = 0;

const studentNumber = document.querySelector("#studentId");

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    var noun1Element = noun1[noun1Count];
    chosenNoun1.textContent = noun1Element;
    // if-else to change count setting
    if (noun1Count < noun1.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
    return noun1Element;
}

function verb_on_click() {
    verbElement = verb[verbCount];
    chosenVerb.textContent = verbElement;
    if (verbCount < verb.length - 1) {
        verbCount++;
    } else {
        verbCount = 0;
    }
    return verbElement;
}

function adjective_on_click() {
    adjectiveElement = adjective[adjectiveCount];
    chosenAdjective.textContent = adjectiveElement;
    if (adjectiveCount < adjective.length - 1) {
        adjectiveCount++;
    } else {
        adjectiveCount = 0;
    }
    return adjectiveElement;
}

function noun2_on_click() {
    noun2Element = noun2[noun2Count];
    chosenNoun2.textContent = noun2Element;
    if (noun2Count < noun2.length - 1) {
        noun2Count++;
    } else {
        noun2Count = 0;
    }
    return noun2Element;
}

function setting_on_click() {
    settingElement = setting[settingCount];
    chosenSetting.textContent = settingElement;
    if (settingCount < setting.length - 1) {
        settingCount++;
    } else {
        settingCount = 0;
    }
    return settingElement;
}


// concatenate the user story and display
function playback_on_click() {
    story.textContent = chosenNoun1.textContent + " " + chosenVerb.textContent + " " + chosenAdjective.textContent + " " + chosenNoun2.textContent + " " + chosenSetting.textContent;
    studentNumber.textContent = "Student ID: 200462061";
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
    var randomVerb = verb[Math.floor(Math.random() * verb.length)];
    var randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    var randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
    var randomSetting = setting[Math.floor(Math.random() * setting.length)];
    story.textContent = randomNoun1 + " " + randomVerb + " " + randomAdjective + " " + randomNoun2 + " " + randomSetting;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
