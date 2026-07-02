const student = { // an student object is created
    name : "Abdullah Hussain",
    age : 21,
    cgpa : 3.23,
    isPass : true
};
console.log("Details of student: "+student);
console.log("CGPA of "+student.name+" is "+student.cgpa);

student.name = "Mushahid Hussain";

console.log(student.name);