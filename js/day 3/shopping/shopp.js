//	Create a function that determines 
//whether a shopping order is eligible for free shipping. 
//An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
var items={
    Shampoo: 5.99,
    rubber:15.99,
    tv:399,
    monopoly:12,
    hitler:35,
    banabagrams:13
}
    function m1()
    {
        let total=items.Shampo+items.rubber;
        if(total>50)
        {
            console.log("True");
        }
        else
        {
            console.log("False");
        }
    }
m1();