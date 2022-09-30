var role="Master"
if(role==="Master")
{
    console.log("view/add/delete/create/update content")
}
else if(role==="Admin")
{
    console.log("view/create")
}
else if(role==="user")
{
    console.log("view/edit")
}
else
{
    console.log("Invalid")
}
switch(role)
{
    case "Master":console.log("view/add/delete/create/updat/content")
    break;
    case "Admin":console.log("view/create")
    break;
    case "user":console.log("view/edit")
    break;
    default:
    console.log("invalid")
}