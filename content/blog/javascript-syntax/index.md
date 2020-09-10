---
author: 'Tinashe Chiweshe'
title: How do you "speak" Javascript fundamentals
date: "2016-06-18T22:12:03.284Z"
tags: ["javascript", "code"]
image: "../../assets/images/thumbnail-art.jpg"
description: "Speaking the language using basic syntax that is quite simple to interpret."
---

Let's begin with the fundamental concept of variables.
Variables are a core concept of every programming language conceivable.

### So, what is a variable exactly?

Think of a variable as a container in which we can store a value to use 
it whenever we would like in our code instead of having to manually write 
the value each and everything we want to use it.

### How to declare a variable

Declaring a variable is extremely simple to pull off. 

```js
var heroName = 'Batman';
```

First of all, we have to use the var keyword and then the 
name of the variable and I'm going to call this one `heroName`, 
followed by an equals sign, and then the value that you want.

In this case, what I want to assign is a text string called "Batman", 
and then finally, our semicolon at the end (you can also omit
the semi-colon, it's what I do).

There you have it in terms of declaring a variable. 
I told you that it's not that complicated. The name of
the variable is `heroName` and the value of that variable is 
"Batman".

So you can think of this `heroName` variable as a piece of memory 
in your computer which this "Batman" string here is stored.

The single quotes I used here were used to declare that this value is 
a `String` value. Double quotes could have also been used here but I'll 
stick with what I prefer.

When we declare some text, normally we would just use the single quotes 
just like the example above. For demonstration purposes, I will be using 
variables about superheroes for all the examples, so stuff like
names, alter egos,  or something along those lines. 

### The Console

Now, to see something happen with javascript we'll need to open up our 
browser's console. All that's needed for that is to open up your Chrome 
or Brave browser and press **Command+Option+J** on Mac or **Control+Shift+J** 
on **Windows/Linux** - if you're using FireFox then press **Command+Option+K** 
on **Mac** or **Control+Shift+K** on **Windows/Linux**.

Alternatively, we could just simply:

1. Click on the **View** tab,

2. Go all the way down to **Developer** and select the **Javascript Console**.

3. Voila, our console is now open.

We are now able to see javascript in action. Let's us try to display something 
to the console. Simply put the variable `heroName` in between the parentheses 
(`heroName`).

```js
var heroName = 'Batman';

console.log(heroName);
```

Look at that! Our first time logging "Batman" to our console and that's because 
we assigned "Batman" to our `heroName` variable. Javascript can then retrieve the value 
of the variable we declared.

Let's declare some more variables to bridge the point of understanding. We're now 
going to add an `alterEgo` variable as well as - let's have a bit of fun here - number
of `rivals` the hero has.

```js
var heroName = 'Batman';

var alterEgo = 'Bruce Wayne';
var rivals = 50;

console.log(heroName);
```

Now, I'm pretty sure you've spotted that we have a new kind of value in our 
variable. We now see it's no longer a string like we had with the `heroName` variable. 
It has now become a number which means that it's a different data type. 

In JavaScript, there are five different data types: Number, String, Boolean, 
Undefined and Null. We have already dealt with the Number and the String types. 
Now primitive data type just means that it is not for objects, unlike most 
things in JavaScript. They are just simple, primitive, non-object data types.

1. **`Numbers`** - Floating point numbers, for decimals and integers.
2. **`String`** - Sequence of characters, used for text.
3. **`Boolean`** - Logical data type that can only be `true` or `false`.
4. **`Null`** - Non-existent.
5. **`Undefined`** - Data type of a variable that doesn't have a value yet.

### Number

Let's kick off with Numbers. JavaScript numbers are always floating-point numbers, 
which simply means that they always have decimals, even if they are not visible or 
have not been declared yet. This little example should help paint a clearer 
picture. 3, it's like having 3.0. In other programming languages, it doesn't 
work like this in most cases and you have to account for different data types 
for integers and decimals, but not in JavaScript. All numbers are simply 
floating-point numbers even if they look like integers.

```js
var someNumber = 67235;

console.log(someNumber);
```

### String

Next up, we have Strings which are simply a sequence of characters that are 
just used for text like, with the example before, with the `heroName` and the 
`alterEgo` variables.

```js
var someString = 'Some string';

console.log(someString);
```

### Boolean

Next up, the Boolean data type is a logical data type that can only take one 
of the logical values true or false. For the sake of simplicity, a Boolean 
is always either true or false, that's it.

```js
var someBoolean = true;

console.log(someBoolean);
```

### Undefined

Undefined is the data type that is automatically assigned to a variable that 
doesn't have a value yet. What matters here, for now, is that, basically, 
Undefined means non-existent.

```js
var somethingUndefined = undefined;

console.log(somethingUndefined);
```

### Null

Null also means non-existent, but it's slightly more specific.

```js
var somethingNull = null;

console.log(somethingNull);
```

### Naming conventions

It's best practice to always give our variables meaningful names, rather than 
simply writing something short and senseless like 'z' or 'xyz'.

> JavaScript has a feature called **dynamic typing**, which means that we don't have 
> to manually define the data type of a variable like in many other programming 
> languages. JavaScript automatically detects if a variable is a string, a 
> number, undefined or Boolean, and promptly assigns the data type to the 
> variable without us having to do anything.

Let's say, for example, we assign another value to the same variable but with 
another data type,  JavaScript will then automatically change the data type 
of the variable as well. This can be very useful and save us some time 
writing code, but it can also be the source of some difficult-to-find bugs, 
which means errors in our code.

We have to be careful with what we do with our variables. We should always 
say in our variables what we want, or what this variable means, so in this 
case, here we have "Batman" and that's the first name so we called this 
variable `heroName`, and not just some random sequence of characters.

```js
var heroname = "Batman";
// OR
var hero_name = "Vegeta";

console.log(heroname, hero_name);
```

> **Comments**
>
> There are two types of comments, single-line comments and also multi-line 
> comments. In any programming language in the world, comments are a common 
> occurrence. With comments, we can comment on a piece of code and describe 
> what that code does. Just incase you were wondering about the '// OR' above.

```js
// This is a single-line comment

{/*
  This is a multi-line comment
*/} 
```

We could have written it like this, but it would be kind of difficult to find 
where the second word begins. We also could have done it like, with an 
underscore, but in JavaScript, it's a small convention to use the camelcase 
notation.

Starting with a small letter in the beginning, and then the second word is 
the one that starts with a capital letter. It's not about the JavaScript 
functionality or rule itself, but more of a programming convention and considered best 
practice.

### Rules to keep in mind

On that note, we have some rules that we do have to keep in mind. They're 
quite simple. First of all, you have to know is that variables cannot start with 
numbers or symbols, except for the dollar sign ($) or an underscore (_).

Secondly, and last rule, we cannot use reserved JavaScript 
[keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) as 
variable names. For example, function, if, true, catch, etc.

Variable names must be words of our creation, and not the words that 
JavaScript already implements in its language.

```js
// Not Valid
var 77bad = 'Will not work'; 
var &notGood = 'Not going to work';

// Valid
var _legal = 'Some text';
var $legitimate = 'Some more text';
```


### Variables left undefined

Now, let's define yet another variable, and let's this one `archNemesis`. Now the 
difference here is that we won't be assigning anything to this variable. We 
can declare a variable but not assign a value to it. What might happen when 
we now take a look at this variable?

```js
var archNemesis;

console.log(archNemesis);
```

We declared the variable but we didn't assign any value to it, therefore, 
`archNemesis` is simply undefined and that's what we see in the console. We 
can later go ahead and assign a value to it.

```js
var archNemesis;

archNemesis = 'Joker'
console.log(archNemesis);
```

Let's say archNemesis is "Joker" and if we console log again, we should be 
able to see the "Joker" value.

We have Strings, a Number, a Boolean, and we also have undefined. These four 
are the most important data types in Javascript.

### That's about it

And that's about all there is to know about the fundamentals of variables 
and data types. We have taken a huge step forward and learnt an important 
concept in any programming language of the world as a whole.

With this basic knowledge we will be able to dive a bit deeper into 
variables and do some other things with them.