---
template: BlogPost
path: /diffrent-ways-of-data-fetching
date: 2021-09-23T20:06:09.175Z
title: Diffrent ways of data fetching.
metaDescription: Date fetching is , well , the process of fetching data from
  source to destination.
thumbnail: /assets/rise-of-skywalker-endor-fight.jpeg
---
## **Intro:** 

Date fetching is , well , the process of fetching data from source to destination

## Strategies: 

There are multiple data fetching strategies for different rendering use-cases: 

1. Client-side Rendering.
2. Server-side Rendering.
3. Static Site Generation.
4. Incremental Static Regeneration.

### 1. Client-side rendering: 

Is the process of rendering a webpage on the client through Javascript. 

#### CSR Flow:

1. Browser requests a page from the server. 
2. Server responds with a small html file, which houses a reference div with an id and links to your JS files.
3. Browser parses html and loads assets (CSS, images and fonts) as it encounters them. 
4. Browser parses and executes javascript which will build and manipulate the DOM accordingly. (Page is viewable and intractable)

#### CSR frameworks

The most popular ones are Create React App and Vue CLI.

#### Routing in CSR

A CSR app is a single page application: A single html file and routing is provided via the browser’s history API, though which javascript determines what is on the screen based on the current url. 

#### **Data-fetching in CSR**

Data fetching in client-side React happens after the initial render. 

Usually via the fetch API or a library such as Axios. 

*In a class-based component:* 

That would be in the “componentDidMount” class method, which runs right after the initial render. 

![React Life-cycle](/assets/6112640384892928.png "React Life-cycle . Source: https://www.educative.io/edpresso/what-is-a-component-lifecycle-in-react")

*In a function-based component:* 

That would be in the “useEffect” hook, which runs right after the initial render and subsequent renders if one or more of its dependencies change. 

#### **Pros of CSR**

1. Fast and interactive feel.
2. Quick page transitions (Because it’s an SPA) and so you don't have to wait for the server response for the page.
3. Decreased load on the server.
4. Fast TTFB because the server isn't really doing much.

#### **Cons of CSR**

1. Large Javascript bundle (Framework code + app code + dependencies code), which means:

* Bad user experience for folks with slow internet connections.
* Large contentful paint (a google metric in seconds) is usually high. So for a while, the screen might have nothing on it. 

2. Data-fetching takes place after the initial render, which means: 

* Bad SEO : bots might sift through an empty html file. 

Bots might not even run Javascript.

3. Breaks when Javascript is disabled.

#### **Optimization steps in CSR:**

1. Code-splitting : the process splitting javascript bundle into chunks and importing them on demand. 

Lazy-loading can be at the route level or at the component level. 

This can be done natively through the use of `type="module"` attribute to the script tag. And inside that file, we can now use *import expression* instead of *import statements.* 

Unlike import statements, import expressions can be used anywhere within the file and don't need to be at the top (before variable and function declarations). 

#### **CSR Recommendations**

1. CSR is a no-go for applications with high SEO requirements. 
2. CSR is great for applications that require high interactivity , but don’t care about initial page load time, such as: 

* Dashboards 
* E-learning platforms. 

These are usually behind some type of auth wall.

### **2. Server-side rendering:** 

The process of rendering a page on the server. 

Data fetching happens at request time.

#### **SSR Flow:**

1. Browser requests a page from the server. 
2. Server responds with an HTML document. (On every page request).
3. Browser renders HTML . (Page is viewable, not interactive yet - First paint)
4. Browsers downloads , parses and executes JS (React). (Page is now interactive)

#### **Pros of SSR**

1. First contentful paint is low, as you don't wait for the JS to be parsed and executed to see content on the page. 
2. Data pre-fetching: Data is pre-fetched (its API is called at build time, not at run time) , so at the initial render, your html will have all the content.  
3. Since Data Fetching occurs on each request;  the content is fresh and not stale.

#### **Cons of SSR**

1.  TTFB(Time To First Byte) AKA server response time , is slower than CSR, because your server will have to spend the time to create the HTML for your page instead of just sending out a relatively empty response. (Data fetching happens at each page request)
2. SSR throughput of your server is significantly less than CSR throughput. For react in particular, the throughput impact is extremely large. ReactDOMServer.renderToString is a synchronous CPU bound call, which holds the event loop, which means the server will not be able to process any other request till ReactDOMServer.renderToString completes.

### **3. Static site generation:** 

The process of generating static html pages on the server. 

Data fetching happens at build time.

#### **SSG Flow:**

1. Browser requests a page from the server. 
2. Server responds with an HTML document. (On the first page request).
3. Browser renders HTML . (Page is viewable, not interactive yet - First paint)
4. Browsers downloads , parses and executes JS (React). (Page is now interactive)
5. Next site visit: Page is served from cache or CDN. 

#### **Pros of SSG**

1. Fast Page loads as data fetching happens once at build time and the page is cached.
2. Less load on the server as the page is built once. 

#### **Cons of SSG**

1. Content might become stale. 
2. Might need a caching layer or a CDN,

#### **Usage of SSG in NextJS**

**If your page depends on external data:** 

By exporting `getStaticProps` and `getStaticPaths`  . 

**If your page does not depend on external data:** 

By exporting a functional component without blocking data-fetching requirements (without exporting getServerSideProps).

### **4. Incremental Static re-generation:** 

Combines both static site generation (page is built once on the server) and server-side rendering (page is built at each request) by serving a cached version of the static site to visitors who enter the site with the given "revalidate" time window and rebuilding the web-page after the time window has passed. 

Example: 

```jsx
export async function getStaticProps() {
  const res = await fetch('/api/products')
  const products = await res.json()

  return {
    props: {
      products,
    },
    revalidate: 60, // In seconds
  }
}
```

#### Helpful Links

1. https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering
2. https://www.youtube.com/watch?v=8_RzRQXSHcg