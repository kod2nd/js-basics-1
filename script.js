const x = 5.25
console.log('The value of x is', x);

let y = 'Hello!';
console.log('The value of y is', y);

var z = true;
console.log('The boolean z is currently set to', z);

let sum = x + 15;
console.log(`The sum of ${x} and 15 is ${sum}`)

const bodyClass = document.body.className;
console.log(bodyClass);

document.body.className = 'loading';
console.log(bodyClass);

let randomNumber = Math.random()
console.log(randomNumber);

let mainClass = document.querySelector('main').className
console.log(mainClass)

let divClassName = document.querySelector('.loader').className
console.log(divClassName)

// Exercise 2

// 1. Define a function `hello` that displays an `alert` with the message `"Hello, world!"` - Invoke it to verify that it works

const hello = () => {
    // alert("Hello world!")
    console.log("I am the hello function")
}

hello()

// hi Function
const hi = (name) => {
    return "Hi " + name + "!";
}

console.log(hi("John"))

// Sum function

const add = (num1, num2) => {
    return num1 + num2
}

console.log(add(232,213))

// random function

const random5 = () => {
    return Math.round(Math.random() * 4) + 1;
}

console.log(random5())







