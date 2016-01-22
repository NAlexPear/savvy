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

In this case, we'll need to add the following rule: 

```css
html {
    box-sizing: border-box;
}
```

---


