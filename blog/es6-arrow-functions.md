---
path: blog
date: 2019-01-14T02:56:13.664Z
title: ES6 arrow functions
---
![ES6](/assets/es6.png)

ES6 or ECMAScript2015 is somewhat a new javascript implementation that I've been using everyday. Sometimes forgetting how the older syntax is written, feeling like a lost child when looking at legacy code, something i should definitely improve on.

So far, I'd like to put arrow functions out there, it has definitely has improved my developer productivity in terms of code readability, simplify function scope and to some degree it has made it easier for me to read code and understand what the implementation behind i due to it's concise syntax. i may be exaggerating a little but long story short, I'm just lazy, I want to write less code and spend time doing more without it affecting the performance. 

Arrow functions, are not the same as a normal function expression, **how**?

1. They are anonymous, which means they are not named.
2. Change the way "this" binds in functions.  "this" in arrow functions, change the context of "this", lexically binding it.
3. We are able to omit the curly braces & the return statement due to implicit returns.

## When do you not use Arrow Functions?

Object Methods because "this" is not bound to anything and will inherit the value of "this" from its parent scope.

## When to use them?

Arrow functions work best when you need to bind "this" to bind to the context and not the function itself.
