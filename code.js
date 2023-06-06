// Local Storage
// localStorage.setItem('name', 'James');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');

// Session Storage
// sessionStorage.setItem('name', 'Jamie');
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');

// Cookies 
// Date(year, month, date)
// document.cookie = 'name=Kyle; expires=' 
// + new Date(9999, 6, 7).toUTCString()

// document.cookie = 'lastName=Du Preez; expires=' 
// + new Date(2023, 6, 7).toUTCString()

// console.log(document.cookie);


// localStorage.setItem('Fruit', 'Grapes');
// localStorage.setItem('Dessert', 'Muffin');

// var favFruit = localStorage.getItem('Fruit');
// console.log(favFruit);

// console.log(localStorage.getItem('Dessert'));

// localStorage.setItem('Dessert', 'Cake');
// console.log(localStorage.getItem('Dessert'));

// localStorage.removeItem('Fruit');

// localStorage.clear();

// favFruit = localStorage.getItem('Fruit')
// console.log(favFruit);

// let student = {
//     name: 'James',
//     age: 21,
//     isActive: true
// }

// let studentObj = JSON.stringify(student);

// console.log(typeof studentObj);

// localStorage.setItem('student', studentObj);

// let toJSON = JSON.parse(studentObj);

// console.log(typeof toJSON);

// console.log(toJSON.age);

// Arrow Functions

// Name function
// function sum(a, b) {
//     return a + b
// }

// let sum2 = (a, b) => {
//     return a + b
// }
//  With this arrow function, return is not needed
// let sum3 = (a, b) => {
//      a + b
// }
// Shorthand. JS reads that after arrow, value by default is returned
// let sum4 = (a, b) => a + b

// function isPositive(number) {
//     return number >= 0
// }

// let isPositive2 = (number) => {
//     return number >= 0
// }

// let isPositive3 = (number) => number >= 0

// If there's only one param, parenthesis is not needed 
// let isPositive3 = number => number >= 0


// function randomNumber() {
//     return Math.random
// }

// let randomNumber2 = () => {
//     return Math.random
// }

// let randomNumber3 = () => Math.random
//  ===================================

// Anonymous Function
// document.addEventListener('click', function() {
//     console.log('Click');
// })

// document.addEventListener('click', () => {
//     console.log('Click');
// })
// document.addEventListener('click', () => console.log('Click'))

// class Person {
//     constructor(name) {
//         this.name = name
//     }
// the this keyword is 

// Arrow Funtion Syntax
// this does not get redefined when using an arrow function
    // printNameArrow() {
    //     setTimeout(() => {
    //         console.log('Arrow: ' + this.name)
    //     }, 100)
    // }
// Standard Function Syntax 
// Defines this where the function is called
// this is this case is global
//     printNameFunction() {
//         setTimeout(function() {
//             console.log('Function: ' + this.name)
//         }, 100)
//     }
// }

// let person = new Person('James')
// person.printNameArrow()
// person.printNameFunction()
// console.log(this.name);

// Factory Function - creates onjects and returns them
// Makes code shorter so that you do not have to declare a new object. 

// let developer1 = {
//     talk() {
//         return 'Hello I am James'
//     }
// }

// let developer2 = {
//     talk() {
//         return 'Hello I am Seth'
//     }
// }

// console.log(developer1.talk());
// console.log(developer2.talk());

// let developer3 = {
//     name: 'Megan',
//     talk() {
//         return `Hello I am ${this.name}`
//     }
// }
// let developer4 = {
//     name: 'Kyle',
//     talk() {
//         return `Hello I am ${this.name}`
//     }
// }

// Variable can be overwritten.
// developer1.name = 'John';

// console.log(developer3.talk());
// console.log(developer4.talk());
// console.log(developer1.talk());
// console.log(developer1);

// Factory function syntax

// function personFactory(name) {
//     let object = {
        // name: name, - or use shorthand
//         name,
//         talk() {
//             return `Hello I am ${name}`
//         }
//     }
//     return object
// }

// OR

// function personFactory(name) {
//     return {
//         name,
//         talk() {
//             return `Hello I am ${name}`
//         }
//     }
// }

// let me = personFactory('James')
// console.log(me.talk());

// let bob = personFactory('Bob')
// console.log(bob.talk());

// function createElement(type, text, color) {
//     let el = document.createElement(type)
//     el.innerText = text
//     el.style.color = color
//     document.body.append(el)
//     return {
//         el,
//         setText(text) {
//             el.innerText = text
//         },
//         setColor(color) {
//             el.style.color = color
//         }
//     }
// }

// let h1 = createElement('h1', 'Beans', 'blue');

// h1.setText('Toast')

// let p = createElement('p', 'I love beans', 'green');

// Contructor Functions - creates objects

// function Person(name) {
//     this.name = name
// }

// let James = new Person('James')

// console.log(James);


// Call back function

// let posts = [
//     {
//         title: 'Post One',
//         body: 'This is post one'
//     },
//     {
//         title: 'Post Two',
//         body: 'This is post two'
//     }
// ]

// function getPosts() {
//     setTimeout(() =>  {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `
//             <li>${post.title}</li>
//             `;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000)
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000)
// }

// getPosts();

// createPost(
//     {
//         title: 'Post Three', 
//         body: 'This is post three'}, getPosts);

//  Promises

// let posts = [
//     {
//         title: 'Post One',
//         body: 'This is post one'
//     },
//     {
//         title: 'Post Two',
//         body: 'This is post two'
//     }
// ]

// function getPosts() {
//     setTimeout(() =>  {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `
//             <li>${post.title}</li>
//             `;
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             let error = false;

//             if(!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong');
//             }

//         }, 2000)

//     });
// }

// createPost({title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Async/Await
// declare async to use await(waits for async action or process to complete)
// async function init() {
//     await createPost({title: 'Post Three', body: 'This is post three'});
//     getPosts();
// }

// init();

// Async/Await/ Fetch
// async function fetchFacts() {
//     let res = await fetch('https://catfact.ninja/fact')

//     let data = await res.json();

//     console.log(data);
// }

// fetchFacts();


// Promise.all

// let promise1 = Promise.resolve('Toast on Beans');
// let promise2 = 10;
// let promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve, 2000, 'Bye'));

// let promise4 = fetch('https://catfact.ninja/fact')
// .then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((
//     values => console.log(values)))

// Fetch API Not Completed
// console.log(fetch('https://randomuser.me/api/'));

// fetch('https://randomuser.me/api/')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log('Error!'))


//  Sync 
let food = 'beans';
console.log(`${food}`);




