---
author: 'Tinashe Chiweshe'
title: What is with Basic Operations?
date: "2016-06-28T22:40:32.169Z"
description: Let's dive into the world of JavaSscript and learn about some of the basic JavaScript operators.
tags: ["javascript", "code", "basic"]
image: "../../assets/images/thumbnail-colours.jpg"
---

Operators are what we associate with school maths. Things such as addition (`+`), 
multiplication (`*`), subtraction (`-`), etc. We’ll commence with simple operators, 
then concentrate on JavaScript-specific aspects, not covered by school 
arithmetic.

### What are Operators?

Operators in JavaScript, in simple terms, operators are like functions that are written 
with specificity in-mind. The simple math operators that we already know, like 
a plus, minus, multiply etc. In JavaScript, we have a couple of 
other operators that that go beyond the more recognisable operators.

- Arithmetic Operators
- Comparison Operators
- Logical (or Relational) Operators
- Assignment Operators
- Conditional (or ternary) Operators

Let us take 
a look at some math operators and see how we can implement them in JavaScript.

### Math/Arithmetic Operators

Arithmetic operators take the numerical values - variable or literals - as 
their operands and churn out a single numerical value. Basic arithmetic 
operators are as follows: 

- addition 
- subtraction
- multiplication
- division

We are going to calculate which year our hero was born in. We will call it 
`heroBirth`. 

#### Minus operator (-)

We have 2016 and 20 are called **operands** and the minus sign is the **operator**. 
Now, let us analogue it to the console. If we look at the result, we should 
get 1996.


The minus in this example is a math operator in JavaScript.

```js
var year, heroBirth;

year = 2018
heroBirth = year - 20;

console.log(heroBirth);
// Should output 1998
```

#### Addition operator (+)

That is just the minus operator covered in these examples, however, we can do 
all kinds of math here. How about a little addtion?

```js
var currentYear, addFourYears;

currentYear = 2016
addFourYears = currentYear + 4;

console.log(addFourYears);
// Should output 2020
```

If we, let's say, wanted to add 4 more years. The `currentYear` variable is 
not defined. The `currentYear` variable is the current 
year, 2016. The `addFourYears` stores the result of the current year plus the 4. 
Let's take a look at what will happen.

#### Multiplication operator (*)

```js
var currentYear, multiplyYear;

currentYear = 2016
multiplyYear = currentYear * 2;

console.log(multiplyYear);
// Should output 4032
```

#### Divide operator (/)

```js
var currentYear, divideYear;

currentYear = 2016
divideYear = currentYear / 4;

console.log(divideYear);
// Should output 504
```

### Logical Operators

Logical operators are known to be used with Boolean values. They return a 
Boolean value when evaluated. The && and || operators return the value of 
one of the specified operands, so if these operators were to be used with 
non-boolean values, they could return a non-boolean value.

Arithmetic operators work in most other programming languages when used 
with floating-point numbers.

> Note: Division by zero will result in Infinity.

Let's see logical operators in their element.

```js
var squanchyHeight = 1.55
var aoyomaHeight = 1.74

var isTaller = aoyomaHeight > squanchyHeight

console.log(isTaller)
// Should print out true (Boolean)
```

How did we get to this result? The variable isTaller stores the result of 
the greater than comparison between `aoyomaHeight` and `squanchyHeight` variables. 
In this case, `aoyomaHeight` is indeed taller than `squanchyHeight`. We basically 
asked the question, "Is `aoyomaHeight` greater than (`>`) `squanchyHeight`?" 
and the answer to that is yes.

Let's flip things the other way around with the next example.

```js
var squanchyHeight = 1.55
var aoyomaHeight = 1.74

var isTaller = aoyomaHeight < squanchyHeight

console.log(isTaller)
// Should print out false
```

We have a way of creating a boolean variable using one of the logical 
operators.

### The very basics

With that said, those are your basic operators. This is just an intro into 
Operators as a whole because there are still other important operators I have 
yet to cover. I wanted to ease you into what we'll be dealing with later on. 
Foundations are always the core of learning anything.