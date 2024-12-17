// 
const myArray = ["sabbir", "diu", "gazipur", "cse"]
console.log(myArray.indexOf("diu")) // show the index number in a array
//search index from last
console.log(myArray.lastIndexOf("sabbir")) // show the index number in a array

console.log(myArray.includes("diu")) // only print boolean value

//.find method in array
function search(name) {
    return name == "diu";
}
console.log(myArray.find(search))

const result = myArray.find((name) => {
    return name == "diu"
}
)
console.log(result)

const newArray = [1, 4, 3, 6, 8, 9, 8, 0];

const searchNumber = newArray.find((item, index, arr) => {

    console.log(`item: ${item} , index: ${index}  [${arr}]`);
    return item == 8;
})// find method stoped when it foun 1/frist items.
console.log(searchNumber)

//.find is use to find items 
//.findIndex is use to find index number 
//.findLast is use to find items from last 
//.findLastIndex is use to find index from last

// **for finding all same items use filter
const searchArr = [6, 2, 7, 6, 5, 9, 8, 9];

const searchItems = searchArr.filter((items, index, array) => {
    console.log(`item: ${items} ; index: ${index} ; [${array}]`);
    return items == 8;
})
console.log(`array length is: ${searchArr.length}`)
console.log(searchItems)



//************array sorting********************

console.log("\nHere is the portion of sorting method \n")
console.log(`assending sort: ${newArray.sort()}`); //sort is for assending , mutant original array
console.log(`dessending sort: ${newArray.reverse()}`); //reverse is for dessending, mutant original array
console.log(newArray) // original array mutant

//Here is the portion of sorting method using toSorted & toReversed
console.log("\nHere is the portion of sorting method using toSorted & toReversed ")
const orginalArray = [1, 4, 3, 6, 8, 9, 8, 0];

const newAssarr = orginalArray.toSorted()
console.log(`Created new Assending array ${newAssarr}`)  //create new array

console.log(`Original array not changed ${orginalArray}`) // orginal array not mutant

const newDssarr = orginalArray.toReversed()
console.log(`Created new Dessending array ${newDssarr}`)  //create new array
console.log(`Original array not changed ${orginalArray}`) // orginal array not mutant
