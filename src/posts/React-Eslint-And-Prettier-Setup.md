---
title: 'Eslint and Prettier Setup for React Projects'
date: '2021-10-12'
slug: 'hello Eslint and Prettier'
tags: ['Eslint', 'Prettier', 'Linting']
---

<h1>Eslint and Prettier Setup for React Projects</h1>

How to setup up Eslint and Prettier for React projects so that you have code formatting and error checking on files saves and when commiting to Git.

<h2>Table of Content</h2>
[TOC]

## Resources

- ESLint (eslint): https://eslint.org/
- Prettier: https://prettier.io/docs/en/install.html
- Lint-Staged: https://github.com/okonet/lint-staged
- Husky: https://github.com/typicode/husky

## Visual Studio Code Extensions

Add the following extensions to VSCode:

- ESLint
- Prettier - Code formatter
- EditorConfig for VS Code (https://editorconfig.org/)

## Add Dependencies

### Linting Dependencies

- **eslint:** An AST-based pattern checker for JavaScript
- **@typescript-eslint/parser:** An ESLint custom parser which leverages TypeScript ESTree
- **@typescript-eslint/eslint-plugin:** TypeScript plugin for ESLint
- **eslint-plugin-react:** React specific linting rules for ESLint

- **eslint-plugin-react-hooks:** ESLint rules for React Hooks

### Prettier Dependencies

- **prettier:** Prettier is an opinionated code formatter
- **eslint-config-prettier:** make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier

### Git Hook Dependencies

- **lint-staged:** Lint files staged by git
- **husky:** Modern native Git hooks made easy

### Plugin Sorting Dependencies

- **import-sort-style-module:** An import-sort style that groups and sorts by module (Look at VS Code Extension)
- **prettier-plugin-import-sort:** Prettier plugin to pass javascript and typescript through import-sort

### Installing Dependencies

```bash
$ yarn add --dev <...dependencies>
```

Example with all above dependencies

```bash
$ yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier lint-staged husky import-sort-style-module prettier-plugin-import-sort
```

## Run Commands

Install husky and lint-staged:

```bash
$ yarn add --dev husky lint-staged
```

Setup husky and lint-stage:

```bash
$ yarn add --dev husky lint-staged
$ npx husky install
$ yarn set-script prepare "husky install"
$ npx husky add .husky/pre-commit "echo \"Running Husky pre-commit hooks\""
$ npx husky add .husky/pre-commit "npx lint-staged"
$ npx husky add .husky/pre-commit "yarn test"
```

Add the follwing to `package.json`:

```json
{
	"lint-staged": {
		"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": ["eslint", "prettier --write"]
	}
}
```

## Create Files

**Possible files**

- tsconfig.json
- package.json
- .eslintrc.js
- .eslintignore
- .prettierrc
- .prettierignore
- .editorconfig https://editorconfig.org/
- .husky/pre-commit

**Note:** When applying rules of ESLint if there is an `.eslintrc` file and a `package.json` file with a eslintConfig object, found in the same directory, `.eslintrc` will take priority and `package.json` file will not be used.

### TSConfig (tsconfig.json)

```json
{
	"compilerOptions": {
		"target": "es6",
		"lib": ["dom", "dom.iterable", "esnext"],
		"allowJs": true,
		"skipLibCheck": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"noImplicitAny": true,
		"forceConsistentCasingInFileNames": true,
		"noFallthroughCasesInSwitch": true,
		"module": "esnext",
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx",
		"baseUrl": "src",
		"outDir": "./build/",
		"sourceMap": true
	},
	"include": ["src"]
}
```

### PackageJSON (package.json)

```json
{
  "scripts": {
    "lint": "eslint \"./src/**/*.{ts,tsx}\"",
    "prepare": "husky install"
  },
  "importSort": {
    ".js, .jsx, .ts, .tsx": {
      "style": "module",
      "parser": "typescript"
    }
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "eslint",
      "prettier --write"
    ]
  }
```

### Eslint (.eslintrc.js)

```javascript
// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
```

### Prettier (.prettierrc)

```javascript
{
    "semi": true,
    "printWidth": 120,
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 2,
    "useTabs": false
}
```

### Editor Config (.editorconfig)

More info at https://editorconfig.org/

```javascript
# For more information about the properties used in
# this file, please see the EditorConfig documentation:
# http://editorconfig.org/

root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[makefile]
indent_style = tab

[*.md]
trim_trailing_whitespace = false

[*.{yml,json,js,jsx,ts,tsx,css,scss,less,html}]
# The indent size used in the `package.json` file cannot be changed
# https://github.com/npm/npm/pull/3180#issuecomment-16336516
indent_size = 2

```

### Husky Precommit (.husky/pre-commit)

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Running Husky pre-commit hook"
npx lint-staged
# yarn test
```
