//.join()  * replace with comma in a array.
const myArr = ["sabbir", "hossain", "gazipur", "Diu"]
let newArray = myArr.join("_")
console.log(newArray) // Output: sabbir_hossain_gazipur_Diu

//.pop() & .push() work in left side
// .pop()  * Delete last item in a array 
//const popArr = myArr.pop()
console.log(`Deleted last items is: ${myArr.pop()}`) //myArr.pop() * shows only deleted items & directely mutant main array
console.log(myArr)

// .push()  * Addeed last item in a array 
myArr.push("mash", "heart") // Directly store in main array
console.log(myArr)

//shift() & .unshift() work in left side
// .shift()  * Delete frist item in a array 
console.log(`Deleted last items is: ${myArr.shift()}`) //myArr.push() * shows only deleted items & directely mutant main array
console.log(myArr)

// .unshift()  * Addeed frist item in a array 
myArr.unshift("virus", "guru") // Directly store in main array from left
console.log(myArr)
//******note Using .delete() not good practice because it creates undefined hole in array.

