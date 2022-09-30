//You go to a jewelry shop and try to 
//find the most expensive piece of jewelry. 
//You write down the name of each piece of jewelry and its price.
//Create a function that gets the name of the piece 
//of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

var jew={

    DiamondEarrings: 980,
  GoldWatch: 250,
  PearlNecklace: 4650

}
function m1()
{
    
    let a=Math.max(980,250,4650)

    if(a===4650)
    {
        console.log("The most expensive one is the Pearl Necklace")
    }
}
m1()
