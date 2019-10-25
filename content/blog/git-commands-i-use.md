---
title: "Git Commands I Use Every Day"
date: 2019-10-24T21:12:19-07:00
description: "Git commands I use on a regular basis."
---

I use git everyday in my job as a software developer. I generally use git from the command line. This is a list of commands I use regularly. I also use git directly from with IDEs like IntelliJ or code editors like Visual Studio Code.

<!--more-->

#### git checkout release
This will change my working directory to this existing branch. I use this all the time to switch between branches.

#### git checkout -b feature2
This will create a new branch. Generally this is the first thing I do when I am about to start a new piece of work. It keeps everything isolated until I am ready to merge it to one of the main branches.

#### git fetch
This is the most basic command I use multiple times a day. It will go out to the remote repository and copy down anything new to my own local git repo. The most important thing about this command is that it does not make any changes to my working directory. I use to the take a look at what has changed in the main remote git repo and want to ensure I don't modify anything locally. 

#### git pull
This will retrieve the latest changes from the remote version of the branch I am working on and bring my branch up to date with it. This technically does two commands. It does git fetch and then git merge. I usually only do this if I know I have no commits on the branch that I haven't committed. If that is the case then I use git pull --rebase instead.

#### git pull --rebase
If I have local commits that I have not pushed yet and someone else already pushed changes to the same branch then doing a git pull would merge my commit to the remote commit. I prefer to use git pull --rebase  which will take my commit, or commits, and put them on top of whatever new commits have been added to the remote branch. I like this better since I don't have merges everywhere in the history. This only happens when there is multiple people working on the same branch at the same time. Generally this doesn't happen too often since myself and my team generally use feature branches that we work on individually. 

#### git add .
Add all the modified and new files to the index so that they can be checked in. Generally most IDEs provide a good UI for doing this so I just do it there. It's easier to pick and choose the changes to add visually rather than using git diff and then git add filename.

#### git commit
This commits any files that have been added to the index. Again most IDEs provide a good UI for this so it's easier to just do it there. I do however use the command line for merges and rebases so I still need to commit by command line sometimes. On Windows I use 
<a href="https://git-scm.com" target="_blank">git bash</a> and by default it opens Vim to enter the commit message. Press 'I' to enter insert mode. Enter the text and then hit 'Esc' and press ':wq' to save the text entered.

#### git commit --amend
This works the same as git commit except that it just reopens the previous commit and modifies it with the new changes. Since this is changing history I only do this for branches I work on by myself or for commits that I haven't pushed yet.

#### git status
Gives a quick look at what files have been added or modified locally.

#### gitk --all
I use this a lot to get a visual view of all the different branches. Especially when I need to do a merge. I always take a look at what changes are in each branch and how they are connected. There are other GUIs that available but this is built in and I find it good enough to get a good overview of things. I also can pick files and run the external diff tool to see the changes. I usually have <a href="https://www.scootersoftware.com/" target="_blank">Beyond Compare</a> setup as the external diff tool.

#### git merge release
If I have a long running feature branch I try to keep it up to date with the main branches. If I have a lot of changes in my feature branch it is usually easier to just do a normal merge. In the case of only having a few commits I'll use get rebase release instead.


#### git rebase release
This will take all the commits in my current branch and replay them on top of the release branch. This rewrites history so I don't do this on any shared branches, only a branch where I am the only one working on it.

#### git push
This will push my local commits on a branch to a remote branch. These changes will then be available for others to view and pull to their local repo.

#### git push -f
This will force push my local commits on a branch to a remote branch. I do this if I have rebased any changes locally, or amended any changes locally and want those changes reflected remotely. I only do this if I am the only one using the branch, otherwise it will cause issues if someone else pulls this branch.

#### git push --set-upstream origin feature2
This will push my local branch and set the remote as upstream. Basically this pushes a branch that only exists locally to the remote git repo. Now other people will be able to pull this branch to their own local repo.

#### git stash
This puts all my local changes that have not been commited into a temporary stash. This is handy if you are quickly switching to another branch and just want to temporarily save your changes to come back to straight away. If I am going to be doing something more long term I prefer to just commit my changes as a normal checkin.

#### git stash pop
This gets the last stashed changes and applies the changes to my local branch. 

## Less regular commands

#### git clone https://github.com/anthonyoconnor/aoc.git
This will copy a remote git repo to your local machine. I only need to do this once for each project so, although it's important it's not something I need to do every day.

#### git merge --squash feature1
This will take all the changes in feature1 branch and squash them into one new commit on the current branch. The original feature1 branch is unaffected. When I have a few changes in a feature branch that were mainly work in progress changes I will sometimes squash merge these changes to make the history cleaner and clearer.

#### git branch -d feature2
This deletes a local branch. It will give a warning if the branch has not been merged. In this case you can use the -D flag if you really want to delete it. Deleting the local branch does not delete the remote branch. I generally do this after merging a feature branch to another branch. 

#### git push origin --delete feature2
This deletes a remote branch. I like to remove old branches that are no longer used.

#### git remote prune origin
This will remove any remote branches from the local repo that have been deleted in the remote repo. When you do a pull it does not delete any branches that no longer exist in the remote repo. Generally I run this on a repo every few weeks, or if I know there has been some branch cleanup done on the remote repo.

#### git difftool
Shows the diff of any files modified locally. I usually have <a href="https://www.scootersoftware.com/" target="_blank">Beyond Compare</a> setup as my compare tool. However most of the time I just look at the diffs in whatever IDE I happen to be using at the time.

#### git rebase -i HEAD~4
This allows me to rewrite history in the current branch. I can squash changes together, reorder changes or even remove changes altogether. This can be useful to do before I send code to be reviewed. Sometimes there is some tidy up that can make the review easier to carry out. If there are lots of small changes like 'fixed typo' or there was some discovery work which lead to things being deleted and added back again then it can be worth rebasing. I would do this on a branch that has a lot of commits where it doesn't make sense to squash merge it all into one commit.