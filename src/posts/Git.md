---
title: 'Git Things'
date: '2022-01-10'
slug: 'hello git notes'
tags: ['version control', 'git', 'github']
---

<h1>Git Things</h1>

<h2>Table of Contents</h2>

[TOC]

# Branch

## List branches

```bash
$ git branch ( -r | -a )
```

- pass no parameters to see only local branches
- use -r to see only remote branches
- use -a to see all local and remote branches

## Create local branch

```bash
$ git branch <branch>
```

## Rename local branch

```bash
$ git branch (-m | -M) [<oldbranch>] <newbranch>
```

M is used to force rename if the new branch already exists

## Delete local branch

```bash
$ git branch ( -d | -D ) <branch>
```

Use -D to force delete even if it has unmerged changes

## Delete remote branch

```bash
$ git push -d <remote_name> <branchname>
```

# Checkout

## Switch to another existing local branch

```bash
$ git checkout <existing-branch>
```

## Create and switch to another local branch

Create a new branch from an existing branch

```bash
$ git checkout -b ＜new-branch＞
```

Create a new branch from a different branch or commit

```bash
$ git checkout -b ＜new-branch＞ ＜existing-branch-or-commit＞
```

## Pull down and track remote branch

Pull down branch from remote server and track it

```bash
$ git checkout --track origin/dev
```

or

```bash
$ git checkout -b ＜localbranch＞ origin/＜remotebranch＞
```

# Track

## Tell local branch to track existing remote branch

Tell the branch you are on to track an existing remot branch

```bash
$ git branch -u <remote_name>/<remote_branchname>
```

for example with remote `origin` and remote branch `dev`

```bash
$ git branch -u origin/dev
```

## Push local branch to the remote server for the first time and track it

```bash
$ git push -u <remote_name> <branchname>
```

# Fetch

**Fetch** the `master` branch from the remote `origin`. The `master` branch on `origin` will be fetched and the local representation of it will be named `origin/master`

```bash
$ git fetch origin master
```

Fetch multiple branches by name. They will be saved locally and called `origin/master`, `origin/stable`, `origin/oldstable`

```bash
$ git fetch origin master stable oldstable
```

# Merge

**Merge** `origin/master` into your current branch

```bash
$ git merge origin/master
```

Merge multiple branches into the current branch

```bash
$ git merge origin/master hotfix-2275 hotfix-2276 hotfix-2290
```

- All of the branches listed are being merged into the current branch that is not listed as it is implicitly known as it is the checked out branch.
- The branch `origin/master` is a local representation of the remote `origin` branch `master` .
- The branches `hotfix-2275`, `hotfix-2276` , `hotfix-2290`are all local branches.

# Pull

**Pull** is a short cut for combining Fetch and Merge

```bash
$ git pull origin master
```

# Push

**Push** your new changes in your current branch back to the remote (`origin`) branch `master`

```bash
$ git push origin master
```

# Log

A tidy way to show commit history

```bash
$ git log --graph --decorate --pretty=oneline --abbrev-commit
```

# Merge

## Resources

https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging

https://www.atlassian.com/git/tutorials/using-branches/git-merge

https://www.youtube.com/watch?v=CRlGDDprdOQ

Merge feature branch into current branch

```bash
$ git merge <new-feature-branch>
```

## Three-way Merge

## Fast-forward Merge

## Squash Merge

### Resources

https://devblogs.microsoft.com/devops/squash-a-whole-new-way-to-merge-pull-requests/

https://docs.microsoft.com/en-us/azure/devops/repos/git/merging-with-squash?view=azure-devops

```
$ git merge
```

# Rebase

## Resources

https://git-scm.com/book/en/v2/Git-Branching-Rebasing

https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase

https://blog.carbonfive.com/always-squash-and-rebase-your-git-commits/

https://www.internalpointers.com/post/squash-commits-into-one-git

Git rebase in standard mode will automatically take the commits in your current working branch and apply them to the head of the passed branch (base branch).

```bash
$ git rebase <base_branch>
```

## Standard Rebase

## Squash Rebase

# Checkout

# Reset

# Merge Strategies

https://www.atlassian.com/git/tutorials/using-branches/merge-strategy

# Git Setup for Multiple SSH keys

# Git Setup

## Git config file

**Place in:**

**Windows:** `%userprofile%/.ssh/config`

**Linux:** `~/.ssh/config`

```bash
AddKeysToAgent yes

#Work Account
Host bitbucket.org-work
 HostName bitbucket.org
 User git
 IdentityFile ~/.ssh/id_rsa
 IdentitiesOnly yes

#Personal Account
Host bitbucket.org-personal
 HostName bitbucket.org
 User git
 IdentityFile ~/.ssh/id_personal_rsa
 IdentitiesOnly yes
```

## Project Git config file

**Place in** `%project_directory%/.git/config`

### Using a none-standard (id.rsa) shh key

```bash
[core]
    repositoryformatversion = 0
    filemode = false
    bare = false
    logallrefupdates = true
    ignorecase = true
[remote "origin"]
    url = git@bitbucket.org-personal:afreaka/udemy-stephen-grinder-modern-react-with-redux.git
    fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
    remote = origin
    merge = refs/heads/master
```
