function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage:
const str = "hello world";
const capitalizedStr = capitalizeFirstLetter(str);
console.log(capitalizedStr); // Output: "Hello world"
