---
author: 'Tinashe Chiweshe'
title: Arrays
date: "2016-07-29T09:04:20.503Z"
description: Going deeper into the world of Functions in Javascript.
tags: ["javascript", "code", "basic"]
image: "../../assets/images/thumbnail-pink.jpg"
---

Arrays are a fundamental concept in JavaScript that we will use throughout our 
entire JavaScript career.

In previous posts, we had different variables for different people, but 
wouldn't it be helpfulto be able to bundle them all into a single variable.
In JavaScript, arrays do just that.

They're like collections of variables that can even have different data types.

```js
var brands = ['Adidas', 'Nike', 'Puma', 'Mitre']

console.log(brands)
```

There are different ways of creating a new array. The easiest and most 
recommended one is using brackets. We use the brackets and then we put our 
different values. Let's say we want an array of brands. We'll place each 
string value and separate them by with a comma. 

Now we have an array of brands, with four elements called Adidas, Nike, Puma, 
and Mitre all separated by these commas.

As mentioned, there are different ways of creating arrays.

```js
var numbers = new Array(1,3,39,20)

console.log(numbers)
```
### Access an Array item

Arrays are zero-based, meaning that the first element is element number zero (0), 
the second one is element number one, and so forth.

```js
var animals = ['cheetah', 'lion', 'wolf', 'panther']

var firstAnimal = animals[0]
var lastAnimal = animals[animals.length - 1]

console.log(firstAnimal, lastAnimal)
```

Let's say we're looking for the first element in the `animals` variable. We 
use our `animals` variable name, add square brackets adjacent to the variable 
and inside the square brackets insert the index (number). In this case we're 
looking for the first element which is the cheetah string value.

This is how we retrieve data from the array, but we can also use the syntax 
to mutate the data in the array.

```js
// ...

animals[2] = 'tiger'

console.log(animals)
```

If we check out the latest `animals` array, we can clearly see that our array
now has 'tiger' instead of 'wolf' because we targeted the third position in 
the array by using the elements index which in this case is 2.

