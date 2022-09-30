//Create a function which returns the number of true values there are in an array.

let counttrue=[
    "True",
    "false",
    "True"
];
let target = "True";

let counter = 0;
for (a of counttrue) {
  if (a == target) {
        counter++;
    }
};
console.log(counter)

