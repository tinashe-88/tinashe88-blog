---
author: 'Tinashe Chiweshe'
title: Variable Mutation & Type Coercion
date: "2016-06-23T23:46:37.121Z"
description: Coming to grips with variable mutation & type coercion.
tags: ["javascript","code", "basic"]
image: "../../assets/images/thumbnail-wall.jpg"
---

### Variable mutation in action

Variable mutation means to change the value of a variable. That's something 
that we didn't do up until this point. It is something that we can do with 
JavaScript variables.

Let's redefine the age. So we can say heroName = twenty-eight, for example. 
This time around, we don't use the var keyword. This part is not necessary 
because the variable was already defined before it.

```js
var heroName = 'Uchiha Itachi';

// Should print 'Uchiha Itachi'
console.log(heroName)

heroName = 'Roronoa Zoro'

// Should print 'Roronoa Zoro'
console.log(heroName)
```

When we want to change the variable, we no longer need the var keyword. All we 
have to do say is the variable name then the new value. JavaScript 
automatically figures out the data type and can change it on the go. 

We can even change the type like so:

```js
var someVariable = 'This is a string';

// Should print 'This is a string'
console.log(someVariable)

someVariable = 50

// Should print the number 50
console.log(someVariable)
```

### What is Type coercion?

Type coercion, so what the eff does that mean. Simply put, JavaScript 
automatically converts types from one another when it's needed. In this 
specific use case, it converted the number here to a string to be able to join 
these three strings. We'll look at an example.

```js
var heroName = 'Uchiha Itachi';
var village = 'Konoha';
var rank = 1;

console.log(heroName + ' is a ninja from ' + village + ' with a combat ranking of ' + rank)
```

Okay, so we can say `heroName`, then we can use the + symbol, which is an 
operator, but more on that in another post. The + symbol helps to join the 
`heroName` variable and the "is a ninja" string. Then we can add space and 
then another + to add the other variable `village`, followed by yet another + 
symbol connecting to the string "with" and finally the `rank` variable  . What 
we should get in our console is, "Uchiha Itachi is a ninja from Konoha with a 
combat ranking of 1".

"Uchiha Itachi" is a string, then space here is also a string, and then `rank` the 
number will automatically be converted by JavaScript also into a string so that 
it can then join all of this string into one bigger string. 

How did this work because as we remember, `rank` is a number and not a string 
but it still logged it to the console as a string in our entire string. This is the 
handy work of type coercion. Other programming languages don't offer this. We would 
have to convert our variables but with JavaScript, it has been simplified. JavaScript 
takes all that work away from us and does it automatically.

Joining strings like this is one of many examples of type coercion. Type coercion 
happens all the time in JavaScript. Let's dig in with more examples. We are 
going to declare multiple variables on the same line and then we'll assign 
values to them here on the different lines.

> Don't forget the spaces in between the qoutes " ", otherwise the result in
> the console might look something like this "IsUchiha Itachideceased?true".
> Give the strings and variables a little personal space.

```js
var heroName, deceased;

heroName = 'Uchiha Itachi';
deceased = true;

console.log('Is ' + heroName + ' deceased? ' + deceased);
```

It is also another a common practice, in case we wanted to declare more than 
one variable, This looks syntactically prettier or cleaner if we do it like 
this. All in one line and then simply assign them the values at a later stage.

As we can see, even the Boolean gets converted to a string. That tells us that 
type coercion in JavaScript also works with Boolean's. Even undefined gets coerced!

**alert()**

An alternative to `console.log()` method, we could also use the `alert()` 
method which will result in a pop-up window. I don't usually use it 
because it's a little bit too jazzy for my taste. Here's an example 
regardless,

```js
var someVariable = 'Alert in a Pop-up';

alert(someVariable)
```

**prompt()**

We can also get data from the user with a similar method to alert. The 
`prompt()` method can be used and ask a question. We'll use the `prompt()`
method to ask: "What's his/her speciality?". We will then be able to input a 
value. That value can then be stored into a variable. 

```js
var heroName = 'Uchiha Itachi';
var speciality = prompt('What is his/her speciality?');

console.log(heroName + ': ' + speciality)
```

Now this will be stored into the `speciality` variable, and then we can log that 
variable to the console.

That's all for variable mutation and type coercion. Not too complicated once 
you see it in action because variable mutation and type coercion sound like 
the next plot of a Christopher Nolan flick.

I really hope that you understood what I was trying to get across. Just 
remember that type coercion let's JavaScript automatically convert types 
from one another when necessary.