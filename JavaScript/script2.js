let country = "India";

function show(){
    let message = "Hello from inside the function!";// only exists inside this function
    console.log(message)
    console.log(country);
}

show();

//console.log(message); // This will throw an error because message is not defined in this scope

// let and const are block-scoped — they only live inside the nearest { }.
// This is why we avoid var — var ignores block scope and leaks out, causing bugs that are hard to trace.


if(true){
    let x =10;
    var y = 20;
}

console.log(y);// 20 — leaked out, confusing
//console.log(x); // ❌ Error — properly contained

// Arrow Functions
const add = (a,b) => a+b;
const square = (a) => a*a ;

console.log(add(55,65));

const arr = [1,2,3,4,5];
const[first, second, ...rest] = arr; // destructuring unpack values from objects/arrays directly:
console.log(first); // 1

const skills = ["react", "node", "express"];
const moreSkills= [...skills, "mongodb", "typescript"]; // ... is the spread operator, it spreads the values of an array into a new array
console.log(moreSkills); // ["react", "node", "express", "mongodb", "typescript"]

// Assignment on closures

function createBankAccount(initialBalance){
    let balance = initialBalance;

    return{
        deposit(amount){
            balance += amount;
        },

        checkBalance(){
            return balance;
        }
    }

}

const myAccount = createBankAccount(1000);
console.log(myAccount.checkBalance()); // 1000
myAccount.deposit(500);
console.log(myAccount.checkBalance()); // 1500

// Destructuring Objects
const project = { title: "AI Resume Matcher", tech: "MERN", isLive: true }
const {title,tech} = project;

console.log(title); 
console.log(tech);

// ... spread operator in js
const frontend = ["React", "Tailwind"] ;
const backend = ["Node", "Express"];

const fullstack = [...frontend, ...backend];
console.log(fullstack); // ["React", "Tailwind", "Node", "Express"]