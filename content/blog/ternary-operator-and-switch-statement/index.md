---
author: 'Tinashe Chiweshe'
title: About Ternary operators and Switch statements
date: "2016-07-14T11:30:53.119Z"
description: More decision making with Ternary operators and switch statements.
tags: ["javascript", "code", "basic"]
image: "../../assets/images/thumbnail-colours.jpg"
---

In this post, we will look at some more ways of making decisions with 
JavaScript. We've learned about the if...else statement to make decisions, but 
that is not the only tool we have available in our arsenal.

### Ternary Operator

The first thing that we'll take a look at is the ternary operator.

Also known as the conditional operator, it is an operator that allows us to 
write like an if...else statement all in one line. Let's see how that look in 
our code.

We'll use the ternary operator to determine whether or not Sephiroth can 
legally vote, depending on his age.

```js
var firstName = 'Sephiroth';
var age = 32;

age >= 18 ? console.log(firstName + ' can legally vote') : 
console.log(firstName + ' is not eligable to vote');
// Should print "Sephiroth can legally vote"
```

We start here with the condition followed by the question mark. We write what 
we want to happen if the condition is true. You can think of this as the if 
block, in an if...else statement. In our case, we want to log the result to 
our console.

That's it! This is what the ternary operator does. The reasoning behind the 
name ternary is because it has 3 operands. Three parts that interact 
with the operator.

We have the condition first, then the if block and then the "else block".

Let's take a look at another better example, because we can. We will assign 
values to a variable using the ternary operator in a simple way. Let's say we 
wanted to find a variable, saying what Sephiroth can legally vote.

```js
var firstName = 'Sephiroth';
var age = 17;

var canVoteLegally = age >= 18 ? ' can legally vote' : ' is not eligable to vote';
console.log(firstName + canVoteLegally);
// Should log out 'Sephiroth is not eligable to vote'
```

Let's create a variable called `canVoteLegally`, and we'll use the conditional
operator.

Age is greater or equal than 18 is the condition. If it is greater than the age
variable, then the result would simply be 'can legally vote'. If not,
then the string 'Is not eligable to vote'. Our result will then be assigned to 
the `canVoteLegally` variable.

Our ternary operator is an operator and an operator always has a result just 
like our previous example before with any of the other operators. This ternary 
operator is executed before the assignment operator.

### Switch Statement

We've discussed the ternary operator as an alternative way of writing 
conditionals, however, there's even more that we could utilise but we'll focus 
on the switch statement. This is like a grand if...else statement, where we can 
have multiple else if clauses and we can replace that with syntax that's easier 
to understand.

Let's dive in!

```js
var footballer = 'Paul Pogba';
var position = 'Midfielder';

switch(position){
  case 'Goalkeeper':
    console.log(footballer + ' is in between the sticks.');
    break;
  case 'Defender':
    console.log(footballer + ' is in the defensive line.');
    break;
  case 'Midfielder':
    console.log(footballer + ' is a midfield General.');
    break;
  case 'Attacker':
    console.log(footballer + ' is up front.');
    break;
  default:
    console.log(footballer + ' does not play Football.');
}

```
What we have here is that we want to compare the variable `position` to each 
of these different cases. Starting with if the `position` is the string 
'Goalkeeper', then print this. If the `position` is 'Defender', then do this. 
If it's 'Midfielder', do this and if 'Attacker', print this.

We add the `break` statement to prevent JavaScript from continuously evaluating 
the next cases. Even if the `position` is 'Midfielder', it will then keep 
evaluating the other cases looking at them to see if they're also true.

Use the `break` keyword to prevent that.

The `default` keyword helps with the scenario of whether the `position` 
variable does not match any of the cases presented. If that's the case, then a 
default value would be returned. In our example, 'Paul Pogba does not play 
Football.' would be logged.

Let's wrap this up with another example.

```js
var fullName = 'Gumball Waterson';
var age = 12;

switch(true){
  case age < 13:
    console.log(fullName + ' is in Primary School.');
    break;
  case age >= 14 && age < 18:
    console.log(fullName + ' goes to High School.');
    break;
  case age >= 19 && age < 25:
    console.log(fullName + ' is at University.');
    break;
  default:
    console.log(fullName + ' attends the school of Life.');
};

// Should print 'Gumball Waterson is in Primary School.'
```

In the previous example we used strings but now let's implement some 
conditions. This is a better use case of utilizing the switch statement.

We have our logical expressions that will turn out to be either true or false. 
For example, if our first case turns out to be true then it will be true and 
all of the others would be false. The case that's true will be the one that 
is executed.

These are two ways of using the switch statement, and they can be useful again 
in the case where we have a long if...else statement coupled with plenty of 
else...if statements.

This code looks a bit cleaner here than if you were to compare it to a long 
if...else statement. Between this post and the last, these are the three ways 
in which we can write conditional code. The if...else statement, the ternary 
operator, and the switch statement.