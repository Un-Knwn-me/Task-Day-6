//1. Class - Movie

class Movie{
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        if(rating === undefined){
            this.rating= "PG";
        }
        else{
            this.rating=rating;
        }
    }
    getPG(array){
        var result = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i].rating== "PG"){
                result.push(arr[i]);
            }
    }
    return result;
}

    printflim(){
        return this.title;
        return this.studio;
        return this.rating;
    }
}

var launch = new Movie("Casino Royale", "Eon Productions", "PG13");
var launch2 = new Movie("Casino", "Eon");
console.log(`Movie title is ${launch.title} and Studio is ${launch.studio} and rating is ${launch.rating}`);
console.log(`Movie rating is ${launch2.title} and Studio is ${launch2.studio} and rating is ${launch2.rating}`);
var arr = [launch, launch2];
console.log(launch2.getPG(arr));

//Output:

// Movie title is Casino Royale and Studio is Eon Productions and rating is PG13
// Movie rating is Casino and Studio is Eon and rating is PG
// [Movie]
// 0: Movie {title: 'Casino', studio: 'Eon', rating: 'PG'}
// length: 1
// [[Prototype]]: Array(0)


//2. Circle - Class

class Circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    get circleradius() {
        return this.radius;
    }
    set circleradius(radius) {
        this.radius=radius;
    }
    get circlecolor() {
        return this.color;
    }
    set circlecolor(color) {
        this.color=color;
    }
    get toString() {
        return `"Circle[radius = ${this.radius}, color = ${this.color}]"`;
    }
    get Area(){
        return Math.PI*Math.pow(this.radius, 2);
    }
    get Circumference() {
        return 2*Math.PI*this.radius;
    }
}
var round = new Circle(1.0, "red");
console.log(round);

//Output:
// Circle {radius: 1, color: 'red'}
// color: "red"
// radius: 1
// Area: 3.141592653589793
// Circumference: 6.283185307179586
// circlecolor: "red"
// circleradius: 1
// toString: "\"Circle[radius = 1, color = red]\""
// [[Prototype]]: Object

//3. Write a “person” class to hold all the details:

class Person {
    constructor(name, age, address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    printinfo(str) {
        return str+this.name + " " + this.age + " " + this.address;
    }
}
var person = new Person("Henry", 18, "Colombia");
var res= person.printinfo("Person- ");
console.log(res);

//Output:
// Person- Henry 18 Colombia

//4. write a class to calculate the uber price:

class Uber{
    constructor(type, distance, time){
        this.type=type;
        this.distance=distance;
        this.time=time;
    }
    printfair() {
        return this.type*(this.distance+this.time);
    }
}
var sedan= new Uber(25, 5, 1);
var hatchbag= new Uber(22, 6, 2)
console.log(`The price of Uber Sedan car is ${sedan.printfair()}`);
console.log(`The price of Uber Hatchbag car is ${hatchbag.printfair()}`);

//O/P:

// The price of Uber Sedan car is 150
// The price of Uber Hatchbag car is 176