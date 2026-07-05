let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];

//Task 1: remove the first company from the array
let removedFirst = companies.shift();// first company removed
console.log(removedFirst);

// new Array
console.log(companies);

//Task 2: remove Uber and Ola in its position
companies.splice(1,1,"OLA"); // remove Uber from 2 index and add OLA

// new Array
console.log(companies);

//Task 3: add Amazon at the end

companies.push("Amazon"); // added Amazon at the end


// new Array
console.log(companies);


