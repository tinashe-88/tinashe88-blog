---
author: 'Tinashe Chiweshe'
title: The "Truth" about Truthy & Falsy Values
date: "2016-07-18T13:34:12.244Z"
description: Learning about the nature of truthy and falsy values.
tags: ["javascript", "code", "basic"]
image: "../../assets/images/thumbnail-art.jpg"
---

### Falsy Values

In JavaScript, a falsy value is a value that is considered false when a 
condition is evaluated in an if...else statement. The following values in 
JavaScript are falsy:

- `undefined`
- `null`
- `0` 
- `""` (Empty string)
- `NaN`

These five different values will be converted to `false` when evaluated in a 
`true` or `false` condition. Hence the name falsy, however, they're not 
exactly `false`, but they will turn out to be `false` when evaluated in an 
if...else condition.

```js
var somethingUndefined;

if(somethingUndefined){
  console.log('This variable is defined.')
} else {
  // This should log out
  console.log('Variable has not been declared.')
}
```

We declared the variable but did not define it. We already know that it's 
`undefined` as we go into the if...else statement. Given that we also know 
`undefined` is a falsy value, we know that the variable `somethingUndefined` is 
converted to `false`.

It's a decent way of testing if a variable has actually been defined or not.

### Truthy Values

Now with truthy values, we have values that are considered true when evaluated 
in an if...else statement. All the values that are not falsy are truthy.

```js
var somethingDefined = 12;

if(somethingDefined){
  // This should log out
  console.log('This variable is defined.')
} else {
  console.log('Variable has not been declared.')
}
```

When a variable exists it will be converted to `true`, therefore, 
the if block is entered.

> Note: Just one thing to keep in mind. We said before that the number `0` is 
> considered a falsy value, but our `somethingDefined` variable can also become 
> `0`.

```js
// AVOID THIS SITUATION!
var somethingZero = 0;

if(somethingZero){
  console.log('This variable is defined.')
} else {
  // This should log out
  console.log('Variable has not been declared.')
}

// CORRECT!
var somethingZero = 0;

if(somethingZero || somethingZero === 0){
  // This should log out
  console.log('This variable is defined.')
} else {
  console.log('Variable has not been declared.')
}
```

Our condition cannot solely be the variable, but we also have to say that our 
variable is defined as zero as well. The `OR` operator can help us achieve 
this. We check if the variable exists, or if it is equal to zero. Then, the 
if block is entered.

Remember with the OR operator, only one of the conditions has to be true in 
order for the entire condition to be true.

It's a common pattern in JavaScript to check if a variable has been defined.

### Equality Operators

In previous posts, we have been using the strict equality operator (`===`) but 
in JavaScript, there are two different equality operators.

The one we've been utilizing is the strict equality comparison. The second is 
the equality (`==`) operator. The main difference is that the equality operator 
does type coercion which means that the data types of both variables don't 
have to be exact.

```js
var someNumber = 33;

if (someNumber == '33'){
  console.log('Type coercion by the equality(==) operator.');
} else {
  console.log('Print this, I dare you!')
};
```

In this short example, we want to compare the someNumber variable which is the 
number value 33 to a number with a string value of 23, with the equality 
operator.

We see that our condition is true, hence we enter the if block first. The 
equal operator does type coercion. When we use the equality operator, 
JavaScript converts the string value of 33 to an actual number, then says that 
it's the same as the original number value of 33.

```js
var someNumber = 33;

if (someNumber === '33'){
  console.log('This will not log out.');
} else {
  console.log('No type coercion with strict equality(===) operator.');
};
```

Now, if we had used the strict equality operator (`===`), then it would not do 
type coercion. Our condition has now become false because the values are two 
different types. We have 33 the number value and 23 the string value.

That is how the strict equality operator works! It is best practice to always 
use the strict equality operator, in order to avoid unexpected situations and 
bugs.