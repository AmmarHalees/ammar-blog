---
template: BlogPost
path: /re-re-rendering
date: 2023-04-17T20:29:59.930Z
title: re-re-rendering
metaDescription: Why does React re-render a component when its parent re-renders
thumbnail: https://images.unsplash.com/photo-1635241161466-541f065683ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9vcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
---
## **A React component re-renders for exactly two reasons:**

1. Its internal state has changed.
2. Its parent has re-rendered.

**The first case** is obvious. A component has to re-render when its state changes, or else the UI will be outdated.

**The second one** however is less obvious and it becomes a nightmare when you have a massive tree of nested components.



## **Why does React re-render a component when its parent re-renders?**

Well, an obvious use case would be if the component receives props from its parent.

But what if it isn’t receiving props from its parent? Why does react still re-render it?

The answer here is because React has no way of knowing for certain if a component is Pure.



### **What?**

Well, a pure component/function is one which only uses variables passed as arguments.

A component might be using a non-parameter variables.

Consider this example:

```jsx
const Home = () => {
	
	return <div>{`Connection type changed from ${type} to ${navigator.connection.effectiveType}`}</div>	

}
const App = () => <Home/> 
```



In this case: The UI of `<Home/>` is not a pure function. And its UI could be different between re-renders.

### Optimization step

A know optimization here is to wrap `<Home/>` with `memo`. It’s a way of telling React that “hey, I built this and I know its pure, so you can go ahead and use the last snapshot of this component, instead of re-creating it from scratch”.



### Another Optimization step

Avoid passing expensive props. But if you do, memoize them too.



### Note to self: Don’t over memoize

React was built for this stuff. Its what it does best.

You might be tempted to Memoize every object, every component and function.

But don’t. Just like over-typing, it has a diminishing return effect as it degrades code readability and inflates components.



### Contact me

If you find any incorrect info, feel free to reach me at [haleesammar@gmail.com](mailto:haleesammar@gmail.com)