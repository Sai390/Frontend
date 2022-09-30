
var result=[1,3,7,9].every((element) =>{ return element %2 !==0})
console.log(result)
var isodd=(element)=>{
    return element %2!==0
}
var result=[1,3,9,5].every (isodd)
console.log(result)