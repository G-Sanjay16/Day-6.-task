// 1)The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
// a) create a class with title, studio, ratings
class Movie {
    constructor(title,studio,rating){
       this.title = title;   
       this.studio = studio;
       this.rating = rating;
    }
  }
   const obj = new Movie("manmadhan","cini arts Studio","7.2");
   console.log(obj.title,obj.studio,obj.rating);

   //b) Print PG if rating not given 
class Movie2 {
    constructor(title,studio,rating="PG"){
       this.title = title;   
       this.studio = studio;
       this.rating = rating;
    }
  }
   const obj1 = new Movie2("manmadhan","cini arts Studio",);
   console.log(obj1.title,obj1.studio,obj1.rating);

//C) Write a method getPG
class Movie4 {
    constructor(title,studio,rating="PG"){
       this.title = title;   
       this.studio = studio;
       this.rating = rating;
    }
       getPG(Movie4) {
        return Movie4.filter(movie4 => Movie4.rating === "PG");
    }
}
   const obj5 = new Movie4("MARI","WANDERBARS",);
   const obj6= new Movie4 ("VTV","escape artiist studio", "8.1" )
   const obj7= new Movie4 ("vikram", "rkfi")
   const obj8= new Movie4 ("leo","7 screen studio")
   console.log(obj5.title,obj5.studio,obj5.rating);
   console.log(obj6.title,obj6.studio,obj6.rating);
   console.log(obj7.title,obj7.studio,obj7.rating);
   console.log(obj8.title,obj8.studio,obj8.rating);
    


// D) Write a piece of code that creates an instance of the class Movie with the 
//title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class Movie1 {
    constructor (title,studio,rating){
        this.title = title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj3= new Movie1("CasinoRoyale","EonProductions","PG13")
console.log(obj3.title,obj3.studio,obj3.rating)


// 2) circle task

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj4 = new Circle(1.0,"red") 
console.log(obj4.Color);
console.log(obj4.Radius);
console.log(obj4.toString);
console.log(obj4.area);
console.log(obj4.circumference);
obj4.Radius=3.5
console.log(obj4.Radius);
obj4.Color="green"
console.log(obj4.Color);
// 3) Write a “person” class to hold all the details.
class Person {
    constructor (name,age,gender,martialstatus,contact,email){
        this.name= name;
        this.age= age;
        this.gender= gender;
        this.martialstatus= martialstatus;
        this.contact=contact;
        this.email=email;

    }
}
const obj2= new Person("shelby","22","male","single","1234567890","miichael.gmail.com")
console.log(obj2.name,obj2.age,obj2.gender,obj2.age,obj2.martialstatus,obj2.contact,obj2.email)

// 4) write a class to calculate the Uber price.
class Uber {
    constructor( costPerKm){
        this.costPerKm=costPerKm;
    }
    price (distanceTraveled){
        return distanceTraveled*this.costPerKm
    }
    }
const costPerKm=15;

const distanceTraveled= 25;
console.log(costPerKm*distanceTraveled)



