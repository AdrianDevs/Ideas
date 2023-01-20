<h1>Useful Commands for Package Managers</h1>

[TOC]

# Chocolatey

List available packages

```bash
$ choco list
```

List installed packages

```bash
$ choco list --localonly
```

List packages that can be updated

```bash
$ choco outdated
```

Update Chocolatey

```bash
$ choco upgrade chocolatey
```

Update specific package

```bash
$ choco upgrade <pkg>
```

Update all packages including Chocolatey

```bash
$ choco upgrade all --noop
```



# Homebrew

Homebrew cheat-sheet: https://devhints.io/homebrew

List available packages

```bash
$ brew search
```

List installed packages

```bash
$ brew list
```

List packages installed using Homebrew Cask

- `brew cask` is an extension to `brew` that allows management of graphical applications through the [Cask](https://caskroom.github.io/) project.

```bash
$ brew list --cask
```

Show top level packages. That is packages that are not dependencies

```bash
$ brew leaves | xargs -n1 brew desc
```

View dependency tree for all installed packages

```sh
$ brew deps --tree --installed
```

A combination of the above two

```sh
$ brew deps --tree $(brew leaves)
```

To see upgradable brew packages :

```sh
$ brew outdated
```

To see upgradable cask packages

```sh
$ brew outdated --cask
```

Update Homebrew

```bash
$ brew update
```

Update specific package

```bash
$ brew upgrade <pkg>
```

Update all packages

```bash
$ brew upgrade
```

Diagnose Homebrew issues

```bash
$ brew doctor
```



# NVM

[Node Version Manager](https://github.com/nvm-sh/nvm) (NVM)

## Installing and Updating NVM

### Install & Update Script

To **install** or **update** nvm, you should run the [install script](https://github.com/nvm-sh/nvm/blob/v0.38.0/install.sh). To do that, you may either download and run the script manually, or use the following cURL or Wget command:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Running either of the above commands downloads a script and runs it. The script clones the nvm repository to `~/.nvm`, and attempts to add the source lines from the snippet below to the correct profile file (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```



## Uninstalling NVM

### Manual Uninstall

To remove `nvm` manually, execute the following:

```sh
$ rm -rf "$NVM_DIR"
```

Edit `~/.bashrc` (or other shell resource config) and remove the lines below:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[[ -r $NVM_DIR/bash_completion ]] && \. $NVM_DIR/bash_completion
```



## Update Node and NPM with NVM

```bash
$ nvm install node
```

If you want to install a new version of Node.js and migrate npm packages from a previous version:

```bash
$ nvm install node --reinstall-packages-from=node
```



# NPM and Yarn

## Summary of commonly used NPM and Yarn commands

| Command                  | npm                                  | yarn                           |
| ------------------------ | ------------------------------------ | ------------------------------ |
| Install dependencies     | `npm install`                        | `yarn`                         |
| Install package          | `npm install [package]`              | `yarn add [package]`           |
| Install dev package      | `npm install --save-dev [package]`   | `yarn add --dev [package]`     |
| Uninstall package        | `npm uninstall [package]`            | `yarn remove [package]`        |
| Uninstall dev package    | `npm uninstall --save-dev [package]` | `yarn remove [package]`        |
| Update                   | `npm update`                         | `yarn upgrade`                 |
| Update package           | `npm update [package]`               | `yarn upgrade [package]`       |
| Global install package   | `npm install --global [package]`     | `yarn global add [package]`    |
| Global uninstall package | `npm uninstall --global [package]`   | `yarn global remove [package]` |

## Identical commands

| npm                        | yarn                        |
| -------------------------- | --------------------------- |
| `npm init`                 | `yarn init`                 |
| `npm run`                  | `yarn run`                  |
| `npm test`                 | `yarn test`                 |
| `npm login` (and `logout`) | `yarn login` (and `logout`) |
| `npm link`                 | `yarn link`                 |
| `npm publish`              | `yarn publish`              |
| `npm cache clean`          | `yarn cache clean`          |

## NPX

`NPX` stands for Node Package Executor. It is a new addition to NPM version `5.2.0 or higher`. [NPX](https://www.npmjs.com/package/npx) helps you to execute one-off commands. With NPX, you can execute packages from the NPM registry without installing them to your project dependencies.

There are more features that you can benefit from using NPX. Check this [guide](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner.html) to learn more about [NPX](https://www.npmjs.com/package/npx).

## Yarn2 (Berry)

Yarn introduced [Yarn2](https://dev.to/arcanis/introducing-yarn-2-4eh1), nicknamed Berry. This new Yarn version has exciting [features](https://yarnpkg.com/features) such as [Plug’n’Play](https://yarnpkg.com/features/pnp/), Constraints, Offline installation, Zero install, Workspaces, and Yarn Dlx (the new Yarn NPX).

The most significant additions here are:

1. Plug’n’Play - This is an alternative installation strategy. Instead of generating a `node_modules` directory and leaving the resolution to Node.js, Plug’n’Play generates a single `pnp.js` file and lets Yarn tell us where to find our packages.

This means

- No more `node_modules`.
- Reduced package installation time up to 70%.
- Plug’n’Play will warn you when you forget to list your dependency.
- Faster project booting time.

Check this [guide](https://yarnpkg.com/features/pnp/) to learn more about Plug’n’Play.

1. Constraints - [Constraints](https://yarnpkg.com/features/constraints) offer a way to specify generic rules using prologue (a declarative programming language) to manage the dependencies in your project. This allows you to write rules and ensure that there are no conflicting dependencies in your repository.
2. Improved Workspaces - [Workspaces](https://yarnpkg.com/features/workspaces) allows you to create a `mono` repository to manage the dependencies across multiple projects. This allows multiple projects to cross-reference each other. Changes applied to one project repository are applied to the others.

Yarn2 differs a lot from [Yarn1](https://classic.yarnpkg.com/lang/en/). Check this [migration guide](https://next.yarnpkg.com/getting-started/migration) on how to switch from Yarn1 to Yarn2.
