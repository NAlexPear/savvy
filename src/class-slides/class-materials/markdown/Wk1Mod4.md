## Forms and Positioning
### HTML `form` elements and intermediate CSS

HTML forms are used to collect user input. The `<form>` element defines an HTML form. Form elements are different types of `input` elements, checkboxes, radio buttons, submit buttons, and more.

---

## Portfolio Project 1

Let's create a new contact page for your website!

1. Use the same method we've used for our `media`, `projects`, and `blog` pages to create a `contact` page. When you're finished, your site's directory structure should look like this:

  ```
  / (root)
  |
  |-blog/
  |   |-index.html
  |
  |-contact/
  |   |-index.html
  |
  |-css/
  |   |-style.css
  |
  |-media/
  |   |-index.html
  |
  |-projects/
  |   |-index.html
  |
  |-index.html
  |-firebase.json (firebase configuration file)
  |-.git (hidden directory)
  |-.gitignore (hidden file)
  ```
2. Set up your new contact page to use the same stylesheet as the rest of your site. HINT:

  ```html
  <link type="text/css" rel="stylesheet" href="../css/style.css"/>
  ```
3. Now set up the rest of your page's structure, including a navigation bar, `.container` area, and footer (like the other pages in your portfolio site).

---

## Portfolio Project 2

The heart of your contact page will almost certainly be a form. Let's try out a very basic form to get started:

1. Type out the following code in the content area of your contact page:

  ```html
  <form>
    <input type="text">
    <input type="password">
    <input type="email">
    <input type="submit">
  </form>
  ```
2. Try working with each element to see what it does in a browser preview.
3. Once everything is up-and-running, stage, commit, push, and deploy your website!
4. Now let's try a more complicated example. Replace the code from above with the following snippet. Try to re-type instead of copy->pasting!

  ```html
    <!--
    The action attribute defines where on the server the form data should be sent
    The method attribute specifies the HTTP method (GET or POST)
  -->

  <form action="form-responses/new" method="POST">

    <input type="text" name="firstname" value="First Name" size="100" autofocus>
    <input type="text" name="lastname" value="Last Name" size="100">
    <input type="email" name="userEmail" placeholder="your.email@example.com">

    <label>What's this message about?
      <input type="radio" name="subject" value="professional" checked><span>I'd like to hire you!</span>
      <input type="radio" name="subject" value="personal" checked><span>Personal message</span>
      <input type="radio" name="subject" value="other" checked><span>Don't know/something else</span>
    </label>

    <input type="checkbox" name="optin" value="trusting" checked>Subscribe me to your newsletter!
    <input type="checkbox" name="optout" value="skeptical" disabled>Cheeky checkbox...

    <label for="marketing">How did you hear about me?</label>
    <select name="marketing">
      <optgroup label="Online">
        <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
        <option value="github">Online Portfolio (GitHub)</option>
        <option value="search">Search Engine</option>
        <option value="email">Email</option>
      </optgroup>
      <optgroup label="In-Person">
        <option value="networking">We met at a networking event</option>
        <option value="referral">Personal referral</option>
        <option value="random">We met somewhere else</option>
      </optgroup>
      <option value="other">Other</option>
    </select>

    <textarea name="user_message" rows="8" cols="40"></textarea>
    <input type="submit">
  </form>
  ```
  Spend a little bit of time breaking and fixing the form above. Also try submitting the form... what happens?
5. Style the form a bit!
  + add `<br>` elements to separate inputs onto new lines
  + add some `<labels>` with either the wrapping syntax or the `for` attribute.
  + select individual inputs with the syntax `input[type="SPECIFIC TYPE HERE"]`. Types include `checkbox`, `radio`, and `text`.
  + try changing the `width`, `height`, `padding`, and `margins` of each element to make the form more read-able

---

### Network Traffic

When you submitted the form data, why was there an error in the console?
![network error](http://reactorprep.herokuapp.com/assets/images/network_tab.png)

The `action` attribute tries to `POST` data to a server somewhere, but there's no server specified, so things go haywire.This request-response cycle is the foundation of the internet! We're not going to mess with it very much, though. Instead, we'll use a service called [Formspree](http://formspree.io/) to act as a server for our contact form data.

![the internet!](http://reactorprep.herokuapp.com/assets/images/get_request.png)

---

### HTML5 Form Elements

HTML5 gives us fancy new input types. Give them all a try by setting the type attribute of an input element to the following:

+ color
+ date
+ datetime
+ datetime-local
+ file
+ email
+ month
+ number
+ range
+ search
+ tel
+ time
+ url
+ week

We can also use HTML attributes to change the behavior of form elements or do form validation to only allow users to submit the form when certain conditions are met. Try out a few:

+ disabled	-- Specifies that an input field should be disabled
+ max	-- Specifies the maximum value for an input field
+ maxlength	-- Specifies the maximum number of character for an input field
+ min	-- Specifies the minimum value for an input field
+ pattern	-- Specifies a regular expression to check the input value against
+ readonly	-- Specifies that an input field is read only (cannot be changed)
+ required	-- Specifies that an input field is required (must be filled out)
+ value	-- Specifies the default value for an input field

---

## Portfolio Project 3

Let's add some form validation to your contact form.

1. Mark all required fields with `required`.
2. Anything that isn't required should have a default `value`.
3. While not exactly form validation, it's very helpful to have a `placeholder` value for text inputs.
4. It can also be useful to check some boxes by default with `checked`.
5. Change your opening `<form>` tag to implement [Formspree](http://formspree.io/), like so:

  ```html
  <form action="//formspree.io/your.email@example.com" method="POST">
  ```
6. Once your new-and-improved form works like you would like, stage, commit, push and deploy your site.
7. When your site is live, test out your form! You should get parsed responses from Formspree as soon as you confirm your email address.

---

## CSS Layouts and Positioning
