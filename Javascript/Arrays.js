let marks = [93,79,73,78,87];
let len = marks.length;
marks[0] = 98;
var sum = 0;
for(let mark of marks){
    sum = sum + mark;
}
console.log("Sum of the marks: ",sum);
let avg = (sum/len);

console.log("Average of the marks: ",avg);