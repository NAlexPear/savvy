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

The rest of this post will be focusing on using a `.bashrc` file in your home directory to customize your `bash` terminal. This file is automatically loaded by your `bash`-flavored CLI ([most of the time](http://apple.stackexchange.com/questions/119711/why-doesnt-mac-os-x-source-bashrc)), and provides a lot of opportunity for customization of your command-line experience. You can tell a lot about a developer from their `.bashrc`... their organizational skills (or mild OCD), their creative impulses, their day job, or even their favorite colors. You can see mine [here](https://gist.github.com/NAlexPear/0d191b59b9828b72e28ec6508cec5f88). Feel free to copy it (or send me ideas on how to improve it!). It is, of course, a work in progress, like every `.bashrc` should be.

We'll go over a three things in this post. These `.bashrc` tips should apply to just about everyone that's made it this far:

1. Customizing your prompt.
2. Using `alias` to create custom shortcuts.
3. Using `bash` scripts to run a simple operation (in this case, syncing my `.bashrc` file to GitHub)

Let's get right to it!

---

___Preliminary Work___: if you have a terminal of some kind, you _probably_ have a `.bashrc` file in the root of your `$HOME` directory. Try a quick `ls -a ~` command (which lists all of the files in your default home directory), and check for a `.bashrc` file. If one already exists, you're in luck! Open up that file with your favorite text editor, and let's get started.

---

___The Prompt___: The default prompt for your terminal is probably some variation of the following:

```shell
username@computer-name:~$
```

This is, of course, colorless (boring!), and doesn't tell you much of anything. We can assume that you already know your username, and you're aware of which computer you're using, so that info isn't terribly helpful. It's nice to see the `$`, which tells us that the console is waiting for some sort of input, but that's about it. As it turns out, we can add a _lot_ more information to this prompt! As an example (representative only of _my_ personal preferences, and by no means the Perfect Prompt), here's the current version of my prompt as it appears on-screen:

<img src="{{site.baseurl}}/theme/images/blog/prompt.png" width="50%">





/
