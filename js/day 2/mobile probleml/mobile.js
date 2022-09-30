/*[3:23 PM] Saketh Kadimisetti
Consider your mobile phone and represent it as an object. 
Create a method to display only the tech spec of it. Create a\
 method that computes the remaining storage available*/


var mob={
    mobileName:"Mi",
    pixel:"64",
    color:"Red",
    ts:"128",
    getstorage: function(storage) {
        return mob.ts-storage;
    }
    

}
console.log(mob);
console.log(mob.getstorage("32"));