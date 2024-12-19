//forEach take a call back function, don't create new array, Don't return & it's just mutant original array. 

const arr = [1, 5, 4, 2, 6, 4, 8, 4, 12, 45]
const newArr = arr.forEach((item, index) => {
    item += item
    console.log(`index: ${index} item: ${item}`)
    //return item; forEach don't return. 
});
// console.log(newArr); output : undefined


//map is similar like forEach but advantage is it's return and create a new array, don't mutant original.
// flatMap is fristly creating the array in array flat, then execute mat.
const mapArr = [10, 15, 4, 12, 6, 14, 8, 4, 12, 45]
const newmapArr = mapArr.map((item, index) => {
    item += item
    console.log(`index: ${index} item: ${item}`)
    return item;
});
console.log(newmapArr);  //   output :  [2, 10, 8, 4, 12, 8, 16, 8, 24, 90]

//flatMap create a new array don't mutant original array.
const flatMapArr = [[1, 5], [4, 2, 6], [4, 8, 4], [545, 54]]
const newflatMapArr = flatMapArr.map((item, index) => {
    item += item
    console.log(`index: ${index} item: ${item}`)
    return item;
});

console.log(flatMapArr);
console.log(newflatMapArr);

//filter return multiple items in a new array.
const filterArry = [21, 5, 8, 574, 78, 4, 2, 3, 6, 8]
const newArray = filterArry.filter((item) => {
    return item > 5;
})
console.log(filterArry);
console.log(newArray);

//reduce sum all items and return the result.
const price = [1000 , 5000, 2000, 4000, 100,200]
let previou = 10000
const totalprice = price.reduce((initial, item) => {
    return initial = initial+item
}, previou);
console.log(totalprice);

