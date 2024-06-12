// Get the current date
const currentDate = new Date();

// Get the month, day, and year
const month = currentDate.getMonth() + 1; // +1 because getMonth() returns 0-11
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Format the date in different ways

const format1 = `${day}/${month}/${year}`; // dd/mm/yyyy

// Log the results
console.log(`Format 1: ${format1}`); // dd-mm-yyyy
