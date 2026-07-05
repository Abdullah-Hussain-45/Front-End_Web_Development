//Arrays in Javascript are dynamic-> automatically grow and shrink unlike in Java and C++
let pushExercises = ["Standard Pushups","Diamond Pushups","Incline Pushups","Decline Pushups"];

pushExercises.push("Archer Pushups","Dips");

console.log(pushExercises);// will add two new 

pushExercises.pop();// will remove last one "Dips"

console.log(pushExercises);

pushExercises.unshift("Power Pushups"); // add new at start of the array

pushExercises.shift(); //delete first element

//Concatenation of two arrays

let pullExercises = ["Pull ups","Chin ups"];

let newArray = pushExercises.concat(pullExercises); // add these two arrays and return new array

let str = pushExercises.toString(); // converted into string

//Slice and Splice methods, slice does'nt change the array while splice does it

pushExercises.slice(1,4); //return elements from beginning to 3 index

