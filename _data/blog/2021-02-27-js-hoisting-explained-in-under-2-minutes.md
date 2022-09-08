---
template: BlogPost
path: /js-hoisting-explained-in-under-2-minutes
date: 2021-02-27T19:18:09.052Z
title: JS Hoisting explained in under 2 minutes.
metaDescription: |
  A simple and straightforward explanation of hoisting..
thumbnail: /assets/1_flouovyjlil6kyn4dk3vrq.png
---
<!--StartFragment-->

# What is hoisting?

Hoisting is a JavaScript feature (or phenomenon) in which variables **declared with** `var` and **function expressions** are available for use ahead of time i.e before they’re even declared lexically in the code.

### Example

```javascript
console.log(myname);
const myname= "Ammar"
```

<pre></pre>

Logically; Line 1 should throw an error (Uncaught reference error), as we are attempting to access a variable that does not exist (yet) in memory.

Instead we get `undefined`: A primitive type given by the JS engine to variables **which have been declared** but not assigned.

## A BIG Misconception

Many articles and question boards explain hoisting as follows:

*“When the JS program runs: Variables and function expressions are hoisted to the top” .*

This answer is not a satisfactory one and it actually poses more questions that it answers. For instance; If the variables are in fact hoisted; then why did we get `undefined`; instead of the actual value of that variable.

## Real Explanation

When a JavaScript program runs in a browser environment; An **execution context** (a construct pertaining to the environment in which variables and functions are declared and scoped) is created.

The execution context is created in two phases:

1) The Creation Phase

2) The Execution Phase.



<pre></pre>

>

### **1) The Creation Phase**

Memory space is Setup for:

* Variables (**which are set to undefined**) and functions (In its entirety , including name and code properties).
* `this` variable
* Reference to the outer environment (the global object in the case of the global execution context.

### 2) The Execution Phase

Code is executed Line by Line.



### Example

In the light of the above and **considering only variables in memory**; let’s examine the code snippet from before:

```javascript
console.log(myname);
const myname= "Ammar"
```

<pre></pre>

> *Phase 1:*

* Space in memory is set for the variable `myname` and its value is set to `undefined`.

> *Phase 2:*

* Code is executed line bye line:

**Line 1** :  `console.log(myname);`  this method will look for the variable `myname` in memory within its scope (the global scope in this case) to log it.

`myname` is found in memory with a value of `undefined` , so `undefined` is printed onto the console.

**Line 2**  :  `var myname= “Ammar”; ` The value of “Ammar” replaces `undefined` in the memory location of `myname` .

But by then it’s too late; because we’ve already printed out `undefined` .

That’s why:

# Hoisting is unreliable!

Make sure you always use your variables and functions after assigning them, to avoid inconsistent or unpredictable behavior in your code.

<!--EndFragment-->