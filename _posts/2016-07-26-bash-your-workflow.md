---
layout: post
title: Bash Your Workflow
author: Alex
date: 2016-07-26
published: yes
---


# _Bash your Workflow:_

<h3 class="subheading">Getting your Environment Right</h3>

---

_This post is part of Savvy Tips, a series of technical posts about how to improve your skills as a developer, written by our very own Alex Pearson, Head Instructor of the St. Louis cohort._

---

> When you are a child you use a computer by looking at the pictures. When you grow up, you learn to read and write

As snarky as it sounds, I _love_ the above quote (from William Shotts of [linuxcommand.org](http://linuxcommand.org/learning_the_shell.php)). The change from interacting with your computer through click-able pictures and icons to using the text-based command line is a big one, but an important paradigm shift for anyone looking to use their computer as a tool. These "power users" using the command line aren't _just_ developers and programmers, but the category of people that has put in the time to make the transition to the terminal certainly includes aspiring Web Developers.

If you're wondering where to start in your programming career, learning some basic commands for your operating system's command-line interface (or CLI) is a great place to start. If you're going to interact with computers through HTML, CSS, and JavaScript, you should certainly know how to navigate to files, copy data between locations, keep track of save states with a version control system like `git`, and use basic command-line programs. There's a reason we cover these things in the very first day of class at Savvy Coders!

---

If you've already gotten through some of those basics, though, it might be time to start streamlining other parts of your workflow. Contrary to popular belief, programming is supposed to make your life _easier_, even if it's intimidating at first. This extends to the command line, which supports a robust scripting language of its own. The real maestros of the development world can do some [incredible things with these scripts](https://www.jitbit.com/alexblog/249-now-thats-what-i-call-a-hacker/) (slight language warning on that link, but it's a funny story that's worth a read anyway). While these legends are a bit apocryphal, they speak to the power of the terminal and its associated scripting languages.

But where to get started? Maybe you're not yet ready for one-button deploys of your million-dollar app or heavy-duty database management without a GUI, and that's OK. The first step towards script-guru status is probably to start with the basics: the way your terminal looks, feels, and behaves, plus a few simple automations. Your _environment_, if you will.

---

___Important Disclaimer___: while the principles described in this post are applicable to a variety of different command-line environments, this post is specifically about using `bash` (Bourne Again SHell), a particular kind of CLI. There are many different terminal emulators and applications out there on a variety of operating systems, from the Command Prompt and PowerShell on Windows, to `sh` and `fsh` and `zsh` on \*nix systems (including Mac), to Mac's default terminal emulator (which is a `bash` prompt in login-mode). All of these tips should work with the default terminals for Mac or Linux variants, and will work with bash emulators of many kinds on Windows (see [git-bash](https://openhatch.org/missions/windows-setup/install-git-bash) and, soon [Bash on Ubuntu on Windows](https://blogs.msdn.microsoft.com/powershell/2016/04/01/bash-for-windows-why-its-awesome-and-what-it-means-for-powershell/) in Windows 10). For Windows users, don't forget that there are also lots [virtualization solutions](https://www.virtualbox.org/wiki/Downloads) for more, shall we say, _powerful_ development with Linux (/end fanboy-ism).

---

The rest of this post will be focusing on using a `.bashrc` file in your home directory to customize your `bash` terminal. This file is automatically loaded by your `bash`-flavored CLI ([most of the time](http://apple.stackexchange.com/questions/119711/why-doesnt-mac-os-x-source-bashrc)), and provides a lot of opportunity for customization of your command-line experience. You can tell a lot about a developer from their `.bashrc`... their organizational skills (or mild OCD), their creative impulses, their day job, or even their favorite colors. You can see mine [here](https://gist.github.com/NAlexPear/0d191b59b9828b72e28ec6508cec5f88). Feel free to copy it (or send me ideas on how to improve it!). It is, of course, a work in progress, like every `.bashrc` should be. Much of this prompt was derived from [this bash file](http://tldp.org/LDP/abs/html/sample-bashrc.html) from tldp.org, for those looking for a _much_ more advanced `.bashrc` file to play around with.

We'll go over a three things in this post. These `.bashrc` tips should apply to just about everyone that's made it this far:

1. Customizing your prompt.
2. Using `alias` to create custom shortcuts.
3. Using `bash` scripts to run a simple operation (in this case, syncing my `.bashrc` file to GitHub)

Let's get right to it!

---

___Preliminary Work___: if you have a terminal of some kind, you _probably_ have a `.bashrc` file in the root of your `$HOME` directory. Try a quick `ls -a ~` command (which lists all of the files in your default home directory), and check for a `.bashrc` file. If one already exists, you're in luck! Open up that file with your favorite text editor, and let's get started.

---

___The Prompt___: The default prompt for your terminal is probably some variation of the following:

{% highlight bash %}
username@computer-name:~$
{% endhighlight %}

This is, of course, colorless (boring!), and doesn't tell you much of anything. We can assume that you already know your username, and you're aware of which computer you're using, so that info isn't terribly helpful. It's nice to see the `$`, which tells us that the console is waiting for some sort of input, but that's about it. As it turns out, we can add a _lot_ more information to this prompt! As an example (representative only of _my_ personal preferences, and by no means the Perfect Prompt), here's the current version of my prompt as it appears on-screen:

<figure class="highlight">
    <code class="language-bash" data-lang="bash">
        10:22:47 <span class="ok">(master) </span><span class="err k">~/Code/savvy </span><span class="gr k">-></span>
    </code>
</figure>

_Pretty sweet right?_ OK, probably not something to write home about, but I think this version of my `$PS1` (or `bash` prompt) has a couple of nice features:

1. Colors! And font-weights! These sound silly, but color is just another dimension of readability that can help you digest information. It's the same reason we have syntax highlighters for code. In this case, the colors get brighter and bolder as the importance of the colored thing increases.
2. A time stamp! Sometimes I like to be able to quickly see when I ran a command ("Has this command been running for 12 minutes already? Maybe something's wrong"). But while the timestamp is nice, it's not, as they say "mission-critical". Hence the muted color scheme and inconspicuous position on the left-hand side.
3. `git` integration! Yep, that's my current `git` branch (and yes, I'm making edits directly to the `master` branch because I like excitement and danger in my life) with an added color dimension: the branch name turns red when there are uncommitted changes, and green once everything in the current working directory has been committed.
4. A real working directory! As you can tell by the obnoxious coloration, I think this is the most important part of the prompt. As Buckaroo Banzai said: "No matter where you go, there you are". So, it's nice to know where that _is_.
5. A little arrow, which I happen to like better than the traditional dollar sign, but which isn't terribly exciting. For those interested, I like `->` more than `$` because a lot of `bash` involves variables, and `bash` variables usually include a dollar sign (see the aforementioned `$PS1` or the soon-to-be mentioned `$HOME`).

If you want to use this _exact_ prompt, you'll need to copy over the relevant color variables from lines 63-103 of my `.bashrc`, followed by this thing:

{% highlight bash %}
export PS1=$IBlack$Time12h$Color_Off'$(git branch &>/dev/null;\
if [ $? -eq 0 ]; then \
  echo "$(echo `git status` | grep "nothing to commit" > /dev/null 2>&1; \
  if [ "$?" -eq "0" ]; then \
    echo "'$Green'"$(__git_ps1 " (%s)"); \
  else \
    echo "'$IRed'"$(__git_ps1 " (%s)"); \
  fi) '$BIYellow$PathShort$BIRed' ->'$Color_Off' "; \
else \
  echo " '$Yellow$PathShort$BIRed' ->'$Color_Off' "; \
fi)'
{% endhighlight %}__ __ __ __

This looks complicated (and it is), but we can walk through what's going on here at a really high level:

1. We're `export`ing a new value for the default `$PS1` with `export PS1=`.
2. We're using some of those saved [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) to set the color of a 12-hour timestamp with `$IBlack$Time12h$Color_Off`.
3. A quick re-routing of the output from the `git branch` command (which should be a list of available branches) to the [null device](https://en.wikipedia.org/wiki/Null_device) (which is a way of saying "don't show this output on the screen, but keep it in memory for processing later") with `$( git branch &>/dev/null;`
4. Process the output from `git branch` and check to make sure that it's a "success" (code `0`). If the current directory isn't a git repository, then `git branch` will throw an error (which will _not_ equal 0). `$?` refers to the last command and `-eq` checks for equality. If this check fails, the `else` condition simply `echo`s (or outputs) the colorized path (with `$Yellow$PathShort`) followed by the red arrow (`$BIRed ->$Color_Off`);
5. If the `if [ $? -eq 0 ]` check _passes_, then a similar check is performed using the `git status` command. If everything is up to date, we expect output that includes the words "nothing to commit". So a search is performed on the output of `git status` using `grep`, the output is sent into the ether of `/dev/null`, and the success/failure of the `grep` search is checked. If there's something to commit, a red `git` prompt is shown with `echo "$IRed$(__git_ps1 (%s))";`. The same is done in green if everything is up to date.

The specific syntax is, of course, a bit tricky, but also beyond the scope of this article. For now, copy and paste this prompt from the previously-linked gist, and see if you can change the variables/colors to your liking! If you'd like to customize your $PS1 further, there are also great starting points to be found in the many [bash generators](http://bashrcgenerator.com/) available online, as well as additional resources available for understanding the available [special characters](https://linuxconfig.org/bash-prompt-basics).

---

___Aliases___: There are some commands that you're repeating _all the time_ during the development process. Commands like `git status`, `git add .`, `git commit -m "some message"` (you're using these all the time, right? __Right?!__). They can be pretty tiresome to type all the time, so we can cut them down to size with the `alias` keyword. Here are a few of mine:

{% highlight bash %}
alias gs="git status"
alias gb="git branch"
alias ga="git add -A"
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias apache-res="sudo service apache2 restart"
{% endhighlight %}

Try out a few, and see how much easier your life gets (almost immediately). Especially great are those strings of commands that can be a pain to type out, but are often repeated (see `sudo service apache2 restart` for working with Apache configurations or ). Those characters make a difference!

But what about commands that take some sort of input? Just like with JavaScript, we can make a function that acts as an alias for larger commands! Here are a few from my `.bashrc`:


{% highlight bash %}
commit() {
  git commit -m "$1";
}
cherry-pit() {
  git rebase -p --onto $1^ $1;
}
{% endhighlight %}

The first function saves a few characters, which is nice, and you can add in that commit message as an input through the `$1` variable. So `git commit -m "some message"` becomes `commit "some message"`. Neat! `cherry-pit()` is where things start to get interesting. This is my favorite little workaround for those times when you would like to selectively toss out a commit from a few minutes, hours, or days ago. It's an entirely new `git` function that takes a commit SHA and rebases it in such a way that it gets wiped out from the final commit history. Pretty cool! But these are just cracking the surface of what you can do with your own functions, reducing an entire string of commands into a single word input.

---

___Task Automation___: Hopefully you're starting to see the power behind these bash functions, and how these tiny little quality of life improvements can help you really up your development game! To give you a hint at that future power, I'll dissect one of the bash scripts I use all over the place in some form or another to push files to a "shared" location. This can be pushing files to GitHub, syncing development files between machines, or even deploying a website to a server (just like the server that's serving up this blog post). Let's take a look:

{% highlight bash %}
sbash() {
    BashPath="$HOME/Code/gists/env/"
    cat $HOME/.bashrc > $BashPath.bashrc && git -C $BashPath add .bashrc && git -C $BashPath commit -m "Update .bashrc" && git -C $BashPath push origin master
}
{% endhighlight %}

This one command will automatically save, stage, commit, and push a copy of my `.bashrc` file to my GitHub account from any working directory. Not bad for a single `sbash`! Let's break down what this does piece by piece:

{% highlight bash %}
BashPath="$HOME/Code/gists/env/"
{% endhighlight %}

Here, a local variable is saved that equals the path to the folder that contains a copy of the `.bashrc` file to push up as a gist later. Here I'm using the environment variable `$HOME`, but could also have written this path as `~/Code/gists/env`. In this case, using `$HOME` lets me temporarily change the target of all of these operations.

{% highlight bash %}
cat $HOME/.bashrc > $BashPath.bashrc
{% endhighlight %}

This overwrites the contents of the `.bashrc` file stored in the directory found at `$BashPath` with the contents of my main `.bashrc` file. This statement is then followed by (and connected by `&&` to ensure completion of each task synchronously) this statement:

{% highlight bash %}
git -C $BashPath add .bashrc
{% endhighlight %}

The `-C` flag lets us specify a directory other than our working directory through which to perform the `add` command. In this case, we're restricting our `add` command to the `.bashrc` file.

{% highlight bash %}
git -C $BashPath commit -m "Update .bashrc"
{% endhighlight %}

This uses the same `-C` flag to commit the changes with a commit message of "Update .bashrc". If I wanted to change this to accept an input for different commit messages, I would just change the current message to `"$1"` and execute `sbash` with a commit message as the very next argument.

{% highlight bash %}
git -C $BashPath push origin master
{% endhighlight %}

And, finally we push to the `master` branch. Once again, we could specify a different remote and branch with `$2` and `$3` if we were so inclined (but, for a single file like this, I am _not_ so inclined).

All of that gets abstracted away behind a single `sbash`, too. What a great win for future-you's productivity!

What do you wish you could abstract away to make your life as a developer easier? What are those processes that you perform every day that ought to be done automatically? Maybe the solution can be found in your `.bashrc`... give it a whirl, and post any questions, comments, or solutions to the comment section.

Good luck, and have fun `bash`-ing your environment!
