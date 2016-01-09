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

Let's get our feet wet with `git` by configuring our user identity.

1. In any command prompt, type the following (using your name and email, of course):
```shell
$ git config --global user.name "Firstname Lastname"
$ git config --global user.email "your.email@example.com"
```
2. You can check all of your configuration settings by typing
```shell
$ git config --list
```

That wasn't so bad, right?

---


#### EXERCISE 2

`git` works by creating a folder within the 'working directory' (the directory that you would like to track/save over time). The first step to saving any project, then, is to navigate to this 'working directory' and create that `git` folder (named `.git`). Let's set up **two** `git` repositories to track over time.
1. First, navigate to your `SavvyCoders` directory.
2. Then, let's create a folder for all of your exercises and 'scratch work' throughout the course (HINT: `mkdir exercises`). Not every `git` repo has to be a website!
3. Navigate into the `exercises` directory, and create a Markdown file called `README.md`.
```shell
$ cd exercises
$ touch README.md
```
4. Use Atom to create a quick greeting for future viewers of your `exercises` directory in `README.md`. Just 3-4 sentences explaining who you are, what this folder is for, and a way of contacting you with questions.
5. Then, while still the `exercises` directory, type the following:
```shell
$ git init
```
6. That *should* have created a `.git` folder, which is hidden by default. There are two ways to make sure that our `git init` command worked. Try these both out:
  + list all of the hidden folders (including `.git`) in `exercises`:
  ```shell
  $ ls -a
  ```
  You should see a folder called `.git` in the output.
  + try running a simple `git` command:
  ```shell
  $ git status
  ```
  If you get `FATAL: exercises is not a git repository`, something has gone wrong. If everything worked, you should see something like this:
  ```
  $ git status
  On branch master
  Initial commit
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          README.md
  nothing added to commit but untracked files present (use "git add" to track)
  ```
7. Once `git` is *initialized* (`init` = initialize), we should be able start saving snapshots of our work. Before committing our work, though, we have to *stage* our changes. You can do that with the following command:
```shell
$ git add .
```
That `.` at the end is very important! That's telling `git` to stage everything in the working directory at once. To make sure that everything worked, type in `git status` again. You should get output that looks something like this:
```shell
$ git status
On branch master
Initial commit
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```
8. As nice as it is to get this far, we **still** haven't committed our changes yet. So we wouldn't be able to roll back to this point in the event of error, because README.md is still waiting to be fully committed. Let's do that with the following command:
```shell
$ git commit -m "First commit"
```
`git` forces us to create a *commit message* whenever a commit is made. This is a short snippet of text that helps you remember exactly what was changed in each commit. Normally committing and creating a commit are two different steps, but you can combine the two by adding the `-m` flag (for 'message'), followed by your custom commit message in quotation marks. If everything works as planned, you should see something like the following output:
```shell
$ git commit -m "First commit"
[master (root-commit) ee6ac27] First commit
 1 file changed, 3 insertions(+)
 create mode 100644 README.md
```

---

### Portfolio Project 1

Now we need to do the same thing with our Portfolio Project! One issue, though: we don't want to commit *everything* to `git` every time. Sometimes, we want to keep our configuration files or sensitive information on our local computer, so it wouldn't make sense to share that information with others through `git` and GitHub. One example we've already encountered is Firebase's configuration file, `firebase.json`. We want to ignore that file in our saves, so we're going to create a special file in our Portfolio Project directory that will automatically exclude that file from future commits.
1. Make sure you've navigated to your project folder (`FirstnameLastname`) from `exercises` (HINT: `cd ../FirstnameLastname`).
2. Next, create a hidden configuration file named `.gitignore` (HINT: `touch .gitignore`). This is a special kind of text file that `git` is always on the lookout for in working directories.
3. Inside your new `.gitignore` file, add the following on the first line:
```
firebase.*
```
...and that's it! Now `git` will always ignore any file (with any file extension) named `firebase`.
4. We still need to initialize, stage, and commit our changes, though! Repeat the processes from Exercise 2 to commit your Portfolio Project's changes. HINT: you'll need the following commands:
```shell
$ git init
$ git add .
$ git commit -m "First commit"
```
Congrats! You now have your first commit of your Portfolio project! Make sure to stage and commit changes after ***every feature*** (for most folks... about every 10 minutes).

---

### GitHub

While it's nice to have version control (through `git`) on your local machine, this still doesn't allow us to easily share or back up our code. To do that, we're going to use the GitHub accounts we created yesterday.

1. First, we need to create two new empty repositories. Both repositories should be *public*, and you shouldn't initialize the repo with a `README` or `.gitignore`. Be sure to name these repos something according to the following rules:
  + Make the title relevant to the content
  + Titles should be in all lowercase
  + Titles should be hyphen-separated (instead of space-separated)
  ![example new repo](../../images/github.png)
2. Next, we need to connect your local commits to this remote repository hosted by GitHub. Let's start with the `exercises` repository. Assume we named its GitHub counterpart `savvy-coders-exercises`. To start, we need to copy the HTTPS address of `savvy-coders-exercises` from GitHub. There should be a button to copy the URL of the remote repo, and it should look something like `https://github.com/YourExampleUsername/savvy-coders-exercises.git`.
3. We need to tell our local `git` instance to push to `savvy-coders-exercises.git`. To do that, we'll set up the hosted repo as a **remote** with the following command:
```shell
$ git remote add origin https://github.com/YourExampleUsername/savvy-coders-exercises.git
```
Note that you'll need to have navigated into your local `exercises` directory already, and that your URL is obviously going to be different (and include your personal GitHub username).
4. You can check to make sure that you have the remote set up correctly by typing `git remote`. If the CLI outputs `origin`, the command worked!
5. Now we need to **push** our local commit (called 'First commit', containing only the README.md file) to the remote repository. To do that, enter the following command:
```shell
$ git push origin master
```
6. If that worked, you should see your README.md file appear in your GitHub GUI after a page refresh. Now you have two copies of your `git` repository... nice work!
7. Repeat steps 2-6 for your Portfolio Project, too! Once that's pushed to GitHub, share the URL on Slack with your classmates.
8. Be sure to star your classmates' repositories to keep track of their progress through GitHub!

---
