---
layout: post
title: The Dangers of Getting Sassy
author: Alex
date: 2016-08-26
published: yes
---

# _The Dangers of Getting SASSy_ #

If you've been in the Front End Web Development game for long, you've probably chosen a favorite language from the Big Three (HTML, CSS, and JavaScript). It's been my experience that HTML doesn't usually generate that much excitement among developers, unless they're the types of folks to really dig berating others about [semantic markup](http://html5doctor.com/lets-talk-about-semantics/). The rest are usually divided into the CSS or the JavaScript camp. The designers, color-theorists, and beautifiers of the user interface are probably fans of delving into CSS, where the function-over-form and user experience types probably tend towards JavaScript. Obviously, both languages have their place, and are an absolute necessity for any Web Developer, but preferences usually surface pretty quickly. Me... I tend towards the JavaScript camp. While I can appreciate a visually beautiful design, I spend most of my time looking at code. And given that, the most beautiful part of any site (to me) is the elegant one-liner that describes a key feature. These are the haikus of the development world: the perfect `.map`, the single well-tempered and extensible `Object`, or the painless build process.

CSS, by default, has none of these things. Given the global scope and cascading nature of CSS rules, the solution to most CSS problems tends to be more CSS. This means that, for most stylesheets, there's always lots of repetition, lots of class chaining (digging deeper and deeper into a specificity sinkhole), and very few ways of creating extensible configurations or shorthands for new rules. The user, of course, sees none of this. But such tedium will eventually get under the skin of any aspiring CSS guru.

Enter [SASS](http://sass-lang.com/). SASS is a CSS __pre-processor__: a way of using basic functions, loops, variables, and some special syntax to programatically generate CSS without needing to write out every piece of a repetitive stylesheet. The stylesheets are compiled into valid CSS before being served to the user, so nothing will really change for end users. But the development team will (probably) be much happier. As an example, consider the following CSS for a basic grid system:

{% highlight css %}
.row-1 > .column{
    width: 100%;
}

.row-2 > .column{
    width: 50%;
}

.row-3 > .column{
    width: 30%;
}
{% endhighlight %}

Pretty standard stuff. This doesn't look to scary at the moment, but it should irk you that there's no native way of generating these CSS rules in an extensible way. As it stands, if you'd like to add more rows, you add more column entries by hand. If you decide that you'd like a base-width of something other than 100%, you'd have to go through each rule again. Compare this to the SASS equivalent:
