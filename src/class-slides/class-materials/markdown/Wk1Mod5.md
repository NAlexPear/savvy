## Resets, Frameworks, and Student Showcase
### `reset.css`, `minimal.css`, and the GitHub workflow

Okay, so we've learned that doing layout with CSS by hand is confusing, inconsistent between different browsers, resolutions and devices and just generally a great, big pain in the button. Luckily, CSS frameworks exist!

You should consider using a framework or library to do the following:

+ standardize CSS styles across browsers
+ import some pre-built components (like buttons or forms)
+ make your page look nice

Many frameworks do all three. For the purposes of today's mini-Hack-A-Thon, though, we're going to focus on the first two points.

---

### `reset.css`

Remember the default styles applied to common elements like `<h1>` and `<ul>`? Well, those styles are sometimes different across browsers, and they're usually filled to the brim with quirky (or bug-causing) behavior. We want to have control over every aspect of our style across every browser. To do that, we need to normalize or reset styles to make sure that every browser treats our elements the same. We can also use a reset to modernize some out-dated features (like `box-sizing : border-box;`).

A very basic reset that we'll use today will be [`reset.css`](http://meyerweb.com/eric/tools/css/reset/reset.css). This boilerplate can be tweaked for use in all of your projects. Just make sure that it's the first CSS file in your document!

---

### `minimal.css` and CSS de-bugging

While reset is useful, it doesn't give us much of a **framework**. Frameworks can act as the 'scaffolding' of a project, making our builds faster and our styles consistent. A lightweight framework that we'll use for today's project will be [`minimal.css`](http://minimalcss.com/). This framework will help style our page and create a grid for us to work with! Let's explore this framework with the developer console in Chrome:

1. Open the [Minimal CSS demo page](http://minimalcss.com/).
2. Open the Chrome Developer Tools and inspect various `.row` and `.col-n` elements. Where did they get those styles?

[dev tools](http://reactorprep.herokuapp.com/assets/images/minimal_css.png)

3. In the graphic above, a `div` with `class="col-6"` has been selected from the example site. Here's what we've learned about this element:

  + It has no styles applied directly to it by an HTML style attribute
  + On line 37 of the linked stylesheet `minimal.css` there is a rule that applies only to the class `col-6` that sets its width.
  + On line 28 of `minimal.css` it picks up more styles from a rule that is applied to multiple column classes.
  + On line 7 of `minimal.cs`s it gets its` margin` and `padding` from a rule applied to all elements on the page.
  + It is a `div`, so the browser displays it as a block element.

---

### The GitHub workflow

It's almost time to use what we've learned above to create a Student Showcase for you and your classmates. First, though, we need to learn about how to work on shared codebases through `git` and GitHub.
