const arr = [1,34,5,25,5];
let target = 1;
let isFound = false;
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        isFound = true;
    }
}
if(isFound){
    console.log("Element found: "+target);
}
else{
    console.log("Not found: "+null);
}