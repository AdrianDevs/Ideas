<script lang="ts">
	import '../app.css';

	import { Jumper } from 'svelte-loading-spinners';
	import { navigating } from '$app/stores';

	let navItems = [
		{ id: 'Home', url: '/' },
		{ id: 'Skills', url: '/skills' },
		// { id: 'Blog', url: '/blog' },
		{ id: 'About', url: '/about' }
	];
</script>

<div class="visible xs:hidden">So smol</div>
<div class="invisible flex h-screen flex-col xs:visible">
	<header class="relative space-x-6 bg-gray-200 py-2 text-center">
		{#each navItems as navItem (navItem.id)}
			<a
				href={navItem.url}
				class="rounded-lg px-3 py-2 text-xl font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
				>{navItem.id}
			</a>
		{/each}
	</header>

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
