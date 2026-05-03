// PART 1: Time-based Greeting
// Use prompt to ask for the user's name
let userName = prompt("Please enter your name:");

// Get the current hour from the system
let currentHour = new Date().getHours();
let greeting = "";

// Time-based logic structure
if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

// Print personalized greeting to the console
console.log(greeting + ", " + userName + "!");


// PART 2: Age and Days Lived Verification
// Use prompt to ask for birth year
let birthYear = prompt("Please enter your birth year (e.g., 2004):")

// Calculate age using 2026 as the current year
let age = 2026 - birthYear;

// Calculate approximate days lived
let daysLived = age * 365;
console.log("You have lived for approximately " + daysLived + " days!");

// Age verification logic
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}