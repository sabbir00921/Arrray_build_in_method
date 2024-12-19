//.every method check all items, if every item pass the condition, then return true
const myArray = ["sabbir", "diu", "gazipur", "cse"]
const newArray = [1, 4, 3, 6, 8, 9, 8, 5];
const newArr = newArray.every((item) => {
    return item >= 1;//when every condition is true then execute true.
})
console.log(newArr);

//.some method check all items, if one item pass the condition, then return true
const sArr = [10, 15, 5, 87, 7, 65]
const newsArr = sArr.some((item) => {
    return item > 15 // if atlest one item is pass the condition then return true
})
console.log(newsArr);

//from method convert every single word in array
console.log(Array.from("sabbir"));
const fromArr = ["Banana", "Orange", 'Apple', "Mango"]
console.log(Array.from(fromArr[2]));

//keys():> in array item key is index & value is value// only print the index. Don't return array
const carNames = ["Toyota", "Honda",  "BMW", "Audi", "Tesla", "Nissan", "Hyundai", "Kia"]
const key = carNames.keys();
for (x of key) {
// console.log(`index number is: ${x} car name is: ${carNames[x]}`)    
console.log(x)    
}

//entries():> from a array, entries only print in a pair ex: [key, value] in a array
const keyValuepair = carNames.entries();
for (x of keyValuepair) {
// console.log(`${x[0]} index number & car name is: ${carNames[x[0]]} \nMain outpur in pair:     ${x}`)    
console.log(x)    
}