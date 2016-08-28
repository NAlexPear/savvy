---
layout: post
title: The Dangers of Getting Sassy
author: Alex
date: 2016-08-26
published: yes
---

# _The Dangers of Getting SASSy_ #

<h3 class="subheading">Or, with great power comes great responsibility</h3>

---

_This post is part of Savvy Tips, a series of technical posts about how to improve your skills as a developer, written by our very own Alex Pearson, Head Instructor of the St. Louis cohort._

---

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

{% highlight scss %}
@for $i from 1 through 10{
    $base-width: 100%;

    .row-#{$i} {
        & > .column{
            width: $base-width / $i;
        }
    }
}
{% endhighlight %}

For anybody on Team JavaScript, this `for`-loop should be cause for a sigh of relief. Not only should this setup look familiar for anyone with the basics of a modern programming language under their belt, but it should eliminate what could be _hundreds_ of lines of CSS (depending on the number of columns needed). If you've never seen SASS before, here's a quick breakdown of what's happening:

1. in line 1, `@for` starts the loop by creating the placeholder variable `$i` and setting the range of numbers (in this case, 1 through 10).
2. in line 2, the baseline width value is saved to a variable (which standard CSS doesn't have yet).
3. in line 4, the `.row-` classes are set up using string interpolation (much like the the `${i}` string literal syntax from ES6).
4. in line 5, we use SASS's nesting capabilities to better illustrate the relationship between the `.row-` classes and their `.column` direct children. We could have simply written the loop over `.row-#{$i} > .column{}` without nesting, but this way is more extensible (in case we wanted to apply styles to other row children or to the row element itself).

This is _huge_ for developers, and a big improvement over the standard CSS workflow. It's hard to imagine professional CSS development happening without SASS these days (even for those firmly planted in Team CSS). But this is a post about the dangers of abusing SASS, right? So what's so dangerous about CSS with superpowers?

The potential problems stem from the fact that browsers don't interpret SASS: they interpret CSS. So every SASS operation spits out a CSS document that has the potential to be, in true CSS fashion, _devastatingly large_. SASS has great power, but also requires great responsibility. Here's an example from my own troubles with abusing SASS:

---

__The End Goal__: A responsive grid system.

While grid systems like the one we saw above are nice, they're not really suitable for responsive web development. To lock everything in to a set-width-percentage grid isn't a great option once those screens get really small. Nor is it a great solution for setting up elements of different widths within a single row. The solution: adding breakpoint prefixes and width suffixes to our `.column` selectors. So `.column` becomes `.small-column-1/2 .medium-column-1/3 .large-column-1/4` for a column that responds to small, medium, and large breakpoints by taking up 1/2, 1/3, or 1/4 of available row space (respectively).

We also want to make sure that we don't restrict users to `1/X` divisors. Let's see if we can create a grid system that lets users choose any fractional width from 1/1 up to 10/10 (so 2/5 and 3/8 and 3/4 are allowed, but 1/12 wouldn't be). This is a pretty standard API for grid systems, so we'll want to include it in ours.

__Attempt 1__:

As you might imagine, we need to use [CSS media queries](https://css-tricks.com/logic-in-media-queries/) to check the width of the viewport and respond accordingly. This is already supported as a part of the CSS spec, but is given superpowers with SASS's ability to nest styles. So let's see if we can add to our code above to add media query and prefix support.

{% highlight scss %}
$breakpoints: ( xs:240px, small:340px, medium:500px, large:720px, xl:960px );
$base-width: 100%;

@for $i from 1 through 10{
    @each $prefix, $breakpoint in $breakpoints{
        .row {
            @for $j from 1 through 10{
                & > [class="#{$prefix}-column-#{$j}/#{$i}"]{
                    @media (max-width:$breakpoint){
                        width: $base-width * ( $j / $i );
                    }
                }
            }
        }
    }
}
{% endhighlight %}

So things have gotten a little bit more complicated; we've introduced a SASS map (`$breakpoints`), used `@each` to iterate over the map, set separate `@media` queries for each `$prefix`, and set the width according to `$base-width` multiplied by some fraction `#{$j}/#{$i}`. We've also used the `[class=""]` selector to allow us a bit more flexibility in generating class names. This solution is a little loopy, but it works for what we have with SASS. But "it works" is not the greatest standard by which to measure the quality of our code, and this is great example of why. If you run the code above, you'll notice two problems. The first is that the final output islarger than it needs to be because of the media queries. Check out a piece of the output CSS:

{% highlight css %}
.row > [class="xs-column-1/1"] {
    @media (max-width:240px){
        width: 100%;
    }
}

.row > [class="small-column-1/1"]{
    @media (max-width:340px){
        width:100%;
    }
}

.row > [class="medium-column-1/1"]{
    @media (max-width:500px){
        width: 100%;
    }
}

.row > [class="large-column-1/1"]{
    @media (max-width:720px){
        width: 100%;
    }
}

.row > [class="xl-column-1/1"]{
    @media (max-width:960px){
        width: 100%;
    }
}
{% endhighlight %}

The first thing that should jump out at you when you see this output (besides thinking about how long it would take to type this up by hand for a standard 12-column grid system) is that this is there is going to be a lot of unnecessary repetition in those `@media` queries. If we wrote our grid system by hand using CSS, we would probably handle all of the styles for a single `@media` query at once, like so:

{% highlight css %}
@media (max-width: 240px){
    .row > [class="xs-column-1/1"] {
        width: 100%;
    }

    .row > [class="xs-column-1/2"] {
        width: 50%;
    }

    // etc etc
}
{% endhighlight %}


__Attempt 2__:
This can shave quite a few kB from our bloated CSS output by grouping each breakpoint together.We could try to get this proper grouping by re-ordering our nested media queries, like so:

{% highlight scss %}
$breakpoints: ( xs:240px, small:340px, medium:500px, large:720px, xl:960px );
$base-width: 100%;

@each $prefix, $breakpoint in $breakpoints{
    @media (max-width:$breakpoint){
        @for $i from 1 through 10{
            .row {
                @for $j from 1 through 10{
                    & > [class="#{$prefix}-column-#{$j}/#{$i}"]{
                        width: $base-width * ( $j / $i );
                    }
                }
            }
        }
    }
}
{% endhighlight %}

So now we have a working grid, and we've saved about 10% of the file size by properly grouping our media queries. But you'll also notice that we've created about _twice as many column selectors as we need_. In order to prune out the "super-wide" selectors (e.g. `-column-4/1` with 400% `width`), we need to add an `@if` condition to our inner loop.

__Attempt 3__:

{% highlight scss %}
$breakpoints: ( xs:240px, small:340px, medium:500px, large:720px, xl:960px );
$base-width: 100%;

@each $prefix, $breakpoint in $breakpoints{
    @media (max-width:$breakpoint){
        @for $i from 1 through 10{
            .row {
                @for $j from 1 through $i{
                    & > [class="#{$prefix}-column-#{$j}/#{$i}"]{
                        width: $base-width * ( $j / $i );
                    }
                }
            }
        }
    }
}
{% endhighlight %}

Setting the upper limit of our inner loop to `$i` restricts values of `$j` to less than or equal to `$i`, so we don't have any more super-wide selectors any more! Hopefully you're starting to see how easy it is to fall into the SASS-generated CSS bloat trap. With two simple refactors, we've reduced our initial file size by over __60%__. But wait... there's more!

As you can imagine, each `@media` query grouping is about 100 lines of CSS long (10x10 suffix options, pruned by 50% by only accepting suffixes where the numerator is less than or equal to the denominator, with roughly 2 lines of output per ruleset in the standard SASS output configuration). But most of these rules will share the same width values as another value (e.g. 1/2, 2/4, 3/6, 4/8, and 5/10 are all `width: 50%`). So we can combine these into a single statement with a comma-separated list of selectors for another CSS output reduction of about __60%__. Take a look:

__Attempt 4__:

{% highlight scss %}
$breakpoints: ( xs:240px, small:340px, medium:500px, large:720px, xl:960px );
$base-width: 100%;
$columns: 10;

$suffix-map: ();

@for $i from 1 through $columns{
    @for $j from 1 through $i{
        $width: $j / $i;
        $class-list: map-get( $suffix-map, $width );
        $class-list: if( $class-list == null, (), $class-list );
        $class-list: join( $class-list, ( "#{$j}/#{$i}" ) );

        $suffix-map: map-merge( $suffix-map, ( $width: $class-list ) );
    }
}

@each $prefix, $breakpoint in $breakpoints{
    @media (max-width:$breakpoint){
        @each $width, $suffix-list in $suffix-map{
            $class-list: ();

            @each $suffix in $suffix-list{
                $class-list: append( $class-list, unquote( '[class="#{$prefix}-column-#{$suffix}"]' ), comma );
            }

            .row{
                & > #{$class-list}{
                    width: $base-width * $width;
                }
            }
        }
    }
}
{% endhighlight %}

A quick breakdown of what we've done here, and why:

1. On line 5, we've set up an empty list (and future map) called `$suffix-map`. This will eventually associate lists of class suffixes (e.g. `1/1`, `2/3`, etc.) with their width percentages. If we were to use `@debug` to log `$suffix-map` to the console after line 17, we would see something like this:
{% highlight scss %}
$suffix-map: (
    "100%": ( "1/1", "2/2", "3/3", "4/4", "5/5", "6/6", "..etc" ),
    "50%": ( "1/2", "2/4", "3/6", "4/8", "5/10" ),
    "33%": ( "1/3", "2/6", "3/9" ),
    "25%": ( "1/4", "2/8" )
    // etc etc
)
{% endhighlight %}

2. The above output is generated with our nested `@for` loops. We had previously run these loops inside the `@each` breakpoint directive, but we've now extracted these to their own section to help make the next directive clearer.

3. On line 10, we try to access a list of suffixes in `$suffix-map` by a width label. If the `map-get` function (which is built into SASS) returns `null`, we know that the label doesn't exist yet. The next two lines decide whether to create a new key or append a suffix to a list of pre-existing suffixes accessible by their shared width. And, finally, the generated list of suffixes is merged into `$suffix-map` at the proper percent identifier. This may look like overkill, but imagine doing this by hand for a multi-dimensional 24-column grid system. Or, worse, imagine doing this for a 24-column grid system, then being told that the designers would prefer a 16-column grid system. Best to create a method of generating that proper list automatically, regardless of the number of columns needed!

4. Now we can iterate over our map of suffixes within each breakpoint's `@media` query. Line 23 turns an individual width's suffix list into full class selectors like we've seen before. The standard SASS function `append()` uses a `comma` argument to create the comma-separated list that we'll need to use these lists of classes in accordance with the CSS spec.

5. And, finally, we can use the exact same nested child selector syntax that we've used before, and our list of comma-separated child classes is automatically expanded into the proper list of full selectors. Try it out with your own project, and compare the final output with our original attempts!

---

While this might look intimidating (and requires a bit more up-front thought than slapping additional CSS rules onto a stylesheet), it's an important part of using SASS responsibly! If we had stuck with our working-but-bloated example from attempt 1, we would have had __90% more CSS output__ for users to download. And in more complex grid systems, that extra CSS can become a huge burden for users, especially on mobile platforms. I may or may not have once added almost a full MB of additional render-blocking data for users to download by getting SASS-y without thinking about the cost of the final CSS output. This is not to say that you shouldn't use SASS. A project like this one would be almost impossible to maintain by hand with native CSS! But always be aware of size and beauty of the final output, rather than focusing too much on the beauty of SASS itself.

Good luck, and post any questions you have to the comments!
