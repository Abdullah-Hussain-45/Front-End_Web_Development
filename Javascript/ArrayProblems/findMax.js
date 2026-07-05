let nums = [18,12,50,42,98];

let max = nums[0];
//By using loop-Time Complexity 0(n)
for(let i=1;i<nums.length;i++){
    if(max < nums[i]){ // check if current max is less than next element if Yes
        max = nums[i];//then max will be new element
    }
}
console.log("Max element: ",max);

//By using sort() method-Time Complexity 0(1)

nums =  nums.sort();
let result = nums[nums.length-1];

console.log("Largest Element: ",result);