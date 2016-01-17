## Larger Web Documents
### `div`, CSS selectors, stylesheets, and specificity

Now that we have our styling in order, let's think about how to build larger web pages in an orderly way...
```html
<div id="greeting" class="section">
  <h1>Hello!</h1>
  <p>This content is all related!</p>
  <p>Nice that we can group it using a "div" tag!</p>
</div>
```
The `<div>` element is a generic block element which defines a section of your page. Unlike block elements with specific meaning and implied default styling (like `<h1>` and `<p>` tags), `<div>` elements don't change the appearance of the page until styles are applied to them.

```html
<p>Sometimes, <span class="highlight">all we really want</span> is
to be able to refer to certain sections of our page, but we want to completely
<span class="highlight">control their styling</span>, and not get the
"b" or "i" tags involved</p>
```
The `<span>` element is a generic inline element which defines a section of your page. Unlike inline elements with specific meaning and implied default styling (like `<b>` and `<i>` tags), `<span>` elements don't change the appearance of the page until styles are applied to them.

---

### Portfolio Project 1

L*et's add another page to our growing Portfolio Project! This page will be for your future personal blog.

1. Repeat the same steps we went through to build the `projects` and `media` pages. We'll call the blog page `blog` (makes sense, right?). Once you've finished creating the blog page, your site's directory structure should look this:

   ```
    / (root)
    |
    |-/blog
    |   |-index.html
    |
    |-/media
    |   |-index.html
    |
    |-/projects
    |   |-index.html
    |
    |-index.html
    |-firebase.json (firebase configuration file)
    |-.git (hidden directory)
    |-.gitignore (hidden file)
    ```
2. Inside of your new `blog/index.html` file, create a short blog post welcoming readers to your blog (no more than 5 sentences of content). More important than the content will be the *page structure* and *layout*. Make sure to include the following elements in your post as separate `<div>`s:
    1. A header area (with your blog title/subtitle, and maybe a splash photo)
    2. A nav bar area (with links to other pages in your Portfolio site)
    3. A content area for the text content of your post.
    4. A footer with some contact info and copyright information.
3. Inside the content area, make sure that you've used at least one of each of the following:
    1. A heading (e.g. `<h2>`)
    2. A paragraph tag (`<p>`)
4. In a `<style>` tag in the head of the document, add some style for default HTML elements (`<body>`, `<div>`, `<h1>`, `<h2>`, `<p>`, and whatever else you've included in your HTML up to this point).
5. Give each `<div>` section its own unique `id` (e.g. `navigation`, `header`, etc.), and give each `id` some unique styles in the `<style>` tag. Maybe different `width`s or `background-color`s?
6. Add some `<span>` tags to some of the important text in your post, and give those `<span>` elements a `class` of `highlight`. Then add some special styles to those elements to make them stand out a bit from the rest of your post.
7. Stage, commit, push, and deploy your updated site!

---

## The CSS Box Model

Every HTML element has a box around it, even if you cannot see it. We can show a visible border around every HTML element on the page using the CSS border property and the "match all" selector:

```css
* {
  border: 1px solid red;
}
```
Try putting a border around each "boxed" element while you try out a few of the following properties:

1. The CSS padding property defines the extra space inside the border:

    ```css
    div {
        padding: 10px;
    }
    ```
    You can also assign different values to the `padding` on each side of an element with specific properties (e.g. `padding-left`, `padding-right`, etc.) or through the shorthand `padding` property. As an example, the following three `padding` constructs compile to the same appearance:

    ```css
    div {
        padding-top: 5px;
        padding-right: 10px;
        padding-bottom: 5px;
        padding-left: 10px;
    }
    ```
    ```css
    div {
        padding: 5px 10px 5px 10px;
    }
    ```
    ```css
    div {
        padding: 5px 10px;
    }
    ```
2. The CSS margin property defines the extra space outside the border:

    ```css
    div {
        margin: 30px;
    }
    ```
    The same shorthand rules that worked for `padding` also work for `margin`.
3. We can also manually set the width and height of the element itself. When you do this, you'll want to set the `box-sizing` for obscure reasons:

    ```css
    div {
        box-sizing: border-box;
        width: 300px;
        height: 200px;
    }
    ```
**What's the difference?** Check it out in the Elements panel of Chrome Dev Tools [CMD + OPTION + I] to inspect the spacing around the element.

---

### Portfolio Project 2

Now let's add some structure and spacing in our blog post! Try out the following:

1. Create a class called `container`, and apply it to every top-level `<div>`.
2. Give `container` the following CSS properties:

    ```css
    .container {
        max-width: 960px;
        margin: 0 auto;
    }
    ```
    What does this do? How does it work? And why would we want to do this?
3. If you haven't already, define an `html` selector in your `<style>` tag and set `box-sizing` to `border-box`, like so:

    ```css
    html {
        box-sizing: border-box;
    }
    ```
4. For the rest of your already-defined elements, add some `padding` and `margin` values to give everything some space.
5. Add some borders using the `border` property, like we did in the first exercise.
6. Once you like the look of the page, stage, commit, push, and deploy your well-spaced site!

---

## Complex CSS selectors

As our documents grow, we'll need to leverage more complex CSS selection syntax. Here are a few important selectors to cherish and to keep:

1. *The Universal Selector*

    ```css
    * {
        //css that applies to every element
    }
    ```
2. *The Class Selector*

    ```css
    div.container {
        //css that only applies to divs with a class of 'container'
    }
    ```
3. *The Child Selector*

    ```css
    div>p {
        //css that only applies to direct child elements (no grand-children) of an element
        //in this case, all of the child paragraph elements of divs across the page
    }
    ```
4. *The Decendant Selector*

    ```css
    div p {
        //css that applies to all descendants of an element of a certain type
        //in this case, all paragraph elements of divs across the page (even if they're nested in
        //other elements, like spans or lists)
    }
    ```

These rules might seem like overkill right now, but they're extremely useful for when you have large stylesheets of CSS rules that apply across multiple pages. Speaking of which...

---

## Stylesheets

While the `<style>` tag works for individual pages, it doesn't work well for scaling styles. Instead, it's better for each page to reference a single **stylesheet**, containing all of the CSS rules for the page. By keeping all of your CSS rules in an external document, you'll find that it's easier to make changes across a website, maintain separate roles on a dev team, and save yourself from early-onset carpal tunnel because of re-typing.

Let's create a stylesheet for our Portfolio Project that applies to all of our pages!

1. First, we need to create a separate file with the `.css` file extension. Let's go ahead and call it `style.css`. To keep things organized, let's create that file inside its own `css` directory (since we might want to add multiple stylesheets to the same document). HINT:

    ```shell
    $ mkdir css
    $ touch style.css
    ```
2. Next, we need to `link` that stylesheet to each of our pages. In the `<head>` of each page, add the following:

    ```html
    <!-- for your landing page -->
    <link type="text/css" rel="stylesheet" href="css/style.css"/>

    <!-- for all other pages -->
    <link type="text/css" rel="stylesheet" href="../css/style.css"/>
    ```
    *Do you know why we need different `href` values for our landing page and our media, projects, and blog pages?
3. At this point, there shouldn't be any difference in the way your pages look or behave, since there's nothing in `style.css`. For now, you should stage, commit, push, and deploy your page to make sure that everything looks the same in the browser.
4. Now we need to refactor all of the styles across pages. Copy all of the styles from each page into `style.css` page-by-page, starting with your blog page. Make sure you get each page looking like you'd like it. Remember that all CSS properties from here on out are shared between pages! If you need to make changes to your HTML to better organize your styles, that's OK, too.
5. Once every page is looking good, stage, commit, push, and deploy your changes. And congrats on your pretty new Portfolio site!
