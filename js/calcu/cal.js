window.onload = () => {
    let button = document.querySelector("#add","#sub","#mul","#div");
    button.addEventListener("click", calcu);
};
function calcu()
{
    let height = parseInt(document
        .querySelector("#n1").value);


let weight = parseInt(document
        .querySelector("#n2").value);

let result = document.querySelector("#result");
if (n1 === "" || isNaN(n1)) 
        result.innerHTML = "Provide a valid number";
  
    else if (n2 === "" || isNaN(n2)) 
        result.innerHTML = "Provide a valid number";
        else {

            let ad=n1+n2;let s=n1-n2;let m=n1*n2; let d=n1/n2;
            if(id="add")
            {
                `addition of:<span> ${ad} </span>`;
            }
            else if(id="sub")
            {
                `addition of:<span> ${s} </span>`;
            }
            else if(id="mul")
            {
                `addition of:<span> ${m} </span>`;
            }
            else if(id="div")
            {
                `addition of:<span> ${d} </span>`;
            }
            else
            {
                'invalid'
            }
        }

}