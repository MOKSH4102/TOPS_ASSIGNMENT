// Function to compare two objects
function compareObjects(obj1, obj2) {
    // Convert objects to JSON strings for comparison
    const json1 = JSON.stringify(obj1);
    const json2 = JSON.stringify(obj2);

    // Compare JSON strings
    return json1 === json2;
}

// Example objects to compare
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };

// Compare the objects
if (compareObjects(obj1, obj2)) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}
