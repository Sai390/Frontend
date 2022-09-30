/*
Write a class called Name and create the following attributes given
 a first name and last name (as fname and lname):
An attribute called fullname which returns the first and last names.
An attribute called initials which returns the first letters of the first and 
last name. Put a . between the two letters.
Remember to allow the attributes fname and lname to be accessed individually as well.*/

class Name {
    constructor(fname, lname){
    
      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
    }
   
get full(){
      let a = this.fname;
      let b = this.lname[0].toUpperCase() + this.lname.slice(1).toLowerCase();
      
      return `${a} ${b}`
    }
    get init(){
      
      return `${this.fname[0]}.${this.lname[0]}`
    }
      
  }
  
  const value= new Name("john","SMITH");
  console.log(value.fname);
  console.log(value.lname);
  console.log(value.full);
  console.log(value.init);