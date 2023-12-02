// var arr = [5,7,6,"hello",[3,7,8]];
// console.log(arr[2])

// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// console.log(arr);

// arr.push(67);
// arr.pop();
// arr.pop();

// console.log(arr);

var arr = [5,7,6,"hello"];
// arr.shift();
// console.log(arr);
// arr.unshift(106);
// console.log(arr);

arr.splice(3,2,46,56,76,67);
console.log(arr);


//for-of loop

for (var item of arr) {
    console.log(item);
}

// array length
console.log(arr.length)

var arr = [34,76, 768,213,8]

var y = [];
for (const item of arr) {
    y.push(item*2);
}

console.log(y);

