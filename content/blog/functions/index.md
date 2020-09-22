---
author: 'Tinashe Chiweshe'
title: Putting the Fun in Functions
date: "2016-07-23T10:47:49.419Z"
description: Exploring functions as one of the most fundamental concepts in Javascript.
tags: ["javascript", "code", "basic"]
image: "../../assets/images/thumbnail-colours.jpg"
---

### What are Functions?

Functions are one of the core fundamentals used in JavaScript. A function is 
simply a JavaScript action or procedure that uses statements to perform tasks 
or calculate values.

Using a function is as simple as defining it somewhere in the scope from which 
we wish to call it. If we have a piece of code that we want to run a plethora 
amount of times, we can put that into a function instead of writing it 
continuously.

We can think of functions as containers that hold lines of code and we can 
pass arguments into them enabling the return of our result.

```js
function addNumbers(someNumber){
  return someNumber + someNumber;
};

var result = addNumbers(300);

console.log(result);
// Should log out 600
```

What did we just do in our example?  All we did was declare a function - a.k.a 
**function declaration**, **function definition** or **function statement**. 
It consists of the `function` keyword, followed by a set of other requirements:
- the functions name (`addNumbers`)
- A list of parameters or arguments to the function, wrapped in parentheses and 
separated by commas if more than one. (`someNumber`)
- The block of code we wish to execute, wrapped in curly brackets {...}

> Note: Our naming convention is the same as our variables.

Our function `addNumbers` takes one parameter, called `someNumber`. The function 
has one statement that tells it to return our `someNumber` parameter of the 
function added by itself. The return statement specifies the value to be 
returned by the function.

### Don't Repeat Yourself (DRY)

```js
function multiplyNumbers(x, y){
  return x * y;
};

var firstResult = multiplyNumbers(2, 8);
var secondResult = multiplyNumbers(5, 9);
var thirdResult = multiplyNumbers(4, 3);

console.log(firstResult, secondResult, thirdResult);
```

This is the power functions because instead of writing the same code over 
and over again, we can simply always call our `multiplyNumbers` function.

In a real-world application, our functions will be much bigger and more 
complex than the one we have before us. Functions are very important as 
they follow one of the most crucial programming principles,  which is 
called "don't repeat yourself", or DRY for short. 

The DRY principle is in fact, something vital in programming in general. You 
should never repeat yourself. Never write the same code when you should rather 
put it into a function.

### Adding some complexity to Functions

Let's add some complexity to our next example and create a new function, which 
will calculate the years until retirement for our player. Based on the players' 
birth year, we will be able to calculate how many years they have left until 
they retire.

```js
function calculatePlayersAge(birthYear){
  return 2016 - birthYear;
};

function yearsUntilRetirement(year, fullName){
  var age = calculatePlayersAge(year);
  var yearsLeft = 39 - age;

  console.log(fullName + ' will retire in ' + yearsLeft + ' years time.');
};

yearsUntilRetirement(1985, 'Cristiano Ronaldo');
// Should log out "Cristiano Ronaldo will retire 8 years time."
```

In our `yearsUntilRetirement` function, we can pass in the birth year and the 
`fullName` as our arguments. We can pass multiple things into a function. For 
example, we can pass 2 arguments, none, 3, 8, etc. Point is that you can go 
wild with the number of arguments.

How do we calculate the years until retirement? 

First of all, we need to calculate the players' age. That's where our 
`calculatePlayersAge` function comes in. With this example, we can also see 
that functions can call other functions.

Let's calculate the age based on our `year` argument by calling ("activating") 
our `calculatePlayersAge`. Our result will be stored in the `age` variable. 
Once we have calculated the age of our player, we can then find out how many
years they have left in their playing career. We can store that result in the
variable called `yearsLeft`.

In this example use case, we don't want to return anything. We simply want to 
log something to the console.

> **Calling our Functions**
>
> Execution of a function does not commence by simply defining the function. 
> Defining the function gives it a name and specifies what action to take when 
> the function is called. Calling the function activates the specified actions 
> with the assigned parameters.

```js
// CALLING A FUNCTION
var callThisFunction = function(){
  console.log('This function has just been called!')
} 

callThisFunction()
```

Once we are ready to call our newly contructed `yearsUntilRetirement` 
function, we can pass in 1985 as our `year` argument and any name for the 
second argument.

### Functions in other Functions

Functions can call other functions. They also do not have to explicitly return 
a result, however, they usually do return a result, but in our case, we've 
just logged it to the console.

```js
//...

yearsUntilRetirement(1985, 'Cristiano Ronaldo');
// Should log out "Cristiano Ronaldo will retire 8 years time."
yearsUntilRetirement(1980, 'Andrea Pirlo');
// Should log out "Andrea Pirlo will retire 3 years time."
yearsUntilRetirement(1983, 'Kaka');
// Should log out "Kaka will retire 6 years time."
```

We can see how handy it is to have all our code in one function. Imagine a 
scenario where we would have to write repetitive code for each of these 
footballers. Instead, all we have to do is put all of our code into one 
function, therefore adhering to the DRY principle.

### Using conditions in Functions

Going back to our previous footballer player retirement example, we can also 
determine whether the player is retired or not. In JavaScript - also in 
programming as a whole, we're able to use conditionals in our functions.

```js
function calculatePlayersAge(birthYear){
  return 2016 - birthYear;
};

function yearsUntilRetirement(year, fullName){
  var age = calculatePlayersAge(year);
  var yearsLeft = 39 - age;

  if(yearsLeft > 0){
    console.log(fullName + ' will retire in ' + yearsLeft + ' years time.');
  } else {
    console.log(fullName + ' has already retired.');
  }

};

yearsUntilRetirement(1960, 'Diego Armando Maradona');
// Should log out "Diego Armando Maradona has already retired."
```

These are the building blocks of functions which are one of the most 
fundamental principles in JavaScript as well as all programming. What we have 
to keep in mind that:

- We can pass in arguments into a function.

- Then return results from a function using the return keyword

- Finally, we can save these results into our variables.

### Function Expressions

We first discussed the basics of functions and that we declared functions using function statements. There's another way of declaring functions in Java Script, and that is by using function expressions.

All the logic of functions that we went over in the last post still works in the same manner. We just write the function in a slightly different way. Even under the hood of Java Script, it also works a little bit differently, but we'll go over that a bit later. We just need to know at this point that we have both function statements and expressions.

```js
// Function statement

// function whereDoYouEat(name, restaurant){

// }

// Function expression 
var whereDoYouEat = function(name, restaurant){
  switch(restaurant){
    case 'Jacobs':
      return name + ' likes to eat here'
    case 'Tyrones':
      return name + ' spends most nights here'
    case 'Speedies':
      return name + ' enjoys eating here'
    default:
      return name + ' does not anywhere eat at all!'
  }
}

console.log(whereDoYouEat('Asuka', 'Jacobs'))
console.log(whereDoYouEat('Cether', 'Tyrones'))
console.log(whereDoYouEat('Gothrian', 'Speedies'))
```

When we write a function expression we start by writing the function without the name, still using the function keyword and then right after that we put the arguments list, then all we do is assign this function to a variable.

We declare a variable Let's call this, `whereDoYouEat` this is a function where we paste in the restaurant and then the function tells us where that person eats.

Our `whereDoYouEat` variable, now holds the function we just created.

The importance of this whole concept is that whenever JavaScript expects a value we always have to write an expression.

Function statements just perform actions. They do things but they don't produce immediate results, ie: if...else statements, while loops or even a function declaration.
The key point to takeaway from here is that function expressions produce an immediate result, while function declarations do not.