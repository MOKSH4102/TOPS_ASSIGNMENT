
function convertYearsToDays(years) {
    let days = years * 365;
    return days;
 }
 
 function convertDaysToYears(days) {
    let years = days / 365;
    return years;
 }
 
 let years = 2
 let days = 365
 
 years = parseFloat(years);
 days = parseFloat(days);
 
 let yearsToDays = convertYearsToDays(years);
 let daysToYears = convertDaysToYears(days);
 
 console.log("Number of days in " + years + " years is: " + yearsToDays);
 console.log("Number of years in " + days + " days is: " + daysToYears);