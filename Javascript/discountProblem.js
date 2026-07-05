let items = [250,645,300,900,50];

const discount = 0.1;
let finalPrice = 0;
for(let i=0;i<items.length;i++){
    finalPrice = items[i] * discount;
    items[i] =  items[i] - finalPrice; 
}

for(let item of items){
    console.log(item);
}