var name="praneeth"
function m1(vow)
{
    return vow=="a"|| vow == "e" || vow == "i" || vow== "o" || vow == "u";
}
function m2(name)
{
    var count=0;
    for(var i=0;i<name.length;i++)
    if(m1(name[i]))
    ++count;
    return count;
}
console.log(m2(name))
