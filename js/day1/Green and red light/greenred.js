function m1(noOfPeople,targeted,arr)
{
        var noOfPeople,targeted,count=0;
            for(let i=0;i<noOfPeople;i++){
                if(arr[i]>targeted)
                    count++;
            }
    return count;
}
var noOfPeople=4;
var targeted=10;
const arr=[2,13,4,16];
console.log(m1(noOfPeople,targeted,arr));

