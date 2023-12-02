let arr=[13,5,65,76];
let reduceVal=arr.reduce((acc,item,ind,arr)=>{
    // console.log(acc);
   // console.log(acc);
    //return acc; // this value will be stored in the accumulator for next iteration
})

console.log(reduceVal);


let arr1 = [1,1,1,1,1];
let reducesum = arr1.reduce((acc, item,ind,arr1) => {
    let x= acc + item;
    return x;
})
console.log(reducesum);