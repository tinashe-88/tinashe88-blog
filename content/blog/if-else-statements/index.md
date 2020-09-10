---
author: 'Tinashe Chiweshe'
title: Making decisions with if...else Statements
date: "2016-07-09T08:37:27.169Z"
description: Features in JavaScript that allow us to make decisions, specifically if/else statements.
tags: ["javascript", "code", "basic"]
image: "../../assets/images/thumbnail-pink.jpg"
---

### if...else Statements

JavaScript, as well as most programming languages out there, has a couple of 
important control structures in which are features that allow us to execute 
only certain parts of our code, or to execute parts multiple times.

Ladies and gentlemen, I present to you, the `if...else` statement. This 
control structure is a conditional which allows us to make decisions with our 
code. The if in the statement executes a statement if the specified condition 
is `true`, however, if the condition is `false`, another statement, `else`, 
will be executed.

What do I mean by 'making decisions'? Let's go through an example to clarify 
what I meant.

```js
var pokemonName = 'Squirtle'
var elementType = 'Water'

if (elementType === 'Water'){
  console.log(pokemonName + ' is a Water type pokemon')
} else {
  console.log(pokemonName + ' is not a Water type pokemon')
}
```

We create a variable each for the pokemon name and element type water, fire, 
gas, etc. Squirtle is a water type pokemon, so we add that to the 
elementType variable. Now, what we want to do here is to log a string to the 
console, whether he is a water type pokemon or not. We can use an 'if / else' 
statement to make decisions: we write 'if', then we open parenthesis, followed 
by a logical condition, so something that returns a Boolean `true` or `false` 
value. In this case, `true`.


```js
// ...

if (elementType === 'Fire'){
  console.log(pokemonName + ' is a Fire type pokemon')
} else {
  console.log(pokemonName + ' is not a Fire type pokemon')
}
```

In this case, we are checking to see if elementType is strictly equal to
'Fire'. From what we can see, the element type 'Fire' doesn't match 'Water', 
obviously. That resulting output will end up being the string "Squirtle is not
a Fire type pokemon".

Let's have a peek at another example with a slightly different approach. We'll
be using a "truthy" expression. What I mean by truthy is that we're just checking
if something is true, and "falsy" is used to check if it's false.

```js
var firstName = 'Midoriya'
var isHidding = true;

if (isHidding === false){
  console.log(firstName + ' is hidding')
} else {
  // This one should print out
  console.log(firstName + ' is not hidding')
}

// BETTER! we could write it like this...

if (isHidding){
  // This one should print out
  console.log(firstName + ' is hidding')
} else {
  console.log(firstName + ' is not hidding')
}

```

Let me explain what is happening in the last of our example. What we want in 
our if/else statement is a `true` or `false` value, but 'isHidding' is already 
`true`, it is already a Boolean. What I'm trying to point out is that if the 
statement in the parenthesis is a Boolean, we needn't use the assignment 
operator with the boolean value. 

Just the variable will suffice.

### Boolean Logic

We learnt about how we could make decisions with our code in the previous post. 
Let's take it to the next level and proceed with Boolean logic. As usual, we 
will use an example to kick things off.

```js
var firstName = 'Kraft Punk';
var birthYear = 1982;

if(birthYear < 1964){
  console.log(firstName + ' is a Baby Boomer.');
} else if(birthYear >= 1965 && birthYear < 1979){
  console.log(firstName + ' is a Gen X.');
} else if(birthYear >= 1980 && birthYear < 1994){
  // This one should log out to our console
  console.log(firstName + ' is a Gen Y.')
} else {
  console.log(firstName + ' is a Gen Z.')
}
```

What the hell is going on here? Simply put, we are trying to find out which 
generation Kraft Punk belongs to. His date of birth is contained in the 
`birthYear` variable. We want to use an expression to conditionally print 
out the generation Kraft Punk belongs to.

How do we go about that because it does require a bit of thinking? 

### Logical Operators

In programming as a whole, Boolean logic is a branch of computer science that 
deals with `true` or `false` values. This is extremely important to remember going 
forward because it is a crucial concept in coding.

Several logical operators deal with `true` and `false` values. The most important 
ones are the NOT, AND, and OR operators.

| Operator | Description |
| ----------- | ----------- |
| AND (&&) | `true` is everything is `true` |
| OR (&vert;&vert;) | `true` if ONE is `true` |
| NOT (!) | inverts `true` or `false` values |

- **AND (&&)** - Let's say we have two variables, X and Y. Only if variable X and 
variable Y are both `true`, the expression A and B will become `true`. In all 
other cases, the result will be `false`. That's why it's called the AND operator 
because X and Y must both be `true` in order for the result to be `true`. If 
either X or Y is `false`, then X and Y will become `false` as well. The same 
applies if there are more than two variables. If all the variables are `true`, 
then the AND expression will become `true` as well.

- **OR (&vert;&vert;)** - The OR operator works slightly differently. With this 
operator, it's enough for **one** of the variables to be `true` to make X or Y 
become `true`. It's called the OR operator because only X or Y needs to be `true` 
for the final expression to be `true`. The result will only be `false` if **both** 
variables are `false`. It works the same way with multiple variables. It's 
enough for one variable to be `true` to make the final result `true` if there are 
plenty of Boolean variables.

- **NOT (!)** - Finally, there's the NOT operator. This operator is simple. All it 
does is invert the `true` or `false` value of a variable. So if variable X is `true`, 
then NOT X is `false`. If X is `false`, well, then NOT X is `true`.

```js
var championships = 15;

// EXAMPLE 1
// false
console.log(championships >= 16);
// EXAMPLE 2
// true
console.log(championships < 20);
// EXAMPLE 3
// false
console.log(!(championships < 17));
// EXAMPLE 4
// false
console.log(championships >= 16 && championships < 25);
// EXAMPLE 5
// true
console.log(championships >= 16 || championships < 25);
```

#### EXAMPLE 1
We start by defining a variable called `championships`. We have `championships` 
greater or equal than 16, which should be `false` because 15 is less than 16.

#### EXAMPLE 2
This example has `championships` is less than 20 which is `true`. 

#### EXAMPLE 3
We have the NOT operator so we know that `championships` less than 17 which is 
`true`. However, we also know that the NOT operator inverts the value so NOT 
`championships` is less than 17 then inverted to `false`.

#### EXAMPLE 4
In the next expression, we already know that `championships` greater or equal 
than 16 which is obviously `false`, as well as knowing that `championships` is 
less than 25 which is `true`. We have both `false` and `true` respectively. Overall 
it's `false` because they're not both `true`.

#### EXAMPLE 5
The next expression is similar but we're now using the OR operator. It's now 
`true` or `false`. The result will be `true` because, with the OR operator, if one 
of them is `true`, then that's all it needs.

### Breaking our Kraft Punk example down

Back to our Kraft Punk example. The following table represents the generation 
classification and the years in which you had to have been born in to be 
considered a Baby boomer, Gen x, etc.

| Generation | Year of birth |
| ----------- | ----------- |
| Baby Boomers | 1944 - 1964 |
| Gen X | 1965 - 1979 |
| Gen Y | 1980 - 1994 |
| Gen Z | 1995 - 2015 |

```js
// ...

if(birthYear < 1964){
  // If birth year is less than 1964, he is a baby boomer
  console.log(firstName + ' is a Baby Boomer.');
} else if(birthYear >= 1965 && birthYear < 1979){
  // or else if birth year is greater than or equal to 1965
  // AND birth year is less than 1979
  console.log(firstName + ' is a Gen X.');
} else if(birthYear >= 1980 && birthYear < 1994){
  // or else if birth year is greater than or equal to 1980
  // AND birth year is less than 1994
  console.log(firstName + ' is a Gen Y.')
} else {
  // otherwise if birth year doesn't fit in any of the above,
  // meaaning everybody who was born 2016 and above, then
  // return this console log
  console.log(firstName + ' is a Gen Z.')
}
```

Hopefully, that makes sense, and that see we can make decisions using code. We 
could do much more intricate and complex things with these 'if' or 'else' 
blocks.

Awesome! However, these are just the fundamentals of conditionals and decision 
making with code, so there's a lot more we can learn.