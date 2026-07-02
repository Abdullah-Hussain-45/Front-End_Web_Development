let marks = "345";
let grade;
if( marks>=0 && marks<=49){
    grade = "F";
}else if(marks>=50 && marks<=59){
    grade = "D";
}else if(marks>=60 && marks<=69){
    grade = "C";
}else if(marks>=70 && marks<=89){
    grade = "B";
}else if(marks>=80 && marks<=100){
    grade = "A";
}else{
    console.log("Invalid value!");
}
console.log('Grade: '+grade);