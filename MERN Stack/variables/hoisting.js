/* concept of hoisting in js */

// console.log("Hello HTML");
// console.log(a);
// console.log(b);


// var a;
// let b;



/* */
let result = "5" + 3;
console.log(result);

result = "5" - 3;
console.log(result);

result = "5" * "2";
console.log(result);

/*non-primitive data type */
/**object */
const student={
  name:"Ahsan",
  age:25,
     
}

console.log(student.name);

const welcome = "Welcome to the HomePage";

/**string are primitive so immutable */
let str = "Hello";
str[1] = "Y";
console.log(str);
let arr = [1, 2, 3];
arr[0] = 99;
console.log(arr);


document.getElementById("welcome").innerHTML = welcome;


/**operators in js */
let a = "Hello";
let b = "H";
let c = a*b;
console.log(c);


/**ternary operator */
let x=true;
(x)? console.log("X is true"):console.log("X is not tre");

console.log(2%3);


/**conditions */
let name1="";
if(name1=="Ahsan"){
  console.log(`Welcome ${name1}`)

}
else if(name1=="A"){
  console.log("Welcome");


}
else{
  console.log("h");
}

switch(name1){
  case "Ahsan":
    console.log(`Welcome ${name1}`);
  case "A":
    console.log("Hello");
  default:
    console.log("h");
}

/**check nmbr is even or odd */

let nm = prompt("Enter a number");
nm = Number(nm);
(nm%2===0)? alert(`number is even ${nm}`):alert(`number is odd ${nm}`);


// let str1 = "Ahsan";
// let array1 = "";
// let counter = (str1.length)-1;
// for(i=counter;i>=0;i--){
//     array1+=str1[i];
// }

// console.log(`Original str is ${str1} and reversed is ${array1}`);


// /**Array methods */
// let arr1=[1,2,3,4]
// let map_arr=arr1.map(arr=>arr*arr);
// console.log(map_arr);

// let filter_arr=arr1.filter(num=>num%2==0);
// console.log(filter_arr);



// /**sort an array */
// let unsorted = [5,4,3,2,1];
// for(i=0;i<unsorted.length;i++){
//   for(j=i+1;j<unsorted.length;j++){
//     if(unsorted[i]>unsorted[j]){
//       x=unsorted[i]
//       unsorted[i]=unsorted[j];
//       unsorted[j]=x;
//       // unsorted.replace(unsorted[i],unsorted[j]);
//     }
//   }
// }
// console.log(unsorted);

// /**Functions with ES6+ */
// const Name = (name)=>{
//   console.log(name)

// }

// Name("Ahsan");

// /**function in object */
// const obj1 = {
//   name: "Ahsan",
//   Name() {
//     console.log(`Welcome ${this.name}`);
//   }
// }

// obj1.Name(); // Welcome Ahsan


// console.log(`Inside object name is ${obj1.name} and fnction is showing,`);


// /**For Each method in array */
// /**Pass function as parameter in function */

// let arr19=[1,2,3,4,5];
// arr19.forEach((val)=>{
//   console.log(val);
// })


// /**Higher Order functions are fnctions that either return a function or take  function as parameter */

// /**Take a sparameter */
// function Greet(name){
//   console.log(`Welcome ${name}`);
// }

// function UserInput(c1){
//   let name="Ahsan";
//   c1(name);
// }

// UserInput(Greet);

// /**returning a function */
// function App(){
//    return function(a,b){//we can'r define name of function here
//     return a*b;
//    };

// }

// const mul=App();//we have to store the function and then use it
// console.log(mul(2,3));

// /** retrn multiple functions*/
// function App2(){
//   function mul(a,b){
//     return a*b;
//   }
//   function add(a,b){
//     return a+b;
//   }

//   return {mul,add};
// }

// const functions = App2();

// console.log(functions.mul(2,3));

// /**map is a higher order function */
// let array3=[1,2,3,4,5];
// let array4=[];

// array4=array3.map(function(val){
//   return val*2;
// });

// console.log(array4);

// /**ForEach is also hgher order fnction*/
// let array6 = [1,2,3,4,5];

// array6.forEach(function(val,index,array6){
//   console.log(val,index,array6);
// })

// //**Reduce return a single value used to calculate avg,sm etc*/
// let newArray=[1,2,3,4,5];
// sum = newArray.reduce((prev,curr)=>{
//   return (prev>curr)? prev:curr;

// })
// console.log(sum);

// /**Take numbers of user in array and filter out those who got 90+ */
// let marks=[20,30,90,98,96,95,93];
// let _90Above=[];
// _90Above = marks.filter(mark=>{
//   if(mark>90)
//     return mark;
// })
// console.log(_90Above);


// /**Map is a datastructure */
// /**if we have to make a functionality like reverse engineering like we have a map with inputs and values and now we have to return input values of the basis of input values */
// const Results = new Map();
// Results.set("2,3",5);
// Results.set("1,2",3);
// Results.set("5,4",9);
// Results.set("3,6",9);
// Results.set("-2,3",1);

// Results.forEach((key,value)=>{
//   console.log(`key is ${key}, value is ${value}`);
// })

// let input = "2,3"

// Results.forEach((key,val)=>{/**in forEach first argument is vale and second is key very imp */
//   if(val==input){
//     console.log(`For given input result is ${key}`);
//   }
// })



// /**access firstchild of subsection div class */
// // const elem = document.getElementsByClassName("sub-section");
// // elem[0].children[0].innerHTML = "Ahsan Pagal";
// const parent = document.getElementById("section1");
// console.log(parent.childNodes);
// const sub_par = parent.childNodes[5];
// console.log(sub_par.childNodes);
// sub_par.childNodes[1].innerHTML = "Pagal Ahsan";


// /**Create 3 dvs with same classesnames and access them and add something uniqe */
// const divs = document.querySelectorAll(".div_1");
// console.log(divs);

// const div1 = divs[1]; // get the div
// console.log(div1);

// const heading_div1 = div1.querySelector("h3"); // query the h3 directly
// console.log(heading_div1);


// // div1.childNodes[1].innerHTML="Hello";


// /**Description:
// You have a list of items inside a <ul> element. Each <li> element has a nested <span> element. You need to find the first <span> element inside the <li> elements and modify its text.

// Task:
// Write JavaScript code that accesses the first <span> inside a <li> element and changes its text to "Updated Text".

// Hint: Use parentNode, children, and childNodes. */

// // let Allul= document.getElementsByClassName(".list");
// // console.log(Allul);
// let AllLi = document.querySelectorAll("li");
// console.log(AllLi);

// AllLi.forEach((li) =>{
//   const span=li.querySelector('span');
//   span.innerHTML="hello";

// })


// /**Creating New Elements and Appending to the DOM
// Description:
// You want to dynamically add a new paragraph (<p>) with the text "This is a new paragraph" to a container div with the ID content-container.

// Task:
// Write JavaScript code that creates a new <p> element and appends it to the container with the ID content-container.

// Hint: Use document.createElement() and appendChild(). */

// let par=document.createElement("p");
// let textPar=document.createTextNode("This is apended para");
// par.appendChild(textPar);
// let li=document.getElementById("NewPara");
// li.appendChild(par);


// let Button1 = document.getElementById("#Button1");
// let theme="dark";
// Button1.addEventListener(click,()=>{
//   if(theme == "dark"){
//     theme = "white";
//   }
//   else{
//     theme = "dark";
//   }

//   if(theme == "dark"){
//     bodyTag = document.getElementsByTagName("body");
//     bodyTag.style.backgroundColor="black";
//   }
//   else{
//     bodyTag = document.getElementsByTagName("body");
//     bodyTag.style.backgroundColor="black";
//   }

// })


/**for of is always for objects iterations*/


/**Pprototye in classes and object */
// const Employee ={
//   Name: "Ahsan",
//   DisplayName(){
//     console.log(`Name of the Employee is ${this.Name}`);
//   }
// };

// const user1 ={
//   Name: "Ali",
// };

// user1.__proto__ = Employee;//reference to Employee


// user1.DisplayName();

// /**Function overriding */
// const user2 ={
//   Name: "Ajmal",
//   DisplayName(){
//     console.log(`Name is ${this.Name} and I am different from Employee Class`);//preference will be given to the object'method
//   }
// };

// user2.__proto__ = Employee;
// user2.DisplayName();

// /**Prototype Chain */
// const grandParent = {
//   firstName: "Khan"
// };

// const parent = {
//   firstName: "Ali",
//   __proto__: grandParent
// };

// const child = {
//   age: 10,
//   firstName:"Shahrukh",
//   __proto__: parent
// };

// console.log(child.age);         // ✅ Found on child → 10
// console.log(child.firstName);   // ✅ Not on child → found in parent → "Ali"
// console.log(child.lastName);    // ✅ Not on child or parent → found in grandParent → "Khan"
// console.log(child.middleName);  // ❌ Not found anywhere → undefined

// /**Claseese and Inheritance */
// class Shape{
//   #shapeName = "General";
//   constructor(){
//     console.log("Construcor of Shape class");
//   }
//   DisplayShape(){
//     console.log(`Shape name is ${this.#shapeName}`);
//   }
// }

// class Triangle extends Shape{
//   shapeName = "Triangle";
//   constructor(){
//     console.log("Constructor of Triangle class");
//   }
//   // DisplayShape(){
//   //   console.log(`Shape name is ${this.shapeName}`);
//   // }
// }

// class Circle extends Shape{//,Triangle{//javascript don;t allow multiple clases inheritance for that we use mixins that return class
//   shapeName = "Circle";
//   constructor(){
//     console.log("Constructor of class Circle");
//   }
//   // DisplayShape(){
//   //   console.log(`Shape name is ${this.shapeName}`);
//   // }
// }

// const shape1 = new Circle();
// shape1.DisplayShape();

/**Multi level */
// class Person{
//   eat(){
//     console.log("Do eating");
//   }
// }

// class Engineer extends Person{
//   hi="Hello";
//   work(){
//     console.log("Do working and problem solving");
//   }
// }

// class Husband extends Engineer{
//   hi = super.hi;
//   constructor(){
//     console.log(`Husband is engineer and hi form ${hi}`);
//   }
// }

// const Husband1 = new Husband();
// Husband1.eat();


/**Callback and Callback hell */
//Callback is just like pass a fnction as parameter
// function Parent(callback){
//   callback();
// }

// displayMessage = () =>{
//   console.log("I am parent");
// }

// Parent(displayMessage);

// //callback hell
// function username1(username){
//   if(username == 'Ahsan'){
//     console.log("Hello");
//     return true;
//   }
// }
// function Database(username,callback){
//   setTimeout(() => {
//     username1(username);
//     if(username1(username)){
//       callback()
//     }
//   }, 2000);


// }

// Database("Ahsan",()=>{
//     console.log("2nd call");
//     Database("Ahsan",()=>{
//       console.log("3rd Call");
//       Database("Ahsan");
//     })
// })

/**Promises */
// function username1(username){
//   if(username == 'Ahsan'){
//     console.log("Hello");
//     return true;
//   }
// }
// function Database(username,callback){

//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       username1(username);
//       if(username1(username)){
//         resolve("Resolved successfully");
//         callback()
//       }
//       reject("Reject");
//     }, 2000);
//   });


// }

// let Promise1 = Database("Ahsan",()=>{
//     Promise1.then(()=>{
//       console.log("First call complete successfully");
//     })
//     Promise1.catch(()=>{
//       console.log("Promise1 unsuccessful")
//     })
//     let Promise2 = Database("Ahsa",()=>{
//       Promise2.then(()=>{
//         console.log("2nd call complete successfully");
//       })
//       Promise2.catch(()=>{
//         console.log("Promise1 unsuccessful")
//       })
//       Database("Ahsan");
//     })
// })

//Promise chaining

// function Hello(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Hello from hello")
//       resolve("Resolved successfully");
//     }, 4000);
    
//   })
// }

// function Hello2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Hello from hello2");
//       resolve("Resolved successfully 2");
//     }, 4000);
//   })
// }

// let Promise11 = Hello();
// Promise11.then(()=>{
//   let Promise22 = Hello2();

// })

// //Promise chaining code
// function step1() {
//   return Promise.resolve("Step 1 done");
// }

// function step2() {
//   return Promise.resolve("Step 2 done");
// }

// step1()
//   .then((res) => {
//     console.log(res);
//     return step2();
//   })
//   .then((res) => console.log(res));



// /**Async and await */
// function Hello22(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Hello from hello2");
//       resolve("Resolved successfully 2");
//     }, 4000);
//   })
// }

// async function HelloCall(){
//   await Hello22();
//   await Hello2();
// }
 

/**Fetch APIs */
// const fetchAPI = async ()=>{
//   let url= "https://cat-fact.herokuapp.com/facts";
//   const response = await fetch(url);
//   const data = await response.json(); // extract JSON from response
//   console.log(data);


// }

/**Use joke api to display jokes */
let buttonId=document.getElementById("Joke1");
let P=document.getElementById("P");
buttonId.addEventListener("click", async ()=>{
  let url = "https://official-joke-api.appspot.com/random_joke";
  let new_req = await fetch(url);
  let data = await new_req.json();
  P.innerText = data.setup;
})



//closure
function outerFunction() {
  let outerVariable = "I'm from outer scope";

  // Inner function has access to outerFunction's variables
  function innerFunction() {
    console.log(outerVariable);  // Accesses outerVariable from the outer scope
  }

  return innerFunction; // Returning inner function as a closure
}

const closure = outerFunction();
closure();  // Output: I'm from outer scope

