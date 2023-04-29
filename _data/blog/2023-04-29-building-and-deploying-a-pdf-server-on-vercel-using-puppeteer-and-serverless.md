---
template: BlogPost
path: /building-and-deploying-a-pdf-server-on-vercel-using-puppeteer-and-serverless
date: 2023-04-29T20:29:46.741Z
title: "Building and deploying a pdf server on vercel using puppeteer and serverless "
metaDescription: >
  At surface level, this seems like a simple issue task. But there’s actually a
  lot more to it than meets the eye.
---
At surface level, this seems like a simple issue task. But there’s actually a lot more to it than meets the eye.

## Keep in mind

Generating a pdf file on the server and returning it to the client will always always take time. Any hosting service you choose, whether AWS, heruko , vercel etc. will limit your execution to a time frame.

## Why not generate the PDF on the client via `window.print()` ?

Client side pdf generation is good, but it. has a multitude of issues:

1. It assumes print by default: You may want a different set-up for your pdf than your print view.
2. It relies on the client’s browser, device etc. Which are too many to account for.
3. The client might have dark mode turned on. By default, the browser takes the theme of the OS. This is actually.

## **Sumamry:**

1. Install the following:

   ```jsx
   chrome-aws-lambda@6
   cors@2.8.5
   express@4.18.1
   puppeteer-core@6
   ```
2. Implement pdf generation as you require.
3. Upgrade your vercel membership to premium.

## **The challenge:**

converting a webpage (or part thereof) to html is hefty working the server resources.

So there are limitations which you will likely run into when attempting to do so with puppeteer:

1. Vercel imposes a **50mb** serverless function size. This limit is also imposed upon vercel themselves by aws.
2. The path to the chromium executable.
3. The serverless function timeout: Vercel imposes a 5 seconds timeout to serverless functions on the free tier. This isn't enough and this is exactly why you will probably need to upgrade to the membership.

## Server

The API interface can either be a basic express server, or a nextjs serverless function.

In both cases we will expose one GET route.

```jsx
app.get("/api", async (req, res) => {})
```

Within this route, we will try and launch a browser instance as a background process :

```jsx
chrome = require("chrome-aws-lambda");
puppeteer = require("puppeteer-core");

let browser = await puppeteer.launch(options); 
```

Options is your configuration object, which will customize the browser instance:

```jsx
options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security", '--font-render-hinting=none'],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
   };
```

Once the browser instance has been created, we’ll navigate to the desired page

```jsx
const page = await browser.newPage()

await page.goto(url,
      {
        waitUntil: 'networkidle0',
        timeout: 0
     })
```

``

`networkidle0` is the most reliable indicator of ready navigation since it waits 500ms after the last network request.

This ensure your page won’t have any missing content prior to making any further operations.

Once that’s done, we’re going to create a pdf of the webpage

```jsx
const pdfBuffer = await page.pdf(pdf_settings);
```

Your PDF configuration object can be any configuration theme you desire. In my case it looks something like this:

```jsx
const pdf_settings = {
  format: "a4",
  printBackground: true,
  margin: {
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  },
  scale: 1,
};
```

The `page.pdf` method returns a pdf buffer data which look something like this

```jsx
%PDF-1.3
%����
8 0 obj
<<
/Type /ExtGState
/ca 1
>>
endobj
11 0 obj
<<
/Type /ExtGState
/ca 0.4
>>
Ammar Halees 
```

At this point, you have the choice on how you send this data back to your client.

This is what i do:

```jsx
res.setHeader('access-control-allow-origin', OriginURL);
res.setHeader('access-control-request-method', 'GET');
res.setHeader('Content-Type', 'application/pdf');
res.setHeader('Content-Disposition', `attachment; filename=${title}.pdf`);
```

Where `OriginURL` is your domain. And `title` will be the default suggested document name by your browser.

If you want more robust CORS handling, you can create middlewear using the `cors` package we’ve installed.

Last but not least, we start our server:





```javascript
app.listen(process.env.PORT || 3001, () => {
  console.log("Server started");
});
```





## Client

On the client, we are receiving a “file” . To download that file, we simply use the “download” attribute with the anchor tag:

```jsx
<a href="/api/pdf" download>
```

By not providing a name and extension, the will be inferred by the browser.

We can also specify the default name and extension for the downloaded file:

```jsx
<a href="/api/pdf" download="filename.png">
```

This is one approach. Another approach if you want more nitty gritty control on the network request and its timings is to do create the anchor tag on the fly, use its download functionality and then then destroy it.

As such:

```jsx
const handleDownload = async () => {

        setisDownloadLoading(true);

        const res = await fetch(
          `/api/pdf`,
          {
            method: "GET",
            headers: {
              Accept: "application/pdf",
            },
          }
        );

        // if (!res) throw new Error("no data");

        const blobcontent = await res.arrayBuffer();
        // if (!blobcontent) throw new Error("no data");

        const downloadFile = () => {
          try {
            const link = document.createElement("a");
            // create a blobURI pointing to our Blob
            const data = Buffer.from(blobcontent).toString("base64");
            // if (!data) throw new Error("no data");
            const uri = "data:application/pdf;base64," + data;
            link.href = uri;
            link.download = `${resumeObject?.name}.pdf`;
            // some browser needs the anchor to be in the doc
            document.body.append(link);
            link.click();
            link.remove();
            setisDownloadLoading(false);

            // in case the Blob uses a lot of memory
            setTimeout(() => URL.revokeObjectURL(link.href), 7000);
          } catch (e) {
            console.log(e);
            setisDownloadLoading(false);
            window.print();
          }
        };

        downloadFile();
     
    };
```

In the above example, we are using the arrayBuffer method of the fetch response object to extract the pdf buffer data.

```jsx
        const blobcontent = await res.arrayBuffer();
```

This buffer data is actually raw and cannot be displayed as is. It’s what’s called a “blob”.

Blob data on its own cannot be interpretted by the anchor tag’s href attribute.

So what we do is that we need to convert this Blob data into something called a “**Data URL”.**

Data URLs are interpreted by the href attribute. But they can be verbose and massive.

A Data URI has the following format

```jsx
data:[<mediatype>][;base64],<data>
```

Where data in our case will be base64 encoded represenatition of the array buffer data.

We can achieve 64-bit encoding of buffer data by using the `form()` method of the Buffer object, and then sequentially using the `toString` method and passing `“base64”` to it.

```jsx
const data = Buffer.from(blobcontent).toString("base64");
```

``

`<mediatype>` in our case will be application/pdf .

```jsx
const uri = "data:application/pdf;base64," + data;
```

The rest of the code will be appending and revoking the anchor item from the DOM.

That’s it.