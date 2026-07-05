let reverseString = "";
let string = "Dad";
let newString = string.toLowerCase();
for(let i=string.length-1;i>=0;i--){
    reverseString += string[i];
}

if(reverseString === newString){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}