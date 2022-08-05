---
template: BlogPost
path: /dijkstras-2-stack-algorithm-for-evaluating-mathematical-expressions
date: 2022-08-05T19:55:04.063Z
title: "Implemented in JS: Dijkstra’s 2-stack Algorithm for Evaluating
  Mathematical Expressions"
thumbnail: /assets/0_tgnht3l1ba9udan6.jpeg
---
![](https://miro.medium.com/max/1400/0*tGnhT3L1Ba9uDAn6.jpg)

For lack of a better image

## Without diving too deep

A Mathematical Expression is

> “ a finite combination of symbols that is well-formed according to rules that depend on the context”

Symbols can designate numbers (constants), variables, operations, functions, brackets.

As opposed to a statement (formula); an expression is an “incomplete sentence”; It’s more or less a value which could be used in a formula.

**Examples of expressions:**

1+2

(2+10)/20*(20–90)

5

**Fully parenthesized expressions:**

Are expressions which “specify precisely which operators apply to which\
operands”. eliminating the reliance on operator precedence all together.

## Description of algorithm:

1. Upon encountering a “(“ : **Ignore**
2. Upon encountering an operand (Number value) : **Push onto the operand stack.**
3. Upon encountering an operator (symbol) : **Push onto the operator stack.**
4. Upon encountering a “)“ : **Pop requisite operands , Pop Operator , Push operation result onto Operand stack.**

## Our implementation :

1. Will be in JavaScript.
2. We’ll implement the stack ADT using the Array Data-structure, as it has the necessary behavior (.push(), .pop(), .length).
3. For simplicity, we’ll assume the following:

* Edge cases such as: “In-complete bracket sequence” are ignored.
* Fully parenthesized sequence. Example: (1+(2*5))
* Single digit numbers. (0–9)
* Basic Binary Operators only (+,-,*,/)

## Our Code

![](https://miro.medium.com/max/1400/1*EgvkQDV3OhvoMDtdl8ivTg.png)

We initialize our variables

Based on the character; we then perform the steps outlined by the algorithm description above, where we:

1. If binary operator: push it onto the Operator Stack.
2. If number sequence: push it onto the operand stack.
3. If a right “closing” bracket:

* Pop the operand stack twice (because we’re using binary operators).
* Pop the operator stack once.
* Evaluate the expression.
* Push the result onto the operand stack.

![](https://miro.medium.com/max/1400/1*ckYrNr2W-cGSmkvYUZbbjA.png)

`getResult` function, used to evaluate a single binary expression, is implemented separately as:

![](https://miro.medium.com/max/1400/1*k4Ncqo8fcoQvbfAYZvU7cw.png)

Full Code:

[2-Stack Algo](https://medium.com/media/a49f24b90296ec5871ae3aba31616a2c)

That’s All!

For any inquires, please send me an email at **haleesammar@gmail.com**.