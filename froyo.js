// User Prompt
const userInput = prompt("List the froyo flavors you would like with comma's ");

// Parse user prompt into array
const froyoFlavors = userInput.split(",");

// track flavors
const observedFlovors = {};

// read of the flovors that have been counted
froyoFlavors.forEach(flavor => {
    if (observedFlovors[flavor]){
        observedFlovors[flavor] += 1; // Incremet count if flavor has benn observerd
    } else {
        observedFlovors[flavor] = 1; // Initialice count if flavor has been not observed
    }
});

// print the array of flavors
console.log ("Froyo Flavors:", froyoFlavors);

// print obsrved flavors
console.log("Observed Flavors::", observedFlovors)

// Print a table listing how many of each flavor has been ordered
console.log("Flavor\t\tOrdered");
console.log("------------------------");
for (let flavor in observedFlovors) {
    console.log(`${flavor}\t\t${observedFlovors[flavor]}`);
}
;