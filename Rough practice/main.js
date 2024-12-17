const myArr = [1, 3, 4, 8, 8, 6, 8, 5, 6, 9, [4, 6, 5]]
const search = myArr.filter((item, index, array) => {
    console.log(`item is:${item} ; index is ${index} ; ${array}`)
    if(item==8){
        return item
    }
    if(item==6){
        return item
    }
   // return item == "6";
})

console.log(search)

const newArr = myArr.splice(2, 0, "hi")
console.log(myArr)
console.log(myArr.slice(1, 3))

const layerarray = search.concat(myArr)
const cuslayerarray = layerarray.pop(layerarray[layerarray.length-1])


console.log(layerarray)
console.log(cuslayerarray)
console.log(layerarray.concat(cuslayerarray))




