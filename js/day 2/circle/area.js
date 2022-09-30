/*Your task is to create a Circle constructor that creates a circle with a 
radius provided by an argument. The circles constructed must
 have two methods getArea() (Pi*r^2) and getPerimeter() (2*Pi*r) 
 which give both respective areas and perimeter (circumference).*/


class Abc {
	constructor(radius){
		this.radius = radius;
		}
	area=()=>{
		return Math.PI*Math.pow(this.radius, 2)
	}
	peri=()=>{
		return 2*Math.PI*this.radius
	}
}


let s = new Abc(4.44);
console.log(a.area());
console.log(a.peri());