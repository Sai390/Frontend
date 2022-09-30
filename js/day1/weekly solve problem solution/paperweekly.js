function m1(array){

    var count=0;

    for(let i=0;i<array.length;i++){

        if(array[i]>=10){

            count++;

        }

    }

  return count;

}
array=[12,15,8,10]

console.log(m1(array))