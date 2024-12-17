
//splice & toSpliced (position,delete items,"adding new items") basically use for add or delete items anywhere from a array

const myArr = ["banana", "mango", "lichi", "dragon", "guava"]

//shifting item by using splice
//console.log(myArr.splice(2, 1)) // this is show the deleted items 
const newArr = myArr.splice(2, 2, "Sabbir", "guru")
console.log(newArr)//splice doesnt create a new array
console.log(myArr)// only mutant orginal array

//shifting item by using toSpliced
const day=["sat", "sun","mon","tue","wed"]
console.log(day.toSpliced(1,2,"fri")) // toSpliced return a new array
console.log(day)

