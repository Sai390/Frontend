/*Before a user makes a purchase check,
o	Logged-in
o	Email is verified
o	Card Info is valid
o	If any of these are missing, Stop purchasing
*/
var login=true;
var email=true;
var card =true;
if(login==true)
{
    if(email==true)
    {
        if(card==true)
        {
            console.log("Enter")
        }
    }
}
else
{
    console.log("Stop")
}