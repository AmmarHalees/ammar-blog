---
template: BlogPost
path: /everything-i-know-about-data-fetching
date: 2021-09-23T20:06:09.175Z
title: Everything i know about data fetching
thumbnail: /assets/star-wars-rise-of-skywalker-header.jpeg
---
> ### **This is a living document for my own reference.**

### **Intro:** 

Date fetching is , well , the process of fetching data from source to destination

### Timing: 

1. At user request: happens on the client-side. For example: Like, follow, share etc. 
2. At page request time: Is what the topic of this blog post is about.

### Strategies: 

There are multiple data fetching strategies for different rendering use-cases: 

1. Client-side Rendering.
2. Server-side Rendering.
3. Static Site Generation.
4. Incremental Static Regeneration.

#### 1. Client-side rendering: 

Is the process of rendering a webpage on the client through Javascript. 

##### CSR Flow:

1. Browser requests a page from the server. 
2. Server responds with a small html file, which houses a reference div with an id and links to your JS files.
3. Browser parses html and loads assets (CSS, images and fonts) as it encounters them. 
4. Browser parses and executes javascript which will build and manipulate the DOM accordingly. (Page is viewable and intractable)

##### CSR frameworks

The most popular ones are Create React App and Vue CLI.

##### Routing in CSR

A CSR app is a single page application: A single html file and routing is provided via the browser’s history API, though which javascript determines what is on the screen based on the current url. 

**Data-fetching in CSR**

Data fetching in client-side React happens after the initial render. 

Usually via the fetch API or a library such as Axios. 

*In a class-based component:* 

That would be in the “componentDidMount” class method, which runs right after the initial render. 

![](https://lh5.googleusercontent.com/vF0725SbkY_QUw5umzV-VgEiCcDcKDJE-f0jBPMR7_ij-smtZIomTP0Zk-PxtLgv7TZKC3Ujzbz5jjIoT_WGlovIv12jvNgVSAM0N6wXmB0Ofayk6dvBU070RWcCTY-qC49Kr5Uc=s0)

*In a function-based component:* 

That would be in the “useEffect” hook, which runs right after the initial render and subsequent renders if one or more of its dependencies change. 

**Pros of CSR**

1. Fast and interactive feel.
2. Quick page transitions (Because it’s an SPA) and so you don't have to wait for the server response for the page.
3. Decreased load on the server.
4. Fast TTFB because the server isn't really doing much.

**Cons of CSR**

1. Large Javascript bundle (Framework code + app code + dependencies code), which means:

* Bad user experience for folks with slow internet connections.
* Large contentful paint (a google metric in seconds) is usually high. So for a while, the screen might have nothing on it. 

2. Data-fetching takes place after the initial render, which means: 

* Bad SEO : bots might sift through an empty html file. 

Bots might not even run Javascript.

3. Breaks when Javascript is disabled.

**Optimization steps in CSR:**

1. Code-splitting : the process splitting javascript bundle into chunks and importing them on demand. 

Lazy-loading can be at the route level or at the component level. 

This can be done natively through the use of `type="module"` attribute to the script tag. And inside that file, we can now use *import expression* instead of *import statements.* 

Unlike import statements, import expressions can be used anywhere within the file and don't need to be at the top (before variable and function declarations). 

**CSR Recommendations**

1. CSR is a no-go for applications with high SEO requirements. 
2. CSR is great for applications that require high interactivity , but don’t care about initial page load time, such as: 

* Dashboards 
* E-learning platforms. 

These are usually behind some type of auth wall.

#### **1. Server-side rendering:** 

The process of rendering a page on the server. 

SSR Flow:

1. Browser requests a page from the server. 
2. Server responds with an HTML document. (On every page request).
3. Browser renders HTML . (Page is viewable, not interactive yet - First paint)
4. Browsers downloads , parses and executes JS (React). (Page is now interactive)

**Pros of SSR**

1. First contentful paint is low, as you don't wait for the JS to be parsed and executed to see content on the page. 
2. Data pre-fetching: Data is pre-fetched (its API is called at build time, not at run time) , so at the initial render, your html will have all the content.  

**Cons of SSR**

1.  TTFB(Time To First Byte) AKA server response time , is slower than CSR, because your server will have to spend the time to create the HTML for your page instead of just sending out a relatively empty response;
2. SSR throughput of your server is significantly less than CSR throughput. For react in particular, the throughput impact is extremely large. ReactDOMServer.renderToString is a synchronous CPU bound call, which holds the event loop, which means the server will not be able to process any other request till ReactDOMServer.renderToString completes.

Helpful Links

1. https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering
2. https://www.youtube.com/watch?v=8_RzRQXSHcg