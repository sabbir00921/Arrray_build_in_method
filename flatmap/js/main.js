const arr = [1, 4, 3, 6, 8, [6, 9], [8, 2, 5], 0];
console.log(arr);


//.flatMap method frist flat the array then work map > return a new array
const newArr = arr.flatMap((item, index, array) => {
   // console.log(item);
    return item;
})
console.log(newArr);






