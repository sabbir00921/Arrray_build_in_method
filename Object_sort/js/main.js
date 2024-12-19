const info = [
    {
        name: "sabbir", age: 28
    },
    {
        name: "mash", age: 23
    },
    {
        name: "rakib", age: 26
    },
    {
        name: "raju", age: 29
    },
    {
        name: "alex", age: 15
    },
    {
        name: "chotu", age: 20
    },
    {
        name: "zack", age: 31
    }
]

// const sortedInfo = info.sort(info.name) //
const sortedInfo = info.sort((a,b)=> a.age -b.age)
console.log(sortedInfo);
