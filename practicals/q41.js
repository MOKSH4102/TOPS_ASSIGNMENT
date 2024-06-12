// Get the current date
let currentDate = new Date();

// Extract individual components of the date
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Months are zero-based, so January is 0
let year = currentDate.getFullYear();

// Format the date as MM/DD/YYYY
let formattedDate = day + '/' + month + '/' + year;

// Print the current date
console.log("Current date is: " + formattedDate);
