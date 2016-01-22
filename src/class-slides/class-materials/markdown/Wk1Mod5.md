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

![dev tools](http://reactorprep.herokuapp.com/assets/images/minimal_css.png)

3. In the graphic above, a `div` with `class="col-6"` has been selected from the example site. Here's what we've learned about this element:

  + It has no styles applied directly to it by an HTML style attribute
  + On line 37 of the linked stylesheet `minimal.css` there is a rule that applies only to the class `col-6` that sets its width.
  + On line 28 of `minimal.css` it picks up more styles from a rule that is applied to multiple column classes.
  + On line 7 of `minimal.cs`s it gets its` margin` and `padding` from a rule applied to all elements on the page.
  + It is a `div`, so the browser displays it as a block element.

---

### The GitHub workflow

It's almost time to use what we've learned above to create a Student Showcase for you and your classmates. First, though, we need to learn about how to work on shared codebases through `git` and GitHub. While this can be pretty complicated, you'll find that it gives us a lot of power as a team!

![the GitHub workflow](https://camo.githubusercontent.com/0951c54f2f51742fb106fa9146082f41af4d894a/68747470733a2f2f677561726469616e70726f6a6563742e696e666f2f77702d636f6e74656e742f75706c6f6164732f323031332f31312f696e746567726174696f6e5f6d616e616765725f776f726b666c6f772d333030783132312e706e67)

For all of our group projects at Savvy Coders, we'll be using the 'Blessed Repository' workflow, simplified a bit for our needs. The important thing to remember with this workflow is that there will be LOTS of copies of the same codebase with little variations between each copy. The copies shown in the chart above are:

1. **The Blessed Repository**: this is the "product"... the fully-merged and up-to-date codebase that will be managed by your instructor. Each student will have the ability to copy (or `fetch`) data from this repository, but won't be able to directly change (or `push`) anything on the Blessed Repository. *This repository is hosted on GitHub*
2. **Integration Manager's Personal Copy**: "integration manager" is a fancy term for the person in charge of merging everyone's changes together. Developers don't have direct access of any kind to the IM's personal copy of the Blessed Repository. The IM will be your instructor/team leader for the night!
3. **Developer's Public Copy**: each of you will have a copy (or 'fork') of the project hosted on GitHub. All changes made to Blessed Repository will have to be submitted through your public project repo (more on that later).
4. **Developer's Private Copy**: GitHub will only store your code. You'll need a local copy to edit files, and you'll sync that local copy with your public repository and the Blessed Repository.

The goal will be to keep your Public and Private copies as close to the Blessed Repository as possible at all times without causing merge conflicts or overwriting your work!

---

## Student Showcase Project Part 1:
### Setting up project repos

Follow these steps to get a copy of the boilerplate code set up on your GitHub profile and your local machine.

1. 
