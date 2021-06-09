arrayChunk = (arr, n) =>{
    const newArr = []
    //Loop through array
    arr.forEach((val)=>{
        //get last element
        debugger;
        const last = newArr[newArr.length-1]
        //check if there is a last and if last if equal to chunk last element
        if(!last|| last.length === n){
            newArr.push([val])
        }else(
            last.push(val)
        )
    })
    return newArr
}

module.exports = arrayChunk

///////my solution

// arrayChunk = (arr, n) =>{
//     let newArr = []
//     for( let num = 0; num = arr.length; num++){
//         newArr.push(arr.splice(0,n))
//     }
//     return newArr
// }
///////other solution
// const newArr = []
// let i = 0
// while(i<arr.length){
//     newArr.push(arr.slice(i,i+n))
//     i+=n
// }
// return newArr
// }