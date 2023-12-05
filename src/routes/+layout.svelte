<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	import { Jumper } from 'svelte-loading-spinners';
	import { navigating } from '$app/stores';

	import { Navbar, NavLi, NavUl } from 'flowbite-svelte';

	$: activeUrl = $page.url.pathname;
	let activeClass =
		'text-white bg-blue-500 md:bg-transparent md:text-blue-700 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent';
	let nonActiveClass =
		'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

	let navItems = [
		{ id: 'Home', url: '/' },
		{ id: 'Skills', url: '/skills' },
		// { id: 'Blog', url: '/blog' },
		{ id: 'About', url: '/about' }
	];
</script>

<div class="visible xs:hidden">So smol</div>
<div class="invisible flex h-screen flex-col xs:visible">
	<Navbar class="flex-nowrap bg-gray-200 p-0">
		<div class="flex w-full flex-row justify-center">
			<NavUl
				hidden={false}
				{activeUrl}
				{activeClass}
				{nonActiveClass}
				class="w-auto"
				classUl="font-medium flex-row text-xl md:text-xl bg-gray-200 border-0 rounded-none mt-0 space-x-4 md:space-x-12"
			>
				<NavLi href="/">Home</NavLi>
				<NavLi href="/skills">Skills</NavLi>
				<NavLi href="/about">About</NavLi>
			</NavUl>
		</div>
	</Navbar>

	<div class="flex flex-1 flex-col overflow-y-auto">
		{#if $navigating?.to?.route.id === '/blog'}
			<div class="mt-16 flex flex-1 flex-col items-center self-center font-bold">
				<h1 class="mb-4">Loading blog ...</h1>
				<Jumper size="60" color="#FF3E00" unit="px" duration="1.5s" />
			</div>
			<!-- <div class="mt-16 flex-1 self-center">
			<Jumper size="60" color="#FF3E00" unit="px" duration="1s" />
		</div> -->
		{:else}
			<div class="flex-1">
				<slot />
			</div>
		{/if}

		<footer class="shrink-0 bg-gray-100 py-4 text-center text-black">
			Typescript, Tailwind and SvelteKit are Awesome 😎
		</footer>
	</div>
</div>
