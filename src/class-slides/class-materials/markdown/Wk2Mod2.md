## HTML5, style, git, and CSS
### Getting stylish

At this point, everyone should have the first version of their personal portfolio website deployed through Firebase. As cool as that is, though, there's still just **one** local copy of the website. And there are no save states to revert to in case that copy develops breaking bugs (which is part of the learning process!). Luckily, we have a few tools already installed to help us out with this problem.

### Version Control with `git`
To help us maintain, back up, and share our codebases, we're going to use `git` (the command-line tool) and GitHub (the online repository). These tools are fundamental parts of the web developer's workflow, and you'll be using them *every day* for the rest of your programming career!

`git` works a bit like Apple's Time Machine, in the sense that you'll be able to revert to any saved state within a directory. So if you mangle your site's directory structure, you can always use `git` to revert back to simpler times. The important things to understand about `git` specifically, though:
1. This is a CLI utility, so get ready for lots of text. All of our important files when programming will be text, so its only natural that we'd be navigating between save states (called 'commits') using text as well.
2. Arbitrarily or automatically saving code is NOT a feature of `git`, and it shouldn't be. You only want to save meaningful chunks of code (e.g. a feature), not broken pieces here and there. Otherwise, there's no way to revert back to a useful save-state!
3. Because of point \#2, 'saving' your progress with `git` is handled a bit differently. *You* are in charge of 'staging' your commits, and 'committing' changes only when *you* are ready.

![the git commit workflow](https://git-scm.com/images/about/index1@2x.png)

#### EXERCISE 1

`git` works by creating a folder within the 'working directory' (the directory that you would like to track/save over time). The first step to saving any project, then, is to navigate to this 'working directory' and create that `git` folder (named `.git`). Let's set up **two** `git` repositories to track over time.
1. First, navigate to your `SavvyCoders` directory.
2. Then, let's create a folder for all of your exercises and 'scratch work' throughout the course (HINT: `mkdir exercises`). Not every `git` repo has to be a website!
3. Navigate into the `exercises` directory, and create a Markdown file called `README.md`.
```shell
$ cd exercises
$ touch README.md
```
4. Use Atom to create a quick greeting for future viewers of your `exercises` directory in `README.md`. Just 3-4 sentences explaining who you are, what this folder is for, and a way of contacting you with questions.
5.
