## CLIs, GitHub, Markdown, and HTML
### Welcome to the first class!

The first priority is to make sure that everyone knows everyone else, knows all about the resources that Savvy Coders provides (email, phone contacts, Slack channels, and moral support of one's peers). Follow along in the slides to see get the hang of that process. *TIME SPENT: 15 minutes*

### Interfacing with Computers
The operating system is the program (series of instructions) that runs when you turn on your computer. It handles inputs (keyboard, mouse, camera, network connections) and outputs (monitor, speakers, network connections), manages shared access to computing resources and memory, and reads and writes data to the file system on behalf of any number of simultaneously running applications (web browser, code editor, text document, music player, etc). We interact with the computer through the operating system, usually by TYPING, TOUCHING, or CLICKING.

Computers can receive user input through either a command line interface (CLI) or a graphical user interface (GUI). In a command line interface (A.K.A. "Console", "Terminal", or "Shell"), the user types commands using the keyboard to tell the computer to take an action. The computer will display the results of the operation by writing text to the screen.

![Command-Line GIF](http://reactorprep.herokuapp.com/assets/images/cli.gif)

GOAL FOR THE COURSE: All navigation should be done using **words** instead of **pictures**.

> "When I was a child, I used a computer by looking at the pictures. When I grew up, I learned to read and write."
> -William Shotts, Jr.
> Linux Command.org

We will start out by using the CLI to navigate through the file system on our personal computers. The key is to think of the directory structure as a 'tree' with 'branches', rather than a bunch of 1s and 0s stored in memory. The OS abstracts all of that memory management away, so you and I can work directly with the human-facing interface we call a file structure.

![File Structure](http://savvycoders.com/class-slides/images/fs.png)

There are lots of applications that are built to be a command-line interface. Many of them are specific to different operating systems. The big ones:

+ *Linux*
  + sh = "shell" program
  + bash = "Bourne Again SHell"
+ *Mac*
  + Terminal
+ *Windows*
  + Command Prompt
  + PowerShell
  + cygwin
  + cmder
  + git bash

Windows users will be using a combination of git bash and PowerShell for this course.

---

#### EXERCISE 1
1. Download or Open relevant CLI for your OS
2. Download and install [git](https://git-scm.com/)

---

#### EXERCISE 2
1. Navigate to the desktop FOLDER in your OS's GUI (for the last time!)
2. Make a note of that folder's location, then repeat the process with your CLI
  1. print your starting location: `pwd`
  2. list the file structure: `ls`
  3. change directories: `cd`
  4. move up a directory: `cd ..`
  5. move to a specific directory: `cd [directory path]`
3. In your desktop folder, create a folder called `SavvyCoders` for all of your Savvy-related work! You can do that with the `mkdir` command (e.g. `mkdir SavvyCoders`).

---

### Atom
The text editor that we'll be using for this course is called [Atom](https://atom.io). It's a modular editor built for web development, maintained by GitHub, and contributed to by a large Open Source community.

---

#### EXERCISE 3
1. Install Atom from the link above
2. You can open Atom by typing `atom` in your CLI. *Note: Windows users will likely need to restart for this functionality.*
3. Open up the Settings in Atom (File > Settings or `ctrl + comma`)
4. Go to 'Install' and install the following packages:
  1. [open-in-browser](https://atom.io/packages/open-in-browser)
  2. [emmet](https://atom.io/packages/emmet)
  3. [script](https://atom.io/packages/script)
  4. [javascript-snippets](https://atom.io/packages/javascript-snippets)

---

#### EXERCISE 4
1. Navigate to your `SavvyCoders` directory using your CLI
2. You can open specific directories in Atom using the `atom` command from your command line! If you have already navigated inside the `SavvyCoders` directory, you can open folder using `atom .`
3. Also in your CLI, use the command `touch haiku.txt` to create a new text file named `haiku.txt` inside of `SavvyCoders`.
4. Write a short haiku using Atom! (And don't forget the 5-7-5 syllable structure):
    Haikus are easy,
    But endings are difficult.
    Refrigerator.

---

#### DEMO 1:

At this point, the instructor should demonstrate the difference between a `.txt` file and an `.rtf` or `.docx` (Rich Text) file in Atom. It's important for students to understand that Atom is only for plain-text, not Rich Text.

---

### Markdown

Formatted text is nice, but clicking buttons will never scale. We need to be able to programmatically describe how we want our text processed.

Markdown is a markup language. Markup languages mix in special sequences of coded characters to specify the intended layout and style of their text.

Copy this Markdown code into your Atom code editor and search for 'markdown preview' to have it parsed and rendered:

```markdown
# This is a header
## This is an even smaller header
### Even smaller...
###### Quite small

Here is some normal text. A paragraph, even!

*This text is in italics.*

**This text is in bold.**

***This text is in both.***

~~This text is rendered with strikethrough.~~

Sometimes you want to embed some \*stylized text\*
right into **your paragraph.** Pretty cool, right!

* Item
* Item
* Another item

or

+ Item
+ Item
+ One more item

or

- Item
- Item
- One last item


1. Item one
2. Item two
3. Item three

w/ sub-lists

1. Item one
2. Item two
3. Item three
    1. Sub-item
    2. Sub-item
4. Item four

---

[I'm a link to a web page!](http://www.google.com)

![alt text](https://i.imgur.com/81qyN1y.jpg)

![local photo](assets/profile.png)
```

#### EXERCISE 5

1. Now it's time to format haiku.txt with Markdown! Create a new file called `haiku.md` (HINT: `touch haiku.md`)
2. Create a title for your haiku and format it as a header with `#`
3. Italicize the first two lines with `* *`.
4. Italicize and bold the last line with `*** ***`.
5. Create a horizontal rule after the haiku using `---`.
6. Create a list of authors as an unordered list using `+ `.
7. Find a relevant photo online and insert it using the syntax `![ ]( )` (see the Markdown above for full syntax)

---

### GitHub
GitHub profiles are like a combination of LinkedIn and Facebook for developers, as well as a place to back up and store code. We'll learn more about how git and GitHub work later, but for now, it's important to create an account.

#### EXERCISE 6
1. Go to [GitHub](http://github.com) and create an account now!
2. Post your profile to Slack `#general` channel
2. Follow the profiles of your classmates and instructors
3. Create a new [gist](http://gist.github.com) of your `haiku.md` document
4. Share your gist on Slack, too!

---

### Portfolio Project

Over the course of this class, you are going to build a Portfolio Page to practice your skills, introduce yourself to others, and demo all of the exercises and challenges that you complete in the next 4 weeks. To get started on this project, do the following:

1. Make a new directory called `FirstnameLastname` (with YOUR first and last name, of course) inside the `SavvyCoders` directory. (HINT: `mkdir FirstnameLastname`).
2. Navigate into your Portfolio Project directory (HINT: `cd FirstnameLastname`) and create a new Markdown document called `greeting.md`.
3. Open `FirstnameLastname` in Atom (HINT: `atom .`) and start editing `greeting.md`.
4. In `greeting.md`, mock out a quick introduction for those stumbling upon your future Portfolio Project. Be sure to include:
  1. a picture of yourself
  2. a heading
  3. a greeting paragraph
  4. a list of quick facts about you
  5. a list of links to your social media profiles like:
    + GitHub
    + LinkedIn
    + Facebook
    + Twitter
5. Share your new greeting as a gist, then post it to Slack!

---

### HTML
HTML (Hyper-Text Markup Language) is a markup language for describing the structure and content of web documents (web pages). It is comprised of markup tags and text content nested inside each other.
![standard HTML structure](http://reactorprep.herokuapp.com/assets/images/html_breakdown.png).

HTML tags are keywords (tag names) surrounded by angle brackets:

#### `<tagname> content </tagname>`
+ HTML tags normally come in pairs like `<p>` and `</p>`
+ The first tag in a pair is the start tag, the second tag is the end tag
+ The end tag is written like the start tag, but with a slash before the tag name

By following the proscribed rules of HTML, a web browser understands this to be a document with a heading and a paragraph. Here is what the browser interpreter thinks when given (this code):
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```
+ The `!DOCTYPE` declaration defines the document type to be HTML
+ The text between `<html>` and `</html>` describes an HTML document
+ The text between `<head>` and `</head>` provides information about the document
+ The text between `<title>` and `</title>` provides a title for the document
+ The text between `<body>` and `</body>` describes the visible page content
+ The text between `<h1>` and `</h1>` describes a heading
+ The text between `<p>` and `</p>` describes a paragraph

---

#### EXERCISE 7

It's time to take a look at how browsers (like Chrome) render HTML content!
1. Open [example1.html](https://savvycoders.com/class-slides/class-materials/week-1/module-1/html/example1.html)
2. Open up Chrome's Dev Tools and take a look at Elements and their associated STYLES:
  ![dev tools](http://reactorprep.herokuapp.com/assets/images/elements.png)

3. ANSWER AS A GROUP:
  1. What `font-size` does the browser give an `<h1>` element by default?
  2. What `font-weight` does the browser give an `<h1>` element by default?
  3. How does the browser render the extra spaces and new lines in the last paragraph?
  4. Are there any parts of the body that are not rendered into the browser window?

---

### Portfolio Project 2

Now it's time to turn your `greeting.md` into a landing page for your portfolio site! Since browsers don't work with Markdown by default, we want to use HTML for our Portfolio on the web. Go through the following steps to get started:

1. Make sure that you're inside your portfolio project directory (called `FirstnameLastname`).
2. Once inside, we need to create our HTML file! We shouldn't call it `greeting`, though. All browsers look for an `index.html` file to display by default. You can name other pages whatever you'd like, but the landing page for every site should always be `index.html`. So let's create that file with `touch index.html`.
3. Edit `index.html` in Atom. Make sure that it includes the following BEFORE we start porting in text from `greeting.md`:
  1. `<!DOCTYPE HTML>`
  2. `<html>`,`<head>`, and `<body>` tags
  3. `<title>` tags and a title of `Firstname Lastname | Web Developer`

  *HINT: you can use emmet's HTML boilerplate by typing* `!` *then pressing* `TAB`

4. Then you can start moving content from `greeting.md` into `index.html`
  1. Use `<h1>` for headings
  2. Use `<p>` for paragraphs of text
  3. Use `<ul>` for unordered lists (and use `<li>` for each nested list element)
  4. Use `<hr>` to create an horizontal rule
  5. Use `<br>` to add extra line breaks between elements
  6. Make sure you've saved the file!
  7. To see what your page looks like, right-click on index.html in your directory tree (in the left-hand sidebar) and click 'Open in Browser'

  ---

### More HTML tags
#### EXERCISE 8
Open up [this page](https://savvycoders.com/class-slides/class-materials/week-1/module-1/html/example2.html) in Chrome and answer the following questions as a group:
1. What `font-size` does the browser give an `<h2>` element by default?
2. What `font-size` does the browser give an `<h6>` element by default?
3. What `font-style` does the browser give an `<em>` element by default?
4. What `text-decoration` does the browser give an `<a>` element by default?
5. What `list-style-type` does the browser give a `<li>` element?


#### Attributes
This link tag has an attribute whose name is `href` and whose value is a `url`:
![anchor tag](http://reactorprep.herokuapp.com/assets/images/links.png)

Attributes provide additional information about an element. They appear on the opening tag of the element and are made up of two parts: a **name** and a **value**, separated by an equals sign.

Image tags (`<img>`) have an attribute named `src` whose value is the location of the image to be displayed, like this:

```html
<img src="https://i.imgur.com/81qyN1y.jpg" alt="This text will show up, only if the image doesn't (also good for screen readers)">
```

---

### Portfolio Project 3

Let's expand on the landing page we've already made for our online portfolio!

While it's possible to link to HTML documents in your website with any name (as long as they have the `.html` file extension), it's generally considered best practice to create new directories for each page. At the root of each new directory should be another `index.html` file. This makes the URL prettier when users search your site, and it organizes things a bit better for future developers. Let's set up a 'Projects' page using this method:

1. If you're already in the Portfolio page's root (or top-level) directory, make a new directory called 'projects' (HINT: `mkdir projects`). Remember that different capitalizations are different addresses, so keep a consistent naming convention for all folders (i.e. don't capitalize any words, and separate multi-word directory names with hyphens, e.g. `my-favorite-directory` instead of `MyFavoriteDirectory`).
2. Now navigate into your newly-created projects folder (HINT: `cd projects`) and create another `index.html` file (HINT: `touch index.html`).
3. Use Atom to edit your new `projects/index.html` file.
  1. Set the page up just like any other HTML document (see the emmet shortcut).
  2. Give the page a `<title>` of `Firstname Lastname | Projects`.
  3. Add an **ordered list** (`<ol>`) of the following projects:
    + Class Showcase
    + Choose Your Own Adventure
    + Web Store Hack-A-Thon
4. Now go back to your landing page (`/index.html`), and edit that file to include the following:
  1. The profile image from `greeting.md`
  2. The social media links from `greeting.md`
  3. A "navigation list" at the top of your landing page, with links to 'Home' (`/`) and 'Projects' (`/projects`).
  4. At least one comment for future developers (or you!) using the syntax `<!-- comment text -->`
5. Make sure that your website is working locally using the open-in-browser plugin

---

### npm and Node

Installing libraries, toolkits, programs, and applications through installation wizards, icons, and GUIs is time-consuming, and there's no way of knowing how those installations will interact. Most projects will need at least a couple of external tools, and managing those installations across a team (or across multiple devices) can be a real pain.

That's why we need a **package manager** to help us install helpful tools from the command line! Two JavaScript tools will help us manage these extra 'packages':

1. [Node.js](https://nodejs.org/en/)
2. npm ('Node Package Manager')

Node.js allows JavaScript to be run outside of the browser. That means that we can use JavaScript to run programs on your local machine, on servers, and in development stacks of all types. One of those programs is **npm**, which helps us install packages and manage 'dependencies' (external code upon which our project depends).

#### EXERCISE 9
1. Install the latest 'stable' version of Node.js from their website. *Note: Windows users will need to restart after installation.*
2. To make sure that you've installed node correctly, type `node -v` into your CLI.
3. If you get an output that looks like `v4.0.0`, you're on the right track
4. npm comes packaged with Node.js, so you should also be able to type `npm -v` to get a version number for your npm installation.
5. If both of those work, you're all set up!

---

### Firebase

So far, we've just been working with files on our local machines. To push our local website to an actual website, we're going to use a service called [Firebase](https://firebase.com). Follow these steps to push your new Portfolio online!

1. Register an account with Firebase on [their website](https://firebase.com).
2. Use **npm** to install Firebase's command-line tools with the following command:
`npm install -g firebase-tools`
3. Once that has been installed, you'll need to authenticate your account and initialize your project with the following commands:
```shell
firebase login
firebase init
```
4. When you run `firebase init`, you will be guided through the creation of a configuration file called `firebase.json`. Make sure you answer the questions the following way:
  1. *What Firebase do you want to use?* : `[create new firebase]`
  2. *Name your new Firebase* : `firstname-lastname-portfolio`
  3. *Which directory should be the public root?* : `.` (<- that's a period, to indicate that we're using the current directory instead of one called 'public')
5. If everything from step 4 went as planned you should be able to deploy and open your site with:
```shell
firebase deploy
firebase open
```

And now you have your very own website! Congratulations.
