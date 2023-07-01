<h1>Ideas</h1>

A Web-App that is about me, my knowledge and my dreams.



<h2>Tables of Contents</h2>

[TOC]

# Website Content

- Overview of myself and what I like to do
- A typescript blog of things I have learned
- Links to my other sites



# Technical Features

- Svelte
- SvelteKit
- Styling with Tailwind
- Linting with ESLint
- Git Hooks and Husky
- Unit tests with Vitest
- E2E test with Playwright
- Markdown blog with mdsvex



# Requirements

- Mac OS 13.1 or later
- Git
- VSCode
- Node v20.3.1 or later
- NPM 9.6.7 or later



# Setup

Download project

```sh
git clone https://github.com/AdrianDevs/ideas.git
```

Install packages

```sh
$ npm install
```



# Run Locally

**Running locally**

```sh
cd about-me
npm install
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

**Change Port**

Edit *package.json* in your project root and change `"dev": "svelte-kit dev"` to `"dev": "svelte-kit dev --port XXXX"` replacing XXXX with the port you want to use.

**Build for Production**

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.



# Deploying

Deploy the project to Vercel

**Deploy to UAT**

```sh
vercel 
```

**Deploy to PROD**

```sh
vercel --prod
```



# Update Dependencies

Audit packages for vulnerabilities and follow steps

```sh
$ npm audit
```

Check if packages are outdated

```sh
$ npm outdated
```

Use [npm-check-updates](https://www.npmjs.org/package/npm-check-updates). npm-check-updates upgrades your package.json dependencies to the **latest** versions, ignoring specified versions.

```sh
$ npm install -g npm-check-updates
$ ncu
```

Upgrade a project's package file:

```sh
$ ncu -u
$ npm install 
```

Check global packages:

```sh
$ ncu -g
```



# Useful Links

- [Svelte Tutorial](https://svelte.dev/tutorial/basics)
- [SevelteKit Docs](https://kit.svelte.dev/docs/introduction)
- Svelt Discor - https://discord.com/invite/svelte
- SveltKit Discord

