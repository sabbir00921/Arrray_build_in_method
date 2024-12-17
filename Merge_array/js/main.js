// merge & join .concat(parameter1,parameter2) if parameter 3 is include then 2-3 is reange of index , .flat.

const Array1 = ["sabbir", "diu", "gazipur", "cse"]
const Array2 = ["guru", "spi", "tangail", "mash"]
const Array3 = ["html", "css", "js", "boostrap"]
const Array4 = ["mern", "student", "course"]


//single arrray join 
const nweSinglearr = Array1.concat(Array2)
console.log(nweSinglearr)
//multiple arrray join 
const nweMultiplearr = Array1.concat(Array2, Array3)
console.log(nweMultiplearr)

//copy item from arra
const singleItemcopy = nweSinglearr.copyWithin(1, 3)  // reciver is index 1 and send from index 3 to end.
console.log(singleItemcopy)

//copy item from arra
const MultipleItemcopy = nweMultiplearr.copyWithin(1, 3, 5)  // reciver is index 1 and send from index 3 to index 5.
console.log(MultipleItemcopy)


//.flat  are using for adding multiple array in same layer

const newArray = [[1, 4], [3, 6], [8, 9, [8, 0]]]
const mergeArr = newArray.flat()
console.log(mergeArr)
console.log(mergeArr.flat())